$(document).ready(function() {
    // respon title top 
    $(window).resize(function() {
        if ($(document).width() <= 1200) {
            $(".phone , .times").addClass('text-center');
        }
        if ($(document).width() > 1200) {
            $(".phone , .times").removeClass('text-center');
        }
    });

    // dropmenu 



    // Slider 
    $('#slide .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 4,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('#slide-sub .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 4,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    var owl = $('#wp-slide-sub');
    owl.owlCarousel();
    // Go to the next item
    $('.btn-next').click(function() {
            owl.trigger('next.owl.carousel');
        })
        // Go to the previous item
    $('.btn-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

    // hover banner
    $("#product-banner .card").hover(
        function() {
            $(this).animate({
                marginTop: "-2%",
            }, 200);
        },
        function() {
            $(this).animate({
                marginTop: "0%",
            }, 200);
        }
    );


    // Back to top 
    $(window).scroll(function() {
        if ($(this).scrollTop() > 80) {
            $("#back-to-top").fadeIn();
        } else {
            $("#back-to-top").fadeOut();
        }
    });
    $("#back-to-top").click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    // tooltip
    $('[data-toggle="tooltip"]').tooltip({
        placement: 'bottom',
        trigger: 'hover focus',
        html: true
    });

    // Slide-sub 
    // $("#slide-sub div.owl-nav .owl-prev span").addClass('fas fa-angle-left ');
    // $("#slide-sub div.owl-nav .owl-next span").addClass('fas fa-angle-right ');


});

