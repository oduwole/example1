
function gradeScore(){
    var score = document.getElementById('input1').value;
    var result = grader(score);
    document.getElementById('result_screen').value = result;
}

function grader(score){
    if (score > 0 && score <= 100){
        if(score >= 0 && score < 40){
            return 'F';
        }else  if(score >= 40 && score < 45){
            return 'E';
        } else  if(score >= 45 && score < 50){
            return 'D';
        }else  if(score >= 50 && score < 60){
            return 'C';
        } else  if(score >= 60 && score < 70){
            return 'B';
        } else  if(score >= 70 && score < 100){
            return 'A';
        }
    }else{
        return 'Invalid Score';
    }
}