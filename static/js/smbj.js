$(function() {

//Strat footer-icon
		$('.footer-icon-3').hover(function(){
		
		$('.footer-icon-wx').show();
		
		},function(){
			
			$('.footer-icon-wx').hide();
			
			})	
			
		$('.footer-icon-2').hover(function(){
		
		$('.footer-icon-gw').show();
		
		},function(){
			
			$('.footer-icon-gw').hide();
			
			})
//End footer-icon

//Strat wenti
	$(".wenti-cont section").bind("click", function () {
	  var arrow=$(this);
	  var a= $(this).find("article");
	  $(a).slideToggle(300 ,
	      function(){
	        arrow.find("i").attr('class')=="arrow-plus"?
	        arrow.find("i").removeClass().addClass("arrow-sub"):
	            arrow.find("i").removeClass().addClass("arrow-plus")
	      }
	  );
	});
//End wenti

});