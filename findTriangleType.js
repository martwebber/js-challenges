/*
Function `findTriangleType()` finds the type of the triangle for given side 
values by using “==” and “&&” operator in JavaScript. 
Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.  
Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to 
side3. Else print “Scalene triangle.” since values of all sides are unequal.
*/

function findTriangleType(side1,side2,side3){
    if (side1 == side2 && side1 == side3){
        console.log("Equilateral triangle.")
    }else if(side1 == side2 || side2 == side3){
        console.log("Isosceles triangle.")
    }else{
        console.log("Scalene triangle")
    }
}

findTriangleType(7,6,9)