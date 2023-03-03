function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    return a / b;
}


function operate(a, b) {
    const operator = prompt("Choose an operator");
    
    if (operator == "add") {
        return add(a, b);
    } else if (operator == "subtract") {
        return subtract(a, b);
    } else if (operator == "multiply") {
        return multiply(a, b);
    } else if (operator == "divide") {
        return divide(a,b);
    }
    return "fail";
}

function equalsAction() {
    if (firstChoice != null && secondChoice != null) {
        if (operatorChoice == "add") {
            firstChoice = add(firstChoice, secondChoice);
            display.innerHTML = firstChoice;
            secondChoice = null;
        } else if (operatorChoice == "subtract") {
            firstChoice = subtract(firstChoice, secondChoice);
            display.innerHTML = firstChoice;
            secondChoice = null;
        } else if (operatorChoice == "multiply") {
            firstChoice = multiply(firstChoice, secondChoice);
            display.innerHTML = firstChoice;
            secondChoice = null;
        } else if (operatorChoice == "divide") {
            firstChoice = divide(firstChoice, secondChoice);
            display.innerHTML = firstChoice;
            secondChoice = null;
        }
    } else if (firstChoice != null && secondChoice == null) {
        display.innerHTML = firstChoice;
        
    } else {
        alert("Please enter two numbers");
    }
}








// Create display variable with other variables needed

var display = document.querySelector(".results-display");

var firstChoice = null;
var secondChoice = null;
var operatorChoice = null;


// Create the logic for the number chosen to appear on the display

function populateDisplay(number) {
    if (firstChoice != null && operatorChoice == null) {
        firstChoice = firstChoice + number;
        firstChoice = parseInt(firstChoice);
        display.innerHTML = firstChoice;

    } else if (firstChoice != null && operatorChoice != null && secondChoice != null) {
        secondChoice = secondChoice + number;
        secondChoice = parseInt(secondChoice);
        display.innerHTML = secondChoice;
        
    } else if (firstChoice != null && operatorChoice != null && secondChoice == null) {
        secondChoice = parseInt(number);
        display.innerHTML = secondChoice;
    } else {
    firstChoice = parseInt(number);
    display.innerHTML = firstChoice;
    }
    };


// Add event listeners for each digit button

const buttons = document.querySelectorAll('.number');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        populateDisplay(button.id);
    });
});

// Add event listeners for each operator button

const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (operatorChoice != null) {
            equalsAction();
            operatorChoice = operator.id;
        } else {
            operatorChoice = operator.id;
        }
    });
});


// When a operator is clicked, store the number currently on the display screen + the operator chosen
// Also save the operator


// Once user enters another number and hits "=", then display the result

const equalsButton = document.querySelector("#equals");

equalsButton.addEventListener('click', equalsAction);

// Create a function that clears all variables when the "C" button is hit

const clearButton = document.querySelector("#clear");

clearButton.addEventListener('click', () => {
    firstChoice = null;
    secondChoice = null;
    operatorChoice = null;
    display.innerHTML = "";
});
 







