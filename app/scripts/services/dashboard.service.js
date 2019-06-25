(function() {
    'use strict';

    

    function DashboardService($http, env) {
        var service = this;
        function getLeagues() {
            return $http.get(env.apiUrl + 'competitions/', { headers: { 'X-Auth-Token': env.apiKey } });
        }
        service.getLeagues = getLeagues;

        
    }

      

    angular
        .module('app.dashboard', [])
        .service('DashboardService', DashboardService);

    DashboardService.$inject = ['$http', 'env'];

})();