
import { produits } from "./produits.js";
import { trierPar, lireTri } from "./tri.js";
import { afficherCatalogue } from "./catalogue.js";
import {
  ajouter,
  CLE,
  recharger
} from "./panier.js";

import { mettreAJourIcone } from "./icone-panier.js";
import { lancerTests } from "./tests.js";
import { initialiserMenu } from "./menu.js";
import { initialiserCarrousel } from "./carrousel.js";
import { initialiserFiche } from "./fiche.js";
import { chargerAvis } from "./avis.js";
import { initialiserRecherche } from "./recherche.js";
import {
  initialiserVuePanier,
  afficherPanier
} from "./vue-panier.js";

/* Initialise les composants des différentes pages */
initialiserMenu();
initialiserCarrousel();
initialiserFiche();
initialiserVuePanier();
chargerAvis();
initialiserRecherche();

/* Initialise la recherche sur la page Recherche */
initialiserRecherche();

/* Récupération des éléments du catalogue */
const liste = document.querySelector("#liste-produits");
const caseDispo = document.querySelector("#dispo-seulement");
const nombreProduits = document.querySelector("#nb-produits");
const choixTri = document.querySelector("#choix-tri");

if (liste && caseDispo && nombreProduits && choixTri) {

  // Récupère le tri indiqué dans l'adresse
  const parametres = new URLSearchParams(window.location.search);

  choixTri.value = lireTri(parametres.get("tri"));

  /* Filtre, trie et affiche les produits */
  const rafraichir = () => {

    const produitsFiltres = caseDispo.checked
      ? produits.filter((produit) => produit.stock > 0)
      : produits;

    const produitsTries = trierPar(
      produitsFiltres,
      choixTri.value
    );

    afficherCatalogue(liste, produitsTries);

    const nombre = produitsTries.length;

    nombreProduits.textContent =
      `${nombre} produit${nombre > 1 ? "s" : ""}`;
  };

  /* Filtre de disponibilité */
  caseDispo.addEventListener("change", rafraichir);

  /* Mise à jour du tri */
  choixTri.addEventListener("change", () => {

    const adresse = new URL(window.location.href);

    adresse.searchParams.set("tri", choixTri.value);

    history.replaceState(
      null,
      "",
      adresse.pathname + adresse.search + adresse.hash
    );

    rafraichir();
  });

  /* Ajoute un produit au panier depuis le catalogue */
  liste.addEventListener("click", (event) => {

    const bouton = event.target.closest("button[data-id]");

    if (!bouton || bouton.disabled) {
      return;
    }

    ajouter(bouton.dataset.id);
    mettreAJourIcone();
  });

  // Affiche les produits dès le chargement
  rafraichir();
}

/* Met à jour le compteur du panier */
mettreAJourIcone();

/* Exécute les tests uniquement avec le paramètre ?tests */
if (new URLSearchParams(window.location.search).has("tests")) {
  lancerTests();
}


/* Initialise la page Panier */
if (document.querySelector("#lignes-panier")) {

  // Affiche uniquement les produits réellement enregistrés
  initialiserVuePanier();

}


/* Synchronise le panier lorsque localStorage change dans un autre onglet */
window.addEventListener("storage", (event) => {

  // Ignore les modifications qui concernent d'autres données
  if (event.key !== CLE) {
    return;
  }

  // Recharge les nouvelles données du panier
  recharger();

  // Met à jour l'indicateur du panier dans l'en-tête
  mettreAJourIcone();

  // Actualise les lignes et le total si la page Panier est ouverte
  if (document.querySelector("#lignes-panier")) {
    afficherPanier();
  }

});
