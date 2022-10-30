import hamburgerMenu from "./modulos/menu_hamburguesa.js";
import { digitalClock, alarm } from "./modulos/Reloj.js";
import { shortcuts, moveBall } from "./modulos/teclas.js";
// import { countdown } from "./modulos/cuenta_regresiva.js";
import scrollTop from "./modulos/button_scroll.js";
import buttonTheme from "./modulos/button_theme.js";
import responsiveMedia from "./modulos/objeto_response.js";
import popup from "./modulos/responsive_tester.js";
import userDeviceInfo from "./modulos/user_device.js";
import networkStatus from "./modulos/deteccion_red.js";
import webCam from "./modulos/deteccion_webcam.js";
import getGeolocation from "./modulos/geolocalizacion.js";
import searchFilters from "./modulos/filtros_busquedas.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");
  // countdown();
  scrollTop();
  responsiveMedia();
  popup();
  userDeviceInfo();
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e);
});

buttonTheme();
networkStatus();
