
/* Catalogue des produits Althea Systems */
export const produits = [
  {
    id: "tensiometre-manuel-bras",
    nom: "Tensiomètre manuel de bras",
    prix: 29.90,
    stock: 12,
    prioritaire: true
  },
  {
    id: "tensiometre-consultation",
    nom: "Tensiomètre de consultation",
    prix: 39.90,
    stock: 6,
    prioritaire: false
  },
  {
    id: "tensiometre-portable",
    nom: "Tensiomètre portable",
    prix: 34.90,
    stock: 8,
    prioritaire: true
  },
  {
    id: "tensiometre-compact-bras",
    nom: "Tensiomètre compact de bras",
    prix: 44.90,
    stock: 0,
    prioritaire: true
  },
  {
    id: "tensiometre-brassard-large",
    nom: "Tensiomètre avec brassard large",
    prix: 54.90,
    stock: 4,
    prioritaire: false
  },
  {
    id: "tensiometre-electronique-bras",
    nom: "Tensiomètre électronique de bras",
    prix: 49.90,
    stock: 0,
    prioritaire: false
  },

  {
    id: "gants-nitrile-test-xss",
    nom: 'Gants nitrile <img src="x" onerror="alert(1)">',
    prix: 12.90,
    stock: 5,
    prioritaire: false
  }

];

/* Recherche d'un produit par son identifiant */
export const trouverProduit = (id) =>
  produits.find((produit) => produit.id === id);
