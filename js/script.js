$(document).ready(function() {


// Nav bar styling changes//
     $(".navbar-default .navbar-nav>li>a").mouseenter(function(){
            $(this).css("color", "red");
     });

     $(".navbar-default .navbar-nav>li>a").mouseleave(function(){
            $(this).css("color", "rgb(239, 239, 239)");
     });

    $(".navbar-default .navbar-nav>li>a").mousedown(function() {
      $(this).css("color", "rgb(239, 239, 239)");
    });
    $(".navbar-default .navbar-nav>li>a").mouseup(function() {
      $(this).css("color", "red");
    });
});

//Jumbotron//
		$(document).ready(function() {
    $('div.jumbotron').fadeIn(3000);
});

//fadeIn effects for text besides Jumbotron//
$(document).ready(function() {
$(function() {
    $(window).scroll( function(){
       
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 100;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},2500);
                    
            }
        }); 
    
    });
});
});

