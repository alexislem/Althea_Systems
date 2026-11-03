# TP Jour 2 – Analyse responsive

## Étape 1 – Voir ce qui casse

| Page | 360 px (téléphone) | 768 px (tablette) | 1 280 px (ordinateur) |
|---|---|---|---|
| Accueil (`index.html`) | Le menu prend beaucoup de hauteur et les diapositives du carrousel s'affichent verticalement. | Organisation de l'en-tête et dimensions des images à vérifier. | Les images du carrousel sont trop imposantes et les diapositives restent empilées verticalement. |
| Produit (`produit.html`) | Le menu occupe beaucoup de place. L'image principale est assez grande, mais le contenu reste lisible. | L'image principale est trop grande et occupe presque tout l'espace visible. La fiche n'exploite pas suffisamment la largeur disponible. | La photographie principale est beaucoup trop grande. La présentation reste verticale alors que les images et les informations pourraient être disposées côte à côte. |

## Test complémentaire à 320 px

Sur la page produit :
- Le menu occupe presque toute la hauteur de l'écran.
- Le formulaire de recherche passe sur plusieurs lignes.
- Le fil d'Ariane revient à la ligne, mais reste lisible.
- Aucun débordement horizontal évident sur la capture.

## Bilan

Les problèmes principaux concernent :

- La hauteur excessive du menu sur téléphone.
- Les images trop grandes sur tablette et ordinateur.
- Le manque d'organisation horizontale de la fiche produit sur grand écran.
- Le carrousel de l'accueil qui n'est pas encore défilant.

Les prochaines étapes permettront d'améliorer ces éléments grâce à Flexbox, CSS Grid et aux media queries.