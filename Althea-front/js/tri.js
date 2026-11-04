
/* Détermine le rang d'un produit */
const rang = (produit) => {
  const { stock, prioritaire } = produit;

  if (stock === 0) {
    return 2;
  }

  if (prioritaire) {
    return 0;
  }

  return 1;
};

/* Tri recommandé : prioritaires, normaux, épuisés */
export const trierCatalogue = (liste) =>
  [...liste].sort((a, b) => rang(a) - rang(b));

/* Trie par prix en conservant les produits épuisés à la fin */
const trierParPrix = (liste, sens) =>
  [...liste].sort((a, b) => {

    if (a.stock === 0 && b.stock > 0) {
      return 1;
    }

    if (b.stock === 0 && a.stock > 0) {
      return -1;
    }

    return (a.prix - b.prix) * sens;
  });

/* Tris autorisés dans le catalogue */
export const TRIS = {
  recommande: trierCatalogue,

  "prix-croissant": (liste) =>
    trierParPrix(liste, 1),

  "prix-decroissant": (liste) =>
    trierParPrix(liste, -1)
};

/* Accepte uniquement un nom de tri connu */
export const lireTri = (valeur) =>
  Object.hasOwn(TRIS, valeur)
    ? valeur
    : "recommande";

/* Applique le tri choisi */
export const trierPar = (liste, choix) =>
  TRIS[lireTri(choix)](liste);
