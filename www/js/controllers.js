angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('homeController',function($scope,$rootScope,$timeout, $stateParams,$ionicPlatform, getService) {

      (function tick() {

          navigator.geolocation.getCurrentPosition(function(position){
              $rootScope.lat=position.coords.latitude;
              $rootScope.lang=position.coords.longitude;
              console.log($rootScope.lat+"-"+$rootScope.lang);
          }, function(){});

          getService.getDetails($rootScope.lat,$rootScope.long).success(function(response){
          $scope.contents=response;
          console.log(response);
          for (var i = response.length - 1; i >= 0; i--) {
           window.plugin.notification.local.add({id:response[i].sd,message: response[i].sd, led: 'A0FF05'});
            //$rootScope.max.push(response[i]);
           console.log(i+" "+response[i].sd);
          };
        });
        $timeout(tick, 20000);


    })();

     })

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.preferences=['Home','Food','Hotels'];
});
