import {
    firstNumberInput, secondNumberInput, operatorInput, calculateButton,
    simpleCalculatorSuccess, simpleCalculatorAlert, simpleCalculatorResult,
    playSuccessSound, playErrorSound, playCalculateSound
} from './_global_variables.js';


function playAudio(element) {
    element.play();
}

function getValue(element) {

    let elementValue = element.value;
    return elementValue;
}

function addActiveClass({ element, className }) {
    element.classList.add(className);
}

function addMessage({ element, result }) {
    element.innerHTML = `${result}`;
}

function showSuccessInfo() {

    let activeSuccess = {
        element: simpleCalculatorSuccess,
        className: 'active'
    };

    playAudio(playSuccessSound);

    addActiveClass(activeSuccess);
}

function showErrorInfo() {

    let activeAlert = {
        element: simpleCalculatorAlert,
        className: 'active'
    };

    playAudio(playErrorSound);

    addActiveClass(activeAlert);
}

function hideInfo({ element, className, seconds }) {
    setTimeout(function () {
        element.classList.remove(className);
    }, seconds);
}

function validateInputs({ firstNumberValue, secondNumberValue, operatorValue }) {
    if (firstNumberValue.length !== 0 && secondNumberValue.length !== 0 && operatorValue.length !== 0) {
        let hideInfoObject = {
            element: simpleCalculatorSuccess,
            className: 'active',
            seconds: 1777
        };

        showSuccessInfo();

        hideInfo(hideInfoObject);
    }
    else {
        let hideInfoObject = {
            element: simpleCalculatorAlert,
            className: 'active',
            seconds: 1555
        };

        showErrorInfo();

        hideInfo(hideInfoObject);
    }
}

function Calculate({ firstNumberValue, secondNumberValue, operatorValue }) {
    switch (operatorValue) {
        case '+':
            return firstNumberValue + secondNumberValue;
        case '-':
            return firstNumberValue - secondNumberValue;
        case '*':
            return firstNumberValue * secondNumberValue;
        case '/':
            return firstNumberValue / secondNumberValue;
    }
}

calculateButton.addEventListener('click', function () {

    let inputsObject = {
        firstNumberValue: Number(getValue(firstNumberInput)),
        secondNumberValue: Number(getValue(secondNumberInput)),
        operatorValue: getValue(operatorInput)
    },
        messageObject = {
            element: simpleCalculatorResult,
            result: Calculate(inputsObject)
        };

    validateInputs(inputsObject);

    addMessage(messageObject);
});