import { cierreActividadUsuario } from "../firebase/funcionesAuth.js";
import { validateSessionStorage } from "./validaciones.js";

// Renderizando el header
export const contenidoHeader = () => {
    const userData = validateSessionStorage();
    const headerMuro = `
        <div class="enlacePerfil">
            <a href="#/artperfil"><img src="${userData.imgUsuario}" class="imagenUsuario"></a>
            <p class="nombreUsuario"><a id="perfil" href="#/artperfil">${userData.username}</a></p>
        </div>
        <img src=".img/destinos-logo.png" class="titulo-header">
        <div class="puntosVerticales">
        <figure></figure>
            <figure class="middle"></figure>
            <p class="equis"></p>
            <figure></figure>
            <ul class="desplegable">
            <li><a id="cerrar-sesion"><img src="./img/cerrar-sesion.png"><span>Cerrar Sesión</span></a></li>
            </ul>
        </div>
        `;
    return headerMuro;
};

// Funcion de boton cerrar sesion, limpiando el sessionStorage
// redirige a inicio
export const cerrarSesion = () => {
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
};

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
