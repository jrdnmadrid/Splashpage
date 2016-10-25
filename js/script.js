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
    $('div.jumbotron').fadeIn(4000);
});

