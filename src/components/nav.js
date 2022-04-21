const showHome = () => {
    window.location.hash = "#/home";
};

const showSignOut = () => {
    window.location.hash = "#/signOut";
};

const nav = () => {
    const showNav = `
        <nav class="tab-nav-container">
        <div class="tabTitle">
            <p>Destinos +</p>
        </div>
        <div class="tab">
            <i id="home" class="fas fa-home fasNav"></i>
        </div>
        <div class="tab">
            <i id="signOut" class="signOutNav"></i>
        </div>
        </nav>
        `;

const navElemt = document.createElement("div");
    navElemt.innerHTML = showNav;

    navElemt.querySelector("#home").addEventListener("click", showHome);

    navElemt.querySelector("#signOut").addEventListener("click", showSignOut);

    return navElemt;
};
export default nav;
