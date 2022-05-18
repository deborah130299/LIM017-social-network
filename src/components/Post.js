//import { cierreActividadUsuario } from "../firebase/funcionesAuth.js";
/* import { onNavigate } from "../main.js"; */
import {
  savePosts,
  onSnapshot,
  collection,
  db,
  deletePosts,

} from "../lib/firebaseConfig.js";
//conGetPosts, deletePosts
// Renderizando el header
export const Post = () => {
  const PostElement = document.createElement("section");
  PostElement.setAttribute("class", "containerView");
  const containerPost = `
  <header>
        <div id='navbar'>
    <ul>  
      <li><a> <img src="./img/destinos-logo.png" height="55px" width="180px" /></a></li>
      <li><a id="buttonStart"><button type="button"> <img src="./img/home.png" height ="30" width="40" /></button></a></li>
      <li><a id="buttonProfile"><button type="button"> <img src="./img/profile.png" height ="30" width="40" /></button></a></li>
      <li><a id="buttonLogout"><button type="button"> <img src="./img/cerrar.png" height ="30" width="40" /></button></a></li>
    </ul>
  </div>
</header>
<div class='enlacePerfil'>
<a href='#/artperfil"><img class="imagenUsuario'></a>
    <p class="nombreUsuario"><a id="perfil" href="#/artperfil"></a></p>
</div>
        <form id='create-Post'>
        <textarea id='post-text' rows='6' placeholder='¿Qué quieres compartir?'></textarea>
        <button id='btn-publicar'>Publicar</button>
        </form>
        <div id='all-posts'></div>
        `;
  PostElement.innerHTML = containerPost;

  const createPost = PostElement.querySelector("#create-Post");
  const postContainer = PostElement.querySelector("#all-posts");

  window.addEventListener("DOMContentLoaded", async () => {
    onSnapshot(collection(db, "Posts"), (querySnapshot) => {
      let html = "";

      querySnapshot.forEach((doc) => {
        const task = doc.data();
        html += `
            <div class='post-public'>
                <textarea class='post-public'>${task.description}</textarea>
                <button class='btn-borrar' data-id='${doc.id}'>Borrar</button>
            </div>
            `;
      });
      postContainer.innerHTML = html;
      const btnsDelete = postContainer.querySelectorAll(".btn-borrar");
      console.log(btnsDelete);

      btnsDelete.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          console.log("aaaaaaa");
          //e.preventDefault();
          deletePosts(e.target.dataset.id)
            .catch((err) => {
              console.log(err);
            });
        });
      });
    });
  });

  createPost.addEventListener("submit", (e) => {
    e.preventDefault();

    const description = document.getElementById("post-text");

    savePosts(description.value);
  });

/*   PostElement.querySelector('#buttonLogout').addEventListener('click', () => {
    signOff()
      .then(() => onNavigate('/'))
      .catch((error) => {
        console.log('No pudo cerrar sesión', error);
      });
    }); */
  return PostElement;
};
