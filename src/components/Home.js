import { onNavigate } from '../main.js'

export const Home = () => {
  const HomeElement = document.createElement('section');
  HomeElement.setAttribute('class', 'containerView');
  const HomeDiv =`
  <div id='fondo-home'>
  <img class='logo-destinos0-home' src='./img/logo-destinos0.png' alt='logo0'/>
  <img class='logo-destinos1-home' src='./img/logo-destinos1.png' alt='destinos+'/>
  <form id='welcome" class="welcomeForm'>
  <div class = 'title-home'>
    <p class="title"> ¡Bienvenid@!</p>
  </div>
  <section class='welcome-wrapper'>
    <div  class = 'textWelcome'>
      <a>Somos una comunidad de viajer@s conectados alrededor del mundo, sé parte de esta gran familia</a>
    </div>
    <button class='btnUnete'>Crea tu cuenta</button>
    <button class='btnIniciar'>Iniciar Sesion</button>
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
