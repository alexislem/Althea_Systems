# Plan des interfaces Althea 

## Partie 1: Sur toutes les pages 
En-tête (header):
- le logo qui permet d'aller à l'accueil  a + img
- barre de recherche form + input + label + img
- le panier avec le nombres d'objet a + img
- un bouton menu de navigation button

Pour le panier, on ajoute un texte indiquant le nombre d'article dedans pour qu'un lecteur d'écran puissent le lire

Pied de page (footer):
- Lien vers les Conditions Générales d'utilisation du site a
- Lien vers les mentions légales a
- Lien vers une page de contact a
- Lien vers les réseaux sociaux a + img
Le pied de page se mettra dans le menu de navigation de l'en-tête quand l'utilisateur sera sur mobile

## 2. Page Accueil (index.html)

| # | Bloc | Ce qu'on y met | Balise |
|---|---|---|---|
| 1 | Titre principal | Une phrase d'accroche sur Althea | h1 |
| 2 | Carrousel | 3 slides avec une image, un texte et un lien | section, ul, li, img, p, a |
| 3 | Présentation | 2 phrases pour présenter Althea | p |
| 4 | Catégories | 4 catégories : Diagnostic, Soins, Mobilier, Consommables | section, h2, ul, li, a, img |
| 5 | Top Produits | 4 cartes avec une image, un nom, un prix et le stock | section, h2, ul, li, article |

### 4. Le carrousel
Le carrousel contient 3 slides.
Chaque slide contient:
- Une image du produit ou de la promotion
- Une phrase de présentation
- Un lien permettant d'accéder à la page correspondante

### 5. Carte "Top produits"
Dans la carte "Top produits" il y aura les produits les plus vendus. On mets l'image avec le descriptif qui est un lien vers le produit.

### 6. Phrase d'accroche

Althea Systems : votre partenaire de confiance pour des équipements médicaux de qualité, au service de votre santé.

## 3. Page Produit (produit.html)

| # | Bloc | Ce qu'on y met | Balise |
|---|---|---|---|
| 1 | Fil d'Ariane | Accueil > Diagnostic > Tensiomètre électronique de bras | nav, ol, li, a |
| 2 | Nom du produit | Tensiomètre électronique de bras | article, h1 |
| 3 | Images du produit | 3 photos du tensiomètre | section, ul, li, img |
| 4 | Description | Présentation du produit et de son utilisation | p |
| 5 | Prix | Prix du tensiomètre en euros TTC | p, data |
| 6 | Disponibilité | Indication du stock ou de la rupture de stock | p |
| 7 | Achat | Quantité et bouton d'achat | form, label, input, button |
| 8 | Caractéristiques | Tour de bras, mémoire, alimentation, poids | section, h2, dl, dt, dd |
| 9 | Produits similaires | 6 cartes avec image, nom, prix et disponibilité | section, h2, ul, li, article |


### 4. Choix du produit

Nom : Tensiomètre électronique de bras

Prix : 49,90 € TTC (prix d'exemple à vérifier)

Caractéristiques :
- Tour de bras : 22 à 42 cm
- Mémoire : 60 mesures
- Alimentation : 4 piles AA
- Poids : 300 g

### 5. Produit en rupture de stock

Lorsqu'un produit est épuisé :
- Le texte "En rupture de stock" s'affiche.
- Le bouton d'achat affiche "En rupture de stock".
- Le bouton d'achat est désactivé (disabled).
- Le champ de quantité est également désactivé (disabled).
- L'utilisateur ne peut plus commander le produit.

### 6. Vérification de l'accessibilité

La rupture de stock est indiquée par un texte
"En rupture de stock" et pas uniquement par une couleur.
Cela permet aux personnes malvoyantes ou utilisant
un lecteur d'écran de connaître la disponibilité
du produit.


## 4. Les morceaux qui reviennent

### 2. Les morceaux réutilisables

Les éléments qui reviennent sur plusieurs pages utilisent
les mêmes classes CSS pour garder une apparence cohérente.

### 3. Les morceaux communs aux deux pages

Les éléments présents sur les deux pages sont :
- L'en-tête
- Le logo
- Le panier
- Le bouton Menu
- La barre de recherche
- Le menu de navigation
- Le pied de page
- Les cartes produits
- Les prix des cartes produits
- Les indications de stock
- La section Top Produits

### 4. Tableau des morceaux et des classes

| Morceau | Pages | Classe |
|---|---|---|
| En-tête | Accueil, Produit | entete |
| Logo | Accueil, Produit | logo |
| Panier | Accueil, Produit | panier |
| Bouton Menu | Accueil, Produit | menu-bouton |
| Recherche | Accueil, Produit | recherche |
| Menu de navigation | Accueil, Produit | menu |
| Pied de page | Accueil, Produit | pied |
| Carrousel | Accueil | carrousel |
| Slide | Accueil | slide |
| Catégories | Accueil | categories |
| Top Produits | Accueil, Produit | top-produits |
| Carte produit | Accueil, Produit | produit |
| Prix des cartes | Accueil, Produit | prix |
| Stock | Accueil, Produit | stock |
| Rupture de stock | Accueil, Produit | stock-rupture |
| Fil d'Ariane | Produit | ariane |
| Fiche produit | Produit | fiche |
| Formulaire d'achat | Produit | achat |
| Bouton d'achat | Produit | btn |
| Caractéristiques | Produit | caracteristiques |

### 5. Vérification des classes

La carte produit utilise la classe "produit" sur
la page Accueil et sur la page Produit.

Cela permet de réutiliser le même style CSS
sur les deux pages et de garder une présentation
identique pour toutes les cartes produits.
