angular.module("listApp",[])

.service("listDate",function () {
	this.data=[
		{
			id:1,
			name:'淞南文体中心综合体',
			img:'img/product/item.jpg'
		},
		{
			id:2,
			name:'2淞南文体中心综合体',
			img:'img/product/item.jpg'
		},
		{
			id:3,
			name:'3淞南文体中心综合体',
			img:'img/product/item.jpg'
		},
		{
			id:4,
			name:'4淞南文体中心综合体',
			img:'img/product/item.jpg'
		},
		{
			id:5,
			name:'5淞南文体中心综合体',
			img:'img/product/item.jpg'
		},
		{
			id:6,
			name:'6淞南文体中心综合体',
			img:'img/product/item.jpg'
		},
		{
			id:7,
			name:'7淞南文体中心综合体',
			img:'img/product/item.jpg'
		},
		{
			id:8,
			name:'8淞南文体中心综合体',
			img:'img/product/item.jpg'
		},
		{
			id:9,
			name:'9淞南文体中心综合体',
			img:'img/product/item.jpg'
		},
		{
			id:10,
			name:'10淞南文体中心综合体',
			img:'img/product/item.jpg'
		},
		{
			id:11,
			name:'11淞南文体中心综合体',
			img:'img/product/item.jpg'
		},
		{
			id:12,
			name:'12淞南文体中心综合体',
			img:'img/product/item.jpg'
		}
	]
})

.controller('ListController', ['$scope',"listDate", function($scope,listDate){
	$scope.loaded=true;
	$scope.data=listDate.data
	
}])

$(function () {

	$("#img").click(function(event) {
		alert(2)
	});


});

	$(function () {
		var a = new Image();
		a.onload=function () {
			var h = $("#img").prop('src', 'img/product/li_left.jpg').height();
			$(".auto_center").height(h)
			
		};
		a.src='img/product/li_left.jpg'
	})