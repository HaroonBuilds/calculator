function addition(x,y) {
    return z + y;

}

function subtraction(x,y) {
    return x - y;
}

function multiplication(x,y) {
    return x * y;

}

function division(x,y) {
    return x / y;
}

function operate(x,operator,y) {
    if(operator == "+") {
        return addition(x,y);
    }
    else if(operator == "-") {
        return subtraction(x,y);
    }
    else if(operator == "*") {
        return multiplication(x,y);
    }
    else if(operator == "/") {
        return division(x,y);
    }
    
}

console.log(operate(12,"+",12));




