import ContactForm from "../components/Contact.jsx";
import IframeLofi from "../components/IframeLofi.jsx";
import "../css/ContactDecor.css";

export default function Contact() {
  return (
    <section className="contact-studio">
        <h1>Contact</h1>
        <p>Pitch music, complain, or just say hi.</p>
  

      <div className="console">
        <ContactForm />
        <div className="monitor">
          <IframeLofi />
        </div>
      </div>

      <footer className="social-strip">
        <a href="https://twitter.com/soundscape" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://discord.gg/soundscape" target="_blank" rel="noreferrer">Discord</a>
        <a href="mailto:hello@soundscape.fm">Email</a>
      </footer>
    </section>
  );
}