const feedbackModal = document.querySelector('[data-element="feedback"]');
const phoneButton = document.querySelector('[data-element="call"]');
const closeButton = document.querySelector('[data-element="button-close"]');
const modalOverlay = document.getElementById('modal-overlay');
const modalFocus = document.getElementById('modal-name');
const scrollBody = document.getElementById('body');

const getModal = () => {
  feedbackModal.focus();
  phoneButton.addEventListener('click', function () {
    if (feedbackModal.classList.contains('is-invalid')) {
      feedbackModal.classList.remove('is-invalid');
      feedbackModal.classList.add('is-open');
      scrollBody.classList.add('scroll-hidden');
      modalFocus.focus();
    }
    closeButton.addEventListener('click', function () {
      feedbackModal.classList.remove('is-open');
      feedbackModal.classList.add('is-invalid');
      scrollBody.classList.remove('scroll-hidden');
    });
  }, {passive: true});

  modalOverlay.addEventListener('click', function () {
    feedbackModal.classList.add('is-invalid');
    feedbackModal.classList.remove('is-open');
    scrollBody.classList.remove('scroll-hidden');
  }, {passive: true});

  window.addEventListener('click', outsideClick);
  function outsideClick(e) {
    if (e.target === feedbackModal) {
      feedbackModal.classList.add('is-invalid');
      feedbackModal.classList.remove('is-open');
      scrollBody.classList.remove('scroll-hidden');
    }
  }

  window.addEventListener('keyup', function (e) {
    let key = e.keyCode;
    if (key === 27) {
      feedbackModal.classList.add('is-invalid');
      feedbackModal.classList.remove('is-open');
      scrollBody.classList.remove('scroll-hidden');
    }
  }, {passive: true});

};
export {getModal};
