var express = require('express');
var app = express();

//req 응답을받음 , res 응답을보냄
app.get('/',function(req, res){
    res.send('인터넷 주소창의 / 디렉토리에 반응함');
});

app.listen(8080, function(){
    console.log('localhost:8080/라고 치면 get을 통한 요청이 출력된다.')
});

