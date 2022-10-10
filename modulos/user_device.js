const d = document,
  n = navigator;
export default function userDeviceInfo() {
  console.log(n.userAgent);
  const $id = d.getElementById("user-device");
  const isMobile = {
    android: () => n.userAgent.match(/androi/i),
    ios: () => n.userAgent.match(/iphone|ipad|ipod/i),
    window: () => n.userAgent.match(/windows phone/i),
    any: function () {
      return this.android() || this.ios() || this.window();
    },
  };
  const isDesktop = {
    linux: () => n.userAgent.match(/linux/i),
    mac: () => n.userAgent.match(/mac os/i),
    window: () => n.userAgent.match(/windows nt/i),
    any: function () {
      return this.linux() || this.mac() || this.window();
    },
  };
  const isBrowser = {
    chrome: () => n.userAgent.match(/chrome/i),
    safari: () => n.userAgent.match(/safari/i),
    firefox: () => n.userAgent.match(/firefox/i),
    opera: () => n.userAgent.match(/opera|opera mini/i),
    ie: () => n.userAgent.match(/msie|iemobile/i),
    edge: () => n.userAgent.match(/edge/i),
    any: function () {
      return (
        this.chrome() ||
        this.safari() ||
        this.firefox() ||
        this.opera() ||
        this.ie() ||
        this.edge()
      );
    },
  };

  $id.innerHTML = `
  <div>Nos estas visitando desde 
  ${
    (isMobile.any() && `un celular con sistema operativo ${isMobile.any()}`) ||
    (isDesktop.any() && `un pc con sistema operativo ${isDesktop.any()}`)
  } 
  <div>
   <div>El navegador que estas usando es para visitar nuestra pagina es ${isBrowser.any()} 
  <div>
  `;
}
