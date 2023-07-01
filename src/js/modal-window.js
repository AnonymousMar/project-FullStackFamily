const MODAL_TEMPLATE = `<div class="modal-wrapper">
    <div class="modal-backdrop"></div>
    <div class="modal-body">
      <div class="modal-body-btn">
        <button type="button" class="modal-close-btn">
          <svg class="icon-close" width="24" height="24">
            <use href="./img/icons.svg#icon-x-close"></use>
          </svg>
        </button>
      </div>
      <div class="modal-body-card">
        <div class="modal-body-image">
          <img
            src=""
            alt="#"
            class="modal-body-image-poster"
            width="287"
            height="408"
          />
        </div>
        <div class="modal-body-about-book">
          <h2 class="modal-body-title">HELLO BEAUTIFUL</h2>
          <h3 class="modal-body-autor">Ann Napolitano</h3>
          <p class="modal-body-text">
            In a homage to Louisa May Alcott’s “Little Women,” a young man’s
            dark past resurfaces as he gets to the know the family of his
            college sweetheart.
          </p>
        </div>
        <div class="modal-body-logo">
          <ul class="modal-body-logo-list">
            <li class="modal-body-logo-item">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Amazon"
                class="modal-body-logo-link"
              >
                <picture>
                  <source srcset="./img/shopping/amazon.png" type="image/png" />
                  <img
                    class="modal-body-media-icon-amazon"
                    src="./img/shopping/amazon.png"
                    alt="Amazon logo"
                    width="32"
                    height="11"
                  />
                </picture>
              </a>
            </li>
            <li class="modal-body-logo-item">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Apple Books"
                class="modal-body-logo-link"
              >
                <picture>
                  <source srcset="./img/shopping/apple.png" type="image/png" />
                  <img
                    class="modal-body-media-icon"
                    src="./img/shopping/apple.png"
                    alt="Apple book logo"
                    width="16"
                    height="16"
                  /> </picture
              ></a>
            </li>
            <li class="modal-body-logo-item">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bookshop"
                class="modal-body-logo-link"
              >
                <picture>
                  <source
                    srcset="./img/shopping/bookshop.png"
                    type="image/png"
                  />
                  <img
                    class="modal-body-media-icon"
                    src="./img/shopping/bookshop.png"
                    alt="Book shop logo"
                    width="16"
                    height="16"
                  /> </picture
              ></a>
            </li>
          </ul>
        </div>
        <div class="modal-body-container-btn">
          <button class="modal-body-add-btn" type="submit">
            add to shopping list
          </button>
        </div>
      </div>
    </div>
  </div>`;

let bodyEl = document.getElementById('modalId');
let openModal = document.getElementById('openBtn');

function openModalWindow() {
  bodyEl.insertAdjacentHTML('afterbegin', MODAL_TEMPLATE);
  let closeButton = document.querySelector('.modal-close-btn');
  let modalWrapper = document.querySelector('.modal-wrapper');
  closeButton.addEventListener('click', closeModal);
  modalWrapper.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleKeyDown);
}

function closeModal() {
  document.querySelector('.modal-wrapper').remove();
}

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function handleClickOutside(event) {
  if (!event.target.closest('.modal-body')) {
    closeModal();
  }
}

openModal.addEventListener('click', openModalWindow);
