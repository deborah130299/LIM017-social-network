/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable eol-last */

export const Home = () => {

    const viewWelcome = `
    <div class = 'messageWelcome'>
    <h1>Destinos +</h1>
    <p>Somos una comunidad de viajerxs</p>
    </div>
    ;
    <img class= 'imgWelcome'
    src= './img/travel.png' alt= 'imgWelcome'>
    `

  const HomeDiv = document.createElement('div')
  HomeDiv.setAttribute('class', 'messageWelcome')
  HomeDiv.innerHTML = viewWelcome + `<a href= '#signIn' >Únete a nuestra comunidad</a>`

  return HomeDiv
};
