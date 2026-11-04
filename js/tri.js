export const rang = ({ stock, prioritaire }) => {
  if (stock === 0) return 2;
  if (prioritaire) return 0;
  return 1;
};

export const trierCatalogue = (liste) => [...liste].sort((a, b) => rang(a) - rang(b));

const comparerDisponibilite = (a, b) => Number(a.stock === 0) - Number(b.stock === 0);

export const TRIS = {
  recommande: trierCatalogue,
  "prix-croissant": (liste) => [...liste].sort((a, b) => comparerDisponibilite(a, b) || a.prix - b.prix),
  "prix-decroissant": (liste) => [...liste].sort((a, b) => comparerDisponibilite(a, b) || b.prix - a.prix)
};

export const lireTri = (valeur) => Object.hasOwn(TRIS, valeur) ? valeur : "recommande";
export const trierPar = (liste, choix) => TRIS[lireTri(choix)](liste);
