// importamos la funcion que vamos a testear
import { registerWithEmail } from "../src/lib/authFunctions.js";

export const registerWithEmailTest = (email, password) => {
    registerWithEmail(email, password)
    .then((userCredential) => {
      // Signed in
    const user = userCredential.user;
    sessionStorage.setItem("uid", user.uid);
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

