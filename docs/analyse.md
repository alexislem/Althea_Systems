# Plan des interfaces · Althea Systems

## Objectif du document

Ce document prépare la création de deux pages :
- la page d’accueil : index.html ;
- la page d’un produit : produit.html.

On décrit ce que chaque page doit contenir et les balises HTML
à utiliser. Les éléments communs seront les mêmes sur les deux pages.

## 1. Sur toutes les pages

### 1.1. L’en-tête : le haut de chaque page

L’en-tête permet d’identifier le site, de naviguer,
de rechercher un produit et d’accéder au panier.

Balise principale : header.
Classe CSS prévue : entete.

Il contient ces éléments, dans cet ordre :

1. Le logo Althea Systems

   Un clic dessus ramène à la page d’accueil.
   HTML : a pour le lien, img pour l’image.
   Classe prévue : logo.

2. Le panier

   Un lien pour consulter les articles du panier.
   On indique leur nombre, par exemple « Panier (2 articles) ».
   HTML : a pour le lien, span pour le nombre.
   Classe prévue : panier.

3. Le bouton Menu

   Il servira à afficher ou masquer les liens de navigation.
   Pour le moment, le menu reste visible.
   HTML : button.
   Classe prévue : menu-bouton.

4. La recherche

   Un champ pour écrire le nom d’un produit
   et un bouton pour lancer la recherche.
   HTML : form pour regrouper le tout,
   label pour le nom du champ,
   input pour saisir du texte,
   button pour rechercher.
   Classe prévue : recherche.

5. Les liens de navigation

   Accueil, Catalogue, Mon compte, CGU,
   Mentions légales et Contact.
   HTML : nav pour la zone de navigation,
   ul et li pour la liste, a pour chaque lien.
   Classe prévue : menu.

#### Le logo : détails

- Le lien pointe vers index.html.
- L’image se trouve dans img/logo.svg.
- Son texte alternatif est « Althea Systems, accueil ».
- Ce texte explique la destination du lien aux personnes
  qui ne voient pas l’image.

#### Le panier : détails

- Le lien pointe vers panier.html.
- Le texte visible est « Panier ».
- Un point rouge signale que le panier contient des articles.
- Le nombre d’articles est aussi écrit dans un span :
  par exemple « (2 articles) ».
- Ce span porte la classe visually-hidden.
- Le CSS cachera ce texte visuellement, mais les lecteurs
  d’écran pourront toujours le lire.
- Le point rouge n’est donc pas le seul moyen de savoir
  que le panier contient des articles.

#### Le bouton Menu : détails

- Son texte est « Menu ».
- Son type est button.
- aria-controls="menu-principal" indique quel menu il contrôle.
- aria-expanded="true" indique que le menu est ouvert.
- Pour cette première version, le menu reste visible.
- L’ouverture et la fermeture seront gérées plus tard,
  par exemple avec JavaScript.

#### La recherche : détails

Le formulaire contient :
- un label « Rechercher un produit » ;
- un champ input de type search ;
- un bouton « Rechercher » de type submit.

Pour relier le texte au champ :
- le label possède for="q" ;
- le champ possède id="q".

Cliquer sur « Rechercher un produit » place donc
le curseur dans le champ.

Le formulaire possède role="search" pour que les outils
d’assistance puissent reconnaître la zone de recherche.

#### La navigation : détails

La zone de navigation utilise :
- nav avec id="menu-principal" ;
- aria-label="Menu principal" pour nommer cette zone ;
- ul pour la liste des liens ;
- li pour chaque élément de la liste ;
- a pour chaque lien.

Les liens prévus sont :
- Accueil ;
- Catalogue ;
- Mon compte ;
- CGU ;
- Mentions légales ;
- Contact.

Sur téléphone, LinkedIn et Instagram doivent aussi être
accessibles dans le menu, car le pied de page sera caché.

Si la page affichée correspond à un lien du menu,
ce lien possède aria-current="page".
Par exemple, le lien Accueil porte cet attribut sur index.html.

### 1.2. Le pied de page : le bas de chaque page

Le pied de page regroupe les informations légales,
le contact et les réseaux sociaux.

Balise principale : footer.
Classe CSS prévue : pied.

Il contient les liens suivants :
- CGU ;
- Mentions légales ;
- Contact ;
- LinkedIn ;
- Instagram.

HTML utilisé :
- ul pour regrouper les liens ;
- li pour chaque élément ;
- a pour chaque lien ;
- p pour le copyright.

Texte du copyright :
« © 2026 Althea Systems ».

Sur téléphone, le pied de page est caché.
Tous ses liens restent accessibles dans le menu principal.

### 1.3. Le lien « Aller au contenu »

Ce lien se trouve avant l’en-tête.
Il permet aux personnes utilisant le clavier de rejoindre
directement le contenu principal sans parcourir tout le menu.

- Balise : a.
- Classe : evitement.
- Destination du lien : #contenu.
- La zone principale utilise main avec id="contenu".
- Avec le CSS, le lien devient visible lorsqu’on l’atteint
  avec la touche Tab.

### 1.4. Points à vérifier

- L’en-tête suit le même ordre sur les deux pages.
- Le logo permet de revenir à l’accueil.
- Chaque lien possède un texte compréhensible.
- Le champ de recherche possède un label.
- Le panier indique son nombre d’articles en texte.
- Les liens du pied restent accessibles sur téléphone.
- « Aller au contenu » est le premier lien de la page.



## 2. Page Accueil (index.html)

La page d’accueil présente Althea Systems et ses produits.
Son contenu principal se trouve dans la balise main,
entre l’en-tête et le pied de page.

### 2.1. Le titre principal

Une phrase présente le site :
« Des équipements pour prendre soin de votre santé au quotidien ».

HTML : h1.
Il n’y aura qu’un seul h1 sur la page.

### 2.2. Le carrousel

Une zone présente plusieurs mises en avant.
Chaque slide contient :
- une image ;
- un texte court ;
- un lien vers la page concernée.

HTML : section pour la zone, ul pour la liste
et li pour chaque slide.
Classes prévues : carrousel et slide.

Le carrousel contient 3 slides.
Chaque slide présente une image, un texte
et un lien promotionnel.

### 2.3. La présentation d’Althea Systems

Un court texte explique l’activité de l’entreprise
et ce qu’elle propose à ses clients.

HTML : p pour chaque paragraphe.

### 2.4. Les catégories de produits

Une liste permet de découvrir les différentes
catégories du catalogue.

Chaque catégorie contient une image et un nom,
avec un lien vers la catégorie.

HTML : ul, li, a et img.
Classe prévue : categories.

### 2.5. Les Top Produits

Cette zone présente une sélection de produits.

Chaque carte contient :
- une image du produit ;
- son nom avec un lien vers sa fiche ;
- son prix ;
- sa disponibilité.

HTML : section pour la zone, h2 pour son titre,
ul et li pour la liste, article pour chaque carte.
Dans une carte : img, h3, a et p,
avec data pour la valeur du prix.

Classes prévues : top-produits, produit, prix et stock.
Pour un produit épuisé : ajouter stock-rupture
et écrire clairement « En rupture de stock ».

## 3. Page Produit (produit.html)

Cette page permet de découvrir un produit et de l’ajouter au panier.
Sur téléphone, les informations apparaissent les unes sous les autres.

### Les éléments de la page, dans l’ordre

1. Le fil d’Ariane
   Il indique où se trouve le produit dans le catalogue.
   Exemple : Accueil > Catégorie > Nom du produit.
   HTML : nav, ol, li et a.
   Classe : ariane.

2. Le nom du produit
   C’est le titre principal de la page.
   HTML : h1, un seul sur la page.

3. Les photos du produit
   Trois photos montrent le produit sous différents angles.
   Chaque image possède un texte alternatif qui décrit la vue.
   HTML : section, ul, li et img.
   Classe : illustrations.

4. La description
   Un paragraphe explique à quoi sert le produit
   et présente ses principales fonctionnalités.
   HTML : p.
   Classe : description.

5. Le prix
   Le prix est affiché clairement en euros.
   HTML : p contenant data.
   Classe : prix-fiche.

6. La disponibilité
   Un texte indique « En stock » ou « En rupture de stock ».
   HTML : p.
   Classe : stock.
   En cas de rupture, ajouter la classe stock-rupture.

7. L’achat
   Un champ permet de choisir une quantité de 1 à 10.
   Un bouton « Ajouter au panier » permet de commander.
   HTML : form, label, input et button.
   Classes : achat et btn.

8. Les caractéristiques techniques
   Au moins quatre informations décrivent le produit.
   Chaque information comprend un nom et une valeur.
   HTML : section, h2, dl, dt et dd.
   Classe : caracteristiques.

9. Les produits similaires
   Six cartes présentent des produits de la même catégorie.
   Les produits disponibles sont proposés en priorité.
   HTML : section, h2, ul, li et article.
   Classes : top-produits et produit.

### Produit choisi pour le TP

- Nom : Tensiomètre de bras OMRON M2 Basic.
- Prix de référence pour l’exercice : 45,70 € TTC.

Caractéristiques techniques :
- Tour de bras : de 22 à 32 cm.
- Mémoire : dernière mesure enregistrée.
- Alimentation : 4 piles AA de 1,5 V.
- Poids de l’appareil : environ 250 g sans piles.

Pour travailler le cas demandé dans le TP,
nous présenterons ce produit comme étant en rupture de stock.
Il s’agit d’une situation simulée pour l’exercice.

### Si le produit est épuisé

- Écrire clairement « En rupture de stock ».
- Ne pas utiliser uniquement une couleur pour signaler la rupture.
- Désactiver le champ de quantité avec disabled.
- Désactiver le bouton avec disabled.
- Remplacer son texte par « En rupture de stock ».
- Garder les informations du produit consultables.


## 4. Les morceaux qui reviennent

### Les éléments communs aux deux pages

- En-tête : classe entete.
- Logo : classe logo.
- Panier : classe panier.
- Bouton Menu : classe menu-bouton.
- Formulaire de recherche : classe recherche.
- Navigation : classe menu.
- Pied de page : classe pied.

### Les cartes produits

Les cartes des « Top Produits » sur l’accueil et des
« Produits similaires » sur la page produit utilisent
la même structure et les mêmes classes :

- Zone regroupant les cartes : top-produits.
- Carte d’un produit : produit.
- Prix dans une carte : prix.
- Disponibilité : stock.
- Produit épuisé : stock-rupture, en complément de stock.

Cela permet de leur donner la même apparence avec le CSS.

### Les éléments propres à l’accueil

- Zone du carrousel : carrousel.
- Une partie du carrousel : slide.
- Liste des catégories : categories.

### Les éléments propres à la page produit

- Fil d’Ariane : ariane.
- Fiche détaillée du produit : fiche.
- Formulaire d’achat : achat.
- Bouton d’achat : btn.
- Caractéristiques techniques : caracteristiques.

### Règle à respecter

Un même composant garde le même nom de classe
sur toutes les pages.