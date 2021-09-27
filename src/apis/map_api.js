import { Loader } from "@googlemaps/js-api-loader";

export default {
  loadMap() {
    let map;
    const YOUR_API_KEY = "****";
    const loader = new Loader({
      apiKey: YOUR_API_KEY,
      version: "weekly",
    });
    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 49.90098687626329, lng: -97.14019542594642 },
        zoom: 14,
      });
      const marker = new google.maps.Marker({
        position: { lat: 49.90098687626329, lng: -97.14019542594642 },
        map,
        title: "Rupertsland Daycare Ctr",
      });
      marker.addListener("click", () => {
        window.location.href =
          "https://www.google.com/maps/place/Rupertsland+Daycare+Ctr/@49.901366,-97.1410876,15.25z/data=!4m5!3m4!1s0x52ea715d75fd8ed5:0x10712985b6aea173!8m2!3d49.9009774!4d-97.1401983";
      });
    });
  }
};
