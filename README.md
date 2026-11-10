# DivSpan Tech — React Frontend + Admin

This is a React + Vite single-page application. The public website and admin dashboard are implemented in React components. There is no Python/FastAPI backend and no PostgreSQL dependency in this version.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Admin
- Login: http://localhost:5173/admin/login
- Email: `admin@divspantech.com`
- Password: `DivSpan@123`

Admin routes:
- `/admin/dashboard`
- `/admin/projects` — add, edit and delete portfolio projects. Changes appear on the public Home and Work pages.
- `/admin/enquiries` — view, mark read/new and delete contact form enquiries.

## Storage and important limitations
This is a frontend-only demo. Admin session, projects and contact form enquiries are saved in the current browser's `localStorage`. They do not sync across devices or browsers. Contact submissions from public visitors on another device are not delivered to the admin browser. The demo login credentials are present in frontend code and can be inspected by visitors; this is not secure authentication. Before deploying for real customers, connect a backend or managed service for authentication and shared data storage.
