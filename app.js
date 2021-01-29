let mainForm = document.querySelector('#mainform');
mainForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if(validateForm()){
        alert('Booking Done succesfully ');
    }

});

let validateForm = () => {
   return(checkUsername() & checkEmail() & checkPassword() & checkConfirmPassword());
};

let checkUsername = () => {
    let inputEl = document.querySelector('#name');
    let inputFeedEl = document.querySelector('#namefeedback');
    let regExp = /^[a-z A-Z 0-9]{4,10}$/;
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeedEl);
        return true;
    }
    else{
        makeInvalid(inputEl,inputFeedEl);
        return false;
    }
};
let checkEmail = () => {
    let inputEl = document.querySelector('#email');
    let inputFeedEl = document.querySelector('#emailfeedback');
    let regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeedEl);
        return true;
    }
    else{
        makeInvalid(inputEl,inputFeedEl);
        return false;
    }
};

let checkPassword = () => {
    let inputEl = document.querySelector('#password');
    let inputFeedEl = document.querySelector('#passwordfeedback');
    let regExp = /^[A-Za-z]\w{7,15}$/; 
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeedEl);
        return true;
    }
    else{
        makeInvalid(inputEl,inputFeedEl);
        return false;
    }
};

let checkConfirmPassword = () => {
    let inputEl = document.querySelector('#cpassword');
    let mainPass = document.querySelector('#password');
    let inputFeedEl = document.querySelector('#cpasswordfeedback');
    let regExp = /^[A-Za-z]\w{7,15}$/;  
    if(regExp.test(inputEl.value) && inputEl.value === mainPass.value){
        makeValid(inputEl,inputFeedEl);
        return true;
    }
    else{
        makeInvalid(inputEl,inputFeedEl);
        return false;
    }
};


let makeValid = (inputEl,inputFeedEl) => {
    inputEl.classList.add('is-form-valid');
    inputEl.classList.remove('is-form-invalid');
    inputFeedEl.classList.add('text-succcess');
    inputFeedEl.classList.remove('text-danger');
    inputFeedEl.innerText = 'Looks Good';
};

let makeInvalid = (inputEl,inputFeedEl) => {
    inputEl.classList.remove('is-form-valid');
    inputEl.classList.add('is-form-invalid');
    inputFeedEl.classList.remove('text-succcess');
    inputFeedEl.classList.add('text-danger');
    inputFeedEl.innerText = `Please Enter a ${inputEl.placeholder}`;
};


/* DOM section */
let userName = document.querySelector('#name');
userName.addEventListener('keyup', function() {
    checkUsername();
});

let email = document.querySelector('#email');
email.addEventListener('keyup', function() {
    checkEmail();
});

let password = document.querySelector('#password');
password.addEventListener('keyup', function() {
    checkPassword();
});

let conPass = document.querySelector('#cpassword');
conPass.addEventListener('keyup', function() {
    checkConfirmPassword();
});