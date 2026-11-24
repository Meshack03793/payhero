const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('number');
const slipFile = document.getElementById('slip');
const certificateFile = document.getElementById('certificate');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const numberError = document.getElementById('phoneError');
const slipError = document.getElementById('slipError');
const certificateError = document.getElementById('certificateError');
const result = document.getElementById('result');


function showError(el,message){
    el.innerHTML=message;
}
 
function clearError(el){
    el.innerHTML="";
}

function validateName(){
    let value = nameInput.value.trim();
    if(value.length < 3){
        showError(nameError,"Name must be more than three");
         return false;

    }
    clearError(nameError);
    return true;
}

function validateEmail() {
  const value = emailInput.value.trim();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    showError(emailError, "Enter a valid email");
    return false;
  }

  clearError(emailError);
  return true;
}

function validateNumber() {
  const value = numberInput.value.trim();

  if (!/^(?:07|01)\d{8}$|^254\d{9}$/.test(value)) {
    showError(numberError, "Enter a valid phone number");
    return false;
  }

  clearError(numberError);
  return true;
}
  function validateSlip(){
    let value = slipFile.value;
    if(!value){
        showError(slipError,"Upload your result slip");
        return false;
    }
    clearError(slipError);
    return true;
  }

  function validateCertificate(){
    let value = certificateFile.value;
    if(!value){
        showError(certificateError,"Upload your leaving certificate");
        return false;
    }
    clearError(certificateError);
    return true;
  }

  function validateForm(){
    let okName = validateName();
    let okEmail = validateEmail();
    let okNumber = validateNumber();
    let okSlip = validateSlip();
    let okCertificate = validateCertificate();
    return okName && okEmail && okNumber && okSlip &&okCertificate;

  }

  form.addEventListener("submit",function(event){
    event.preventDefault();
    result.innerHTML = "";

  result.innerHTML = "";
  if(validateForm()){
    result.innerHTML = "Form is valid";
    result.className = "ok";
  }
  else{
    result.innerHTML = "Fix the errors";
    result.className = "error";
  }
    })



    
