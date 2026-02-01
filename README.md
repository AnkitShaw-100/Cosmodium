# QuickURL

Small React + Vite app using Supabase for auth. This README is a short setup and status note.

Date: 2026-02-01

Setup

```bash
npm install
npm install @supabase/supabase-js
```

Create `.env`:

```
VITE_SUPABASE_URL=https://<your-project-ref>.supabase.co
VITE_SUPABASE_KEY=<your-anon-or-service-role-key>
```

Run dev server:

```bash
npm run dev
```

Notes

- Enable Google provider in your Supabase project and set the Google OAuth redirect URI to `https://<your-project-ref>.supabase.co/auth/v1/callback`.
- Ensure `VITE_SUPABASE_URL` points to the same Supabase project where Google is enabled.

Where to look

- `src/db/supabse.js` — Supabase client
- `src/db/apiAuth.js` — auth helpers (Google OAuth)
- `src/context.jsx` — app context exposing user and `signOut()`
- `src/main.jsx` — provider mount
- `src/components/login.jsx`, `src/components/signup.jsx`, `src/components/header.jsx`, `src/pages/auth.jsx`

Progress

- Core auth flows implemented; Google OAuth helper added; `signOut()` wired into header.