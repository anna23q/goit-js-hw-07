const formRegister = document.querySelector('.login-form');

formRegister.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    [form.elements.email.name]: email.trim(),
    [form.elements.password.name]: password.trim(),
  };

  console.log(formData);

  formRegister.reset();
});
