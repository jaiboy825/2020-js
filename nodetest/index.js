const cheerio = require('cheerio');
const request = require('request');

const url = "http://ncov.mohw.go.kr/bdBoardList_Real.do";

request(url, (err, res, body)=>{
    // console.log(body);
    const $ = cheerio.load(body);
    let total = $(".ca_value").eq(0).html();

    let so = $(".inner_value").eq(0).html();
    let our = $(".inner_value").eq(1).html();
    let diff = $(".inner_value").eq(2).html();

    let haesum = $(".ca_value").eq(2).html();
    let haesumday = $(".txt_ntc").eq(0).html();

    let jungsum = $(".ca_value").eq(4).html();
    let jungsumday = $(".txt_ntc").eq(1).html();

    let diesum = $(".ca_value").eq(6).html();
    let diesumday = $(".txt_ntc").eq(2).html();

    console.log(`누적 : ${total}`);
    console.log(`소계 : ${so}`);
    console.log(`국내발생 : ${our}`);
    console.log(`해외유입 : ${diff}`);
    console.log(`격리해제 누적 : ${haesum}`);
    console.log(`격리해제 전일 대비 : ${haesumday}`);
    console.log(`격리중 누적 : ${jungsum}`);
    console.log(`격리중 전일 대비 : ${jungsumday}`);
    console.log(`사망 누적 : ${diesum}`);
    console.log(`사망 전일 대비 : ${diesumday}`);
});

// let html = `
// <div class="abc">ㅁㅈㅁㅈㄴㅇ</div>
// <div class="gondr">ssss</div>
// <div class= "cccc">qwe</div>
// `

// let $ = cheerio.load(html);

// const msg = $(".gondr").html();

// console.log(msg);

//document = HTML 문서를 해석해서 DOM 형태로 트리구조화 시켜놓은것을 담고 있는 객체 

//노드는 브라우저라는 플랫폼을 벗어나서 
// 컴퓨터 어디든 JS실행시킬 수 있는 환경을 만들어준거.