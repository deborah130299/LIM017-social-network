import {
  createUser,
  signIn } from './functionFirebase.js'


//const auth = getAuth(app);

export const registerWithEmail = (email, password) => {
  createUser( email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      sessionStorage.setItem('uid', user.uid);
     // window.location.href = '/Post';*/
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

return signIn( email, password);

};
