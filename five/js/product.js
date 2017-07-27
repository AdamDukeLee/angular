/**
*  Module
*
* Description
*/
angular.module('prouductApp', ['ngMessages'])

.service('data_proudact', function(){
	this.product={
		img:'img/prouduct_img.jpg',
		area:'40万',
		feature:'高新技术产业基地',
		addr:'宝山区淞行路233号',
		contact:'021-51056180',
		detail_img:'img/product_detail.jpg',
		title:'阳明上海（复旦四期）'
	}
})


.controller('ProductController', ['$scope','data_proudact',function($scope,data_proudact){
	$scope.loaded=true;$scope.imgloaded=true;//js加载完成
	$scope.product=data_proudact.product;
}])




$(function () {

	$(".join").click(function() {
		var top = $(".apply_from").offset().top;
		$(window).scrollTop(top)
	});


	// body...
})