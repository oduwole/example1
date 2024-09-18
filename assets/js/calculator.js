
console.log(first);

function calculate(a,b,option){
    if(option == 'additon'){
        var result = a + b;
        return result;
    }else if(option == 'subtraction'){
        var result = a - b;
        return result;

    }else if(option == 'multiplication'){
        var result = a * b;
        return result;

    }else if(option == 'division'){
        var result = a / b;
        return result;

    }else{
        return 0;
    }
}

function myInstructions(operand){
    var first;
var second;
var calcs;

first = parseFloat(document.getElementById('first').value);
second = parseFloat(document.getElementById('second').value);
calcs = calculate(first, second, operand);
document.getElementById('result').value = calcs;
}