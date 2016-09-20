(function() {
'use strict';
	
	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);
	
	LunchCheckController.$inject = ['$scope'];	
	function LunchCheckController( $scope ){
		$scope.list = '';
		$scope.checkMessage = '';
		
		$scope.checkLunch = function() {
			var list = $scope.list;
			
			list = list.split(',');
			var listLength;
			
			
			if(list[0] == "")
				listLength = 0;
			else
				listLength = list.length;
			
			if(!listLength)
				$scope.checkMessage = "Please enter data first";
			else if(listLength < 4)
				$scope.checkMessage = "Enjoy!";
			else
				$scope.checkMessage = "Too much!";
		};
	};
	
}) ();