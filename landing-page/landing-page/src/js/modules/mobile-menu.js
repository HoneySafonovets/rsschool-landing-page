export default function mobileMemuOpen() {
  const mobileBtn = document.querySelector('.header__menu-btn');
  const mobileNav = document.querySelector('.header__nav');
  const mobileLink = document.querySelectorAll('.header__list-link');

  // Close menu
  function closeMenu() {
    mobileBtn.classList.remove('header__menu-btn-active');
    mobileNav.classList.remove('header__nav-mobile');
    document.body.classList.remove('no-scroll');
  }

  mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('header__menu-btn-active');
    mobileNav.classList.toggle('header__nav-mobile');
    document.body.classList.toggle('no-scroll');
    // console.log(mobileNav)
  })

  mobileNav.addEventListener('click', (e) => {
    const target = e.target.closest('.header__list-item');
    
    if (!target) {
      return;
    }
    
    closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' ) {
      closeMenu();
    }
  });

  const mobileChange = window.matchMedia('(min-width: 769px)');
  mobileChange.addEventListener('change', (e) => {
    if (e.matches) {
      closeMenu();
    }
  });
}