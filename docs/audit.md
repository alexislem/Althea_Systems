# Audit d’accessibilité · Althea Systems

## Tests manuels

- Navigation au clavier : effectuée avant CSS.
- Zoom à 200 % : effectué avant CSS.
- Test avec le Narrateur Windows : effectué avant CSS.

## Scores Lighthouse avant CSS

- Accueil : 96/100 en accessibilité.
- Page produit : 96/100 en accessibilité.

## Scores Lighthouse après CSS

- Accueil : 100/100 en accessibilité.
- Page produit : 100/100 en accessibilité.

## Affichage après CSS

- Accueil et produit vérifiés à 360 px :
  aucun débordement horizontal constaté.

## Problèmes et corrections

| Page | Test | Problème | Correction | Re-testé |
|---|---|---|---|---|
| Accueil | Lighthouse | Zones cliquables trop petites ou rapprochées | Cibles agrandies et espacées en CSS | Oui |
| Produit | Lighthouse | Zones cliquables trop petites ou rapprochées | Cibles agrandies et espacées en CSS | Oui |
| Produit | Lighthouse — Best Practices | Images introuvables : erreurs 404 | Ajout des images et vérification des chemins à terminer | Non |

## Éléments restant à vérifier

- Terminer l’ajout des images sur les deux pages.
- Refaire les tests clavier, zoom et Narrateur après CSS.
- Vérifier les deux pages au validateur HTML W3C.
- Vérifier les deux feuilles de style au validateur CSS W3C.