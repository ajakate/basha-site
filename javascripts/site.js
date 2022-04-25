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
});
