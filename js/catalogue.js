import { formaterPrix } from "./outils.js";

export const creerCarte = (produit) => {
  const { id, nom, prix, stock, image: fichierImage } = produit;
  const li = document.createElement("li");
  const article = document.createElement("article");
  article.className = "produit";

  const image = document.createElement("img");
  image.src = `img/${fichierImage ?? `${id}.jpg`}`;
  image.alt = nom;
  image.width = 800;
  image.height = 600;
  image.loading = "lazy";

  const titre = document.createElement("h3");
  const lien = document.createElement("a");
  lien.href = `produit.html?id=${encodeURIComponent(id)}`;
  lien.textContent = nom;
  titre.append(lien);

  const prixP = document.createElement("p");
  prixP.className = "prix";
  prixP.textContent = formaterPrix(prix);

  const stockP = document.createElement("p");
  stockP.className = "stock";
  stockP.textContent = stock === 0 ? "En rupture de stock" : stock < 5 ? "Stock faible" : "En stock";
  stockP.classList.toggle("stock-rupture", stock === 0);

  const bouton = document.createElement("button");
  bouton.type = "button";
  bouton.dataset.id = id;
  bouton.disabled = stock === 0;
  bouton.textContent = stock === 0 ? "Indisponible" : "Ajouter au panier";
  bouton.setAttribute("aria-label", `${bouton.textContent} : ${nom}`);

  article.append(image, titre, prixP, stockP, bouton);
  li.append(article);
  return li;
};

export const afficherCatalogue = (liste, produits) => {
  liste.replaceChildren();
  produits.forEach((produit) => liste.append(creerCarte(produit)));
};
