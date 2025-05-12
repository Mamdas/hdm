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
    

// Why Choose Us
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
  


  // Teams
  
 let xPos = 0;

 gsap.timeline()
     .set(dragger, { opacity:0 }) //make the drag layer invisible
     .set(ring,    { rotationY:180 }) //set initial rotationY so the parallax jump happens off screen
     // .set(ring,    { rotationX: 45 }) 
     .set('.img',  { // apply transform rotations to each image
       rotateY: (i)=> i*-30,
       transformOrigin: '50% 50% 1000px',
       z: -1000,
      //  backgroundImage:(i)=>'url(https://picsum.photos/id/'+(i+32)+'/700/300/)',
      //  backgroundPosition:(i)=>getBgPos(i),
       backfaceVisibility:'hidden'
     })    
     .from('.img', {
       duration:1.5,
       y:200,
       opacity:0,
       stagger:0.1,
       ease:'expo'
     })
 
 Draggable.create(dragger, {
   
   onDragStart:(e)=>{ 
     if (e.touches) e.clientX = e.touches[0].clientX;
     xPos = Math.round(e.clientX);
   },
   
   onDrag:(e)=>{
     if (e.touches) e.clientX = e.touches[0].clientX;    
     
     gsap.to(ring, {
       rotationY: '-=' +( (Math.round(e.clientX)-xPos)%360 ),
       onUpdate: ()=>{gsap.set('.img', { backgroundPosition:(i)=>getBgPos(i) }) }
     });
     
     xPos = Math.round(e.clientX);
   },
   
   onDragEnd:()=> {
     // gsap.to(ring, { rotationY: Math.round(gsap.getProperty(ring,'rotationY')/36)*36 }) // move to nearest photo...at the expense of the inertia effect
     gsap.set(dragger, {x:0, y:0}) // reset drag layer
   }
   
 })
 
 
 function getBgPos(i){ //returns the background-position string to create parallax movement in each image
   return ( -gsap.utils.wrap(0,360,gsap.getProperty(ring, 'rotationY')-180-i*18)/360*400 )+'px 0px';
 }

