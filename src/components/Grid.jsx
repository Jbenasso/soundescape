import {Link} from 'react-router-dom'; 
import "./../css/Grid.css";

const Grid = () => {
    return (
        <div class="second-layout">
      <aside class="links">
        <h3>Links</h3>
        <ul>
          <li><a href="#">Latest Playlists</a></li>
          <li><a href="#">Music History</a></li>
          <li><a href="#">Staff Favorites</a></li>
          <li><a href="#">Upcoming Concerts</a></li>
        </ul>
      </aside>

      <section class="content-grid">
        <article>
          <img src="../images/rock-classics.jpg" alt="Rock Classics" />
          <h3>Rock Classics</h3>
          <p>From Led Zeppelin’s thunderous riffs to Queen’s stadium anthems...</p>
        </article>

        <article>
          <img src="../images/jazz-legends.jpg" alt="Jazz Legends" />
          <h3>Jazz Legends</h3>
          <p>Step into the world of Miles Davis, Ella Fitzgerald, and John Coltrane...</p>
        </article>

        <article>
          <img src="../images/gallery1.jpg" alt="Gallery 1" />
          <h3>Gallery 1</h3>
          <p>Snapshots from live shows...</p>
        </article>

        <article>
          <img src="../images/gallery2.jpg" alt="Gallery 2" />
          <h3>Gallery 2</h3>
          <p>A behind-the-scenes look at recording sessions...</p>
        </article>

        <article>
          <img src="../images/gallery3.jpg" alt="Gallery 3" />
          <h3>Gallery 3</h3>
          <p>Festival vibes — from colorful crowds to unforgettable performances...</p>
        </article>

        <article>
          <img src="../images/hip-hop-vibes.jpg" alt="Hip Hop Vibes" />
          <h3>Hip-Hop Vibes</h3>
          <p>Discover the beats and rhymes that tell stories of resilience...</p>
        </article>

        <article>
          <img src="../images/edm-hits.jpg" alt="EDM Hits" />
          <h3>EDM Hits</h3>
          <p>Feel the drop with today’s biggest EDM hits...</p>
        </article>

        <article>
          <img src="../images/gallery4.jpg" alt="Gallery 4" />
          <h3>Gallery 4</h3>
          <p>Iconic album covers that became works of art...</p>
        </article>

        <article>
          <img src="../images/gallery5.jpg" alt="Gallery 5" />
          <h3>Gallery 5</h3>
          <p>Fan-submitted artwork and photography celebrating music...</p>
        </article>

        <article>
          <img src="../images/gallery6.jpg" alt="Gallery 6" />
          <h3>Gallery 6</h3>
          <p>Fan-submitted artwork and photography celebrating music...</p>
        </article>
      </section>
      <br />
    </div>
    )
};

export default Grid;