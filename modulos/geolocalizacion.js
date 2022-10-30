const d = document,
  n = navigator;
export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true, //para que tome la mejor lectura
      timeout: 5000, // cuanto tiempo va a esperar para tomar la lectura
      maximumAge: 0, // para evitar que se guarde en cache las lecturas anteriores
    };
  const success = (position) => {
    console.log(position);
    $id.innerHTML = `
     <p>Tu posicion actual es: </p>
     <ul>
     <li>Latitud: ${position.coords.latitude}<li>
     <li>Longitud: ${position.coords.longitude}<li>
     <li>Precision: ${position.coords.accuracy} metros<li>
     </ul>
     <a href="https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},20z" target="_black" rel="noopener">ver tu ubicacion en google maps</a>
    `;
  };
  const error = (err) => {
    console.log(error);
  };
  n.geolocation.getCurrentPosition(success, error, options);
}

//para registrar mi ubicacion en cualquier momento usamos el metodo watchPosition()
