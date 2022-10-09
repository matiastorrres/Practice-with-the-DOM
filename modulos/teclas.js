export function shortcuts(e) {
  // console.log(e.type);
  // console.log(e);
  // console.log(e.key);
  // console.log(e.code);
  // console.log(e.keyCode);
  // console.log("shift", e.shiftKey);
  // console.log("alt", e.altKey);
  // console.log("ctrl", e.ctrlKey);

  if (e.key === "a" && e.altKey)
    alert("activaste la funcion alert con mi shortcuts");
}

const d = document;
let x = 0;
let y = 0;
const $ball = d.querySelector(".ball");
const $stage = d.querySelector(".conteiner-ball");

export function moveBall(e) {
  const limitStage = $stage.getBoundingClientRect();
  const limitBall = $ball.getBoundingClientRect();

  switch (e.key) {
    case "ArrowUp":
      if (limitStage.top < limitBall.top) {
        e.preventDefault();
        y--;
      }
      break;
    case "ArrowDown":
      if (limitStage.bottom > limitBall.bottom) {
        e.preventDefault();
        y++;
      }
      break;
    case "ArrowLeft":
      if (limitBall.left > limitStage.left) x--;
      break;
    case "ArrowRight":
      if (limitBall.right < limitStage.right) x++;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}
