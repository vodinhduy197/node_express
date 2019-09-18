var http = require('http'),
    fs = require('fs');

const PORT = 8000;
//Khởi tạo server chạy cổng 8000
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    //đọc file index.html
    fs.readFile("index.txt", "utf-8", function(err, data) {
        if (err) throw err;

        // console.log(data);
        response.write(data);
        //in ra nội dung đọc được
        response.end();
    });
    
}).listen(PORT);

console.log(`server is running at port: ${PORT}`);
