import drinksData from '../../data/products.json';

export default function menuCardsRenders(categoryDrink = 'coffee') {
  const cardContainer = document.querySelector('.menu__wrapper');
  const choiceDrink = document.querySelector('.drinks__choice');
  // const categoryDrink = 'coffee';

  // Get data
  function loadDrinks() {
    return drinksData;
  }
  const data = loadDrinks();

  function renderCards(categoryDrink) {
    cardContainer.innerHTML = '';

    data.forEach((el) => {
      let card = '';

      if (el.category === categoryDrink) {
        card = `
          <div class="menu__item" id="${el.name}">
            <div class="img-wrapper">
              <img src="${el.image}" alt="${el.image}" class="menu__item-img">
            </div>
            <div class="text-wrapper">
              <div class="top-wrapper">
                <h2 class="menu__item-title">${el.name}</h2>
                <p class="menu__item-text">${el.description}</p>
              </div>
              <span class="menu__item-price">$${el.price}</span>
            </div>
          </div>
      `;
      }

      cardContainer.insertAdjacentHTML("beforeend", card)
    });
  }
  renderCards(categoryDrink);

  

  choiceDrink.addEventListener('click', (e) => {
    if (!e.target.closest('.drinks__choice-active, .drinks__choice-list')) return;
    const targetChoiceList = e.target.closest('.drinks__choice-active, .drinks__choice-list')



    document.querySelectorAll('.drinks__choice-list').forEach((el) => {
      el.classList.remove('drinks__choice-list-active');
    });

    document.querySelectorAll('.drinks__img-wrapper').forEach((el) => {
      el.classList.remove('drinks__active');
    });

    targetChoiceList.classList.add('drinks__choice-list-active');

    renderCards(targetChoiceList.id);
  });

  cardContainer.addEventListener('click', (e) => {
    if (!e.target.closest('.menu__item')) {
      return;
    }

    const target = e.target;

    // console.log(target)
    if (target.closest('.menu__item')) {
      // console.log(target.closest('.menu__item'));
    }
  });
};