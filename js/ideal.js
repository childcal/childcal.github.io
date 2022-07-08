
function ideal(){


    var h = Math.round(document.getElementById("hdata").value);
    var gender = document.getElementById("gender");
    var g = gender.options[gender.selectedIndex].value;



    if (g < 1 ){
        document.getElementById("gmessage").innerHTML = "Please select a gender";
        document.getElementById("cmessage").style.display = "none";
    }
    else{
        document.getElementById("gmessage").innerHTML = "";

    }


    if (h < 40 | h > 200 ){
        document.getElementById("hmessage").innerHTML = "Please type a valid height in cm";
        document.getElementById("cmessage").style.display = "none";
    }

   if (200> h && h >89) {
       document.getElementById("hmessage").innerHTML = "";
    }


    document.getElementById("cmessage").style.display = "block";





    if(g==1&&h==100){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  15.5 Kg";
    }
    if(g==1&&h==101){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  15.75 Kg";
    }
    if(g==1&&h==102){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  16.0 Kg";
    }
    if(g==1&&h==103){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  16.33 Kg";
    }
    if(g==1&&h==104){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  16.66 Kg";
    }
    if(g==1&&h==105){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  17.0 Kg";
    }
    if(g==1&&h==106){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  17.33 Kg";
    }
    if(g==1&&h==107){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  17.66 Kg";
    }
    if(g==1&&h==108){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  18.0 Kg";
    }
    if(g==1&&h==109){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  18.50 Kg";
    }
    if(g==1&&h==110){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  18.75 Kg";
    }
    if(g==1&&h==111){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  19.0 Kg";
    }
    if(g==1&&h==112){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  19.5 Kg";
    }
    if(g==1&&h==113){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  20.0 Kg";
    }
    if(g==1&&h==114){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  20.25 Kg";
    }
    if(g==1&&h==115){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  20.5 Kg";
    }
    if(g==1&&h==116){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  21.0 Kg";
    }
    if(g==1&&h==117){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  21.33 Kg";
    }
    if(g==1&&h==118){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  21.66 Kg";
    }
    if(g==1&&h==119){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  22.0 Kg";
    }
    if(g==1&&h==120){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  22.5 Kg";
    }
    if(g==1&&h==121){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  22.75 Kg";
    }
    if(g==1&&h==122){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  23.33 Kg";
    }
    if(g==1&&h==123){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  23.5 Kg";
    }
    if(g==1&&h==124){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  24.0 Kg";
    }
    if(g==1&&h==125){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  24.5 Kg";
    }
    if(g==1&&h==126){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  25.0 Kg";
    }
    if(g==1&&h==127){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  25.33 Kg";
    }
    if(g==1&&h==128){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  25.66 Kg";
    }
    if(g==1&&h==129){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  26.0 Kg";
    }
    if(g==1&&h==130){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  26.66 Kg";
    }
    if(g==1&&h==131){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  27.33 Kg";
    }
    if(g==1&&h==132){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  27.66 Kg";
    }
    if(g==1&&h==133){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  28.33 Kg";
    }
    if(g==1&&h==134){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  28.66 Kg";
    }
    if(g==1&&h==135){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  29.5 Kg";
    }
    if(g==1&&h==136){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  30.0 Kg";
    }
    if(g==1&&h==137){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  30.66 Kg";
    }
    if(g==1&&h==138){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  31.5 Kg";
    }
    if(g==1&&h==139){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  32.3 Kg";
    }
    if(g==1&&h==140){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  33.0 Kg";
    }
    if(g==1&&h==141){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  34.0 Kg";
    }
    if(g==1&&h==142){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  35.0 Kg";
    }
    if(g==1&&h==143){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  35.5 Kg";
    }
    if(g==1&&h==144){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  36.33 Kg";
    }
    if(g==1&&h==145){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  37 Kg";
    }
    if(g==1&&h==146){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  38.0 Kg";
    }
    if(g==1&&h==147){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  39.0 Kg";
    }
    if(g==1&&h==148){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  39.66 Kg";
    }
    if(g==1&&h==149){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  40.5 Kg";
    }
    if(g==1&&h==150){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  41.33 Kg";
    }
    if(g==1&&h==151){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  42.0 Kg";
    }
    if(g==1&&h==152){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  42.66 Kg";
    }
    if(g==1&&h==153){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  43.33 Kg";
    }
    if(g==1&&h==154){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  44.0 Kg";
    }
    if(g==1&&h==155){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  45.0 Kg";
    }
    if(g==1&&h==156){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  45.5 Kg";
    }
    if(g==1&&h==157){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  46.33 Kg";
    }
    if(g==1&&h==158){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  47.0 Kg";
    }
    if(g==1&&h==159){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  47.5 Kg";
    }
    if(g==1&&h==160){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  48.5 Kg";
    }
    if(g==1&&h==161){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  49.0 Kg";
    }
    if(g==1&&h==162){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  49.75 Kg";
    }
    if(g==1&&h==163){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  50.5 Kg";
    }
    if(g==1&&h==164){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  51.0 Kg";
    }
    if(g==1&&h==165){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  52.0 Kg";
    }
    if(g==1&&h==166){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  53.0 Kg";
    }
    if(g==1&&h==167){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  53.75 Kg";
    }
    if(g==1&&h==168){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  54.5 Kg";
    }
    if(g==1&&h==169){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  55.25 Kg";
    }
    if(g==1&&h==170){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  56.33 Kg";
    }
    if(g==1&&h==171){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  58.0 Kg";
    }
    if(g==1&&h==172){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  58.75 Kg";
    }
    if(g==1&&h==173){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  60.0 Kg";
    }
    if(g==1&&h==174){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  62.0 Kg";
    }
    if(g==1&&h==175){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  64.0 Kg";
    }



    if(g==2&&h==90){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  13.0 Kg";
    }
    if(g==2&&h==91){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  13.25 Kg";
    }
    if(g==2&&h==92){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  13.5 Kg";
    }
    if(g==2&&h==93){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  13.66 Kg";
    }
    if(g==2&&h==94){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  13.75 Kg";
    }
    if(g==2&&h==95){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  14.0 Kg";
    }
    if(g==2&&h==96){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  14.25 Kg";
    }
    if(g==2&&h==97){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  14.75 Kg";
    }
    if(g==2&&h==98){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  15.0 Kg";
    }
    if(g==2&&h==99){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  15.25 Kg";
    }
    if(g==2&&h==100){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  15.5 Kg";
    }
    if(g==2&&h==101){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  16.0 Kg";
    }
    if(g==2&&h==102){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  16.25 Kg";
    }
    if(g==2&&h==103){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  16.5 Kg";
    }
    if(g==2&&h==104){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  17.0 Kg";
    }
    if(g==2&&h==105){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  17.25 Kg";
    }
    if(g==2&&h==106){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  17.5 Kg";
    }
    if(g==2&&h==107){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  17.75 Kg";
    }
    if(g==2&&h==108){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  18.0 Kg";
    }
    if(g==2&&h==109){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  18.33 Kg";
    }
    if(g==2&&h==110){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  18.66 Kg";
    }
    if(g==2&&h==111){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  19.0 Kg";
    }
    if(g==2&&h==112){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  19.5 Kg";
    }
    if(g==2&&h==113){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  19.75 Kg";
    }
    if(g==2&&h==114){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  20 Kg";
    }
    if(g==2&&h==115){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  20.33 Kg";
    }
    if(g==2&&h==116){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  20.66 Kg";
    }
    if(g==2&&h==117){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  21.0 Kg";
    }
    if(g==2&&h==118){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  21.5 Kg";
    }
    if(g==2&&h==119){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  21.75 Kg";
    }
    if(g==2&&h==120){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  22.25 Kg";
    }
    if(g==2&&h==121){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  22.5 Kg";
    }
    if(g==2&&h==122){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  23.0 Kg";
    }
    if(g==2&&h==123){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  23.33 Kg";
    }
    if(g==2&&h==124){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  23.75 Kg";
    }
    if(g==2&&h==125){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  24.25 Kg";
    }
    if(g==2&&h==126){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  24.66 Kg";
    }
    if(g==2&&h==127){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  25.25 Kg";
    }
    if(g==2&&h==128){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  26.0 Kg";
    }
    if(g==2&&h==129){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  26.33 Kg";
    }
    if(g==2&&h==130){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  27.0 Kg";
    }
    if(g==2&&h==131){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  27.66 Kg";
    }
    if(g==2&&h==132){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  28.33 Kg";
    }
    if(g==2&&h==133){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  29.0 Kg";
    }
    if(g==2&&h==134){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  29.66 Kg";
    }
    if(g==2&&h==135){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  30.5 Kg";
    }
    if(g==2&&h==136){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  31.5 Kg";
    }
    if(g==2&&h==137){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  32.0 Kg";
    }
    if(g==2&&h==138){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  32.75 Kg";
    }
    if(g==2&&h==139){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  33.5 Kg";
    }
    if(g==2&&h==140){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  34.5 Kg";
    }
    if(g==2&&h==141){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  35.0 Kg";
    }
    if(g==2&&h==142){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  36.0 Kg";
    }
    if(g==2&&h==143){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  36.5 Kg";
    }
    if(g==2&&h==144){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  37.0 Kg";
    }
    if(g==2&&h==145){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  37.75 Kg";
    }
    if(g==2&&h==146){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  38.5 Kg";
    }
    if(g==2&&h==147){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  39.0 Kg";
    }
    if(g==2&&h==148){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  39.75 Kg";
    }
    if(g==2&&h==149){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  40.5 Kg";
    }
    if(g==2&&h==150){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  41.0 Kg";
    }
    if(g==2&&h==151){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  41.5 Kg";
    }
    if(g==2&&h==152){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  42.0 Kg";
    }
    if(g==2&&h==153){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  42.5 Kg";
    }
    if(g==2&&h==154){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  43.66 Kg";
    }
    if(g==2&&h==155){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  44.0 Kg";
    }
    if(g==2&&h==156){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  45.0 Kg";
    }
    if(g==2&&h==157){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  45.66 Kg";
    }
    if(g==2&&h==158){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  46.75 Kg";
    }
    if(g==2&&h==159){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  47.75 Kg";
    }
    if(g==2&&h==160){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  49.0 Kg";
    }
    if(g==2&&h==161){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  50.0 Kg";
    }
    if(g==2&&h==162){
        document.getElementById("cmessage").innerHTML = " Ideal Body Weight is  52.0 Kg";
    }

 
}




var input = document.getElementById("hdata");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("calculate").click();
  }
});