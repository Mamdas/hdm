jQuery(document).ready(function () {
    var $tooltip = $("#tooltip");
    var $section = $("#section-marquee");

    $section.find("a").on("mouseenter", function () {
        $tooltip.show();
    });

    $section.find("a").on("mouseleave", function () {
        $tooltip.hide();
    });

    $section.find("a").on("mousemove", function (e) {
        var offset = $section.offset();
        var mouseX = e.pageX - offset.left;
        var mouseY = e.pageY - offset.top;

        $tooltip.css({
            left: mouseX + 10 + "px",
            top: mouseY - 40 + "px"
        });
    });




    $(window).on("scroll", function () {
        var sectionOffset = $(".section-creative").offset().top;
        var scrollTop = $(window).scrollTop();
        var distance = scrollTop - sectionOffset;

        if (distance < 0) return;

        var maxScroll = 300; // حداکثر فاصله‌ای که تغییر اعمال میشه
        var progress = Math.min(distance / maxScroll, 1); // عدد بین 0 تا 1

        var rotateX = 35 * (1 - progress); // از 35 به 0
        var opacity = 0.5 + 0.5 * progress; // از 0.5 به 1

        $(".dashboard").css({
            "transform": "perspective(1200px) rotateX(" + rotateX + "deg) rotateY(0)",
            "opacity": opacity
        });
    });


});