// window.onbeforeunload = function(event) { 
// return "确定退出吗"; 
// } 


$(function () {

// 加载页头尾22222
$(".loadFooter").load('/index/template/footer.html');
$(".loadHeader").load('/index/template/header.html');

// 测试
$('.test').click(function(event) {
	e = event || window.event;
	alert(22);
	e.preventDefault()
});














	// body...
})