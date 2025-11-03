import ContactForm from "../components/Contact.jsx";
import IFrameLofi from "../components/IFrameLofi.jsx";
import "../css/ContactDecor.css";

export default function Contact() {
  return (
    <section className="contact-studio">
        <h1>Contact</h1>
        <p>Pitch music, complain, or just say hi.</p>
  

      <div className="console">
        <ContactForm />
        <div className="monitor">
          <IFrameLofi />
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