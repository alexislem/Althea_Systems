
# Althea Systems

## Présentation du projet

Althea Systems est un site vitrine de vente
d'équipements médicaux destiné aux particuliers
et aux professionnels de santé.

Ce projet a été réalisé dans le cadre du TP
"Jour 1 - Structurer et styliser".

L'objectif est de créer deux pages HTML
accessibles, responsives et stylisées en CSS.

## Technologies utilisées

- HTML5 : structure et contenu des pages
- CSS3 : mise en forme et responsive design
- Git : gestion des versions
- GitHub : hébergement du dépôt et collaboration
- Lighthouse : audit de l'accessibilité
- W3C Validator : validation du code HTML et CSS

## Arborescence du projet

Althea_Systems/
|
|-- README.md
|
|-- Althea-front/
    |
    |-- index.html
    |-- produit.html
    |
    |-- css/
    |   |-- variables.css
    |   |-- style.css
    |
    |-- img/
    |   |-- logo.png
    |   |-- autres images du site
    |
    |-- docs/
        |-- analyse.md
        |-- audit.md

## Pages réalisées

### Page d'accueil - index.html

La page d'accueil contient :

- Un en-tête avec le logo Althea Systems
- Un menu de navigation
- Un formulaire de recherche
- Une présentation de l'entreprise
- Un carrousel de trois diapositives
- Des catégories de produits
- Les produits du moment
- Un pied de page

### Page produit - produit.html

La fiche produit présente :

- Un fil d'Ariane
- Le nom et les photographies du produit
- Une description
- Un prix TTC
- L'état du stock
- Un formulaire d'achat désactivé en cas de rupture
- Les caractéristiques techniques
- Six produits similaires

## Comment ouvrir le site

### Méthode 1 : Ouverture directe

1. Télécharger ou cloner le dépôt GitHub.
2. Ouvrir le dossier Althea-front.
3. Double-cliquer sur index.html.
4. Utiliser les liens pour accéder à produit.html.

### Méthode 2 : Serveur local Python

Depuis le dossier Althea-front, exécuter :

    python -m http.server 8000

Puis ouvrir les adresses suivantes :

- http://localhost:8000/index.html
- http://localhost:8000/produit.html

## Accessibilité

Plusieurs améliorations ont été mises en place :

- Structure HTML sémantique
- Hiérarchie des titres
- Textes alternatifs pour les images
- Navigation possible au clavier
- Lien d'évitement "Aller au contenu"
- Focus clavier visible
- Textes accessibles aux lecteurs d'écran
- Boutons désactivés clairement identifiables
- Mise en page responsive

Les tests ont été réalisés avec le Narrateur
Windows, le clavier, le zoom à 200 % et Lighthouse.

## Résultats Lighthouse

| Critère | Accueil | Produit |
|---|---:|---:|
| Performance | 100 | 100 |
| Accessibilité | 96 | 96 |
| Bonnes pratiques | 92 | 96 |
| SEO | 100 | 100 |

Les deux pages dépassent l'objectif minimum
de 90/100 en accessibilité.

## Choix techniques

### 1. Variables CSS

Le fichier css/variables.css centralise les
couleurs, tailles de texte et espacements.

Cela permet de conserver une charte graphique
cohérente et de modifier facilement le design.

### 2. Approche Mobile First

Le CSS est conçu en priorité pour les petits
écrans, puis adapté aux écrans plus larges
grâce aux media queries.

Les grilles CSS et les images responsives
facilitent l'affichage sur téléphone.

## Tests réalisés

- Validation HTML : aucune erreur détectée
- Navigation au clavier : fonctionnelle
- Zoom à 200 % : testé
- Lecteur d'écran Windows : testé
- Affichage mobile à 360 px : testé
- Contrôle de l'absence de débordement horizontal
- Validation CSS avec le validateur W3C

Le détail des tests d'accessibilité est
disponible dans docs/audit.md.

## Limites du projet

Le projet comprend deux pages HTML statiques.

La recherche, le panier et les autres pages
du menu ne sont pas encore fonctionnels.

Le bouton Menu ne dispose pas encore
d'une fonctionnalité JavaScript permettant
d'afficher ou de masquer la navigation.

## Version du projet

Version de rendu : jour-1

## Dépôt GitHub

https://github.com/alexislem/Althea_Systems
