			$( document ).ready(function(){

			$(window).load(function() 
			{
		// Animate loader off screen
			$(".loader").css("display","none")
			});	
		    function checkWidth() 
				{
				var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 736  && windowHeight <=414)					

				{  
					$("#dance1").prop("src","dance1c40.gif");
					$("#dance2").prop("src","dance2a40.gif");
					$("#dance3").prop("src","dance340.gif");
					$("#loader").css("background", "url(loader340.gif) center no-repeat rgba( 150,150,150,.80)");
				}
				else if (windowSize >= 736 || windowHeight >=414 )
				{
					$("#dance1").prop("src","dance1c.gif");
					$("#dance2").prop("src","dance2a.gif");
					$("#dance3").prop("src","dance3.gif");
					$("#loader").css("background", "url(loader3.gif) center no-repeat rgba( 150,150,150,.80)");
				}
			}
			checkWidth();
$(window).resize(checkWidth);


			$("#quest").click(function(){
				$("#desc2").animate({"font-size":"14px"},150);
				$("#explore2").animate({"height":"65px","width":"200px"},150);
				$("#closer").animate({"height":"15px","width":"15px"},150);
				$("#explore2").css("background-color","rgba(100, 100, 100, .5)")});

			$("#closer").click(function(){
				$(this).animate({"height":"0px","width":"0px"},150);
				$("#desc2").animate({"font-size":"0px"},150);
				$("#explore2").animate({"height":"0px","width":"0px"},150);
				$("#explore2").css("background-color","rgba(100, 100, 100, .0)")});

				$("#dbutt").click(function dancer(){
				  
			
			$("#jcas").hide();
			$("#dance2").hide();
			$("#dance3").hide();


			var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 736 || windowHeight <= 414 )  
				{
           		  $("#dance1").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","dance1c40.gif");
        		}
        		else
        		{	
				$("#dance1").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","dance1c.gif");
				};
			
				});





				$("#dbutt2").click(function dancer(){

				$("#jcas").hide();
				$("#dance1").hide();
				$("#dance3").hide();

			var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 736 || windowHeight <= 414 )  
				{
           		  $("#dance2").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","dance2a40.gif");
        		}
        		else
        		{	
				$("#dance2").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","dance2a.gif");
				};
			
			
				});		

				$("#dbutt3").click(function dancer(){

				$("#jcas").hide();
				$("#dance1").hide();
				$("#dance2").hide();
			var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 736 || windowHeight <= 414 )  
				{
           		  $("#dance3").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","dance340.gif");
        		}
        		else
        		{	
				$("#dance3").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","dance3.gif");
				};

				});	

				
});
