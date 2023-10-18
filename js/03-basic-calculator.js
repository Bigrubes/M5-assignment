// ADD A FUNCTION CALLED CALCULATE
const calculate = (x,y, operation, equation) => {


// COLLECT FIRST NUMBER FROM USER
x = prompt("Enter first number in calculation")
console.log(x)
// COLLECT SECOND NUMBER FROM USER
y = prompt("Enter second number in calculation")
console.log(y)
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
// operation = prompt('Please choose an operation:  "+", "-", "*" or "/"')
// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT

    if(operation === "+" && operation === "-" && operation === "*" && operation === "/"){
        operation = prompt('Please choose an operation:  "+", "-", "*" or "/"')

      }else{
        do {(operation = prompt('You must input "+", "-", "*" or "/"'))
      }while(operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/")
      }

switch(operation){
    case "*":
        alert(`${x} * ${y} = ${x*y}`)
        break
    case "-":
        alert(`${x} - ${y} = ${x-y}`)
        break
    case  "/":
        alert(`${x} / ${y} = ${x/y}`)
        break
    case "+":
        alert(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`)
}
}
calculate()

// if (operation==="*"){
//     alert(x*y)
// }
// else if(operation==="-"){
//     alert(x - y)
// }
// else if(operation==="/"){
//     alert(x/y)
// }else{
//     alert(parseInt(x) + parseInt(y))
// }