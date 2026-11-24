const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirmPassword');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmError = document.getElementById('confirmError');
const result = document.getElementById('result');


// function to show error
function showError(el,message){
    el.innerHTML=message;
}

// function to clear error
 function clearError(el){
    el.innerHTML="";
 }   

// function to validate name
 function validateName(){
    let value = nameInput.value.trim();
    if(value.length < 2){
        showError(nameError,"Name must be at least two characters");
        return false;
    }
    clearError(nameError);
    return true;
 }


//  function to validate email
function validateEmail(){
    let value = emailInput.value.trim();
    if((!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)))){
        showError(emailError,"Enter a valid email address");
        return false;
    }
    clearError(emailError);
    return true;
}


// function to validate password 
function validatePassword(){
    let value = passwordInput.value.trim();
    if(value.length < 8){
        showError(passwordError,"Password must be at least 8 characters");
        return false;
    }
    clearError(passwordError);
    return true;
}


// function to validate confirm
function validateConfirm(){
    let pass = passwordInput.value;
    let confirm = confirmInput.value;
    if(confirm === ""){
        showError(confirmError,"Please confirm your password");
        return false;
    }
    if(confirm !== pass){
        showError(confirmError,"Passwords do not match");
        return false;
    }
    clearError(confirmError);
    return true;
}



// function to validate form
function validateForm(){
    let okName = validateName();
    let okEmail = validateEmail();
    let okPassword = validatePassword();
    let okConfirm = validateConfirm();
    return okName && okEmail && okPassword && okConfirm;
}


// function to prevent default reloading
    form.addEventListener("submit",function(event){
    event.preventDefault();


    //clear result
result.innerHTML="";



// validate form
if(validateForm()){
    result.innerHTML = "Form is valid!";
    result.className = "ok";
}
else{
    result.innerHTML = "Please fix the errors";
    result.className = "error";
}
   })


// upon clicking of login button, the user will be redirected to department.html if the form is valid ,otherwise the user will be prompted to fix the errors in the form
function goToDepartment(){
    if(validateForm()){
        window.location.href = "department.html";
    }
}
    