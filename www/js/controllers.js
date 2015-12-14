angular.module('k-app.controllers', [])

.controller('BarsCtrl', function($scope, $stateParams, $state, Bars) {
  $scope.bars = Bars.all();
  $scope.driveMeThere = function(id) {
    $scope.bar = Bars.get($stateParams.barId);
    $state.go('tab.drive-me-there', { barId: id });
  };
})

.controller('SideContentCtrl', function($scope, $state) {
  $scope.goToCidehus = function() {
    $state.go('tab.cidehus');
  };

  $scope.goToOptions = function() {
    alert("opening options page");
  };
})

.controller('BarDetailCtrl', function($scope, $stateParams, Bars) {
  $scope.bar = Bars.get($stateParams.barId);
})

.controller('BarDriveMeThereCtrl', function($scope, $stateParams, $state, Bars) {
  $scope.bar = Bars.get($stateParams.barId);
})

.controller('MapCtrl', function($scope, $stateParams, $cordovaGeolocation, $state, Bars) {

  var position;
  
  var getCurrentPositionSuccess = function(position) {
    position = [position.coords.latitude, position.coords.longitude];
    map(position);
  };
  navigator.geolocation.getCurrentPosition(getCurrentPositionSuccess);

  var geolocationSuccess = function(position) {
    position = [position.coords.latitude, position.coords.longitude];
    calcRoute(position);
  };
  navigator.geolocation.watchPosition(geolocationSuccess);

  function map(position) {
    // Set Map without markers
    $scope.bar = Bars.get($stateParams.barId);

    var options = {timeout: 10000, enableHighAccuracy: true};

    // user & target position
    var originlatLng = new google.maps.LatLng(position[0],position[1]);

    var mapOptions = {
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: originlatLng
    };

    // instantiate a map object
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }

  function calcRoute(position) {

    var directionsDisplay = new google.maps.DirectionsRenderer({ draggable: false });
    var directionsService = new google.maps.DirectionsService();

    // wait until the map is loaded
    var currentOriginlatLng = new google.maps.LatLng(position[0],position[1]);

    google.maps.event.addListenerOnce($scope.map, 'idle', function() {

      directionsDisplay.setMap($scope.map);
      directionsDisplay.setPanel(document.getElementById("directions"));

      var route = (function() {

        var request = {
          origin: currentOriginlatLng,
          destination: $scope.bar.geolocation,
          travelMode: google.maps.TravelMode.WALKING
        };

        directionsService.route(request, function(response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
          }
        });

      })();
    });
  }
});
