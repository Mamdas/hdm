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
  


