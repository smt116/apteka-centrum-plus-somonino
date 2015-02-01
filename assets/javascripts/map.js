function initialize() {
  var myLatlng = new google.maps.LatLng(54.274050, 18.198262);
  var mapOptions = {
    zoom: 16,
    center: myLatlng,
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Apteka Centrum Plus'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
