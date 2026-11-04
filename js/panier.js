import { trouverProduit } from "./produits.js";

export const CLE = "althea-panier";
export let stockageDisponible = true;

export const charger = () => {
  let texte;
  try {
    texte = globalThis.localStorage?.getItem(CLE);
  } catch {
    stockageDisponible = false;
    return [];
  }
  try {
    const lignes = JSON.parse(texte ?? "[]");
    if (!Array.isArray(lignes)) return [];
    const valides = [];
    lignes.forEach((ligne) => {
      if (!ligne || typeof ligne !== "object" || typeof ligne.id !== "string") return;
      const produit = trouverProduit(ligne.id);
      if (!produit || produit.stock < 1 || !Number.isInteger(ligne.quantite)
        || ligne.quantite < 1 || ligne.quantite > Math.min(99, produit.stock)) return;
      const existante = valides.find((l) => l.id === ligne.id);
      if (existante) existante.quantite = Math.min(99, produit.stock, existante.quantite + ligne.quantite);
      else valides.push({ id: ligne.id, quantite: ligne.quantite });
    });
    return valides;
  } catch {
    return [];
  }
};

export const panier = charger();

const sauvegarder = () => {
  try {
    globalThis.localStorage?.setItem(CLE, JSON.stringify(panier.map(({ id, quantite }) => ({ id, quantite }))));
  } catch {
    stockageDisponible = false;
  }
  if (typeof window !== "undefined") window.dispatchEvent(new Event("althea:panier"));
};

export const ajouter = (id) => {
  const produit = trouverProduit(id);
  if (!produit || produit.stock === 0) return false;
  const ligne = panier.find((element) => element.id === id);
  if (ligne && ligne.quantite >= Math.min(99, produit.stock)) return false;
  if (ligne) ligne.quantite += 1;
  else panier.push({ id, quantite: 1 });
  sauvegarder();
  return true;
};

export const supprimer = (id) => {
  const index = panier.findIndex((ligne) => ligne.id === id);
  if (index === -1) return false;
  panier.splice(index, 1);
  sauvegarder();
  return true;
};

export const changerQuantite = (id, quantite) => {
  if (!Number.isInteger(quantite)) return false;
  if (quantite <= 0) return supprimer(id);
  const produit = trouverProduit(id);
  const ligne = panier.find((element) => element.id === id);
  if (!produit || !ligne || quantite > Math.min(99, produit.stock)) return false;
  ligne.quantite = quantite;
  sauvegarder();
  return true;
};

export const compterArticles = () => panier.reduce((somme, ligne) => somme + ligne.quantite, 0);
export const calculerTotal = () => panier.reduce((somme, { id, quantite }) => {
  const prixCentimes = Math.round(trouverProduit(id).prix * 100);
  return somme + prixCentimes * quantite;
}, 0) / 100;

export const recharger = () => panier.splice(0, panier.length, ...charger());
