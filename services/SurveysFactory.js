surveyBot.factory('SurveysFactory', function SurveysFactory() {
  var factory = {};
  factory.surveys = [];

  factory.addResponse = function() {
    var survey = { answer1: factory.foodName, answer2: factory.drinkName };
    factory.surveys.push(survey);
    console.log(factory.surveys);

    factory.foodName = null;
    factory.drinkName = null;
  };
  return factory;
});





// What is your favorite food
