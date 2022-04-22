
import { onNavigate } from './main.js';

export const Register = () => {
  const RegisterElement = document.createElement('section');
  RegisterElement.setAttribute('class', 'containerView');
  const RegisterDiv =`
  <div id="fondo">
  <img class="fondo" src="./img/fondo.jpeg" alt="destinos+"/>
    <form id="signUp"  class="signUpForm">
    <p>Registrarse</p>
      <input id="signUpUserName" class="formBox" name="user" type="text" placeholder="nombre de usuario" pattern="^([a-zA-Z0-9-_\\.]+)$" title="Solo puede contener letras, puntos y guiones." required/>
      <span id="user" class="form-error-none">Solo puede contener letras, puntos y guiones.</span> 
      <input id="signUpEmail" class="formBox" name="email" type="email" placeholder="correo@example.com" pattern="^\\S+@\\S+\\.\\S+$" title="Ejemplo: correo@example.com" required/>
      <span id="email" class="form-error-none">Ejemplo: correo@example.com</span>
      <label class="passwordContainer">
        <input id="signUpPassword" class="formBox" name="password" type="password" placeholder="contraseña" pattern="^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,16}$" title="La contraseña debe tener al menos entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos." required/>
        <i class="icon icon-gray icon-eye ai-eye-closed" id="togglePassword"></i>
      </label>
      <span id="password" class="form-error-none">La contraseña debe tener al menos entre 8 y 16 caracteres, al menos una minúscula y al menos una mayúscula.</span>
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
  RegisterElement.querySelector('.btnVolver').addEventListener('click', () => {
    onNavigate('/');
  });

  return RegisterElement;
};