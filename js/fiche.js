import { trouverProduit } from "./produits.js";
import { ajouter, panier } from "./panier.js";
import { formaterPrix } from "./outils.js";
import { mettreAJourIcone } from "./icone-panier.js";

export const initialiserFiche = () => {
  const fiche = document.querySelector(".fiche");
  if (!fiche) return null;
  const parametres = new URLSearchParams(location.search);
  const id = parametres.get("id") ?? parametres.get("ref") ?? fiche.dataset.id;
  const produit = trouverProduit(id);
  const formulaire = fiche.querySelector(".achat");
  const champ = formulaire?.querySelector("input[name='quantite']");
  const bouton = formulaire?.querySelector("button[type='submit']");
  const message = formulaire?.querySelector(".message-achat");
  if (!formulaire || !champ || !bouton || !message) return null;
  formulaire.noValidate = true;
  if (!produit) {
    fiche.querySelector("h1").textContent = "Produit introuvable";
    fiche.querySelector(".prix-fiche").textContent = "";
    fiche.querySelector(".fiche-infos .stock").textContent = "Ce produit n’existe pas dans le catalogue.";
    champ.disabled = true;
    bouton.disabled = true;
    fiche.querySelector(".fiche-images").hidden = true;
    fiche.querySelector(".fiche-description").hidden = true;
    const sectionAvis = document.querySelector(".avis");
    if (sectionAvis) sectionAvis.hidden = true;
    return null;
  }
  fiche.dataset.id = produit.id;
  fiche.querySelector("h1").textContent = produit.nom;
  document.title = `${produit.nom} · Althea Systems`;
  const nomAriane = document.querySelector(".ariane [aria-current]");
  if (nomAriane) nomAriane.textContent = produit.nom;
  fiche.querySelector(".prix-fiche").textContent = `${formaterPrix(produit.prix)} TTC`;
  const stock = fiche.querySelector(".fiche-infos .stock");
  stock.textContent = produit.stock === 0 ? "En rupture de stock" : "En stock";
  stock.classList.toggle("stock-rupture", produit.stock === 0);
  champ.disabled = produit.stock === 0;
  bouton.disabled = produit.stock === 0;
  champ.max = "10";
  bouton.textContent = produit.stock === 0 ? "En rupture de stock" : "Ajouter au panier";

  if (produit.id !== "tensiometre") {
    const galerie = fiche.querySelector(".galerie");
    const li = document.createElement("li");
    const image = document.createElement("img");
    image.src = `img/${produit.image}`;
    image.alt = produit.nom;
    image.width = 800;
    image.height = 600;
    li.append(image);
    galerie.replaceChildren(li);
    const description = fiche.querySelector(".fiche-description");
    const titre = document.createElement("h2");
    titre.textContent = "Description du produit";
    const texte = document.createElement("p");
    texte.textContent = produit.description;
    const details = document.createElement("p");
    details.textContent = produit.caracteristiques;
    description.replaceChildren(titre, texte, details);
  }

  formulaire.addEventListener("submit", (event) => {
    event.preventDefault();
    const quantite = Number(champ.value);
    if (produit.stock === 0) {
      message.textContent = "Ce produit est en rupture de stock.";
      return;
    }
    if (!Number.isInteger(quantite) || quantite < 1 || quantite > 10) {
      message.textContent = "Saisissez une quantité entière entre 1 et 10.";
      champ.setAttribute("aria-invalid", "true");
      champ.focus();
      return;
    }
    const deja = panier.find((ligne) => ligne.id === produit.id)?.quantite ?? 0;
    if (deja + quantite > Math.min(99, produit.stock)) {
      message.textContent = "La quantité demandée dépasse le stock disponible, en tenant compte du panier.";
      champ.setAttribute("aria-invalid", "true");
      champ.focus();
      return;
    }
    champ.removeAttribute("aria-invalid");
    for (let i = 0; i < quantite; i += 1) ajouter(produit.id);
    message.textContent = `${quantite} × ${produit.nom} ajouté${quantite > 1 ? "s" : ""} au panier.`;
    mettreAJourIcone();
  });
  return produit.id;
};
