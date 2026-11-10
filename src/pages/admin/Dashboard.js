import { useMemo } from 'react';
import { BriefcaseBusiness, Inbox, Users, TrendingUp, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { getEnquiries, getProjects, useLocalCollection } from '../../services/localStore';

const readProjects = () => getProjects();
const readEnquiries = () => getEnquiries();
export default function Dashboard() {
  const { user } = useAuth();
  const projects = useLocalCollection(readProjects);
  const enquiries = useLocalCollection(readEnquiries);
  const newEnquiries = useMemo(() => enquiries.filter(item => item.status === 'New').length, [enquiries]);
  const stats = [
    { label: 'Portfolio projects', value: projects.length, icon: BriefcaseBusiness, note: 'Manage published work', to: '/admin/projects' },
    { label: 'Total enquiries', value: enquiries.length, icon: Inbox, note: 'Messages received on this browser', to: '/admin/enquiries' },
    { label: 'New enquiries', value: newEnquiries, icon: TrendingUp, note: 'Waiting for your review', to: '/admin/enquiries' },
    { label: 'Client records', value: '—', icon: Users, note: 'Client module not enabled', to: '/admin/projects' },
  ];
  return <div className="dashboard-page">
    <div className="dashboard-welcome"><div><span className="eyebrow">OVERVIEW</span><h1>Good to see you, <em>{user?.name?.split(' ')[0] || 'Admin'}.</em></h1><p>Manage your DivSpan Tech portfolio and website enquiries.</p></div><span className="dashboard-date">ADMIN WORKSPACE</span></div>
    <div className="dashboard-stats">{stats.map(({ label, value, icon: Icon, note, to }) => <Link to={to} className="dashboard-stat" key={label}><span className="stat-icon"><Icon size={20}/></span><span className="stat-label">{label}</span><b>{value}</b><small>{note}</small></Link>)}</div>
    <section className="dashboard-panel"><div className="panel-heading"><div><h2>Quick actions</h2><p>Keep your public website up to date.</p></div><span className="status-ready">FRONTEND MODE</span></div>
      <div className="admin-quick-actions"><Link to="/admin/projects"><span><BriefcaseBusiness size={19}/></span><div><b>Manage portfolio</b><small>Add, edit or remove projects shown on your website.</small></div><ArrowUpRight size={17}/></Link><Link to="/admin/enquiries"><span><Inbox size={19}/></span><div><b>View enquiries</b><small>Review contact form messages saved in this browser.</small></div><ArrowUpRight size={17}/></Link></div>
    </section>
    <p className="admin-storage-note">Note: This frontend-only dashboard saves information in this browser's local storage. It does not sync between devices or receive public website submissions from other visitors.</p>
  </div>;
}
