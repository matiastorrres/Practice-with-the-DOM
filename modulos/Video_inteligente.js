export default function smartVideo() {
  const $videos = document.querySelectorAll("video[data-smart-video]");
  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
      //hay un bug en estas lineas arreglar
      // window.addEventListener("visibilitychange", (e) =>
      //   document.visibilityState === "visible"
      //     ? entry.target.play()
      //     : entry.target.pause()
      // );
    });
  };
  const observer = new IntersectionObserver(cb, { threshold: 1 });
  $videos.forEach((e) => observer.observe(e));
}
