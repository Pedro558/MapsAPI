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
    origin: document.getElementById('from').value,
    destination: document.getElementById("to").value,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.IMPERIAL
  }

   //pass request to route
  directionsService.route(request, function (result, status){
    if(status == google.maps.DirectionsStatus.OK){
      //get distance and time
      const output = document.querySelector('#output')
      output.innerHTML = `
      <section class='alert-info'>
        <p>From: ${document.getElementById("from").value}</p>
        <p>To: ${document.getElementById("to").value}</p>
        <p>Driving Distance: ${result.routes[0].legs[0].distance.text}</p>
        <p>Duration: ${result.routes[0].legs[0].duration.text}</p>
      </section>
      `

      //display route
      directionsDisplay.setDirections(result)
    } else{
      // delete route from map
      directionsDisplay.setDirections({ routes: []})

      // center map in spain
      map.setCenter(myLatLng)

      //add error message
      output.innerHTML = `
        <div class='alert-danger'>Couldn't retrieve driving distance</div>
      `
    }
  })
}

// auto complete
let options = {
  types: ['(cities)']
}

let input1 = from;
let autocomplete1 = new google.maps.places.Autocomplete(input1, options);

let input2 = to;
let autocomplete2 = new google.maps.places.Autocomplete(input2, options);