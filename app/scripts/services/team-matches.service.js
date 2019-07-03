(function() {
    'use strict';

    angular
        .module('app.match', [])
        .service('TeamMatchesService', TeamMatchesService);

    TeamMatchesService.$inject = ['$http', 'env', '$stateParams', '$state'];

    function TeamMatchesService($http, env, $stateParams, $state) {
        var service = this;

        service.getTeamDetailsLast = getTeamDetailsLast;
        service.getTeamDetails = getTeamDetails;
        
        function getTeamDetails() {
            return $http.get(env.apiUrl + 'teams/' + $stateParams.teamId + '/matches', { headers: { 'X-Auth-Token': env.apiKey } });
            
        }
        // return $http.get(env.apiUrl + 'teams/' + team.id, { headers: { 'X-Auth-Token': env.apiKey } });

        function getTeamDetailsLast() {
            return $http.get(env.apiUrl + 'competitions/' + $stateParams.teamId + '/matches?season=2018', { headers: { 'X-Auth-Token': env.apiKey } });
            
        }
        // return $http.get(env.apiUrl + 'teams/' + team.id, { headers: { 'X-Auth-Token': env.apiKey } });

        // /competitions/2001/matches?season=2018&stage=GROUP_STAGE
        /*
        service.getLeagueDetails = getLeagueDetails;

        function getLeagueDetails() {
            return $http.get(env.apiUrl + 'competitions/' + $stateParams.leagueId + '/standings?standingType=TOTAL', { headers: { 'X-Auth-Token': env.apiKey } });
        }*/

    }

})();
