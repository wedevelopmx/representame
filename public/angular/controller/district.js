angular.module('app')
  .controller('DistrictController', ['$rootScope', '$scope', '$routeParams', 'District', function($rootScope, $scope, $routeParams, District) {
    $scope.deputyId = $routeParams.id;

    $scope.party = {
      attendance:[]
    };
    $scope.chamber = {
      attendance: []
    };

    $scope.facebookShare = {
      url: 'http://contactolegislativo.com',
      title: '¿Sabes que diputado te representa?'
    };

    $scope.whatsappShare = 'Te invito a conocer mas sobre el diputado que te representa en http://contactolegislativo.com';
    $scope.twitterShare = 'Te invito a conocer mas sobre el diputado que te representa en @clegislativomx http://contactolegislativo.com';

    District.get({ districtId: $routeParams.id }, function(district) {
      $scope.district = district;
      $scope.deputy = district[0];
      //console.log($scope.deputy)

      $scope.tweetText = '@' + $scope.deputy.twitter + ' los ciudadanos queremos que seas un %23FuncionarioTransparente y publiques tus %233de3 @IMCOmx @IntegridadMx'

      $scope.mailSubject = 'Tu me representas y estoy al pendiente de su desempeño en %23contactoLegislativo';
      $scope.mailBody = 'Dip.' + $scope.deputy.displayName +
        ', tu me representas y estoy al pendiente de su desempeño en %23contactoLegislativo (http://contactolegislativo.com)';

      $scope.mail3Subject = 'Tu me representas y quiero que publiques tu %233de3';
      $scope.mail3Body = 'Dip.' + $scope.deputy.displayName +
        ', los ciudadanos queremos que seas un %23FuncionarioTransparente y publiques tus %233de3 @IMCOmx @IntegridadMx';

    });

    $scope.attendanceOptions = {
      title: 'Asistencias',
      subtitle: ''
    };


  }]);
