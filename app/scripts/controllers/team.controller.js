(function() {
    'use strict';

    angular
        .module('app.team')
        .controller('TeamCtrl', TeamCtrl);

    TeamCtrl.$inject = ['TeamService', '$stateParams', '$state'];

    function TeamCtrl(TeamService, $stateParams, $state, $location) {
        var vm = this;
        vm.team = {};
        /*
        vm.showHomeStats = false;
        vm.showAwayStats = false;
        vm.toggleHomeStats = toggleHomeStats;
        vm.toggleAwayStats = toggleAwayStats;
        */
        // vm.homeStats = 
        
        vm.openModalTeam = openModalTeam;

        activate();

        function activate() {
            
            // vm.favorite_teams = TeamService.getFavoriteTeams();
            // console.log(vm.favorite_teams);
        }

        function openModalTeam(team) {
            // console.log(team);
            vm.team = TeamService.openModalTeam(team);
        }

        function addFavorite() {
            
        }

        /*
        function toggleHomeStats(team) {
            vm.showHomeStats = !vm.showHomeStats;
            console.log(TeamService.awayTeamStats(team));
        }

        function toggleAwayStats(team) {

        }*/

        
    }
})();
