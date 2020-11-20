window.onload = function () {
    $(".sub").hide();
    $("#main > li").hover(function () {
        $(this).children("ul").stop().slideDown();
    }, function () {
        $(this).children("ul").stop().slideUp();
    });

    $(".slider > img").css({ "left": "100%" });
    $(".slider > img").eq(0).css({ "left": 0 });
    let idx = 0;
    setInterval(function () {
        $(".slider > img").eq(idx + 1).css({"left":"100%"}).animate({"left": 0}, 800);
        $(".slider > img").eq(idx).animate({"left":"-100%"}, 800);
        idx = (idx + 1) % 3;
    }, 3000);
}