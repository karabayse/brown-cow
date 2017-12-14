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
    console.log('in getPieChart in learnService.js');
    return $http({
      method: 'GET',
      url: '/yourAnswers'
    }).then(function(response){

      if (response.entry1 === 'ou' ||
      response.entry2 === 'oy' ||
      response.entry3 === 'ow' ||
      response.entry4 === 'oi' ||
      response.entry5 === 'ou' ||
      response.entry6 === 'ou' ||
      response.entry7 === 'ow' ||
      response.entry8 === 'ow' ||
      response.entry9 === 'ai') {
        sv.labels.push['Correct'];
      } else (sv.labels.push['Incorrect']);


    sv.scoreInfo = response.data.entry1;
    console.log('sv.scoreInfo:', sv.scoreInfo);
    });
  }; // end getPieChart


  }); // end service
