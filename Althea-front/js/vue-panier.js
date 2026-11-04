
import {
  panier,
  calculerTotal,
  changerQuantite,
  supprimer
} from "./panier.js";

import { trouverProduit } from "./produits.js";
import { formaterPrix } from "./outils.js";
import { mettreAJourIcone } from "./icone-panier.js";

/* Redessine le contenu du panier à partir des données */
export const afficherPanier = () => {

  // Récupère les éléments de la page Panier
  const liste = document.querySelector("#lignes-panier");
  const messageVide = document.querySelector("#panier-vide");
  const total = document.querySelector("#total");

  // Ne fait rien si la page Panier n'est pas présente
  if (!liste || !messageVide || !total) {
    return;
  }

  // Vide la liste avant de reconstruire son contenu
  liste.replaceChildren();

  /* Parcourt les articles présents dans le panier */
  panier.forEach((ligne) => {

    const produit = trouverProduit(ligne.id);

    // Ignore un produit inconnu
    if (!produit) {
      return;
    }

    /* Crée une ligne pour le produit */
    const li = document.createElement("li");
    li.dataset.id = ligne.id;

    const article = document.createElement("article");
    article.className = "ligne-panier";

    // Nom du produit
    const nom = document.createElement("h2");
    nom.textContent = produit.nom;

    /* Crée le champ de quantité */
    const zoneQuantite = document.createElement("div");
    zoneQuantite.className = "champ-quantite";

    const label = document.createElement("label");
    label.htmlFor = `quantite-${produit.id}`;
    label.textContent = `Quantité pour ${produit.nom}`;

    const champ = document.createElement("input");
    champ.type = "number";
    champ.id = `quantite-${produit.id}`;
    champ.name = "quantite";
    champ.min = "1";
    champ.max = "99";
    champ.step = "1";
    champ.value = String(ligne.quantite);

    zoneQuantite.append(label, champ);

    /* Calcule le sous-total de la ligne */
    const sousTotal = document.createElement("p");
    sousTotal.className = "sous-total";

    const montant = produit.prix * ligne.quantite;

    sousTotal.textContent =
      `Sous-total : ${formaterPrix(montant)}`;

    /* Crée le bouton de suppression */
    const boutonSupprimer = document.createElement("button");
    boutonSupprimer.type = "button";
    boutonSupprimer.className = "btn supprimer";
    boutonSupprimer.textContent = "Supprimer";

    // Précise le produit concerné pour l'accessibilité
    boutonSupprimer.setAttribute(
      "aria-label",
      `Supprimer ${produit.nom} du panier`
    );

    /* Assemble les éléments du produit */
    article.append(
      nom,
      zoneQuantite,
      sousTotal,
      boutonSupprimer
    );

    li.append(article);
    liste.append(li);
  });

  /* Affiche le message si le panier est vide */
  messageVide.hidden = panier.length > 0;

  /* Recalcule le montant total */
  total.textContent = formaterPrix(calculerTotal());

  /* Met à jour le compteur du panier dans l'en-tête */
  mettreAJourIcone();
};


/* Initialise les événements de la page Panier */
export const initialiserVuePanier = () => {

  const liste = document.querySelector("#lignes-panier");

  // Ne fait rien sur les pages sans panier
  if (!liste) {
    return;
  }

  /* Modifie la quantité d'un article */
  liste.addEventListener("change", (event) => {

    const champ = event.target;

    // Vérifie que l'événement vient d'un champ de quantité
    if (!champ.matches('input[name="quantite"]')) {
      return;
    }

    // Retrouve la ligne du produit concerné
    const li = champ.closest("li[data-id]");

    if (!li) {
      return;
    }

    // Convertit la valeur saisie en nombre
    const quantite = Number(champ.value);

    // Refuse les valeurs incorrectes
    if (
      champ.value.trim() === "" ||
      !Number.isInteger(quantite) ||
      quantite < 0 ||
      quantite > 99
    ) {
      afficherPanier();
      return;
    }

    // Met à jour la quantité dans les données du panier
    changerQuantite(li.dataset.id, quantite);

    // Reconstruit l'affichage et recalcule le total
    afficherPanier();
  });

  /* Supprime un article du panier */
  liste.addEventListener("click", (event) => {

    // Vérifie si le bouton Supprimer a été cliqué
    const bouton = event.target.closest("button.supprimer");

    if (!bouton) {
      return;
    }

    // Retrouve l'identifiant du produit
    const li = bouton.closest("li[data-id]");

    if (!li) {
      return;
    }

    // Supprime le produit des données du panier
    supprimer(li.dataset.id);

    // Reconstruit l'affichage après la suppression
    afficherPanier();

    // Replace le focus sur le titre pour l'accessibilité
    const titrePanier = document.querySelector("#titre-panier");

    if (titrePanier) {
      titrePanier.focus();
    }
  });

  // Affiche le panier lors du chargement de la page
  afficherPanier();
};
