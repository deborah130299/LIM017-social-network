import { app } from './firebaseConfig.js';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';


const auth = getAuth(app);
export const createUser = ( email, password)  => createUserWithEmailAndPassword(auth, email, password);
export const signIn = ( email, password) => signInWithEmailAndPassword(auth, email, password);