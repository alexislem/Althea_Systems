import { produits, trouverProduit } from "./produits.js";
import { trierPar, lireTri, trierCatalogue } from "./tri.js";
import { afficherCatalogue } from "./catalogue.js";
import { ajouter, panier, CLE, recharger } from "./panier.js";
import { mettreAJourIcone } from "./icone-panier.js";
import { initialiserMenu } from "./menu.js";
import { initialiserCarrousel } from "./carrousel.js";
import { initialiserFiche } from "./fiche.js";
import { chargerAvis } from "./avis.js";
import { initialiserRecherche } from "./recherche.js";
import { initialiserPanier, afficherPanier } from "./vue-panier.js";

const parametres = new URLSearchParams(location.search);
initialiserMenu();
initialiserCarrousel();
const idFiche = initialiserFiche();
if (idFiche) chargerAvis(idFiche);
initialiserRecherche();

const liste = document.querySelector("#liste-produits");
if (liste) {
  const disponible = document.querySelector("#dispo-seulement");
  const tri = document.querySelector("#choix-tri");
  const nombre = document.querySelector("#nb-produits");
  tri.value = lireTri(parametres.get("tri"));
  disponible.checked = parametres.get("disponible") === "1";
  const rafraichir = () => {
    const selection = disponible.checked ? produits.filter((p) => p.stock > 0) : produits;
    afficherCatalogue(liste, trierPar(selection, tri.value));
    nombre.textContent = `${selection.length} produit${selection.length === 1 ? "" : "s"}`;
  };
  const changer = () => {
    const url = new URL(location.href);
    url.searchParams.set("tri", lireTri(tri.value));
    if (disponible.checked) url.searchParams.set("disponible", "1");
    else url.searchParams.delete("disponible");
    history.replaceState(null, "", url);
    rafraichir();
  };
  disponible.addEventListener("change", changer);
  tri.addEventListener("change", changer);
  rafraichir();
  document.querySelectorAll("main > .pagination").forEach((p) => p.hidden = true);
}

const top = document.querySelector(".top-produits > ul");
if (top) afficherCatalogue(top, trierCatalogue(produits.filter((p) => p.id !== "gants-test")));
const similaires = document.querySelector(".similaires > ul");
if (similaires) afficherCatalogue(similaires, trierCatalogue(produits.filter((p) => p.id !== idFiche)).slice(0, 6));

document.querySelectorAll("#liste-produits, #resultats-produits, .top-produits > ul, .similaires > ul").forEach((zone) => {
  zone.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const bouton = event.target.closest("button[data-id]");
    if (!bouton || !zone.contains(bouton) || bouton.disabled) return;
    const produit = trouverProduit(bouton.dataset.id);
    const message = document.querySelector("#message-catalogue");
    const ok = ajouter(bouton.dataset.id);
    if (message) message.textContent = ok ? `${produit.nom} ajouté au panier (${panier.find((l) => l.id === produit.id).quantite}).`
      : "La quantité maximale disponible est déjà dans votre panier.";
    mettreAJourIcone();
  });
});

if (document.querySelector("#lignes-panier") && parametres.has("demo") && panier.length === 0) {
  ajouter("stethoscope");
  ajouter("oxymetre");
}
initialiserPanier();
mettreAJourIcone();
window.addEventListener("althea:panier", () => {
  mettreAJourIcone();
  afficherPanier();
});
window.addEventListener("storage", (event) => {
  if (event.storageArea !== localStorage || (event.key !== CLE && event.key !== null)) return;
  recharger();
  mettreAJourIcone();
  afficherPanier();
});
if (parametres.has("tests")) {
  const { lancerTests } = await import("./tests.js");
  lancerTests();
}
