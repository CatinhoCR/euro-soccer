(function() {
    'use strict';

    angular
        .module('app.match', [])
        .service('TeamMatchesService', TeamMatchesService);

    TeamMatchesService.$inject = ['$http', 'env', '$stateParams'];

    function TeamMatchesService($http, env, $stateParams) {
        var service = this;

        service.getTeamDetails = getTeamDetails;
        
        function getTeamDetails() {
            return $http.get(env.apiUrl + 'teams/' + $stateParams.teamId + '/matches', { headers: { 'X-Auth-Token': env.apiKey } });
            // return $http.get(env.apiUrl + 'teams/' + team.id, { headers: { 'X-Auth-Token': env.apiKey } });
        }
        /*
        service.getLeagueDetails = getLeagueDetails;

        function getLeagueDetails() {
            return $http.get(env.apiUrl + 'competitions/' + $stateParams.leagueId + '/standings?standingType=TOTAL', { headers: { 'X-Auth-Token': env.apiKey } });
        }*/

    }

})();
