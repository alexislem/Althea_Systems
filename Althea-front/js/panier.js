
import { trouverProduit } from "./produits.js";

/* Clé utilisée pour sauvegarder et synchroniser le panier */
export const CLE = "althea-panier";

/* Récupère le panier sauvegardé dans localStorage */
const charger = () => {

  try {

    // Lit les données précédemment enregistrées
    const sauvegarde = localStorage.getItem(CLE);

    // Aucun panier sauvegardé
    if (sauvegarde === null) {
      return [];
    }

    // Transforme le texte JSON en tableau JavaScript
    const lignes = JSON.parse(sauvegarde);

    // Vérifie que les données sont bien un tableau
    if (!Array.isArray(lignes)) {
      return [];
    }

    /* Vérifie les produits et leurs quantités */
    const identifiants = new Set();

    const lignesValides = lignes.filter((ligne) => {

      // Vérifie la structure de chaque ligne
      if (
        !ligne ||
        typeof ligne !== "object" ||
        typeof ligne.id !== "string"
      ) {
        return false;
      }

      // Vérifie que le produit existe dans notre catalogue
      const produit = trouverProduit(ligne.id);

      if (!produit) {
        return false;
      }

      // Vérifie que la quantité est un entier entre 1 et 99
      if (
        !Number.isInteger(ligne.quantite) ||
        ligne.quantite < 1 ||
        ligne.quantite > 99
      ) {
        return false;
      }

      // Évite les doublons d'un même produit
      if (identifiants.has(ligne.id)) {
        return false;
      }

      identifiants.add(ligne.id);

      return true;
    });

    // Ne conserve que l'identifiant et la quantité
    return lignesValides.map((ligne) => ({
      id: ligne.id,
      quantite: ligne.quantite
    }));

  } catch (erreur) {

    // Un JSON incorrect ne doit pas bloquer le site
    console.warn("Impossible de charger le panier :", erreur);

    return [];
  }
};

/* Initialise le panier avec les données sauvegardées */
export const panier = charger();

/* Recharge le panier depuis localStorage sans remplacer le tableau */
export const recharger = () => {

  // Relit les données sauvegardées dans le navigateur
  const nouveauPanier = charger();

  // Remplace les articles du panier actuel
  panier.splice(0, panier.length, ...nouveauPanier);
};

/* Sauvegarde le panier après chaque modification */
const sauvegarder = () => {

  try {

    // Transforme le tableau en texte JSON
    const donnees = JSON.stringify(panier);

    // Enregistre les données dans le navigateur
    localStorage.setItem(CLE, donnees);

  } catch (erreur) {

    console.warn("Impossible de sauvegarder le panier :", erreur);
  }
};

/* Vérifie si le navigateur possède déjà une sauvegarde */
export const sauvegardeExiste = () => {

  try {
    return localStorage.getItem(CLE) !== null;
  } catch {
    return false;
  }
};

/* Ajoute un exemplaire d'un produit au panier */
export const ajouter = (id) => {

  const produit = trouverProduit(id);

  // Refuse un produit inconnu ou épuisé
  if (!produit || produit.stock === 0) {
    return;
  }

  // Recherche si le produit existe déjà dans le panier
  const ligne = panier.find((article) => article.id === id);

  if (ligne) {

    // Limite la quantité maximale à 99
    if (ligne.quantite >= 99) {
      return;
    }

    ligne.quantite += 1;

  } else {

    // Ajoute une nouvelle ligne pour ce produit
    panier.push({
      id: id,
      quantite: 1
    });
  }

  // Enregistre le nouveau contenu
  sauvegarder();
};

/* Modifie la quantité d'un produit */
export const changerQuantite = (id, quantite) => {

  // Une quantité nulle supprime l'article
  if (quantite === 0) {
    supprimer(id);
    return;
  }

  // Refuse les quantités incorrectes
  if (
    !Number.isInteger(quantite) ||
    quantite < 1 ||
    quantite > 99
  ) {
    return;
  }

  const ligne = panier.find((article) => article.id === id);

  if (ligne) {

    ligne.quantite = quantite;

    // Sauvegarde la nouvelle quantité
    sauvegarder();
  }
};

/* Supprime un produit du panier */
export const supprimer = (id) => {

  const index = panier.findIndex(
    (article) => article.id === id
  );

  if (index !== -1) {

    panier.splice(index, 1);

    // Enregistre immédiatement la suppression
    sauvegarder();
  }
};

/* Compte le nombre total d'articles */
export const compterArticles = () => {

  return panier.reduce(
    (total, article) => total + article.quantite,
    0
  );
};

/* Calcule le montant total du panier */
export const calculerTotal = () => {

  return panier.reduce((total, article) => {

    const produit = trouverProduit(article.id);

    if (!produit) {
      return total;
    }

    return total + produit.prix * article.quantite;

  }, 0);
};
