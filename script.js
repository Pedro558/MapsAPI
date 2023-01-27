function initMap() {
  const novaIguacu = { 
    lat: -22.760133,
    lng: -43.449341
   };

   const queimados = {
    lat: -22.7131939,
    lng: -43.5865575
   }

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: novaIguacu
  });
  
  const marker1 = new google.maps.Marker({
    position: novaIguacu,
    map: map,
    icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
  });
  
  const marker2 = new google.maps.Marker({
    position: queimados,
    map: map,
  });
}

window.initMap = initMap;
