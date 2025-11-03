import { useState, useEffect } from 'react';
import '../css/MusicCarousel.css';

// Import images for the carousel
import rockClassics from '../images/rock-classics.jpg';
import jazzLegends from '../images/jazz-legends.jpg';
import hipHopVibes from '../images/hip-hop-vibes.jpg';
import edmHits from '../images/edm-hits.jpg';

const carouselSlides = [
  {
    id: 1,
    image: rockClassics,
    genre: 'Rock Classics',
    title: 'Timeless Rock Anthems',
    description: 'Experience the golden age of rock with legendary bands that defined generations.',
    featured: 'Led Zeppelin • Queen • Pink Floyd'
  },
  {
    id: 2,
    image: jazzLegends,
    genre: 'Jazz Legends',
    title: 'The Jazz Masters',
    description: 'Dive into the sophisticated world of jazz improvisations and smooth melodies.',
    featured: 'Miles Davis • John Coltrane • Ella Fitzgerald'
  },
  {
    id: 3,
    image: hipHopVibes,
    genre: 'Hip-Hop Vibes',
    title: 'Urban Beats & Rhymes',
    description: 'From the streets to the mainstream - the evolution of hip-hop culture.',
    featured: 'Kendrick Lamar • Jay-Z • Nas'
  },
  {
    id: 4,
    image: edmHits,
    genre: 'EDM Hits',
    title: 'Electronic Energy',
    description: 'Feel the drop with pulsating beats and euphoric festival anthems.',
    featured: 'Calvin Harris • Avicii • Deadmau5'
  }
];

export default function MusicCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="music-carousel">
      <h2>Featured Music Collections</h2>
      
      <div className="carousel-container">
        {/* Slide Display */}
        <div className="carousel-slides">
          {carouselSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''} ${
                index === currentSlide - 1 || (currentSlide === 0 && index === carouselSlides.length - 1) 
                  ? 'prev' 
                  : ''
              } ${
                index === currentSlide + 1 || (currentSlide === carouselSlides.length - 1 && index === 0) 
                  ? 'next' 
                  : ''
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-content">
                <span className="genre-badge">{slide.genre}</span>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                <div className="featured-artists">
                  <span>🎵</span> {slide.featured}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          className="carousel-btn prev-btn" 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button 
          className="carousel-btn next-btn" 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#10095;
        </button>

        {/* Dot Indicators */}
        <div className="carousel-dots">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Autoplay Indicator */}
        <div className="autoplay-status">
          {isAutoPlaying ? '⏯ Auto-playing' : '⏸ Paused'}
        </div>
      </div>
    </section>
  );
}
