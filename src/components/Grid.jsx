import "./../css/Grid.css";
// Import images from src/images so Vite bundles them correctly
import rockClassics from "../images/rock-classics.jpg";
import jazzLegends from "../images/jazz-legends.jpg";
import gallery1 from "../images/gallery1.jpg";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpg";
import hipHopVibes from "../images/hip-hop-vibes.jpg";
import edmHits from "../images/edm-hits.jpg";
import gallery4 from "../images/gallery4.jpg";
import gallery5 from "../images/gallery5.jpg";
import gallery6 from "../images/gallery6.jpg";

const Grid = () => {
    return (
        <div className="second-layout">
      <aside className="links">
        <h3>Links</h3>
        <ul>
          <li><a href="#">Latest Playlists</a></li>
          <li><a href="#">Music History</a></li>
          <li><a href="#">Staff Favorites</a></li>
          <li><a href="#">Upcoming Concerts</a></li>
        </ul>
      </aside>

  <section className="content-grid">
        <article>
          <img src={rockClassics} alt="Rock Classics" />
          <h3>Rock Classics</h3>
          <p>From Led Zeppelin’s thunderous riffs to Queen’s stadium anthems...</p>
        </article>

        <article>
          <img src={jazzLegends} alt="Jazz Legends" />
          <h3>Jazz Legends</h3>
          <p>Step into the world of Miles Davis, Ella Fitzgerald, and John Coltrane...</p>
        </article>

        <article>
          <img src={gallery1} alt="Gallery 1" />
          <h3>Gallery 1</h3>
          <p>Snapshots from live shows...</p>
        </article>

        <article>
          <img src={gallery2} alt="Gallery 2" />
          <h3>Gallery 2</h3>
          <p>A behind-the-scenes look at recording sessions...</p>
        </article>

        <article>
          <img src={gallery3} alt="Gallery 3" />
          <h3>Gallery 3</h3>
          <p>Festival vibes — from colorful crowds to unforgettable performances...</p>
        </article>

        <article>
          <img src={hipHopVibes} alt="Hip Hop Vibes" />
          <h3>Hip-Hop Vibes</h3>
          <p>Discover the beats and rhymes that tell stories of resilience...</p>
        </article>

        <article>
          <img src={edmHits} alt="EDM Hits" />
          <h3>EDM Hits</h3>
          <p>Feel the drop with today’s biggest EDM hits...</p>
        </article>

        <article>
          <img src={gallery4} alt="Gallery 4" />
          <h3>Gallery 4</h3>
          <p>Iconic album covers that became works of art...</p>
        </article>

        <article>
          <img src={gallery5} alt="Gallery 5" />
          <h3>Gallery 5</h3>
          <p>Fan-submitted artwork and photography celebrating music...</p>
        </article>

        <article>
          <img src={gallery6} alt="Gallery 6" />
          <h3>Gallery 6</h3>
          <p>Fan-submitted artwork and photography celebrating music...</p>
        </article>
      </section>
      <br />
    </div>
    )
};

export default Grid;