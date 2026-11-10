import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight, LockKeyhole } from 'lucide-react';
import Logo from './Logo';

const links = [['Home', '/'], ['Services', '/services'], ['Our Work', '/work'], ['About', '/about']];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />
        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? 'main-nav is-open' : 'main-nav'}>
          {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} onClick={close}>{label}</NavLink>)}
          <Link className="admin-login-link" to="/admin/login" onClick={close}><LockKeyhole size={14}/> Admin</Link>
          <Link className="button button-primary nav-cta" to="/contact" onClick={close}>Let's Talk <ArrowUpRight size={16} /></Link>
        </nav>
      </div>
    </header>
  );
}