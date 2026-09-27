import drinksData from '../../data/slider-products.json';

export default function renderCardJS() {
  const leftArrow = document.querySelector('.favorite__left-arrow');
  const rightArrow = document.querySelector('.favorite__right-arrow');
  const sliderTrack = document.querySelector('.favorite__slider-track');
  // Pagination const
  const pagItem = document.querySelectorAll('.favorite__pagination-item');

  let isGo = false;

  // Get data
  function loadDrinks() {
    return drinksData;
  }
  const data = loadDrinks();

  function renderCards() {
    data.forEach((el) => {
      let card = `
        <div class="favorite__slider-card">
          <img src="${el.img}" alt="${el.name}" class="favorite__drink">
          <ul class="favorite__drink-description">
            <li class="favorite__drink-item favorite__drink-title">${el.name}</li>
            <li class="favorite__drink-item favorite__drink-text">${el.description}</li>
            <li class="favorite__drink-item favorite__drink-price">${el.price}</li>
          </ul>
        </div>
      `;

      sliderTrack.insertAdjacentHTML("beforeend", card)
    });
  }
  renderCards();

  // Make clone cards
  const originalCards = sliderTrack.querySelectorAll('.favorite__slider-card');
  const firstClone = originalCards[0].cloneNode(true);
  const lastClone = originalCards[originalCards.length - 1].cloneNode(true);

  sliderTrack.appendChild(firstClone);
  sliderTrack.insertBefore(lastClone, originalCards[0]);

  // Slider step
  const cardWidth = originalCards[0].offsetWidth;
  const gap = parseInt(getComputedStyle(sliderTrack).gap);
  const step = cardWidth + gap;


  let currentIndex = 1;
  const cardsLength = data.length;

  function currentPagItem() {
    let realIndex = currentIndex - 1;
    if (realIndex < 0) {
      realIndex = cardsLength - 1;
    }
    if (realIndex >= cardsLength) {
      realIndex = 0;
    }

    // MAKE paItem active - if
    pagItem.forEach((e, i) => {
      e.classList.toggle('favorite__pagination-item-active', i === realIndex);
    });
  }

  // Set position 
  function setPosition(animate) {
    if (!animate) sliderTrack.classList.add('no-transition');
    sliderTrack.style.transform = `translateX(-${currentIndex * step}px)`;

    if (!animate) {
      void sliderTrack.offsetWidth;
      sliderTrack.classList.remove('no-transition');
    }
    // sliderTrack.style.transform = `translateX(-${currentIndex * step}px)`;
    currentPagItem();
  }
  setPosition(false);

  // Add infinite slider
  sliderTrack.addEventListener('transitionend', () => {
    if (currentIndex === cardsLength + 1) {
      currentIndex = 1;
      setPosition(false);
      isGo = false;
    }
    if (currentIndex === 0) {
      currentIndex = cardsLength;
      setPosition(false);
      isGo = false;
    }
  });

  // LEFT arrow function for CLICK
  leftArrow.addEventListener('click', () => {
    if (currentIndex <= 0) {
      return;
    }
    if (isGo) {
      return;
    }
    currentIndex--;
    setPosition(true);
    isGo = false;
  });

  // RIGHT arrow function for CLICK
  rightArrow.addEventListener('click', () => {
    if (currentIndex >= cardsLength + 1) {
      return;
    }
    if (isGo) {
      return;
    }
    currentIndex++;
    setPosition(true);
    isGo = false;
  });


  pagItem.forEach((el, i) => {
    el.addEventListener('click', () => {
      currentIndex = i + 1;
      setPosition(true);
    });
  });
}