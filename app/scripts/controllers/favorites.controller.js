(function() {
    'use strict';

    angular
        .module('app.favorites')
        .controller('FavoritesCtrl', FavoritesCtrl);

    FavoritesCtrl.$inject = ['$stateParams', '$state', 'FavoritesService', 'TeamService'];

    function FavoritesCtrl( $stateParams, $state, FavoritesService, TeamService) {
        var vm = this;
        vm.teamDetails = [];
        vm.favoriteTeams = [];

    
        activate();
        // TeamMatchesService

        function activate() {
            vm.favoriteTeams = TeamService.getFavoriteTeams()
            console.log(vm.favoriteTeams);
        }

        /*
        function handleFavSuccess(result) {
            console.log(result);
            // vm.teamDetails = result.data;
            // console.log(vm.teamDetails);
            // vm.standing = result.data.standings[0].table;
            // console.log(vm.standing);
        }

        

        function handleFavError(error) {
        //     console.log("An error occurred while loading leagues",error);
        }
        function getFavorites() {
            vm.favoriteTeams = FavoritesService.getFavoriteTeams();
        }*/
        
    }
})();
