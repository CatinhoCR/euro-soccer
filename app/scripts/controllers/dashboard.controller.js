(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardCtrl', DashboardCtrl);
    DashboardCtrl.$inject = ['DashboardService', '$stateParams'];

    function DashboardCtrl(DashboardService, $stateParams) {
        var vm = this;
        vm.leagues = [];
        vm.WC = {};
        vm.loadWC = loadWC;
        vm.showWC = false;
        vm.sortType = 'id';
        vm.sortReverse = false;
        

        function activate() {
            DashboardService.getLeagues()
                .then(handleSuccess)
                .catch(handleError);
        }
        activate(DashboardService);

        function handleSuccess(result) {
            vm.leagues = result.data.competitions;
          // console.log(vm.leagues);
            console.log("This is the basic competitions array filtered by area to europe.")
            console.log(vm.leagues);



          // Can't figure out a way to get multiple results with 1 query here.. need this to calculate total matches, etc since API v2 changed those.
          /*
          for ( var i = 0; i < vm.leagues.count; i++ ) {
            DashboardService.getLeagueTeams(vm.leagues.competitions[i].id)
          }
          */
        }

        function handleError(error) {
            console.log("An error occurred while loading leagues",error);
        }

        

        function loadWC() {
            if( !vm.WC.competition ) {
                DashboardService.getWorldCup()
                .then(function(result){
                    vm.WC = result.data;
                    vm.showWC = true;
                    console.log(vm.WC)
                })
            } else {
                vm.showWC = !vm.showWC;
            }
        }
    }
})();
