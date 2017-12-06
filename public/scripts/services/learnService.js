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

  // GET for getPieChart in scoreController
  sv.getPieChart = function() {
    return $http({
      method: 'GET',
      url: '/yourAnswers'
    }).then(function(response){
    sv.pieData = response.data;
    console.log(sv.pieData);
    });
  }; // end getPieChart


  }); // end service
