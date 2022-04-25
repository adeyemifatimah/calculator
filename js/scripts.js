
function add(number1,number2) {
    return(number1+number2)
}

function subtract(number1,number2) {
    return(number1-number2)
}

function multiply(number1,number2) {
    return(number1*number2)
}

function division(number1,number2) {
    return(number1/number2)
}


const number1 = parseInt(prompt("Enter a Number:"));
const number2 =parseInt(prompt("Enter another Number:"));

alert("the result of add is " + add(number1,number2));
alert("the result of subtract is " + subtract(number1,number2));
alert("the result of multiply is " + multiply(number1,number2));
alert("the result of division is " + division(number1,number2));

