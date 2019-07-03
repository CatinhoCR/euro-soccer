(function() {
    'use strict';

    angular
        .module('app.league')
        .controller('LeagueCtrl', LeagueCtrl);

    LeagueCtrl.$inject = ['LeagueService', 'TeamService', '$stateParams', '$state'];

    function LeagueCtrl(LeagueService, TeamService, $stateParams, $state) {
        var vm = this;
        vm.league_details = [];
        vm.standing;
        vm.groupStandings = [];
        vm.tableType = '';
        vm.leagueDetails;
        // vm.getLeagueBasicDetails = getLeagueBasicDetails;
        vm.getLastLeagueDetails = getLastLeagueDetails;
        vm.getLeagueLayout = getLeagueLayout;

        vm.sortType = 'position';
        vm.sortReverse = false;

        vm.openTeamModal = openTeamModal;

        activate();

        function activate() {
            LeagueService.getLastLeagueDetails()
                .then(handleLeagueSuccess)
                .catch(handleLeagueError);
        }

        function handleLeagueSuccess(result) {
            // console.log(result.data);
            
            
            // console.log(vm.league_details);
            vm.getLeagueLayout(result);
            // if( vm.league_details.standings[0].table ) {
                
            // }
            
            // console.log(vm.standing);
        }

        function handleLeagueError(error) {
            console.log("An error occurred while loading leagues",error);
        }

        function getLeagueLayout(result) {
            vm.league_details = result.data;
            if ( vm.league_details.standings.length > 0 && vm.league_details.standings[0].group != null ) {
                // vm.standing.push()
                // console.log("A");
                // console.log(vm.league_details.standings);
                for ( var i = 0; i < vm.league_details.standings.length; i++ ) {
                    vm.groupStandings.push(vm.league_details.standings[i]);
                }
                // console.log(vm.groupStandings);
                vm.tableType = 'groups';
                // console.log(vm.league_details);
            } else if ( vm.league_details.standings[0] != null ) {
                // console.log("B");
                vm.standing = vm.league_details.standings[0].table;
                // console.log(vm.standing);
                vm.tableType = 'league';
            } else {
                // console.log("No table to show");
                vm.tableType = '';
                
                // show last season?
                // show all teams on 0s
            }
        }

        function getLastLeagueDetails(league) {
            // vm.league_details = league;
            LeagueService.getLastLeagueDetails()
                .then(function(result) {
                    
                    console.log(result);
                    vm.getLeagueLayout(result);
                });
        }

        function openTeamModal(team, leagueId, leagueName, season) {
            // console.log(team.id);
            // console.log(leagueName);
            // console.log(team);
            TeamService.openModalTeam(team, leagueId, leagueName, season);

            
        }

        function getTeamPlayers() {

        }

        function addFavorite() {

        }

    }
    
})();
