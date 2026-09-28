window.addEventListener("load", function () {
    window.scrollTo(0, 0);
    }
);

const botonMenu = document.getElementById("Boton-Menu");
const menu = document.getElementById("Menu");
const menuLinks = document.querySelectorAll("#Menu a");

botonMenu.addEventListener("click", function () {
    menu.classList.toggle("Menu-Abierto");
    }
);
menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("Menu-Abierto");
        }
    );
});