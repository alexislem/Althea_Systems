# Althea Systems

Maquette pédagogique de vente de matériel médical, développée en HTML, CSS et JavaScript ES6 pour les TP Jour 1, Jour 2 et Jour 3.

**Travail personnel sur `Branch-Aymen_aitsaid`, sans fusion dans le `main` du camarade**, conformément à la consigne de l’enseignante.

## Lancer le projet

Depuis la racine du projet, avec Python installé :

```bash
python -m http.server 8000
```

Ouvrir `http://localhost:8000/index.html`. Les modules et `fetch` nécessitent HTTP ; le double-clic sur les fichiers ne suffit pas.
Un serveur sans injection de script évite les avertissements CSP du rechargement automatique de Live Server.
La CSP n’a pas à être affaiblie pour le serveur de développement.

## Pages

| Fichier | Interface |
|---|---|
| `index.html` | Accueil, catégories, Top Produits et carrousel |
| `categorie.html` | Catalogue, disponibilité, tri et ajout au panier |
| `produit.html` | Fiche, achat validé et avis ; choix par `?id=…` ou ancien `?ref=…` |
| `recherche.html` | Recherche sans accents et facettes |
| `panier.html` | Quantités, suppression, total et sauvegarde |
| `connexion.html` | Formulaire HTML de connexion, sans serveur d’authentification |
| `inscription.html` | Formulaire HTML d’inscription, sans création réelle de compte |

## JavaScript — Jour 3

| Fichier | Rôle |
|---|---|
| `js/produits.js` | Données du catalogue et recherche par identifiant. |
| `js/tri.js` | Rang, tris autorisés et lecture sûre du choix. |
| `js/outils.js` | Présentation des prix en euros. |
| `js/catalogue.js` | Fabrication et affichage des cartes avec le DOM. |
| `js/panier.js` | État, validation, total et persistance du panier. |
| `js/icone-panier.js` | Nombre d’articles et point du panier. |
| `js/menu.js` | Menu mobile, Échap et focus. |
| `js/carrousel.js` | Boutons, défilement et observation de la slide visible. |
| `js/fiche.js` | Choix de la fiche, stock et vérification de l’achat. |
| `js/avis.js` | Chargement JSON et affichage sécurisé des avis. |
| `js/recherche.js` | Normalisation, lecture de l’URL et facettes. |
| `js/vue-panier.js` | Lignes du panier, champs de quantité et suppression. |
| `js/tests.js` | Dix assertions demandées par le TP. |
| `js/main.js` | Point d’entrée qui relie les modules et les pages. |

Le catalogue est trié sur une copie : prioritaires disponibles, autres disponibles, épuisés.
Les tris par prix conservent eux aussi les épuisés à la fin. Les noms de tri sont validés par liste blanche.

Les données sont écrites avec **`textContent`**, jamais interprétées comme du HTML.
Les cartes, avis et lignes du panier sont créés avec `createElement` et assemblés avec `append`.
Les événements passent par `addEventListener`, avec délégation pour les listes qui sont reconstruites.

Le panier n’enregistre que `id` et `quantite` dans localStorage. Les quantités relues sont vérifiées,
les prix viennent du catalogue et le total utilise des centimes entiers. L’événement `storage` synchronise
les onglets du même site. Le panier normal reste vide tant que l’utilisateur n’ajoute rien.

## Essayer les fonctionnalités

- `categorie.html?tests` : la console affiche **Tests : 10 / 10 réussis**.
- `categorie.html?tri=prix-croissant` : tri conservé dans l’adresse et au rechargement.
- `recherche.html?q=stethoscope` : trouve le nom accentué.
- `recherche.html?prixMax=50&disponible=oui` : quatre résultats avec les données de démonstration.
- `produit.html` : tensiomètre épuisé, achat bloqué et avis fictifs chargés depuis `data/avis.json`.
- `produit.html?id=stethoscope` : produit disponible pour tester une quantité de 1 à 10.
- `panier.html?demo` : deux articles de démonstration si le panier est vide ; les rechargements ne les multiplient pas.
- Ouvrir le panier et le catalogue dans deux onglets : un ajout met à jour le premier onglet sans rechargement.

## Recette du 4 novembre 2026

- **24 groupes de vérification réussis sur 24**, dont les dix assertions du TP et une mutation volontaire du tri détectée.
- Sept pages à 320, 360, 768 et 1280 pixels, en clair et sombre : **56 combinaisons sans débordement global ni image introuvable**.
- Aucune erreur JavaScript ou CSP au chargement normal sur le serveur de test.
- Aucune violation des règles WCAG A/AA testées par axe sur les 14 combinaisons page/mode ; ce contrôle n’est pas un audit humain exhaustif.
- Ajout, quantités et suppression également testés au clavier à 360 pixels ; Échap restitue le focus du menu.
- **0 erreur HTML Nu/W3C sur les sept pages** et **0 erreur de syntaxe CSS**.
- Validation CSS W3C sans erreur, profil CSS3 + SVG, par lots complets de règles à cause de la limite du service ; avertissements archivés.
- Aucun nouveau score Lighthouse revendiqué pour le Jour 3 ; les mesures précédentes restent datées du Jour 2.

[Rapport détaillé des tests](docs/tests-js.md) · [Suivi des 29 étapes](docs/etapes-jour3.md) · [Preuves JSON](docs/rapports/jour3/).

### Captures du Jour 3 à 360 pixels

| Interface | Clair | Sombre |
|---|---|---|
| Accueil | [Voir](docs/captures/jour3/index-light-360.png) | [Voir](docs/captures/jour3/index-dark-360.png) |
| Catégorie | [Voir](docs/captures/jour3/categorie-light-360.png) | [Voir](docs/captures/jour3/categorie-dark-360.png) |
| Produit | [Voir](docs/captures/jour3/produit-light-360.png) | [Voir](docs/captures/jour3/produit-dark-360.png) |
| Recherche | [Voir](docs/captures/jour3/recherche-light-360.png) | [Voir](docs/captures/jour3/recherche-dark-360.png) |
| Panier | [Voir](docs/captures/jour3/panier-light-360.png) | [Voir](docs/captures/jour3/panier-dark-360.png) |

## Sécurité et différences explicites avec le TP

- La CSP du Jour 2 est conservée. Pendant le test XSS, elle empêche l’alerte `onerror` même lorsque
  la chaîne est temporairement interprétée : la présence ou l’absence d’une vraie balise a aussi été vérifiée.
- Le nom piégé reste dans les données, l’avis piégé est affiché comme texte et la note de 50 est ignorée.
- Les avis sont fictifs et présentés comme des données de démonstration, pas comme de vrais témoignages clients.
- Les prix du catalogue initial sont conservés : deux oxymètres à 34,90 € font **69,80 €**, et non le 69 cité dans le TP.
- Le filtre « Description » reste retiré à la demande de l’auteur ; les champs existants Catégories et Caractéristique fonctionnent.
- Les commentaires de source restent retirés à sa demande ; les explications et les ratios sont dans `docs/`.
- Les deux produits de travail du panier sont activés seulement par `?demo`, pour ne pas créer de faux achats dans le panier normal.
- Ces validations côté navigateur ne remplacent pas les validations serveur d’une vraie commande.
- Les comptes et la comparaison des mots de passe appartiennent au travail d’intersession séparé, pas aux étapes 1 à 29.
- Les pages légales, traductions et autres destinations annexes ne sont pas inventées ; elles restent hors du périmètre réalisé.

[Protections et test XSS](docs/securite.md) · [Sources des photos](docs/sources-images.md) · [Contrastes](docs/contrastes.md).

## Historique du Jour 2

Les variables CSS, composants partagés, tableaux accessibles, impression et mode sombre sont conservés.
La palette n’a pas été changée. La [recette du Jour 2](docs/responsive.md), ses captures et ses rapports restent
archivés et datés ; ils décrivent la version du Jour 2, avant l’ajout du JavaScript.

## Version à remettre

Branche : `Branch-Aymen_aitsaid`. Étiquette personnelle : **`jour-3-Aymen-aitsaid`**.
Cette étiquette distingue le travail personnel sans déplacer les étiquettes partagées ni fusionner dans `main`.
Le lien de la branche personnelle est à remettre à l’enseignante. Aucun message n’est envoyé automatiquement.
