(function () {
  const DARK_MODE = 'dark';

  function initTheme() {
    const toggles = [
      document.getElementById('themeToggleMobile'),
      document.getElementById('themeToggleDesktop')
    ];

    function applyTheme(isDark) {
      document.documentElement.classList.toggle(DARK_MODE, isDark);
      toggles.forEach(btn => {
        if (!btn) return;
        const icon = btn.querySelector('i');
        if (icon) {
          icon.className = isDark ? 'bi bi-moon-stars-fill' : 'bi bi-brightness-high-fill';
        }
      });
      localStorage.setItem(DARK_MODE, isDark ? 'true' : 'false');
    }

    function detectPreferred() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    function getSavedTheme() {
      const saved = localStorage.getItem(DARK_MODE);
      if (saved !== null) return saved === 'true';
      return detectPreferred();
    }

    toggles.forEach(btn => {
      if (!btn) return;
      btn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains(DARK_MODE);
        applyTheme(!isDark);
      });
    });

    applyTheme(getSavedTheme());
  }

  function initMenu() {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
      });
    });
  }

  function initScrollspy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.site-header');
    const offset = header ? header.offsetHeight + 20 : 100;

    function onScroll() {
      const scrollPos = window.scrollY + offset;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const header = document.querySelector('.site-header');
          const offset = header ? header.offsetHeight : 0;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  function initFooterYear() {
    const el = document.getElementById('footerYear');
    if (el) el.textContent = new Date().getFullYear();
  }

  initTheme();
  initMenu();
  initScrollspy();
  initSmoothScroll();
  initFooterYear();
})();
