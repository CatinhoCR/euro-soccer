(function() {
    'use strict';
    function DashboardService($http, env) {
        var service = this;
        service.getLeagues = getLeagues;
        service.getWorldCup = getWorldCup;
        
        function getLeagues() {
            return $http.get(env.apiUrl + 'competitions/?areas=2077&plan=TIER_ONE', { headers: { 'X-Auth-Token': env.apiKey } });
        }
        
        function getWorldCup() {
            return $http.get(env.apiUrl + 'competitions/2000/standings', { headers: { 'X-Auth-Token': env.apiKey } });   
        }
    }
    angular
        .module('app.dashboard', [])
        .service('DashboardService', DashboardService);
    DashboardService.$inject = ['$http', 'env', '$stateParams'];
})();