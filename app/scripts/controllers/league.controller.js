(function() {
    'use strict';

    angular
        .module('app.league')
        .controller('LeagueCtrl', LeagueCtrl);

    LeagueCtrl.$inject = ['LeagueService', 'TeamService', '$stateParams', '$state'];

    function LeagueCtrl(LeagueService, TeamService, $stateParams, $state) {
        var vm = this;
        vm.league_details = [];
        
        vm.sortType = 'position';
        vm.sortReverse = false;

        vm.openTeamModal = openTeamModal;

        activate();

        function activate() {
            LeagueService.getLeagueDetails()
                .then(handleLeagueSuccess)
                .catch(handleLeagueError);
        }

        function handleLeagueSuccess(result) {
            vm.league_details = result.data;
            // console.log(vm.league_details);
            vm.standing = result.data.standings[0].table;
            // console.log(vm.standing);
        }

        function handleLeagueError(error) {
            console.log("An error occurred while loading leagues",error);
        }

        function openTeamModal(team) {
            // console.log(team.id);
            TeamService.openModalTeam(team);

            
        }

        function getTeamPlayers() {

        }

        function addFavorite() {

        }

    }
    
})();
