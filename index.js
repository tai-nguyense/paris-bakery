const navbarBtn = document.querySelector(".navbar-toggler");
const navbarIcon = document.querySelector(".navbar-icon");
const btnContact = document.querySelector("#btnContact");
const mailIcon = document.querySelector("#mailIcon");
const gallery = document.querySelector(".gallery");
const galleryWrapper = document.querySelector(".gallery-text-wrapper");

navbarBtn.addEventListener("click", function() {
    navbarIcon.classList.toggle("navbar-closed");
    navbarIcon.classList.toggle("navbar-open");
})
btnContact.addEventListener("mouseover", function() {
    mailIcon.src = "resources/envelope-open-fill.svg"
    mailIcon.style.transform = "translateY(-5px)";
})
btnContact.addEventListener("mouseout", function() {
    mailIcon.src = "resources/envelope-fill.svg"
    mailIcon.style.transform = "translateY(0px)";
})
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