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
    percentDeposit: 0,
    moneyDeposit: 0,
    asking: function() {
    
        if (confirm('Есть ли у вас дополнительный источник заработка?')){
            let itemIncome,
                cashIncome; 
            do {
                itemIncome = prompt ('Какой у вас дополнительный заработок?', 'таксую');
            } while (!isNaN(itemIncome) || itemIncome === null || itemIncome === '');

            do {
                cashIncome = +prompt ('Скольео в месяц вы на этом зарабатываете?', '10000');
            } while (isNaN(cashIncome) || cashIncome === null || cashIncome === '' || cashIncome === 0);

            appDate.income[itemIncome] = cashIncome;
        }

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
    },
    
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
        let a = Math.floor(appDate.mission / appDate.budgetMonth);

        if (a < 0) {
            console.log('Цель не будет достигнута!');
        } else {
            console.log('Цель будет достигнута через ' + Math.ceil(a) + ' месяцев');
        }
    },
    getInfoDeposit: function() {
        if (appDate.deposit) {
            do {
                appDate.percentDeposit = +prompt ('Какой годовой процент?', '10');
            } while (isNaN(appDate.percentDeposit) || appDate.percentDeposit === null || appDate.percentDeposit === '' || appDate.percentDeposit === 0);
            do {
                appDate.moneyDeposit = prompt ('Какая сумма заложена?', '10000');
            } while (isNaN(appDate.moneyDeposit) || appDate.moneyDeposit === null || appDate.moneyDeposit === '' || appDate.moneyDeposit === 0);
            
            
        }
    },
    calcSavedMoney: function() {
        return appDate.budgetMonth * appDate.period;
    },
    getUpperCase: function() {
        let arr = [];
        for (let i = 0; i < this.addExpenses.length; i++) {
            // console.log(this.addExpenses[i].charAt(0).toUpperCase() + this.addExpenses[i].slice(1).toLowerCase());
            let a = this.addExpenses[i].charAt(0).toUpperCase() + this.addExpenses[i].slice(1);
            arr.push(a);
            
        }
        console.log(arr.join(', '));
    }
};
    
appDate.asking(); 
appDate.getExpensesMonth();
appDate.getBudget();   
console.log('Расходы за месяц: ' + appDate.expensesMonth + ' рублей');
appDate.getTargetMonth();
console.log(appDate.getStatusIncome());
appDate.getUpperCase();

// console.log(appDate.getUpperCase());
console.log('Наша программа включает в себя данные: ');

for (let key in appDate) {
    console.log(key + ' : ' + appDate[key]);
}
    
    



