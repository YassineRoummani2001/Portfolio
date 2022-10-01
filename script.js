$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    // Explanation of the above code
    // The code starts by creating a click event on the menu.
    // When clicked, it toggles the class of the header and then changes the toggleClass() function to change all headers in that section.
    // The code would toggle the header class to be in a "Toggle" state when clicked.

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }
        else{
            $('.top').hide();
        }


    });

    //smooth scrolling
    $('a[href="#"]').on('click',function(e){

        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },
        500,
        'linear'

        );
    });

});

