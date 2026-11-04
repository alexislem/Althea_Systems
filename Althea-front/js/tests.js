
import { formaterPrix } from "./outils.js";
import { trierCatalogue, trierPar, lireTri } from "./tri.js";

/* Exécute les tests du catalogue et du formatage des prix */
export const lancerTests = () => {

  // Produits fictifs utilisés uniquement pour les tests
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

    // Test 3 : les produits épuisés sont à la fin
    [
      "Produits épuisés à la fin",
      catalogueTrie.slice(-2).every((p) => p.stock === 0)
    ],

    // Test 4 : un produit prioritaire disponible est en tête
    [
      "Produit prioritaire en tête",
      catalogueTrie[0].id === "prioritaire"
    ],

    // Test 5 : un produit épuisé prioritaire reste à la fin
    [
      "Produit épuisé prioritaire à la fin",
      catalogueTrie.slice(-2).some(
        (p) => p.id === "epuise-prioritaire"
      )
    ],

    // Test 6 : le tableau original ne change pas
    [
      "Tableau d'origine inchangé",
      donneesTest.map((p) => p.id).join(",") === ordreInitial
      && catalogueTrie !== donneesTest
    ],

    // Test 7 : le tri par prix garde les épuisés à la fin
    [
      "Prix croissant avec épuisés à la fin",
      prixCroissant[0].id === "normal"
      && prixCroissant[1].id === "prioritaire"
      && prixCroissant.slice(-2).every((p) => p.stock === 0)
    ],

    // Test 8 : un tri inconnu utilise le tri recommandé
    [
      "Tri inconnu remplacé par recommandé",
      lireTri("tri-inconnu") === "recommande"
      && triInconnu.map((p) => p.id).join(",")
        === catalogueTrie.map((p) => p.id).join(",")
    ]

  ];

  // Affiche uniquement les tests qui échouent
  essais.forEach(([nom, reussi]) => {
    console.assert(reussi, `Échec : ${nom}`);
  });

  // Résumé des tests dans la console
  const reussis = essais.filter(([, reussi]) => reussi).length;

  console.log(`Tests : ${reussis} / ${essais.length} réussis`);
};
