function initMap() {

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: {lat: -22.9131524, lng: -44.0051082}
  });
  
  /*const marker = new google.maps.Marker({
    position: novaIguacu,
    map: map,
    icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
  });
  
  
  const infoWindow = new google.maps.InfoWindow({
    content: '<h1>Nova Iguaçu, RJ</h1>'
  })

  marker.addListener('click', () =>{
    infoWindow.open(map, marker)
  })*/

  addMarker({lat: -22.7580653, lng: -43.4496179})

  function addMarker(coords){
    let marker = new google.maps.Marker({
      position: coords,
      map: map,
      icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    })
  }
}



window.initMap = initMap;
