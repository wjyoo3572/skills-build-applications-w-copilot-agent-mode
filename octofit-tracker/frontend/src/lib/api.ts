const codespaceName = import.meta.env.VITE_CODESPACE_NAME;

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api';

export function normalizeApiResponse<T>(payload: unknown, key?: string): T[] {
  if (Array.isArray(payload)) {
    return payload as T[];
  }

  if (payload && typeof payload === 'object') {
    const response = payload as Record<string, unknown>;

    if (key && Array.isArray(response[key])) {
      return response[key] as T[];
    }

    if (Array.isArray(response.data)) {
      return response.data as T[];
    }

    if (Array.isArray(response.results)) {
      return response.results as T[];
    }

    const firstArray = Object.values(response).find(Array.isArray);
    if (firstArray) {
      return firstArray as T[];
    }
  }

  return [];
}
