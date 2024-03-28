let toggleNav = document.querySelector(".nav");
let menuIcon = document.querySelector("#menu-icon");
let menuNavBtn = document.querySelector(".menuNavBtns");

menuNavBtn.addEventListener("click", () => {
    toggleNav.classList.toggle("nav-open-close");
    console.log("click");
});
