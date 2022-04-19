export const SignIn = () => {

    const showSignIn = `
    <div class"conteinerGeneral">
    <div class="SingUpBox">
        <form id="formLogIn" class="formLogIn">
        <div class="form-control">
        <input id="email" type="email" placeholder="Correo electrónico">
        </div>
        <div class="form-control">
            <input minlength="5" id="password" type="password"
            placeholder="Contraseña">
        </div>
        <button id="btnSignIn" class="button">Inicia sesión</button>
        </form>
        `;

    const SignInDiv = document.createElement('div');
    SignInDiv.innerHTML = showSignIn + `<label class="formText question">¿No tienes cuenta?<a href="#register">Regístrate</a></label>`

    return SignInDiv;
    };