// script.js
const sections = document.querySelectorAll("section"); // Pour récupérer toutes les sections
const btn = document.querySelector("a"); // Bouton
const hiddenClass = "hidden"; // Classe CSS pour cacher les sections

function toggleSections() {
    sections.forEach((section) => {
        section.classList.toggle(hiddenClass); // Ajoute ou retire la classe "hidden"
    });
}

// Ajout de l'écouteur d'événement
btn.addEventListener("click", toggleSections);


