const d = document,
  w = window;

export default function popup() {
  const $form = d.getElementById("responsive-tester");
  let ventana;
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    ventana = w.open(
      $form.direccion.value,
      "tester",
      `innerHeight=${$form.alto.value},innerWidth=${$form.ancho.value}`
    );
  });
  d.addEventListener("click", (e) => {
    if (e.target === $form.close) {
      ventana.close();
    }
  });
}
//cuando un formulario no tiene el atributo accion el formulario se recarga la pagina
