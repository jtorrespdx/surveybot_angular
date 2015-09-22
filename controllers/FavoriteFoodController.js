surveyBot.controller('FavFoodCtrl', function FavFoodCtrl($scope, SurveysFactory) {
  $scope.foods = SurveysFactory.foods;
  $scope.SurveysFacory = SurveysFactory;
});
