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