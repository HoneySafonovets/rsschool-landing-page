export default function mobileMemuOpen() {
  const mobileBtn = document.querySelector('.header__menu-btn');
  const mobileNav = document.querySelector('.header__nav');
  const mobileLink = document.querySelectorAll('.header__list-link');

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
    
    mobileBtn.classList.remove('header__menu-btn-active');
    mobileNav.classList.remove('header__nav-mobile');
    document.body.classList.remove('no-scroll');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' ) {
      mobileBtn.classList.remove('header__menu-btn-active');
      mobileNav.classList.remove('header__nav-mobile');
      document.body.classList.remove('no-scroll');
    }
  });
}