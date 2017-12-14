myApp.controller('ScoreController', function(ScoreService, LearnService, $http, $location) {
  var vm = this;

  // pie chart post function
  vm.getPieChart = function() {
    console.log('in ScoreController, getPieChart');
    // pie piece lable
    // vm.labels = ['Correct', 'Incorrect', 'Not Answered'];
    vm.labels = [];
    // numbers for pie chart
    // vm.pieData = [];
    // legend
    vm.options = {
    legend: {
      display: true
    }, // end legend
    colors: ["#FF82AB",
            "rgba(224, 108, 112, 1)",
            "rgba(224, 108, 112, 1)"]
    }; // end vm.options
    LearnService.yourAnswersEntry().then(function() {
      vm.pieData = LearnService.scoreInfo;
      console.log('back in ScoreController with:', vm.pieData);
    }); // end LearnService.yourAnswersEntry
  };  // end getPieChart


    // Use getElementById ?

    // If first input is "ou", Correct!
    //   else Incorrect
    // If second input is "oy", Correct!
    //   else Incorrect
    // If third input is "ow", Correct!
    //   else Incorrect
    // If fourth input is "oi", Correct!
    //   else Incorrect
    // If fifth input is "ou", Correct!
    //   else Incorrect
    // If sixth input is "ou", Correct!
    //   else Incorrect
    // If seventh input is "ow", Correct!
    //   else Incorrect
    // If eighth input is "ow", Correct!
    //   else Incorrect
    // If ninth input is "ai", Correct!
    //   else Incorrect

    // Pie Chart Tags:  Correct, Incorrect, Not Answered
    // Change to Correct or Incorrect ?
    // If not, need to change conditional statements above

    // Push into array or Correct, Incorrect, Not Answered -> labels array ?

}); // end controller
