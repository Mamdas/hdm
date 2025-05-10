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















    $(window).on("scroll", function () {
        var $elem = $(".section-light");
        var $elemm = $(".section-light img");
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
        var scale = 1 + (0.75 * progress);
        var rotateX = 22 * (1 - progress);



        if (scrollBottom >= elemTop) {
            $elemm.css({
                // opacity: opacity,
                transform: `perspective(1200px) translateY(-16rem) scale(${scale})`
            });
        }
    });





    setInterval(function () {
        var $circle = $('<div class="svg-circle"></div>');
        $('.dev-svg').append($circle);

        $circle.on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function () {
            $(this).remove();
        });
    }, 5000);


    setInterval(function () {
        var $circle = $('<div class="svg-circle2"></div>');
        $('.dev-svg').append($circle);

        $circle.on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function () {
            $(this).remove();
        });
    }, 5000);





    const $images = $('.dribImg');

    $(window).on('mousemove', function (e) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const posX = (e.clientX - centerX) / centerX;
        const posY = (e.clientY - centerY) / centerY;

        $images.each(function (index) {
            const intensity = (index + 1) * 8;
            const directionX = index % 2 === 0 ? 1 : -1;
            const directionY = index % 3 === 0 ? 1 : -1;

            gsap.to($(this), {
                x: posX * intensity * directionX,
                y: posY * intensity * directionY,
                ease: "none",
                duration: 0.2,
            });
        });
    });








});


// document.addEventListener("DOMContentLoaded", () => {
//     const steps = document.querySelectorAll(".whyChooseUS-list li");
//     const container = document.querySelector(".WhyChooseUS");
//     const totalSteps = steps.length;
//     const sectionHeight = container.offsetHeight;
  
//     window.addEventListener("scroll", () => {
//       const scrollY = window.scrollY;
//       const containerTop = container.offsetTop;
//       const relativeScroll = scrollY - containerTop;
  
//       if (relativeScroll >= 0 && relativeScroll < sectionHeight) {
//         const index = Math.min(
//           totalSteps - 2,
//           Math.floor((relativeScroll / sectionHeight) * totalSteps)
//         );
          
        
//         steps.forEach((step, i) => {
//           step.classList.remove("previous", "active", "next");
//           step.style.transform = "";
  
//           if (i === index) {
//             step.classList.add("active");
//             step.style.transform =
//               i % 2 === 0
//                 ? "translate(-50%, -50%) scale(1) rotate(0deg)"
//                 : "translate(-50%, -50%) scale(1) rotate(0deg)";
//           } else if (i < index) {
//             step.classList.add("previous");
//             step.style.transform =
//               i % 2 === 0
//                 ? "translate(-60%, -52%) scale(0.93) rotate(-3deg)"
//                 : "translate(-40%, -52%) scale(0.93) rotate(3deg)";
//           } else {
//             step.classList.add("next");
//           }
//         });
//       }
//     });
//   });
    


document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".whyChooseUS-list li");
    const container = document.querySelector(".WhyChooseUS");
    const totalSteps = steps.length;
    const sectionHeight = container.offsetHeight;
  
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const containerTop = container.offsetTop;
      const relativeScroll = scrollY - containerTop;
  
      // فقط وقتی 100vh پایین‌تر از ابتدای سکشن بود اجرا کن
      if (scrollY >= containerTop - window.innerHeight && relativeScroll < sectionHeight) {
        const index = Math.min(
          totalSteps - 1,
          Math.floor((relativeScroll / sectionHeight) * totalSteps)
        );
  
        steps.forEach((step, i) => {
          step.classList.remove("previous", "active", "next");
          step.style.transform = "";
  
          if (i === index) {
            step.classList.add("active");
            step.style.transform =
              i % 2 === 0
                ? "translate(-50%, -50%) scale(1) rotate(0deg)"
                : "translate(-50%, -50%) scale(1) rotate(0deg)";
          } else if (i < index) {
            step.classList.add("previous");
            step.style.transform =
              i % 2 === 0
                ? "translate(-60%, -52%) scale(0.93) rotate(-3deg)"
                : "translate(-40%, -52%) scale(0.93) rotate(3deg)";
          } else {
            step.classList.add("next");
          }
        });
      } else {
        // خارج از بازه → همه مخفی
        steps.forEach((step) => {
          step.classList.remove("previous", "active", "next");
          step.style.opacity = "0";
        });
      }
    });
  });
  


