const w = window,
  d = document;
export default function responsiveMedia() {
  //breackpoint se convierte en un objeto MediaQueryList
  let breackpoint = w.matchMedia("(min-width: 800px)");

  const responsive = (breackpoint) => {
    if (breackpoint.matches) {
      d.getElementById("youtube").innerHTML = `<h3>version desk<h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/eyvWmnxu6-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      d.getElementById("gmaps").innerHTML = `<h3>version desk<h3>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1621.2493904032287!2d-65.29979852545134!3d-24.1863952233106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0f436f4d8e83%3A0x8007c7e28ea5e82!2sPalacio%20de%20Gobierno%20de%20Jujuy!5e0!3m2!1ses-419!2sar!4v1665366936224!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    } else {
      d.getElementById("youtube").innerHTML = `<h3>version movil<h3>
      <a href="https://youtu.be/eyvWmnxu6-8" target="_blank rel="noopener">ver video<a>`;
      d.getElementById("gmaps").innerHTML = `<h3>version movil<h3>
      <a href="https://goo.gl/maps/PSPPiATGBYAFXf6F6" target="_blank rel="noopener">ver mapa<a>`;
    }
  };
  //se ejecuta cada vez que carga la pagina
  responsive(breackpoint);
  //se ejecuta cada vez que hay un cambio en la ventana
  breackpoint.addEventListener("change", responsive);
}

// para eliminar este error tengo que desactivar el adblockplus
// GET https://googleads.g.doubleclick.net/pagead/id net::ERR_BLOCKED_BY_CLIENT
