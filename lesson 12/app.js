const http = require('http');
http.createServer((request, response) =>
    { 
        console.log('Url: ' + request.url);
        console.log('Тип запроса: ' + request.method);
        console.log('User-Agent: ' + request.headers['user-agent']);
        console.log('Все заголовки');
        console.log(request.headers);

        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head>');
        response.write('<title>Hello Node.js</title>');
        response.write('<meta charset="utf-8" />');
        response.write('</head>');
        response.write('<body><h2>Привет ТОПОЛЬ-М</h2></body>');
        response.write('</html>');

        if (request.url === '/home' || request.url === '/') {
            response.write('<h2>Home</h2>');
        } else if (request.url == '/about') {
            response.write('<h2>About</h2>');
        } else if (request.url == '/contact') {
            response.write('<h2>Contacts</h2>');
        } else if (request.url == '/newpage') {
            response.write('New address');
        } else {
            response.write('<h2>Not found</h2>');
            response.statusCode = 404;
        }
        
        response.end('Добро пожаловать!') 
    }).listen(3000);