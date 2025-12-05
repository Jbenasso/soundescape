import { useState, useEffect } from 'react';
import '../css/Albums.css';
import AlbumModal from '../components/AlbumModal.jsx';
import AddAlbumForm from '../components/AddAlbumForm.jsx';
import EditAlbumForm from '../components/EditAlbumForm.jsx';
import { getApiUrl } from '../utils/api.js';

const API_URL = getApiUrl();
const FALLBACK_IMAGE = 'https://via.placeholder.com/600?text=Album+Cover';

export default function Albums() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingAlbum, setEditingAlbum] = useState(null);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch albums');
      }
      const data = await response.json();
      setAlbums(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  const handleCloseModal = () => {
    setSelectedAlbum(null);
  };

  const handleAlbumAdded = (newAlbum) => {
    setAlbums(prev => [...prev, newAlbum]);
    setShowAddForm(false);
  };

  const handleAlbumUpdated = (updatedAlbum) => {
    setAlbums(prev => prev.map(album => 
      album._id === updatedAlbum._id ? updatedAlbum : album
    ));
    setEditingAlbum(null);
    setSelectedAlbum(null);
  };

  const handleDeleteAlbum = async (albumId) => {
    if (!confirm('Are you sure you want to delete this album?')) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${albumId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Failed to delete album');
      }

      setAlbums(prev => prev.filter(album => album._id !== albumId));
      setSelectedAlbum(null);
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  if (loading) {
    return (
      <div className="albums-page">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading albums...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="albums-page">
        <div className="error-message">
          <h2>⚠️ Error Loading Albums</h2>
          <p>{error}</p>
          <button onClick={fetchAlbums} className="retry-btn">Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="albums-page">
      <header className="albums-header">
        <h1>Featured Albums Collection</h1>
        <p>Explore our curated selection of iconic music albums</p>
        <button 
          className="add-album-btn" 
          onClick={() => setShowAddForm(true)}
        >
          + Add New Album
        </button>
      </header>

      {showAddForm && (
        <AddAlbumForm 
          onAlbumAdded={handleAlbumAdded}
          onCancel={() => setShowAddForm(false)}
        />
      )}

      {editingAlbum && (
        <EditAlbumForm
          album={editingAlbum}
          onAlbumUpdated={handleAlbumUpdated}
          onCancel={() => setEditingAlbum(null)}
        />
      )}

      <div className="albums-grid">
        {albums.map((album) => (
          <article
            key={album._id}
            className="album-card"
          >
            <div 
              className="album-image-wrapper"
              onClick={() => handleAlbumClick(album)}
            >
              <img 
                src={album.image} 
                alt={album.title} 
                onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
              />
              <div className="album-overlay">
                <span className="view-details">View Details →</span>
              </div>
            </div>
            <div className="album-info">
              <h3 onClick={() => handleAlbumClick(album)}>{album.title}</h3>
              <p className="artist">{album.artist}</p>
              <div className="album-meta">
                <span className="genre">{album.genre}</span>
                <span className="year">{album.year}</span>
              </div>
              <div className="rating">
                {'★'.repeat(album.rating)}
              </div>
              <div className="album-actions">
                <button 
                  className="edit-btn"
                  onClick={() => setEditingAlbum(album)}
                >
                  ✏️ Edit
                </button>
                <button 
                  className="delete-btn"
                  onClick={() => handleDeleteAlbum(album._id)}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedAlbum && (
        <AlbumModal 
          album={selectedAlbum} 
          onClose={handleCloseModal}
          onEdit={() => {
            setEditingAlbum(selectedAlbum);
            setSelectedAlbum(null);
          }}
          onDelete={() => handleDeleteAlbum(selectedAlbum._id)}
        />
      )}
    </div>
  );
}
