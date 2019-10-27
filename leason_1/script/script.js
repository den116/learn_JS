'use strict';
let money,
    start = function() {
    do {
        money = +prompt('Ваш месячный доход?','30000');
    } while (isNaN(money) || money === null || money === '' || money === 0);
};

start();

let appDate = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 1000000,
    period: 12,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function() {
        for (let key in appDate.expenses) {
            appDate.expensesMonth += appDate.expenses[key];
        }
        return appDate.expensesMonth;
    },
    getStatusIncome: function() {
        if (appDate.budgetDay >= 800) {
            return ('Высокий уровень дохода');
        } else if (appDate.budgetDay >= 300) {
            return ('Средний уровень дохода');
        } else if (appDate.budgetDay >= 0) {
            return ('Низкий уровень дохода');
        } else if (appDate.budgetDay < 0) {
            return ('Что то пошло не так');
        }
    },
    getBudget: function() {
        appDate.budgetMonth = money - appDate.expensesMonth;
        appDate.budgetDay = +Math.floor((appDate.budgetMonth) / 30);
    },
    getTargetMonth: function() {
        if (appDate.getTargetMonth() < 0) {
            console.log('Цель не будет достигнута!');
        } else {
            console.log('Цель будет достигнута через ' + Math.ceil(appDate.getTargetMonth()) + ' месяцев');
        }
        
        return Math.floor(appDate.mission / appDate.budgetMonth);
    },
    
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','машина, дача');
            appDate.addExpenses = addExpenses.toLowerCase().split(', ');
            appDate.deposit = confirm('Есть ли у вас депозит в банке?');
            
            for (let i = 0; i < 2; i++ ) {
                let q1,
                    q2;
                
                do {
                    q1 = prompt('Введите обязательную статью расходов:', 'Машина, дача' + (i + 1));
                } while (q1 === null || q1 === '');
                
                do {
                    q2 = +prompt('Во сколько это обойдется?', '10000');
                } while (isNaN(q2) || q2 === null || q2 === '' || q2 === 0);
                
                appDate.expenses[q1] = q2;
            }
    }     
};
    
appDate.asking(); 
appDate.getExpensesMonth();
appDate.getBudget();   
console.log('Расходы за месяц: ' + appDate.getExpensesMonth() + ' рублей');
console.log('Цель будет достигнута через: ' + Math.ceil(appDate.mission / appDate.budgetMonth) + ' месяцев');
console.log(appDate.getStatusIncome());

for (let key in appDate) {
    console.log('Наша программа включает в себя данные: ' + key + ' : ' + appDate[key]);
}



