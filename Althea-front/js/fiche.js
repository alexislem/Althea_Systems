
import { trouverProduit } from "./produits.js";
import { ajouter } from "./panier.js";
import { mettreAJourIcone } from "./icone-panier.js";
import { formaterPrix } from "./outils.js";

/* Initialise la fiche correspondant au produit sélectionné */
export const initialiserFiche = () => {

  // Récupère la fiche produit
  const fiche = document.querySelector("article.fiche");

  if (!fiche) {
    return;
  }

  /* Identifie le produit sélectionné dans l'adresse */
  const parametres = new URLSearchParams(window.location.search);

  const id = parametres.get("id") || fiche.dataset.id;

  // Récupère les données du produit
  const produit = trouverProduit(id);

  if (!produit) {
    console.warn(`Produit introuvable : ${id}`);
    return;
  }

  // Synchronise l'identifiant de la fiche
  fiche.dataset.id = produit.id;

  /* Met à jour le titre du produit */
  const titreProduit = fiche.querySelector(".fiche-infos h1");

  if (titreProduit) {
    titreProduit.textContent = produit.nom;
  }

  // Met à jour le titre de l'onglet
  document.title = `${produit.nom} - Althea Systems`;

  /* Met à jour le prix du produit */
  const zonePrix = fiche.querySelector(".prix-fiche");
  const montant = zonePrix?.querySelector("data");

  if (montant) {
    montant.value = String(produit.prix);
    montant.textContent = formaterPrix(produit.prix);
  } else if (zonePrix) {
    zonePrix.textContent = `${formaterPrix(produit.prix)} TTC`;
  }

  /* Met à jour le fil d'Ariane */
  const lienAriane = document.querySelector(
    '.ariane a[aria-current="page"]'
  );

  if (lienAriane) {
    lienAriane.textContent = produit.nom;
    lienAriane.href =
      `produit.html?id=${encodeURIComponent(produit.id)}`;
  }

  /* Récupère le formulaire d'achat */
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

  // Active ou désactive le formulaire
  champ.disabled = rupture;
  bouton.disabled = rupture;

  // Met à jour le texte du bouton
  bouton.textContent = rupture
    ? "En rupture de stock"
    : "Ajouter au panier";

  /* Met à jour l'indication du stock */
  const indicationStock = fiche.querySelector(".stock");

  if (indicationStock) {

    indicationStock.textContent = rupture
      ? "Disponibilité : en rupture de stock"
      : "Disponibilité : en stock";

    indicationStock.classList.toggle("stock-rupture", rupture);
  }

  /* Gère l'envoi du formulaire d'achat */
  formulaire.noValidate = true;

  formulaire.addEventListener("submit", (event) => {

    // Empêche le rechargement de la page
    event.preventDefault();

    // Empêche l'achat d'un produit épuisé
    if (produit.stock === 0) {
      message.textContent =
        "Ce produit est en rupture de stock.";
      return;
    }

    // Récupère la quantité sélectionnée
    const quantite = Number(champ.value);

    // Vérifie que la quantité est comprise entre 1 et 10
    if (
      champ.value.trim() === "" ||
      !Number.isInteger(quantite) ||
      quantite < 1 ||
      quantite > 10
    ) {

      message.textContent = "Entre 1 et 10 exemplaires.";
      champ.focus();
      return;
    }

    /* Ajoute les exemplaires au panier */
    for (let i = 0; i < quantite; i++) {
      ajouter(produit.id);
    }

    // Confirme l'ajout du produit
    message.textContent =
      `${quantite} × ${produit.nom} ajouté${quantite > 1 ? "s" : ""} au panier.`;

    // Actualise l'indicateur du panier
    mettreAJourIcone();
  });
};
