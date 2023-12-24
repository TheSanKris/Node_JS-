const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    console.log(`Запрошенный адрес: ${request.url}`);
    const filePath = request.url.substr(1);
    fs.readFile(filePath, (error, data) => {
        if (error) {
            response.statusCode = 404;
            response.end("Ресурс не найден!");
        } else {
            response.end(data);
        }
    });
}).listen(3000, () => {
    console.log("Порт сервера - 3000");
});