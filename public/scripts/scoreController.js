myApp.controller('ScoreController', function(ScoreService, $http, $location) {
  var vm = this;

  // pie chart post function
  vm.getPieChart = function() {
    console.log('in Score Controller, getPieChart');
    // pie piece lable
    vm.labels = ['Correct', 'Incorrect', 'Not Answered'];
    // dummy data
    vm.data = [300, 500, 100];
    // legend
    vm.options = {
    legend: {
      display: true
      } // end legend
    }; // end vm.options
    vm.colors = ["#FF82AB",
            "rgba(224, 108, 112, 1)",
            "rgba(224, 108, 112, 1)"];     
  };  // end getPieChart

}); // end controller
