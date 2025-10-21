import {Link} from 'react-router-dom'; 
import "./../css/Contact.css";

const Contact = () => {
    return (
        <div className="project-row">

            {/* Contact Form */}
            <div className="contact-form" aria-labelledby="contact">
              <form id="contact-form" action="https://api.web3forms.com/submit" method="POST" noValidate>
                {/* Replace with your Access Key */}
                <input type="hidden" name="access_key" value="5d06ecf7-d26a-4dce-a67e-b0fd07e60b49" />

                <div className="form-row">
                  <label htmlFor="name">Name <span aria-hidden="true"></span></label>
                  <input id="name" name="name" type="text" required maxLength="100" placeholder="Your name" />
                </div>

                <div className="form-row">
                  <label htmlFor="email">Email <span aria-hidden="true"></span></label>
                  <input id="email" name="email" type="email" required placeholder="you@domain.com" />
                </div>

                <div className="form-row">
                  <label htmlFor="message">Message <span aria-hidden="true"></span></label>
                  <textarea id="message" name="message" rows="6" required placeholder="Tell me about your project or question..."></textarea>
                </div>

                {/* Honeypot spam protection (hidden) */}
                <input type="checkbox" name="botcheck" className="hidden-honeypot" aria-hidden="true" tabIndex="-1" style={{display: 'none'}} />

                <div className="form-actions">
                  <button id="submit-btn" type="submit">Send Message</button>
                  <div id="form-status" className="form-status" role="status" aria-live="polite"></div>
                </div>
              </form>
              <p className="note">Send me a message :)</p>
            </div>

            {/* IFrame (YouTube example) */}
            <div className="iframe-wrapper" aria-hidden="false">
              <div className="responsive-iframe">
                <iframe
                  src="https://www.youtube.com/embed/5qap5aO4i9A"
                  title="Lofi Hip Hop Radio - Beats to Relax/Study to"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </div>
              <p className="iframe-caption">Lofi Hip Hop Radio - Beats to Relax/Study to</p>
            </div>

        </div>
    )
};

export default Contact;