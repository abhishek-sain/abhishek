// preloader
$(window).load(function () {
  $(".preloader").fadeOut(1000); // set duration in brackets
});

$(function () {
  new WOW().init();
  $(".templatemo-nav").singlePageNav({
    offset: 70,
  });

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
  $(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });
});

// const texts = [
//   "Software Developer & Trainer",
//   "Web Development Enthusiast",
//   "Mentored 50+ students",
//   "Led 20+ workshops (500+ attendees)",
//   "Optimized code, boosted performance 30%",
//   "Committed to software excellence",
// ];

// const textUpper = document.getElementById("text-upper");
// let textIndex = 0;
// let charIndex = 0;
// let cursorVisible = true;

// function typing() {
//   if (charIndex < texts[textIndex].length) {
//     textUpper.innerHTML = texts[textIndex].substring(0, charIndex) + "<span class='cursor'>|</span>";
//     charIndex++;
//     setTimeout(typing, 100); // Typing speed
//   } else {
//     setTimeout(deleting, 1000); // Wait before deleting
//   }
// }

// function deleting() {
//   if (charIndex > 0) {
//     textUpper.innerHTML = texts[textIndex].substring(0, charIndex - 1) + "<span class='cursor'>|</span>";
//     charIndex--;
//     setTimeout(deleting, 50); // Deleting speed
//   } else {
//     textIndex = (textIndex + 1) % texts.length; // Loop to next text
//     setTimeout(typing, 500); // Wait before typing next text
//   }
// }

// typing();



/**
 * Animation on scroll function and init
 */
function aosInit() {
  AOS.init({
    duration: 600,
    easing: "ease-in-out",
    once: false,
    mirror: false,
  });
}
window.addEventListener("load", aosInit);
