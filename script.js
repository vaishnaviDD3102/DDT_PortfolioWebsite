// Function to set active style based on color
// function setActiveStyle(color) {
//     const alternateStyles = document.querySelectorAll(".alternate-style");
//     alternateStyles.forEach((style) => {
//         if (color === style.getAttribute("title")) {
//             style.removeAttribute("disabled");
//         } else {
//             style.setAttribute("disabled", "true");
//         }
//     });
// }

// Toggle style switcher
document.addEventListener("DOMContentLoaded", function() {
    // const colors = document.querySelectorAll(".style-switcher .colors span");
    // const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
    // styleSwitcherToggle.addEventListener("click", function() {
    //     const styleSwitcher = document.querySelector(".style-switcher");
    //     styleSwitcher.classList.toggle("open");
    // });

    // // Hide style-switcher on scroll
    // window.addEventListener("scroll", function() {
    //     const styleSwitcher = document.querySelector(".style-switcher");
    //     if (styleSwitcher.classList.contains("open")) {
    //         styleSwitcher.classList.remove("open");
    //     }
    // });

    // Theme light and dark mode
    const dayNight = document.querySelector(".day-night");
    dayNight.addEventListener("click", function() {
        const body = document.body;
        body.classList.toggle("dark");
        dayNight.querySelector("i").classList.toggle("fa-sun");
        dayNight.querySelector("i").classList.toggle("fa-moon");
    });

    // Set initial theme based on body class
    window.addEventListener("load", function() {
        const body = document.body;
        const dayNightIcon = document.querySelector(".day-night i");

        if (body.classList.contains("dark")) {
            dayNightIcon.classList.add("fa-sun");
        } else {
            dayNightIcon.classList.add("fa-moon");
        }
    });
});

// typing animation
// var typed = new Typed(".typing",{
//     strings: [" Frontend Developer"],
//     typeSpeed: 100,
//     backSpeed: 60, // corrected property name
//     loop: true
// });

