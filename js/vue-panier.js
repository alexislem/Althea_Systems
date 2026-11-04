import { panier, calculerTotal, changerQuantite, supprimer, stockageDisponible } from "./panier.js";
import { trouverProduit } from "./produits.js";
import { formaterPrix } from "./outils.js";
import { mettreAJourIcone } from "./icone-panier.js";

export const afficherPanier = () => {
  const liste = document.querySelector("#lignes-panier");
  if (!liste) return;
  liste.replaceChildren();
  panier.forEach(({ id, quantite }) => {
    const produit = trouverProduit(id);
    if (!produit) return;
    const li = document.createElement("li");
    li.dataset.id = id;
    li.className = "ligne-panier";
    const nom = document.createElement("a");
    nom.href = `produit.html?id=${encodeURIComponent(id)}`;
    nom.textContent = produit.nom;
    const groupe = document.createElement("div");
    const label = document.createElement("label");
    label.htmlFor = `quantite-${id}`;
    label.textContent = `Quantité — ${produit.nom}`;
    const champ = document.createElement("input");
    champ.id = `quantite-${id}`;
    champ.type = "number";
    champ.name = "quantite";
    champ.min = "0";
    champ.max = String(Math.min(99, produit.stock));
    champ.step = "1";
    champ.value = String(quantite);
    groupe.append(label, champ);
    const total = document.createElement("p");
    total.className = "sous-total";
    total.textContent = `Sous-total : ${formaterPrix(Math.round(produit.prix * 100) * quantite / 100)}`;
    const bouton = document.createElement("button");
    bouton.type = "button";
    bouton.dataset.supprimer = id;
    bouton.textContent = "Supprimer";
    bouton.setAttribute("aria-label", `Supprimer ${produit.nom}`);
    li.append(nom, groupe, total, bouton);
    liste.append(li);
  });
  document.querySelector("#total").textContent = formaterPrix(calculerTotal());
  document.querySelector("#panier-vide").hidden = panier.length !== 0;
  const stockage = document.querySelector("#message-stockage");
  if (stockage) stockage.textContent = stockageDisponible ? "" : "Votre navigateur ne permet pas de sauvegarder le panier. Il restera disponible sur cette page uniquement.";
  mettreAJourIcone();
};

export const initialiserPanier = () => {
  const liste = document.querySelector("#lignes-panier");
  if (!liste) return;
  const titre = document.querySelector("#titre-panier");
  const message = document.querySelector("#message-panier");
  liste.addEventListener("change", (event) => {
    if (!(event.target instanceof HTMLInputElement) || event.target.name !== "quantite") return;
    const id = event.target.closest("li[data-id]")?.dataset.id;
    const texte = event.target.value.trim();
    const quantite = texte === "" ? NaN : Number(texte);
    const ok = changerQuantite(id, quantite);
    afficherPanier();
    message.textContent = ok ? "Quantité mise à jour." : "Quantité invalide : indiquez un entier entre 0 et le stock disponible, au maximum 99.";
    const nouveau = document.getElementById(`quantite-${id}`);
    if (nouveau) nouveau.focus();
    else titre.focus();
  });
  liste.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const bouton = event.target.closest("button[data-supprimer]");
    if (!bouton || !liste.contains(bouton)) return;
    supprimer(bouton.dataset.supprimer);
    afficherPanier();
    message.textContent = "Produit supprimé du panier.";
    titre.focus();
  });
  afficherPanier();
};
