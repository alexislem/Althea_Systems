# Suivi des étapes · Jour 3

Vérification du 4 novembre 2026. Méthodes et réserves : [tests-js.md](tests-js.md).

| Étape | Sujet | Réalisation |
|---|---|---|
| 1 | Produits | Six produits du catalogue initial et produit piège ; noms/prix harmonisés avec le HTML du Jour 2. Deux épuisés dont un prioritaire, fonction fléchée trouverProduit. |
| 2 | Tri du catalogue | Rang 0/1/2, épuisé vérifié en premier, copie triée sans modifier l’original. |
| 3 | Modules | Entrée main.js et imports relatifs avec extension .js. |
| 4 | Euros | formaterPrix avec toFixed, replace et gabarit ; calculs avant formatage. |
| 5 | Liste HTML | Liste vide identifiée par liste-produits ; sélecteur initial erroné corrigé. |
| 6 | Carte | DOM créé avec li/article/image/titre/lien/prix/stock ; données dans textContent. |
| 7 | Affichage | Liste vidée puis remplie ; garde si l’élément existe. |
| 8 | Nom piégé | Produit permanent et démonstration DOM ; alerte empêchée par la CSP conservée, texte littéral vérifié. |
| 9 | Disponibilité | Case au clavier, filtre et nombre annoncé dans aria-live. |
| 10 | Choix du tri | TRIS, lireTri, trierPar ; épuisés en dernier ; URL mise à jour et relue. |
| 11 | État du panier | ajouter/changerQuantite/supprimer, compteur et total reduce. Deux oxymètres = 69,80 €, prix initial conservé. |
| 12 | Ajout catalogue | Boutons data-id, délégation, épuisés disabled et icône à jour. |
| 13 | Tests | Dix assertions à la demande avec ?tests. Mutation temporaire du tri détectée, sans sauvegarde de la version cassée. |
| 14 | Menu | Même module sur les sept pages ; fermé sur téléphone, ouvert sur grand écran ; contenu accessible sans JavaScript. |
| 15 | Échap | Fermeture au clavier et focus rendu au bouton. |
| 16 | Carrousel | Précédent/suivant, aria-controls, scrollBy et préférence de mouvement réduit. |
| 17 | Pastille | IntersectionObserver, seuil 0.6, aria-current explicite et style actif. |
| 18 | Stock fiche | data-id et recherche produit ; champ/bouton bloqués si épuisé. id et ref acceptés dans les liens. |
| 19 | Quantité fiche | submit, preventDefault, Number/isInteger, limite 1–10 et stock ; message annoncé. |
| 20 | Avis | fetch/async/await/try/catch ; avis par produit, note 1–5, moyenne et erreur réseau gérée. |
| 21 | Recherche | Normalisation accents/casse, URL, résultats sûrs, message vide et pagination cachée. |
| 22 | Facettes | Prix, disponibilité, tri et valeurs conservées ; catégories et caractéristique existantes reliées aussi. Description reste retirée à la demande de l’auteur. |
| 23 | Page panier | Liste de lignes, labels, sous-totaux et total annoncés ; fixture de deux produits avec ?demo uniquement. |
| 24 | Modification | Délégation quantité/suppression, recalcul et gestion du focus. |
| 25 | Persistance | JSON localStorage, validation stricte et panne de stockage gérée ; aucune donnée sensible. |
| 26 | Onglets | Événement storage, recharger par splice, affichage et icône synchronisés. |
| 27 | Débogage | Points d’arrêt DevTools réellement posés et retirés ; états et somme observés, aucune instruction debugger livrée. |
| 28 | Recette | 24 groupes réussis, 56 combinaisons de largeur/mode, contrôles clavier et sécurité, validations sans erreur. |
| 29 | Rendu | README, preuves, tag personnel et conservation sur la branche personnelle ; aucun merge dans main et aucun envoi de message à l’enseignante. |

La consigne particulière de l’enseignante pour le dépôt du camarade prime sur les exemples Git du TP : travail conservé sur `Branch-Aymen_aitsaid`, aucune fusion dans `main`. Le tag personnel est `jour-3-Aymen-aitsaid`.
