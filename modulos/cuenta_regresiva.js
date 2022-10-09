const d = document;
export function countdown() {
  const countdownDate = setInterval(() => {
    const currentDate = new Date().getTime();
    const dateToEnter = new Date("October 25, 2022 22:56:00").getTime();
    const resta = dateToEnter - currentDate;
    const milisegundosEnUnDia = 86400000;
    const milisegundosEnUnHora = 3600000;
    const milisegundosEnUnMinuto = 60000;
    const milisegundosEnUnSegundo = 1000;
    const dias = Math.floor(resta / milisegundosEnUnDia);
    const restoDeDias = resta % milisegundosEnUnDia;
    const horas = ("0" + Math.floor(restoDeDias / milisegundosEnUnHora)).slice(
      -2
    );
    const restoDeHoras = restoDeDias % milisegundosEnUnHora;
    const minutos = Math.floor(restoDeHoras / milisegundosEnUnMinuto);
    const restoDeMinutos = restoDeHoras % milisegundosEnUnMinuto;
    const segundos = (
      "0" + Math.floor(restoDeMinutos / milisegundosEnUnSegundo)
    ).slice(-2);
    d.querySelector("#countdown").innerHTML = `
    <h3>Faltan ${dias}dias ${horas}horas ${minutos}minutos ${segundos}segundos <h3>`;
    if (resta < 0) {
      clearInterval(countdownDate);
      d.querySelector("#countdown").innerHTML = `
    <h3>llegamos al final<h3>`;
    }
  }, 100);
}
