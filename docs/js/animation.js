/*==================================
  HEADER AU DÉFILEMENT
==================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(0,0,0,.90)";
        header.style.padding = "10px 6%";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(0,0,0,.65)";
        header.style.padding = "15px 6%";
        header.style.boxShadow = "none";

    }

});