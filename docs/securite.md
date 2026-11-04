# Sécurité · Althea Systems — Jour 2

## Protections présentes dans le code

| Protection | Emplacement | Rôle |
|---|---|---|
| HTTPS | Liens externes | Connexion chiffrée vers les sites externes |
| noopener noreferrer | Liens en nouvel onglet | Isoler le nouvel onglet et ne pas transmettre le référent |
| Annonce du nouvel onglet | Texte visually-hidden | Prévenir les utilisateurs de lecteurs d’écran |
| GET | Recherches de l’en-tête et filtres | Envoyer les critères dans l’URL |
| POST | Connexion et inscription | Éviter de placer le mot de passe dans l’URL |
| required, type, minlength | Formulaires de compte | Aider à compléter les champs |
| CSP | Après charset dans les six pages | Limiter les ressources et formulaires au site |
| Referrer Policy | Head des six pages | Limiter les informations transmises aux sites externes |
| .gitignore | Racine | Écarter secrets, dépendances et fichiers locaux des prochains ajouts |

## Limites

- Les contrôles HTML sont contournables : le serveur devra revérifier les données.
- POST ne chiffre pas les échanges : une vraie authentification nécessite HTTPS.
- Aucun compte ni traitement serveur n’est implémenté.
- HTML seul ne compare pas les deux mots de passe.
- En production, la CSP devra être envoyée dans un en-tête HTTP.
- .gitignore ne retire pas les fichiers déjà suivis ou présents dans l’historique.
- Le script de rechargement injecté par Live Server peut être bloqué par la CSP.
  Tester aussi avec un serveur sans injection de script ; ne pas affaiblir la CSP.

## Vérifications réalisées le 3 novembre 2026

- [x] Six pages testées sous Chrome avec leur CSP.
- [x] Aucune ressource utile refusée par la CSP, ni image introuvable.
- [x] Test de style en ligne sur h1 bloqué dans les six pages, puis attribut retiré du DOM.
- [x] Liens externes HTTPS, noopener noreferrer et annonce de nouvel onglet présents.
- [x] Soumissions POST interceptées : mot de passe absent de l’URL, présent dans le corps de la requête.
- [x] Six pages validées : aucune erreur HTML Nu/W3C.


Les tests de soumission utilisent des valeurs fictives et une interception réseau de l’outil de test,
sans création de compte. La suppression de `required` dans le DOM autorise l’envoi vide : cette démonstration
confirme la nécessité des contrôles serveur. Aucune modification de test n’a été sauvegardée dans les pages.
Les fichiers JSON de preuve sont dans `rapports/`.


## XSS — Jour 3

Un nom de produit, un auteur d’avis ou un mot de recherche peut contenir du HTML malveillant.
Ces données sont écrites exclusivement avec `textContent` ; les cartes et les avis sont construits avec
`createElement` et `append`. Aucun `innerHTML` n’est utilisé dans le JavaScript livré.

Le produit permanent de test contient `Gants nitrile <img src="x" onerror="alert(1)">`.
Un avis contient aussi du HTML dans son auteur et son texte ; les notes doivent être des entiers de 1 à 5.
La recherche affiche le mot issu de l’adresse avec `textContent`, y compris un mot piégé.

Avec `innerHTML`, la démonstration crée une vraie balise ; la CSP actuelle bloque toutefois son événement
en ligne : l’absence d’alerte ne prouve donc pas à elle seule que le code est sûr. Avec `textContent`,
aucune balise n’est créée. La démonstration temporaire n’a pas été enregistrée dans les fichiers du site.
La CSP n’a pas été affaiblie : aucun `unsafe-inline`, aucun gestionnaire d’événement dans le HTML applicatif.

## Validation JavaScript et stockage — Jour 3

- Tri par liste blanche via `Object.hasOwn` ; tri inconnu : recommandé.
- Prix de filtre lus seulement s’ils sont finis et positifs ou nuls.
- Quantité de la fiche : entier de 1 à 10 et stock disponible, y compris les unités déjà dans le panier.
- Quantité du panier : entier de 1 à 99, limité au stock ; zéro ou moins supprime la ligne.
- Relecture du stockage dans un `try/catch` : tableau uniquement, produit connu et disponible,
  quantité entière valide ; doublons regroupés, champs supplémentaires ignorés.
- Seuls `id` et `quantite` sont sauvegardés. Les prix viennent toujours du catalogue.
- Aucun mot de passe, avis personnel ou identifiant de compte dans localStorage.
- Avis JSON : vérification du statut HTTP, du tableau et des propriétés avant affichage.

Ces protections sont côté navigateur : elles ne remplacent pas une validation serveur ni le recalcul
du prix et du stock avant une véritable commande. Les avis livrés sont fictifs et signalés comme tels.
Les tests détaillés et leurs limites sont dans [tests-js.md](tests-js.md).
