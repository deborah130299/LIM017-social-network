import { onNavigate } from "./main.js";
import { registerWithEmail } from "../lib/authFunctions.js";

export const Register = () => {
  const RegisterElement = document.createElement("section");
  RegisterElement.setAttribute("class", "containerView");
  const RegisterDiv = `
  <div id="fondo">
  <img class="logo-destinos1" src="./img/destinos.png" alt="destinos+"/>
  <img class="logo-destinos2" src="./img/Destinos-logo.png" alt="logo1"/>
    <form id="signUp"  class="signUpForm">
    <p>Registrarse</p>
      <input id="signUpUserName" class="formBox" name="user" type="text" placeholder="nombre de usuario" pattern="^([a-zA-Z0-9-_\\.]+)$" title="Solo puede contener letras, puntos y guiones." required/>
      <span id="user" class="form-error-none">Solo puede contener letras, puntos y guiones.</span>
      <input id="signUpEmail" class="formBox" name="email" type="email" placeholder="correo@example.com" pattern="^\\S+@\\S+\\.\\S+$" title="Ejemplo: correo@example.com" required/>
      <span id="email" class="form-error-none">Ejemplo: correo@example.com</span>
      <label class="passwordContainer">
        <input id="signUpPassword" class="formBox" name="password" type="password" placeholder="contraseña" minlength="8" maxlength="16" title="La contraseña debe tener al menos entre 8 y 16 caracteres. 
      </label>
      <span id="password" class="form-error-none">La contraseña debe tener al menos entre 8 y 16 caracteres.</span>
      <div class="checkbox">
        <label class="container-checkBox">
          <input type="checkbox" name="term" title="Debe aceptar términos y condiciones" required/><span class="checkmark"></span>
          </label>
        <label class="formText">Acepto términos y condiciones</label>
      </div>
      <span id="term" class="form-error none"></span>
      <button id="signUpButton" class="formButton">Registrarte</button>
      <button class="btnVolver">Regresar al Home</button>
    </form>
    </div>
  `;

  RegisterElement.innerHTML = RegisterDiv;
  const buttonRegister = RegisterElement.querySelector('#signUpButton');
  const email = RegisterElement.querySelector('#signUpEmail').value;
  const password = RegisterElement.querySelector('#signUpPassword').value;
  buttonRegister.addEventListener ( 'click', () => {
    registerWithEmail ( email, password );
  })
  RegisterElement.querySelector(".btnVolver").addEventListener("click", () => {
    onNavigate("/");
  });

  return RegisterElement;
};
