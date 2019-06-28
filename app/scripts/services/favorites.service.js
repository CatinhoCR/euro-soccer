(function() {
    'use strict';

    angular
        .module('app.favorites', [])
        .service('FavoritesService', FavoritesService);

    FavoritesService.$inject = ['$http', 'env', '$stateParams', 'TeamService'];

    function FavoritesService($http, env, $stateParams, TeamService) {
        var service = this;
        service.teams = [];
        service.getFavoriteTeams = getFavoriteTeams;

        function getFavoriteTeams() {
            return TeamService.getFavoriteTeams;
            // console.log(service.teams);
        }
        /*
        service.getTeamDetails = getTeamDetails;
        
        function getTeamDetails() {
            return $http.get(env.apiUrl + 'teams/' + $stateParams.teamId + '/matches', { headers: { 'X-Auth-Token': env.apiKey } });
            // return $http.get(env.apiUrl + 'teams/' + team.id, { headers: { 'X-Auth-Token': env.apiKey } });
        }*/
        /*
        service.getLeagueDetails = getLeagueDetails;

        function getLeagueDetails() {
            return $http.get(env.apiUrl + 'competitions/' + $stateParams.leagueId + '/standings?standingType=TOTAL', { headers: { 'X-Auth-Token': env.apiKey } });
        }*/

    }

})();
