window.onload = function(){
    const h = $(".h");
    const m = $(".m");
    const s = $(".s");

    let time =h.text() * 3600 + m.text() * 60 + s.text() *1;

    let timeId = setInterval(()=>{
        time--;

        let hour = Math.floor(time / 3600);
        let min = Math.floor((time - hour * 3600) /60);
        let sec = time % 60;

        h.text(hour);
        m.text(min);
        s.text(sec);

        if(time <=0 ){
            clearInterval(timeId);
        }
    },1000);
}