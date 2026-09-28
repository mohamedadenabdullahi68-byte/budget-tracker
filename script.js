 const form = document.getElementById("expenseForm");
const incomeForm = document.getElementById("incomeForm");
const expenseList = document.getElementById("expenseList");
const totalDisplay = document.getElementById("total");
const incomeTotalDisplay = document.getElementById("incomeTotal");
const balanceDisplay = document.getElementById("balance");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let incomes = JSON.parse(localStorage.getItem("incomes")) || [];

function displayExpenses() {
    expenseList.innerHTML = "";

    let total = 0;

    expenses.forEach(function(expense, index) {
        total += expense.amount;

        const li = document.createElement("li");
        li.textContent = `${expense.name} - KSh ${expense.amount} - ${expense.category}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            expenses.splice(index, 1);
            localStorage.setItem("expenses", JSON.stringify(expenses));
            displayExpenses();
        });

        li.appendChild(deleteButton);
        expenseList.appendChild(li);
    });

    totalDisplay.textContent = total;
    updateBalance();
}

function displayIncome() {
    let totalIncome = 0;

    incomes.forEach(function(income) {
        totalIncome += income.amount;
    });

    incomeTotalDisplay.textContent = totalIncome;
    updateBalance();
}

function updateBalance() {
    const income = Number(incomeTotalDisplay.textContent);
    const expensesTotal = Number(totalDisplay.textContent);

    balanceDisplay.textContent = income - expensesTotal;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("expenseName").value;
    const amount = Number(document.getElementById("amount").value);
    const category = document.getElementById("category").value;

    expenses.push({
        name: name,
        amount: amount,
        category: category
    });

    localStorage.setItem("expenses", JSON.stringify(expenses));

    form.reset();
    displayExpenses();
});

incomeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("incomeName").value;
    const amount = Number(document.getElementById("incomeAmount").value);

    incomes.push({
        name: name,
        amount: amount
    });

    localStorage.setItem("incomes", JSON.stringify(incomes));

    incomeForm.reset();
    displayIncome();
});

displayExpenses();
displayIncome();