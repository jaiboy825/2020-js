String.prototype.zero = function(){
    return this.substring(this.length - 2);
}

window.onload = function(){
    const h = $(".h"); //각 시,분 초를 나타내는 dom을 가져온다. 가져온 돔은 제이쿼리 객체다.
    const m = $(".m");
    const s = $(".s");

    let time = h.text() * 3600 + m.text() * 60 + s.text() * 1;

    let timerId = setInterval(()=>{
        time--;

        let hour = "00" + Math.floor(time / 3600); //시간을 구한다.
        let min = "00" + Math.floor((time - hour * 3600) / 60); //분을 구한다.
        let sec = "00" + time % 60;

        h.text(hour.zero());
        m.text(min.zero());
        s.text(sec.zero());
        //자릿수가 한자리 일때도 앞에 0이 붙어서 나오도록 변경해라.
        if(time <= 0){
            clearInterval(timerId); //시간이 0이되면 타이머를 멈춘다.
        }
    }, 1000);

    const spins = $(".spin"); //3개의 스핀을 가져온다.
    let ends = [23, 59, 59];
    for(let i = 0; i < 3; i++){
        fillNumber(spins.eq(i), ends[i]);
    }


    function fillNumber(target, endNumber){
        target.empty(); //타겟내에 있는거 지우고
        target.append(`<div class="block">--</div><div class="block">--</div>`);
        for(let i = 0; i <= endNumber; i++){
            target.append(`<div class="block">${ (i + "").zero() }</div>`);
        }
        target.append(`<div class="block">--</div><div class="block">--</div>`);
    }
}

