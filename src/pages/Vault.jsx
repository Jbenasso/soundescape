import "../css/Vault.css";

// vite asset imports (relative to this file)
import jazz   from "../images/vault-jazz.jpg";
import lofi   from "../images/vault-lofi.jpg";
import indie  from "../images/vault-indie.jpg";
import synth  from "../images/vault-synth.jpg";
import hiphop from "../images/vault-hiphop.jpg";
import acoustic from "../images/vault-acoustic.jpg";

const playlists = [
  {id:1, title:"3-A.M. Jazz Smoke",  img:jazz,   time:"33 min", vibe:"Bleary trumpet & cracked-leather stools", vid:"https://www.youtube.com/embed/5qap5aO4i9A"},
  {id:2, title:"Lo-Fi Study Drift",  img:lofi,   time:"52 min", vibe:"Rain on window, cursor blinking",         vid:"https://www.youtube.com/embed/5qap5aO4i9A"},
  {id:3, title:"Indie Garage Revival",img:indie,  time:"28 min", vibe:"Fuzz pedals & cheap-beer nostalgia",      vid:"https://www.youtube.com/embed/5qap5aO4i9A"},
  {id:4, title:"Neon Nightdrive",    img:synth,  time:"41 min", vibe:"Tokyo over-pass at 1:14 a.m.",            vid:"https://www.youtube.com/embed/5qap5aO4i9A"},
  {id:5, title:"Underground Hip-Hop",img:hiphop, time:"38 min", vibe:"Basement cyphers & vinyl crackle",        vid:"https://www.youtube.com/embed/5qap5aO4i9A"},
  {id:6, title:"Acoustic Campfire",  img:acoustic,time:"45 min", vibe:"Wood smoke & open-tuned guitars",        vid:"https://www.youtube.com/embed/5qap5aO4i9A"},
];

export default function Vault() {
  return (
    <section className="vault">
          <h1>The Vault</h1>
          <p>Hand-stitched playlists + 30-second visual drops. Updated whenever the mood strikes.</p>

      <div className="grid">
        {playlists.map(p=>(
          <article key={p.id} className="card">
            <div className="cover" style={{backgroundImage:`url(${p.img})`}}>
              <span className="length">{p.time}</span>
            </div>
            <div className="info">
              <h3>{p.title}</h3>
              <p className="vibe">{p.vibe}</p>
              <a href={p.vid} target="_blank" rel="noreferrer" className="btn">Watch mini-reel</a>
            </div>
          </article>
        ))}
      </div>

      <footer className="cta">
        <h2>Got a crate-digger gem?</h2>
        <p>Send me your secret SoundCloud link – if it hits, it lands in the Vault.</p>
        <a href="/contact" className="btn">Pitch a track</a>
      </footer>
    </section>
  );
}