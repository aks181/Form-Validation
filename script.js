const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const mobno = document.getElementById('Mobile Number');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Error outline and message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//success outline
function showSuccess (input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}


//email validation
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//number validation
function isValidNumber(input) {
    const no = /^\d{10}$/;
    return no.test(String(input).toLowerCase());
}

//allow only numbers as input
function onlyNumberInput() {
    this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');
}
//event listeners

mobno.addEventListener('input', onlyNumberInput) ;

form.addEventListener('submit', function(event){
    event.preventDefault();

    if(username.value === '') {
        showError(username, 'Username is required.');
    } else {
        showSuccess(username);
    }

    if(email.value === '') {
        showError(email, 'Email is required.');
    } else if(!isValidEmail(email.value)){
        showError(email,'Email is not valid.');
    } else {
        showSuccess(email);
    }

    if(mobno.value === '') {
        showError(mobno, 'Mobile Number is required.');
    } else if (!isValidNumber(mobno.value)) {
        showError(mobno, 'Mobile Number is not valid.')
    } 
    else {
        showSuccess(mobno);
    }

    if(password.value === '') {
        showError(password, 'Password is required.');
    } else {
        showSuccess(password);
    }

    if(password2.value === '') {
        showError(password2, 'Passwords do not match.');
    } else {
        showSuccess(password2);
    }

    
});