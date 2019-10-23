let money;

let start = function() {
    do {
        money = +prompt('Ваш месячный доход?','30000');
    } while (isNaN(money) || money === null || money === '' || money === 0);
};

start();

let income = 'фриланс', 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','машина, дача,'), 
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    mission = 1000000, 
    period = 12,
    Expenses01,
    Expenses02;
//     cash01;
// do {
//     cash01 = +prompt('Во сколько это обойдется?', '10000');
// } while (isNaN(parseFloat(cash01)) && !isFinite(cash01));

    
//     cash02;
// do {
//     cash02 = +prompt('Во сколько это обойдется?', '10000');
// } while (isNaN(parseFloat(cash02)) && !isFinite(cash02));

let getExpensesMonth = function() {
    let sum1,
        sum2;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            Expenses01 = prompt('Введите обязательную статью расходов:','Машина, дача,');

            do {
                sum1 = +prompt('Во сколько это обойдется?', '10000');
            } while (isNaN(sum1) || sum1 === null || sum1 === '' || sum1 === 0);

        }
        if (i === 1) {
            Expenses02 = prompt('Введите обязательную статью расходов:','Квартплата');

            do {
                sum2 = +prompt('Во сколько это обойдется?', '10000');
            } while (isNaN(sum2) || sum2 === null || sum2 === '' || sum2 === 0);
            
        }
        
    }

    return sum1 + sum2;
};

let expensesMonth = getExpensesMonth();




// let budgetMonth = money - (cash01 + cash02),
let budgetDay = +Math.floor((money - expensesMonth) / 30);


let showTypeOf = function(data) {
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


// console.log('Цель будет достигнута через: ' + Math.ceil(mission / budgetMonth) + ' месяцев');


let getStatusIncome = function() {
    if (budgetDay >= 800) {
        return ('Высокий уровень дохода');
    } else if (budgetDay >= 300 && budgetDay < 800) {
        return ('Средний уровень дохода');
    } else if (budgetDay >= 0 && budgetDay < 300) {
        return ('Низкий уровень дохода');
    } else if (budgetDay < 0) {
        return ('Что то пошло не так');
    }
};

console.log(getStatusIncome());


function  getAccumulatedMonth() {
    return money - expensesMonth;
}

let accumulatedMonth = getAccumulatedMonth();

console.log('Накопления за период: ' + accumulatedMonth + ' рублей');

function getTargetMonth() {
    return Math.floor(mission / accumulatedMonth);
}

if (getTargetMonth() < 0) {
    console.log('Цель не будет достигнута!');
} else {
    console.log('Цель будет достигнута через ' + Math.ceil(getTargetMonth()) + ' месяцев');
}
