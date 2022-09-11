var tabButtons = [
    "install",
    "create",
    "share",
    "export",
    "restore"
];

function buttonId(str) {
    return "#" + str + "_button";
};

function contentId(str) {
    return "#" + str + "_content";
};

function setTab(elemId) {
    if($(window).width() >= 768){
        tabButtons.forEach(function(id) {
            $(buttonId(id)).addClass("opacity-80");
            $(contentId(id)).addClass("md:hidden");
        });
        $(buttonId(elemId)).removeClass("opacity-80");
        $(contentId(elemId)).removeClass("md:hidden");
    } else {
        $('html, body').animate({
            scrollTop: $(contentId(elemId)).offset().top
        }, 1);
    };
};

function setFromUrl() {
    var hash = window.location.hash.substring(1);
    if (tabButtons.includes(hash)) {
        setTab(hash);
    };
};

$(document).ready(function() {
    $("#hamburger").click(function() {
        $("#hamburger").addClass("hidden");
        $("#exit").removeClass("hidden");
        $("#menu").removeClass("hidden");
    });

    $("#exit").click(function() {
        $("#exit").addClass("hidden");
        $("#hamburger").removeClass("hidden");
        $("#menu").addClass("hidden");
    });

    addEventListener('hashchange', (_) => {
        setFromUrl();
    });

    tabButtons.forEach(function(elemId) {
        $(buttonId(elemId)).click(function() {
            setTab(elemId);
            window.location.hash = elemId;
        });
    });

    setFromUrl();
});
