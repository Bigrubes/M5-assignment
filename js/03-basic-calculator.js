// ADD A FUNCTION CALLED CALCULATE
const calculate = (num1,num2, operation, equation) => {


// COLLECT FIRST NUMBER FROM USER
num1 = prompt("Enter first number in calculation")
console.log(num1)
// COLLECT SECOND NUMBER FROM USER
num2 = prompt("Enter second number in calculation")
console.log(num2)
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
// operation = prompt("Enter an operation (+,-,*,/")
// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
do{
    operation = prompt('You must input "+", "-", "*" or "/"')

}while(operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/")

// if (operation==="*"){
//     alert(num1*num2)
// }
// else if(operation==="-"){
//     alert(num1 - num2)
// }
// else if(operation==="/"){
//     alert(num1/num2)
// }else{
//     alert(parseInt(num1) + parseInt(num2))
// }
switch(operation){
    case "*":
        alert(num1*num2)
        break
    case "-":
        alert(num1 - num2)
        break
    case  "/":
        alert(num1/num2)
        break
    case "+":
        alert(parseInt(num1) + parseInt(num2))
}
}
calculate()