//import { cierreActividadUsuario } from "../firebase/funcionesAuth.js";
import { savePosts, getPosts } from "../lib/firebaseConfig.js";

// Renderizando el header
export const Post = () => {
  const PostElement = document.createElement("section");
  PostElement.setAttribute("class", "containerView");
  const containerPost = `
        <div class="enlacePerfil">
        <a href="#/artperfil"><img class="imagenUsuario"></a>
            <p class="nombreUsuario"><a id="perfil" href="#/artperfil"></a></p>
        </div>
        <img src="./img/destinos-logo.png" class="titulo-header">
        <div class="cerrar-post">
            <ul class="desplegable">
            <li><a id="cerrar-sesion"><img src="./img/cerrar-sesion.png" class="cerrar-sesion"></a></li>Cerrar Sesión</span></a></li>
            </ul>
        </div>
        <form id="create-Post">
        <textarea id="post-text" rows="6" placeholder="¿Qué quieres compartir?"></textarea>
        <button id="btn-publicar">Publicar</button>
        </form>
        `;
    PostElement.innerHTML = containerPost;

window.addEventListener('DOMContentLoaded',() => {
    getPosts();
})

const createPost  = PostElement.querySelector("#create-Post");
createPost.addEventListener('submit', (e) => {
    e.preventDefault();

    const description = document.getElementById('post-text');

    savePosts(description.value)
})











/*
    var docData = {
            Name: "Cynthia F",
            Country : "Perú",
            Text: "Esta es una prueba marciana",
            Date: new Date("May 10, 2022"),
        };
        setDoc(doc(db, "Posts", "Hola"), docData)
        .then(() => console.log('escribi esta cosa'))
        .catch(() => console.log('no escribi nimichi'));
*/
        
    return PostElement;
};
