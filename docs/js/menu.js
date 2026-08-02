/*==================================
  MENU HAMBURGER
==================================*/

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");

    // Change l'icône
    if (navbar.classList.contains("active")) {
        menuToggle.innerHTML = "✖";
    } else {
        menuToggle.innerHTML = "☰";
    }
});

// Ferme le menu lorsqu'on clique sur un lien
const links = document.querySelectorAll(".navbar a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuToggle.innerHTML = "☰";
    });
});