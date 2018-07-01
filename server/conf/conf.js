const path = require('path');
var headConf = {};
headConf.head = head;
headConf.html = html;
module.exports = headConf;

function head(req,res,next){
	res.header('X-Frame-Options','SAMEORIGIN');
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers','X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
}
function html(req,res,next){
    console.log(req.method);
    res.sendFile(path.join(__dirname+'/../dist/ang-boot-app/index.html'));
    next();
}