import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBnd_nu-QzQ-yVOyNbbv79q9Z4-1WZAVXQ",
    authDomain: "login-dbd03.firebaseapp.com",
    projectId: "login-dbd03",
    storageBucket: "login-dbd03.appspot.com",
    messagingSenderId: "536983620056",
    appId: "1:536983620056:web:fef5cff940388a06d18aad",
    measurementId: "G-CQZBE8PGGG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location.href = 'welcome.html';
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert('Error: ' + errorMessage);
        });
}

function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert('Error: ' + errorMessage);
        });
}

document.getElementById('signup-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    signUp(email, password);
});

document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    login(email, password);
});
