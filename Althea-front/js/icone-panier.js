
import { compterArticles } from "./panier.js";

/* Met à jour l'indicateur du panier */
export const mettreAJourIcone = () => {
  const nombre = compterArticles();

  const liensPanier = document.querySelectorAll(".panier");

  liensPanier.forEach((lien) => {
    lien.classList.toggle("a-des-articles", nombre > 0);

    let texteCache = lien.querySelector(".visually-hidden");

    if (!texteCache) {
      texteCache = document.createElement("span");
      texteCache.className = "visually-hidden";
      lien.append(texteCache);
    }

    texteCache.textContent =
      `(${nombre} article${nombre === 1 ? "" : "s"})`;
  });
};
