export const apiBaseUrl = '/api';

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
