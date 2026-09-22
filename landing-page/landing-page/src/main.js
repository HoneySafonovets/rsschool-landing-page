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
});
lightBtn.addEventListener('click', () => {
  darkBtn.classList.remove('header__switch-dark-active');
  lightBtn.classList.add('header__switch-active-light');
});