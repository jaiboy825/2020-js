window.onload = function () {
    // $(".sub").hide();
    // $(".tabContent > div").eq(0).fadeIn();

    // $("#tabMenu > li").on("click", function () {
    //     let idx = $(this).index();
    //     $("#tabMenu > li").removeClass("on");
    //     $("#tabMenu > li").eq(idx).addClass("on");
    //     $(".tabContent > div").hide();
    //     $(".tabContent > div").eq(idx).fadeIn();
    // });
    // $("#main > li").hover(function () {
    //     $(this).children("ul").stop().slideDown();
    // }, function () {
    //     $(this).children("ul").stop().slideUp();
    // });

    // $(".slider > img").css({ "left": "100%" });
    // $(".slider > img").eq(0).css({ "left": 0 });
    // let idx = 0;
    // setInterval(function () {
    //     let next = (idx + 1) % 3;
    //     $(".slider > img").eq(next).css({ "left": "100%" }).stop().animate({ "left": 0 }, 800);
    //     $(".slider > img").eq(idx).stop().animate({ "left": "-100%" }, 800);
    //     idx = next;
    // }, 3000);
    const h = $(".h");
    const m = $(".m");
    const s = $(".s");
    let temp;
    $(".text-box").on("click", function () {
        $(".data-box").fadeOut();
        $(".set-box").fadeIn();
    });
    $(".save").on("click", function () {
        if ($(".timer-name").val() == '') {
            alert("타이머 이름을 정해주세요");
        } else {
            alert("값이 있음")
            $(".data-box").fadeIn();
            $(".set-box").fadeOut();
            h.text($("#h").val());
            m.text($("#m").val());
            s.text($("#s").val());
            temp = $("#h").val() * 3600 + $("#m").val() * 60 + $("#s").val() * 1;
        }
    });
    let stop = false;
    let timeId;
    $("#start").on("click", function () {
        let time = h.text() * 3600 + m.text() * 60 + s.text() * 1;
        if(time == 0) return;
        console.log(temp);

        if (stop == false) {
            stop = true;
            timeId = setInterval(() => {
                time--;

                let hour = Math.floor(time / 3600);
                let min = Math.floor((time - hour * 3600) / 60);
                let sec = time % 60;

                h.text(hour);
                m.text(min);
                s.text(sec);

                if (time <= 0) {
                    alert("시간 끝!")
                    stop = false;
                    clearInterval(timeId);
                }
            }, 1000);
        } else {
            clearInterval(timeId);
            stop = false;
        }
    });

    $("#resetBtn").on("click", function () {
        if(temp == 0) return;
        console.log(temp);
        let hour = Math.floor(temp / 3600);
        let min = Math.floor((temp - hour * 3600) / 60);
        let sec = temp % 60;
        h.text(hour);
        m.text(min);
        s.text(sec);
    });

}