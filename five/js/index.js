// window.onbeforeunload = function(event) { 
// return "确定退出吗"; 
// } 


$(function () {

// 加载页头尾
$(".loadFooter").load('template/footer.html');
$(".loadHeader").load('template/header.html');

// 测试
$('.test').click(function(event) {
	e = event || window.event;
	alert(22);
	e.preventDefault()
});














	// body...
})