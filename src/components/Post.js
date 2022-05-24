//import { auth } from "../lib/authFunctions.js";
import { onNavigate } from "../main.js";
import {
  savePost,
  onSnapshot,
  collection,
  db,
  getPost,
  deletePosts,
  updatePost
} from "../lib/firebaseConfig.js";

// Renderizando el header
export const Post = () => {
  const PostElement = document.createElement("section");
  PostElement.setAttribute("class", "containerView");
  const containerPost = `
  <header class='navbar'>
    <div id='navbar'>
    <ul>
      <li><a> <img src='./img/logodenav.png' height='55px' width='180px' /></a></li>
      <li><a><button id='buttonnav' class='logout'> <img src='./img/cerrar.png' height ='30' width='40' /></button></a></li>
    </ul>
    </div>
  </header>
  <div class='fondo'>
    <a href='#/artperfil'><img class='imagenUsuario'></a>
    <p class='nombreUsuario'><a id='perfil' href='#/artperfil'></a></p>
  </div>
  <form id='create-Post'>
    <textarea id='post-title' rows='2' cols='50' placeholder='¿Qué quieres compartir?'></textarea>
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

  let editStatus = false;
  let id = "";

  onSnapshot(collection(db, "Posts"), (querySnapshot) => {
    let html = "";

    querySnapshot.forEach((doc) => {
      const task = doc.data();
      html += `
            <div class='post-public'>
            <h1 id='post-public'>${task.title}</h1>
            <p id='post-public'>${task.description}</p>
            <p id='post-author'>${task.author}</p>
                <button class='btn-borrar' data-id='${doc.id}'>Borrar</button>
                <button class='btn-edit' data-id='${doc.id}'>Editar</button>
            </div>
            `;
    });
    postContainer.innerHTML = html;
    const btnsDelete = postContainer.querySelectorAll(".btn-borrar");

    btnsDelete.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        deletePosts(e.target.dataset.id).catch((err) => {
          console.log(err);
        });
      });
    });

  const btnsEdit = postContainer.querySelectorAll(".btn-edit");

  btnsEdit.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      const doc = await getPost(e.target.dataset.id)
      const task = doc.data()

      createPost['post-title'].value = task.title
      createPost['post-text'].value = task.description

      editStatus = true;
      id = doc.id;

      createPost['btn-publicar'].innerText = 'Actualizar'

      });
    });
  });

  createPost.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("post-title");
    const description = document.getElementById("post-text");
    const author = document.getElementById("post-author");

    if (!editStatus) {
      savePost(title.value, description.value, author.value);
    } else {
      updatePost(id, {
        title:title.value,
        description: description.value
      });

      editStatus = false;
    }
    createPost.reset();
  });

  return PostElement;
};
