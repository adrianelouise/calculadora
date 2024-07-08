const prompt = require ('prompt-sync')({sigint: true})

let num1 = parseFloat(prompt('Digite o primeiro numero '))
let num2 = parseFloat(prompt('Digite o segundo numero '))
let operador = prompt('Digite a operação que deseja (+,-,/,x,%) ')
let resultado;

if (isNaN(num1) || isNaN(num2)){
    throw new Error ("Você precisa digitar números!")
}

const operadorValido = [ '+', '-', '*', '/', '%']
if(!operadorValido.includes(operador)){
    throw new Error ("Operação inválida! Digite uma operação válida.")
}

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







