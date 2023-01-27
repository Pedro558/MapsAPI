function initMap() {

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: {lat: -22.9131524, lng: -44.0051082}
  });
    
  function addMarker(props){
    const marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      icon: props.iconImage,
      content: props.content
    })

    const infoWindow = new google.maps.InfoWindow({
      content: props.content
    })

    marker.addListener('click', () => {
      infoWindow.open(map, marker)
    })
  }

  markers.map((marker) => {
    addMarker(marker)
  })

  google.maps.event.addListener(map, 'click', (event) =>{
    addMarker({coords: event.latLng})
  })
}

const markers = [
  {
    coords: {lat: -22.7580653, lng: -43.4496179},
    content: '<h1>Nova Iguaçu</h1>'
  }
]

window.initMap = initMap;