function onclick() {
    document.getElementById("feature-col").style.border = "1px solid #0000FF";
};

function toggleHamburgerMenu() {
    var x = document.getElementById("hamburger_menu_toggle");
    if (x.style.height === "384px") {
        x.style.height = 0;
    } else {
        x.style.height = "384px";
    }
}

$(function () {
    $(document).scroll(function () {
        var $nav = $("#navbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
    $(document).scroll(function () {
        var $header = $("#header");
        $header.toggleClass("scrolled", $(this).scrollTop() > $header.height());
    });
});