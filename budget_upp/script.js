'Use strict';

let start = document.querySelector('#start'),
    btnPlus = document.querySelectorAll('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    checkBox = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),

    budgetMonthValue = document.querySelector('.budget_month-value'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value'), 
    
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeItems = document.querySelectorAll('.income-items'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),

    cancelBtn = document.querySelector('#cancel'),
    allInputsLeft = document.querySelectorAll('input[type=text]'),
    allInputs = document.querySelectorAll('input');


let appDate = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    incomeMonth: 0,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    percentDeposit: 0,
    moneyDeposit: 0,
    start: function() {

      
      // if (salaryAmount.value === '') {
      //   alert ('Ошибка, поле "Месячный доход" должно быть заполненно!');
      // } else if (isNaN(salaryAmount.value)) {
      //   alert ('Введите числовое значение!');
      //   return;
      // }

      this.budget = +salaryAmount.value;

      
      this.getExpenses();
      this.getAddExpenses();
      this.getAddIncome();
      this.getIncome();
      this.getExpensesMonth();
      this.getBudget();
      
      this.getRngValue();
      this.blockedInput();

      this.showResult();
    },

    getReset: function() {
    
      appDate.income = {};
      appDate.addIncome = [];
      appDate.expenses = {};
      appDate.addExpenses = [];
      appDate.deposit = false;
      appDate.incomeMonth = 0;
      appDate.budget = 0;
      appDate.budgetDay = 0;
      appDate.budgetMonth = 0;
      appDate.expensesMonth = 0;
      appDate.percentDeposit = 0;
      appDate.moneyDeposit = 0;

      periodSelect.value = 1;
      checkBox.value = false;

      expensesItems = document.querySelectorAll('.expenses-items');
      console.log(expensesItems.langth);      
      if (expensesItems.langth > 2) {
        expensesItems.parentNode.removeChild(expensesItems[2]);
      }
      
      incomeItems.length = 1;
      

      allInputsLeft = document.querySelectorAll('input[type=text]');
      for (let item of allInputsLeft) {
        item.removeAttribute('disabled');
      }

      for (let item of allInputs) {
        item.value = '';
      }

      appDate.getSalaryAmount();
      salaryAmount.addEventListener('input', appDate.getSalaryAmount);
      
      start.setAttribute('style', 'display: block');
      cancelBtn.setAttribute('style', 'display: none');
    },

    getSalaryAmount: function() {
      if (salaryAmount.value === '') {
        start.setAttribute('disabled', 'disabled');   
      } else {
        start.removeAttribute('disabled');
      }
    },

    getRngValue: function () {
      let periodAmount = document.querySelector('.period-amount');
      periodAmount.innerHTML = periodSelect.value;
    },

    blockedInput: function() {
      allInputsLeft = document.querySelectorAll('input[type=text]');
      for (let item of allInputsLeft) {
        item.setAttribute('disabled', 'disabled');
      }
      start.setAttribute('style', 'display: none');
      cancelBtn.setAttribute('style', 'display: block');
    },

    addExpensesBlock: function() {
      let cloneExpensesItem = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
      expensesItems = document.querySelectorAll('.expenses-items');
      if(expensesItems.length === 3) {
        expensesPlus.style.display = 'none';
      }
    },

    addIncomeBlock: function() {
      let cloneIncomeItem = incomeItems[0].cloneNode(true);
      incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
      incomeItems = document.querySelectorAll('.income-items');
      if(incomeItems.length === 3) {
        incomePlus.style.display = 'none';
      }
    },

    getExpenses: function() {
      expensesItems.forEach(function(item) {
        let itemExpenses = item.querySelector('.expenses-title').value,
            cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== '') {
          appDate.expenses[itemExpenses] = +cashExpenses;
        }
      });
    },

    getIncome: function() {
      incomeItems.forEach(function(item) {
        let itemIncome = item.querySelector('.income-title').value,
            cashIncome = item.querySelector('.income-amount').value;
        if (itemIncome !== '' && cashIncome !== '') {
          appDate.income[itemIncome] = +cashIncome;
        }  
      });
      for (let key in this.income) {
        this.incomeMonth += +appDate.income[key];
      }
    },

    showResult: function() {
      budgetMonthValue.value = this.budgetMonth;
      budgetDayValue.value = this.budgetDay;
      expensesMonthValue.value = this.expensesMonth;
      additionalExpensesValue.value = this.addExpenses.join(',');
      additionalIncomeValue.value = this.addIncome.join(',');
      targetMonthValue.value = Math.ceil(this.getTargetMonth());
      incomePeriodValue.value = this.calcPeriod();
    },

    getAddExpenses: function() {
      let addExpenses = additionalExpensesItem.value.split(',');
      addExpenses.forEach(function(item) {
        item = item.trim();
        if (addExpenses !== '') {
          appDate.addExpenses.push(item);
        }
      });
    },

    getAddIncome: function() {
      additionalIncomeItem.forEach(function(item) {
        let itemValue = item.value.trim();
        if (itemValue !== '') {
          appDate.addIncome.push(itemValue);
        }
      });
    },
    
    getExpensesMonth: function() {
        for (let key in this.expenses) {
            this.expensesMonth += +this.expenses[key];

        }
        // return appDate.expensesMonth;
    },

    getStatusIncome: function() {
        if (this.budgetDay >= 800) {
            return ('Высокий уровень дохода');
        } else if (this.budgetDay >= 300) {
            return ('Средний уровень дохода');
        } else if (this.budgetDay >= 0) {
            return ('Низкий уровень дохода');
        } else if (this.budgetDay < 0) {
            return ('Что то пошло не так');
        }
    },

    getBudget: function() {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = +Math.floor((this.budgetMonth) / 30);
    },

    getTargetMonth: function() {
        return targetAmount.value / this.budgetMonth;
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
 
    calcPeriod: function() {
      // return periodSelect.value;
        return this.budgetMonth * periodSelect.value;
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



salaryAmount.addEventListener('input', appDate.getSalaryAmount);
start.addEventListener('click', appDate.start.bind(appDate));
cancelBtn.addEventListener('click', appDate.getReset);
expensesPlus.addEventListener('click', appDate.addExpensesBlock);
incomePlus.addEventListener('click', appDate.addIncomeBlock);
periodSelect.addEventListener('input', appDate.getRngValue);
    
 
appDate.getTargetMonth();
appDate.getUpperCase();
appDate.getSalaryAmount();

// console.log(appDate.getUpperCase());
// console.log('Наша программа включает в себя данные: ');

// for (let key in appDate) {
//     console.log(key + ' : ' + appDate[key]);
// }
    
    








    

