$(function(){
	//导航效果
	$('.navbar-nav>li>em').hide();
	$('.navbar-nav>li').mouseover(function(){
		$(this).addClass('green');
		$(this).children('em').show();
	}).mouseout(function(){
		$(this).removeClass('green');
		$(this).children('em').hide();
	});
	//至In流行
	$('.pop .con').hide();
	if($(window).width() > 768){
		$('.pop>img').mouseover(function(){
			$(this).siblings('.con').slideDown(300);
		}).mouseout(function(){
			$(this).siblings('.con').slideUp(300);
		});
	}
	//咨询，故事 切换
	$('.news .box2').hide();
	$('.news li:first').mouseover(function(){
		$(this).siblings('li').removeClass('active');
		$(this).addClass('active');
		$('.news .box2').hide();
		$('.news .box1').show();
	});
	$('.news li:last').mouseover(function(){
		$(this).siblings('li').removeClass('active');
		$(this).addClass('active');
		$('.news .box1').hide();
		$('.news .box2').show();
	});
});