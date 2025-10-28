import Spotlight from "../components/Spotlight.jsx";
import ContentGrid from "../components/Grid.jsx";

export default function Home() {
  return (
    <div className="home-wrap">
      <Spotlight />

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