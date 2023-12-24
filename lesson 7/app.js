function display(data, callback) {
    var randInt = Math.random() * (10 - 1) + 1;
    var err =
        randInt > 5 ? new Error('Ошибка выполнения. randInt больше 5') : null;

    setTimeout(() => {
        callback(err, data);
    }, 0);
}

console.log('Начало работы');

display('Обработка данных...', (err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log('Завершение работы');

// Второй пример сразу тут
console.log('');
console.log('--------------------');
console.log('');


function displaySync(callback) {
    callback();
}

console.log('Начало работы');

setTimeout(() => {
    console.log('timeout 500');
}, 500);

setTimeout(() => {
    console.log('timeout 100');
}, 100);

displaySync(() => {
    console.log('without timeout');
});
console.log('Завершение работы');