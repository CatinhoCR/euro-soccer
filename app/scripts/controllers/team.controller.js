(function() {
    'use strict';

    angular
        .module('app.team')
        .controller('TeamCtrl', TeamCtrl);

    TeamCtrl.$inject = ['$uibModal', 'TeamService', '$stateParams', '$state', '$log'];

    function TeamCtrl(TeamService, $stateParams, $state) {
        var vm = this;
        
        
        // vm.openModalMatches = openModalMatches;

        activate();

        function activate() {
            // vm.favorite_teams = TeamService.getFavoriteTeams();
            // console.log(vm.favorite_teams);
        }

        function openModalTeam(team) {
            TeamService.openModalTeam(team);
        }

        
    }
})();
