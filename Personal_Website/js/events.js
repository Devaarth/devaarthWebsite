$(function(){
	
	$('#homePanel').css("display","none");
	$('#expPanel').css("display","none");
	$('#skillsPanel').css("display","none");
	$('#eduPanel').css("display","none");
	$('#projPanel').css("display","none");
	$('#contactPanel').css("display","none");
	$('#rightPanelDiv').html($('#homePanel').html());
	$('#homeNavItem').addClass("active");
	$("#homeText").addClass("eventBold");


		$('#homeNavItem').click(function(){

			$('#rightPanelDiv').html($('#homePanel').html());
				$(this).addClass("active").siblings().removeClass("active");

				$('li > a > span').removeClass("eventBold");
				$("#homeText").addClass("eventBold");
				
				});

		$('#expNavItem').click(function(){

				$('#rightPanelDiv').html($('#expPanel').html());
				$(this).addClass("active").siblings().removeClass("active");
				 //$('.homeTest').addClass(".to-left");
				$('#expTest').css("padding-left", "800px");
   				
				
				$('li > a > span').removeClass("eventBold");
				$("#expText").addClass("eventBold");
				});
	

		$('#prjctNavItem').click(function(){

			$('#rightPanelDiv').html($('#projPanel').html());
			$(this).addClass("active").siblings().removeClass("active");

			$('li > a > span').removeClass("eventBold");
			$("#prjText").addClass("eventBold");
			
							});


		$('#skillsNavItem').click(function(){

			$('#rightPanelDiv').html($('#skillsPanel').html());
				$(this).addClass("active").siblings().removeClass("active");

				$('li > a > span').removeClass("eventBold");
				$("#skillText").addClass("eventBold");
				
				});

		$('#educationNavItem').click(function(){

			$('#rightPanelDiv').html($('#eduPanel').html());
				$(this).addClass("active").siblings().removeClass("active");

				$('li > a > span').removeClass("eventBold");
				$("#eduText").addClass("eventBold");
			
				});
		$('#contactNavItem').click(function(){

			$('#rightPanelDiv').html($('#contactPanel').html());
				$(this).addClass("active").siblings().removeClass("active");

				$('li > a > span').removeClass("eventBold");
				$("#cntctText").addClass("eventBold");
				
				});

	$('nav').toggleClass("allNavItemsHide");

		$('#hambgBtn').click(function(){

			$('.1stbar').toggleClass("top-bar");	
			$('.2ndbar').toggleClass("middle-bar");
			$('.3rdbar').toggleClass("bottom-bar");
			$('nav').toggleClass("allNavItemsHide");
				
		});


			var navMain = $('#navItems')

			$('#navItems').on("click", "a", function () {
				navMain.collapse('hide');
				$('nav').addClass("allNavItemsHide");
				$('.1stbar').toggleClass("top-bar");	
				$('.2ndbar').toggleClass("middle-bar");
				$('.3rdbar').toggleClass("bottom-bar");

			});

})