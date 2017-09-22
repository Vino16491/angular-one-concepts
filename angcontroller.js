var app = angular.module("angOne", []);

app.controller('angCtrl', function ($scope) {
    $scope.angWrite = "Hello Angular";
    console.log("Ang output");
    $scope.login = function () {
        console.log("User Login");
    }
});

app.controller('angCtrlLogin', function ($scope) {});

app.controller('angCtrlRegister', function ($scope) {});