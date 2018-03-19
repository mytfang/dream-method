var acc = document.getElementsByClassName("form-accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

    };
}


// nav bar only appears after certain point


(function ($) {
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 350) {
                $('#nav').slideDown(100);
            } else {
                $('#nav').slideUp(100);

            }
        });
    });

    $('#nav').removeClass('hidden');


});


// nav bar


$("#nav").click(function () {
    $(".nav-links").toggleClass("show");
    $("#nav").toggleClass("nav-expanded");
});

$(".body-padding").click(function () {
    $(".nav-links").removeClass("show");
    $("#nav").removeClass("nav-expanded");

});

$(".nav-links").click(function () {
    $(this).toggleClass("show");
});




// scroll to page anchor

$('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
