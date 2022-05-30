import { onNavigate } from "../main.js";
import { signInApp } from "../lib/authFunctions.js";

export const Login = () => {
    const LoginElement = document.createElement("section");
    LoginElement.setAttribute("class", "containerView");
    const LoginDiv = `
    <div id="fondo-home">
    <img class='logo-destinos0-home' src='./img/logo-destinos0.png' alt='logo0'/>
    <img class='logo-destinos1-login' src='./img/logo-destinos1.png' alt='destinos+'/>
    <form id='login' class='loginForm'>
    <div class='conteinerGeneral-login">
    <div class='SingUpBox'>

        <form id='formLogIn' class='formLogIn'>

          <div class='form-login'>
          <p id='tittle-login'>Iniciar Sesión</p>
          <input id='email' class='form-control' type='email' placeholder='Correo electrónico'>
          </div>

          <div class='form-login'>
            <input minlength='5' id="password" class='form-control' type='password'
            placeholder='Contraseña' autocomplete='current-password'>
          </div>

          <div>
            <button id='btnSignIn' class='button-'>Inicia sesión</button>
            <button id='btnBack' class='button'>Regresar al Home</button>
          </div>

        </form>
    </div>
    </div>
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
      onNavigate('/Post');
      localStorage.setItem('email', user.email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  });
    LoginElement.querySelector("#btnBack").addEventListener('click', () => {
    onNavigate('/');
    });

    return LoginElement;
};