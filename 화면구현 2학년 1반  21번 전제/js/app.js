window.onload = function () {
    $(".sub").hide();
    $(".wrapper").hide();

    $("#main_menu > li").hover(function () {
        $(this).children("ul").stop().slideDown();
    }, function () {
        $(this).children("ul").stop().slideUp();
    });

    $("#layerPopup").hide();
    $(".notice_btn").click(function () {
        let div = document.createElement("div");
        div.innerHTML = `
        <div class="notice_pop">
            <h3>제30회 정기출사 및 모임 안내</h3>
            <p>울긋불긋 단풍 가득한 가을을 카메라에 담고자<br> 제 30회 정기출사 모임을 아래와 같이 갖고자합니다.</p>
            <p>회원 여러분의 많은 참여 부탁드립니다.</p>
            <div class="notice_bottom">
            <p>일시 : 2020년 11월 16일 토요일 아침 10시</p>
            <p>장소 : 분당 중앙공원 정자</p>
            <p>출사후 회식 장소 : 2시 서현역근처 까투리</p>
            </div>
        </div>
        `
        $(".layerContent").append(div);
        $(".wrapper").show();
        $("#layerPopup").show();
    });
    let ph = document.querySelectorAll(".ph");
    ph.forEach(e => {
        let idx = e.dataset.idx;
        e.addEventListener("click", function () {
            let img = document.createElement("img");
            img.src = `images/gallery${idx}.jpg`;
            $(".layerContent").append(img);
            $(".wrapper").show();
            $("#layerPopup").show();
        });
    });
    $("#layerPopup button").click(function () {
        $(".layerContent").empty();
        $(".wrapper").hide();
        $("#layerPopup").hide();
    });
}
