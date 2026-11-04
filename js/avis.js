export const chargerAvis = async (id) => {
  const liste = document.querySelector("#liste-avis");
  const etat = document.querySelector("#etat-avis");
  if (!liste || !etat || !id) return;
  liste.replaceChildren();
  etat.textContent = "Chargement des avis…";
  try {
    const reponse = await fetch("data/avis.json");
    if (!reponse.ok) throw new Error(`HTTP ${reponse.status}`);
    const donnees = await reponse.json();
    if (!Array.isArray(donnees)) throw new Error("Format des avis invalide");
    const avis = donnees.filter((a) => a && a.produit === id && Number.isInteger(a.note)
      && a.note >= 1 && a.note <= 5 && typeof a.auteur === "string" && typeof a.texte === "string");
    avis.forEach(({ auteur, note, texte }) => {
      const li = document.createElement("li");
      const nom = document.createElement("strong");
      nom.textContent = auteur;
      const etoiles = document.createElement("span");
      etoiles.setAttribute("aria-hidden", "true");
      etoiles.textContent = ` ${"★".repeat(note)}${"☆".repeat(5 - note)}`;
      const accessible = document.createElement("span");
      accessible.className = "visually-hidden";
      accessible.textContent = ` ${note} sur 5`;
      const paragraphe = document.createElement("p");
      paragraphe.textContent = texte;
      li.append(nom, etoiles, accessible, paragraphe);
      liste.append(li);
    });
    const moyenne = avis.length ? avis.reduce((somme, a) => somme + a.note, 0) / avis.length : 0;
    etat.textContent = avis.length
      ? `${avis.length} avis — note moyenne : ${moyenne.toFixed(1).replace(".", ",")} sur 5.`
      : "Aucun avis pour ce produit.";
  } catch {
    etat.textContent = "Les avis ne sont pas disponibles pour le moment.";
  }
};
