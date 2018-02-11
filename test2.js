/*
//test buffer
var buffer1=Buffer.from('菜鸟教程');
console.log(buffer1.toString());
var buffer2=Buffer.from('hello world');
console.log(buffer2.toString());
var buffer3=Buffer.concat([buffer1,buffer2]);
console.log("buffer3内容为："+buffer3.toString());*/



/*
buf = Buffer.alloc(256);
len = buf.write("www.runoob.com");
console.log("写入字节数："+len);
content=buf.toString();
console.log("写入的内容为："+content);

buf1 = Buffer.alloc(6);
len1 = buf1.write("hello_world");
console.log("写入字节数："+len1);
content1=buf1.toString();
console.log("写入的内容为："+content1);
var json = buf1.toJSON(buf1);
console.log(json);
*/



/*var buf1=Buffer.from('abcdefghijkl');
var buf2=Buffer.from('RUNOOB');
console.log(buf2.length);
//buf2.copy(buf1,2);
buf2.copy(buf1,4,3,6);
console.log(buf1.toString());*/




/*从流中读取数据示例*/
/*var fs=require("fs");
var data='';
//创建可读流
var readerStream=fs.createReadStream('input.txt');
//设置编码为UTF-8
readerStream.setEncoding('UTF8');
//处理流事件
//分块传输函数chunk
readerStream.on('data',function(chunk){
    data += chunk;
});

readerStream.on('end',function(){
    console.log(data);
});

readerStream.on('error',function(err){
    console.log(err.stack);
});
console.log("程序执行完毕");*/





/*写入流示例*/
/*var fs = require("fs");
var data = '菜鸟教程官网地址：www.runoob.com';

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("程序执行完毕");*/





/*管道流示例*/
/*
var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");*/



/*
var fs = require("fs");

fs.readFile('input1.txt', function (err, data) {
    if (err){
        //console.log(err.stack);
        console.error(err);
        return;
    }
    console.log(data.toString());
});
console.log("程序执行完毕");
*/



/*
console.log( __filename );*/




/*
console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");
//
// 执行一些代码
//
//console.log("testetstwetewata3wtttwa4ya4wya4ya3ts");
console.timeEnd('获取数据');

console.info("程序执行完毕。")*/





/*var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);*/





/*var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});

    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站 URL：" + params.url);
    res.end();

}).listen(3000);*/





/*var http = require('http');
var querystring = require('querystring');

var postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function (req, res) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        // 解析参数
        body = querystring.parse(body);
        // 设置响应头部信息及编码
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

        if(body.name && body.url) { // 输出提交的数据
            res.write("网站名：" + body.name);
            res.write("<br>");
            res.write("网站 URL：" + body.url);
        } else {  // 输出表单
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);*/




var http = require('http');
var fs = require('fs');
var url = require('url');


// 创建服务器
http.createServer( function (request, response) {
    // 解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;

    // 输出请求的文件名
    console.log("Request for " + pathname + " received.");

    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // HTTP 状态码: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, {'Content-Type': 'text/html'});
        }else{
            // HTTP 状态码: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, {'Content-Type': 'text/html'});

            // 响应文件内容
            response.write(data.toString());
        }
        //  发送响应数据
        response.end();
    });
}).listen(8080);

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8080/');


