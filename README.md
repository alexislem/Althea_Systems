
# Althea Systems

## Présentation du projet

Althea Systems est un site de présentation et de vente
d'équipements médicaux destiné aux particuliers et aux
professionnels de santé.

Ce projet a été réalisé dans le cadre des TP
"Jour 1 - Structurer et styliser" et
"Jour 2 - Responsive et mise en page".

L'objectif est de développer un site multipage en HTML5
et CSS3, responsive, accessible et respectant les
bonnes pratiques de sécurité.

## Technologies utilisées

- HTML5 : structure sémantique des pages
- CSS3 : mise en forme et responsive design
- Flexbox : organisation des éléments
- CSS Grid : grilles et mise en page
- Media Queries : adaptation aux écrans
- CSS Scroll Snap : carrousels et galeries
- Git : gestion des versions
- GitHub : hébergement et collaboration
- Lighthouse : audits de performance et d'accessibilité
- W3C Validator : validation HTML et CSS

Aucun JavaScript n'est utilisé pour le moment.
Les interactions dynamiques seront développées
lors du Jour 3.

## Pages réalisées

### Accueil - index.html

- En-tête avec logo et navigation
- Formulaire de recherche
- Choix de langue
- Carrousel de trois diapositives
- Pastilles de navigation
- Présentation de l'entreprise
- Quatre catégories de produits
- Produits du moment
- Pied de page

### Catégorie - categorie.html

- Bandeau avec image et titre superposé
- Présentation de la catégorie Diagnostic
- Six cartes produits
- Grille responsive
- Produit en rupture de stock placé en dernier
- Pagination

### Produit - produit.html

- Fil d'Ariane
- Galerie de photographies responsive
- Informations et prix du produit
- Disponibilité et formulaire d'achat
- Description et caractéristiques techniques
- Tableau comparatif des tailles de brassard
- Produits similaires
- Version imprimable

### Recherche - recherche.html

- Recherche par nom
- Recherche par description
- Recherche par caractéristique
- Filtres de prix minimum et maximum
- Filtres par catégories
- Filtre de disponibilité
- Options de tri
- Six résultats produits
- Pagination

### Connexion - connexion.html

- Adresse e-mail
- Mot de passe
- Validation HTML des champs
- Messages d'erreur
- Lien vers l'inscription

### Inscription - inscription.html

- Prénom et nom
- Adresse e-mail
- Mot de passe de 12 caractères minimum
- Confirmation du mot de passe
- Acceptation obligatoire des CGU
- Validation HTML des champs

## Responsive

Le site a été développé selon une approche Mobile First.

La mise en page utilise Flexbox et CSS Grid pour
s'adapter aux différentes largeurs d'écran.

Les principaux formats étudiés sont :
- 320 px : petits téléphones
- 360 px : téléphones
- 768 px : tablettes
- 1 280 px : ordinateurs

### Captures des pages

| Page | 360 px | 768 px | 1 280 px |
|---|---|---|---|
| Accueil | ![Accueil 360](Althea-front/docs/captures/accueil-360.png) | ![Accueil 768](Althea-front/docs/captures/accueil-768.png) | ![Accueil 1280](Althea-front/docs/captures/accueil-1280.png) |
| Catégorie | ![Catégorie 360](Althea-front/docs/captures/categorie-360.png) | ![Catégorie 768](Althea-front/docs/captures/categorie-768.png) | ![Catégorie 1280](Althea-front/docs/captures/categorie-1280.png) |
| Produit | ![Produit 360](Althea-front/docs/captures/produit-360.png) | ![Produit 768](Althea-front/docs/captures/produit-768.png) | ![Produit 1280](Althea-front/docs/captures/produit-1280.png) |

### Mode sombre

Le site propose un mode sombre automatique grâce à
la media query prefers-color-scheme.

Les couleurs sont centralisées dans variables.css,
ce qui permet de changer le thème sans modifier
la structure des pages.

![Accueil en mode sombre](Althea-front/docs/captures/accueil-sombre.png)

### Problèmes rencontrés et corrections

| Problème | Correction |
|---|---|
| Images trop grandes sur la page Catégorie | Bandeau au format 16/9 avec object-fit: cover |
| Produits affichés verticalement sur ordinateur | Grille CSS responsive |
| Organisation de la fiche produit sur ordinateur | Grid avec grid-template-areas |
| Avertissement HTML sur la zone du tableau | Remplacement par un div avec role="region" |
| Tableau trop large sur téléphone | Défilement horizontal limité au tableau |
| Adaptation des couleurs au mode sombre | Variables CSS spécifiques au thème sombre |

## Accessibilité

Les améliorations suivantes ont été réalisées :

- HTML sémantique
- Hiérarchie des titres
- Textes alternatifs pour les images
- Navigation au clavier
- Lien d'évitement
- Focus visible
- Zones interactives adaptées au tactile
- Labels associés aux champs
- Messages d'erreur explicites
- Respect de prefers-reduced-motion
- Contrastes adaptés aux modes clair et sombre
- Tableau accessible aux lecteurs d'écran

## Résultats Lighthouse

Les tests Lighthouse ont été réalisés en local
sur les six pages du projet.

| Page | Performance | Accessibilité | Bonnes pratiques | SEO |
|---|---:|---:|---:|---:|
| Accueil | 100 | 100 | 100 | 100 |
| Catégorie | 100 | 100 | 100 | 100 |
| Produit | 77 | 100 | 100 | 100 |
| Recherche | 100 | 100 | 100 | 100 |
| Connexion | 100 | 100 | 100 | 100 |
| Inscription | 100 | 100 | 100 | 100 |

Toutes les pages obtiennent 100/100 en accessibilité.

L'objectif du TP, fixé à 90/100 minimum,
est donc atteint sur les six pages.

## Validation du code

Les six pages HTML ont été vérifiées avec
le validateur Nu Html Checker.

Résultat : aucune erreur HTML.

Des avertissements CSP apparaissent lors
du téléversement des fichiers HTML.
Ils concernent les feuilles CSS et les images locales.

Les deux fichiers CSS ont été vérifiés avec
le validateur CSS W3C.

| Fichier | Erreurs | Avertissements |
|---|---:|---:|
| css/variables.css | 0 | 0 |
| css/style.css | 0 | 0 |

Les tests et les corrections sont détaillés dans
Althea-front/docs/responsive.md.

## Sécurité

Le projet intègre plusieurs protections :

- Liens externes en HTTPS
- Protection des liens ouvrant un nouvel onglet
- Formulaires de recherche en GET
- Formulaires de compte en POST
- Politique Content Security Policy (CSP)
- Politique Referrer
- Fichier .gitignore pour les fichiers sensibles

Le test de la politique CSP a confirmé
que les styles intégrés non autorisés sont bloqués.

Les protections et leurs limites sont détaillées
dans Althea-front/docs/securite.md.

## Version imprimable

La fiche produit dispose d'une mise en page
spécifique à l'impression.

Les menus, formulaires d'achat et éléments
inutiles sont masqués.

La version imprimable conserve :
- Le nom et le prix du produit
- Une photographie
- La description
- Les caractéristiques techniques
- Le tableau des tailles

L'aperçu avant impression tient sur une page A4
dans les conditions testées.

## Comment ouvrir le site

### Méthode 1 : Ouverture directe

1. Télécharger ou cloner le dépôt.
2. Ouvrir le dossier Althea-front.
3. Ouvrir index.html dans un navigateur.

### Méthode 2 : Serveur local Python

Depuis le dossier Althea-front, exécuter :

    python -m http.server 8000

Puis ouvrir :

- http://localhost:8000/index.html
- http://localhost:8000/categorie.html
- http://localhost:8000/produit.html
- http://localhost:8000/recherche.html
- http://localhost:8000/connexion.html
- http://localhost:8000/inscription.html

## Limites du projet

Le site est actuellement réalisé en HTML et CSS.

Les fonctionnalités suivantes ne sont pas
encore opérationnelles :

- Recherche et filtrage réels des produits
- Tri dynamique des résultats
- Pagination dynamique
- Connexion et inscription à un compte
- Gestion du panier
- Défilement automatique des carrousels
- Navigation dynamique avec le bouton Menu
- Changement effectif de langue

Certaines données produits et illustrations
sont utilisées comme exemples.

Ces fonctionnalités pourront être développées
en JavaScript et avec un serveur adapté.

## Version du projet

Jour 1 : structure HTML et styles initiaux.

Jour 2 : responsive, pages complémentaires,
accessibilité, sécurité et mise en page.

Version de rendu prévue : jour-2.

## Dépôt GitHub

https://github.com/alexislem/Althea_Systems
