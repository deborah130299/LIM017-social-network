/* import { onNavigate } from './main.js' */

export const Post = () => {
    const PostElement = document.createElement('section');
    PostElement.setAttribute('class', 'containerView');
    const PostDiv = `
  <div id="fondo">
  <img class="logo-destinos1" src="./img/destinos.png" alt="destinos+"/>
  <img class="logo-destinos2" src="./img/Destinos-logo.png" alt="logo1"/>
  <form id="Welcome" class="WelcomeForm">

  <div class = 'title'>
  <p> Bienvenido</p>
  </div>

  `;

    return PostDiv;
};