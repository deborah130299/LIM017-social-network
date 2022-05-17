//import { cierreActividadUsuario } from "../firebase/funcionesAuth.js";
import { savePosts, conGetPosts, deletePosts } from '../lib/firebaseConfig.js';
// Renderizando el header
export const Post = () => {
  const PostElement = document.createElement('section');
  PostElement.setAttribute('class', 'containerView');
  const containerPost = `
        <div class='enlacePerfil'>
        <a href='#/artperfil"><img class="imagenUsuario'></a>
            <p class="nombreUsuario"><a id="perfil" href="#/artperfil"></a></p>
        </div>
        <img src='./img/destinos-logo.png' class='logo-destinos0'>
        <div class='cerrar-post'>
            <ul class="desplegable">
            <li><a id='cerrar-sesion'><img src='./img/cerrar-sesion.png' class="cerrar-sesion"></a></li>Cerrar Sesión</span></a></li>
            </ul>
        </div>
        <form id='create-Post'>
        <textarea id='post-text' rows='6' placeholder='¿Qué quieres compartir?'></textarea>
        <button id='btn-publicar'>Publicar</button>
        </form>
        `;
    PostElement.innerHTML = containerPost;

const createPost  = PostElement.querySelector('#create-Post');
const postContainer = document.querySelector('#root');

window.addEventListener('DOMContentLoaded', async () => {
    conGetPosts((querySnapshot) => {
        let html = '';

        querySnapshot.forEach(doc => {
            const task = doc.data();
            html += `
                <form id='post-public'>
                    <textarea id='post-public'>${task.description}</textarea>
                    <button id='btn-borrar' data-id='${doc.id}'>Borrar</button>
                </form>
            `;
        });

        postContainer.innerHTML = html
        const btnsDelete = postContainer.querySelectorAll('#btn-borrar')
        btnsDelete.forEach(btn => {
            btn.addEventListener('click', ({target:{ dataset }}) =>
            deletePosts(dataset.id))
        })
    });
});

    createPost.addEventListener('submit', (e) => {
        e.preventDefault();

        const description = document.getElementById('post-text');

        savePosts(description.value)
    })

    return PostElement;
};