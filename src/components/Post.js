//import { cierreActividadUsuario } from "../firebase/funcionesAuth.js";
import { collection, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
import { db } from "../lib/firebaseConfig.js";

// Renderizando el header
export const Post = () => {
    const PostElement = document.createElement('section');
    PostElement.setAttribute('class', 'containerView');
    const containerPost = `
        <div class="enlacePerfil">
        <a href="#/artperfil"><img class="imagenUsuario"></a>
            <p class="nombreUsuario"><a id="perfil" href="#/artperfil"></a></p>
        </div>
        <img src="./img/destinos-logo.png" class="titulo-header">
        <div class="puntosVerticales">
        <figure></figure>
            <figure class="middle"></figure>
            <p class="equis"></p>
            <figure></figure>
            <ul class="desplegable">
            <li><a id="cerrar-sesion"><img src="./img/cerrar-sesion.png"><span>Cerrar Sesión</span></a></li>
            </ul>
        </div>
        <form id="createPost">
        <textarea id="post" placeholder="Descripcion"></textarea>
        <button id="publicar">Publicar</button>
        </form>
        `
        ;
        PostElement.innerHTML = containerPost;
        const unsubscribe = onSnapshot(
            collection(db, "Posts"),
            (snapshot) => {
              //
            },
            (error) => {
              // ...
            });
    return PostElement;
};

// Funcion de boton cerrar sesion, limpiando el sessionStorage
// redirige a inicio
/*export const cerrarSesion = () => {
    const btnCerrarSesion = document.getElementById("cerrar-sesion");
    btnCerrarSesion.addEventListener("click", () => {
    cierreActividadUsuario()
        .then(() => {
        sessionStorage.clear();
        window.location.hash = "#/home";
        })
        .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
        });
    });
};*/

// Funcionalidad de menu puntos verticales
export const menuPuntosVerticales = () => {
    const puntosVerticales = document.querySelector(".puntosVerticales");
    const middle = document.querySelector(".middle");
    const equis = document.querySelector(".equis");
    const desplegable = document.querySelector(".desplegable");

    puntosVerticales.addEventListener("click", () => {
    middle.classList.toggle("active");
    equis.classList.toggle("active");
    desplegable.classList.toggle("active");
    });
};


