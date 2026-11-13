import { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, LockKeyhole, Mail, ShieldCheck } from 'lucide-react';
import Logo from '../../components/Logo';
import { useAuth } from '../../context/AuthContext';
export default function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const [submitting,setSubmitting] = useState(false);
  const { login,user,loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  if (!loading && user?.role === 'admin') return <Navigate to="/admin/dashboard" replace />;
  async function submit(e) {
    e.preventDefault(); setError(''); setSubmitting(true);
    try {
      await login(email.trim(), password);
      navigate(location.state?.from?.pathname || '/admin/dashboard', {replace:true});
    } catch (err) { setError(err.message || 'Unable to sign in.'); }
    finally { setSubmitting(false); }
  }
  return <div className="login-page">
    <div className="login-top"><Logo/><Link to="/" className="back-site"><ArrowLeft size={15}/> Back to website</Link></div>
    <div className="login-card">
      <div className="login-icon"><LockKeyhole size={23}/></div>
      <span className="eyebrow">ADMINISTRATOR ACCESS</span>
      <h1>Welcome <em>back.</em></h1>
      <p className="login-intro">Sign in to manage your DivSpan Tech workspace.</p>
      <form onSubmit={submit}>
        <label>Email address</label>
        <div className="login-input-wrap"><Mail size={17}/><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter admin email" autoComplete="username" required/></div>
        <label>Password</label>
        <div className="login-input-wrap"><LockKeyhole size={17}/><input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter your password" autoComplete="current-password" required/></div>
        {error && <div className="login-error" role="alert">{error}</div>}
        <button className="button button-primary login-submit" type="submit" disabled={submitting}>{submitting ? 'Signing in…' : 'Sign in to dashboard'} <ArrowRight size={17}/></button>
      </form>
      <div className="login-security"><ShieldCheck size={16}/> Frontend demo login · Local browser only</div>
      <p className="login-demo-credentials">Demo: admin@divspan.com / DivSpan@123</p>
    </div>
    <p className="login-footer">© {new Date().getFullYear()} DivSpan Tech · Secure administrator access</p>
  </div>;
}
