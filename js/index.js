/* control de la flecha para subir el scroll */

$(document).ready(function () {
    $('.ir-arriba').click(function () {
        $('body,html').animate({
            scrollTop: '0px'
        }, 500);
    });
    $(function () {
        $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
    });
    /*mostrar flecha cuando se baje crool */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.ir-arriba').slideDown(300)
        } else {
            $('.ir-arriba').slideUp(300)
        }
    })
    // movimiento acerca de con los botones
    $("#button-acerca-de").click(function () {
        $('html, body').animate({
            scrollTop: $("#section-about").offset().top
        }, 500);
    });
    // movminemto de los proyectos con boton
    $("#button-educacion").click(function () {
        $('html, body').animate({
            scrollTop: $("#section-educacion").offset().top
        }, 500);
    });
    $("#button-proyectos").click(function () {
        $('html, body').animate({
            scrollTop: $("#section-proyectos").offset().top
        }, 500);
    });


    // movimiento de contacto con el scroll
    $("#button-contacto").click(function () {
        $('html, body').animate({
            scrollTop: $("#section-contacto").offset().top
        }, 500);
    });
})