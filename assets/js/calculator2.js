var screen_text =0;
var buttontype = '';
function myInstructions(option){
var txt = document.getElementById("screen").value;
screen_text = parseFloat(txt);
buttontype = option;
document.getElementById('screen').value = '';
}

function calculate(a,b,option){
    if(option == 'additon'){
        var result = parseFloat(a) + parseFloat(b);
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

function equlaops(){
    var _screen = document.getElementById("screen").value;
    var screen = parseFloat(_screen);
    var result = calculate(screen_text , screen, buttontype);
    document.getElementById("screen").value = result;

}