import hamburgerMenu from "./modulos/menu_hamburguesa.js";
import { digitalClock, alarm } from "./modulos/Reloj.js";
import { shortcuts, moveBall } from "./modulos/teclas.js";
import { countdown } from "./modulos/cuenta_regresiva.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e);
});
