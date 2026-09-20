// ============================================================
// Anaconda XB 360 - Website interactions
// ============================================================

function copyRepoUrl() {
  const el = document.getElementById('repo-url');
  if (!el) return;

  const url = el.textContent.trim();

  const done = () => {
    const fb = document.getElementById('copy-feedback');
    if (fb) {
      fb.textContent = 'Copied!';
      setTimeout(() => { fb.textContent = ''; }, 2500);
    }
  };

  const fail = () => {
    const fb = document.getElementById('copy-feedback');
    if (fb) {
      fb.textContent = 'Copy failed — select and copy manually.';
      setTimeout(() => { fb.textContent = ''; }, 3500);
    }
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(done).catch(fail);
  } else {
    const tmp = document.createElement('textarea');
    tmp.value = url;
    tmp.style.position = 'fixed';
    tmp.style.opacity = '0';
    document.body.appendChild(tmp);
    tmp.select();
    try {
      document.execCommand('copy');
      done();
    } catch (e) {
      fail();
    }
    document.body.removeChild(tmp);
  }
}

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Active nav highlighting ----------
  const path = window.location.pathname;

  document.querySelectorAll('.site-nav a').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;

    const linkFile = href.split('/').pop();
    const pathFile = path.split('/').pop() || 'index.html';

    if (linkFile === pathFile) {
      link.classList.add('active');
    }
  });

  // ---------- Scroll fade-in ----------
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach((el) => {
    observer.observe(el);
  });

  // ---------- Neon cursor trail (subtle) ----------
  const trail = [];
  const MAX_TRAIL = 8;

  document.addEventListener('mousemove', (e) => {
    const dot = document.createElement('div');
    dot.style.cssText = `
      position: fixed;
      left: ${e.clientX}px;
      top: ${e.clientY}px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #39ff14;
      box-shadow: 0 0 8px #39ff14;
      pointer-events: none;
      z-index: 9999;
      transition: opacity 0.6s ease, transform 0.6s ease;
      opacity: 0.7;
      transform: translate(-50%, -50%);
    `;
    document.body.appendChild(dot);
    trail.push(dot);

    requestAnimationFrame(() => {
      dot.style.opacity = '0';
      dot.style.transform = 'translate(-50%, -50%) scale(0.3)';
    });

    if (trail.length > MAX_TRAIL) {
      const old = trail.shift();
      if (old && old.parentNode) old.parentNode.removeChild(old);
    }

    setTimeout(() => {
      if (dot.parentNode) dot.parentNode.removeChild(dot);
      const idx = trail.indexOf(dot);
      if (idx > -1) trail.splice(idx, 1);
    }, 650);
  });

});
