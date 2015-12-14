// Ionic k-app App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'k-app' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'k-app.services' is found in services.js
// 'k-app.controllers' is found in controllers.js
angular.module('k-app', ['ionic', 'k-app.controllers', 'k-app.services', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // list of bars on the main page
  .state('tab.bars', {
    url: '/bars',
    views: {
      'tab-bars': {
        templateUrl: 'templates/tab-bars.html',
        controller: 'BarsCtrl'
      }
    }
  })

  .state('tab.drive-me-there', {
    url: '/bars/drive/:barId',
    views: {
      'tab-bars': {
        templateUrl: 'templates/bar-drive-me-there.html',
        controller: 'BarDriveMeThereCtrl'
      }
    }
  })

  // bar's details page
  .state('tab.bar-detail', {
    url: '/bars/:barId',
    views: {
      'tab-bars': {
        templateUrl: 'templates/bar-detail.html',
        controller: 'BarDetailCtrl'
      }
    }
  })

  .state('tab.page', {
    url: '/bars/page',
    views: {
      'tab-bars': {
        templateUrl: 'templates/page.html',
        controller: 'SideContentCtrl'
      }
    }
  })

  .state('tab.photo', {
    url: '/bars/photo',
    views: {
      'tab-bars': {
        templateUrl: 'templates/photo.html',
        controller: 'SideContentCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/bars');

});
