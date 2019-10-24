let a,
    b; 
    
do {
    a = prompt('Введите число');
} while (isNaN(a) || a === null|| a === '' || a === 0);

do {
    b = prompt('Введите следующее число');
} while (isNaN(b) || b === null|| b === '' || b === 0);

let getIncome = function() {
    if (a > b) {
        return ('первое число больше второго');
    } else if (a < b) {
        return ('второе число больше первого');
    } else if (a === b) {
        return ('числа равны');
    }
};

alert(getIncome());

