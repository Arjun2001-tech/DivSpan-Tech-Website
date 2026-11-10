import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <div className="auth-loading"><span className="spinner" /> Checking your session…</div>;
  if (!user) return <Navigate to="/admin/login" replace state={{ from: location }} />;
  if (user.role !== 'admin') return <div className="auth-loading">Administrator access required.</div>;
  return children;
}
