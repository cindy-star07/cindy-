const signupButton = document.getElementById('signupButton');
const signupForm = document.getElementById('signupForm');

signupButton.addEventListener('click', () => {
  signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
});