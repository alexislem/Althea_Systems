
import { trouverProduit } from "./produits.js";

/* Contenu du panier : identifiant et quantité de chaque produit */
export const panier = [];

/* Ajoute un produit au panier */
export const ajouter = (id) => {
  const produit = trouverProduit(id);

  // Impossible d'ajouter un produit inexistant ou épuisé
  if (!produit || produit.stock === 0) {
    return;
  }

  const ligne = panier.find((article) => article.id === id);

  if (ligne) {
    ligne.quantite += 1;
  } else {
    panier.push({ id, quantite: 1 });
  }
};

/* Modifie la quantité d'un produit */
export const changerQuantite = (id, quantite) => {
  if (quantite <= 0) {
    supprimer(id);
    return;
  }

  const ligne = panier.find((article) => article.id === id);

  if (ligne) {
    ligne.quantite = quantite;
  }
};

/* Supprime un produit du panier */
export const supprimer = (id) => {
  const index = panier.findIndex((article) => article.id === id);

  if (index !== -1) {
    panier.splice(index, 1);
  }
};

/* Calcule le nombre total d'articles */
export const compterArticles = () =>
  panier.reduce((total, article) => total + article.quantite, 0);

/* Calcule le montant total du panier */
export const calculerTotal = () =>
  panier.reduce((total, article) => {
    const produit = trouverProduit(article.id);

    if (!produit) {
      return total;
    }

    return total + produit.prix * article.quantite;
  }, 0);
