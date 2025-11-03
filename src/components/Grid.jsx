import './../css/Grid.css';
import rockClassics from '../images/rock-classics.jpg';
import jazzLegends from '../images/jazz-legends.jpg';
import gallery1 from '../images/gallery1.jpg';
import gallery2 from '../images/gallery2.jpg';
import gallery3 from '../images/gallery3.jpg';
import hipHopVibes from '../images/hip-hop-vibes.jpg';
import edmHits from '../images/edm-hits.jpg';
import gallery4 from '../images/gallery4.jpg';
import gallery5 from '../images/gallery5.jpg';
import gallery6 from '../images/gallery6.jpg';

// Array of gallery items for proper component mapping
const galleryItems = [
  {
    id: 1,
    image: rockClassics,
    alt: 'Rock Classics',
    title: 'Rock Classics',
    description: "From Led Zeppelin's thunderous riffs to Queen's stadium anthems..."
  },
  {
    id: 2,
    image: jazzLegends,
    alt: 'Jazz Legends',
    title: 'Jazz Legends',
    description: 'Step into the world of Miles Davis, Ella Fitzgerald, and John Coltrane...'
  },
  {
    id: 3,
    image: gallery1,
    alt: 'Gallery 1',
    title: 'Gallery 1',
    description: 'Snapshots from live shows...'
  },
  {
    id: 4,
    image: gallery2,
    alt: 'Gallery 2',
    title: 'Gallery 2',
    description: 'A behind-the-scenes look at recording sessions...'
  },
  {
    id: 5,
    image: gallery3,
    alt: 'Gallery 3',
    title: 'Gallery 3',
    description: 'Festival vibes  from colorful crowds to unforgettable performances...'
  },
  {
    id: 6,
    image: hipHopVibes,
    alt: 'Hip Hop Vibes',
    title: 'Hip-Hop Vibes',
    description: 'Discover the beats and rhymes that tell stories of resilience...'
  },
  {
    id: 7,
    image: edmHits,
    alt: 'EDM Hits',
    title: 'EDM Hits',
    description: "Feel the drop with today's biggest EDM hits..."
  },
  {
    id: 8,
    image: gallery4,
    alt: 'Gallery 4',
    title: 'Gallery 4',
    description: 'Iconic album covers that became works of art...'
  },
  {
    id: 9,
    image: gallery5,
    alt: 'Gallery 5',
    title: 'Gallery 5',
    description: 'Fan-submitted artwork and photography celebrating music...'
  },
  {
    id: 10,
    image: gallery6,
    alt: 'Gallery 6',
    title: 'Gallery 6',
    description: 'Fan-submitted artwork and photography celebrating music...'
  }
];

const Grid = () => {
  return (
    <section className='content-grid'>
      {galleryItems.map((item) => (
        <article key={item.id}>
          <img src={item.image} alt={item.alt} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </section>
  );
};

export default Grid;
