var App = function() {
    return {
        hamburger: function(e) {
            ($(e).hasClass('active') === true) ? $(e).removeClass('active'): $(e).addClass('active');
            $('.navBar ul').slideToggle('slow');

        },
        scrollTo: function(elementToGo) {
            $('html, body').animate({
                scrollTop: $(elementToGo).offset().top
            }, 500);
        },
        navBarDown: function() {
           

        },
        init: function() {
            new WOW().init();


        }
    };
}();
App.init();
