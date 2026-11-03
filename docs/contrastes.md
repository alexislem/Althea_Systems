# Contrastes · Althea Systems

Ratios calculés le 3 novembre 2026 selon la luminance relative sRGB :
`(luminance claire + 0,05) / (luminance sombre + 0,05)`.
Seuil retenu : **4,5:1**, y compris pour le texte discret.
La palette existante est conservée. Les preuves sont documentées ici sans réintroduire de commentaires dans le code.

| Mode | Texte | Fond | Ratio | Résultat |
|---|---|---|---|---|
| Clair | texte `#172b36` | fond `#f3f7f9` | 13.57:1 | OK |
| Clair | texte `#172b36` | surface `#ffffff` | 14.63:1 | OK |
| Clair | texte-discret `#4b606c` | fond `#f3f7f9` | 6.11:1 | OK |
| Clair | texte-discret `#4b606c` | surface `#ffffff` | 6.59:1 | OK |
| Clair | primaire `#005a70` | fond `#f3f7f9` | 7.23:1 | OK |
| Clair | primaire `#005a70` | surface `#ffffff` | 7.79:1 | OK |
| Clair | alerte `#b42318` | fond `#f3f7f9` | 6.10:1 | OK |
| Clair | alerte `#b42318` | surface `#ffffff` | 6.57:1 | OK |
| Clair | Texte bouton `#ffffff` | primaire `#005a70` | 7.79:1 | OK |
| Clair | Texte bouton `#ffffff` | primaire-fonce `#003d4d` | 11.83:1 | OK |
| Sombre | texte `#e7eef0` | fond `#10191f` | 15.15:1 | OK |
| Sombre | texte `#e7eef0` | surface `#1b2a33` | 12.55:1 | OK |
| Sombre | texte-discret `#b5c7d0` | fond `#10191f` | 10.20:1 | OK |
| Sombre | texte-discret `#b5c7d0` | surface `#1b2a33` | 8.45:1 | OK |
| Sombre | primaire `#7dd3e8` | fond `#10191f` | 10.46:1 | OK |
| Sombre | primaire `#7dd3e8` | surface `#1b2a33` | 8.67:1 | OK |
| Sombre | alerte `#ffb4ab` | fond `#10191f` | 10.47:1 | OK |
| Sombre | alerte `#ffb4ab` | surface `#1b2a33` | 8.68:1 | OK |
| Sombre | Texte bouton `#102a34` | primaire `#7dd3e8` | 8.81:1 | OK |
| Sombre | Texte bouton `#102a34` | primaire-fonce `#a5e5f3` | 10.77:1 | OK |

`--couleur-sur-image` reste blanc dans les deux modes. Le dégradé sombre des slides et du bandeau
sert de support au texte ; les photographies et les superpositions ont aussi été examinées dans les captures.
Les scores et contrôles axe du mode sombre sont consignés dans `responsive.md`.
