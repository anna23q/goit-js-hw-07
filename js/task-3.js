const fieldText = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');

fieldText.addEventListener('input', event => {
  userName.textContent = event.currentTarget.value.trim();

  if (userName.textContent === '') {
    userName.textContent = 'Anonymous';
  }
});
