// Write a program to make a simple calculator with the switch statement.
function switchCalc(){
    let operation = parseInt(prompt('Select an operation: Select: 1 for addition, 2 for subtraction, 3 for multiplication, 4 for division')) 
    let num1 = parseInt(prompt('Enter a number: '))
    let num2 = parseInt(prompt('Enter another number: '))
    switch(operation){
        case 1:
            console.log(num1 + num2)
            break;
        case 2:
            return num1 - num2
        case 3:
            return num1 * num2
        case 4:
            return num1 / num2
        default:
            return 'You did not select an operation. Try again.'
    }
}