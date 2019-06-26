(function() {
    'use strict';

    angular
        .module('app.team')
        .controller('TeamCtrl', TeamCtrl);

    TeamCtrl.$inject = ['TeamService', '$stateParams', '$state'];

    function TeamCtrl(TeamService, $stateParams, $state) {
        var vm = this;
        vm.team = {};
        
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

        
    }
})();
