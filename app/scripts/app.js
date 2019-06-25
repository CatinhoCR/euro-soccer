(function () {
  'use strict';
  angular
    .module('angularjs-starter', [
      "ngAnimate",
      "ngCookies",
      "ngRoute",
      "ngTouch",
      "ngSanitize",
      "ui.router",
      "angular-loading-bar",
      "ngAnimate",
      "cfp.loadingBar",
      "moment-picker",
      "chart.js",
      "ui.bootstrap",
      "angularMoment",
      "angularFileUpload",
      "app.dashboard"
    ])
    .constant('constants', {
      "url": "https://api.football-data.org/v2/",
      'version': '2.0.0'
    })

    .constant('env', {
      apiUrl: "https://api.football-data.org/v2/",
      apiKey: 'd9b2c29baac94818a4908116a55d6f08',
      
    })

    .config(["momentPickerProvider", function (momentPickerProvider) {
      momentPickerProvider.options({
        locale: "en"
      });
    }])
    .config(function (ChartJsProvider) {
      ChartJsProvider.setOptions("global", {
        colors: ["#2972AB", "#C8785C", "#164479", "#FED049", "#e83e8c", "#949FB1", "#28a745"]
      });
    })
    .config(function ($locationProvider) {
      $locationProvider.html5Mode(true);
    })
    .config(function ($httpProvider) {
      $httpProvider.interceptors.push('authInterceptor');
    })
    .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
      cfpLoadingBarProvider.includeSpinner = false;
      cfpLoadingBarProvider.latencyThreshold = 500;
    }])
    .config(function ($urlRouterProvider, $stateProvider) {
      // default route
      $urlRouterProvider.otherwise("/");

      // ui router states
      $stateProvider
        .state('main', {
          url: "/",
          views: {
            content: {
              templateUrl: 'views/home.html',
              controller: 'HomeController'
            }
          },
          data: {
            needsAuth: false
          }
        })
        .state('dashboard', {
          url: "/dashboard",
          views: {
            content: {
              templateUrl: 'views/dashboard.html',
              controller: 'DashboardCtrl'
            }
          },
          data: {
            needsAuth: false
          }
        })
        .state('about', {
          url: "/about",
          views: {
            content: {
              templateUrl: 'views/about.html',
              controller: 'AboutController'
            }
          },
          data: {
            needsAuth: false
          }
        });

    })
    .run(function ($trace, $transitions, $window, $rootScope, constants) {

      $rootScope.footer = {
        year: new Date().getFullYear(),
        version: constants.version,
        date: null
      };

      // before window closes
      $window.onbeforeunload = function () {};

      $transitions.onStart({}, function (trans) {
        // check here if user is authenticated and redirect if he's not
        // var data = trans.to().data;
        // if (data && data.needsAuth && false) {}
        var progressBar = trans.injector().get('progressBar');
        progressBar.transitionStart();
        trans.promise.finally(progressBar.transitionEnd);
      });

      $transitions.onSuccess({}, function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      });

    });
})();