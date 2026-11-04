
import { produits } from "./produits.js";
import { trierPar, lireTri } from "./tri.js";
import { afficherCatalogue } from "./catalogue.js";
import { ajouter } from "./panier.js";
import { mettreAJourIcone } from "./icone-panier.js";
import { lancerTests } from "./tests.js";
import { initialiserMenu } from "./menu.js";
import { initialiserCarrousel } from "./carrousel.js";
import { initialiserFiche } from "./fiche.js";
import { chargerAvis } from "./avis.js";



/* Initialise le menu sur toutes les pages */
initialiserMenu();

/* Initialise le carrousel sur la page d'accueil */
initialiserCarrousel();

/* Initialise la fiche produit sur la page produit */
initialiserFiche();

/* Charge et affiche les avis du produit courant */
chargerAvis();

/* Récupération des éléments du catalogue */
const liste = document.querySelector("#liste-produits");
const caseDispo = document.querySelector("#dispo-seulement");
const nombreProduits = document.querySelector("#nb-produits");
const choixTri = document.querySelector("#choix-tri");

if (liste && caseDispo && nombreProduits && choixTri) {

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

  /* Choix du tri */
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

  /* Ajout au panier avec délégation d'événement */
  liste.addEventListener("click", (event) => {
    const bouton = event.target.closest("button[data-id]");

    if (!bouton || bouton.disabled) {
      return;
    }

    ajouter(bouton.dataset.id);
    mettreAJourIcone();
  });

  rafraichir();
}

/* Met à jour l'indicateur du panier */
mettreAJourIcone();

/* Lance les tests uniquement si l'adresse contient ?tests */
if (new URLSearchParams(window.location.search).has("tests")) {
  lancerTests();
}
