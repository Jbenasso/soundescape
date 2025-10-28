import "../css/Contact.css";   // re-use card styles

export default function IframeLofi() {
  return (
    <div className="iframe-wrapper">
      <div className="responsive-iframe">
        <iframe
          src="https://www.youtube.com/embed/5qap5aO4i9A"
          title="Lofi Hip Hop Radio - Beats to Relax/Study to"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p className="iframe-caption">Lofi Hip Hop Radio - Beats to Relax/Study to</p>
    </div>
  );
}