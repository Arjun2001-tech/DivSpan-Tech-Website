import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLayout from './layouts/AdminLayout';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/auth/Login';
import Dashboard from './pages/admin/Dashboard';
import Projects from './pages/admin/Projects';
import Enquiries from './pages/admin/Enquiries';

function PublicLayout({children}) { return <><Header/>{children}<Footer/></>; }
function AppRoutes() {
  const location = useLocation();
  useEffect(() => { window.scrollTo({top:0,behavior:'instant'}); }, [location.pathname]);
  return <Routes>
    <Route path="/" element={<PublicLayout><Home/></PublicLayout>}/>
    <Route path="/services" element={<PublicLayout><Services/></PublicLayout>}/>
    <Route path="/work" element={<PublicLayout><Work/></PublicLayout>}/>
    <Route path="/about" element={<PublicLayout><About/></PublicLayout>}/>
    <Route path="/contact" element={<PublicLayout><Contact/></PublicLayout>}/>
    <Route path="/admin/login" element={<Login/>}/>
    <Route path="/admin" element={<ProtectedRoute><AdminLayout/></ProtectedRoute>}>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="projects" element={<Projects/>}/>
      <Route path="enquiries" element={<Enquiries/>}/>
    </Route>
    <Route path="*" element={<PublicLayout><Home/></PublicLayout>}/>
  </Routes>;
}
export default function App() { return <AuthProvider><AppRoutes/></AuthProvider>; }