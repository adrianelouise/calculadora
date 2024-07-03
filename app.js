const prompt = require ('prompt-sync')({sigint: true})

let num1 = parseFloat(prompt('digite o primeiro numero'))
let num2 = parseFloat(prompt('digite o segundo numero'))
let operador = prompt('digite a operação que deseja(+,-,/,x,%')
let resultado;

switch (operador){
    case '+' :
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        resultado = num1 / num2;
    case'%':
    resultado = num1 + num2 /100  
        break;
    default:
        console.log('operador invalido')
        break;
}
                
        console.log(`O resultado da operação ${num1} ${operador} ${num2} é ${resultado}`)







