angular.module("newsApp",[])
.service("newsdata",function(){
	this.data = [
		{
			id:1,
			time:1472300729000,
			title:'长江路服务发展带',
			img:"img/news/1.jpg",
			describe:'大力加强与长江路沿线国有大中型企业的战略合作，通过区域经济合作推动沿线企业“调结构，促转型”，加大推动吴淞工业区转型升级，逐步打造形成汽车服务产业，节能环保产业和文化创意产业。'
		},
		{
			id:2,
			time:1375300762000,
			title:'2长江路服务发展带',
			img:"img/news/1.jpg",
			describe:'2大力加强与长江路沿线国有大中型企业的战略合作，通过区域经济合作推动沿线企业“调结构，促转型”，加大推动吴淞工业区转型升级，逐步打造形成汽车服务产业，节能环保产业和文化创意产业。'
		},
		{
			id:3,
			time:1575300742000,
			title:'3长江路服务发展带',
			img:"img/news/1.jpg",
			describe:'3大力加强与长江路沿线国有大中型企业的战略合作，通过区域经济合作推动沿线企业“调结构，促转型”，加大推动吴淞工业区转型升级，逐步打造形成汽车服务产业，节能环保产业和文化创意产业。'
		}
	]
})

.controller("NewsController",["$scope",'newsdata',function($scope,newsdata){
	$scope.data = newsdata.data;
	console.log($scope.data)
	$scope.loaded=true;

}]);
