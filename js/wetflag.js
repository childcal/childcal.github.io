function wetflag(){


    var age = document.getElementById("age");
    var ag = age.options[age.selectedIndex].value;

    var wt = document.getElementById("weit").value;


if(wt<0.1 && ag>0){


    if(ag<1.3){
        document.getElementById("weight").innerHTML = ((ag*10)/2)+4 ;
    }

    if(ag>1.2 && ag<6){
        document.getElementById("weight").innerHTML = (ag*2)+8 ;
    }

    if(ag>5 && ag<13){
        document.getElementById("weight").innerHTML = (ag*3)+7 ;
    }

    var wtc =document.getElementById("weight").innerHTML;

    document.getElementById("energy").innerHTML = 4*wtc + " Joules";
    if (ag>1.2){
    document.getElementById("tubeD").innerHTML = (ag/4)+4 + " mm";
    document.getElementById("tubeL").innerHTML = (ag/2)+12 + " cm";
    }
    document.getElementById("fluid").innerHTML = wtc*20 + " ml of normal saline";
    document.getElementById("lorazepam").innerHTML = parseFloat(wtc*0.1).toFixed(2) + " mg";
    document.getElementById("adrenalin").innerHTML = parseFloat(wtc*0.1).toFixed(2) + " ml (1:10000)";
    document.getElementById("glucose").innerHTML = wtc*2 + " ml of 10% glucose"

}


if(wt>1){


    document.getElementById("weight").innerHTML = wt ;
    
    document.getElementById("energy").innerHTML = 4*wt + " Joules";
    if (ag>1.2){
    document.getElementById("tubeD").innerHTML = (ag/4)+4 + " mm";
    document.getElementById("tubeL").innerHTML = (ag/2)+12 + " cm";
    }
    document.getElementById("fluid").innerHTML = wt*20 + " ml of normal saline";
    document.getElementById("lorazepam").innerHTML = parseFloat(wt*0.1).toFixed(2) + " mg";
    document.getElementById("adrenalin").innerHTML = parseFloat(wt*0.1).toFixed(2) + " ml (1:10000)";
    document.getElementById("glucose").innerHTML = wt*2 + " ml of 10% glucose"

}


}


var input = document.getElementById("weit");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("calculate").click();
  }
});