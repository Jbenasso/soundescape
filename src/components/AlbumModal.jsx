import { useEffect } from 'react';
import '../css/AlbumModal.css';

const FALLBACK_IMAGE = 'https://via.placeholder.com/600?text=Album+Cover';

export default function AlbumModal({ album, onClose, onEdit, onDelete }) {
  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="modal-body">
          <div className="modal-image">
            <img 
              src={album.image} 
              alt={album.title} 
              onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
            />
          </div>

          <div className="modal-details">
            <h2>{album.title}</h2>
            <p className="modal-artist">by {album.artist}</p>

            <div className="modal-rating">
              {' ★'.repeat(album.rating)}
            </div>

            <div className="modal-info-grid">
              <div className="info-item">
                <span className="info-label">Genre</span>
                <span className="info-value">{album.genre}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Year</span>
                <span className="info-value">{album.year}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Tracks</span>
                <span className="info-value">{album.tracks}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Duration</span>
                <span className="info-value">{album.duration}</span>
              </div>
            </div>

            <div className="modal-description">
              <h3>About This Album</h3>
              <p>{album.description}</p>
            </div>

            <div className="modal-actions">
              {onEdit && (
                <button className="btn-edit" onClick={onEdit}>
                  ✏️ Edit Album
                </button>
              )}
              {onDelete && (
                <button className="btn-delete" onClick={onDelete}>
                  🗑️ Delete Album
                </button>
              )}
              <button className="btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
