//Fixed header backgroundcolor change
$(window).on('scroll', function() {

    if ($(window).scrollTop() > 50) {

        $('.navbar').addClass('header-solid animated fadeInDown');
    } else {

        $('.navbar').removeClass('header-solid animated fadeInDown');

    }

});

