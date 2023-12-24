const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {}).listen(
    3000
);

let writeableStream = fs.createWriteStream('tmp.txt');
writeableStream.write('Привет мир!');
writeableStream.write('Продолжение записи \n');
writeableStream.end('Завершение записи');
let readableStream = fs.createReadStream('tmp.txt','utf8');

readableStream.on('data', (chunk) => {
    console.log(chunk);
});

readableStream.on('data', (chunk) => {
    console.log(chunk);
});