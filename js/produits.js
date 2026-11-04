export const produits = [
  { id: "stethoscope", nom: "Stéthoscope double pavillon", prix: 29.90, stock: 14, prioritaire: true, image: "stethoscope.jpg", categorie: "diagnostic", description: "Équipement pour l’auscultation.", caracteristiques: "Double pavillon" },
  { id: "thermometre", nom: "Thermomètre numérique", prix: 14.90, stock: 3, prioritaire: false, image: "thermometre.jpg", categorie: "diagnostic", description: "Appareil de mesure de la température.", caracteristiques: "Affichage numérique" },
  { id: "oxymetre", nom: "Oxymètre de pouls", prix: 34.90, stock: 7, prioritaire: true, image: "oxymetre.jpg", categorie: "diagnostic", description: "Appareil de mesure au doigt.", caracteristiques: "Mesure du pouls et de la saturation" },
  { id: "otoscope", nom: "Otoscope portatif", prix: 79.90, stock: 5, prioritaire: false, image: "otoscope.jpg", categorie: "diagnostic", description: "Équipement d’examen du conduit auditif.", caracteristiques: "Format portatif" },
  { id: "balance", nom: "Balance numérique", prix: 49.90, stock: 0, prioritaire: false, image: "balance.jpg", categorie: "diagnostic", description: "Appareil de pesée.", caracteristiques: "Affichage numérique" },
  { id: "tensiometre", nom: "Tensiomètre OMRON M2 Basic", prix: 45.70, stock: 0, prioritaire: true, image: "tensiometre.jpg", categorie: "diagnostic", description: "Le tensiomètre de bras OMRON M2 Basic mesure la pression artérielle et le pouls. Il mémorise la dernière mesure.", caracteristiques: "Brassard 22 à 32 cm, dernière mesure, 4 piles AA, environ 250 g sans piles" },
  { id: "gants-test", nom: 'Gants nitrile <img src="x" onerror="alert(1)">', prix: 9.90, stock: 20, prioritaire: false, image: "categorie-hygiene.jpg", categorie: "hygiene", description: "Produit de test pédagogique XSS.", caracteristiques: "Nom volontairement piégé, à afficher comme texte" }
];

export const trouverProduit = (id) => produits.find((produit) => produit.id === id);
