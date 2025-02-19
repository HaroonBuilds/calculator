let firstNumber = null;
let secondNumber = null;
let currentNumber = "";
let operator;
let isNewNumber = false;


const buttons = document.querySelectorAll(".button-container button");
const display = document.querySelector("#display");
buttons.forEach(function (button) {
    button.addEventListener("click", function () { 
        let operators = ["+","-","*","/","="];
        if(!operators.includes(button.textContent)) {
            if(isNewNumber){
                currentNumber = "";
                isNewNumber = false;
            }
            currentNumber += button.textContent;
            display.textContent = currentNumber;
        }

        else if(operators.includes(button.textContent)){
            if(button.textContent != "=") {
                if(firstNumber == null) {
                      firstNumber = parseFloat(currentNumber); 
                }

                isNewNumber = true;
                operator = button.textContent;
                currentNumber = "";
            }
            else{
                
                if(firstNumber !== null && currentNumber !== "" && operator) {
                    secondNumber = parseFloat(currentNumber);
                    let result = operate(firstNumber,operator,secondNumber);
                    display.textContent = result;
                }

                currentNumber = "";
                firstNumber = null;
                secondNumber = null;
                operator = null;
                

            }
        }
        if(button.textContent == "AC") {
            firstNumber = null;
            secondNumber = null;
            currentNumber = "";
            operator = null;
            display.textContent = "0";
        }
     })
     

})


function operate(firstNumber,operater,secondNumber) {
    switch(operater) {
        case "+":
            return addition(firstNumber,secondNumber);
        case "-":
            return subtraction(firstNumber,secondNumber);
        case "*":
            return multiplication(firstNumber,secondNumber);
        case "/":
            return division(firstNumber,secondNumber);
    }

}

// arithmatics functions
function addition(firstNumber,secondNumber) {
    return firstNumber + secondNumber;
}

function subtraction(firstNumber,secondNumber) {
    return firstNumber - secondNumber;
}

function multiplication(firstNumber,secondNumber) {
    return firstNumber * secondNumber;
}

function division(firstNumber,secondNumber) {
    if(firstNumber == 0 || secondNumber == 0) {
        return "zero can't be divided by any number";
    }
    else{
        return firstNumber / secondNumber;
    }
}



