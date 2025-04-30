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
});