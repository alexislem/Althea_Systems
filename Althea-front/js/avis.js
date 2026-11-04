
/* Crée un élément HTML pour afficher un avis client */
const creerAvis = (avis) => {

  // Élément contenant l'avis
  const li = document.createElement("li");
  const article = document.createElement("article");

  // Nom de l'auteur affiché en gras
  const auteur = document.createElement("strong");
  auteur.textContent = avis.auteur;

  // Étoiles visibles à l'écran
  const etoiles = document.createElement("span");
  etoiles.textContent =
    "★".repeat(avis.note) + "☆".repeat(5 - avis.note);

  // Les étoiles sont décoratives pour les lecteurs d'écran
  etoiles.setAttribute("aria-hidden", "true");

  // Note accessible pour les lecteurs d'écran
  const noteAccessible = document.createElement("span");
  noteAccessible.className = "visually-hidden";
  noteAccessible.textContent = `${avis.note} sur 5`;

  // Regroupe l'auteur et la note
  const entete = document.createElement("p");

  entete.append(
    auteur,
    document.createTextNode(" — "),
    etoiles,
    noteAccessible
  );

  // Texte de l'avis sans interpréter de HTML
  const texte = document.createElement("p");
  texte.textContent = avis.texte;

  // Assemble les éléments
  article.append(entete, texte);
  li.append(article);

  return li;
};


/* Charge et affiche les avis du produit courant */
export const chargerAvis = async () => {

  // Récupère le produit affiché sur la page
  const fiche = document.querySelector("article.fiche");

  // Récupère les éléments de la section Avis
  const etat = document.querySelector("#etat-avis");
  const liste = document.querySelector("#liste-avis");

  // Ne fait rien si la page ne contient pas d'avis
  if (!fiche || !etat || !liste) {
    return;
  }

  const idProduit = fiche.dataset.id;

  // Affiche l'état de chargement
  etat.textContent = "Chargement des avis…";
  liste.replaceChildren();

  try {

    /* Récupère le fichier JSON */
    const reponse = await fetch("data/avis.json");

    // Vérifie que le fichier a bien été trouvé
    if (!reponse.ok) {
      throw new Error(`Erreur HTTP : ${reponse.status}`);
    }

    // Transforme le JSON en données JavaScript
    const tousLesAvis = await reponse.json();

    // Vérifie la structure des données reçues
    if (!Array.isArray(tousLesAvis)) {
      throw new Error("Format des avis invalide");
    }

    /* Garde uniquement les avis valides du produit */
    const avisValides = tousLesAvis.filter((avis) => {

      return (
        avis !== null &&
        typeof avis === "object" &&
        avis.produit === idProduit &&
        Number.isInteger(avis.note) &&
        avis.note >= 1 &&
        avis.note <= 5 &&
        typeof avis.auteur === "string" &&
        typeof avis.texte === "string"
      );

    });

    /* Affiche chaque avis valide */
    avisValides.forEach((avis) => {
      liste.append(creerAvis(avis));
    });

    /* Affiche un message si aucun avis n'est disponible */
    if (avisValides.length === 0) {
      etat.textContent = "Aucun avis pour ce produit.";
      return;
    }

    /* Calcule la somme des notes */
    const somme = avisValides.reduce(
      (total, avis) => total + avis.note,
      0
    );

    // Calcule la moyenne
    const moyenne = somme / avisValides.length;

    // Formate la note moyenne en français
    const moyenneFormatee = moyenne
      .toFixed(1)
      .replace(".", ",");

    /* Affiche le nombre d'avis et la note moyenne */
    const nombre = avisValides.length;

    etat.textContent =
      `${nombre} avis — Note moyenne : ${moyenneFormatee} / 5`;

  } catch (erreur) {

    // Conserve les détails de l'erreur pour le développeur
    console.error("Impossible de charger les avis :", erreur);

    // Informe l'utilisateur sans interrompre le site
    etat.textContent =
      "Les avis ne sont pas disponibles pour le moment.";

  }

};
