/*---- Learn Controller ----*/

myApp.controller('LearnController', function(LearnService) {
  console.log('in LearnController');
  var vm = this;

  // your answers entry function
  vm.yourAnswersEntry = function() {
    console.log('in yourAnswersEntry function');
    var yourAnswersEntryObject = {
      entry1: vm.firstInput,
      entry2: vm.secondInput,
      entry3: vm.thirdInput,
      entry4: vm.fourthInput,
      entry5: vm.fifthInput,
      entry6: vm.sixthInput,
      entry7: vm.seventhInput,
      entry8: vm.eigthInput,
      entry9: vm.ninthInput
    }; // end yourAnswersEntryObject
    console.log('yourAnswersEntryObject', yourAnswersEntryObject);
    LearnService.yourAnswersEntry(yourAnswersEntryObject).then(function() {
      sweetAlert("Your Answers Were Submitted!");
      vm.firstInput = '';
      vm.secondInput = '';
      vm.thirdInput = '';
      vm.fourthInput = '';
      vm.fifthInput = '';
      vm.sixthInput = '';
      vm.seventhInput = '';
      vm.eigthInput = '';
      vm.ninthInput = '';
    }); // end LearnService.yourAnswersEntry
  }; // end yourAnswersEntry function

}); // end controller
