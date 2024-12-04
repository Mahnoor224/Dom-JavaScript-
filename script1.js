function validate(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').vlaue;
    const age = document.getElementById('age').value;
    const msgbox = document.getElementById('message');

    let message = '';

    if (email === '') {
        message = 'Please enter an email.';
        msgbox.style.color = 'red';
    } else if (pass === '') {
        message = 'Password must be at least 8 characters.';
        msgBox.style.color = 'red';
    } else if (age === '') {
        message = 'Age must be between 12 and 50.';
        msgBox.style.color = 'red';
    }                       
