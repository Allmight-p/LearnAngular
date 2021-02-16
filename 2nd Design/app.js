(function() {
  'use strict';
  angular.module("NameCalc", [])
  .controller("NameCalcCont", function($scope,$filter) {
    $scope.name ="";
    $scope.totalvalue = 0;

    $scope.Detectnoofstring = function() {
        var totalamount =Findvalueforstring($scope.name)
        // var msg = $scope.name;
        // var output = $filter('uppercase')(msg);
        // $scope.name = output;
        $scope.totalvalue = totalamount;
    };
    function Findvalueforstring(string) {
        var totalvalueofstring = 0;
        for(var i=0;i < string.length;i++){
            totalvalueofstring = totalvalueofstring + string.charCodeAt(i);
        }
        return totalvalueofstring;
    }
  });


}
)();
