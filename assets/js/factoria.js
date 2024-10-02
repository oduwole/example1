function calcFactoria(){
    var facInput = document.getElementById('factInput').value;
    var result = factorialCalculator(facInput);

    document.getElementById('factori_result').value = result;

}

function factorialCalculator(input){
    console.log(input)
    var result = 1;
    for(var i= 0; i< input; i++){
        var newNum = input - i;
        result *= (newNum);
    }
    return result;
}