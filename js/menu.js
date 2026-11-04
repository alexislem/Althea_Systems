export const initialiserMenu = () => {
  const bouton = document.querySelector(".menu-bouton");
  if (!bouton) return;
  const menu = document.getElementById(bouton.getAttribute("aria-controls"));
  if (!menu) return;
  bouton.setAttribute("aria-expanded", "false");
  bouton.addEventListener("click", () => {
    const ouvert = bouton.getAttribute("aria-expanded") === "true";
    bouton.setAttribute("aria-expanded", String(!ouvert));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || bouton.getAttribute("aria-expanded") !== "true"
      || !matchMedia("(max-width: 47.999rem)").matches) return;
    bouton.setAttribute("aria-expanded", "false");
    bouton.focus();
  });
  const grandEcran = matchMedia("(min-width: 48rem)");
  grandEcran.addEventListener("change", () => {
    if (grandEcran.matches && document.activeElement === bouton) menu.querySelector("a")?.focus();
    if (!grandEcran.matches && bouton.getAttribute("aria-expanded") === "false"
      && menu.contains(document.activeElement)) bouton.focus();
  });
};
