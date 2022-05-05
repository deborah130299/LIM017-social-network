import { Home } from "./Home.js";
import { Register } from "./Register.js";
import { Login } from "./Login.js";
import { Post } from "./Post.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyACELeB7pHbMS0Bo8nCVCC95VIxKx6DoS4',
  authDomain: 'social-network-destinos.firebaseapp.com',
  projectId: 'social-network-destinos',
  storageBucket: 'social-network-destinos.appspot.com',
  messagingSenderId: '609611098447',
  appId: '1:609611098447:web:6304ca8c2e7416021b3d3a',
  measurementId: 'G-E4BPN7MZ8C',
};
  // Initialize Firebase
export const app = initializeApp(firebaseConfig);

const rootDiv = document.getElementById("root");

const routes = {
    "/": Home,
    "/Register": Register,
    "/Login": Login,
    "/Post": Post,

};

export const onNavigate = (pathname) => {
    window.history.pushState({}, pathname, window.location.origin + pathname);

    while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
    }

    rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];


window.onpopstate = () => {
    while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
    }
    rootDiv.appendChild(routes[window.location.pathname]());
};


rootDiv.appendChild(component());

export function showLogIn() {
    // boton que permite iniciar sesion
    const logInBtn = document.getElementById('#btnSignIn');
    logInBtn.addEventListener('click', () => {
      const email = document.getElementById('user').value;
      const password = document.getElementById('password').value;
      Login(email, password);
    });
}