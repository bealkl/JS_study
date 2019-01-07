'use strict';

var money;
var time;

money=prompt("Your month budget","0");
time=prompt("Enter data YYYY-MM-DD","2019-01-01");

console.log("Money="+money);
console.log("Time="+time);

let  appData={budget:money, timeData:time, expenses:0, optionalExpenses:0, income:0, saving:false};

appData.expenses=prompt("Spend in this month","");
appData.optionalExpenses=prompt("How much?","");

alert("Budget for day="+(appData.budget-appData.expenses-appData.optionalExpenses)/30);