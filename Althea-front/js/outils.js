
/* Formate un prix au format français */
export const formaterPrix = (prix) =>
  `${prix.toFixed(2).replace(".", ",")} €`;
