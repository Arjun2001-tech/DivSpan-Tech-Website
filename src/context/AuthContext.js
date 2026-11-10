import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);
const SESSION_KEY = 'divspan_admin_session_v1';
const ADMIN_EMAIL = 'admin@divspantech.com';
const ADMIN_PASSWORD = 'DivSpan@123';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); }
    catch { return null; }
  });
  const value = useMemo(() => ({
    user,
    loading: false,
    async login(email, password) {
      if (email.toLowerCase() !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
        throw new Error('Invalid email or password. Please try again.');
      }
      const account = { name: 'DivSpan Admin', email: ADMIN_EMAIL, role: 'admin' };
      localStorage.setItem(SESSION_KEY, JSON.stringify(account));
      setUser(account);
      return account;
    },
    logout() {
      localStorage.removeItem(SESSION_KEY);
      setUser(null);
    },
  }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error('useAuth must be used inside AuthProvider');
  return value;
}
