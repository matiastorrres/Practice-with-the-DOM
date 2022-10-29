const d = document,
  n = navigator;
export default function webCam(id) {
  const $video = d.getElementById(id);
  //esta funcion es una promesa
  n.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((res) => {
      $video.srcObject = res;
      $video.play();
    })
    .catch((err) => console.log(err));
}
