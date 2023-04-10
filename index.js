//Global Variables

$(window).on('scroll', function() {
    if(window.scrollY > 200) {
        $("#header-container").css("height", "100px")
                              .css("position", "fixed")
                              .css("flex-direction", "row");

        $("#header-logo").css("height", "75px")
                         .css("margin-left", "10px")
                         .css("margin-top", "0");
    } else {
        $("#header-container").css("height", "400px")
                              .css("position", "absolute")
                              .css("flex-direction", "column");

        $("#header-logo").css("height", "200px")
                         .css("margin-left", "0px")
                         .css("margin-top", "50px");
    }
});