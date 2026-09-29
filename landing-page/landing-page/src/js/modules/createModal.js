// Create MODAL WINDOW
export default function createModal(
  image,
  name,
  description,
  price,
  size_s,
  size_m,
  size_l,
  additives_1,
  additives_2,
  additives_3
) {
    const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
        <div class="modal__overlay" data-close>
          <div class="modal">

            <div class="modal__img-wrapper">
              <img class="modal__image" src="${image}" alt="${name}">
            </div>

            <div class="modal__content">
              <div class="modal__content-face">
                <h2 class="modal__title">${name}</h2>
                <p class="modal__subtitle">${description}</p>
              </div>

              <div class="modal__description">

                <div class="modal__description-size">
                  <h3 class="modal__size-subtittle">Size</h3>

                  <div class="modal__size-wrapper">
                    <div class="modal__list-item modal__list-item-active"  id="s">
                      <div class="modal__img-text">
                        S
                      </div>
                      <span class="modal__list-item-text">${size_s}</span>
                    </div>

                    <div class="modal__list-item" id="m">
                      <div class="modal__img-text">
                        M
                      </div>
                      <span class="modal__list-item-text">${size_m}</span>
                    </div>

                    <div class="modal__list-item" id="l">
                      <div class="modal__img-text">
                        L
                      </div>
                      <span class="modal__list-item-text">${size_l}</span>
                    </div>

                  </div>
                </div>

                
                <div class="modal__description-additives">
                  
                  <h3 class="modal__additives-subtittle">Additives</h3>

                  <div class="modal__additives-wrapper">
                    <div class="modal__list-item-additives"  id="1">
                      <div class="modal__img-text-additives">
                        1
                      </div>
                      <span class="modal__list-item-text-additives">${additives_1}</span>
                    </div>
                    <div class="modal__list-item-additives" id="2">
                      <div class="modal__img-text-additives">
                        2
                      </div>
                      <span class="modal__list-item-text-additives">${additives_2}</span>
                    </div>
                    <div class="modal__list-item-additives" id="3">
                      <div class="modal__img-text-additives">
                        3
                      </div>
                      <span class="modal__list-item-text-additives">${additives_3}</span>
                    </div>
                  </div>
                </div>
                
                <div class="modal__total">
                  <div class="modal__total-total">Total:</div>
                  <div class="modal__total-price">$${price}</div>
                </div>
              </div>
              
              
              <div class="modal__footer">

                <div class="modal__footer-text-block">
                  
                  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_147811_7961)">
                      <path d="M8 7.66663V11" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8 5.00667L8.00667 4.99926" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00004C14.6663 4.31814 11.6816 1.33337 7.99967 1.33337C4.31778 1.33337 1.33301 4.31814 1.33301 8.00004C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_147811_7961">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <p class="modal__footer-text">
                    The cost is not final. Download our mobile app to see the final price and place your order.
                    Earn loyalty points and enjoy your favorite coffee with up to 20% discount.
                  </p>
                </div>
                
                <div class="modal__footer-close">Close</div>
              </div>
            </div>    
          </div>
        </div>
      `;
    document.body.appendChild(modal);
    document.body.classList.add('no-scroll');

    // Remove Modal window and remove Listener
    function removeListener() {
      modal.remove();
      document.body.classList.remove('no-scroll');
      document.querySelector('.modal__footer-close').removeEventListener('click', removeListener);
    }
    document.querySelector('.modal__footer-close').addEventListener('click', removeListener);

    // REMOVE modal if click any modal
    modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal__overlay')) {
        removeListener();
      }
    });

    return modal;
}