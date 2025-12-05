const FALLBACK_LOCAL = 'http://localhost:3000/api/albums';
const FALLBACK_RENDER = 'https://soundescape-server.onrender.com/api/albums';

export const getApiUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  if (envUrl && envUrl.trim()) {
    return envUrl.trim();
  }

  if (typeof window !== 'undefined') {
    if (window.location.origin.includes('onrender.com')) {
      return FALLBACK_RENDER;
    }
    return `${window.location.origin}/api/albums`;
  }

  return FALLBACK_LOCAL;
};
