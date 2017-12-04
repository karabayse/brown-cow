/*---- Learn Service ----*/

myApp.service('LearnService', function($http) {
  var sv = this;

  // POST for yourAnswersEntry
  sv.yourAnswersEntry = function(yourAnswersEntry) {
    return $http({
      method: 'POST',
      url: '/yourAnswers',
      data: yourAnswersEntry
    }).then(function(response) {
      console.log('back from yourAnswersEntry post:', response);
    });
  }; // end yourAnswersEntry function





  }); // end service
