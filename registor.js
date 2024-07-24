// Import the functions you need from the SDKs you need
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"
import { auth } from './config.js'

// html element use in javascript
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let form = document.querySelector('#form')

form.addEventListener('submit', event => {
    event.preventDefault()


    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            window.location = 'login.html'
            email.value = ''
            password.value = ''
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
})