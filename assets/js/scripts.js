jQuery(function($) {
    /* ============================================================ */
    /* Header Nav */
    /* ============================================================ */
    function headerNav() {
        var header = $('.header'),
            curPos = $(document).scrollTop(),
            prevPos = curPos;

        function refreshNav() {
            curPos = $(document).scrollTop();
            if (curPos > 10) {
                if (header.hasClass('transparent')) {
                    header.removeClass('transparent');
                }
            }
            if (curPos < 10) {
                header.addClass('transparent');
                if (header.hasClass('dynamic')) {
                    header.removeClass('dynamic');
                }
                prevPos = curPos;
            }
            else if (curPos - prevPos > 50) {
                if (!header.hasClass('dynamic')) {
                    header.addClass('dynamic');
                }
                prevPos = curPos;
            } else if (curPos - prevPos < -50) {
                if (header.hasClass('dynamic')) {
                    header.removeClass('dynamic');
                }
                prevPos = curPos;
            }
        }

        refreshNav();

        $(window).scroll(refreshNav);
    }

    $(document).ready(function() {
        //$(".body").fitVids();
        headerNav();
        // $('#history-back').on('click',function(e){
        //     e.preventDefault();
        //     window.History.back();
        //     return false;
        // });
        $('.scroll.top').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0,
            }, {
                duration: 500
            });
            return false;
        });

    });

});
