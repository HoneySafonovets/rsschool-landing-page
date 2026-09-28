export default function openModal(element) {
    currentDrink = drink;
    selectedOptions = {};

    modalElement.querySelector('.modal__image').src = element.image;
    modalElement.querySelector('.modal__title').alt = element.name;
    modalElement.querySelector('.modal__title').textContent = element.name;
    modalElement.querySelector('.modal__description').textContent = element.description;


    // Add modal
    modalElement.classList.add('modal__overlay-active');
    document.body.classList.add('no-scroll');
  }