import { useMemo, useState } from 'react';
import { Mail, Trash2, CheckCircle2, Clock3 } from 'lucide-react';
import { getEnquiries, saveEnquiries, useLocalCollection } from '../../services/localStore';
const readEnquiries = () => getEnquiries();
export default function Enquiries() {
  const enquiries = useLocalCollection(readEnquiries);
  const [filter, setFilter] = useState('All');
  const visible = useMemo(() => filter === 'All' ? enquiries : enquiries.filter(item => item.status === filter), [enquiries, filter]);
  function updateStatus(id, status) { saveEnquiries(enquiries.map(item => item.id === id ? { ...item, status } : item)); }
  function remove(id) { if (window.confirm('Delete this enquiry?')) saveEnquiries(enquiries.filter(item => item.id !== id)); }
  return <section className="admin-module"><div className="module-heading"><div><span className="eyebrow">CONTACT FORM</span><h1>Website <em>enquiries.</em></h1><p>Messages submitted through the contact form on this browser.</p></div><span className="module-count"><Mail size={16}/>{enquiries.length} total</span></div>
    <div className="module-toolbar"><select value={filter} onChange={e => setFilter(e.target.value)}><option>All</option><option>New</option><option>Read</option></select><span>{visible.length} shown</span></div>
    <div className="admin-enquiry-list">{visible.map(item => <article className="admin-enquiry-card" key={item.id}><div className="enquiry-card-top"><div><span className="enquiry-service">{item.service}</span><h3>{item.name}</h3><a href={`mailto:${item.email}`}>{item.email}</a></div><span className={`enquiry-status ${item.status === 'New' ? 'is-new' : 'is-read'}`}>{item.status}</span></div><p>{item.message}</p><div className="enquiry-card-bottom"><small><Clock3 size={13}/>{new Date(item.createdAt).toLocaleString()}</small><div>{item.status === 'New' ? <button onClick={() => updateStatus(item.id, 'Read')}><CheckCircle2 size={14}/> Mark read</button> : <button onClick={() => updateStatus(item.id, 'New')}>Mark new</button>}<button className="danger" onClick={() => remove(item.id)}><Trash2 size={14}/> Delete</button></div></div></article>)}{visible.length === 0 && <div className="admin-empty">No enquiries yet. Contact form messages saved on this browser will appear here.</div>}</div>
  </section>;
}
