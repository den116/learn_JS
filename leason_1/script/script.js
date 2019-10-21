let money = +prompt('Ваш месячный доход?',''),
    income = 'такси', 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'), 
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    mission = 1000000, 
    period = 12,
    monthlyExpenses01 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    cash01 = +prompt('Во сколько это обойдется?'),
    monthlyExpenses02 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    cash02 = +prompt('Во сколько это обойдется?'),
    budgetMonth = money - (cash01 + cash02),
    budgetDay = +Math.floor(budgetMonth / 30);

// console.log('Тип данных "money":' + typeof money);
// console.log('Тип данных "income":' + typeof income);
// console.log('Тип данных "deposit":' + typeof deposit);
// console.log('Длина строки "income":' + income.length + ' символов');
// console.log('Период ' + period + ' месяцев' );
// console.log('Цель заработать ' + mission + ' рублей');


console.log(addExpenses.toLowerCase().split(', '));

console.log('Тип данных "money":' + typeof money);
console.log('Тип данных "income":' + typeof income);
console.log('Тип данных "deposit":' + typeof deposit);
console.log('Доход за месяц: ' + budgetMonth);
console.log('Цель будет достигнута через: ' + Math.ceil(mission / budgetMonth) + ' месяцев');
console.log('Дневной бюджет:' + budgetDay);

if (budgetDay >= 800) {
    console.log('Высокий уровень дохода');
} else if (budgetDay > 300 && budgetDay < 800) {
    console.log('Средний уровень дохода');
} else if (budgetDay >= 0 && budgetDay < 300) {
    console.log('Низкий уровень дохода');
} else if (budgetDay < 0) {
    console.log('Что то пошло не так');
}


// console.log('Остаток от деления:' + (money % 30));
 