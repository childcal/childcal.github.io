


function ivFluid(){

        var type = document.getElementById("type");
        var tp = type.options[type.selectedIndex].value;
        var wt = document.getElementById("wdata").value;  
        
        var mfull10 = wt*100/24;
        var mfull20 = (1000 + (wt-10)*50)/24;
        var mfull30 = (1500 + (wt-20)*20)/24;
        var d50 = wt*50/24;
        var d70 = wt*70/24;
        var d100 = wt*100/24;



    if(tp==1){
        if(wt<10.1){
        document.getElementById("display").style.visibility = "visible";
        document.getElementById("cmessage").innerHTML = parseFloat(mfull10*2/3).toFixed(2);
        }
    }

    
    if(tp==1){
        if(wt>10 && 20.1>wt){
        document.getElementById("display").style.visibility = "visible";
        document.getElementById("cmessage").innerHTML = parseFloat(mfull20*2/3 ).toFixed(2);
        }
    }

    if(tp==1){
        if(wt>20){
        document.getElementById("display").style.visibility = "visible";
        document.getElementById("cmessage").innerHTML = parseFloat(mfull30*2/3 ).toFixed(2);
        }
    }

    if(tp==2){
        if(wt<10.1){
        document.getElementById("display").style.visibility = "visible";
        document.getElementById("cmessage").innerHTML = parseFloat(mfull10).toFixed(2);
        }
    }

    if(tp==2){
        if(wt>10 && 20.1>wt){
        document.getElementById("display").style.visibility = "visible";
        document.getElementById("cmessage").innerHTML = parseFloat(mfull20).toFixed(2);
        }
    }

    if(tp==2){
        if(wt>20){
        document.getElementById("display").style.visibility = "visible";
        document.getElementById("cmessage").innerHTML = parseFloat(mfull30).toFixed(2);
        }
    }

    if(tp==3){
        if(wt<10.1){
        document.getElementById("display").style.visibility = "visible";
        document.getElementById("cmessage").innerHTML = parseFloat(mfull10+d50).toFixed(2);
        }
    }

    if(tp==3){
        if(wt>10 && 20.1>wt){
        document.getElementById("display").style.visibility = "visible";
        document.getElementById("cmessage").innerHTML = parseFloat(mfull20+d50).toFixed(2);
        }
    }

    if(tp==3){
        if(wt>20){
        document.getElementById("display").style.visibility = "visible";
        document.getElementById("cmessage").innerHTML = parseFloat(mfull30+d50).toFixed(2);
        }
    }

    if(tp==4){
        if(wt<10.1){
        document.getElementById("display").style.visibility = "visible";
        document.getElementById("cmessage").innerHTML = parseFloat(mfull10+d70).toFixed(2);
        }
    }

    if(tp==4){
        if(wt>10 && 20.1>wt){
        document.getElementById("display").style.visibility = "visible";
        document.getElementById("cmessage").innerHTML = parseFloat(mfull20+d70).toFixed(2);
        }
    }

    if(tp==4){
        if(wt>20){
        document.getElementById("display").style.visibility = "visible";
        document.getElementById("cmessage").innerHTML = parseFloat(mfull30+d70).toFixed(2);
        }
    }

    if(tp==5){
        if(wt<10.1){
        document.getElementById("display").style.visibility = "visible";
        document.getElementById("cmessage").innerHTML = parseFloat(mfull10+d100).toFixed(2);
        }
    }

    if(tp==5){
        if(wt>10 && 20.1>wt){
        document.getElementById("display").style.visibility = "visible";
        document.getElementById("cmessage").innerHTML = parseFloat(mfull20+d100).toFixed(2);
        }
    }

    if(tp==5){
        if(wt>20){
        document.getElementById("display").style.visibility = "visible";
        document.getElementById("cmessage").innerHTML = parseFloat(mfull30+d100).toFixed(2);
        }
    }




}



var input = document.getElementById("wdata");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("calculate").click();
  }
});