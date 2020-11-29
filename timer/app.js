window.onload = function () {
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
            if ($("#h").val() > 23) $("#h").val(23);
            if ($("#h").val() < 0) $("#h").val(0);

            if ($("#m").val() > 59) $("#m").val(59);
            if ($("#m").val() < 0) $("#m").val(0);

            if ($("#s").val() > 59) $("#s").val(59);
            if ($("#s").val() < 0) $("#s").val(0);
            let hour = "00" + $("#h").val();
            let min = "00" + $("#m").val();
            let sec = "00" + $("#s").val();

            h.text(hour.substring(hour.length - 2));
            m.text(min.substring(min.length - 2));
            s.text(sec.substring(sec.length - 2));
            // 타이머 시간 모양 맞추기
            $(".total").text($("#h").val() + "시간 " + $("#m").val() + "분 " + $("#s").val() + "초");


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

                let hour = "00" + Math.floor(time / 3600);
                let min = "00" + Math.floor((time - hour * 3600) / 60);
                let sec = "00" + time % 60;
                h.text(hour.substring(hour.length - 2));
                m.text(min.substring(min.length - 2));
                s.text(sec.substring(sec.length - 2));
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
        let hour = "00" + Math.floor(temp / 3600);
        let min = "00" + Math.floor((temp - hour * 3600) / 60);
        let sec = "00" + temp % 60;
        h.text(hour.substring(hour.length - 2));
        m.text(min.substring(min.length - 2));
        s.text(sec.substring(sec.length - 2));


    });

}