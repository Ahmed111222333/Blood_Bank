//articles-carousel
$(document).ready(function() {
    $('.articles-carousel').owlCarousel({
        loop: false,
        margin: 10,
        rtl: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    })
});
var options = {
    valueNames: ["name", "city"],
    page: 6,
    pagination: true,
};
new List("hacker-list", {
    valueNames: ["name", "city"],
    page: 6,
    pagination: true,
});