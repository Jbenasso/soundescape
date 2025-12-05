const RENDER_API = 'https://soundescape-server.onrender.com/api/albums';
const LOCAL_API = 'http://localhost:3000/api/albums';

export const getApiUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  if (envUrl && envUrl.trim()) {
    return envUrl.trim();
  }

  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    const isLocal = host === 'localhost' || host === '127.0.0.1';
    return isLocal ? LOCAL_API : RENDER_API;
  }

  return RENDER_API;
};

export const API_URL = getApiUrl();
