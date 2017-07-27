// 加载验证码
function refrechCode() {
	var src=__CAPTCHA__+Math.random();
	$('.code').prop('src', src);	
	return
}


/**
* IndexModule Module
*
* Description
*/
angular.module('IndexModule', ['ngCookies','ngMessages','ngRoute'])
.service('shareData', function(){
	this.loaded=true;
})

.controller('FirstController', ['$scope','$cookies','$http','shareData',function($scope,$cookies,$http,shareData){
	$scope.shareData=shareData;
	$scope.$watch
	$scope.showLogin=false;
	$scope.user=$cookies.get('user');
	$scope.pageCan=function (d) {
		$scope.getuser=JSON.parse(d);
		$scope.showLogin=true;
		return;
	};
	$scope.quit=function () {
		$cookies.remove('user');
		$cookies.remove('PHPSESSID');
		$scope.showLogin=false;
		$scope.getuser=null;
		return;
	};

	// *************************获取全部管理员
	$scope.getall_user=function () {
		var u=__ROOT__+'Intendant/alluser';
		function doneCallbacks(res){
			$scope.shareData.loaded=true;
			$scope.shareData.getall_user_data=res.data.data;
			angular.element("#view_modal").modal('show');
		};
		function failCallbacks() {
			$scope.shareData.loaded=true;
			alert('出现了错误，请重试')
		}
		$scope.shareData.loaded=false;
		$http.post(u).then(doneCallbacks, failCallbacks);
		return
	};
	//***************************添加管理员页面
	$scope.modal_show=function () {
		angular.element("#view_modal").modal('show');
		return
	};

}])
.directive('ifLogin', ['$http','$cookies',function($http,$cookies){
	return {
		link: function($scope, iElm, iAttrs, controller) {
			var src = __CAPTCHA__;
			angular.element(".code").prop('src',src).on('click',function() {
				refrechCode()
			});
			$scope.form={};
			angular.element('.toLogin').on('click',function() {
				$scope.shareData.loaded=false;
				var u=__ROOT__+'login/index.html';
				var d=JSON.stringify($scope.form);
				function doneCallbacks(res) {
					$scope.shareData.loaded=true;
					if(res.data.code == 0){
						$scope.backerror=res.data.msg;
						refrechCode();
						return
					}
					var data=JSON.stringify(res.data.data);
					var exprieDate=new Date();
					exprieDate.setDate(exprieDate.getDate()+7);
					$cookies.put('user',data,{'expires':exprieDate});
					$scope.login.$setPristine();
					angular.element('#login_form')[0].reset();
					angular.element('#login_modal').modal('hide');
					refrechCode();
					$scope.pageCan(data);
				}
				function failCallbacks(res) {
					$scope.shareData.loaded=true;//控制加载图标
					alert('请求失败，请检查网络');
				}
				$http.post(u,d).then(doneCallbacks, failCallbacks);
			});
			if (!$scope.user) {
				iElm.modal('show');
				return;
			}
			$scope.pageCan($scope.user);
					
		}
	};
}])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/addAdmin',{
		templateUrl:'template/addAdmin.html',
		controller:'AddadminController'
	})
	.when('/manageAdmin',{
		templateUrl:'template/manageAdmin.html',
		controller:'ManageAdminController'
	})
	.when('/addnews',{
		templateUrl:'template/addnews.html',
		controller:'AddnewsController'
	})
	
}])

// *****************************************管理管理员
.controller('ManageAdminController', ['$scope','$http','shareData','$cookies',function($scope,$http,shareData,$cookies){
	$scope.isLg=true;
	$scope.shareData=shareData;

}])
.directive('deleteAdmin',['$http','$cookies',function($http,$cookies){
	return {
		link: function($scope, iElm, iAttrs, controller) {
			$scope.delete=function(){
				$scope.shareData.loaded=false;
				var u = __ROOT__+'Intendant/delete';
				var uuid=$cookies.get('user');
					uuid=JSON.parse(uuid);
					uuid=uuid.uuid;
				var id=JSON.parse(iAttrs.admin);
					id=id
				var data={
					uuid:uuid,
					id:id.id,
					power:id.power
				};
				function doneCallbacks(res) {
					console.log(res);
					$scope.shareData.loaded=true;
					if(res.data.code==0){						
						$scope.$parent.$parent.showErr=true;
						$scope.$parent.$parent.DbError=res.data.msg;
						if (res.data.data==10006) {
							setTimeout(function () {
								$cookies.remove('user');
								$cookies.remove('PHPSESSID');
								location.reload();
							},3000)							
						}
						return;
					}
					var arrid=-1;
					angular.forEach($scope.shareData.getall_user_data,function (val,index) {
						if (val.id == id.id) {
							arrid=index;
						}
					});
					if (arrid!=-1) {
						$scope.shareData.getall_user_data.splice(arrid,1);
					}
				};
				function failCallbacks() {
					$scope.$parent.$parent.shareData.loaded=true;
					alert('网络有问题，请重试');
				};
				data=JSON.stringify(data);
				$http.post(u,data).then(doneCallbacks, failCallbacks)
			}
		}
	};
}])

//*****************************************添加管理员
.controller('AddadminController', ['$scope','$http','$cookies','shareData',function($scope,$http,$cookies,shareData){
	$scope.isLg=false;
	$scope.shareData=shareData;
	$scope.addInfo={};
	$scope.auth={
		auth0:{level:'admin',exp:'一级管理员（全部操作）'},
		auth1:{level:'manage',exp:'二级管理员（可以对网站进行信息增改）'},
		auth2:{level:'visitor',exp:'游客（没有任何信息操作权利）'}		
	};
	$scope.addInfo.selectauth=$scope.auth.auth2;
	$scope.toIntendantAdd=function () {
		$scope.shareData.loaded=false;
		var user=$cookies.get('user');//获取cookies
		user=JSON.parse(user);
		var u = __ROOT__+'Intendant/add';
		var d = {
			name:$scope.addInfo.name,
			power:$scope.addInfo.selectauth.level,
			powertext:$scope.addInfo.selectauth.exp,
			password:$scope.addInfo.password,
			uuid:user.uuid
		};
		
		function failCallbacks(){
			$scope.shareData.loaded=true;
			alert('网络有问题，请重试')
		};
		function doneCallbacks(res){
			$scope.shareData.loaded=true;
			console.log('服务器返回',res);
			if(res.data.code == 0){
				$scope.feedback=true;
				$scope.successfeedback=false;
				$scope.error=res.data.msg;
				if (res.data.data == 10006) {
					setTimeout(function () {
						$cookies.remove('user');
						$cookies.remove('PHPSESSID');
						location.reload();
					},3000)
				};
				return;
			}else{
				$scope.successfeedback=true;
				$scope.feedback=false;
			}
		}
		$http.post(u,d).then(doneCallbacks, failCallbacks);
	}
	$scope.resetinfo=function () {
		$scope.addAdmin_form.$setPristine();
		$scope.successfeedback=false;
		$scope.feedback=false;
		$scope.addInfo.name='';
		$scope.addInfo.passwordAgin='';
		$scope.addInfo.password='';
		$scope.addInfo.selectauth=$scope.auth.auth2;
	}	
}])
//*************************************添加新闻控制器*****************
.controller('AddnewsController', ['$scope','shareData','$http',function($scope,shareData,$http){
	$scope.isLg=true;
	$scope.nocontent=function() {
		$scope.addnewsErrText='(⊙o⊙)？新闻内容不能为空。。。';
		$scope.addnewsErr=true;
	};
	$scope.contentajax=function () {
		var u=__ROOT__+'News/add'
		var d={
			title:$scope.data.title,
			abstract:$scope.data.abstract,
			content:$scope.content
		}
		d=JSON.stringify(d);
		function doneCallbacks(res){
			console.log('data respond',res)
		}
		function failCallbacks(){
			alert('网络有问题，请重试')
		}
		$http.post(u,d).then(doneCallbacks, failCallbacks)		
	};
}])

