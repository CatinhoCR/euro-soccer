(function() {
    'use strict';

    

    function DashboardService($http, env) {
        var service = this;
        function getLeagues() {
            return $http.get(env.apiUrl + 'competitions/?areas=2077&plan=TIER_ONE', { headers: { 'X-Auth-Token': env.apiKey } });
        }
        service.getLeagues = getLeagues;


        /*
        function getLeagueTeams() {
            return $http.get(env.apiUrl + 'competitions/?areas=2077&plan=TIER_ONE', { headers: { 'X-Auth-Token': env.apiKey } });
        }

        function getLeagueMatches() {

        }*/
        
    }

      

    angular
        .module('app.dashboard', [])
        .service('DashboardService', DashboardService);

    DashboardService.$inject = ['$http', 'env'];

})();