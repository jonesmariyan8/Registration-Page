const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const phonenumberInput = document.querySelector('#phonenumber');
const addressInput = document.querySelector('#address');
const cityInput = document.querySelector('#city');
const zipInput = document.querySelector('#zip');
const countryInput = document.querySelector('#country');
const genderInput = document.querySelector('#gender');
const dateInput = document.querySelector('#date');


form.addEventListener('submit', (event)=>{
  /*  
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {*/
       //  event.preventDefault();
         validateForm();
    /* }*/

});


function validateForm() {
    //USERNAME
    if(usernameInput.value.trim()==''){
        setError(usernameInput, 'Name can not be empty');
    }else if(usernameInput.value.trim().length <5 || usernameInput.value.trim().length > 15){
        setError(usernameInput, 'Name must be min 5 and max 15 charecters');
    }else {
        setSuccess(usernameInput);
    }
    //EMAIL
    if(emailInput.value.trim()==''){
        setError(emailInput, 'Provide email address');
    }else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);
    }else{
        setError(emailInput, 'Provide valid email address');
    }

    //PASSWORD
    if(passwordInput.value.trim()==''){
        setError(passwordInput, 'Password can not be empty');
    }else if(passwordInput.value.trim().length <6 || passwordInput.value.trim().length >20){
        setError(passwordInput, 'Password min 6 max 20 charecters');
    }else {
        setSuccess(passwordInput);
    }
    
    //PhoneNumber
    if(phonenumberInput.value.trim()==''){
        setError(phonenumberInput, 'Phonenumber can not be empty');
    }else if(phonenumberInput.value.trim().length <6 || phonenumberInput.value.trim().length >20){
        setError(phonenumberInput, 'Phonenumber min 6 max 20 charecters');
    }else {
        setSuccess(phonenumberInput);
    }
    
     //Address
     if(addressInput.value.trim()==''){
        setError(addressInput, 'Address can not be empty');
    }else if(addressInput.value.trim().length <20 || addressInput.value.trim().length >60){
       setError(addressInput, 'Address min 20 max 60 charecters');
    }else {
        setSuccess(addressInput);
        
    }

    
     //City   
     if(cityInput.value.trim()==''){
        setError(cityInput, 'City can not be empty');
    }else if(cityInput.value.trim().length <6 || cityInput.value.trim().length >20){
       setError(cityInput, 'City min 6 max 20 charecters');
    }else {
        setSuccess(cityInput);
        
    }

    
     //Zip   
     if( zipInput.value.trim()==''){
        setError(zipInput, 'Zip can not be empty');
    }else if(zipInput.value.trim().length <6 || zipInput.value.trim().length >20){
       setError(zipInput, 'Zip min 6 max 20 charecters');
    }else {
        setSuccess(zipInput);
        
    }

    /*
     //Country
     if(countryInput.value.trim()==''){
        setError(countryInput, 'Country can not be empty');
    }else if(countryInput.value.trim() || countryInput.value.trim()){
       setError(countryInput, 'Country not selected');
    }else {
        setSuccess(countryInput);
        
    }*/
    var country = "india"; // or "female", "non-binary", etc.

    // Alternatively, you can use a boolean for binary gender representation
    var isindia = true; // or false for female
    
    // Another option is to use an enumeration or an object
    var country = {
      SELECT: "select",
      INDIA: "India",
      US: "US",
    };
    
    var userCountry = Country.INDIA;
   
    //Gender
    var gender = "male"; // or "female", "non-binary", etc.

// Alternatively, you can use a boolean for binary gender representation
var isMale = true; // or false for female

// Another option is to use an enumeration or an object
var Gender = {
    SELECT: "select",
  MALE: "male",
  FEMALE: "female",
  NON_BINARY: "non-binary",
};

var userGender = Gender.MALE;
   
}

var date = "dd"; // or "female", "non-binary", etc.

// Alternatively, you can use a boolean for binary gender representation
var isdd = true; // or false for female

// Another option is to use an enumeration or an object
var date = {
  DD: "dd",
  MONTH: "month",
  YEAR: "year",
};

var userdate = date.year;





function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}


function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(email){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}

var selectedGender = document.getElementById("gender").value;
console.log(selectedGender);


var selectedCountry = document.getElementById("country").value;
console.log(selectedCountry);



/*


let colors = [
    '#74b9ff',
    '#ff7675',
    '#fd79a8',
    '#55efc4',
    '#fd9644'
]
function createElement(){
    let container = document.querySelector('.container')
    let span = document.createElement('span');

    var size = Math.random() * 50;
    let bg = colors[Math.floor(Math.random() * colors.length)];

    span.style.height = 50 + size + 'px';
    span.style.width = 50 + size + 'px';
    span.style.top = Math.random() * innerHeight + 'px';
    span.style.top = Math.random() * innerWidth + 'px';
span.style.background = bg;

    container.appendChild(span);
   
    setTimeout(() => {
      span.remove()  
    },5000);
}
setInterval(createElement,150);
*/

