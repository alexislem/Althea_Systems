# Responsive · Althea Systems

Recette réalisée le 3 novembre 2026 sur la branche `Branch-Aymen_aitsaid`.
Navigateur : Chrome 156.0.8078.80, mode sans interface, serveur HTTP local sans injection de script.
Les contrôles ci-dessous sont automatisés et accompagnés de captures examinées visuellement.

## Largeurs, clavier et mode sombre

| Page | 320 px | 360 px | 768 px | 1280 px | Reflow 200 % | Clavier | Sombre |
|---|---|---|---|---|---|---|---|
| Accueil | OK | OK | OK | OK | OK, émulé | OK | OK |
| Catégorie | OK | OK | OK | OK | OK, émulé | OK | OK |
| Produit | OK | OK | OK | OK | OK, émulé | OK | OK |
| Recherche | OK | OK | OK | OK | OK, émulé | OK | OK |
| Connexion | OK | OK | OK | OK | OK, émulé | OK | OK |
| Inscription | OK | OK | OK | OK | OK, émulé | OK | OK |

Aucun débordement de la page ni image introuvable sur les 48 combinaisons page / largeur / mode.
Le défilement horizontal interne du carrousel, de la galerie et du tableau est volontaire.
Le contrôle « Reflow 200 % » utilise une zone CSS de 640 × 450 pixels, équivalente à l’espace
disponible à 200 % dans une fenêtre de 1280 × 900 pixels ; il ne prétend pas attester un clic
manuel sur le zoom du navigateur. Les dix captures sont dans [captures](captures/).

La navigation Tab parcourt les liens et les champs dans l’ordre du HTML, sans `order` CSS.
Les éléments atteints ont une boîte visible et un contour de focus. Les flèches font défiler
la galerie et le tableau après leur mise au focus. Aucun nouveau test Narrateur n’est revendiqué.

## Problèmes constatés et corrections

| Étape | Problème observé | Correction | Nouveau test |
|---|---|---|---|
| 8, 15, 19 | Images attendues absentes | Photos locales et déclinaisons 400/800 pixels ; cadrages carré/large | 0 image introuvable |
| 23 | Les lignes alternées du tableau avaient le même fond | Fond général et couleur de surface alternés, première colonne héritée | Trois fonds successifs différents en alternance |
| 27 | `--couleur-sur-image` utilisée sans définition | Blanc fixe pour le texte posé sur les photos | Contrôles clair/sombre et axe réussis |
| 27 | `color-scheme` absent | `color-scheme: light dark` dans `:root` | Contrôles des formulaires en sombre réussis |
| 30 | Résultats finaux non consignés | Exécution des tests et ajout des preuves | Rapport complété |
| 31 | Captures absentes et README incomplet | 10 PNG et README actualisé | 10 fichiers présents |

Les constats initiaux de l’étape 1 n’avaient pas été archivés : aucune mesure « avant » n’a été inventée.

## Carrousel sans JavaScript

| Disponible en CSS | À programmer au Jour 3 |
|---|---|
| Défilement horizontal au clavier et au doigt | Commandes précédent et suivant |
| Aimantation sur les slides | Lecture automatique avec commande de pause |
| Pastilles menant aux trois slides | Indicateur actif lié à la slide visible |

La pastille 2 atteint bien `#une-2`. Les transitions sont désactivées lorsque
`prefers-reduced-motion: reduce` est émulé ; le défilement redevient immédiat.

## Validation et scores réels

| Page | Erreurs HTML Nu/W3C | Lighthouse accessibilité | Bonnes pratiques | SEO |
|---|---|---|---|---|
| Accueil | 0 | 100/100 | 100/100 | 100/100 |
| Catégorie | 0 | 100/100 | 100/100 | 100/100 |
| Produit | 0 | 100/100 | 100/100 | 100/100 |
| Recherche | 0 | 100/100 | 100/100 | 100/100 |
| Connexion | 0 | 100/100 | 100/100 | 100/100 |
| Inscription | 0 | 100/100 | 100/100 | 100/100 |

- CSS : 0 erreur de syntaxe sur les deux fichiers (analyse complète par CSSTree).
- `variables.css` : 0 erreur au validateur CSS W3C.
- `style.css` : 0 erreur au validateur CSS W3C, profil CSS3 + SVG, envoyé en quatre lots
  de règles complètes à cause de la limite de taille du service ; le fichier entier est aussi analysé localement.
- Le service CSS émet des avertissements de vérification concernant notamment les variables ;
  ils ne sont pas présentés comme des erreurs, ni masqués dans les preuves JSON.
- Nu/W3C peut émettre des avertissements CSP lors de l’envoi du code sans origine HTTP réelle ;
  dans le navigateur local, aucune ressource utile n’est bloquée.
- axe : aucune violation des règles WCAG A/AA testées, sur les six pages en clair et en sombre.
- Les performances Lighthouse ne sont pas mesurées dans cette recette ; aucun score n’est inventé.
- Un score automatique de 100 ne remplace pas une vérification humaine complète de l’accessibilité.

## Galerie et impression

Avec un écran émulé à densité 1, le navigateur choisit la photo de 400 pixels à 360 pixels
de largeur, et celle de 800 pixels à 1280 pixels. Sur une autre densité, le choix peut changer.
L’impression de la fiche produit a été vérifiée : **2 pages A4**, une seule photo, contenu noir,
sans en-tête, pied, panier, achat, pagination de carrousel ni produits similaires.
Le tableau reste entier sur la seconde page.

[Voir la fiche imprimée](rapports/produit-impression.pdf).

## Sécurité et formulaires

Les formulaires vides et les e-mails invalides sont refusés. L’inscription refuse les mots de
passe de moins de 12 caractères ; la connexion n’impose pas cette longueur aux anciens comptes.
Les soumissions ont été interceptées par l’outil de test, avec des données fictives : méthode POST,
mot de passe dans le corps, absent de l’URL. Supprimer `required` dans le DOM permet bien d’envoyer
des champs vides : la validation serveur reste indispensable. Le test ne simule pas une authentification réelle.

Sur les six pages, un style temporaire posé sur `h1` est refusé par la CSP (`style-src-attr`),
puis supprimé du DOM. Aucun style de test n’a été enregistré dans les sources.

## Choix demandés et limites du périmètre

- Étape 25 : le champ « Description » a été retiré à la demande de l’auteur ; c’est un écart explicite au TP.
- Étape 27 : les ratios de contraste sont dans [contrastes.md](contrastes.md), plutôt qu’en commentaires CSS,
  car les commentaires ont été retirés à la demande de l’auteur.
- Les photos génériques servent à la maquette ; la galerie OMRON contient des recadrages de la photo existante.
- Les traductions, mentions légales, CGU, contact, à-propos, panier et récupération de mot de passe
  ne sont pas ajoutés artificiellement : ces destinations restent hors des six interfaces du Jour 2.
- Aucun JavaScript applicatif ajouté. Les filtres, le tri, la pagination et les comptes restent statiques,
  conformément au découpage entre Jour 2 et Jour 3.

## Preuves

Les rapports Lighthouse HTML/JSON, les réponses des validateurs, les tests navigateur et l’impression
sont conservés dans [rapports](rapports/). La liste de contrôle [etapes-jour2.md](etapes-jour2.md)
relie chaque étape au code ou à sa preuve.
