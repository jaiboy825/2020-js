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
            $(".timers-name").text($(".timer-name").val());
            $(".data-box").fadeIn();
            $(".set-box").fadeOut();
            // 00 틀 맞춰주기
            if ($("#h").val() < 10) {
                h.text("0" + $("#h").val());
            } else {
                h.text($("#h").val());
            }
            if ($("#m").val() < 10) {
                m.text("0" + $("#m").val());
            } else {
                m.text($("#m").val());
            }
            if ($("#s").val() < 10) {
                s.text("0" + $("#s").val());
            } else {
                s.text($("#s").val());
            }
            // 타이머 시간 모양 맞추기
            $(".total").text( $("#h").val() + "시간 " + $("#m").val() + "분 " + $("#s").val() + "초");
            
            
            temp = $("#h").val() * 3600 + $("#m").val() * 60 + $("#s").val() * 1;
        }
    });
    let stop = false;
    let timeId;
    $("#start").on("click", function () {
        let time = h.text() * 3600 + m.text() * 60 + s.text() * 1;
        if (time == 0) return;
        console.log(temp);

        if (stop == false) {
            stop = true;
            timeId = setInterval(() => {
                time--;

                let hour = Math.floor(time / 3600);
                let min = Math.floor((time - hour * 3600) / 60);
                let sec = time % 60;
                if (hour < 10) {
                    h.text("0" + hour);
                } else {
                    h.text(hour);
                }
                if (min < 10) {
                    m.text("0" + min);
                } else {
                    m.text(min);
                }
                if (sec < 10) {
                    s.text("0" + sec);
                } else {
                    s.text(sec);
                }
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
        clearInterval(timeId);
        stop = false;
        if (temp == 0) return;
        console.log(temp);
        let hour = Math.floor(temp / 3600);
        let min = Math.floor((temp - hour * 3600) / 60);
        let sec = temp % 60;
        if (hour < 10) { h.text("0" + hour);}
        else { h.text(hour);}
        if (min < 10) {  m.text("0" + min);} 
        else { m.text(min); }
        if (sec < 10) {  s.text("0" + sec); } 
        else { s.text(sec);  }

    });

}