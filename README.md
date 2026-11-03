# Althea Systems

Maquette d’un site de vente de matériel médical,
réalisée en HTML et CSS dans le cadre du TP Jour 1.

## Pages réalisées

- index.html : accueil avec carrousel, catégories et Top Produits.
- produit.html : fiche du tensiomètre OMRON M2 Basic.

## Organisation du projet

Althea Systems/
├── index.html
├── produit.html
├── README.md
├── css/
│   ├── variables.css
│   └── style.css
├── img/
└── docs/
    ├── analyse.md
    └── audit.md

## Ouvrir le site

1. Ouvrir le dossier du projet dans Visual Studio Code.
2. Installer l’extension Live Server de Ritwick Dey.
3. Faire un clic droit sur index.html.
4. Choisir « Open with Live Server ».

Pour consulter la fiche produit, cliquer sur le tensiomètre
depuis l’accueil.

## Technologies utilisées

- HTML : structure et contenu des pages.
- CSS : couleurs, espacements et présentation.
- Git et GitHub : historique du travail et collaboration.

## Deux choix techniques

### Variables CSS

Les couleurs, tailles et espacements sont regroupés dans
css/variables.css pour faciliter les changements et garder
une présentation cohérente.

### Composants réutilisables

Les cartes produits utilisent les mêmes classes sur les deux
pages pour partager leurs styles et éviter les répétitions CSS.

## Tests effectués

Scores Lighthouse en accessibilité :

| Page | Avant CSS | Après CSS |
|---|---|---|
| Accueil | 96/100 | 100/100 |
| Produit | 96/100 | 100/100 |

- Tests manuels au clavier, au zoom à 200 % et avec le Narrateur.
- Affichage des deux pages vérifié à 360 px.
- Résultats et limites détaillés dans docs/audit.md.

## Limites et travail restant

- Plusieurs images restent à ajouter.
- Validation HTML et CSS à terminer.
- Tests clavier, zoom et Narrateur à renouveler après CSS.
- Certains liens pointent vers des pages non réalisées.
- Les produits et prix de démonstration sont à titre d’exemple.
- Le menu et le carrousel ne sont pas animés.
- Le panier, la recherche et l’achat ne sont pas fonctionnels.
- L’adresse de partage althea.example est provisoire.