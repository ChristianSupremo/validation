const form = document.getElementById('myForm');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');

const fullnameError = document.getElementById('fullnameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function(event) {
    let isValid = true;

    if (fullname.value.trim() === '') {
        fullnameError.textContent = 'Please enter your full name';
        isValid = false;
    } else {
        fullnameError.textContent = '';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (password.value.trim() === '') {
        passwordError.textContent = 'Please enter a password';
        isValid = false;
    } else if (password.value.trim().length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault();
    }
});
