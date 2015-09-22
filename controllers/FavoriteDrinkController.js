surveyBot.controller('FavDrinkCtrl', function FavDrinkCtrl($scope, SurveysFactory) {
  $scope.drinks = SurveysFactory.drinks;
  $scope.SurveysFacory = SurveysFactory;
});
