
var rect = require('./rectangle-1');

function solveRect(l,b){
    console.log("Solving for rectangle with l = "+ l +" and b = "+ b );

    if(l<0 || b<0){
        console.log("Rectangle dimensions should be greater than zero: l = "+l+" and b = "+b);
    }
    else{
        console.log("The area of a rectangle of domensions length = "+l," and breadth = "+b+" is "+rect.area(l,b));
        console.log("The perimeter of a rectangle of domensions length = "+l," and breadth = "+b+" is "+rect.perimeter(l,b));
    }
}

solveRect(2,3);
solveRect(5,8);
solveRect(-2,3);