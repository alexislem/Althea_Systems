# Tests JavaScript · Jour 3

Recette exécutée le **4 novembre 2026**, sous Chrome, avec un serveur HTTP local sans injection de script.
Les tests automatisent le vrai navigateur ; aucun achat ni compte réel n’a été créé.

## Résultats fonctionnels

| Test | Résultat |
|---|---|
| Etapes 7 et 13 : catalogue et 10 tests | OK |
| Etape 13 : un tri casse est detecte | OK |
| Etape 8 : nom piege litteral, sans image injectee | OK |
| Etape 8 : comparaison innerHTML/textContent avec CSP active | OK |
| Etape 9 : filtre disponibles et clavier | OK |
| Etape 10 : tri partage, conservation et liste blanche | OK |
| Etapes 11 et 12 : ajout delegue, total et icone | OK |
| Etapes 14 et 15 : menu mobile, Echap et retour du focus | OK |
| Etapes 16 et 17 : carrousel, pastilles et mouvement reduit | OK |
| Etapes 18 et 20 : produit epuise, avis, moyenne et note 50 exclue | OK |
| Etape 20 : JSON absent et erreur reseau geres | OK |
| Etape 19 : achat de 3, rejet de 0, 50 et abc sans max HTML | OK |
| Etape 19 : depassement du stock refuse sans ajout partiel | OK |
| Etape 21 : recherche depuis accueil, sans accent et depuis URL piegee | OK |
| Etape 22 : prix, disponibilite, tri et valeurs non fiables | OK |
| Etapes 23 a 25 : total manuel, quantite, persistance et suppression | OK |
| Etape 25 : stockage corrompu, faux prix, doublons et quantites invalides | OK |
| Etape 26 : synchronisation entre deux onglets et localStorage.clear | OK |
| Etape 25 : stockage indisponible sans plantage | OK |
| Etape 27 : points arret CDP, ajout et calcul reduce | OK |
| Etape 28 : sept pages sans erreur, quatre largeurs, modes clair/sombre | OK |
| Etapes 14 et 28 : menu visible sans JavaScript | OK |
| Etape 28 : ajout, navigation panier, quantite et suppression au clavier uniquement a 360 px | OK |
| Etapes 23 et 25 : deux produits de demonstration seulement avec ?demo, sans doublon au rechargement | OK |

**24 groupes de vérification réussis sur 24.** Les dix assertions demandées par le TP sont incluses
dans ces groupes : `categorie.html?tests` affiche **« Tests : 10 / 10 réussis »**.
Ces nombres ne sont pas un score Lighthouse : aucune nouvelle mesure Lighthouse n’est revendiquée ici.

## Ce qui a été vérifié

- Catalogue de sept produits : les six du Jour 2 et le produit de test XSS. Deux produits épuisés,
  dont un prioritaire ; les épuisés restent à la fin dans tous les tris.
- Les champs de l’URL ne sont pas interprétés comme du code. Les tris inconnus, y compris `__proto__`,
  retombent sur « Recommandé ». Prix vide, négatif ou non numérique : valeur de filtre par défaut.
- Le filtre de disponibilité, le tri et son adresse sont conservés au rechargement.
- Recherche `stethoscope` sans accent, recherche `oxy`, catégories, caractéristique « numérique » et prix maximum.
- `prixMax=50&disponible=oui` retourne quatre résultats, dont le produit de test « Gants nitrile ».
- Menu fermé sur mobile, ouverture, fermeture avec Échap et retour du focus ; menu visible sans JavaScript.
- Boutons du carrousel, navigation par pastille, indicateur actif par IntersectionObserver et mouvement réduit.
- Fiche épuisée bloquée ; fiche disponible avec achat de trois unités. Les valeurs 0, 50, « abc », 1.5 et vide
  sont refusées en JavaScript, même lorsque les contraintes HTML sont retirées.
- Une quantité dépassant le stock est rejetée avant toute modification : aucun ajout partiel.
- Avis du produit filtrés, trois notes valides, moyenne de 4,0/5 ; la note 50 est exclue ; le HTML piégé reste du texte.
- Fichier d’avis absent : message de remplacement, sans bloquer la fiche.
- Panier, modification de quantité, suppression, retour du focus sur le titre et disparition du point quand le panier est vide.
- Persistance au changement de page et au rechargement ; synchronisation réelle entre deux onglets, y compris après effacement du stockage.
- Stockage corrompu, objet à la place d’une liste, identifiant inconnu, quantité texte, décimale, nulle ou excessive : lignes rejetées.
- Doublons regroupés et faux prix ignoré. Après sauvegarde, les lignes ne contiennent que `id` et `quantite`.
- Stockage inaccessible : les ajouts fonctionnent en mémoire sur la page ; le panier explique qu’il ne peut pas être sauvegardé.

## Totaux vérifiés indépendamment

| Composition | Calcul manuel | Affichage constaté |
|---|---|---|
| Deux oxymètres | 2 × 34,90 € | 69,80 € |
| Deux stéthoscopes et un oxymètre | 2 × 29,90 € + 34,90 € | 94,70 € |
| Trois stéthoscopes et un oxymètre | 3 × 29,90 € + 34,90 € | 124,60 € |
| Deux stéthoscopes, test clavier | 2 × 29,90 € | 59,80 € |
| Panier de démonstration | 29,90 € + 34,90 € | 64,80 € |

Le TP cite un total de 69 pour deux oxymètres, qui suppose un prix unitaire de 34,50 €.
Le projet utilisait 34,90 € au Jour 2 : ce prix est conservé, donc le résultat correct ici est **69,80 €**.
Les totaux sont calculés en centimes entiers, puis convertis en euros pour l’affichage.

## Point d’arrêt : ce qui a été observé

Des points d’arrêt temporaires ont été posés via le protocole DevTools de Chrome dans `ajouter` et
dans le callback de `calculerTotal` : au premier ajout, aucune ligne oxymètre ; au deuxième, la ligne existe
avec la quantité 1. Le callback du total reçoit ensuite la quantité 2 et une somme initiale de 0 centime.
Il renvoie donc 6 980 centimes. Les points d’arrêt ont été retirés et le débogueur désactivé.
Aucun `debugger;` n’a été ajouté aux sources. Voir `rapports/jour3/debogage.json`.

## Responsive, accessibilité et validation

Les sept pages ont été testées à **320, 360, 768 et 1280 pixels**, en clair et en sombre :
**56 combinaisons**, sans débordement global ni image manquante. Les zones internes défilantes sont volontaires.
Aucune erreur JavaScript ou CSP au chargement normal de ces pages sur le serveur de test.
Le rechargement injecté par Live Server ou les effets d’Opera peuvent provoquer leurs propres refus CSP.

Les tests axe ne détectent aucune violation des règles WCAG A/AA testées sur les 14 combinaisons page / mode.
Ce résultat ne remplace pas une évaluation humaine exhaustive, notamment avec les lecteurs d’écran.
L’ajout au panier, sa navigation, la quantité et la suppression ont été effectués au clavier à 360 pixels,
en plus des tests clavier du menu et du carrousel.

- Validateur HTML Nu/W3C : **0 erreur sur les sept pages**.
- Analyse syntaxique complète des deux CSS : **0 erreur**.
- Validateur CSS W3C, profil CSS3 + SVG : **0 erreur**, cinq lots de règles complètes pour `style.css`
  et un pour `variables.css`, à cause de la limite de taille du service. Les avertissements bruts sont archivés.

## Démonstration et sécurité

Le produit et l’avis piégés font partie de l’exercice. Ils ne créent aucune balise à partir des données.
La comparaison temporaire avec `innerHTML` a créé une vraie image dans un élément de test, mais la CSP
a empêché son gestionnaire `onerror` de lancer une alerte. Le retour à `textContent` laisse le nom littéral,
sans image injectée. Cette démonstration a été effectuée dans le navigateur de test, jamais sauvegardée dans le code applicatif.

Les deux produits servant à construire le panier de test sont ajoutés **uniquement avec `panier.html?demo`**, et seulement si le panier est vide.
La page normale ne crée pas d’achats fictifs. Un rechargement de la page de démonstration n’ajoute pas de doublons.

Les comptes et le serveur sont hors des étapes 1 à 29 : l’exercice `compte.js` est listé séparément
dans le TP sous « Pendant l’intersession » et n’a pas été confondu avec la recette du Jour 3.

## Preuves et captures

- [Rapports JSON du Jour 3](rapports/jour3/).
- [Captures du Jour 3](captures/jour3/) : accueil, catégorie, produit, recherche et panier à 360 pixels, en clair et en sombre.
- Les rapports et captures du Jour 2 sont conservés comme historique ; ils ne prétendent pas représenter la nouvelle version JavaScript.
