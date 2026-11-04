
/* Initialise l'ouverture et la fermeture du menu */
export const initialiserMenu = () => {
  const bouton = document.querySelector(".menu-bouton");

  // Arrête la fonction si le bouton n'existe pas
  if (!bouton) {
    return;
  }

  // Ferme le menu au chargement
  bouton.setAttribute("aria-expanded", "false");

  /* Ouvre ou ferme le menu au clic */
  bouton.addEventListener("click", () => {
    const ouvert =
      bouton.getAttribute("aria-expanded") === "true";

    bouton.setAttribute("aria-expanded", String(!ouvert));
  });

  /* Ferme le menu avec la touche Échap */
  document.addEventListener("keydown", (event) => {

    const ouvert =
      bouton.getAttribute("aria-expanded") === "true";

    if (event.key === "Escape" && ouvert) {

      bouton.setAttribute("aria-expanded", "false");

      // Replace le focus sur le bouton Menu
      bouton.focus();
    }
  });
};
