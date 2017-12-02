/*---- COW CONTROLLER ----*/

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeController',
    controllerAs: 'HomeController as hc'
  }).when('/learn', {
    templateUrl: 'views/learn.html',
    controller: 'LearnController',
    controllerAs: 'LearnController as lc'
  }).when('/answers', {
    templateUrl: 'views/answers.html',
    controller: 'AnswersController',
    controllerAs: 'AnswersController as ac'
  // }).when('/rooms', {
  //   templateUrl: 'views/rooms.html',
  //   controller: 'RoomsController',
  //   controllerAs: 'RoomsController as roc'
  }).otherwise('/');
  $locationProvider.html5Mode(true);
});
