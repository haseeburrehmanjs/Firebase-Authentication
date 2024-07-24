// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";



const firebaseConfig = {
    apiKey: "AIzaSyBpyyYGv6v52WnAkOwvBzUVVHDn2qncprg",
    authDomain: "registorfrombyfirebase.firebaseapp.com",
    projectId: "registorfrombyfirebase",
    storageBucket: "registorfrombyfirebase.appspot.com",
    messagingSenderId: "171075174417",
    appId: "1:171075174417:web:735b27f592cf12d6ea71b0",
    measurementId: "G-NHBCX64JZ6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

console.log(app);
export const auth = getAuth(app);
console.log(auth);