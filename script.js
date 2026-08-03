// Slight nav background shift once the page has scrolled, so the sticky
// header reads as "docked" rather than floating from the very top.
const nav = document.getElementById('siteNav');
if (nav) {
  const onScroll = () => {
    nav.style.borderBottomColor = window.scrollY > 8
      ? 'rgba(233, 226, 208, 0.16)'
      : 'rgba(233, 226, 208, 0.08)';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Inquiry form: builds a mailto: link from the fields so the visitor's
// email client sends it directly to both of you. Replace with a real form
// backend (Formspree, Getform, etc.) if you'd rather collect these in an
// inbox without depending on the visitor having a mail client configured.
const RECIPIENTS = ['you@example.com', 'pulkitgarg560@gmail.com']; // TODO: update your email

const inquiryForm = document.getElementById('inquiryForm');
if (inquiryForm) {
  inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(inquiryForm);
    const name = data.get('name');
    const email = data.get('email');
    const service = data.get('service');
    const message = data.get('message');

    const subject = `Project inquiry: ${service}`;
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Interested in: ${service}\n\n` +
      `${message}`;

    const mailto = `mailto:${RECIPIENTS.join(',')}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  });
}
