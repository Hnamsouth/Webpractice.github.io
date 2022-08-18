var http = require('http');
var url = require('url');
var fs = require('fs');
// module for working with file uploads : Formidable Module:' npm install formidable' to use
var mysql = require('mysql');
var formidable = require('formidable');

http.createServer((req, res) => {
    //http://localhost:8080/summer.html
    var q = url.parse(req.url, true);
    /* 
    Url {
    protocol: null,
    slashes: null,
    auth: null,
    host: null,
    port: null,
    hostname: null,
    hash: null,
    search: null,
    query: [Object: null prototype] {},
    pathname: '/winter.html',
    path: '/winter.html',
    href: '/winter.html'
}
    */
    console.log(q) // = /winter.html phải thêm . để kết nói đến thư mục winter.html
    var filename = "." + q.pathname;
    // like fs.readFile('./winter.html'...
    // fs.readFile(filename, (error, data) => {
    //     if (error) {
    //         res.writeHead(404, { 'Content-Type': 'text/html' });
    //         return res.end("404 not found");
    //     }
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(data);
    //     res.end();
    // })
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            var oldpath = files.filetoupload.fildpath;
            console.log(oldpath);
            res.write('file uploaded');
            res.end();
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }


}).listen(8080);
// 
var rs = fs.createReadStream('./ms2.txt');
rs.on('open', () => {
    console.log("file open")
})

// Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.
var events = require('events');
//  tất cả các thuộc tính và phương thức sự kiện là một thể hiện của một đối tượng EventEmitter. Để có thể truy cập các thuộc tính và phương thức này, hãy tạo một đối tượng EventEmitter:
var eventEmitter = new events.EventEmitter();

// create an event handler
var myEventhandler = function() {
        console.log('hello nam dz');
    }
    // Assign the event handler to an event:
eventEmitter.on('sayhello', myEventhandler);

// fire the 'sayhello' event
eventEmitter.emit('sayhello');