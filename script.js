// script.js

// Get the password input and toggle element
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

// Add event listener for the toggle element
togglePassword.addEventListener('click', function () {
    // Toggle the password field type between 'password' and 'text'
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Change the text of the toggle button
    this.textContent = type === 'password' ? 'Show' : 'Hide';
});
