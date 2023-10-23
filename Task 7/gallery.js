/*global document */
/*global $ */

$(document).ready(function () {
    $(".gallery").slick({
        dots: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }
        ]
    });
    $(document).ready(function () {
        var scrollToFirstPageButton = $("#scrollToFirstPage");
        scrollToFirstPageButton.click(function () {
            $(".gallery").slick("slickGoTo", 0);
        });
    });
});
