# Backend API Quick Reference

This file documents two auth endpoints and example payloads you can use in Postman.

## Food Partner Login
- URL: `POST /api/v1/foodpartner/login`
- Headers: `Content-Type: application/json`
- Body example:

```json
{
  "email": "partner.one@example.com",
  "password": "PartnerPass123!"
}
```

- Expected response: JSON containing `success`, `partner` (object with `_id`, `name`, `email`), and `token`.

## User Login
- URL: `POST /api/v1/auth/login`
- Headers: `Content-Type: application/json`
- Body example:

```json
{
  "email": "test.user@example.com",
  "password": "Password123!"
}
```

- Expected response: JSON containing `success`, `user` (object with `_id`, `fullname`, `email`), and `token`.

---

Tips
- Use `Authorization: Bearer <token>` header for protected routes.
- Register endpoints:
  - `POST /api/v1/foodpartner/register` — body: `{ name, email, password }`
  - `POST /api/v1/auth/register` — body: `{ fullname, email, password }`

Run server in backend folder:

```bash
npm install
node server.js
```
