/**
*  Module
*
* Description
*/
angular.module("serviceApp",[])

.service('name', ['', function(){
	
}])

.service("s_data",function () {
	this.data=[
		{
			id:1,
			name:'点击下2载“本区迁移”[word]',
			link:'file://www.tp5.com/Index/down/eee.docx'
		},
		{
			id:2,
			name:'2点击下载“本区迁移”[word]',
			link:'down/eee.docx'
		},
		{
			id:3,
			name:'3点击下载“本区迁移”[word]',
			link:'down/eee.docx'
		},
		{
			id:4,
			name:'4点击下载“本区迁移”[word]',
			link:'down/eee.docx'
		}
	]
})

.controller('DownController', ['$scope','s_data', function($scope,s_data){
	$scope.data=s_data.data;
	$scope.loaded=true;
}])