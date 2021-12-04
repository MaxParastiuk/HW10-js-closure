function sum(x) {
    return function (y) {
        return x + y;
    }
}

const sum1 = sum(1);
console.log(sum1(2));
console.log(sum(1)(2));


for (let i = 1; i <= 10; i++) {
    /* Замена var на let. Так как для «var» не существует блочной области видимости,в переменную "i" записывается
      последнее значение с цикла. В свою очередь «let» имеет локальную видимость
     */
    setTimeout(function () {
        console.log(i);
    }, 0);
}


for (var i = 0; i < 10; i++) {
    (function () {
        let index = i;
        setTimeout(function () {
            console.log(index + 1);
        }, 0);
    })();
    // Созадть самовызывающуюся функцию, которая создает отдельное лексическое окружение на каждой итерации
}




