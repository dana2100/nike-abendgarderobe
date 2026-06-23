// ============================================================
// Mobile-Menü (Burger-Toggle)
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (!menuToggle || !mobileNav) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
  });

  // Menü schließen, wenn ein Link angeklickt wird
  mobileNav.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Menü öffnen');
    });
  });

  // Menü schließen, wenn auf Desktop-Breite gewechselt wird (z. B. Fenster vergrößert)
  const desktopQuery = window.matchMedia('(min-width: 900px)');
  desktopQuery.addEventListener('change', (e) => {
    if (e.matches) {
      mobileNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Footer-Akkordeons auf Mobile einklappen
function setFooterAccordion() {
  const groups = document.querySelectorAll('.footer-group');
  if (window.innerWidth < 900) {
    groups.forEach(g => g.removeAttribute('open'));
  } else {
    groups.forEach(g => g.setAttribute('open', ''));
  }
}

setFooterAccordion();
window.addEventListener('resize', setFooterAccordion);
});
