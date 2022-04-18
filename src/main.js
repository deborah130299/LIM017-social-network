// 1. Mostrar HTML después de seleccionar un link
//  1.1 Reemplazar contenido del div con id root
//  1.2 Cambiar la URL para que no ocupe el '#'
// 2. Mostrar un HTML correcto al recargar la página
import { Home } from './components/Home.js';
import { SignIn } from './components/SignIn.js';
import { Register } from './components/Register.js';
const rootDiv = document.getElementById('root');

const homeContent = '<h1>Destinos + </h1>';
const signInContent = '<h1>Bienvenidx</h1>';
const registerContent = '<h1>Regístrate</h1>';

// llave -> valor
// '#home' -> homeContent
const linkContent = {
  '#home': Home,
  '#signIn': SignIn,
  '#register': Register,
};

const routes = {
  '/': Home,
  '/signIn': SignIn,
  '/register': Register,
};

// Mostrat HTML correcto al recargar la página (2)
const pathname = window.location.pathname;
rootDiv.appendChild(routes[pathname]());

// Cambie la URL para no ocupar el '#', ej. '#about' por '/about' (1.2)
const changeRoute = (hash) => {
  // Cambie la URL para no usar el '#'
  if (hash === '#home') {
    window.history.replaceState({}, 'home', '/');
  } else if (hash === '#signIn') {
    window.history.replaceState({}, 'signIn', '/signIn');
  } else if (hash === '#register') {
    window.history.replaceState({}, 'register', '/register');
  }
};

// Cambiar HTML al clickear links (1)
window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  rootDiv.appendChild(linkContent[hash]());
  changeRoute(hash);
});

window.onpopstate = () => {
  if (window.location.pathname === '/') {
    rootDiv.innerHTML = homeContent;
  } else if (window.location.pathname === '/signIn') {
    rootDiv.innerHTML = signInContent;
  } else if (window.location.pathname === '/register') {
    rootDiv.innerHTML = registerContent;
  }
};
