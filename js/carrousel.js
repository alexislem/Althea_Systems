export const initialiserCarrousel = () => {
  const zone = document.querySelector("#une-defile");
  if (!zone) return;
  const conteneur = zone.closest(".carrousel");
  const precedent = conteneur.querySelector(".precedent");
  const suivant = conteneur.querySelector(".suivant");
  const pastilles = [...conteneur.querySelectorAll(".pastilles a")];
  const slides = [...zone.children];
  const mouvementReduit = matchMedia("(prefers-reduced-motion: reduce)");
  const defiler = (sens) => zone.scrollBy({ left: sens * zone.clientWidth, behavior: mouvementReduit.matches ? "instant" : "smooth" });
  precedent?.addEventListener("click", () => defiler(-1));
  suivant?.addEventListener("click", () => defiler(1));
  const observer = new IntersectionObserver((entrees) => {
    entrees.forEach((entree) => {
      if (!entree.isIntersecting || entree.intersectionRatio < 0.6) return;
      const index = slides.indexOf(entree.target);
      pastilles.forEach((a) => {
        if (a.hash === `#${entree.target.id}`) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
      if (precedent) precedent.disabled = index === 0;
      if (suivant) suivant.disabled = index === slides.length - 1;
      if (document.activeElement === precedent && precedent.disabled) suivant?.focus();
      if (document.activeElement === suivant && suivant.disabled) precedent?.focus();
    });
  }, { root: zone, threshold: 0.6 });
  slides.forEach((slide) => observer.observe(slide));
};
