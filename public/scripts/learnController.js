/*---- Learn Controller ----*/

myApp.controller('LearnController', function(LearnService) {
  console.log('in LearnController');
  var vm = this;

  // your answers entry function
  vm.yourAnswersEntry = function() {
    console.log('in yourAnswersEntry function');
    var yourAnswersEntryObject = {
      entry1: vm.firstEntry,
      entry2: vm.secondEntry,
      entry3: vm.thirdEntry,
      entry4: vm.fourthEntry,
      entry5: vm.fifthEntry,
      entry6: vm.sixthEntry,
      entry7: vm.seventhEntry,
      entry8: vm.eighthEntry,
      entry9: vm.ninthEntry
    }; // end yourAnswersEntryObject
    console.log('yourAnswersEntryObject', yourAnswersEntryObject);
    LearnService.yourAnswersEntry(yourAnswersEntryObject).then(function() {
      sweetAlert("Your Answers Submitted!");
      vm.firstEntry = '';
      vm.secondEntry = '';
      vm.thirdEntry = '';
      vm.fourthEntry = '';
      vm.fifthEntry = '';
      vm.sixthEntry = '';
      vm.seventhEntry = '';
      vm.eighthEntry = '';
      vm.ninthEntry = '';
    }); // end LearnService.yourAnswersEntry
  }; // end yourAnswersEntry function

}); // end controller
