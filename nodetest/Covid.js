const cheerio = require('cheerio');
const request = require('request');
String.prototype.toNumber = function () {
    return parseInt(this.split("").filter(x => x != " " && x != ",").join(""));
}
function getCovidData(){
    const url = "http://ncov.mohw.go.kr/bdBoardList_Real.do";
// 2020-12-23
    return new Promise( (resolve, reject)=>{
        request(url, (err, res, body)=>{
            const $ = cheerio.load(body);
            let total = $(".ca_value").eq(0).html().toNumber();
            let covid = $(".inner_value").eq(0).html().toNumber();
            let covid_d = $(".inner_value").eq(1).html().toNumber();
            let covid_o = $(".inner_value").eq(2).html().toNumber();
            
            let freeCnt = $(".ca_value").eq(2).html().toNumber();
            let freeCnt_compare = $(".txt_ntc").eq(0).html().toNumber();
    
            let inPrison = $(".ca_value").eq(4).html().toNumber();
            let inPrison_compare = $(".txt_ntc").eq(1).html().toNumber();
    
            let death = $(".ca_value").eq(6).html().toNumber();
            let death_compare = $(".txt_ntc").eq(2).html().toNumber();
            
            let year = new Date();
            year = year.getFullYear();
            let month = $(".t_date").eq(0).html().split("").filter(x =>  x != "." && x != " ").splice(1, 2).join("");
            let date = $(".t_date").eq(0).html().split("").filter(x =>  x != "." && x != " ").splice(3, 2).join("");
            let fullDate = year + "-" + month + "-" + date; //년월일
            resolve({total,covid,covid_d,covid_o,freeCnt,freeCnt_compare,inPrison,inPrison_compare,death,death_compare,fullDate});
        });
    });
}
module.exports.getCovidData = getCovidData;

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
// console.log(`누적 : ${total}`);
// console.log(`소계 : ${so}`);
// console.log(`국내발생 : ${our}`);
// console.log(`해외유입 : ${diff}`);
// console.log(`격리해제 누적 : ${haesum}`);
// console.log(`격리해제 전일 대비 : ${haesumday}`);
// console.log(`격리중 누적 : ${jungsum}`);
// console.log(`격리중 전일 대비 : ${jungsumday}`);
// console.log(`사망 누적 : ${diesum}`);
// console.log(`사망 전일 대비 : ${diesumday}`);