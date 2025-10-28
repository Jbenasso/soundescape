import "../css/Spotlight.css";

export default function Spotlight() {
  return (
    <div className="flex-layout">
      <section>
        <article>
          <h2>Genre Spotlight</h2>
          <p>Each month, we shine a light on a genre that shaped the world of music...</p>
        </article>

        <article>
          <h2>Featured Artist</h2>
          <p>
            This week’s spotlight is on <strong>Herbie Hancock</strong>, a jazz
            innovator...
          </p>
        </article>

        <article>
          <h2>Community Picks</h2>
          <p>Our community playlist is packed with listener favorites...</p>
        </article>
      </section>
    </div>
  );
}