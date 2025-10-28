import { useState } from "react";
import "../css/Contact.css";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending…");
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("Message sent!");
        form.reset();
      } else {
        setStatus("Error – please try again.");
      }
    } catch {
      setStatus("Network error.");
    }
  };

  return (
    <div className="contact-form" aria-labelledby="contact">
      <form id="contact-form" onSubmit={handleSubmit} noValidate>
        <input type="hidden" name="access_key" value="5d06ecf7-d26a-4dce-a67e-b0fd07e60b49" />
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required maxLength={100} placeholder="Your name" />
        </div>

        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="you@domain.com" />
        </div>

        <div className="form-row">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={6} required placeholder="Tell me about your project or question..."></textarea>
        </div>

        <input type="checkbox" name="botcheck" className="hidden-honeypot" aria-hidden="true" tabIndex={-1} style={{ display: "none" }} />

        <div className="form-actions">
          <button id="submit-btn" type="submit">Send Message</button>
          <div id="form-status" className={`form-status ${status.includes("sent") ? "status-success" : status ? "status-error" : ""}`} role="status" aria-live="polite">
            {status}
          </div>
        </div>
      </form>
      <p className="note">Send me a message :)</p>
    </div>
  );
}