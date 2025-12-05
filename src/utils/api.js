const FALLBACK_RENDER = 'https://soundescape-server.onrender.com/api/albums';
const FALLBACK_LOCAL = 'http://localhost:3000/api/albums';

export const getApiUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  if (envUrl && envUrl.trim()) {
    return envUrl.trim();
  }

  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    const isLocal = host === 'localhost' || host === '127.0.0.1';
    // In production, prefer the hosted API on Render
    if (!isLocal) {
      return FALLBACK_RENDER;
    }
    // In local dev, prefer local API
    return FALLBACK_LOCAL;
  }

  return FALLBACK_LOCAL;
};
