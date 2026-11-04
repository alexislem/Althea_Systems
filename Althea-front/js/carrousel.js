
/* Initialise les commandes et le suivi du carrousel */
export const initialiserCarrousel = () => {

  const zone = document.querySelector("#une-defile");
  const precedent = document.querySelector(".precedent");
  const suivant = document.querySelector(".suivant");

  // Vérifie que les éléments du carrousel existent
  if (!zone || !precedent || !suivant) {
    return;
  }

  /* Déplace le carrousel d'une diapositive */
  const defiler = (sens) => {

    const reduireAnimations = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    zone.scrollBy({
      left: sens * zone.clientWidth,
      behavior: reduireAnimations ? "auto" : "smooth"
    });
  };

  /* Navigation avec les boutons */
  precedent.addEventListener("click", () => {
    defiler(-1);
  });

  suivant.addEventListener("click", () => {
    defiler(1);
  });

  /* Récupère les diapositives et les pastilles */
  const slides = zone.querySelectorAll(":scope > li");
  const pastilles = document.querySelectorAll(".pastilles a");

  if (slides.length === 0 || pastilles.length === 0) {
    return;
  }

  /* Détecte quelle diapositive est visible */
  const observateur = new IntersectionObserver((entrees) => {

    entrees.forEach((entree) => {

      // Ignore les diapositives qui ne sont plus visibles
      if (!entree.isIntersecting) {
        return;
      }

      // Récupère l'identifiant de la diapositive visible
      const id = entree.target.id;

      // Met à jour les pastilles
      pastilles.forEach((pastille) => {

        if (pastille.hash === `#${id}`) {
          pastille.setAttribute("aria-current", "true");
        } else {
          pastille.removeAttribute("aria-current");
        }

      });

    });

  }, {
    root: zone,
    threshold: 0.6
  });

  /* Surveille toutes les diapositives */
  slides.forEach((slide) => {
    observateur.observe(slide);
  });

};
