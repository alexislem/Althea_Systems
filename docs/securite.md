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
