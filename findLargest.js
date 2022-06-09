/* Function `findLargest()` finds the largest of three number by using “>” 
and “&&” operator in JavaScript. Print num1 is the largest if num1>num2 and num1>num3. 
 Print num2 is the largest if num2<num3.Else print num3.
*/ 

function findLargest(num1,num2,num3){
    if (num1 > num2 && num1 > num3){
        console.log("Num1 is the largest")
    }else if(num2 > num3){
        console.log("Num2 is the largest")
    }else{
        console.log("Num3 is the largest")
    }
}
findLargest(6,8,9)