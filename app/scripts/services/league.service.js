(function() {
    'use strict';

    angular
        .module('app.league', [])
        .service('LeagueService', LeagueService);

    LeagueService.$inject = ['$http', 'env', '$stateParams'];

    function LeagueService($http, env, $stateParams) {
        var service = this;
        service.getLeagueDetails = getLeagueDetails;
        service.getLastLeagueDetails = getLastLeagueDetails;
        service.getWCDetails = getWCDetails;
        service.getLeagueBasicDetails = getLeagueBasicDetails;

        function getLeagueDetails() {
            return $http.get(env.apiUrl + 'competitions/' + $stateParams.leagueId + '/standings?standingType=TOTAL', { headers: { 'X-Auth-Token': env.apiKey } });
        }

        function getLastLeagueDetails() {
            return $http.get(env.apiUrl + 'competitions/' + $stateParams.leagueId + '/standings?standingType=TOTAL&season=2018', { headers: { 'X-Auth-Token': env.apiKey } });
        }

        function getLeagueBasicDetails(league) {
            return $http.get(env.apiUrl + 'competitions/' + league + '/teams?season=2018&stage=group', { headers: { 'X-Auth-Token': env.apiKey } });
            // competitions/2014/teams?season=2018&stage=group
        }

        function getWCDetails() {
            // WC
            return $http.get(env.apiUrl + 'competitions/' + $stateParams.leagueId + '/standings?standingType=TOTAL', { headers: { 'X-Auth-Token': env.apiKey } });
        }

    }

})();
