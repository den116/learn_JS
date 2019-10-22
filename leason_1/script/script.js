let money;
do {
    money = +prompt('Ваш месячный доход?','30000');
} while (isNaN(parseFloat(money)) && !isFinite(money));
    
let income = 'такси', 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','машина, дача, телефон'), 
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    mission = 1000000, 
    period = 12,
    monthlyExpenses01 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'интернет, кварт.плата, телефон'),
    cash01;
do {
    cash01 = +prompt('Во сколько это обойдется?', '10000');
} while (isNaN(parseFloat(cash01)) && !isFinite(cash01));

let monthlyExpenses02 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'интернет, кварт.плата, телефон'),
    cash02;
do {
    cash02 = +prompt('Во сколько это обойдется?', '10000');
} while (isNaN(parseFloat(cash02)) && !isFinite(cash02));


let budgetMonth = money - (cash01 + cash02),
    budgetDay = +Math.floor(budgetMonth / 30);


let showTypeOf = function(data) {
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


// console.log('Цель будет достигнута через: ' + Math.ceil(mission / budgetMonth) + ' месяцев');


let getBudgetDay = function() {
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

console.log(getBudgetDay());


function getExpensesMonth () {
    let sum = cash01 + cash02;
        function getAccumulatedMonth() {
            return money - sum;
        }
    getAccumulatedMonth();
    return getAccumulatedMonth();
}

let accumulatedMonth = getExpensesMonth();



function getTargetMonth() {
    return Math.floor(mission / accumulatedMonth); 
}

console.log('Цель будет достигнута через ' + getTargetMonth() + ' месяцев');