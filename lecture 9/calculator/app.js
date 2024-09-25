class Calculator {
    // Initialize the calculator
    constructor() {
        this.screenValue = '';
        this.firstOperand = null;
        this.operator = null;
    }

    appendNumber(number) {
        this.screenValue += number;
        this.updateScreen();
    }

    chooseOperator(operator) {
        if (this.screenValue === '') return;
        this.firstOperand = parseFloat(this.screenValue);
        this.operator = operator;
        this.screenValue = '';
    }

    calculate() {
        if (this.operator === null || this.screenValue === '') return;
        const secondOperand = parseFloat(this.screenValue);
        const result = this.operate(this.firstOperand, secondOperand, this.operator);
        this.screenValue = result.toString();
        this.updateScreen();
        this.firstOperand = null;
        this.operator = null;
    }

    operate(firstOperand, secondOperand, operator) {
        switch (operator) {
            case '+':
                return firstOperand + secondOperand;
            case '-':
                return firstOperand - secondOperand;
            case '*':
                return firstOperand * secondOperand;
            case '/':
                return firstOperand / secondOperand;
            default:
                return '';
        }
    }

    clear() {
        this.screenValue = '';
        this.firstOperand = null;
        this.operator = null;
        this.updateScreen();
    }

    updateScreen() {
        const screen = document.querySelector('.calculator-screen');
        screen.value = this.screenValue;
    }
}

// Create calculator object
const calculator = new Calculator();

// Add event listeners to buttons
document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.value;
        if (!isNaN(value) || value === '.') {
            calculator.appendNumber(value);
        } else if (value === 'all-clear') {
            calculator.clear();
        } else if (value === '=') {
            calculator.calculate();
        } else {
            calculator.chooseOperator(value);
        }
    });
});