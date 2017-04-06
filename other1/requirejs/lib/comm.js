define(["jquery"],function(){
	$("img").after("<button>显示隐藏</button>");
	$("button").click(function(){
		$("img").toggle();
	})
	
	
})
