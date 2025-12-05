import Spotlight from "../components/Spotlight.jsx";
import ContentGrid from "../components/Grid.jsx";
import MusicCarousel from "../components/MusicCarousel.jsx";
import "../css/Home.css";

export default function Home() {
  return (
    <div className="home-wrap">
      <Spotlight />

      {/* GitHub Project Links */}
      <section className="github-links">
        <h3>SoundScape Project - Full Stack</h3>
        
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ marginTop: 0, marginBottom: '1rem' }}>Frontend (React + Vite)</h4>
          <div className="link-buttons">
            <a 
              href="https://github.com/Jbenasso/soundescape" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-code"
            >
              💻 Frontend Repo
            </a>
            <a 
              href="https://soundescape.onrender.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-live"
            >
              🚀 Live Site
            </a>
          </div>
        </div>

        <div>
          <h4 style={{ marginTop: 0, marginBottom: '1rem' }}>Backend (Express + MongoDB)</h4>
          <div className="link-buttons">
            <a 
              href="https://github.com/Jbenasso/soundescape-server" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-code"
            >
              🔧 Backend Repo
            </a>
            <a 
              href="https://soundescape-server.onrender.com/api/albums" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-live"
            >
              ⚡ API Endpoint
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Music Carousel - JS Feature */}
      <MusicCarousel />

      <div className="second-layout">
        <aside className="links glass">
          <h3>Links</h3>
          <ul>
            <li><a href="#">Latest Playlists</a></li>
            <li><a href="#">Music History</a></li>
            <li><a href="#">Staff Favorites</a></li>
            <li><a href="#">Upcoming Concerts</a></li>
          </ul>
        </aside>

        <ContentGrid />
      </div>
    </div>
  );
}