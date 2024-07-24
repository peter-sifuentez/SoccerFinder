let map;
let InforObj = [];
let centerCords = {
  lat: 29.749907,
  lng: -95.358421
};

let markersOnMap = [{
    placeName: "#1 Toros",
    LatLng: [{
      lat: 29.7733592,
      lng: -95.3830655
    }]
  },
  {
    placeName: "#2 Houston Toros Center",
    LatLng: [{
      lat: 29.7728736,
      lng: -95.6030787
    }]
  },
  {
    placeName: "#3 Canchas La Pulga Loca",
    LatLng: [{
      lat: 29.7196374,
      lng: -95.5184287
    }]
  },

  {
    placeName: "#4 West Houston Indoor Soccer",
    LatLng: [{
      lat: 29.8309451,
      lng: -95.7299823
    }]
  },

  {
    placeName: "#5 Eastwood Park Mini-Pitch",
    LatLng: [{
      lat: 29.7430989,
      lng: -95.3264864,
    }]
  },

  {
    placeName: "#6 Ingrando Park Mini-Pitches",
    LatLng: [{
      lat: 29.7064473,
      lng: -95.2871302
    }]
  },

  {
    placeName: "#7 Coles Park",
    LatLng: [{
      lat: 29.966339,
      lng: -95.672073
    }]
  },
  {
    placeName: "#8 Stone Gate Soccer Park",
    LatLng: [{
      lat: 29.943534,
      lng: -95.664973
    }]
  },
  {
    placeName: "#9 D. Bradley McWilliams YMCA",
    LatLng: [{
      lat: 29.983761,
      lng: -95.570534
    }]
  }
];

window.onload = function() {
  initMap();
};


//TOROS link
function addMarkerInfo() {
  for (var i = 0; i < markersOnMap.length; i++) {
    var contentString = '<div id="#toros"><h4>' + markersOnMap[i].placeName +
      '</h4><a href="#toros">Click for more info</a></div>';

    const marker = new google.maps.Marker({
      position: markersOnMap[i].LatLng[0],
      map: map
    });

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200
    });

    marker.addListener('click', function() {
      closeOtherInfo();
      infowindow.open(marker.get('map'), marker);
      InforObj[0] = infowindow;
    });


  }



  //CANCHAS LA PULGA LOCA link
  /*for (var i = 0; i < markersOnMap.length; i++) {
    var contentString = '<div id="#loca"><h4>' + markersOnMap[i].placeName +
      '</h4><a href="#loca">Click for more info</a></div>';

    const marker = new google.maps.Marker({
      position: markersOnMap[i].LatLng[0],
      map: map
    });

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200
    });

    marker.addListener('click', function() {
      closeOtherInfo();
      infowindow.open(marker.get('map'), marker);
      InforObj[0] = infowindow;
    });


  }*/



  //houston toros link
  /*for (var i = 0; i < markersOnMap.length; i++) {
    var contentString = '<div id="content"><h4>' + markersOnMap[i].placeName +
      '</h4><a href="#">Click for more info</a></div>';

    const marker = new google.maps.Marker({
      position: markersOnMap[i].LatLng[0],
      map: map
    });

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200
    });

    marker.addListener('click', function() {
      closeOtherInfo();
      infowindow.open(marker.get('map'), marker);
      InforObj[0] = infowindow;
    });


  }*/

}

//Testing code
//TOROS link
function addMarkerInfo() {

  for (var i = 0; i < markersOnMap.length; i++) {
    var contentString = '<div id="content"><h4>' + markersOnMap[i].placeName +
      '</h4><a href="#info">Click for full list</a></div>';

    const marker = new google.maps.Marker({
      position: markersOnMap[i].LatLng[0],
      map: map
    });

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200
    });

    marker.addListener('click', function() {
      closeOtherInfo();
      infowindow.open(marker.get('map'), marker);
      InforObj[0] = infowindow;
    });


  }


}

function closeOtherInfo() {
  if (InforObj.length > 0) {
    InforObj[0].set("marker", null);
    InforObj[0].close();
    InforObj.length = 0;
  }
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: centerCords
  });
  addMarkerInfo();
}



function talkRusty() {
  console.log('Bark!');
}

talkRusty();


// The 7 primaitive data types 

