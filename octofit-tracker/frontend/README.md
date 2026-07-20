# OctoFit Tracker frontend

This presentation tier uses React 19, Vite, Bootstrap, and React Router.

Before running it in GitHub Codespaces, define `VITE_CODESPACE_NAME` in
`octofit-tracker/frontend/.env.local`:

```dotenv
VITE_CODESPACE_NAME=your-codespace-name
```

Vite exposes this value as `import.meta.env.VITE_CODESPACE_NAME`. API requests
then use `https://<codespace-name>-8000.app.github.dev/api/...`. If the variable
is unset, the frontend safely falls back to `http://localhost:8000` for local
development.

Install and run the app:

```sh
npm install --prefix octofit-tracker/frontend
npm run dev --prefix octofit-tracker/frontend
```
