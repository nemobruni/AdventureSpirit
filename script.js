//1. asocia el boton a una variable, para poder usar el boton despues
const toggleButton = document.getElementsByClassName('menu-button')[0]

//2. asocia los links de la navbar a una variable, para cambiarle la clase despues
const navbarLinks = document.getElementsByClassName('navbar-links')[0]


//3. agrega un event listener al boton que escucha clicks para que haga algo cuano el usuario clickea
toggleButton.addEventListener('click', () => {

    //4. cuando el usuario hace clicks, cambia la clase de los links a active
    navbarLinks.classList.toggle('active')
})