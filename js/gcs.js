document.getElementById("eyeTop").style.borderRadius = "6px 6px 0 0";
document.getElementById("eyePage").style.display = "block";

var ec;
var vc;
var mc;


function fEye1(){
    document.getElementById("eyeValue").innerHTML = 4;
    document.getElementById("eye2").checked = false;
    document.getElementById("eye3").checked = false;
    document.getElementById("eye4").checked = false;
    ec = 4;
    document.getElementById("total").innerHTML = ec+vc+mc;
    verbalFun();
}
function fEye2(){
    document.getElementById("eyeValue").innerHTML = 3;
    document.getElementById("eye1").checked = false;
    document.getElementById("eye3").checked = false;
    document.getElementById("eye4").checked = false;
    ec = 3;
    document.getElementById("total").innerHTML = ec+vc+mc;
    verbalFun();
}
function fEye3(){
    document.getElementById("eyeValue").innerHTML = 2;
    document.getElementById("eye2").checked = false;
    document.getElementById("eye1").checked = false;
    document.getElementById("eye4").checked = false;
    ec = 2;
    document.getElementById("total").innerHTML = ec+vc+mc;
    verbalFun();
}
function fEye4(){
    document.getElementById("eyeValue").innerHTML = 1;
    document.getElementById("eye2").checked = false;
    document.getElementById("eye3").checked = false;
    document.getElementById("eye1").checked = false;
    ec = 1;
    document.getElementById("total").innerHTML = ec+vc+mc;
    verbalFun();
}

function fVerbal1(){
    document.getElementById("verbalValue").innerHTML = 5;
    document.getElementById("verbal2").checked = false;
    document.getElementById("verbal3").checked = false;
    document.getElementById("verbal4").checked = false;
    document.getElementById("verbal5").checked = false;
    vc = 5;
    document.getElementById("total").innerHTML = ec+vc+mc;
    motorFun();
}
function fVerbal2(){
    document.getElementById("verbalValue").innerHTML = 4;
    document.getElementById("verbal1").checked = false;
    document.getElementById("verbal3").checked = false;
    document.getElementById("verbal4").checked = false;
    document.getElementById("verbal5").checked = false;
    vc = 4;
    document.getElementById("total").innerHTML = ec+vc+mc;
    motorFun();
}
function fVerbal3(){
    document.getElementById("verbalValue").innerHTML = 3;
    document.getElementById("verbal2").checked = false;
    document.getElementById("verbal1").checked = false;
    document.getElementById("verbal4").checked = false;
    document.getElementById("verbal5").checked = false;
    vc = 3;
    document.getElementById("total").innerHTML = ec+vc+mc;
    motorFun();
}
function fVerbal4(){
    document.getElementById("verbalValue").innerHTML = 2;
    document.getElementById("verbal2").checked = false;
    document.getElementById("verbal3").checked = false;
    document.getElementById("verbal1").checked = false;
    document.getElementById("verbal5").checked = false;
    vc = 2;
    document.getElementById("total").innerHTML = ec+vc+mc;
    motorFun();
}
function fVerbal5(){
    document.getElementById("verbalValue").innerHTML = 1;
    document.getElementById("verbal2").checked = false;
    document.getElementById("verbal3").checked = false;
    document.getElementById("verbal4").checked = false;
    document.getElementById("verbal1").checked = false;
    vc = 1;
    document.getElementById("total").innerHTML = ec+vc+mc;
    motorFun();
}

function fMotor1(){
    document.getElementById("motorValue").innerHTML = 6;
    document.getElementById("motor2").checked = false;
    document.getElementById("motor3").checked = false;
    document.getElementById("motor4").checked = false;
    document.getElementById("motor5").checked = false;
    document.getElementById("motor6").checked = false;
    mc = 6;
    document.getElementById("total").innerHTML = ec+vc+mc;
    finalFun();
}
function fMotor2(){
    document.getElementById("motorValue").innerHTML = 5;
    document.getElementById("motor1").checked = false;
    document.getElementById("motor3").checked = false;
    document.getElementById("motor4").checked = false;
    document.getElementById("motor5").checked = false;
    document.getElementById("motor6").checked = false;
    mc = 5;
    document.getElementById("total").innerHTML = ec+vc+mc;
    finalFun();
}
function fMotor3(){
    document.getElementById("motorValue").innerHTML = 4;
    document.getElementById("motor2").checked = false;
    document.getElementById("motor1").checked = false;
    document.getElementById("motor4").checked = false;
    document.getElementById("motor5").checked = false;
    document.getElementById("motor6").checked = false;
    mc = 4;
    document.getElementById("total").innerHTML = ec+vc+mc;
    finalFun();
}
function fMotor4(){
    document.getElementById("motorValue").innerHTML = 3;
    document.getElementById("motor2").checked = false;
    document.getElementById("motor3").checked = false;
    document.getElementById("motor1").checked = false;
    document.getElementById("motor5").checked = false;
    document.getElementById("motor6").checked = false;
    mc = 3;
    document.getElementById("total").innerHTML = ec+vc+mc;
    finalFun();
}
function fMotor5(){
    document.getElementById("motorValue").innerHTML = 2;
    document.getElementById("motor2").checked = false;
    document.getElementById("motor3").checked = false;
    document.getElementById("motor4").checked = false;
    document.getElementById("motor1").checked = false;
    document.getElementById("motor6").checked = false;
    mc = 2;
    document.getElementById("total").innerHTML = ec+vc+mc;
    finalFun();
}
function fMotor6(){
    document.getElementById("motorValue").innerHTML = 1;
    document.getElementById("motor2").checked = false;
    document.getElementById("motor3").checked = false;
    document.getElementById("motor4").checked = false;
    document.getElementById("motor5").checked = false;
    document.getElementById("motor1").checked = false;
    mc = 1;
    document.getElementById("total").innerHTML = ec+vc+mc;
    finalFun();
}










function eyeFun(){
    document.getElementById("eyePage").style.display = "block";
    document.getElementById("eyeTop").style.borderRadius = "6px 6px 0 0";

    document.getElementById("verbalPage").style.display = "none";
    document.getElementById("verbalTop").style.borderRadius = "6px";

    document.getElementById("motorPage").style.display = "none";
    document.getElementById("motorTop").style.borderRadius = "6px";

    document.getElementById("total").innerHTML = ec+vc+mc;

}


function verbalFun(){
    document.getElementById("verbalPage").style.display = "block";
    document.getElementById("verbalTop").style.borderRadius = "6px 6px 0 0";

    document.getElementById("eyePage").style.display = "none";
    document.getElementById("eyeTop").style.borderRadius = "6px";

    document.getElementById("motorPage").style.display = "none";
    document.getElementById("motorTop").style.borderRadius = "6px";

    document.getElementById("total").innerHTML = ec+vc+mc;
}


function motorFun(){
    document.getElementById("motorPage").style.display = "block";
    document.getElementById("motorTop").style.borderRadius = "6px 6px 0 0";

    document.getElementById("eyePage").style.display = "none";
    document.getElementById("eyeTop").style.borderRadius = "6px";

    document.getElementById("verbalPage").style.display = "none";
    document.getElementById("verbalTop").style.borderRadius = "6px";

    document.getElementById("total").innerHTML = ec+vc+mc;
}

function finalFun(){
    document.getElementById("motorPage").style.display = "none";
    document.getElementById("motorTop").style.borderRadius = "6px";

    document.getElementById("total").innerHTML = ec+vc+mc;

}




