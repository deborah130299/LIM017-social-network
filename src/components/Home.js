import { onNavigate } from '../main.js'

export const Home = () => {
  const HomeElement = document.createElement('section');
  HomeElement.setAttribute('class', 'containerView');
  const HomeDiv =`
  <div id="fondo">
  <img class="logo-destinos1" src="./img/destinos-logo.png" alt="destinos+"/><form id="welcome" class="welcomeForm">
  <form id="welcome" class="welcomeForm">
  <div class = 'title'>
  <p> ¡Bienvenid@!</p>
  </div>
  <section class="welcome-wrapper">
  <div  class = 'textWelcome'>
  <a>Somos una comunidad de viajer@s conectados alrededor del mundo, sé parte de esta gran familia</a>
  </div>
  <div class="flexbox">
  <button class="btnUnete">Crea tu cuenta</button>
  <button class="btnIniciar">Iniciar Sesion</button>
</div>
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
