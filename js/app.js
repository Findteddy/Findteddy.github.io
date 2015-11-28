$(document).ready(function() {

    /* Set opacity of .hideme to 0 */
    $('.hideme').css({'opacity':'0'});
    /* Every time the window is scrolled ... */

    $("#owl-demo").owlCarousel({

        //navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

    $('.gotomarketing').click(function() {
        $('html, body').animate({
            scrollTop: $('.marketing').offset().top
        }, 1500);
    });

    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

        });

    });

});