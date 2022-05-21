//import { auth } from "../lib/authFunctions.js";
import { onNavigate } from "../main.js";
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
      <li><a> <img src='./img/logodenav.png' height='55px' width='180px' /></a></li>
      <li><a><button id='buttonnav'> <img src='./img/home.png' height ='30' width='40' /></button></a></li>
      <li><a><button id='buttonnav'> <img src='./img/profile.png' height ='30' width='40' /></button></a></li>
      <li><a><button id='buttonnav' class='logout'> <img src='./img/cerrar.png' height ='30' width='40' /></button></a></li>
    </ul>
    </div>
  </header>
  <div class='fondo'>
    <a href='#/artperfil'><img class='imagenUsuario'></a>
    <p class='nombreUsuario'><a id='perfil' href='#/artperfil'></a></p>
  </div>
  <form id='create-Post'>
    <textarea id='post-tittle' rows='2' cols='50' placeholder='¿Qué quieres compartir?'></textarea>
    <textarea id='post-text' rows='6' cols='50' placeholder='Escribe aquí'></textarea>
    <button id="btn-publicar"><img src='./img/share.png' height ='20' width='30' /></button>
  </form>
  <div id='all-posts'></div>
        `;
  PostElement.innerHTML = containerPost;
  PostElement.querySelector(".logout").addEventListener("click", () => {
    onNavigate("/");
  });
  //console.log(auth.currentUser);
  const createPost = PostElement.querySelector("#create-Post");
  const postContainer = PostElement.querySelector("#all-posts");

  onSnapshot(collection(db, "Posts"), (querySnapshot) => {
    let html = "";

    querySnapshot.forEach((doc) => {
      const task = doc.data();
      html += `
            <div class='post-public'>
            <textarea class='post-public'>${task.description}</textarea>
            <textarea class='post-public'>${task.tittle}</textarea>
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
        e.preventDefault();
        deletePosts(e.target.dataset.id).catch((err) => {
          console.log(err);
        });
      });
    });
  });

  createPost.addEventListener("submit", (e) => {
    e.preventDefault();

    const tittle = document.getElementById("post-tittle");
    const description = document.getElementById("post-text");

    savePosts(tittle.value, description.value);
    

    createPost.reset();
  });

  return PostElement;
};
