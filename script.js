const chk = document.getElementById('chk');
chk.addEventListener('change',()=>{
//Change the theme of Stopwatch
document.body.classList.toggle('white');
});


var hr = 0;
var min = 0;
var sec = 0;

var timer = true;

function start(){
    if(timer == true){
        timer = false;
        stopwatch();
    }
}

function stop(){
    if(timer == false){
        timer = true;
    }
}

function reset(){
    timer = true;
    hr = 0;
    min = 0;
    sec = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
}

function stopwatch(){
    if(timer== false){
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec+1;

        if(sec == 60){
            min = min+1;
            sec = 0;
        }
        if(min == 60){
            hr = hr+1;
            min = 0;
            sec = 0;
        }
        var hrst = hr;
        var minst = min;
        var secst = sec;

        if(hr < 10){
            hrst = "0" + hrst;
        }
        if(min < 10){
            minst = "0" + minst;
        }
        if(sec < 10){
            secst = "0" + secst;
        }

        document.getElementById("hr").innerHTML = hrst;
        document.getElementById("min").innerHTML = minst;
        document.getElementById("sec").innerHTML = secst;

        setTimeout( "stopwatch()",1000);
    }
}