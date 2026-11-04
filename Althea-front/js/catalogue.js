
import { formaterPrix } from "./outils.js";

/* Crée une carte HTML à partir des données d'un produit */
export const creerCarte = (produit) => {
  const { id, nom, prix, stock } = produit;

  const li = document.createElement("li");

  const article = document.createElement("article");
  article.className = "produit";
  article.dataset.id = id;

  // Image du produit
  const image = document.createElement("img");
  image.src = "img/tensiometre_bras.jpg";
  image.alt = "";
  image.width = 400;
  image.height = 300;
  image.loading = "lazy";

  // Nom et lien du produit
  const titre = document.createElement("h3");
  const lien = document.createElement("a");

  lien.href = `produit.html?id=${encodeURIComponent(id)}`;
  lien.textContent = nom;

  titre.append(lien);

  // Prix du produit
  const paragraphePrix = document.createElement("p");
  paragraphePrix.className = "prix";

  const montant = document.createElement("data");
  montant.value = String(prix);
  montant.textContent = formaterPrix(prix);

  paragraphePrix.append(montant);

  // Disponibilité du produit
  const paragrapheStock = document.createElement("p");
  paragrapheStock.className = "stock";

  if (stock === 0) {
    paragrapheStock.classList.add("stock-rupture");
    paragrapheStock.textContent = "En rupture de stock";
  } else {
    paragrapheStock.textContent = "En stock";
  }

  // Bouton d'ajout au panier
  const bouton = document.createElement("button");
  bouton.type = "button";
  bouton.className = "btn";
  bouton.dataset.id = id;

  if (stock === 0) {
    bouton.textContent = "Indisponible";
    bouton.disabled = true;
  } else {
    bouton.textContent = "Ajouter au panier";
  }

  article.append(
    image,
    titre,
    paragraphePrix,
    paragrapheStock,
    bouton
  );

  li.append(article);

  return li;
};

/* Affiche les produits dans la liste HTML */
export const afficherCatalogue = (liste, produits) => {
  liste.replaceChildren();

  produits.forEach((produit) => {
    liste.append(creerCarte(produit));
  });
};
