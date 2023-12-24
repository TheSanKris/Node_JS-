const fs = require('fs');
const zlib = require('zlib');

let readableStream = fs.createReadStream('tmp.txt','utf8');
let writeableStream = fs.createWriteStream('some.txt');

let writeableStreamm = fs.createWriteStream('hello.txt.gz');
let gzip = zlib.createGzip();

readableStream.pipe(gzip).pipe(writeableStream);