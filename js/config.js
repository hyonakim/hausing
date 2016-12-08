let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'layout.tpl.html'
    })
  ;
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;