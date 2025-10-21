// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    if (link.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Reveal on scroll
const cards = document.querySelectorAll('.content-grid article, .flex-layout article');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

 /* ---------- Async contact form (Web3Forms) ---------- */
  const form = document.getElementById('contact-form');
  if (!form) return;

  const status = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  async function showStatus(message, isError = false) {
    status.textContent = message;
    status.classList.toggle('status-error', isError);
    status.classList.toggle('status-success', !isError);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // HTML5 validation; triggers browser UI
    if (!form.checkValidity()) {
      form.reportValidity();
      showStatus('Please fix the highlighted fields and try again.', true);
      return;
    }

    // Honeypot: if checked, treat as bot and silently fail
    const botcheck = form.querySelector('input[name="botcheck"]');
    if (botcheck && botcheck.checked) {
      // silent fail / give minimal feedback
      showStatus('Submission blocked.', true);
      return;
    }

    // Disable button while sending
    submitBtn.disabled = true;
    submitBtn.setAttribute('aria-busy', 'true');
    showStatus('Sending…');

    const fd = new FormData(form);

    try {
      const resp = await fetch(form.action, {
        method: 'POST',
        body: fd
      });

      // Accept 200 or 201 as success; parse json if possible
      let result = null;
      try { result = await resp.json(); } catch (err) { /* ignore parse failure */ }

      if (resp.ok && (result === null || result.success || resp.status === 200 || resp.status === 201)) {
        showStatus('Thanks — your message was sent!', false);
        form.reset();
      } else {
        // prefer server message if available
        const msg = (result && (result.message || result.error)) ? (result.message || result.error) : 'There was a problem sending your message.';
        showStatus(msg, true);
      }
    } catch (err) {
      showStatus(err.message || 'Network error — please try again.', true);
    } finally {
      submitBtn.disabled = false;
      submitBtn.removeAttribute('aria-busy');
    }
  });

  