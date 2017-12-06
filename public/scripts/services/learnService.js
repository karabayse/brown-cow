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
      for (var i = 0; i < scoreInfo.length; i++) {
        if (scoreInfo[0] === 'ou'
        && scoreInfo[1] === 'oy'
        && scoreInfo[2] === 'ow'
        && scoreInfo[3] === 'oi'
        && scoreInfo[4] === 'ou'
        && scoreInfo[5] === 'ou'
        && scoreInfo[6] === 'ow'
        && scoreInfo[7] === 'ow'
        && scoreInfo[8] === 'ai') {
        vm.label === 'Correct';
      } else if (scoreInfo[i] === '') {
        vm.label === 'Not Answered';
      } else (vm.label === 'Incorrect');
      } // end for loop
    sv.scoreInfo = response.data;
    console.log(sv.scoreInfo);
    });
  }; // end getPieChart


  }); // end service
