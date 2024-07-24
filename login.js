// html element use in javascript
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let form = document.querySelector('#form')

form.addEventListener('submit', event => {
    event.preventDefault()
    
    console.log(email.value);
    console.log(password.value);
})