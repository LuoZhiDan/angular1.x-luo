import angular from "angular";
import "./public/static/css/bootstrap.css"

angular.module('angular1.x.demo', [])
.controller("myController", function($scope){
    $scope.names = ['Jonh', 'Aio', 'He'];
}).filter('cap', function(){
    return function(input){
      let arr = [];
      if(input){
        for(let v of input){
          arr.push(v.toUpperCase());
        }
        return arr;
      }
    }
})