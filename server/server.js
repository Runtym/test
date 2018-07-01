const express = require('express');
const path = require('path');
const app = express();
const head = require('./conf/conf');
app.use(express.static(__dirname + '/../dist/ang-boot-app'));

app.use(head.head);

app.get('/api/companies',function(req,res,next){
    let result = getCompanies();
    res.json(result);
});
function getCompanies(){
    return [
        {name:'Samsung',year:1931,address:'Seoul'},
        {name:'Hyundai',year:1940,address:'Busan'},
        {name:'LG',year:1988,address:'Kyungkido'}
    ];
}
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
app.get('/api/users',function(req,res,next){
    res.json(getUsers());
})
app.get('/*', head.html);
var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
    console.log("Listening on Port 3000");
});