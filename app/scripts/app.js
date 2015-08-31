'use strict';

/**
 * @ngdoc overview
 * @name pillarsApp
 * @description
 * # pillarsApp
 *
 * Main module of the application.
 */

angular
  .module('pillarsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/health', {
        templateUrl: 'views/health.html',
        controller: 'HealthCtrl'
      })
      .when('/wealth', {
        templateUrl: 'views/wealth.html',
        controller: 'WealthCtrl'
      })
      .when('/life', {
        templateUrl: 'views/life.html',
        controller: 'LifeCtrl'
      })
      .when('/work', {
        templateUrl: 'views/work.html',
        controller: 'WorkCtrl'
      })
      .otherwise({
        redirectTo: '/index'
      });
  })
  //inital $rootScope with API
  //here use dummydata.
  .run(function($rootScope) {
   // dummyData for testing
    $rootScope.dummyData = {
      en: {
          'pillars': [
            {
              'title': 'Health',
              'content': 'Health content is here.',
              'url': '#/health'
            },
            {
              'title': 'Wealth',
              'content': 'Wealth content is here.',
              'url': '#/wealth'
            },
            {
              'title': 'Life',
              'content': 'Life content is here.',
              'url': '#/life'
            },
            {
              'title': 'Work',
              'content': 'Work content is here.',
              'url': '#/work'
            }
          ],
          'notifications':[
            {
              'title': 'First notification',
              'content': 'This morning it is foggy',
              'url': '/#'
            },
            {
              'title': 'Second notification',
              'content': 'Stand up is at 10',
              'url': '/#'
            },
            {
              'title': 'Third notification',
              'content': 'Check your email box',
              'url': '/#'
            }
          ]
        },
      es: {
          'pillars': [
            {
              'title': 'Salud',
              'content': 'el contenido de la Salud está aquí.',
              'url': '#/health'
            },
            {
              'title': 'La riqueza',
              'content': 'La riqueza de contenido está aquí.',
              'url': '#/wealth'
            },
            {
              'title': 'La vida',
              'content': 'La vida es el contenido aquí.',
              'url': '#/life'
            },
            {
              'title': 'Trabajo',
              'content': 'Contenido del trabajo está aquí.',
              'url': '#/work'
            }
          ],
          'notifications':[
            {
              'title': 'Primera notificación',
              'content': 'Esta mañana hay niebla',
              'url': '/#'
            },
            {
              'title': 'En segundo lugar la notificación',
              'content': 'Ponte de pie es a las 10',
              'url': '/#'
            },
            {
              'title': 'Tercera notificación',
              'content': 'Revise su casilla de correo electrónico',
              'url': '/#'
            }
          ]          
        }
    };
});