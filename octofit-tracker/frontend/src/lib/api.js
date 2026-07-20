const codespaceName = import.meta.env.VITE_CODESPACE_NAME;

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api';

export function normalizeApiResponse(payload, key) {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (payload && typeof payload === 'object') {
    if (key && Array.isArray(payload[key])) {
      return payload[key];
    }

    if (Array.isArray(payload.data)) {
      return payload.data;
    }

    if (Array.isArray(payload.results)) {
      return payload.results;
    }

    const firstArray = Object.values(payload).find(Array.isArray);
    if (firstArray) {
      return firstArray;
    }
  }

  return [];
}
