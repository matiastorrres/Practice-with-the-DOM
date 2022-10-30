// arreglar el bug que al tocar la x no se limpia el valor del input
//el valor del input solo limpa con el escape
// el scape me funciona en chrome y la x no
// en firefox no me sale la x y el scape no me limpia el input.

// como solucion no usar input type="search"

const d = document;
export default function searchFilters(input, selector) {
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      if (e.key === "Escape") e.target.value === "";
      d.querySelectorAll(selector).forEach((el) =>
        el.textContent.toLowerCase().includes(e.target.value)
          ? el.classList.remove("filter")
          : el.classList.add("filter")
      );
    }
  });
}
