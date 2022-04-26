import { Home } from "./Home.js";
import { Register } from "./Register.js";
import { Login } from "./Login.js";
import { Post } from "./Post.js" ;

const rootDiv = document.getElementById("root");

const routes = {
    "/": Home,
    "/Register": Register,
    "/Login": Login,
     "/Post": Post, 
    };

export const onNavigate = (pathname) => {
    window.history.pushState({}, pathname, window.location.origin + pathname);

    while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
    }

    rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
    while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
    }
    rootDiv.appendChild(routes[window.location.pathname]());
};



