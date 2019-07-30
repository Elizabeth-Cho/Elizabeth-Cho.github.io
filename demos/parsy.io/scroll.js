window.onscroll = function() {
    var nav = document.getElementsByClassName("navbar");
    if (window.pageYOffset > 200) {
        nav.classList.add("navbar-add");
    }
    else {
        nav.classList.remove("navbar-add");
    }
}

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
});
