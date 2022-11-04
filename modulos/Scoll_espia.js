//
export default function scrollSpy() {
  const $sections = document.querySelectorAll("section[data-scroll-spy]");
  //la cb por defecto recibe las entradas
  const cb = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        console.log(entry);
        document
          .querySelector(`a[data-scroll-spy][href="#${id}"]`)
          .classList.add("active");
      } else {
        document
          .querySelector(`a[data-scroll-spy][href="#${id}"]`)
          .classList.remove("active");
      }
    });
  };
  // instanciamos el observador que recibe como primer parametro un cb y y segundo paramatro un objeto
  const observer = new IntersectionObserver(cb, {
    // rootMargin: "-400px",
    threshold: 0.5,
  });
  // indicamos a quien observar.
  $sections.forEach((e) => observer.observe(e));
}
