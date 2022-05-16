/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
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
export const db = getFirestore(app);

export const savePosts = (description) => {
  addDoc(collection(db, "Posts"), {description:description})
}

export const getPosts = () => getDocs(collection(db, "Posts"))

