$(document).ready(function(){
	$(window).scroll(function(){ // função para pegar o movimento do scroll (barra de rolagem)
	  var top = $(window).scrollTop(); // catching page position
		 
	  if(top > 300){ // checking page position
		 
		  $("#seta").show(); // applying the fade on the menu
	  }else{
		  $("#seta").hide();
	  }

		$("#menu_superior_mobile").show(); // applying the fade on the menu
	  }else{
		  $("#menu_superior_mobile").hide();
	  }
	}); 
});