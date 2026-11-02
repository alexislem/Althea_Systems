# Audit d’accessibilité · Althea Systems

## Tests manuels

- Navigation au clavier : effectuée.
- Zoom à 200 % : effectué.
- Test avec le Narrateur Windows : effectué.

## Scores Lighthouse avant CSS

- Accueil : 96/100 en accessibilité.
- Page produit : 96/100 en accessibilité.

## Scores Lighthouse après CSS

- Accueil : 100/100 en accessibilité.
- Page produit : 100/100 en accessibilité.

## Affichage après CSS

- Accueil et produit vérifiés à 360 px : aucun débordement horizontal constaté.

## Problèmes et corrections

| Page | Test | Problème | Correction prévue | Re-testé |
|---|---|---|---|---|
| Accueil | Lighthouse | Zones cliquables trop petites ou rapprochées | Agrandir les zones cliquables et ajouter des espacements en CSS | Non |
| Produit | Lighthouse | Zones cliquables trop petites ou rapprochées | Agrandir les zones cliquables et ajouter des espacements en CSS | Non |
| Produit | Lighthouse — Best Practices | Images introuvables : erreurs 404 | Ajouter les images et vérifier leurs chemins | Non |

## Éléments restant à vérifier

- Ajouter les images manquantes sur les deux pages.
- Refaire les tests après application du CSS.
- Vérifier les deux pages au validateur HTML W3C.

