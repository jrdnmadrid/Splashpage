


// Nav bar styling changes//
$(document).ready(function() {
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


//Links at top
$(document).ready(function removeHash () { 
    var scrollV, scrollH, loc = window.location;
    if ("pushState" in history)
        history.pushState("", document.title, loc.pathname + loc.search);
    else {
        // Prevent scrolling by storing the page's current scroll offset
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;

        loc.hash = "";

        // Restore the scroll offset, should be flicker free
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
    }
});

//Jumbotron//
    $(document).ready(function() {
        $('#opening').fadeIn(2000);
        $("#logo").fadeIn(500);
        setTimeout(function() {
            $("#arrowone").fadeIn(500);
            $("#arrowone").fadeOut(800);
            $("#arrowtwo").fadeIn(600);
            $("#arrowtwo").fadeOut(700);
            $("#arrowthree").fadeIn(700);
            $("#arrowthree").fadeOut (600);
    },2300);
    });

//fadeIn effects for text besides Jumbotron//
$(document).ready(function() {
$(function() {
    $(window).scroll( function(){
       
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 50;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},2000);
                    
            }
        }); 
    
    });
});
});

