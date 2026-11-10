import { useEffect, useState } from 'react';
import { projects as initialProjects } from '../data/projects';

const PROJECTS_KEY = 'divspan_projects_v1';
const ENQUIRIES_KEY = 'divspan_enquiries_v1';
const EVENT_NAME = 'divspan-local-data-updated';

function read(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}
function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent(EVENT_NAME));
}
export function getProjects() { return read(PROJECTS_KEY, initialProjects); }
export function saveProjects(items) { write(PROJECTS_KEY, items); }
export function getEnquiries() { return read(ENQUIRIES_KEY, []); }
export function saveEnquiries(items) { write(ENQUIRIES_KEY, items); }
export function addEnquiry(enquiry) {
  const items = getEnquiries();
  const next = [{ id: crypto.randomUUID?.() || String(Date.now()), createdAt: new Date().toISOString(), status: 'New', ...enquiry }, ...items];
  saveEnquiries(next);
  return next[0];
}
export function useLocalCollection(getter) {
  // Kept as a tiny subscription helper for components using browser-local data.
  const [items, setItems] = useState(getter);
  useEffect(() => {
    const refresh = () => setItems(getter());
    window.addEventListener(EVENT_NAME, refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener(EVENT_NAME, refresh);
      window.removeEventListener('storage', refresh);
    };
  }, [getter]);
  return items;
}
