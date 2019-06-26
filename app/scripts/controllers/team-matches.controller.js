(function() {
    'use strict';

    angular
        .module('app.match')
        .controller('TeamMatchesCtrl', TeamMatchesCtrl);

    TeamMatchesCtrl.$inject = ['TeamMatchesService', '$stateParams', '$state'];

    function TeamMatchesCtrl(TeamMatchesService, TeamService, $stateParams, $state) {
        var vm = this;
        vm.teamDetails = [];

        activate();
        // TeamMatchesService

        function activate() {
            TeamMatchesService.getTeamDetails()
                .then(handleTeamSuccess)
                .catch(handleTeamError);
        }

        function handleTeamSuccess(result) {
            vm.teamDetails = result.data;
            console.log(vm.teamDetails);
            // vm.standing = result.data.standings[0].table;
            // console.log(vm.standing);
        }

        function handleTeamError(error) {
            console.log("An error occurred while loading leagues",error);
        }

        
    }
})();
