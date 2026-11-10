import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, BriefcaseBusiness, Inbox, LogOut, ExternalLink, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/Logo';
export default function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  function signOut() { logout(); navigate('/admin/login', { replace: true }); }
  return <div className="admin-shell">
    <aside className="admin-sidebar">
      <Logo />
      <div className="admin-sidebar-label">WORKSPACE</div>
      <NavLink to="/admin/dashboard" className={({isActive}) => `admin-nav-link ${isActive ? 'active' : ''}`}><LayoutDashboard size={18}/> Dashboard</NavLink>
      <NavLink to="/admin/projects" className={({isActive}) => `admin-nav-link ${isActive ? 'active' : ''}`}><BriefcaseBusiness size={18}/> Projects</NavLink>
      <NavLink to="/admin/enquiries" className={({isActive}) => `admin-nav-link ${isActive ? 'active' : ''}`}><Inbox size={18}/> Enquiries</NavLink>
      <div className="admin-sidebar-bottom">
        <div className="admin-user"><span className="admin-avatar">{(user?.name || 'A').slice(0,1).toUpperCase()}</span><span><b>{user?.name}</b><small>{user?.email}</small></span></div>
        <button className="admin-logout" onClick={signOut}><LogOut size={17}/> Sign out</button>
        <a className="back-to-site" href="/"><ExternalLink size={15}/> View public website</a>
      </div>
    </aside>
    <section className="admin-main">
      <header className="admin-topbar"><div><span className="admin-top-kicker">DIVSPAN TECH / ADMIN</span><b>Management workspace</b></div><span className="secure-pill"><ShieldCheck size={15}/> Local demo mode</span></header>
      <div className="admin-content"><Outlet /></div>
    </section>
  </div>;
}
