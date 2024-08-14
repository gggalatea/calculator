"use strict";

let num1 = 0;
let operator = null;
let num2 = null;
let displayValue = "";
let isNum1Answer = true;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "×":
            return multiply(num1, num2);
        case "÷":
            return divide(num1, num2);
    }
}

const displayText = document.querySelector(".display-text");

function updateDisplayText() {
    if (num1 === null) {
        displayText.textContent = `${displayValue}`;
    } else if (operator === null) {
        displayText.textContent = `${num1}`;
    } else {
        displayText.textContent = `${num1} ${operator} ${displayValue}`;
    }
}

const btnsContainer = document.querySelector(".btns-container");
btnsContainer.addEventListener("click", updateOperation);

function updateOperation() {
}