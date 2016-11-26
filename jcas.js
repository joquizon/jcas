			$( document ).ready(function() {   

			$(window).load(function() {
		// Animate loader off screen
		$(".loader").css("display","none")
	});	

			$("#quest").click(function(){
				$("#desc2").animate({"font-size":"14px"},150);
				$("#explore2").animate({"height":"112px","width":"200px"},150);
				$("#closer").animate({"height":"15px","width":"15px"},150);
				$("#explore2").css("background-color","rgba(100, 100, 100, .5)")});

			$("#closer").click(function(){
				$(this).animate({"height":"0px","width":"0px"},150);
				$("#desc2").animate({"font-size":"0px"},150);
				$("#explore2").animate({"height":"0px","width":"0px"},150);
				$("#explore2").css("background-color","rgba(100, 100, 100, .0)")});


// try preloadin them and displaying them like the thought bubble in the index

function checkWidth() 
				{
				var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)
				{  
					$("#jcasl1").prop("src","leftturn1a40.gif");
					$("#jcasl2").prop("src","leftturn2a40.gif");
					$("#jcasl3").prop("src","leftturn3a40.gif");
					$("#jcasl4").prop("src","leftturn4a40.gif");
					$("#jcasl5").prop("src","leftturn5a40.gif");
					$("#jcasl6").prop("src","leftturn6a40.gif");
					$("#jcasl7").prop("src","leftturn7a40.gif");
					$("#jcasl8").prop("src","leftturn8a40.gif");
					$("#jcasr1").prop("src","rightturn1a40.gif");
					$("#jcasr2").prop("src","rightturn2a40.gif");
					$("#jcasr3").prop("src","rightturn3a40.gif");
					$("#jcasr4").prop("src","rightturn4a40.gif");
					$("#jcasr5").prop("src","rightturn5a40.gif");
					$("#jcasr6").prop("src","rightturn6a40.gif");
					$("#jcasr7").prop("src","rightturn7a40.gif");
					$("#jcasr8").prop("src","rightturn8a40.gif");
					$("#bodyplode").prop("src","fullbodploder40.gif");
					$("#bodyploderev").prop("src","fullbodploderrev40.gif");
					$("#armplode").prop("src","armplode40.gif");
					$("#armploderev").prop("src","armploderev40.gif");
					$("#legplode").prop("src","legplode40.gif");
					$("#legploderev").prop("src","legploderev40.gif");
					$("#headplode").prop("src","headplode40.gif");
					$("#headploderev").prop("src","headploderev40.gif");
					$("#loader").css("background", "url(loader340.gif) center no-repeat rgba( 150,150,150,.80)")
				}
				else if (windowSize >= 740 || windowHeight >= 415)
				{
					$("#jcasl1").prop("src","leftturn1a.gif");
					$("#jcasl2").prop("src","leftturn2a.gif");
					$("#jcasl3").prop("src","leftturn3a.gif");
					$("#jcasl4").prop("src","leftturn4a.gif");
					$("#jcasl5").prop("src","leftturn5a.gif");
					$("#jcasl6").prop("src","leftturn6a.gif");
					$("#jcasl7").prop("src","leftturn7a.gif");
					$("#jcasl8").prop("src","leftturn8a.gif");
					$("#jcasr1").prop("src","rightturn1a.gif");
					$("#jcasr2").prop("src","rightturn2a.gif");
					$("#jcasr3").prop("src","rightturn3a.gif");
					$("#jcasr4").prop("src","rightturn4a.gif");
					$("#jcasr5").prop("src","rightturn5a.gif");
					$("#jcasr6").prop("src","rightturn6a.gif");
					$("#jcasr7").prop("src","rightturn7a.gif");
					$("#jcasr8").prop("src","rightturn8a.gif");
					$("#bodyplode").prop("src","fullbodploder.gif");
					$("#bodyploderev").prop("src","fullbodploderrev.gif");
					$("#armplode").prop("src","armplode.gif");
					$("#armploderev").prop("src","armploderev.gif");
					$("#legplode").prop("src","legplode.gif");
					$("#legploderev").prop("src","legploderev.gif");
					$("#headplode").prop("src","headplode.gif");
					$("#headploderev").prop("src","headploderev.gif");
					$("#loader").css("background", "url(loader3.gif) center no-repeat rgba( 150,150,150,.80)")
				}
			}
			checkWidth();
$(window).resize(checkWidth);
// head exploder
			$("#exp3").click(function (){
			$(this).fadeOut(500);
			$("#exp1").fadeOut(500);			
			$("#exp2").fadeOut(500);
			$("#exp4").fadeOut(500);
			$("#butt").fadeOut(500);
			$("#butta").fadeOut(500);
			$("#exp3a").fadeIn(500);
			$(".first").hide();
			$(".leftturn").hide();
			$(".rightturn").hide();
			$(".bodyplode").hide();
			$(".armplode").hide();
			$(".legplode").hide();
			$("#headploderev").hide();


			var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#headplode").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","headplode40.gif");
        		}
        		else
        		{	
				$("#headplode").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","headplode.gif");
				};
				});

			$("#exp3a").click(function (){
			$(this).fadeOut(500);
			$("#exp2").fadeIn(500);			
			$("#exp1").fadeIn(500);
			$("#exp4").fadeIn(500);
			$("#butt").fadeIn(500);
			$("#butta").fadeIn(500);
			$("#exp3").fadeIn(500);
			$(".first").hide();
			$(".leftturn").hide();
			$(".rightturn").hide();
			$(".bodyplode").hide();
			$(".armplode").hide();
			$(".legplode").hide();
			$("#headplode").hide();
			var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#headploderev").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","headploderev40.gif");
        		}
        		else
        		{	
				$("#headploderev").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","headploderev.gif");
				};
				});



// arm exploder
			$("#exp1").click(function (){
			$(this).fadeOut(500);
			$("#exp2").fadeOut(500);
			$("#exp3").fadeOut(500);
			$("#exp4").fadeOut(500);			
			$("#butt").fadeOut(500);
			$("#butta").fadeOut(500);
			$("#exp1a").fadeIn(500);
			$(".first").hide();
			$(".leftturn").hide();
			$(".rightturn").hide();
			$(".bodyplode").hide();
			$("#armploderev").hide();
			$(".legplode").hide();
			$(".headplode").hide();

			var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#armplode").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","armplode40.gif");
        		}
        		else
        		{	
				$("#armplode").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","armplode.gif");
				};
				});

			$("#exp1a").click(function (){
			$(this).fadeOut(500);
			$("#exp1").fadeIn(500);
			$("#exp2").fadeIn(500);
			$("#exp3").fadeIn(500);
			$("#exp4").fadeIn(500);						
			$("#butt").fadeIn(500);
			$("#butta").fadeIn(500);
			$(".first").hide();
			$(".leftturn").hide();
			$(".rightturn").hide();
			$(".bodyplode").hide();
			$("#armplode").hide();
			$(".legplode").hide();
			$(".headplode").hide();

			var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#armploderev").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","armploderev40.gif");
        		}
        		else
        		{	
				$("#armploderev").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","armploderev.gif");
				};
				});






// leg exploder

			$("#exp2").click(function (){
			$(this).fadeOut(0);
			$("#exp1").fadeOut(500);
			$("#exp3").fadeOut(500);
			$("#exp4").fadeOut(500);						
			$("#butt").fadeOut(500);
			$("#butta").fadeOut(500);
			$("#exp2a").fadeIn(500);
			$(".first").hide();
			$(".leftturn").hide();
			$(".rightturn").hide();
			$(".bodyplode").hide();
			$(".armplode").hide();
			$("#legploderev").hide();
			$(".headplode").hide();


			var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#legplode").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","legplode40.gif");
        		}
        		else
        		{	
				$("#legplode").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","legplode.gif");
				};
				});


			$("#exp2a").click(function (){
			$(this).fadeOut(500);
			$("#exp1").fadeIn(500);
			$("#exp2").fadeIn(500);
			$("#exp3").fadeIn(500);
			$("#exp4").fadeIn(500);			
			$("#butt").fadeIn(500);
			$("#butta").fadeIn(500);
			$(".first").hide();
			$(".leftturn").hide();
			$(".rightturn").hide();
			$(".bodyplode").hide();
			$(".armplode").hide();
			$("#legplode").hide();
			$(".headplode").hide();


			var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#legploderev").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","legploderev40.gif");
        		}
        		else
        		{	
				$("#legploderev").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","legploderev.gif");
				};
				});
			

// full exploder

			$("#exp4").click(function (){
			$(this).fadeOut(500);
			$("#exp1").fadeOut(500);
			$("#exp2").fadeOut(500);
			$("#exp3").fadeOut(500);
			$("#butt").fadeOut(500);
			$("#butta").fadeOut(500);
			$("#exp4a").fadeIn(500);
			$(".first").hide();
			$(".leftturn").hide();
			$(".rightturn").hide();
			$(".armplode").hide();
			$(".legplode").hide();
			$(".headplode").hide();
			$("#bodyploderev").hide();
				var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#bodyplode").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","fullbodploder40.gif");
        		}
        		else
        		{	
				$("#bodyplode").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","fullbodploder.gif");
				};
				});
			

			$("#exp4a").click(function (){
			$(this).fadeOut(0);
			$("#exp1").fadeIn(500);
			$("#exp2").fadeIn(500);
			$("#exp3").fadeIn(500);
			$("#exp4").fadeIn(500);
			$("#butt").fadeIn(500);
			$("#butta").fadeIn(500);
			$(".first").hide();
			$(".leftturn").hide();
			$(".rightturn").hide();
			$(".armplode").hide();
			$(".legplode").hide();
			$(".headplode").hide();
			$("#bodyplode").hide();
				var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#bodyploderev").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","fullbodploderrev40.gif");
        		}
        		else
        		{	
				$("#bodyploderev").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","fullbodploderrev.gif");
				};
				});				


// .hide all the exploder class on the relevant first turn buttons.


// bot turner
			$("#butt").click(function front(){
				$(this).fadeOut(0);
				$("#exp1").fadeOut(500);
				$("#exp2").fadeOut(500);
				$("#exp3").fadeOut(500);
				$("#exp4").fadeOut(500);				
				$("#butt2").fadeIn(0);
				$("#butta").fadeOut(0);
				$("#butt8a").fadeIn(0);
				$("#jcas").hide();
				$("#jcasl8").hide();
				$(".rightturn").hide();
				$(".armplode").hide();
				$(".legplode").hide();
				$(".headplode").hide();
				$(".bodyplode").hide();
				var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#jcasl1").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","leftturn1a40.gif");
        		}
        		else
        		{	
				$("#jcasl1").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","leftturn1a.gif");
				}
				});
			

			$("#butt2").click(function leftfront(){
				$(this).fadeOut(0);
				$("#butt3").fadeIn(0);
				$("#butt8a").fadeOut(0);
				$("#butt7a").fadeIn(0);			
				$("#jcasl1").hide();
				$(".rightturn").hide();
				var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#jcasl2").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","leftturn2a40.gif");
        		}
        		else
        		{	
				$("#jcasl2").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","leftturn2a.gif");
				}
			});

			$("#butt3").click(function leftfront(){
				$(this).fadeOut(0);
				$("#butt4").fadeIn(0);
				$("#butt7a").fadeOut(0);
				$("#butt6a").fadeIn(0);	
				$("#jcasl2").hide();
				$(".rightturn").hide();
				var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#jcasl3").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","leftturn3a40.gif");
        		}
        		else
        		{	
				$("#jcasl3").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","leftturn3a.gif");
				}
			});

			$("#butt4").click(function leftfront(){
				$(this).fadeOut(0);
				$("#butt5").fadeIn(0);
				$("#butt6a").fadeOut(0);
				$("#butt5a").fadeIn(0);	
				$("#jcasl3").hide();
				$(".rightturn").hide();
				var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#jcasl4").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","leftturn4a40.gif");
        		}
        		else
        		{	
				$("#jcasl4").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","leftturn4a.gif");
				}
			});

				$("#butt5").click(function leftfront(){
				$(this).fadeOut(0);
				$("#butt6").fadeIn(0);
				$("#butt5a").fadeOut(0);
				$("#butt4a").fadeIn(0);					
				$("#jcasl4").hide();
				$(".rightturn").hide();
				var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#jcasl5").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","leftturn5a40.gif");
        		}
        		else
        		{	
				$("#jcasl5").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","leftturn5a.gif");
				}
			});

				$("#butt6").click(function leftfront(){
				$(this).fadeOut(0);
				$("#butt7").fadeIn(0);
				$("#butt4a").fadeOut(0);
				$("#butt3a").fadeIn(0);					
				$("#jcasl5").hide();
				$(".rightturn").hide();
				var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#jcasl6").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","leftturn6a40.gif");
        		}
        		else
        		{	
				$("#jcasl6").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","leftturn6a.gif");
				}
			});

				$("#butt7").click(function leftfront(){
				$(this).fadeOut(0);
				$("#butt8").fadeIn(0);
				$("#butt3a").fadeOut(0);
				$("#butt2a").fadeIn(0);					
				$("#jcasl6").hide();
				$(".rightturn").hide();
				var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#jcasl7").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","leftturn7a40.gif");
        		}
        		else
        		{	
				$("#jcasl7").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","leftturn7a.gif");
				}
			});


				$("#butt8").click(function leftfront(){
				$(this).fadeOut(0);
				$("#exp1").fadeIn(500);
				$("#exp2").fadeIn(500);
				$("#exp3").fadeIn(500);
				$("#exp4").fadeIn(500);								
				$("#butt").fadeIn(0);
				$("#butt2a").fadeOut(0);
				$("#butta").fadeIn(0);	
				$("#jcasl7").hide();
				$(".rightturn").hide();
				var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#jcasl8").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","leftturn8a40.gif");
        		}
        		else
        		{	
				$("#jcasl8").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","leftturn8a.gif");
				}
			});



//  reverser going the other way now



				$("#butta").click(function leftfront(){
				$(this).fadeOut(0);
				$("#exp1").fadeOut(500);
				$("#exp2").fadeOut(500);				
				$("#exp3").fadeOut(500);
				$("#exp4").fadeOut(500);				
				$("#butt2a").fadeIn(0);
				$("#butt").fadeOut(0);
				$("#butt8").fadeIn(0);
				$("#jcas").hide();
				$("#jcasr8").hide();
				$(".leftturn").hide();
				$(".armplode").hide();
				$(".legplode").hide();
				$(".headplode").hide();
				$(".bodyplode").hide();
				var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#jcasr1").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","rightturn1a40.gif");
        		}
        		else
        		{	
				$("#jcasr1").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","rightturn1a.gif");
				}
			});		

				$("#butt2a").click(function leftfront(){
				$(this).fadeOut(0);
				$("#butt3a").fadeIn(0);
				$("#butt8").fadeOut(0);
				$("#butt7").fadeIn(0);
				$("#jcasr1").hide();
				$(".leftturn").hide();
				var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#jcasr2").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","rightturn2a40.gif");
        		}
        		else
        		{	
				$("#jcasr2").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","rightturn2a.gif");
				}
			});

				$("#butt3a").click(function leftfront(){
				$(this).fadeOut(0);
				$("#butt4a").fadeIn(0);
				$("#butt7").fadeOut(0);
				$("#butt6").fadeIn(0);
				$("#jcasr2").hide();
				$(".leftturn").hide();
				var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#jcasr3").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","rightturn3a40.gif");
        		}
        		else
        		{	
				$("#jcasr3").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","rightturn3a.gif");
				}
				});	


				$("#butt4a").click(function leftfront(){
				$(this).fadeOut(0);
				$("#butt5a").fadeIn(0);
				$("#butt6").fadeOut(0);
				$("#butt5").fadeIn(0);
				$("#jcasr3").hide();
				$(".leftturn").hide();
				var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#jcasr4").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","rightturn4a40.gif");
        		}
        		else
        		{	
				$("#jcasr4").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","rightturn4a.gif");
				}
				});	


				$("#butt5a").click(function leftfront(){
				$(this).fadeOut(0);
				$("#butt6a").fadeIn(0);
				$("#butt5").fadeOut(0);
				$("#butt4").fadeIn(0);
				$("#jcasr4").hide();
				$(".leftturn").hide();
				var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#jcasr5").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","rightturn5a40.gif");
        		}
        		else
        		{	
				$("#jcasr5").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","rightturn5a.gif");
				}
				});	

				$("#butt6a").click(function leftfront(){
				$(this).fadeOut(0);
				$("#butt7a").fadeIn(0);
				$("#butt4").fadeOut(0);
				$("#butt3").fadeIn(0);
				$("#jcasr5").hide();
				$(".leftturn").hide();
				var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#jcasr6").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","rightturn6a40.gif");
        		}
        		else
        		{	
				$("#jcasr6").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","rightturn6a.gif");
				}
				});	


				$("#butt7a").click(function leftfront(){
				$(this).fadeOut(0);
				$("#butt8a").fadeIn(0);
				$("#butt3").fadeOut(0);
				$("#butt2").fadeIn(0);
				$("#jcasr6").hide();
				$(".leftturn").hide();
				var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#jcasr7").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","rightturn7a40.gif");
        		}
        		else
        		{	
				$("#jcasr7").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","rightturn7a.gif");
				}
				});	  	


				$("#butt8a").click(function leftfront(){
				$(this).fadeOut(0);
				$("#butta").fadeIn(0);
				$("#exp1").fadeIn(500);
				$("#exp2").fadeIn(500);
				$("#exp3").fadeIn(500);
				$("#exp4").fadeIn(500);				
				$("#butt2").fadeOut(0);
				$("#butt").fadeIn(0);
				$("#jcasr7").hide();
				$(".leftturn").hide();
				
				var windowSize = $(window).width();
				var windowHeight = $(window).height();
				if (windowSize <= 740 || windowHeight <= 415)  
				{
           		  $("#jcasr8").show().each(function()
					{
            		this.offsetHeight;
        			})
        			.prop("src","rightturn8a40.gif");
        		}
        		else
        		{	
				$("#jcasr8").show().each(function()
				{
            		this.offsetHeight;
        		})
        		.prop("src","rightturn8a.gif");
				}
			});

// //  function checkWidth() {
        

        
//         else if (windowSize <= 719) {
//             console.log("screen width is less than 720 but greater than or equal to 480");
//         }
//         else if (windowSize <= 959) {
//             console.log("screen width is less than 960 but greater than or equal to 720");
//         }
//         else if (windowSize >= 960) {
//             console.log("screen width is greater than or equal to 960");
//         }
//     }

//     // Execute on load
//     checkWidth();
//     // Bind event listener
//     $(window).resize(checkWidth);



			 });