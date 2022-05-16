import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

import { app } from './firebaseConfig.js';

//const auth = getAuth(app);

export const registerWithEmail = (email, password) => {
  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode);
      console.log(errorMessage);
    });
};

export const signInApp = (email, password) => {
  const auth = getAuth();

return signInWithEmailAndPassword(auth, email, password);

};
