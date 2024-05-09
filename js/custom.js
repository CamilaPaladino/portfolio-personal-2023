$(document).ready(function() {

    $(window).scroll(function() {
        const scrollPos = $(window).scrollTop();
        // Cambio en header con Scroll
        if(scrollPos >= 90) {
            $('.nav-desktop').addClass('scrollNav');
            $('.logo-header').addClass('mostrar');
        }
        else {
            $('.nav-desktop').removeClass('scrollNav');
            $('.logo-header').removeClass('mostrar');
        }

        // Nav active según sección
        $('section').each(function() {
            const seccionOffset = $(this).offset().top - 50;
            if(scrollPos >= seccionOffset) {
                let idSeccion = $(this).attr('id');
                $('.nav-link').removeClass('active');
                $('.nav-link[href="#' + idSeccion + '"]').addClass('active');
            }
        });
    });

    // Nav active según ancla
    $('.nav-link').click(function(e) {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });

    // Nav Mobile
    $('.btnMenu').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('on');
        $('.menu-custom-mobile').toggleClass('mostrar');
        $('.nav-mobile').toggleClass('mostrar');
        $('.header-mobile').toggleClass('open');
    });

    $('.link-mobile').click(function(e) {
        if($(this).hasClass('no-link')) {
            e.preventDefault();
            return;
        }
        $('.btnMenu').toggleClass('on');
        $('.menu-custom-mobile').toggleClass('mostrar');
        $('.nav-mobile').toggleClass('mostrar');
        $('.header-mobile').toggleClass('open');
    });

    // Iniciar animaciones
    AOS.init();
    




});
