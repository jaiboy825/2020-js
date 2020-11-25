window.onload = function () {
    $(".sub").hide();
    $(".tabContent > div").eq(0).fadeIn();

    $("#tabMenu > li").on("click", function () {
        let idx = $(this).index();
        $("#tabMenu > li").removeClass("on");
        $("#tabMenu > li").eq(idx).addClass("on");
        $(".tabContent > div").hide();
        $(".tabContent > div").eq(idx).fadeIn();
    });
    $("#main > li").hover(function () {
        $(this).children("ul").stop().slideDown();
    }, function () {
        $(this).children("ul").stop().slideUp();
    });

    $(".slider > img").css({ "left": "100%" });
    $(".slider > img").eq(0).css({ "left": 0 });
    let idx = 0;
    setInterval(function () {
        let next = (idx + 1) % 3;
        $(".slider > img").eq(next).css({ "left": "100%" }).stop().animate({ "left": 0 }, 800);
        $(".slider > img").eq(idx).stop().animate({ "left": "-100%" }, 800);
        idx = next;
    }, 3000);
}