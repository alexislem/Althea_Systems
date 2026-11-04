import { compterArticles } from "./panier.js";

export const mettreAJourIcone = () => {
  const nombre = compterArticles();
  document.querySelectorAll(".panier").forEach((icone) => {
    icone.classList.toggle("a-des-articles", nombre > 0);
    const texte = icone.querySelector(".visually-hidden");
    if (texte) texte.textContent = `(${nombre} article${nombre === 1 ? "" : "s"})`;
  });
};
