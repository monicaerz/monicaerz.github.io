$(document).ready(function() {
    var trigger = $('.hamburger'),
        isClosed = true;

    trigger.click(function() {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == false) {
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = true;
        } else {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = false;
        }
    }

    $('[data-toggle="offcanvas"]').click(function() {
        $('#wrapper').toggleClass('toggled');
    });


    $(".nav a").on("click", function() {
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
        $('#wrapper').toggleClass('toggled');
    });
});
