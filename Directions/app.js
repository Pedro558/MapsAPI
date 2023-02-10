// getting 'from' and 'to'
const from = document.getElementById('from').value
const to = document.getElementById('to').value

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

// create directions service
let directionsService = new google.maps.DirectionsService()

// create directions renderer 
let directionsDisplay = new google.maps.DirectionsRenderer()

// bind the directionsRenderer to the map
directionsDisplay.setMap(map)


function calcRoute(){
  // create request
  let request = {
    origin: from,
    destination: to,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.IMPERIAL
  }

   //pass request to route
  directionsService.route(request, (result, status) =>{
    if(status == google.maps.DirectionsStatus.Ok){
      //get distance and time
      const output = document.querySelector('#output')
      output.innerHTML = `
      <div class='alert-info'>
      From: ${from}
      To: ${to}
      Driving Distance: ${result.routes[0].legs[0].distance.text}
      Duration: ${result.routes[0].legs[0].duration.text}
      `
    }
  })
}