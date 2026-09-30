 # SpendWise Dashboard

## Week 6: JavaScript Foundation

SpendWise is a personal budgeting dashboard that helps users understand their monthly budget, expenses, and remaining balance.

For Week 6, JavaScript was added to transform the dashboard from a purely visual interface into an application that can process budgeting data.

## JavaScript Concepts Implemented

### Variables

The project uses JavaScript variables to store budgeting information such as:

* Monthly budget
* Total expenses
* Remaining balance
* Expense data

The application uses both `let` and `const`.

### Data Types

The project uses:

* Numbers for financial amounts
* Strings for expense categories
* Arrays for storing multiple expenses
* Objects for storing individual expense information

Example:

```javascript
const expenses = [
    { category: "Food", amount: 8500 },
    { category: "Transport", amount: 5200 }
];
```

## User Input

The application uses JavaScript `prompt()` to collect the user's monthly budget.

The input is converted from a string to a number using:

```javascript
Number(userBudget)
```

This allows the value to be used in calculations.

## Budget Calculations

SpendWise calculates the total expenses and remaining balance.

The remaining balance is calculated using:

```text
Remaining Balance = Monthly Budget - Total Expenses
```

For example:

```text
Monthly Budget: KSh 50,000
Total Expenses: KSh 47,000
Remaining Balance: KSh 3,000
```

## Functions

Reusable functions organize the application logic.

### `calculateTotalExpenses()`

Calculates the total amount of all expenses.

### `calculateRemainingBalance()`

Calculates the remaining amount after expenses are subtracted from the budget.

Functions make the code easier to understand, maintain, and reuse.

## Console Output

The calculated results are displayed in the browser Developer Tools Console.

The console displays:

* Monthly Budget
* Total Expenses
* Remaining Balance

## Technologies Used

* HTML5
* CSS3
* JavaScript
* CSS Grid
* Flexbox
* CSS Custom Properties
* JavaScript Functions
* JavaScript Arrays and Objects

## Project Files

* `index.html` - Dashboard structure
* `style.css` - Dashboard styling and responsive layout
* `script.js` - Budget data, user input, calculations, and functions
* `README.md` - Project documentation

## Author

Mohamed Aden Abdullahi
