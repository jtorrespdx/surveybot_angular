surveyBot.controller('FavCtrl', function FavCtrl($scope, SurveysFactory) {
  $scope.surveys = SurveysFactory.surveys;
  $scope.SurveysFactory = SurveysFactory;
});
