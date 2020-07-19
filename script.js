const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const mobno = document.getElementById('Mobile Number');
const password = document.getElementById('password');
const password2 = document.getElementById('Confirm Password');
const reset = document.querySelector('.reset');
//show Error outline and message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success outline
function showSuccess (input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}


//email validation
function isValidEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

//number validation
function isValidNumber(input) {
    const no = /^\d{10}$/;
    if((no.test(String(input.value).toLowerCase())) && (input.value > 1000000000)) {
        showSuccess(input);
    } else {
        showError(input, `${getFieldName(input)} is not valid`);
    }
    return ;
}

//allow only numbers as input
function onlyNumberInput() {
    this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');
}

//password matching check
function checkPasswordMatch(input1, input2) {
    if(input1.value != input2.value) {
        showError(input2, 'Passwords do not match')
    } 
}

//check length of name and password
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`); 
    } else {
        showSuccess(input);
    }
}

//check required fields
function checkRequired(inputArray) {
    inputArray.forEach (function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

//get field names form id
function getFieldName (input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//event listeners
mobno.addEventListener('input', onlyNumberInput) ;

form.addEventListener('submit', function(event){
    event.preventDefault(); //prevents default behaviour of submit
    
    if(username.value === "" || email.value === "" || mobno.value === "" || password.value === "" || password2.value === "" ) {
        checkRequired([username,email,mobno,password,password2]);
    } 
        checkLength(username,3,20);  
        isValidEmail(email);
        isValidNumber(mobno);
        checkLength(password,6,25);  
        checkLength(password2,6,25);
        checkPasswordMatch(password,password2);
    
});

reset.addEventListener('click', function() {
    location.reload();
});