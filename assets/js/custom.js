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



    $(window).on("scroll", function () {
        var sectionOffset = $(".section-date").offset().top;
        var scrollTop = $(window).scrollTop();
        var distance = scrollTop - sectionOffset;

        if (distance < 0) return;

        var maxScroll = 300; // حداکثر فاصله‌ای که تغییر اعمال میشه
        var progress = Math.min(distance / maxScroll, 1); // عدد بین 0 تا 1

        var rotateX = 35 * (1 - progress); // از 35 به 0

        $(".date__wrap").css({
            "transform": "perspective(1200px) rotateX(" + rotateX + "deg) rotateY(0)"
        });
    });






    $(window).on("scroll", function () {
        var $elem = $(".date__wrap");
        var elemTop = $elem.offset().top;
        var elemHeight = $elem.outerHeight();
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        var scrollBottom = scrollTop + windowHeight;

        var start = elemTop - windowHeight;
        var end = elemTop + elemHeight - windowHeight;


        var progress = (scrollTop - start) / (end - start);
        progress = Math.min(Math.max(progress, 0), 1);

        // محاسبه‌ی مقادیر نهایی
        var opacity = 0.5 + (0.5 * progress);
        var translateY = 44 * (1 - progress);
        var scale = 0.8 + (0.2 * progress);
        var rotateX = 22 * (1 - progress);



        if (scrollBottom >= elemTop) {
            $elem.css({
                opacity: opacity,
                transform: `perspective(1200px) translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`
            });
        }
    });



    $('.faq__item__head').click(function (e) {
        e.preventDefault();
        $(this).siblings().slideToggle();
        $(this).toggleClass('active');

    });

});