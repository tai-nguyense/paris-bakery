const navbar = document.querySelector(".navbar");
const navbarBtn = document.querySelector(".navbar-toggler");
const navbarIcon = document.querySelector(".navbar-icon");
const landingWrapper = document.querySelector(".landing-wrapper");
const pulldownBtn = document.querySelector("#pulldown");
const sectionName = document.querySelectorAll(".section-name");
const sectionNameText = document.querySelectorAll(".section-name-text");
const gallery = document.querySelector(".gallery");
const galleryWrapper = document.querySelector(".gallery-text-wrapper");
const btnContact = document.querySelector("#btnContact");
const mailIcon = document.querySelector("#mailIcon");

navbarBtn.addEventListener("click", function() {
    navbarIcon.classList.toggle("navbar-closed");
    navbarIcon.classList.toggle("navbar-open");
    if (window.scrollY === 0) {
        navbar.classList.toggle("scrolled");
        navbar.classList.toggle("bg-transparent");
    }
})
pulldownBtn.addEventListener("click", function() {
    const pulldown = document.querySelector(".about-size").getBoundingClientRect().top;
    window.scrollTo({ top: pulldown - 15, behavior: "smooth" })
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
btnContact.addEventListener("mouseover", function() {
    mailIcon.src = "resources/envelope-open-fill.svg"
    mailIcon.style.transform = "translateY(-5px)";
})
btnContact.addEventListener("mouseout", function() {
    mailIcon.src = "resources/envelope-fill.svg"
    mailIcon.style.transform = "translateY(0px)";
})
document.addEventListener("scroll", function() {
    if (window.scrollY === 0) {
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("scrolled");
    } else {
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("scrolled");
    }
})
window.addEventListener("scroll", function() {
    var appearAll = document.querySelectorAll(".scroll-appear");
    for (var i = 0; i < appearAll.length; i++) {
        var appearHeight = window.innerHeight - 200;
        var elementHeight = appearAll[i].getBoundingClientRect().top;
        if (elementHeight < appearHeight) {
            appearAll[i].classList.add("active");
        }
    }
    var appearAll2 = document.querySelectorAll(".scroll-appear-2");
    for (var i = 0; i < appearAll.length; i++) {
        var appearHeight = window.innerHeight - 200;
        var elementHeight = appearAll2[i].getBoundingClientRect().top;
        if (elementHeight < appearHeight) {
            appearAll2[i].classList.add("active");
        }
    }
})

$(".carousel-image").each(function() {
    $(this).attr("draggable", false);
})
$(".carousel-inner").each(function(index) {
    let start = 0;
    let stop = 0;
    $(this).mousedown(function(e) {
        start = e.pageX;
    })
    $(this).mouseup(function(e) {
        stop = e.pageX;
        if (start < stop) {
            $(this).find(".carousel-control-next").click();
        } else if (start > stop) {
            $(this).find(".carousel-control-prev").click();
        }
    })
})
const carouselAll = document.querySelectorAll(".carousel");
carouselAll.forEach(function(carousel) {
    carousel.addEventListener("slide.bs.carousel", function() {
        slideChange(carousel);
        setTimeout(function() {
            slideChange(carousel);
        }, 620);
    })
})

function slideChange(carousel) {
    var slideArray = getArray(carousel, ".carousel-item");
    var index = getIndex(slideArray);
    var infoArray = getArray(carousel, ".carousel-info");
    infoArray[index].classList.toggle("d-none");
    infoArray[index].classList.toggle("active");
}

function getArray(carousel, className) {
    const nodeList = carousel.querySelectorAll(className);
    const array = Array.from(nodeList);
    return array;
}

function getIndex(array) {
    var index;
    for (var i = 0; i < array.length; i++) {
        if (array[i].classList.contains("active")) {
            index = i;
        }
    }
    return index;
}