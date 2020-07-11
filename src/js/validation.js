var nameInput = document.querySelector('input[name=first_name]');
var phoneInput = document.querySelector('input[name=contact_phone]');
var zipInput = document.querySelector('input[name=zip_code]');
var form = document.querySelector('form');
var alertHTML = document.querySelector("#alertMessage");
var alertModal = document.querySelector("#alert");
var alertCloseButton = document.querySelector("#alertCloseButton");

function setJsCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = 'expires=' + d.toGMTString();
  document.cookie = cname + '=' + cvalue + '; path=/; ' + expires;
}
// handle errors and return messages. all fields are assumed to have errors (be empty) by default
var errors = {
  full_name: ['Name', true],
  phone: ['Phone Number', true],
  zip: ['Zip Code', true]
}

// each input is watching for changes; on change a validation function is fired
// if function requires params, you must call an anonymous function that returns desired function

if(typeof(nameInput) !== 'undefined' && nameInput !== null) {
  massAddEventListener( nameInput, function() {
    return checkCharsForValidString(nameInput, 'full_name', errors);
  });
}
if(typeof(phoneInput) !== 'undefined' && phoneInput !== null) {
  massAddEventListener( phoneInput, formatAndValidatePhone);
}
if(typeof(zipInput) !== 'undefined' && zipInput !== null) {
  massAddEventListener( zipInput, formatAndValidateZip);
}

if(typeof(form) !== 'undefined' && form !== null) {
  form.addEventListener('submit', function(event){
    event.preventDefault();
    submitform();
  }, false)
}


alertCloseButton.addEventListener('click', function(event) {
  event.preventDefault();
  alertModal.style.display = 'none';
}, false)

function formatAndValidatePhone() {
  var numbers = phoneInput.value.replace(/\D/g, ''),
  char = {3:'-',6:'-'};
  phoneInput.value = '';
  for (var i = 0; i < numbers.length; i++) {
    phoneInput.value += (char[i]||'') + numbers[i];
  }
  if (numbers.length != 10) {
    invalidateInputStyling(phoneInput, 'phone', errors);
  } else {
    validateInputStyling(phoneInput, 'phone', errors);
  }
}

function formatAndValidateZip() {
  var numbers = zipInput.value.replace(/\D/g, '');
  zipInput.value = '';
  for (var i = 0; i < numbers.length; i++) {
    zipInput.value += numbers[i];
  }
  if (numbers.length != 5) {
    invalidateInputStyling(zipInput, 'zip', errors);
  } else {
    validateInputStyling(zipInput, 'zip', errors);
  }
}

function checkCharsForValidString(inpt, inptVal, obj) {
  if (inpt.value.trim().length > 0) {
    validateInputStyling(inpt, inptVal, obj);
  } else {
    invalidateInputStyling(inpt, inptVal, obj);
  }
}

function massAddEventListener(inputSelector, functionToAdd) {
  inputSelector.addEventListener('keyup', functionToAdd);
  inputSelector.addEventListener('keydown', functionToAdd);
  inputSelector.addEventListener('change', functionToAdd);
  inputSelector.addEventListener('paste', functionToAdd);
  inputSelector.addEventListener('blur', functionToAdd);
}

function invalidateInputStyling(currInput, errorsObjectKey, errObj) {
  var changedInpt = currInput;
  var changedObj = errObj;
  if (changedInpt.classList) {
    changedInpt.classList.remove('valid');
    changedInpt.classList.add('invalid');
    changedInpt.parentElement.classList.remove('valid');
    changedInpt.parentElement.classList.add('invalid');
  }
  else {
    changedInpt.className += ' ' + 'invalid';
    changedInpt.className += ' ' + 'invalid';
  }
  var reqText = changedInpt.nextElementSibling.nextElementSibling;
  if(typeof(reqText) !== 'undefined' && reqText !== null) {
    reqText.style.display = 'block';
  }
  (changedObj[errorsObjectKey])[1] = true;
}

function validateInputStyling(currInput, errorsObjectKey, errObj) {
  var changedInpt = currInput;
  var changedObj = errObj;
  if (changedInpt.classList) {
    changedInpt.classList.add('valid');
    changedInpt.parentElement.classList.add('valid');
    changedInpt.classList.remove('invalid');
    changedInpt.parentElement.classList.remove('invalid');
  }
  else {
    changedInpt.className += ' ' + 'valid';
    changedInpt.className += ' ' + 'valid';
  }
  var reqText = changedInpt.nextElementSibling.nextElementSibling;
  if(typeof(reqText) !== 'undefined' && reqText !== null) {
    reqText.style.display = 'none';
  }
  (changedObj[errorsObjectKey])[1] = false;
}

//this function removes dashes and spaces from the phone number input value upon form submission. It is called in submitform()
function stripPhoneNumber () {
  phoneInput.value = phoneInput.value.replace(/-|\s/g,"");
  document.querySelector('input[name=transfer_number]').value = document.querySelector('input[name=transfer_number]').value.replace(/-|\s/g,"");
}

function submitform() {
  var errorlogging = [];
  for (var key in errors) {
    if ((errors[key])[1]) {
      errorlogging.push((errors[key])[0]);
    }
  }

  if (errorlogging.length == 0) {
    var username = nameInput.value.split(' ')[0];
    setJsCookie('name', username, 14);
    stripPhoneNumber();
    form.submit();
  } else {
    alertModal.style.display = 'inline-block';
    var formatAlert = 'Please enter a valid '+errorlogging.join(', ').replace(/,(?!.*,)/gmi, ' and')+'.';
    alertHTML.innerHTML= formatAlert;

    return false;
  }
}
