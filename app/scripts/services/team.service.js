(function() {
    'use strict';

    angular
        .module('app.team', [])
        .service('TeamService', TeamService);

    TeamService.$inject = ['$http', 'env', '$stateParams', '$uibModal', '$log', '$state'];

    function TeamService($http, env, $stateParams, $uibModal, $log, $state) {
        var service = this;

        service.selectedTeam = {};
        service.teamStats;

        service.getTeamStats = getTeamStats;
        // service.getTeamPlayers = getTeamPlayers;
        service.homeTeamStats = homeTeamStats;
        service.awayTeamStats = awayTeamStats;

        service.homeStats = {};
        service.awayStats = {};
        service.openModalTeam = openModalTeam;
        service.modal = {};

        service.addFavoriteTeam = addFavoriteTeam;
        service.getFavoriteTeams = getFavoriteTeams
        service.favoriteTeams = [];

        function getTeamStats(team) {
            return $http.get(env.apiUrl + 'teams/' + team.id, { headers: { 'X-Auth-Token': env.apiKey } });
        }

        //https://api.football-data.org/v2/competitions/2021/standings?standingType=HOME
        // http://api.football-data.org/v2/teams/81/matches
        function awayTeamStats(league) {
            return $http.get(env.apiUrl + 'competitions/' + league + '/standings?standingType=AWAY', { headers: { 'X-Auth-Token': env.apiKey } });
        }

        function homeTeamStats(league) {
            return $http.get(env.apiUrl + 'competitions/' + league + '/standings?standingType=HOME', { headers: { 'X-Auth-Token': env.apiKey } });
        }

        function addFavoriteTeam(team) {
            
            service.favoriteTeams.push(team);
            // console.log(service.favoriteTeams);

        }

        function getFavoriteTeams() {
            return service.favoriteTeams;
        }

        /*function getTeamPlayers(team_href) {
            console.log("Get players");
            return $http.get(env.apiUrl + team_href + '/players', { headers: { 'X-Auth-Token': env.apiKey } });
        }*/

        function openModalTeam(team, league) {

            // get team full stats and players

            // this has the squad
            // service.selectedTeam = 
            // console.log(service.selectedTeam);
            
            getTeamStats(team)
                .then(function(result){
                    // console.log(result.data);
                    service.selectedTeam = result.data;
                    populateModal();
                    
                });
            function populateModal() {
                service.modal = $uibModal.open({
                    animation: true,
                    templateUrl: '../../views/team-modal.html',
                    // controller: 'TeamCtrl',
                    // controllerAs: 'vm',
                    size: 'lg',
                    controller: function($scope) {
                        $scope.table = [];
                        $scope.homeStats = {};
                        $scope.awayStats = {};
                        $scope.showHome = false;
                        $scope.showAway = false;
                        $scope.team = service.selectedTeam;
                        $scope.toggleStats = function(team, type) {
                            console.log($scope.homeStats);
                            console.log($scope.awayStats);
                            // if ( $scope.homeStats.team ) {
                                
                                if ( type === 'home'  ) {
                                    // && $scope.homeStats.team.id != $scope.team.id
                                    $scope.showHome = !$scope.showHome;
                                    $scope.showAway = false; 
                                    // console.log(service.homeTeamStats);
                                    service.homeTeamStats(league)
                                        .then(function(result){
                                            $scope.table = result.data.standings[0].table;
                                            for ( var i = 0; i < $scope.table.length; i++ ) {
                                                if ( $scope.table[i].team.id == $scope.team.id ) {
                                                    $scope.homeStats = $scope.table[i];
                                                    break;
                                                }
                                            }
                                            service.homeStats = $scope.homeStats;
                                        })
                                }
                            // }
                            // if ( $scope.awayStats.team ) {
                                if (type === 'away' ) {
                                    // && $scope.awayStats.team.id != $scope.team.id
                                    $scope.showAway = !$scope.showAway;
                                    $scope.showHome = false;
                                    service.awayTeamStats(league)
                                        .then(function(result){
                                            $scope.table = result.data.standings[0].table;
                                            for ( var i = 0; i < $scope.table.length; i++ ) {
                                                if ( $scope.table[i].team.id == $scope.team.id ) {
                                                    $scope.awayStats = $scope.table[i];
                                                    break;
                                                }
                                            }
                                            service.awayStats = $scope.awayStats;
                                        })
                                }
                            // }
                            
                        };

                        $scope.addToFavorites = function(team) {
                            service.addFavoriteTeam(team);
                        }

                        $scope.cancel = function() {
                            service.modal.close();
                        };
                        $scope.openTeamPage = function(team) {
                            service.modal.close();
                            $state.go("team", {
                                teamId: team.id
                            });
                        }
                    }
                });
                service.modal.result.then(function () {
                    console.log($log);
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            }   

            /*
            service.modal = $uibModal.open({
                animation: true,
                templateUrl: 'app/views/team-modal.html',
                size: 'lg',
                controller: function($scope) {
                    // $scope.sortType = 'date';
                    // $scope.sortReverse = true;
                    $scope.team = team;
                    //$scope.team_matches = service.team_matches;
                    $scope.cancel = function() {
                        service.modal.close();
                    };
                }
            });
            service.modal.result.then(function () {
                alert("now I'll close the modal");
            });*/
            
            /*
            getTeamStats(team)
                .then(function(result){
                    console.log(result);
                })
            
            getTeamPlayers(team)
                .then(function(result){
                    console.log(result)
                })*/



            // console.log("Get teams")
            // console.log(team);

            // service.selectedTeam = $http.get(env.apiUrl + '/teams/' + team, { headers: { 'X-Auth-Token': env.apiKey } });
            // console.log(service.selectedTeam);
            // return service.selectedTeam;
            /*
            getTeamPlayers(team)
                .then( function( result ) {

                })
            }*/
        }
        
    }
    /*
    function TeamService($http, env, $stateParams, $uibModal) {
        var service = this;
        service.getTeamPlayers = getTeamPlayers;
        service.getTeamMatches = getTeamMatches;
        service.favoriteTeams = [];
        service.addFavoriteTeam = addFavoriteTeam;
        service.getFavoriteTeams = getFavoriteTeams;
        service.openModalTeam = openModalTeam;
        service.openModalMatches = openModalMatches;
        service.team_players = [];
        service.team_matches = [];
        service.modal = {};

        function getTeamPlayers(team_href) {
            return $http.get(team_href + '/players', { headers: { 'X-Auth-Token': env.apiKey } });
        }

        function getTeamMatches(team_href) {
            return $http.get(team_href + '/fixtures', { headers: { 'X-Auth-Token': env.apiKey } });
        }

        function addFavoriteTeam(team, leagueId, leagueName, isGroup) {
            var alreadyAdded = false;
            
            team.leagueId = leagueId;
            team.leagueName = leagueName;
            team.isGroup = isGroup;

            service.favoriteTeams.forEach(function(favorite_team) {
                
                if (isGroup) {
                    if(favorite_team.team == team.team){
                     alreadyAdded = true;   
                    }
                } else {
                    if(favorite_team.teamName == team.teamName){
                     alreadyAdded = true;   
                    }
                }

            });
            if (!alreadyAdded) {
                service.favoriteTeams.push(team);
                service.modal = $uibModal.open({
                    animation: true,
                    templateUrl: 'app/team/views/modal_confirm.html',
                    size: 'md',
                    controller: function($scope) {
                        $scope.team = team;
                        $scope.cancel = function() {
                            service.modal.close();
                        };
                    }
                });
            }
        }

        function getFavoriteTeams() {
            return service.favoriteTeams;
        }


        function calculateAge(dateOfBirth) {
            var currentYear = new Date().getFullYear();
            var yearOfBirth = new Date(dateOfBirth).getFullYear()
            return currentYear - yearOfBirth;
        }

        function openModalTeam(team, isGroup) {
            var url = "";
            if (isGroup) {
                url = env.apiUrl + 'teams/' + team.teamId
            } else {
                url = team._links.team.href;
            }
            getTeamPlayers(url)
                .then(function(result) {
                    service.team_players = result.data;
                    service.team_players.players.forEach(function(player) {
                        player.age = calculateAge(player.dateOfBirth);
                    });

                    service.modal = $uibModal.open({
                        animation: true,
                        templateUrl: 'app/team/views/modal_details.html',
                        size: 'lg',
                        controller: function($scope) {
                            $scope.sortType = 'name';
                            $scope.sortReverse = false;
                            $scope.team = team;
                            $scope.team_players = service.team_players;
                            $scope.cancel = function() {
                                service.modal.close();
                            };
                        }
                    });
                });
        }

        function openModalMatches(team, isGroup) {
            var url = "";
            if (isGroup) {
                url = env.apiUrl + 'teams/' + team.teamId
            } else {
                url = team._links.team.href;
            }
            getTeamMatches(url)
                .then(function(result) {
                    service.team_matches = result.data;
                    service.modal = $uibModal.open({
                        animation: true,
                        templateUrl: 'app/team/views/modal_fixtures.html',
                        size: 'lg',
                        controller: function($scope) {
                            $scope.sortType = 'date';
                            $scope.sortReverse = true;
                            $scope.team = team;
                            $scope.team_matches = service.team_matches;
                            $scope.cancel = function() {
                                service.modal.close();
                            };
                        }
                    });
                });
        }

    }*/

})();
