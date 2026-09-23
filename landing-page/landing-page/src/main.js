import './scss/main.scss';

// alert('Привет! Немного не успел доделать, пожалуйста, перепроверь ближе к дедлайну кросс-чека!');
// alert("Hi! I didn't quite manage to finish everything—please double-check it thoroughly.")

// console.log('Привет! Немного не успел доделать, пожалуйста, перепроверь ближе к дедлайну кросс-чека!');
// console.log("Hi! I didn't quite manage to finish everything—please double-check it thoroughly.");

const darkBtn = document.querySelector('.header__switch-dark');
const lightBtn = document.querySelector('.header__switch-light');

darkBtn.addEventListener('click', () => {
  darkBtn.classList.add('header__switch-dark-active');
  lightBtn.classList.remove('header__switch-active-light');

  // Add colors
  document.body.classList.add('body-dark');
  document.querySelector('.header').classList.add('header-nav-dark');
  // Title styles
  document.querySelectorAll('.title').forEach((e) => {
    e.classList.add('title-dark');
  });
  document.querySelector('.favorite__slider').classList.add('favorite__slider-dark');
  document.querySelectorAll('.header__list-link').forEach((e) => {
    // console.log(e)
    e.classList.add('header-text-dark');
  });
  document.querySelector('.enjoy__button').classList.add('enjoy__button-dark');
  document.querySelector('.download__apple').classList.add('download__apple-dark');
  document.querySelector('.download__google').classList.add('download__google-dark');
  document.querySelector('.footer__wrapper').classList.add('footer__wrapper-dark');
});
lightBtn.addEventListener('click', () => {
  darkBtn.classList.remove('header__switch-dark-active');
  lightBtn.classList.add('header__switch-active-light');

  // Remove colors
  document.body.classList.remove('body-dark');
  // Title styles
  document.querySelectorAll('.title').forEach((e) => {
    e.classList.remove('title-dark');
  });
  document.querySelectorAll('.header__list-item').forEach((e) => {
    e.classList.remove('header-text-dark');
  });
  document.querySelectorAll('.header__list-link').forEach((e) => {
    e.classList.remove('header-text-dark');
  });
  document.querySelector('.footer__wrapper').classList.remove('footer__wrapper-dark');
  document.querySelector('.favorite__slider').classList.remove('favorite__slider-dark');
  document.querySelector('.enjoy__button').classList.remove('enjoy__button-dark');
});