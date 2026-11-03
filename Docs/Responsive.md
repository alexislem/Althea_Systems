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


## Carrousel sans JavaScript

Le carrousel de la page d'accueil et la galerie de la
page produit utilisent CSS Grid, le défilement horizontal
et Scroll Snap.

Ces fonctionnalités permettent de naviguer entre les
images sans utiliser de JavaScript.

| Ce qui fonctionne sans JavaScript | Ce qui manque encore (Jour 3) |
|---|---|
| Faire défiler les images horizontalement au doigt, à la souris ou au pavé tactile. | Ajouter des boutons Précédent et Suivant pour contrôler le défilement. |
| Aligner automatiquement chaque image avec CSS Scroll Snap. | Mettre en place un défilement automatique des diapositives. |
| Parcourir les images au clavier avec Tab et les flèches directionnelles. | Gérer les interactions et l'état du carrousel avec JavaScript. |
| Accéder directement aux trois diapositives de l'accueil grâce aux pastilles. | Indiquer automatiquement quelle pastille correspond à la diapositive active. |

### Bilan

HTML et CSS permettent déjà de créer un carrousel
responsive, accessible au clavier et défilant
horizontalement.

Le carrousel de l'accueil possède trois diapositives
et des pastilles de navigation.

La galerie de la fiche produit réutilise les mêmes
principes de défilement, en laissant apparaître une
partie de la photographie suivante.

Lors du Jour 3, JavaScript permettra d'ajouter
des boutons de navigation, un défilement automatique
et la gestion de la pastille active.
