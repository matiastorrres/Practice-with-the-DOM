const d = document;
export function digitalClock(clock, btnPlay, btnStop) {
  let idSetInterval;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      idSetInterval = setInterval(() => {
        let time = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${time}</h3>`;
      }, 100);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearInterval(idSetInterval);
      d.querySelector(clock).innerHTML = null;
      const btn = d.querySelector(btnPlay);
      btn.disabled = false;
    }
  });
}
export function alarm(alarm, btnPlay, btnStop) {
  const $sound = d.createElement("audio");
  $sound.src = alarm;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      $sound.play();
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      const play = d.querySelector(btnPlay);
      $sound.pause();
      $sound.currentTime = 0;
      play.disabled = false;
    }
  });
}
