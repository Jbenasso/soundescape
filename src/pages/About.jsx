import "../css/About.css";

export default function About() {
  return (
    <section className="about-dark">
      {/* Hero with vinyl bg */}
      
          <h1>Behind the Needle</h1>
          <p>SoundScape is a one-person obsession with dusty crates, forgotten B-sides and the perfect 3-a.m. playlist.</p>
      
      {/* fake mini-articles */}
      <article className="story">
        <div className="pic studio" />
        <div className="words">
          <h2>Curated at 2 a.m.</h2>
          <p>Every list is built between coffee refills in a spare-bedroom studio that smells like old sleeves and fresh solder. No algorithms, no record-label promo e-mails—just a Technics 1200, a scarlet interface and a notebook full of BPM scribbles.</p>
        </div>
      </article>

      <article className="story reverse">
        <div className="pic crowd" />
        <div className="words">
          <h2>Live receipts</h2>
          <p>I drag the same field recorder to basement shows, rooftop sets and festival after-hours. Those bootleg cheers and bottle-clicks sneak into the intros of monthly mixes—proof the playlists actually breathed somewhere.</p>
        </div>
      </article>

      {/* fake stats */}
      <div className="stats">
        <span><strong>847</strong> vinyl sides ripped</span>
        <span><strong>312</strong> playlists posted</span>
        <span><strong>19</strong> broken headphones</span>
      </div>

      {/* CTA */}
      <footer className="cta">
        <h3>Want your track featured?</h3>
        <p>Send demos, press kits, or just a Dropbox link—wav preferred, 320 mp3 tolerated.</p>
        <a href="/contact" className="btn">Pitch music</a>
      </footer>
    </section>
  );
}