// Create MODAL WINDOW
export default function createModal() {
    const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
        <div class="modal__overlay" data-close>
          <div class="modal">

            <img class="modal__image" src="" alt="">

            <div class="modal__content">
              // Shapka modal
              <div class="modal__content-face">
                <h2 class="modal__title">Irish coffee</h2>
                <p class="modal__title">Fragrant black coffee with Jameson Irish whiskey and whipped milk</p>
              </div>

              <div class="modal__description">

                <div class="modal__description-size">
                  <h3 class="modal__subtittle">Size</h3>

                  <div class="modal__size-wrapper">
                    <div class="modal__list-item modal__list-item-active"  id="s">
                      <div class="modal__img-text">
                        S
                      </div>
                      <span class="modal__list-item-text">200 ml</span>
                    </div>

                    <div class="modal__list-item" id="m">
                      <div class="modal__img-text">
                        M
                      </div>
                      <span class="modal__list-item-text">300 ml</span>
                    </div>

                    <div class="modal__list-item" id="l">
                      <div class="modal__img-text">
                        L
                      </div>
                      <span class="modal__list-item-text">400 ml</span>
                    </div>

                  </div>
                </div>

                <-- Size section -->
                <div class="modal__description-additives">
                  
                  <h3 class="modal__subtittle">Additives</h3>

                  <div class="modal__additives-wrapper">
                    <div class="modal__list-item-additives modal__list-item-additives-active"  id="1">
                      <div class="modal__img-text-additives">
                        1
                      </div>
                      <span class="modal__list-item-text-additives">Sugar</span>
                    </div>
                    <div class="modal__list-item-additives" id="2">
                      <div class="modal__img-text-additives">
                        2
                      </div>
                      <span class="modal__list-item-text-additivest">Cinnamon</span>
                    </div>
                    <div class="modal__list-item-additives" id="dessert">
                      <div class="modal__img-text-additives">
                        3
                      </div>
                      <span class="modal__list-item-text-additives">Syrup</span>
                    </div>
                  </div>
                </div>
                
                <div class="modal__total">
                  <div class="modal__total-total">Total:</div>
                  <div class="modal__total-price">$${7.00}</div>
                </div>
              </div>
              
              <--  Modal footer with TOTAL -->
              <div class="modal__footer">

                <div class="modal__footer-text-block">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_147813_8562)">
                      <path d="M8 7.66663V11" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8 5.00667L8.00667 4.99926" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8 1.33337C4.3181 1.33337 1.33333 4.31814 1.33333 8.00004C1.33333 11.6819 4.3181 14.6667 8 14.6667Z" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_147813_8562">
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
    return modal;
}