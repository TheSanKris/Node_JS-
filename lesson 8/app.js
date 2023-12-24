const fs = require('fs');

fs.readFile('tmp.txt', 'utf8', (error, data) =>{
    console.log('Асинхронное чтение файла');
    if (error) throw error; 
    console.log(data); 
});

console.log('Синхронное чтение файла');
let fileContent = fs.readFileSync('tmp.txt', 'utf8');
console.log(fileContent);

//Перезапись

fs.writeFile('tmp.txt', ' За дыню!', (error) => {
    if (error) throw error;
    console.log('Асинхронная запись файла завершена. Содержимое файла: ');
    let data = fs.readFileSync('tmp.txt', 'utf8');
    console.log(data);
});

fs.writeFileSync('tmp.txt', ' За дыню!', (error) => {
    if (error) throw error;
    console.log('Асинхронная запись файла завершена. Содержимое файла:');
    let data = fs.readFileSync('tmp.txt', 'utf8');
    console.log(data);
});

//Добавление

fs.appendFileSync('tmp.txt', ' Мимимишки!');

fs.appendFile('tmp.txt', ' Слово пацана!', function (error) {
    if (error) throw error;

    console.log('Запись файла завершена. Содержимое файла: ');
    let data = fs.readFileSync('tmp.txt', 'utf8');
    console.log(data); 
});

//Удаление

fs.unlinkSync('tmp.txt');

fs.unlink('tmp.txt', (err) => {
    if (err) console.log(err);
    else console.log('tmp.txt удалён');
});