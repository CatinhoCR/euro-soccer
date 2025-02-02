(function() {
    'use strict';

    angular
        .module('app.league', [])
        .service('LeagueService', LeagueService);

    LeagueService.$inject = ['$http', 'env', '$stateParams'];

    function LeagueService($http, env, $stateParams) {
        var service = this;
        service.getLeagueDetails = getLeagueDetails;
        service.getWCDetails = getWCDetails;

        function getLeagueDetails() {
            return $http.get(env.apiUrl + 'competitions/' + $stateParams.leagueId + '/standings?standingType=TOTAL', { headers: { 'X-Auth-Token': env.apiKey } });
        }

        function getWCDetails() {
            // WC
            return $http.get(env.apiUrl + 'competitions/' + $stateParams.leagueId + '/standings?standingType=TOTAL', { headers: { 'X-Auth-Token': env.apiKey } });
        }

    }

})();
