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
        <h3>React Project</h3>
        <div className="link-buttons">
          <a 
            href="https://github.com/Jbenasso/soundescape" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-code"
          >
            📦 View Code
          </a>
          <a 
            href="YOUR_RENDER_URL_HERE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-live"
          >
            🚀 Live Site
          </a>
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