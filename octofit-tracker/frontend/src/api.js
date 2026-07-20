const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

// A local backend is the safest development fallback. In particular, this
// prevents an unset variable from producing https://undefined-8000... URLs.
export const API_ORIGIN = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

export function apiUrl(path) {
  return `${API_ORIGIN}${path.startsWith('/') ? path : `/${path}`}`
}

export function normalizeCollection(payload) {
  if (Array.isArray(payload)) {
    return payload
  }

  return Array.isArray(payload?.results) ? payload.results : []
}
