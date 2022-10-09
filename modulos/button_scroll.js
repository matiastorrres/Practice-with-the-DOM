const d = document,
  w = window;
export default function scrollTop() {
  // console.log(d.documentElement.scrollTop, w.pageYOffset);
  w.addEventListener("scroll", () => {
    let scroll = d.documentElement.scrollTop;
    if (scroll > 1000) {
      d.querySelector(".scroll-top-btn").classList.remove("hidden");
    } else {
      d.querySelector(".scroll-top-btn").classList.add("hidden");
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target.matches(".scroll-top-btn")) {
      w.scrollTo({
        top: 0,
      });
    }
  });
}
