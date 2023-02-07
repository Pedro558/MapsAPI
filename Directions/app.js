// map options
let myLatLng = {
  lat: 38.3460,
  lng: -0.4907
}

let mapOptions = {
  center: myLatLng,
  zoom: 6,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}

// createmap
let map = new google.maps.Map(
  document.getElementById('googleMap'),
  mapOptions
)

//create directions service
let directionsService = new google.maps.DirectionsService()