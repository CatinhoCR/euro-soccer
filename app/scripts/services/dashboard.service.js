(function() {
    'use strict';

    

    function DashboardService($http, env) {
        var service = this;
        service.getLeagues = getLeagues;
        // service.getLeagueTeams = getLeagueTeams;
        
        function getLeagues() {
            return $http.get(env.apiUrl + 'competitions/?areas=2077&plan=TIER_ONE', { headers: { 'X-Auth-Token': env.apiKey } });
        }
        
        // console.log(service.getLeagues);

        /* Cant figure out a way to query for multiple parameters with this app from the docs, tried using "&", "?", "," etc. this fires too many requests...
        function getLeagueTeams(id) {
            console.log(id)
            return $http.get(env.apiUrl + 'competitions/'+id+'/teams', { headers: { 'X-Auth-Token': env.apiKey } });
        }
        */

        
    }

      

    angular
        .module('app.dashboard', [])
        .service('DashboardService', DashboardService);

    DashboardService.$inject = ['$http', 'env'];

})();