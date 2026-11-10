const btn = document.querySelector('.menu-btn');
const list = document.querySelector('nav ul');

if (btn && list) {
  const toggle = open => {
    list.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  };
  btn.addEventListener('click', () => toggle(!list.classList.contains('open')));
  list.addEventListener('click', e => { if (e.target.closest('a')) toggle(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });
}

document.querySelectorAll('form[data-form]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const isGuide = form.dataset.form === 'guide';
    const msg = form.querySelector('.msg');
    msg.style.display = 'block';
    msg.textContent = isGuide
      ? 'Thank you! Your guide is opening now.'
      : 'Thank you! Ella will reply within 24 hours.';
    if (isGuide) window.open('confidence-guide.html', '_blank', 'noopener');
    form.reset();
  });
});
