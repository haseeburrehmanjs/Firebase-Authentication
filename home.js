// Import the functions you need from the SDKs you need
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"
import { auth } from './config.js'

let logout = document.querySelector('#logoutBtn')

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('User is signed in, see docs for a list of available properties');
        const uid = user.uid;
        console.log(uid);
        // ...
    } else {
        console.log('User is signed out');
        window.location = 'registor.html'
    }
});

logout.addEventListener('click', () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        window.location = 'registor.html'
    }).catch((error) => {
        // An error happened.
        alert(error)
    });
})