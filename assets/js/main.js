(function ($) {

    var $window = $(window),
        $body = $('body'),
        $nav = $('#nav');

    // Breakpoints.
    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: [null, '736px']
    });

    // Play initial animations on page load.
    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Scrolly.
    $('#nav a, .scrolly').scrolly({
        speed: 1000,
        offset: function () { return $nav.height(); }
    });

    // Swiper Carousel Initialization for Team Portfolio
    $(document).ready(function () {
        var swiper = new Swiper('.team-carousel', {
            loop: true,  // Repetir infinitamente
            autoplay: {  // Configuración de autoplay
                delay: 3000,  // Cambia cada 3 segundos
                disableOnInteraction: false,  // Continuar después de la interacción
            },
            pagination: {  // Puntos de paginación
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {  // Responsivo para diferentes tamaños de pantalla
                320: {  // En pantallas pequeñas
                    slidesPerView: 1,  // Mostrar 1 slide
                    spaceBetween: 10
                },
                768: {  // En pantallas medianas
                    slidesPerView: 2,  // Mostrar 2 slides
                    spaceBetween: 20
                },
                1024: {  // En pantallas grandes
                    slidesPerView: 3,  // Mostrar 3 slides
                    spaceBetween: 30
                },
                1440: {  // En pantallas más grandes
                    slidesPerView: 5,  // Mostrar 5 slides
                    spaceBetween: 40
                }
            }
        });
    });

})(jQuery);
