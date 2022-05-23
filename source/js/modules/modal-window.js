const feedbackModal = document.querySelector('[data-element="feedback"]');
const phoneButton = document.querySelector('[data-element="call"]');
const closeButton = document.querySelector('[data-element="button-close"]');
const modalOverlay = document.getElementById('modal-overlay');
const modaFocus = document.getElementById('modal-name');

const getModal = () => {
  phoneButton.addEventListener('click', function () {
    if (feedbackModal.classList.contains('is-invalid')) {
      feedbackModal.classList.remove('is-invalid');
      feedbackModal.classList.add('is-open');
      modaFocus.focus();
    }
    closeButton.addEventListener('click', function () {
      feedbackModal.classList.remove('is-open');
      feedbackModal.classList.add('is-invalid');
    });
  }, {passive: true});

  modalOverlay.addEventListener('click', function () {
    feedbackModal.classList.add('is-invalid');
    feedbackModal.classList.remove('is-open');
  }, {passive: true});
};
export {getModal};
