
import { onNavigate } from './main.js';

export const Login = () => {
    const LoginElement = document.createElement('section');
    LoginElement.setAttribute('class', 'containerView');
    const LoginDiv =`
    <div id="fondo">
    <img class="fondo" src="./img/fondo.jpeg" alt="destinos+"/>
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
        <button id="btnSignIn" class="button">Inicia sesión</button>
      
        
        <button class="btnVolver">Regresar al Home</button>
        </form>
        </form>
        </div>
        `;


  
        LoginElement.innerHTML = LoginDiv;
   
      
        LoginElement.querySelector('.btnVolver').addEventListener('click', () => {
          onNavigate('/');
        });
      
        return LoginElement;
        
      };
