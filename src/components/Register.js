import { onNavigate } from '../main.js';
import { registerWithEmail } from '../lib/authFunctions.js';
//<img class="logo-destinos1" src='./img/destinos.png' alt='destinos+'/>
export const Register = () => {
  const RegisterElement = document.createElement('section');
  RegisterElement.setAttribute('class', 'containerView');
  const RegisterDiv = `
<<<<<<< HEAD
  <div id='fondo-register'>
  <img class='logo-destinos0-register' src='./img/logo-destinos0.png' alt='logo0'/>
    <form id='signUpForm'  class="signUpForm">
    <h1>Registrarse</h1>
      <input id='signUpUserName' class='formBox' name='user' type='text' placeholder='Nombre de usuario' title='Solo puede contener letras y números.' required/>
      <span id='user' class='form-error-none'>Sólo puede contener letras y números.</span>
      <input id='signUpEmail' class='formBox' name='email' type='email' placeholder='correo@example.com' pattern='^\\S+@\\S+\\.\\S+$' title='Ejemplo: correo@example.com' required/>
      <input id='signUpPassword' class='formBox' name='password' type='password' placeholder='Contraseña' minlength='8'
        maxlength='16' title='La contraseña debe tener al menos entre 8 y 16 caracteres.' required/>
      <span id='password' class='form-error-none'>La contraseña debe tener al menos entre 8 y 16 caracteres.</span>
      <div class='checkbox'>
        <label class='container-checkBox'>
          <input class='form-error-none' type='checkbox' name='term' title='Debe aceptar términos y condiciones' required/><span class='checkmark'></span>
=======
  <div id="fondo">
<<<<<<< HEAD
  <img class="logo-destinos1" src="./img/destinos-logo.png" alt="destinos+"/>

  <form id="signUpForm"  class="signUpForm">

      <p id="registrarse">Registrarse</p>
      <input id="signUpUserName" class="formBox" name="user" type="text" placeholder="Nombre de usuario"/>
=======
  <img class="logo-destinos0" src="./img/logo-destinos0.png" alt="logo0"/>
    <form id="signUpForm"  class="signUpForm">
    <p>Registrarse</p>
      <input id="signUpUserName" class="formBox" name="user" type="text" placeholder="Nombre de usuario")$" title="Solo puede contener letras y números." required/>
>>>>>>> upstream/main
      <span id="user" class="form-error-none">Sólo puede contener letras y números.</span>
      <input id="signUpEmail" class="formBox" name="email" type="email" placeholder="correo@example.com" pattern="^\\S+@\\S+\\.\\S+$" title="Ejemplo: correo@example.com" required/>

      <label class="passwordContainer">
        <input id="signUpPassword" class="formBox" name="password" type="password" placeholder="Contraseña" minlength="8" maxlength="16" title="La contraseña debe tener al menos entre 8 y 16 caracteres. 
      </label>

      <span id="password" class="form-error-none">La contraseña debe tener al menos entre 8 y 16 caracteres.</span>

      <div class="checkbox">
        <label class="container-checkBox">
          <input class="form-error-none" type="checkbox" name="term" title="Debe aceptar términos y condiciones" required/><span class="checkmark"></span>
>>>>>>> parent of e984963 (css)
          </label>
        <label class='form-error-none'>Acepto términos y condiciones</label>
      </div>
<<<<<<< HEAD
      <span id='term' class='form-error-none'></span>
      <button id='signUpButton' class='btn-register'>Registrarte</button>
      <button id='btnBack' class='btn-register'>Regresar al Home</button>
=======
      <span id="term" class="form-error none"></span>
<<<<<<< HEAD

      <div class="flexbox">
      <button id="signUpButton" class="formButton">Registrarte</button>
      <button id="btnVolver" class="btnVolver">Regresar al Home</button>
      </div>

      </form>
=======
      <button id="signUpButton" class="sigUpButton">Registrarte</button>
      <button class="btnVolver">Regresar al Home</button>
>>>>>>> parent of e984963 (css)
    </form>
>>>>>>> upstream/main
    </div>
  `;

  RegisterElement.innerHTML = RegisterDiv;
  RegisterElement.querySelector('#signUpButton').addEventListener('click', () => {
    onNavigate('/');
    });

  const buttonRegister = RegisterElement.querySelector('#signUpButton');
  buttonRegister.addEventListener ( 'click', (e) => {
    e.preventDefault ();
    const email = RegisterElement.querySelector('#signUpEmail').value;
    const password = RegisterElement.querySelector('#signUpPassword').value;
    console.log( email, password );
    registerWithEmail ( email, password );
  })
  RegisterElement.querySelector('#btnBack').addEventListener('click', () => {
    onNavigate('/');
  });

  return RegisterElement;
};