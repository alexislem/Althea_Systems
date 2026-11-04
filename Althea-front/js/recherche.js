
import { produits } from "./produits.js";
import { afficherCatalogue } from "./catalogue.js";
import { trierPar, lireTri } from "./tri.js";
import { ajouter } from "./panier.js";
import { mettreAJourIcone } from "./icone-panier.js";

/* Normalise un texte pour faciliter les recherches */
export const normaliser = (texte) => {
  return texte
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
};

/* Vérifie qu'une valeur représente un nombre positif et fini */
export const lireNombre = (texte, parDefaut) => {

  // Un paramètre absent ou vide n'applique aucun nouveau filtre
  if (texte === null || texte.trim() === "") {
    return parDefaut;
  }

  const nombre = Number(texte);

  // Ignore les valeurs incorrectes provenant de l'adresse
  if (!Number.isFinite(nombre) || nombre < 0) {
    return parDefaut;
  }

  return nombre;
};

/* Filtre les produits selon les critères demandés */
export const filtrerProduits = (
  liste,
  {
    mot = "",
    prixMin = 0,
    prixMax = Infinity,
    dispo = false
  } = {}
) => {

  const motNormalise = normaliser(mot);

  return liste.filter((produit) => {

    // Vérifie le nom du produit
    const nomCorrespond =
      normaliser(produit.nom).includes(motNormalise);

    // Vérifie la fourchette de prix
    const prixCorrespond =
      produit.prix >= prixMin &&
      produit.prix <= prixMax;

    // Vérifie la disponibilité si le filtre est activé
    const disponibiliteCorrespond =
      !dispo || produit.stock > 0;

    return (
      nomCorrespond &&
      prixCorrespond &&
      disponibiliteCorrespond
    );
  });
};

/* Initialise la recherche et les filtres */
export const initialiserRecherche = () => {

  // Récupère les éléments de la page Recherche
  const liste = document.querySelector("#resultats-produits");
  const titre = document.querySelector("#titre-resultats");
  const aucunResultat = document.querySelector("#aucun-resultat");

  // Ne fait rien sur les autres pages
  if (!liste || !titre || !aucunResultat) {
    return;
  }

  /* Lit les paramètres de l'adresse */
  const parametres = new URLSearchParams(window.location.search);

  // Recherche rapide ou recherche avancée
  const mot =
    parametres.get("q")?.trim() ||
    parametres.get("nom")?.trim() ||
    parametres.get("titre")?.trim() ||
    "";

  /* Lit les prix en ignorant les valeurs invalides */
  const prixMinSaisi = lireNombre(
    parametres.get("prixMin"),
    null
  );

  const prixMaxSaisi = lireNombre(
    parametres.get("prixMax"),
    null
  );

  // Valeurs par défaut en l'absence de filtre valide
  const prixMin = prixMinSaisi ?? 0;
  const prixMax = prixMaxSaisi ?? Infinity;

  /* Lit le filtre de disponibilité */
  const dispo = parametres.get("disponible") === "1";

  /* Lit le tri et vérifie qu'il est autorisé */
  const tri = lireTri(parametres.get("tri"));

  /* Filtre les produits */
  const produitsFiltres = filtrerProduits(produits, {
    mot,
    prixMin,
    prixMax,
    dispo
  });

  /* Trie les produits filtrés */
  const produitsTries = trierPar(produitsFiltres, tri);

  /* Affiche le catalogue */
  afficherCatalogue(liste, produitsTries);

  /* Met à jour le titre et le nombre de résultats */
  const nombre = produitsTries.length;

  titre.textContent =
    `Résultats pour « ${mot} » : ${nombre} produit${nombre > 1 ? "s" : ""}`;

  /* Affiche le message si aucun produit n'est trouvé */
  aucunResultat.hidden = nombre > 0;

  /* Restaure le mot recherché dans l'en-tête */
  const champEntete = document.querySelector(
    'header input[name="q"]'
  );

  if (champEntete) {
    champEntete.value = mot;
  }

  /* Restaure le mot dans le formulaire avancé */
  const champNom = document.querySelector("#f-nom");

  if (champNom) {
    champNom.value = mot;
  }

  /* Restaure les prix saisis, uniquement s'ils sont valides */
  const champPrixMin = document.querySelector("#f-prix-min");
  const champPrixMax = document.querySelector("#f-prix-max");

  if (champPrixMin) {
    champPrixMin.value =
      prixMinSaisi === null ? "" : String(prixMinSaisi);
  }

  if (champPrixMax) {
    champPrixMax.value =
      prixMaxSaisi === null ? "" : String(prixMaxSaisi);
  }

  /* Restaure le filtre de disponibilité */
  const caseDisponible = document.querySelector("#f-disponible");

  if (caseDisponible) {
    caseDisponible.checked = dispo;
  }

  /* Restaure le choix de tri */
  const choixTri = document.querySelector("#f-tri");

  if (choixTri) {
    choixTri.value = tri;
  }

  /* Masque la pagination statique */
  const pagination = document.querySelector(".pagination");

  if (pagination) {
    pagination.hidden = true;
  }

  /* Gère l'ajout au panier depuis les résultats */
  liste.addEventListener("click", (event) => {

    const bouton = event.target.closest("button[data-id]");

    if (!bouton || bouton.disabled) {
      return;
    }

    ajouter(bouton.dataset.id);
    mettreAJourIcone();
  });

};
