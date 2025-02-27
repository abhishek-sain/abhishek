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

document.addEventListener("DOMContentLoaded", function () {
  (function () {
    emailjs.init({
      publicKey: "WC0OMRj9YPZb6iZQu",
    });
  })();
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  let form = document.getElementById("contact-form");
  let userData = {
    name: document.querySelector("input[placeholder='Name']").value,
    email: document.querySelector("input[placeholder='Email']").value,
    email: document.querySelector("input[placeholder='Mobile']").value,
    subject: document.querySelector("input[placeholder='Subject']").value,
    message: document.querySelector("textarea[placeholder='Message']").value,
  };

  emailjs.send("service_vt112b4", "template_lhs56re", userData)
    .then((response) => {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Email Sent Successfully ✅",
      });

      form.reset(); 
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email Sending Failed ❌",
      });
      console.error(error);
    });
});