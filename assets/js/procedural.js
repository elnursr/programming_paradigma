import {
    firstNumberInput, secondNumberInput, operatorInput, calculateButton,
    simpleCalculatorSuccess, simpleCalculatorAlert, simpleCalculatorResult,
    playSuccessSound, playErrorSound, playCalculateSound
} from './_global_variables.js';


calculateButton.addEventListener('click', function (e) {
    e.preventDefault();

    // playCalculateSound.play();

    let firstNumberInputValue = Number(firstNumberInput.value),
        secondNumberInputValue = Number(secondNumberInput.value),
        operatorInputValue = operatorInput.value,
        result = '';

    switch (operatorInputValue) {
        case '+':
            result = firstNumberInputValue + secondNumberInputValue;
            break;
        case '-':
            result = firstNumberInputValue - secondNumberInputValue;
            break;
        case '*':
            result = firstNumberInputValue * secondNumberInputValue;
            break;
        case '/':
            result = firstNumberInputValue / secondNumberInputValue;
            break;
    }

    if (firstNumberInputValue.length !== 0 && secondNumberInputValue.length !== 0 && operatorInputValue.length !== 0) {
        playSuccessSound.play();
        simpleCalculatorSuccess.classList.add('active');
        simpleCalculatorResult.innerHTML = `${result}`;
        setTimeout(function () {
            simpleCalculatorSuccess.classList.remove('active');
        }, 1777);
    }
    else {
        playErrorSound.play();
        simpleCalculatorAlert.classList.add('active');
        setTimeout(function () {
            simpleCalculatorAlert.classList.remove('active');
        }, 1555);
    }
});