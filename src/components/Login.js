import { onNavigate } from "./main.js";
 import { signInApp } from "../lib/authFunctions.js"; 

export const Login = () => {
    const LoginElement = document.createElement("section");
    LoginElement.setAttribute("class", "containerView");
    const LoginDiv = `
    <div id="fondo">
    <img class="logo-destinos1" src="./img/destinos.png" alt="destinos+"/>
    <img class="logo-destinos2" src="./img/Destinos-logo.png" alt="logo1"/>
    <form id="login" class="loginForm">
    <div class"conteinerGeneral">
    <div class="SingUpBox">
        <form id="formLogIn" class="formLogIn">
        <div class="form-control">
        <p>Iniciar Sesion</p>
        <input id="email" type="email" placeholder="Correo electrónico">
        </div>
        <div class="form-control">
            <input minlength="5" id="password" type="password"
            placeholder="Contraseña">
        </div>
        <button class="btnSignIn" class="button">Inicia sesión</button>


        <button class="btnVolver">Regresar al Home</button>
        </form>
        </form>
        </div>
        `;

    LoginElement.innerHTML = LoginDiv;
    const buttonLogin = LoginElement.querySelector('#btnSignIn');
  buttonLogin.addEventListener ( 'click', (e) => {
    e.preventDefault();
    const email = LoginElement.querySelector('#email').value;
    const password = LoginElement.querySelector('#password').value;
    signInApp ( email, password )
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      onNavigate('/Post');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  });
    LoginElement.querySelector(".btnVolver").addEventListener("click", () => {
    onNavigate("/");
    });

  
    return LoginElement;
};


