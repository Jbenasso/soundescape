import { useState } from 'react';
import '../css/AddAlbumForm.css';

// API URL - update this when server is deployed to Render
const API_URL = 'http://localhost:3000/api/albums';

export default function AddAlbumForm({ onAlbumAdded, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    genre: '',
    year: new Date().getFullYear(),
    image: '',
    description: '',
    rating: 5,
    tracks: 1,
    duration: '00:00'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'title':
        if (!value || value.length < 1 || value.length > 100) {
          newErrors.title = 'Title must be between 1 and 100 characters';
        } else {
          delete newErrors.title;
        }
        break;
      case 'artist':
        if (!value || value.length < 1 || value.length > 100) {
          newErrors.artist = 'Artist name must be between 1 and 100 characters';
        } else {
          delete newErrors.artist;
        }
        break;
      case 'genre':
        if (!value || value.length < 1 || value.length > 50) {
          newErrors.genre = 'Genre must be between 1 and 50 characters';
        } else {
          delete newErrors.genre;
        }
        break;
      case 'year':
        const yearNum = parseInt(value);
        if (isNaN(yearNum) || yearNum < 1900 || yearNum > new Date().getFullYear()) {
          newErrors.year = `Year must be between 1900 and ${new Date().getFullYear()}`;
        } else {
          delete newErrors.year;
        }
        break;
      case 'image':
        const urlPattern = /^https?:\/\/.+/;
        if (!value || !urlPattern.test(value)) {
          newErrors.image = 'Please enter a valid URL starting with http:// or https://';
        } else {
          delete newErrors.image;
        }
        break;
      case 'description':
        if (!value || value.length < 10 || value.length > 500) {
          newErrors.description = 'Description must be between 10 and 500 characters';
        } else {
          delete newErrors.description;
        }
        break;
      case 'rating':
        const ratingNum = parseInt(value);
        if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
          newErrors.rating = 'Rating must be between 1 and 5';
        } else {
          delete newErrors.rating;
        }
        break;
      case 'tracks':
        const tracksNum = parseInt(value);
        if (isNaN(tracksNum) || tracksNum < 1) {
          newErrors.tracks = 'Number of tracks must be at least 1';
        } else {
          delete newErrors.tracks;
        }
        break;
      case 'duration':
        const durationPattern = /^\d{1,3}:\d{2}$/;
        if (!value || !durationPattern.test(value)) {
          newErrors.duration = 'Duration must be in format MM:SS or MMM:SS (e.g., 42:30)';
        } else {
          delete newErrors.duration;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    Object.keys(formData).forEach(key => {
      validateField(key, formData[key]);
    });

    // Check if there are any errors
    if (Object.keys(errors).length > 0) {
      setSubmitStatus({ type: 'error', message: 'Please fix all errors before submitting' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          year: parseInt(formData.year),
          rating: parseInt(formData.rating),
          tracks: parseInt(formData.tracks)
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to add album');
      }

      const newAlbum = await response.json();
      setSubmitStatus({ type: 'success', message: 'Album added successfully!' });
      
      // Reset form
      setFormData({
        title: '',
        artist: '',
        genre: '',
        year: new Date().getFullYear(),
        image: '',
        description: '',
        rating: 5,
        tracks: 1,
        duration: '00:00'
      });

      // Notify parent component
      if (onAlbumAdded) {
        onAlbumAdded(newAlbum);
      }

      // Auto close after 2 seconds
      setTimeout(() => {
        if (onCancel) onCancel();
      }, 2000);

    } catch (error) {
      setSubmitStatus({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="add-album-form-container">
      <div className="form-header">
        <h2>Add New Album</h2>
        {onCancel && (
          <button className="close-form-btn" onClick={onCancel} aria-label="Close form">
            ✕
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="add-album-form" noValidate>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Album Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={errors.title ? 'error' : ''}
              required
            />
            {errors.title && <span className="error-message">{errors.title}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="artist">Artist *</label>
            <input
              type="text"
              id="artist"
              name="artist"
              value={formData.artist}
              onChange={handleChange}
              className={errors.artist ? 'error' : ''}
              required
            />
            {errors.artist && <span className="error-message">{errors.artist}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="genre">Genre *</label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              className={errors.genre ? 'error' : ''}
              required
            />
            {errors.genre && <span className="error-message">{errors.genre}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="year">Year *</label>
            <input
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              min="1900"
              max={new Date().getFullYear()}
              className={errors.year ? 'error' : ''}
              required
            />
            {errors.year && <span className="error-message">{errors.year}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="image">Album Cover URL *</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/album-cover.jpg"
            className={errors.image ? 'error' : ''}
            required
          />
          {errors.image && <span className="error-message">{errors.image}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className={errors.description ? 'error' : ''}
            required
          ></textarea>
          <span className="char-count">{formData.description.length}/500</span>
          {errors.description && <span className="error-message">{errors.description}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="rating">Rating (1-5) *</label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="1"
              max="5"
              className={errors.rating ? 'error' : ''}
              required
            />
            {errors.rating && <span className="error-message">{errors.rating}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="tracks">Number of Tracks *</label>
            <input
              type="number"
              id="tracks"
              name="tracks"
              value={formData.tracks}
              onChange={handleChange}
              min="1"
              className={errors.tracks ? 'error' : ''}
              required
            />
            {errors.tracks && <span className="error-message">{errors.tracks}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="duration">Duration (MM:SS) *</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="42:30"
              className={errors.duration ? 'error' : ''}
              required
            />
            {errors.duration && <span className="error-message">{errors.duration}</span>}
          </div>
        </div>

        {submitStatus && (
          <div className={`submit-status ${submitStatus.type}`}>
            {submitStatus.message}
          </div>
        )}

        <div className="form-actions">
          {onCancel && (
            <button type="button" className="btn-cancel" onClick={onCancel}>
              Cancel
            </button>
          )}
          <button type="submit" className="btn-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Adding...' : 'Add Album'}
          </button>
        </div>
      </form>
    </div>
  );
}
