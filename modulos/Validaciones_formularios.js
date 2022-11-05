export default function contactFormValidations() {
  const $form = document.querySelector(".contact-form");
  const $inputs = document.querySelectorAll(".contact-form *[required]");

  $inputs.forEach((input) => {
    const $span = document.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });
  document.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      if (
        (e.target.pattern || e.target.dataset.pattern) &&
        e.target.value !== ""
      ) {
        // console.log("el input tiene expresion regular", e.target.pattern);
        let regex = new RegExp(e.target.pattern || e.target.dataset.pattern);

        return !regex.exec(e.target.value)
          ? document.getElementById(e.target.name).classList.add("is-active")
          : document
              .getElementById(e.target.name)
              .classList.remove("is-active");
      }
      if (
        !e.target.pattern &&
        !e.target.dataset.pattern &&
        e.target.value !== ""
      ) {
        // console.log("el input no tiene expresion regular");
        return e.target.value === ""
          ? document.getElementById(e.target.name).classList.add("is-active")
          : document
              .getElementById(e.target.name)
              .classList.remove("is-active");
      }
    }
  });
}
