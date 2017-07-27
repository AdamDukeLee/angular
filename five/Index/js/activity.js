/**
* a Module
*
* Description
*/
angular.module('activityApp', ['ngMessages'])

.service('database',function(){
	this.data=[
		{
			id:1,
			title:"2016“美丽大云，甜蜜小镇”春季徒步行活动",
			time:"62016-04-09 09:00 - 2016-04-09 12:00:00",
			addr:"6大云镇十里水乡",
			follow:"6已经有3000人关注",
			img:"img/activity/a1.jpg",
			detail:'img/activity/detail.jpg'
		},
		{
			id:2,
			title:"52015“美丽大云，甜蜜小镇”春季徒步行活动",
			time:"52016-04-09 09:00 - 2016-04-09 12:00:00",
			addr:"5大云镇十里水乡",
			follow:"5已经有3000人关注",
			img:"img/activity/a1.jpg",
			detail:'img/activity/detail.jpg'
		},
		{
			id:3,
			title:"42014“美丽大云，甜蜜小镇”春季徒步行活动",
			time:"42016-04-09 09:00 - 2016-04-09 12:00:00",
			addr:"4大云镇十里水乡",
			follow:"4已经有3000人关注",
			img:"img/activity/a1.jpg",
			detail:'img/activity/detail.jpg'
		}
	]
})


.controller('ItemController', ['$scope','database',function($scope,database){
	$scope.data = database.data;
	$scope.loaded=true;
	$scope.post_form;
}])

.directive('btnSign',function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, iElm, iAttrs, controller) {
			iElm.on('click', function() {
				scope.$apply(function () {
					scope.data.get=scope.x
				});
			});
		}
	};
})

.directive("btnDetail",function() {
	return {
		link:function (scope,ielm) {
			ielm.on('click', function() {
				scope.$apply(function () {
					scope.data.get=scope.x
				})
			});
		}
	}
})