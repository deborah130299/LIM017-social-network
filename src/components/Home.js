
import { onNavigate } from './main.js'

export const Home = () => {
  const HomeElement = document.createElement('section');
  HomeElement.setAttribute('class', 'containerView');
  const HomeDiv =`
  <div id="fondo">
  <img class="fondo" src="./img/fondo.jpeg" alt="destinos+"/>
  <form id="Welcome" class="WelcomeForm">
  
  <div class = 'title'>
  <p> Bienvenido</p>
  </div>
  <section class="welcome-wrapper">
  <div  class = 'text'>
  <a>Somos una comunidad de viajer@s conectados alrededor del mundo, sé parte de esta gran familia</a>
 
  </div>
  <button class="btnUnete">Crea tu cuenta</button>
  <button class="btnIniciar">Iniciar Sesion</button>
</section>
  </form>
  </div>
  `;
  HomeElement.innerHTML = HomeDiv;
  HomeElement.querySelector('.btnUnete').addEventListener('click', () => {
    onNavigate('/Register');
  });

  HomeElement.querySelector('.btnIniciar').addEventListener('click', () => {
    onNavigate('/Login');
  });

  return HomeElement;
  
};

