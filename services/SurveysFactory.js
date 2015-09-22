surveyBot.factory('SurveysFactory', function SurveysFactory() {
  var factory = {};
  factory.surveys = [];

  factory.addResponse = function() {
    var response = { answer1: factory.foodName, answer2: factory.drinkName };
  };
  return factory;
});





// What is your favorite food
