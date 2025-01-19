// document.addEventListener("DOMContentLoaded", function () {
//   const sections = document.querySelectorAll(".section");
//   const navLinks = document.querySelectorAll(".nav-link");

//   window.addEventListener("scroll", () => {
//     let currentSection = "";

//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop - 100; // Điều chỉnh khoảng cách
//       const sectionHeight = section.offsetHeight;

//       if (
//         window.scrollY >= sectionTop &&
//         window.scrollY < sectionTop + sectionHeight
//       ) {
//         currentSection = section.getAttribute("id");
//       }
//     });

//     navLinks.forEach((link) => {
//       link.classList.remove("active");
//       if (link.getAttribute("href").includes(currentSection)) {
//         link.classList.add("active");
//       }
//     });
//   });
// });
