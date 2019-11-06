'Use strict';

let start = document.querySelector('#start'),
    btnPlus = document.querySelectorAll('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    checkBox = document.querySelector('#deposit-check'),
    checkBoxItem = document.querySelector('.deposit-checkmark::after'),
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
    allInputsRight = document.querySelectorAll('.result-total'),
    allInputs = document.querySelectorAll('input[type=text]');


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

      periodSelect.addEventListener('input', this.dinamicCalcPeriod);
    },

    getReset: function() {
    
      this.income = {};
      this.addIncome = [];
      this.expenses = {};
      this.addExpenses = [];
      this.deposit = false;
      this.incomeMonth = 0;
      this.budget = 0;
      this.budgetDay = 0;
      this.budgetMonth = 0;
      this.expensesMonth = 0;
      this.percentDeposit = 0;
      this.moneyDeposit = 0;

      expensesItems.forEach(function(item) {
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length > 1) {
          item.remove();
        } 
      });      
      expensesPlus.style.display = 'block';

      incomeItems.forEach(function(item) {
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length > 1) {
          item.remove();
        } 
      });      
      incomePlus.style.display = 'block';

      allInputs = document.querySelectorAll('input[type=text]');
      for (let item of allInputs) {
        item.removeAttribute('disabled');
        item.value = '';
      }
 
      for (let item of allInputsRight) {
        item.setAttribute('disabled', 'disabled');
      }
      
      

      checkBox.checked = false;
      periodSelect.value = '1';
      
      this.getRngValue();
      this.getSalaryAmount();
      salaryAmount.addEventListener('input', this.getSalaryAmount);
      
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
      allInputs = document.querySelectorAll('input[type=text]');
      for (let item of allInputs) {
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
        this.incomeMonth += +this.income[key];
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
        if (this.deposit) {
            do {
                this.percentDeposit = +prompt ('Какой годовой процент?', '10');
            } while (isNaN(this.percentDeposit) || this.percentDeposit === null || this.percentDeposit === '' || this.percentDeposit === 0);
            do {
                this.moneyDeposit = prompt ('Какая сумма заложена?', '10000');
            } while (isNaN(this.moneyDeposit) || this.moneyDeposit === null || this.moneyDeposit === '' || this.moneyDeposit === 0);
          }
    },
 
    calcPeriod: function() {
      // return periodSelect.value;
        return this.budgetMonth * periodSelect.value;
    },

    dinamicCalcPeriod: function () {
      incomePeriodValue.value = appDate.calcPeriod();
      return incomePeriodValue.value;
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
cancelBtn.addEventListener('click', appDate.getReset.bind(appDate));
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
    
    








    

