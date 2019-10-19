let money = 50000, 
    income = 'такси', 
    addExpenses = 'Гараж, Интернет, Кот', 
    deposit = true, 
    mission = 1000000, 
    period = 12,
    budgetDay = money / 30;

console.log('Тип данных "money":' + typeof money);
console.log('Тип данных "income":' + typeof income);
console.log('Тип данных "deposit":' + typeof deposit);
console.log('Длина строки "income":' + income.length + ' символов');
console.log('Период ' + period + ' месяцев' );
console.log('Цель заработать ' + mission + ' рублей');


console.log(addExpenses.toLowerCase().split(', '));


console.log('Дневной бюджет:' + budgetDay);
console.log('Остаток от деления:' + (money % 30));
 