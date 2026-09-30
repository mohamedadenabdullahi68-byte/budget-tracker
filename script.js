 // ========================================
// SpendWise - JavaScript Foundation
// ========================================

// Application data
let monthlyBudget = 50000;
let totalExpenses = 0;

const expenses = [
    { category: "Food", amount: 8500 },
    { category: "Transport", amount: 5200 },
    { category: "Rent", amount: 15000 },
    { category: "Entertainment", amount: 3500 },
    { category: "Savings", amount: 10000 },
    { category: "Utilities", amount: 4800 }
];


// ========================================
// Reusable Functions
// ========================================

// Calculate total expenses
function calculateTotalExpenses(expenseList) {
    let total = 0;

    expenseList.forEach(function(expense) {
        total += expense.amount;
    });

    return total;
}

// Calculate remaining balance
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}


// ========================================
// Collect User Input
// ========================================

const userBudget = prompt(
    "Enter your monthly budget in KSh:",
    monthlyBudget
);

if (userBudget !== null && userBudget !== "") {
    monthlyBudget = Number(userBudget);
}


// ========================================
// Perform Calculations
// ========================================

totalExpenses = calculateTotalExpenses(expenses);

const remainingBalance = calculateRemainingBalance(
    monthlyBudget,
    totalExpenses
);


// ========================================
// Display Results in Console
// ========================================

console.log("========== SpendWise Budget Report ==========");
console.log("Monthly Budget: KSh " + monthlyBudget);
console.log("Total Expenses: KSh " + totalExpenses);
console.log("Remaining Balance: KSh " + remainingBalance);
console.log("=============================================");