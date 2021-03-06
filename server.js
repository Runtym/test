const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/ang-boot-app'));

app.use(function(req,res,next){
	res.header('X-Frame-Options','SAMEORIGIN');
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers','X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});
app.get('/api/list',function(req,res,next){
    let type = req.query.type;
    let list = [];
    if(type==='user'){
        list = getUsers();
    }else if(type==='animal'){
        list = getAnimals();
    }else if(type==='computer'){
        list = getComputers();
    }
    let result = {};
    result[type] = list;
    res.json(result);
});
function getUsers(){
    return [
        {name:'Test1', age:3},
        {name:'Test2', age:13},
        {name:'Test3', age:32},
        {name:'Test4', age:33}
    ];
}
function getAnimals(){
    return [
        {name:'Cat', age:3},
        {name:'Dog', age:13},
        {name:'Lion', age:32},
        {name:'Tiger', age:33}
    ];
}
function getComputers(){
    return [
        {name:'Laptop', age:3},
        {name:'Desktop', age:13},
        {name:'Tablet', age:32}
    ];
}
app.get('/test',function(req,res,next){
    res.write('test!!');
    res.end();
});

app.get('/api/login',function(req,res,next){
    let id = req.query.id;
    let pwd = req.query.pwd;
    let result = {isLogin:false};
    if(id=='test'){
        if(pwd=='test'){
            result = {isLogin:true};
        }
    }
    res.json(result);
});
//http://localhost:3000/api/users?name=test&num=1
app.get('/api/users',function(req,res,next){
    let userList = [
        {name:'Test1', age:3},
        {name:'Test2', age:13},
        {name:'Test3', age:32},
        {name:'Test4', age:33},
    ];
    res.json(userList);
})
app.get('/*', function(req,res,next) {
    console.log(req.method);
    res.sendFile(path.join(__dirname+'/dist/ang-boot-app/index.html'));
    next();
});

var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
    console.log("Listening on Port 3000");
});