$(function () {
    //stickey navbar jquery
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $(".stickey-nav");
        if (scrolling > 80) {
            sticky.addClass("navbg");
        } else {
            sticky.removeClass("navbg");
        }
    });
    // animation scroll js
    var html_body = $('html, body');
    $('.navbar .nav-link').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 80);
                return false;
            }
        }
    });
    //counter jquery
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
        }, {
            duration: 800,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
                //alert('finished');
            }
        });
    });
});