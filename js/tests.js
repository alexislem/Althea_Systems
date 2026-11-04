import { formaterPrix } from "./outils.js";
import { trierCatalogue, trierPar } from "./tri.js";
import { normaliser, filtrerProduits } from "./recherche.js";

export const lancerTests = () => {
  const liste = [
    { id: "epuise", prix: 1, stock: 0, prioritaire: false },
    { id: "normal", prix: 20, stock: 2, prioritaire: false },
    { id: "prioritaire", prix: 30, stock: 2, prioritaire: true },
    { id: "prioritaire-epuise", prix: 2, stock: 0, prioritaire: true }
  ];
  const avant = JSON.stringify(liste);
  const tries = trierCatalogue(liste);
  const essais = [
    ["prix 89.9", formaterPrix(89.9) === "89,90 €"],
    ["prix 24", formaterPrix(24) === "24,00 €"],
    ["épuisés à la fin", tries.slice(-2).every((p) => p.stock === 0)],
    ["prioritaire en tête", tries[0].id === "prioritaire"],
    ["prioritaire épuisé reste à la fin", tries.findIndex((p) => p.id === "prioritaire-epuise") > tries.findIndex((p) => p.id === "normal")],
    ["tableau original intact", JSON.stringify(liste) === avant && tries !== liste],
    ["tri par prix et épuisés à la fin", trierPar(liste, "prix-croissant").map((p) => p.id).join() === "normal,prioritaire,epuise,prioritaire-epuise"],
    ["tri inconnu recommandé", JSON.stringify(trierPar(liste, "<script>")) === JSON.stringify(tries)],
    ["normalisation", normaliser(" StéThoscope ") === "stethoscope"],
    ["filtre prix maximum", filtrerProduits([{ nom: "A", prix: 12, stock: 1 }, { nom: "B", prix: 70, stock: 1 }], { prixMax: 50 }).length === 1]
  ];
  essais.forEach(([nom, ok]) => console.assert(ok, `Échec : ${nom}`));
  const reussis = essais.filter(([, ok]) => ok).length;
  console.log(`Tests : ${reussis} / ${essais.length} réussis`);
  return { reussis, total: essais.length, essais };
};
