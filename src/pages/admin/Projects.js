import { useMemo, useState } from 'react';
import { Plus, Pencil, Trash2, ExternalLink, X, Save } from 'lucide-react';
import { getProjects, saveProjects, useLocalCollection } from '../../services/localStore';
const readProjects = () => getProjects();
const emptyForm = { title: '', category: '', description: '', type: 'Website', url: '', accent: 'lavender' };
export default function Projects() {
  const projects = useLocalCollection(readProjects);
  const [form, setForm] = useState(emptyForm);
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => projects.filter(p => `${p.title} ${p.category}`.toLowerCase().includes(query.toLowerCase())), [projects, query]);
  const update = e => setForm(current => ({ ...current, [e.target.name]: e.target.value }));
  function openAdd() { setEditing(null); setForm(emptyForm); setShowForm(true); }
  function openEdit(index) { setEditing(index); setForm({ ...emptyForm, ...projects[index] }); setShowForm(true); }
  function submit(e) {
    e.preventDefault();
    const clean = { ...form, title: form.title.trim(), category: form.category.trim(), description: form.description.trim(), url: form.url.trim() };
    if (!clean.title || !clean.category || !clean.description) return;
    const next = [...projects];
    if (editing === null) next.push(clean); else next[editing] = clean;
    saveProjects(next); setShowForm(false); setForm(emptyForm); setEditing(null);
  }
  function remove(index) {
    if (!window.confirm(`Delete “${projects[index].title}” from the portfolio?`)) return;
    saveProjects(projects.filter((_, i) => i !== index));
  }
  return <section className="admin-module">
    <div className="module-heading"><div><span className="eyebrow">PORTFOLIO CONTENT</span><h1>Manage <em>projects.</em></h1><p>These projects appear on the Home and Work pages.</p></div><button className="button button-primary" onClick={openAdd}><Plus size={17}/> Add project</button></div>
    <div className="module-toolbar"><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search projects..."/><span>{filtered.length} project{filtered.length === 1 ? '' : 's'}</span></div>
    <div className="admin-project-list">{filtered.map(project => { const index = projects.indexOf(project); return <article className="admin-project-row" key={`${project.title}-${index}`}><div className={`admin-project-thumb ${project.accent || 'lavender'}`}><b>{project.category?.slice(0, 2).toUpperCase()}</b></div><div className="admin-project-info"><span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p>{project.url && <a href={project.url} target="_blank" rel="noreferrer">Open project <ExternalLink size={13}/></a>}</div><div className="admin-row-actions"><button title="Edit project" onClick={() => openEdit(index)}><Pencil size={16}/></button><button title="Delete project" onClick={() => remove(index)}><Trash2 size={16}/></button></div></article>; })}{filtered.length === 0 && <div className="admin-empty">No projects found. Add your first project.</div>}</div>
    {showForm && <div className="admin-modal-backdrop" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) setShowForm(false); }}><form className="admin-modal" onSubmit={submit}><div className="admin-modal-head"><div><span className="eyebrow">PORTFOLIO</span><h2>{editing === null ? 'Add project' : 'Edit project'}</h2></div><button type="button" onClick={() => setShowForm(false)} aria-label="Close"><X size={20}/></button></div><label>Project title *<input name="title" value={form.title} onChange={update} required placeholder="e.g. Business Website"/></label><div className="admin-form-grid"><label>Category *<input name="category" value={form.category} onChange={update} required placeholder="e.g. Web Development"/></label><label>Project type<input name="type" value={form.type} onChange={update} placeholder="Portfolio Website"/></label></div><label>Description *<textarea name="description" value={form.description} onChange={update} rows="3" required placeholder="Briefly describe this project..."/></label><label>Project URL<input name="url" type="url" value={form.url} onChange={update} placeholder="https://example.com"/></label><label>Card accent<select name="accent" value={form.accent} onChange={update}><option value="lavender">Lavender</option><option value="mint">Mint</option><option value="peach">Peach</option></select></label><div className="admin-modal-actions"><button type="button" className="button button-outline" onClick={() => setShowForm(false)}>Cancel</button><button type="submit" className="button button-primary"><Save size={16}/> Save project</button></div></form></div>}
  </section>;
}
