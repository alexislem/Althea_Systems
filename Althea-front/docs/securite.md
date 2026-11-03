
# Sécurité du site Althea Systems

## Protections mises en place

| Protection | Où ? | Contre quoi ? |
|---|---|---|
| HTTPS | Liens externes HTML | Protège les échanges avec les sites externes contre l'interception et la modification sur le réseau. |
| noopener noreferrer | Liens externes ouverts dans un nouvel onglet | Empêche le nouvel onglet de contrôler l'onglet d'origine et limite les informations transmises. |
| Méthode GET | Formulaires de recherche | Transmet les critères de recherche dans l'URL sans mélanger les données de recherche et les mots de passe. |
| Méthode POST | Formulaires de connexion et d'inscription | Évite de placer les mots de passe dans l'URL. |
| Fichier .gitignore | Racine du dépôt Git | Empêche l'ajout automatique de fichiers sensibles ou propres à l'environnement local. |
| default-src 'self' | Balise CSP des pages HTML | Restreint par défaut le chargement des ressources à celles provenant du site. |
| object-src 'none' | Balise CSP des pages HTML | Interdit le chargement d'objets intégrés. |
| base-uri 'self' | Balise CSP des pages HTML | Limite les adresses de base autorisées pour les liens. |
| form-action 'self' | Balise CSP des pages HTML | Limite les destinations des formulaires au site lui-même. |
| Referrer Policy | Balise meta des pages HTML | Réduit les informations d'adresse transmises aux sites externes. |


## Test de la politique CSP

Un attribut `style="color: red"` a été ajouté temporairement
au titre principal de la page `index.html`.

Résultat observé :
- Chrome a refusé d'appliquer le style intégré.
- La console a affiché une erreur Content Security Policy.
- La directive `default-src 'self'` a bien bloqué le style.

Après le test, l'attribut temporaire a été supprimé.

## Limites des protections

La politique CSP est actuellement définie dans
une balise meta HTML.

En production, la CSP devrait être envoyée
dans un en-tête HTTP par le serveur.

Les formulaires HTML ne constituent pas une
authentification fonctionnelle : un serveur devra
traiter les requêtes, vérifier les données et
protéger les mots de passe.

La méthode POST ne chiffre pas les échanges :
le site devra utiliser HTTPS en production.

Le fichier .gitignore n'efface pas les secrets
déjà présents dans l'historique Git.

La sécurité doit également être contrôlée
et renforcée côté serveur.


### Validation CSS

| Fichier | Erreurs | Avertissements |
|---|---|---|
| css/variables.css | 0 | 0 |
| css/style.css | 0 | 0 |

Les deux feuilles de style ont été validées avec
le validateur CSS W3C sans erreur ni avertissement.


### Résultats Lighthouse

| Page | Performance | Accessibilité | Bonnes pratiques | SEO |
|---|---:|---:|---:|---:|
| Accueil | 100 | 100 | 100 | 100 |
| Catégorie | 100 | 100 | 100 | 100 |
| Produit | 77 | 100 | 100 | 100 |
| Recherche | 100 | 100 | 100 | 100 |
| Connexion | 100 | 100 | 100 | 100 |
| Inscription | 100 | 100 | 100 | 100 |

Les six pages obtiennent un score d'accessibilité
de 100/100, supérieur à l'objectif de 90/100.

Cinq pages obtiennent également 100/100 en performance.
La page Produit obtient 77/100 en performance.

Toutes les pages obtiennent 100/100 en bonnes
pratiques et en SEO.
