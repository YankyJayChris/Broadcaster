import Utils from "./Utils.js";

const LoadMap = {
  load: async (el,options) => {
     if (!window.google) {
       var s = document.createElement("script");
       s.type = "text/javascript";
       s.src = `https://maps.google.com/maps/api/js?key=YOUR_API_KEY`;
       var x = document.getElementsByTagName("script")[0];
       x.parentNode.insertBefore(s, x);
       s.addEventListener("load", e => {
         Utils.gmap(el, options);
         Utils.maphelper();
       });
     } else {
        Utils.gmap(el, options);
        Utils.maphelper();
     }
  }
};
export default LoadMap;