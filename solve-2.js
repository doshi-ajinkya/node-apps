var rect = require("./rectangle-2.js"); 

function solveRect(l,b){
    console.log("Solving for rectangle with l = "+l+" & b = "+b);

    rect (l,b, function(err, rectangle){
        if(err){
            console.log(err);
        }
        else{
            console.log("The area of the rectangle with l = "+l+" & b = "+b+ " is "+rectangle.area());
            console.log("The perimeter of the rectangle with l = "+l+" & b = "+b+ " is "+rectangle.perimeter());
        }
    });
};

solveRect(2,3);
solveRect(5,8);
solveRect(-2,3);