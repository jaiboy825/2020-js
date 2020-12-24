const {getCovidData} = require('./Covid');
const express = require('express'); //설치한 express를 가져온다
const http = require('http');
const path = require('path');

//익스프레스를 이용하여 웹서버 만들기
const app = express();
const server = http.createServer(app);

let data = undefined;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//정적파일은 public 폴더를 참조하도록 코드를 작성한다
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    console.time("render");
    if(data === undefined){
        
        getCovidData().then(d => {
            res.render('main', d);
            //여기서 db에 넣는거
            data = d;
            console.timeEnd("render");
        });
    }else{
        res.render('main', data);
        console.timeEnd("render");
    }
});

server.listen(54000, ()=>{
    console.log("서버가 54000번 포트에서 동작중입니다.");
});