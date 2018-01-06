window.onload = function()
{
	$(".navbar-topbar").each(function($index) {
		var $pagAtual = 0;

		if ($index == pagAtual) 
			$(this).addClass("navbar-active");
	});


	$(".gallery-unit").each(function() {
		$(this).css("height",$((this.width()*2)/3));
	});



};

function openNavbar() {
	var $navBar = $("#navbar-list");

	if($navBar.css("display") === "none") {
		$navBar.css("display","block");
	} else {
		$navBar.css("display","none");
	}
}

window.onresize = function() {
	var $navBar = $("#navbar-list");

	if($(window).width() >= 500) {
		if($navBar.css("display") === "block" || $navBar.css("display") === "none") {
			$navBar.css("display","flex");
		}

	} else {
		$navBar.css("display","none");
	}
};