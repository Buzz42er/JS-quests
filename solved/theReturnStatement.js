// You are given a program that takes 3 numbers as input.
// Complete the given function to calculate the average of 
// those 3 numbers, assign it to the given variable, and output it.

// Sample Input
// 3
// 6
// 9

// Sample Output
// 6

function main() {
    var num1 = prompt('num1');
    var num2 = prompt('num2');
    var num3 = prompt('num3');
    
    var average = avg(num1, num2, num3);
    
    

    
    //assign the average value to the variable average 
    
    
    
    console.log(average)
    
}

//complete the function
function avg(num1, num2, num3){
    if(num1 > num2 && num1 > num3) {
        if (num2 > num3) {
            return num2;
        } else {
            return num3;
        }
    }
    else if (num2 > num1 && num2 > num3) {
        if (num1 > num3) {
            return num1;
        } else {
            return num3;
        }
        
    }
    else if (num3 > num1 && num3 > num2) {
        if (num1 > num2) {
            return num1;
        } else {
            return num2;
        }
    }
    else {
        return num2;
    }
}
main()