const navbar = document.querySelector(".navbar");
const navbarBtn = document.querySelector(".navbar-toggler");
const navbarIcon = document.querySelector(".navbar-icon");
const landingWrapper = document.querySelector(".landing-wrapper");
const gallery = document.querySelector(".gallery");
const galleryWrapper = document.querySelector(".gallery-text-wrapper");
const btnContact = document.querySelector("#btnContact");
const mailIcon = document.querySelector("#mailIcon");


navbarBtn.addEventListener("click", function() {
    navbarIcon.classList.toggle("navbar-closed");
    navbarIcon.classList.toggle("navbar-open");
    if (window.scrollY === 0) {
        navbar.classList.toggle("bg-body-tertiary");
        navbar.classList.toggle("bg-transparent");
    }
})
landingWrapper.parentElement.style.height = "calc(100vh)";
landingWrapper.parentElement.style.padding = "0";
// landingWrapper.parentElement.style.marginLeft = "0";
// landingWrapper.parentElement.style.marginRight = "0";
gallery.addEventListener("mouseover", function() {
    gallery.style.cursor = "pointer";
    galleryWrapper.classList.toggle("gallery-closed");
    galleryWrapper.classList.toggle("gallery-open");
})
gallery.addEventListener("mouseout", function() {
    gallery.style.cursor = "auto";
    galleryWrapper.classList.toggle("gallery-closed");
    galleryWrapper.classList.toggle("gallery-open");
})
gallery.addEventListener("click", function() {
    window.location.href = "#";
})
btnContact.addEventListener("mouseover", function() {
    mailIcon.src = "resources/envelope-open-fill.svg"
    mailIcon.style.transform = "translateY(-5px)";
})
btnContact.addEventListener("mouseout", function() {
    mailIcon.src = "resources/envelope-fill.svg"
    mailIcon.style.transform = "translateY(0px)";
})
document.addEventListener("scroll", function(e) {
    if (window.scrollY === 0) {
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("bg-body-tertiary");
    } else {
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-body-tertiary");
    }
})