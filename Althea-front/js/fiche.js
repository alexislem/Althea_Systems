
import { trouverProduit } from "./produits.js";
import { ajouter } from "./panier.js";
import { mettreAJourIcone } from "./icone-panier.js";

/* Initialise les informations et l'achat sur la fiche produit */
export const initialiserFiche = () => {

  // Récupère la fiche du produit
  const fiche = document.querySelector("article.fiche");

  // Ne fait rien sur les pages sans fiche produit
  if (!fiche) {
    return;
  }

  // Recherche le produit correspondant à la fiche
  const id = fiche.dataset.id;
  const produit = trouverProduit(id);

  if (!produit) {
    console.warn(`Produit introuvable : ${id}`);
    return;
  }

  // Récupère les éléments du formulaire d'achat
  const formulaire = fiche.querySelector("form.achat");

  if (!formulaire) {
    return;
  }

  const champ = formulaire.querySelector('input[type="number"]');
  const bouton = formulaire.querySelector('button[type="submit"]');
  const message = formulaire.querySelector(".message-achat");

  if (!champ || !bouton || !message) {
    return;
  }

  /* Vérifie la disponibilité du produit */
  const rupture = produit.stock === 0;

  // Bloque l'achat si le produit est épuisé
  champ.disabled = rupture;
  bouton.disabled = rupture;

  // Adapte le texte du bouton
  bouton.textContent = rupture
    ? "En rupture de stock"
    : "Ajouter au panier";

  // Actualise l'indication de disponibilité
  const indicationStock = fiche.querySelector(".stock");

  if (indicationStock) {
    indicationStock.textContent = rupture
      ? "En rupture de stock"
      : "En stock";

    indicationStock.classList.toggle("stock-rupture", rupture);
  }

  /* Gère l'ajout au panier depuis le formulaire */

  // Laisse JavaScript afficher ses propres messages de validation
  formulaire.noValidate = true;

  formulaire.addEventListener("submit", (event) => {

    // Empêche le rechargement automatique de la page
    event.preventDefault();

    // Vérifie également le stock lors de l'envoi
    if (produit.stock === 0) {
      message.textContent = "Ce produit est en rupture de stock.";
      return;
    }

    // Convertit la quantité saisie en nombre
    const quantite = Number(champ.value);

    /* Refuse une quantité incorrecte */
    if (
      !Number.isInteger(quantite) ||
      quantite < 1 ||
      quantite > 10
    ) {
      message.textContent = "Entre 1 et 10 exemplaires.";

      // Replace le focus sur le champ de quantité
      champ.focus();

      return;
    }

    /* Ajoute autant de produits que la quantité demandée */
    for (let i = 0; i < quantite; i++) {
      ajouter(produit.id);
    }

    // Affiche un message de confirmation
    message.textContent =
      `${quantite} × ${produit.nom} ajouté${quantite > 1 ? "s" : ""} au panier.`;

    // Met à jour le compteur dans l'en-tête
    mettreAJourIcone();

  });

};
