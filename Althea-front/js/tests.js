
import { formaterPrix } from "./outils.js";
import { trierCatalogue, trierPar, lireTri } from "./tri.js";
import { normaliser, filtrerProduits } from "./recherche.js";

/* Exécute les tests du catalogue, du tri et de la recherche */
export const lancerTests = () => {

  // Produits fictifs réservés aux tests
  const donneesTest = [
    {
      id: "epuise",
      nom: "Produit épuisé",
      prix: 5,
      stock: 0,
      prioritaire: false
    },
    {
      id: "normal",
      nom: "Produit normal",
      prix: 20,
      stock: 3,
      prioritaire: false
    },
    {
      id: "epuise-prioritaire",
      nom: "Produit épuisé prioritaire",
      prix: 3,
      stock: 0,
      prioritaire: true
    },
    {
      id: "prioritaire",
      nom: "Produit prioritaire",
      prix: 40,
      stock: 2,
      prioritaire: true
    }
  ];

  // Mémorise l'ordre initial pour vérifier qu'il ne change pas
  const ordreInitial = donneesTest.map((p) => p.id).join(",");

  const catalogueTrie = trierCatalogue(donneesTest);

  const prixCroissant = trierPar(
    donneesTest,
    "prix-croissant"
  );

  const triInconnu = trierPar(
    donneesTest,
    "tri-inconnu"
  );

  // Vérifie le filtrage avec un prix maximum de 20 €
  const resultatsPrixMax = filtrerProduits(
    donneesTest,
    { prixMax: 20 }
  );

  const essais = [

    // Test 1 : prix décimal
    [
      "Formatage du prix 89.9",
      formaterPrix(89.9) === "89,90 €"
    ],

    // Test 2 : prix entier
    [
      "Formatage du prix 24",
      formaterPrix(24) === "24,00 €"
    ],

    // Test 3 : produits épuisés à la fin
    [
      "Produits épuisés à la fin",
      catalogueTrie.slice(-2).every(
        (p) => p.stock === 0
      )
    ],

    // Test 4 : produit prioritaire disponible en tête
    [
      "Produit prioritaire en tête",
      catalogueTrie[0].id === "prioritaire"
    ],

    // Test 5 : produit épuisé prioritaire à la fin
    [
      "Produit épuisé prioritaire à la fin",
      catalogueTrie.slice(-2).some(
        (p) => p.id === "epuise-prioritaire"
      )
    ],

    // Test 6 : le tri ne modifie pas la liste d'origine
    [
      "Tableau d'origine inchangé",
      donneesTest.map((p) => p.id).join(",") === ordreInitial
      && catalogueTrie !== donneesTest
    ],

    // Test 7 : tri par prix avec ruptures de stock à la fin
    [
      "Prix croissant avec épuisés à la fin",
      prixCroissant[0].id === "normal"
      && prixCroissant[1].id === "prioritaire"
      && prixCroissant.slice(-2).every(
        (p) => p.stock === 0
      )
    ],

    // Test 8 : un tri inconnu utilise le tri recommandé
    [
      "Tri inconnu remplacé par recommandé",
      lireTri("tri-inconnu") === "recommande"
      && triInconnu.map((p) => p.id).join(",")
        === catalogueTrie.map((p) => p.id).join(",")
    ],

    // Test 9 : suppression des accents et des majuscules
    [
      "Normalisation du mot StéThoscope",
      normaliser(" StéThoscope ") === "stethoscope"
    ],

    // Test 10 : filtre avec un prix maximum de 20 €
    [
      "Filtre par prix maximum",
      resultatsPrixMax.length === 3
      && resultatsPrixMax.every(
        (p) => p.prix <= 20
      )
      && !resultatsPrixMax.some(
        (p) => p.id === "prioritaire"
      )
    ]

  ];

  // Affiche les erreurs des tests qui échouent
  essais.forEach(([nom, reussi]) => {
    console.assert(reussi, `Échec : ${nom}`);
  });

  // Compte les tests réussis
  const reussis = essais.filter(
    ([, reussi]) => reussi
  ).length;

  console.log(`Tests : ${reussis} / ${essais.length} réussis`);
};
