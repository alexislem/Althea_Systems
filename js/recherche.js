import { produits } from "./produits.js";
import { trierPar, lireTri } from "./tri.js";
import { afficherCatalogue } from "./catalogue.js";

export const normaliser = (texte) => String(texte).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

export const lireNombre = (texte, parDefaut) => {
  if (typeof texte !== "string" || texte.trim() === "") return parDefaut;
  const nombre = Number(texte);
  return Number.isFinite(nombre) && nombre >= 0 ? nombre : parDefaut;
};

export const filtrerProduits = (liste, { mot = "", prixMin = 0, prixMax = Infinity, dispo = false,
  caracteristique = "", categories = [] } = {}) => liste.filter((produit) =>
  normaliser(produit.nom).includes(normaliser(mot))
  && produit.prix >= prixMin && produit.prix <= prixMax
  && (!dispo || produit.stock > 0)
  && normaliser(produit.caracteristiques ?? "").includes(normaliser(caracteristique))
  && (categories.length === 0 || categories.includes(produit.categorie)));

export const initialiserRecherche = () => {
  const liste = document.querySelector("#resultats-produits");
  if (!liste) return;
  const titre = document.querySelector("#titre-resultats");
  const vide = document.querySelector("#aucun-resultat");
  const formulaire = document.querySelector(".facettes");
  const parametres = new URLSearchParams(location.search);
  const mot = parametres.get("q") ?? parametres.get("titre") ?? "";
  const prixMin = lireNombre(parametres.get("prixMin"), 0);
  const prixMax = lireNombre(parametres.get("prixMax"), Infinity);
  const dispo = ["oui", "1", "true", "on"].includes(parametres.get("disponible"));
  const tri = lireTri(parametres.get("tri"));
  const categories = parametres.getAll("categorie[]").filter((c) => ["diagnostic", "soins", "hygiene", "mobilier"].includes(c));
  const caracteristique = parametres.get("caracteristique") ?? "";
  const trouves = filtrerProduits(produits, { mot, prixMin, prixMax, dispo, caracteristique, categories });
  afficherCatalogue(liste, trierPar(trouves, tri));
  titre.textContent = `Résultats pour « ${mot} » : ${trouves.length} produit${trouves.length === 1 ? "" : "s"}`;
  titre.setAttribute("aria-live", "polite");
  vide.hidden = trouves.length !== 0;
  document.querySelectorAll(".resultats .pagination").forEach((p) => p.hidden = true);
  const champEntete = document.querySelector(".recherche input[name='q']");
  if (champEntete) champEntete.value = mot;
  if (!formulaire) return;
  formulaire.querySelector("[name='q']").value = mot;
  formulaire.querySelector("[name='caracteristique']").value = caracteristique;
  formulaire.querySelector("[name='prixMin']").value = prixMin === 0 && !parametres.has("prixMin") ? "" : String(prixMin);
  formulaire.querySelector("[name='prixMax']").value = Number.isFinite(prixMax) ? String(prixMax) : "";
  formulaire.querySelector("[name='disponible']").checked = dispo;
  formulaire.querySelector("[name='tri']").value = tri;
  formulaire.querySelectorAll("[name='categorie[]']").forEach((c) => c.checked = categories.includes(c.value));
};
