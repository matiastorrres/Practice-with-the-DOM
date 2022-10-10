const d = document,
  $button = d.querySelector(".dark-theme-btn"),
  moon = "🌙",
  sun = "☀️",
  l = localStorage;

//esta es la forma de seleccionar elementos del dom segun un data-atribute
const $selectores = d.querySelectorAll("[data-dark]");
const dark = () => {
  $selectores.forEach((e) => {
    e.classList.remove("dark-mode");
  });
  $button.textContent = moon;
  l.setItem("theme", "dark");
};
const light = () => {
  $selectores.forEach((e) => {
    e.classList.add("dark-mode");
  });
  $button.textContent = sun;
  l.setItem("theme", "light");
};

export default function buttonTheme() {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".dark-theme-btn")) {
      if ($button.textContent === moon) light();
      else dark();
    }
  });

  d.addEventListener("DOMContentLoaded", () => {
    switch (l.getItem("theme")) {
      case "light":
        light();
        break;
      case "dark":
        dark();
        break;
      default:
        l.setItem("theme", "light");
        break;
    }
  });
}
