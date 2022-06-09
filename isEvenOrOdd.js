/*
Function `isEvenOrOdd()` checks if input number is even or odd by using “%” operator 
in JavaScript.  Print “Number is even” if the number is divisible by 2.  
Else print “Number is odd” if the number returns a remainder when divided by 2.
*/
function isEvenOrOdd(num) {
    if(num % 2 === 0){
   console.log(`${num} is even`)
    }
    else{
        console.log(`${num} is odd`)
    }
}
isEvenOrOdd(20)
isEvenOrOdd(17)