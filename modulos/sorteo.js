export default function draw() {
  const getWiner = () => {
    const players = document.querySelectorAll(".player");
    const numberWin = Math.floor(Math.random() * players.length);
    const winner = players[numberWin];
    return `El ganador es ${winner.textContent}`;
  };
  document.addEventListener("click", (e) => {
    if (e.target.matches("#winner-btn")) {
      alert(getWiner());
    }
  });
}
