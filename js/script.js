


function cal(){



    
    var gender = document.getElementById("gender");
    var g = gender.options[gender.selectedIndex].value;

    var age = document.getElementById("age");
    var a = age.options[age.selectedIndex].value;

    var h = document.getElementById("hdata").value;



    if (g < 1 ){
        document.getElementById("gmessage").innerHTML = "Please select a gender";
        document.getElementById("results").style.display = "none";
        document.getElementById("cmessage").style.display = "none";
    }
    else{
        document.getElementById("gmessage").innerHTML = "";

    }


    if (a < 1 ){
        document.getElementById("agemessage").innerHTML = "Please select an age";
        document.getElementById("results").style.display = "none";
        document.getElementById("cmessage").style.display = "none";
    }
    else{
        document.getElementById("agemessage").innerHTML = "";

    }


    if (h < 40 | h > 200 ){
        document.getElementById("hmessage").innerHTML = "Please type a valid height in cm";
        document.getElementById("results").style.display = "none";
        document.getElementById("cmessage").style.display = "none";
    }

   if (200> h && h >40) {

       document.getElementById("hmessage").innerHTML = "";
    }
    
 


 







    if (g==1 && a==1){
        if (h<68.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 80;
            document.getElementById("s90").innerHTML = 94;
            document.getElementById("s95").innerHTML = 98;
            document.getElementById("s99").innerHTML = 105;
            //Diastolic
            document.getElementById("d50").innerHTML = 34;
            document.getElementById("d90").innerHTML = 49;
            document.getElementById("d95").innerHTML = 54;
            document.getElementById("d99").innerHTML = 61;
        }
    }


    if (g==1 && a==1){
        if (h>68 && h<72.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 81;
            document.getElementById("s90").innerHTML = 95;
            document.getElementById("s95").innerHTML = 99;
            document.getElementById("s99").innerHTML = 106;
            //Diastolic
            document.getElementById("d50").innerHTML = 35;
            document.getElementById("d90").innerHTML = 50;
            document.getElementById("d95").innerHTML = 54;
            document.getElementById("d99").innerHTML = 62;
        }
    }


    if (g==1 && a==1){
        if (h>72 && h<74.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile within 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 83;
            document.getElementById("s90").innerHTML = 97;
            document.getElementById("s95").innerHTML = 101;
            document.getElementById("s99").innerHTML = 108;
            //Diastolic
            document.getElementById("d50").innerHTML = 36;
            document.getElementById("d90").innerHTML = 51;
            document.getElementById("d95").innerHTML = 55;
            document.getElementById("d99").innerHTML = 63;
        }
    }


    if (g==1 && a==1){
        if (h>74 && h<78.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile within 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 85;
            document.getElementById("s90").innerHTML = 99;
            document.getElementById("s95").innerHTML = 103;
            document.getElementById("s99").innerHTML = 110;
            //Diastolic
            document.getElementById("d50").innerHTML = 37;
            document.getElementById("d90").innerHTML = 52;
            document.getElementById("d95").innerHTML = 56;
            document.getElementById("d99").innerHTML = 64;
        }
    }


    if (g==1 && a==1){
        if (h>78 && h<82.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 87;
            document.getElementById("s90").innerHTML = 100;
            document.getElementById("s95").innerHTML = 104;
            document.getElementById("s99").innerHTML = 112;
            //Diastolic
            document.getElementById("d50").innerHTML = 38;
            document.getElementById("d90").innerHTML = 53;
            document.getElementById("d95").innerHTML = 57;
            document.getElementById("d99").innerHTML = 65;
        }
    }


    if (g==1 && a==1){
        if (h>82 && h<100.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 88;
            document.getElementById("s90").innerHTML = 102;
            document.getElementById("s95").innerHTML = 106;
            document.getElementById("s99").innerHTML = 113;
            //Diastolic
            document.getElementById("d50").innerHTML = 39;
            document.getElementById("d90").innerHTML = 53;
            document.getElementById("d95").innerHTML = 58;
            document.getElementById("d99").innerHTML = 66;
        }
    }


    if (g==1 && a==1){
        if (h>100){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 89;
            document.getElementById("s90").innerHTML = 103;
            document.getElementById("s95").innerHTML = 106;
            document.getElementById("s99").innerHTML = 114;
            //Diastolic
            document.getElementById("d50").innerHTML = 39;
            document.getElementById("d90").innerHTML = 54;
            document.getElementById("d95").innerHTML = 58;
            document.getElementById("d99").innerHTML = 66;
        }
    }


    if (g==1 && a==2){
        if (h<78.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 84;
            document.getElementById("s90").innerHTML = 97;
            document.getElementById("s95").innerHTML = 101;
            document.getElementById("s99").innerHTML = 109;
            //Diastolic
            document.getElementById("d50").innerHTML = 39;
            document.getElementById("d90").innerHTML = 54;
            document.getElementById("d95").innerHTML = 59;
            document.getElementById("d99").innerHTML = 67;
        }
    }


    if (g==1 && a==2){
        if (h>78 && h<81.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 85;
            document.getElementById("s90").innerHTML = 99;
            document.getElementById("s95").innerHTML = 102;
            document.getElementById("s99").innerHTML = 110;
            //Diastolic
            document.getElementById("d50").innerHTML = 40;
            document.getElementById("d90").innerHTML = 55;
            document.getElementById("d95").innerHTML = 59;
            document.getElementById("d99").innerHTML = 67;
        }
    }


    if (g==1 && a==2){
        if (h>81 && h<85.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 87;
            document.getElementById("s90").innerHTML = 100;
            document.getElementById("s95").innerHTML = 104;
            document.getElementById("s99").innerHTML = 111;
            //Diastolic
            document.getElementById("d50").innerHTML = 41;
            document.getElementById("d90").innerHTML = 56;
            document.getElementById("d95").innerHTML = 60;
            document.getElementById("d99").innerHTML = 68;
        }
    }


    if (g==1 && a==2){
        if (h>85 && h<91.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 86;
            document.getElementById("s90").innerHTML = 102;
            document.getElementById("s95").innerHTML = 106;
            document.getElementById("s99").innerHTML = 113;
            //Diastolic
            document.getElementById("d50").innerHTML = 42;
            document.getElementById("d90").innerHTML = 57;
            document.getElementById("d95").innerHTML = 61;
            document.getElementById("d99").innerHTML = 69;
        }
    }


    if (g==1 && a==2){
        if (h>91 && h<95.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 90;
            document.getElementById("s90").innerHTML = 104;
            document.getElementById("s95").innerHTML = 108;
            document.getElementById("s99").innerHTML = 115;
            //Diastolic
            document.getElementById("d50").innerHTML = 43;
            document.getElementById("d90").innerHTML = 58;
            document.getElementById("d95").innerHTML = 62;
            document.getElementById("d99").innerHTML = 70;
        }
    }


    if (g==1 && a==2){
        if (h>95 && h<105.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile within 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 92;
            document.getElementById("s90").innerHTML = 105;
            document.getElementById("s95").innerHTML = 109;
            document.getElementById("s99").innerHTML = 117;
            //Diastolic
            document.getElementById("d50").innerHTML = 44;
            document.getElementById("d90").innerHTML = 58;
            document.getElementById("d95").innerHTML = 63;
            document.getElementById("d99").innerHTML = 71;
        }
    }


    if (g==1 && a==2){
        if (h>105){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 92;
            document.getElementById("s90").innerHTML = 106;
            document.getElementById("s95").innerHTML = 110;
            document.getElementById("s99").innerHTML = 117;
            //Diastolic
            document.getElementById("d50").innerHTML = 44;
            document.getElementById("d90").innerHTML = 59;
            document.getElementById("d95").innerHTML = 63;
            document.getElementById("d99").innerHTML = 71;
        }
    }


    if (g==1 && a==3){
        if (h<85.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 86;
            document.getElementById("s90").innerHTML = 100;
            document.getElementById("s95").innerHTML = 104;
            document.getElementById("s99").innerHTML = 111;
            //Diastolic
            document.getElementById("d50").innerHTML = 44;
            document.getElementById("d90").innerHTML = 59;
            document.getElementById("d95").innerHTML = 63;
            document.getElementById("d99").innerHTML = 71;
        }
    }


    if (g==1 && a==3){
        if (h>85 && h<88.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile within 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 86;
            document.getElementById("s90").innerHTML = 100;
            document.getElementById("s95").innerHTML = 104;
            document.getElementById("s99").innerHTML = 111;
            //Diastolic
            document.getElementById("d50").innerHTML = 44;
            document.getElementById("d90").innerHTML = 59;
            document.getElementById("d95").innerHTML = 63;
            document.getElementById("d99").innerHTML = 71;
        }
    }


    if (g==1 && a==3){
        if (h>88 && h<92.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile within 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 89;
            document.getElementById("s90").innerHTML = 103;
            document.getElementById("s95").innerHTML = 107;
            document.getElementById("s99").innerHTML = 114;
            //Diastolic
            document.getElementById("d50").innerHTML = 45;
            document.getElementById("d90").innerHTML = 60;
            document.getElementById("d95").innerHTML = 64;
            document.getElementById("d99").innerHTML = 72;
        }
    }


    if (g==1 && a==3){
        if (h>92 && h<100.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile within 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 91;
            document.getElementById("s90").innerHTML = 105;
            document.getElementById("s95").innerHTML = 109;
            document.getElementById("s99").innerHTML = 116;
            //Diastolic
            document.getElementById("d50").innerHTML = 46;
            document.getElementById("d90").innerHTML = 61;
            document.getElementById("d95").innerHTML = 65;
            document.getElementById("d99").innerHTML = 73;
        }
    }


    if (g==1 && a==3){
        if (h>100 && h<105.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile within 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 93;
            document.getElementById("s90").innerHTML = 107;
            document.getElementById("s95").innerHTML = 110;
            document.getElementById("s99").innerHTML = 118;
            //Diastolic
            document.getElementById("d50").innerHTML = 47;
            document.getElementById("d90").innerHTML = 62;
            document.getElementById("d95").innerHTML = 66;
            document.getElementById("d99").innerHTML = 74;
        }
    }


    if (g==1 && a==3){
        if (h>105 && h<115.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile within 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 94;
            document.getElementById("s90").innerHTML = 108;
            document.getElementById("s95").innerHTML = 112;
            document.getElementById("s99").innerHTML = 119;
            //Diastolic
            document.getElementById("d50").innerHTML = 48;
            document.getElementById("d90").innerHTML = 63;
            document.getElementById("d95").innerHTML = 67;
            document.getElementById("d99").innerHTML = 75;
        }
    }


    if (g==1 && a==3){
        if (h>115){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 95;
            document.getElementById("s90").innerHTML = 109;
            document.getElementById("s95").innerHTML = 113;
            document.getElementById("s99").innerHTML = 120;
            //Diastolic
            document.getElementById("d50").innerHTML = 48;
            document.getElementById("d90").innerHTML = 63;
            document.getElementById("d95").innerHTML = 67;
            document.getElementById("d99").innerHTML = 75;
        }
    }


    if (g==1 && a==4){
        if (h<90.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 88;
            document.getElementById("s90").innerHTML = 102;
            document.getElementById("s95").innerHTML = 106;
            document.getElementById("s99").innerHTML = 113;
            //Diastolic
            document.getElementById("d50").innerHTML = 47;
            document.getElementById("d90").innerHTML = 62;
            document.getElementById("d95").innerHTML = 66;
            document.getElementById("d99").innerHTML = 74;
        }
    }


    if (g==1 && a==4){
        if (h>90 && h<93.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 89;
            document.getElementById("s90").innerHTML = 103;
            document.getElementById("s95").innerHTML = 107;
            document.getElementById("s99").innerHTML = 114;
            //Diastolic
            document.getElementById("d50").innerHTML = 48;
            document.getElementById("d90").innerHTML = 63;
            document.getElementById("d95").innerHTML = 67;
            document.getElementById("d99").innerHTML = 75;
        }
    }


    if (g==1 && a==4){
        if (h>93 && h<99.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 91;
            document.getElementById("s90").innerHTML = 105;
            document.getElementById("s95").innerHTML = 109;
            document.getElementById("s99").innerHTML = 116;
            //Diastolic
            document.getElementById("d50").innerHTML = 49;
            document.getElementById("d90").innerHTML = 64;
            document.getElementById("d95").innerHTML = 68;
            document.getElementById("d99").innerHTML = 76;
        }
    }


    if (g==1 && a==4){
        if (h>99 && h<107.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 93;
            document.getElementById("s90").innerHTML = 107;
            document.getElementById("s95").innerHTML = 111;
            document.getElementById("s99").innerHTML = 118;
            //Diastolic
            document.getElementById("d50").innerHTML = 50;
            document.getElementById("d90").innerHTML = 65;
            document.getElementById("d95").innerHTML = 69;
            document.getElementById("d99").innerHTML = 77;
        }
    }


    if (g==1 && a==4){
        if (h>107 && h<114.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 95;
            document.getElementById("s90").innerHTML = 109;
            document.getElementById("s95").innerHTML = 112;
            document.getElementById("s99").innerHTML = 120;
            //Diastolic
            document.getElementById("d50").innerHTML = 51;
            document.getElementById("d90").innerHTML = 66;
            document.getElementById("d95").innerHTML = 70;
            document.getElementById("d99").innerHTML = 78;
        }
    }


    if (g==1 && a==4){
        if (h>114 && h<120.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 96;
            document.getElementById("s90").innerHTML = 110;
            document.getElementById("s95").innerHTML = 114;
            document.getElementById("s99").innerHTML = 121;
            //Diastolic
            document.getElementById("d50").innerHTML = 51;
            document.getElementById("d90").innerHTML = 66;
            document.getElementById("d95").innerHTML = 71;
            document.getElementById("d99").innerHTML = 78;
        }
    }


    if (g==1 && a==4){
        if (h>120){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 97;
            document.getElementById("s90").innerHTML = 111;
            document.getElementById("s95").innerHTML = 115;
            document.getElementById("s99").innerHTML = 122;
            //Diastolic
            document.getElementById("d50").innerHTML = 52;
            document.getElementById("d90").innerHTML = 67;
            document.getElementById("d95").innerHTML = 71;
            document.getElementById("d99").innerHTML = 79;
        }
    }


    if (g==1 && a==5){
        if (h<105.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 90;
            document.getElementById("s90").innerHTML = 104;
            document.getElementById("s95").innerHTML = 108;
            document.getElementById("s99").innerHTML = 115;
            //Diastolic
            document.getElementById("d50").innerHTML = 50;
            document.getElementById("d90").innerHTML = 65;
            document.getElementById("d95").innerHTML = 69;
            document.getElementById("d99").innerHTML = 77;
        }
    }


    if (g==1 && a==5){
        if (h>105 && h<110.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 91;
            document.getElementById("s90").innerHTML = 105;
            document.getElementById("s95").innerHTML = 109;
            document.getElementById("s99").innerHTML = 116;
            //Diastolic
            document.getElementById("d50").innerHTML = 51;
            document.getElementById("d90").innerHTML = 66;
            document.getElementById("d95").innerHTML = 70;
            document.getElementById("d99").innerHTML = 78;
        }
    }





    if (g==1 && a==5){
        if (h>110 && h<115.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 93;
            document.getElementById("s90").innerHTML = 106;
            document.getElementById("s95").innerHTML = 110;
            document.getElementById("s99").innerHTML = 118;
            //Diastolic
            document.getElementById("d50").innerHTML = 52;
            document.getElementById("d90").innerHTML = 67;
            document.getElementById("d95").innerHTML = 71;
            document.getElementById("d99").innerHTML = 79;
        }
    }


    if (g==1 && a==5){
        if (h>115 && h<121.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 95;
            document.getElementById("s90").innerHTML = 108;
            document.getElementById("s95").innerHTML = 112;
            document.getElementById("s99").innerHTML = 120;
            //Diastolic
            document.getElementById("d50").innerHTML = 53;
            document.getElementById("d90").innerHTML = 68;
            document.getElementById("d95").innerHTML = 72;
            document.getElementById("d99").innerHTML = 80;
        }
    }


    if (g==1 && a==5){
        if (h>121 && h<125.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 96;
            document.getElementById("s90").innerHTML = 110;
            document.getElementById("s95").innerHTML = 114;
            document.getElementById("s99").innerHTML = 121;
            //Diastolic
            document.getElementById("d50").innerHTML = 54;
            document.getElementById("d90").innerHTML = 69;
            document.getElementById("d95").innerHTML = 73;
            document.getElementById("d99").innerHTML = 81;
        }
    }


    if (g==1 && a==5){
        if (h>125 && h<132.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 98;
            document.getElementById("s90").innerHTML = 111;
            document.getElementById("s95").innerHTML = 115;
            document.getElementById("s99").innerHTML = 123;
            //Diastolic
            document.getElementById("d50").innerHTML = 55;
            document.getElementById("d90").innerHTML = 69;
            document.getElementById("d95").innerHTML = 74;
            document.getElementById("d99").innerHTML = 81;
        }
    }


    if (g==1 && a==5){
        if (h>132){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 98;
            document.getElementById("s90").innerHTML = 112;
            document.getElementById("s95").innerHTML = 116;
            document.getElementById("s99").innerHTML = 123;
            //Diastolic
            document.getElementById("d50").innerHTML = 55;
            document.getElementById("d90").innerHTML = 70;
            document.getElementById("d95").innerHTML = 74;
            document.getElementById("d99").innerHTML = 82;
        }
    }


    if (g==1 && a==6){
        if (h<115.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 91;
            document.getElementById("s90").innerHTML = 105;
            document.getElementById("s95").innerHTML = 109;
            document.getElementById("s99").innerHTML = 116;
            //Diastolic
            document.getElementById("d50").innerHTML = 53;
            document.getElementById("d90").innerHTML = 68;
            document.getElementById("d95").innerHTML = 72;
            document.getElementById("d99").innerHTML = 80;
        }
    }


    if (g==1 && a==6){
        if (h>115 && h<120.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 92;
            document.getElementById("s90").innerHTML = 106;
            document.getElementById("s95").innerHTML = 110;
            document.getElementById("s99").innerHTML = 117;
            //Diastolic
            document.getElementById("d50").innerHTML = 53;
            document.getElementById("d90").innerHTML = 68;
            document.getElementById("d95").innerHTML = 72;
            document.getElementById("d99").innerHTML = 80;
        }
    }


    if (g==1 && a==6){
        if (h>120 && h<125.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 94;
            document.getElementById("s90").innerHTML = 108;
            document.getElementById("s95").innerHTML = 112;
            document.getElementById("s99").innerHTML = 119;
            //Diastolic
            document.getElementById("d50").innerHTML = 54;
            document.getElementById("d90").innerHTML = 69;
            document.getElementById("d95").innerHTML = 73;
            document.getElementById("d99").innerHTML = 81;
        }
    }


    if (g==1 && a==6){
        if (h>125 && h<129.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 96;
            document.getElementById("s90").innerHTML = 110;
            document.getElementById("s95").innerHTML = 114;
            document.getElementById("s99").innerHTML = 121;
            //Diastolic
            document.getElementById("d50").innerHTML = 55;
            document.getElementById("d90").innerHTML = 70;
            document.getElementById("d95").innerHTML = 74;
            document.getElementById("d99").innerHTML = 82;
        }
    }


    if (g==1 && a==6){
        if (h>129 && h<137.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 98;
            document.getElementById("s90").innerHTML = 111;
            document.getElementById("s95").innerHTML = 115;
            document.getElementById("s99").innerHTML = 123;
            //Diastolic
            document.getElementById("d50").innerHTML = 56;
            document.getElementById("d90").innerHTML = 71;
            document.getElementById("d95").innerHTML = 75;
            document.getElementById("d99").innerHTML = 83;
        }
    }


    if (g==1 && a==6){
        if (h>137 && h<143.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 99;
            document.getElementById("s90").innerHTML = 113;
            document.getElementById("s95").innerHTML = 117;
            document.getElementById("s99").innerHTML = 124;
            //Diastolic
            document.getElementById("d50").innerHTML = 57;
            document.getElementById("d90").innerHTML = 72;
            document.getElementById("d95").innerHTML = 76;
            document.getElementById("d99").innerHTML = 84;
        }
    }


    if (g==1 && a==6){
        if (h>143){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 100;
            document.getElementById("s90").innerHTML = 113;
            document.getElementById("s95").innerHTML = 117;
            document.getElementById("s99").innerHTML = 124;
            //Diastolic
            document.getElementById("d50").innerHTML = 57;
            document.getElementById("d90").innerHTML = 72;
            document.getElementById("d95").innerHTML = 76;
            document.getElementById("d99").innerHTML = 84;
        }
    }


    if (g==1 && a==7){
        if (h<126.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 92;
            document.getElementById("s90").innerHTML = 106;
            document.getElementById("s95").innerHTML = 110;
            document.getElementById("s99").innerHTML = 117;
            //Diastolic
            document.getElementById("d50").innerHTML = 55;
            document.getElementById("d90").innerHTML = 70;
            document.getElementById("d95").innerHTML = 74;
            document.getElementById("d99").innerHTML = 82;
        }
    }


    if (g==1 && a==7){
        if (h>126 && h<128.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 94;
            document.getElementById("s90").innerHTML = 107; 
            document.getElementById("s95").innerHTML = 111;
            document.getElementById("s99").innerHTML = 118;
            //Diastolic
            document.getElementById("d50").innerHTML = 55;
            document.getElementById("d90").innerHTML = 70;
            document.getElementById("d95").innerHTML = 74;
            document.getElementById("d99").innerHTML = 82;
        }
    }


    if (g==1 && a==7){
        if (h>128 && h<133.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 95;
            document.getElementById("s90").innerHTML = 109;
            document.getElementById("s95").innerHTML = 113;
            document.getElementById("s99").innerHTML = 120;
            //Diastolic
            document.getElementById("d50").innerHTML = 56;
            document.getElementById("d90").innerHTML = 71;
            document.getElementById("d95").innerHTML = 75;
            document.getElementById("d99").innerHTML = 83;
        }
    }


    if (g==1 && a==7){
        if (h>133 && h<140.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 97;
            document.getElementById("s90").innerHTML = 111;
            document.getElementById("s95").innerHTML = 115;
            document.getElementById("s99").innerHTML = 122;
            //Diastolic
            document.getElementById("d50").innerHTML = 57;
            document.getElementById("d90").innerHTML = 72;
            document.getElementById("d95").innerHTML = 76;
            document.getElementById("d99").innerHTML = 84;
        }
    }


    if (g==1 && a==7){
        if (h>140 && h<145.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 99;
            document.getElementById("s90").innerHTML = 113;
            document.getElementById("s95").innerHTML = 117;
            document.getElementById("s99").innerHTML = 124;
            //Diastolic
            document.getElementById("d50").innerHTML = 58;
            document.getElementById("d90").innerHTML = 73;
            document.getElementById("d95").innerHTML = 77;
            document.getElementById("d99").innerHTML = 85;
        }
    }


    if (g==1 && a==7){
        if (h>145 && h<150.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 100;
            document.getElementById("s90").innerHTML = 114;
            document.getElementById("s95").innerHTML = 118;
            document.getElementById("s99").innerHTML = 125;
            //Diastolic
            document.getElementById("d50").innerHTML = 59;
            document.getElementById("d90").innerHTML = 74;
            document.getElementById("d95").innerHTML = 78;
            document.getElementById("d99").innerHTML = 86;
        }
    }


    if (g==1 && a==7){
        if (h>150){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 101;
            document.getElementById("s90").innerHTML = 115;
            document.getElementById("s95").innerHTML = 119;
            document.getElementById("s99").innerHTML = 126;
            //Diastolic
            document.getElementById("d50").innerHTML = 59;
            document.getElementById("d90").innerHTML = 74;
            document.getElementById("d95").innerHTML = 78;
            document.getElementById("d99").innerHTML = 86;
        }
    }


    if (g==1 && a==8){
        if (h<133.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 94;
            document.getElementById("s90").innerHTML = 107;
            document.getElementById("s95").innerHTML = 111;
            document.getElementById("s99").innerHTML = 119;
            //Diastolic
            document.getElementById("d50").innerHTML = 56;
            document.getElementById("d90").innerHTML = 71;
            document.getElementById("d95").innerHTML = 75;
            document.getElementById("d99").innerHTML = 83;
        }
    }


    if (g==1 && a==8){
        if (h>133 && h<136.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 95;
            document.getElementById("s90").innerHTML = 109;
            document.getElementById("s95").innerHTML = 113;
            document.getElementById("s99").innerHTML = 120;
            //Diastolic
            document.getElementById("d50").innerHTML = 57;
            document.getElementById("d90").innerHTML = 72;
            document.getElementById("d95").innerHTML = 76;
            document.getElementById("d99").innerHTML = 84;
        }
    }


    if (g==1 && a==8){
        if (h>136 && h<140.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 97;
            document.getElementById("s90").innerHTML = 110;
            document.getElementById("s95").innerHTML = 114;
            document.getElementById("s99").innerHTML = 122;
            //Diastolic
            document.getElementById("d50").innerHTML = 58;
            document.getElementById("d90").innerHTML = 72;
            document.getElementById("d95").innerHTML = 77;
            document.getElementById("d99").innerHTML = 85;
        }
    }


    if (g==1 && a==8){
        if (h>140 && h<145.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 99;
            document.getElementById("s90").innerHTML = 112;
            document.getElementById("s95").innerHTML = 116;
            document.getElementById("s99").innerHTML = 123;
            //Diastolic
            document.getElementById("d50").innerHTML = 59;
            document.getElementById("d90").innerHTML = 73;
            document.getElementById("d95").innerHTML = 78;
            document.getElementById("d99").innerHTML = 86;
        }
    }


    if (g==1 && a==8){
        if (h>145 && h<150.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 100;
            document.getElementById("s90").innerHTML = 114;
            document.getElementById("s95").innerHTML = 118;
            document.getElementById("s99").innerHTML = 125;
            //Diastolic
            document.getElementById("d50").innerHTML = 60;
            document.getElementById("d90").innerHTML = 74;
            document.getElementById("d95").innerHTML = 79;
            document.getElementById("d99").innerHTML = 87;
        }
    }


    if (g==1 && a==8){
        if (h>150 && h<154.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 102;
            document.getElementById("s90").innerHTML = 116;
            document.getElementById("s95").innerHTML = 120;
            document.getElementById("s99").innerHTML = 127;
            //Diastolic
            document.getElementById("d50").innerHTML = 60;
            document.getElementById("d90").innerHTML = 75;
            document.getElementById("d95").innerHTML = 79;
            document.getElementById("d99").innerHTML = 87;
        }
    }


    if (g==1 && a==8){
        if (h>154){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 102;
            document.getElementById("s90").innerHTML = 116;
            document.getElementById("s95").innerHTML = 120;
            document.getElementById("s99").innerHTML = 127;
            //Diastolic
            document.getElementById("d50").innerHTML = 60;
            document.getElementById("d90").innerHTML = 75;
            document.getElementById("d95").innerHTML = 79;
            document.getElementById("d99").innerHTML = 87;
        }
    }


    if (g==1 && a==9){
        if (h<138.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 95;
            document.getElementById("s90").innerHTML = 109;
            document.getElementById("s95").innerHTML = 113;
            document.getElementById("s99").innerHTML = 120;
            //Diastolic
            document.getElementById("d50").innerHTML = 57;
            document.getElementById("d90").innerHTML = 72;
            document.getElementById("d95").innerHTML = 76;
            document.getElementById("d99").innerHTML = 84;
        }
    }


    if (g==1 && a==9){
        if (h>138 && h<141.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 96;
            document.getElementById("s90").innerHTML = 110;
            document.getElementById("s95").innerHTML = 114;
            document.getElementById("s99").innerHTML = 121;
            //Diastolic
            document.getElementById("d50").innerHTML = 58;
            document.getElementById("d90").innerHTML = 73;
            document.getElementById("d95").innerHTML = 77;
            document.getElementById("d99").innerHTML = 85;
        }
    }


    if (g==1 && a==9){
        if (h>141 && h<147.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 98;
            document.getElementById("s90").innerHTML = 112;
            document.getElementById("s95").innerHTML = 116;
            document.getElementById("s99").innerHTML = 123;
            //Diastolic
            document.getElementById("d50").innerHTML = 59;
            document.getElementById("d90").innerHTML = 74;
            document.getElementById("d95").innerHTML = 78;
            document.getElementById("d99").innerHTML = 86;
        }
    }


    if (g==1 && a==9){
        if (h>147 && h<152.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 100;
            document.getElementById("s90").innerHTML = 114;
            document.getElementById("s95").innerHTML = 118;
            document.getElementById("s99").innerHTML = 125;
            //Diastolic
            document.getElementById("d50").innerHTML = 60;
            document.getElementById("d90").innerHTML = 75;
            document.getElementById("d95").innerHTML = 79;
            document.getElementById("d99").innerHTML = 87;
        }
    }


    if (g==1 && a==9){
        if (h>152 && h<157.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 102;
            document.getElementById("s90").innerHTML = 115;
            document.getElementById("s95").innerHTML = 119;
            document.getElementById("s99").innerHTML = 127;
            //Diastolic
            document.getElementById("d50").innerHTML = 61;
            document.getElementById("d90").innerHTML = 76;
            document.getElementById("d95").innerHTML = 81;
            document.getElementById("d99").innerHTML = 88;
        }
    }


    if (g==1 && a==9){
        if (h>157 && h<161.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 103;
            document.getElementById("s90").innerHTML = 117;
            document.getElementById("s95").innerHTML = 121;
            document.getElementById("s99").innerHTML = 128;
            //Diastolic
            document.getElementById("d50").innerHTML = 61;
            document.getElementById("d90").innerHTML = 76;
            document.getElementById("d95").innerHTML = 81;
            document.getElementById("d99").innerHTML = 88;
        }
    }


    if (g==1 && a==9){
        if (h>161){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 104;
            document.getElementById("s90").innerHTML = 118;
            document.getElementById("s95").innerHTML = 121;
            document.getElementById("s99").innerHTML = 129;
            //Diastolic
            document.getElementById("d50").innerHTML = 62;
            document.getElementById("d90").innerHTML = 77;
            document.getElementById("d95").innerHTML = 81;
            document.getElementById("d99").innerHTML = 89;
        }
    }


    if (g==1 && a==10){
        if (h<142.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 97;
            document.getElementById("s90").innerHTML = 111;
            document.getElementById("s95").innerHTML = 115;
            document.getElementById("s99").innerHTML = 122;
            //Diastolic
            document.getElementById("d50").innerHTML = 58;
            document.getElementById("d90").innerHTML = 73;
            document.getElementById("d95").innerHTML = 77;
            document.getElementById("d99").innerHTML = 85;
        }
    }


    if (g==1 && a==10){
        if (h>142 && h<146.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 98;
            document.getElementById("s90").innerHTML = 112;
            document.getElementById("s95").innerHTML = 116;
            document.getElementById("s99").innerHTML = 123;
            //Diastolic
            document.getElementById("d50").innerHTML = 59;
            document.getElementById("d90").innerHTML = 73;
            document.getElementById("d95").innerHTML = 78;
            document.getElementById("d99").innerHTML = 86;
        }
    }


    if (g==1 && a==10){
        if (h>146 && h<150.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 100;
            document.getElementById("s90").innerHTML = 114;
            document.getElementById("s95").innerHTML = 117;
            document.getElementById("s99").innerHTML = 125;
            //Diastolic
            document.getElementById("d50").innerHTML = 60;
            document.getElementById("d90").innerHTML = 74;
            document.getElementById("d95").innerHTML = 79;
            document.getElementById("d99").innerHTML = 86;
        }
    }


    if (g==1 && a==10){
        if (h>150 && h<156.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 102;
            document.getElementById("s90").innerHTML = 115;
            document.getElementById("s95").innerHTML = 119;
            document.getElementById("s99").innerHTML = 127;
            //Diastolic
            document.getElementById("d50").innerHTML = 61;
            document.getElementById("d90").innerHTML = 75;
            document.getElementById("d95").innerHTML = 80;
            document.getElementById("d99").innerHTML = 88;
        }
    }


    if (g==1 && a==10){
        if (h>156 && h<161.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 103;
            document.getElementById("s90").innerHTML = 117;
            document.getElementById("s95").innerHTML = 121;
            document.getElementById("s99").innerHTML = 128;
            //Diastolic
            document.getElementById("d50").innerHTML = 61;
            document.getElementById("d90").innerHTML = 76;
            document.getElementById("d95").innerHTML = 81;
            document.getElementById("d99").innerHTML = 88;
        }
    }


    if (g==1 && a==10){
        if (h>161 && h<165.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 105;
            document.getElementById("s90").innerHTML = 119;
            document.getElementById("s95").innerHTML = 122;
            document.getElementById("s99").innerHTML = 130;
            //Diastolic
            document.getElementById("d50").innerHTML = 62;
            document.getElementById("d90").innerHTML = 77;
            document.getElementById("d95").innerHTML = 81;
            document.getElementById("d99").innerHTML = 89;
        }
    }


    if (g==1 && a==10){
        if (h>165){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 106;
            document.getElementById("s90").innerHTML = 119;
            document.getElementById("s95").innerHTML = 123;
            document.getElementById("s99").innerHTML = 130;
            //Diastolic
            document.getElementById("d50").innerHTML = 63;
            document.getElementById("d90").innerHTML = 78;
            document.getElementById("d95").innerHTML = 82;
            document.getElementById("d99").innerHTML = 90;
        }
    }


    if (g==1 && a==11){
        if (h<145){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 99;
            document.getElementById("s90").innerHTML = 113;
            document.getElementById("s95").innerHTML = 117;
            document.getElementById("s99").innerHTML = 124;
            //Diastolic
            document.getElementById("d50").innerHTML = 59;
            document.getElementById("d90").innerHTML = 74;
            document.getElementById("d95").innerHTML = 78;
            document.getElementById("d99").innerHTML = 86;
        }
    }


    if (g==1 && a==11){
        if (h>145 && h<149.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 100;
            document.getElementById("s90").innerHTML = 114;
            document.getElementById("s95").innerHTML = 118;
            document.getElementById("s99").innerHTML = 125;
            //Diastolic
            document.getElementById("d50").innerHTML = 59;
            document.getElementById("d90").innerHTML = 74;
            document.getElementById("d95").innerHTML = 78;
            document.getElementById("d99").innerHTML = 86;
        }
    }


    if (g==1 && a==11){
        if (h>149 && h<155.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 102;
            document.getElementById("s90").innerHTML = 115;
            document.getElementById("s95").innerHTML = 119;
            document.getElementById("s99").innerHTML = 127;
            //Diastolic
            document.getElementById("d50").innerHTML = 60;
            document.getElementById("d90").innerHTML = 75;
            document.getElementById("d95").innerHTML = 79;
            document.getElementById("d99").innerHTML = 87;
        }
    }


    if (g==1 && a==11){
        if (h>155 && h<160.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 104;
            document.getElementById("s90").innerHTML = 117;
            document.getElementById("s95").innerHTML = 121;
            document.getElementById("s99").innerHTML = 129;
            //Diastolic
            document.getElementById("d50").innerHTML = 61;
            document.getElementById("d90").innerHTML = 76;
            document.getElementById("d95").innerHTML = 80;
            document.getElementById("d99").innerHTML = 88;
        }
    }


    if (g==1 && a==11){
        if (h>160 && h<165.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 105;
            document.getElementById("s90").innerHTML = 119;
            document.getElementById("s95").innerHTML = 123;
            document.getElementById("s99").innerHTML = 130;
            //Diastolic
            document.getElementById("d50").innerHTML = 62;
            document.getElementById("d90").innerHTML = 77;
            document.getElementById("d95").innerHTML = 81;
            document.getElementById("d99").innerHTML = 89;
        }
    }


    if (g==1 && a==11){
        if (h>165 && h<169.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 107;
            document.getElementById("s90").innerHTML = 120;
            document.getElementById("s95").innerHTML = 124;
            document.getElementById("s99").innerHTML = 132;
            //Diastolic
            document.getElementById("d50").innerHTML = 63;
            document.getElementById("d90").innerHTML = 78;
            document.getElementById("d95").innerHTML = 82;
            document.getElementById("d99").innerHTML = 90;
        }
    }


    if (g==1 && a==11){
        if (h>169){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 107;
            document.getElementById("s90").innerHTML = 121;
            document.getElementById("s95").innerHTML = 125;
            document.getElementById("s99").innerHTML = 132;
            //Diastolic
            document.getElementById("d50").innerHTML = 63;
            document.getElementById("d90").innerHTML = 78;
            document.getElementById("d95").innerHTML = 82;
            document.getElementById("d99").innerHTML = 90;
        }
    }


    if (g==1 && a==12){
        if (h<148.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 101;
            document.getElementById("s90").innerHTML = 115;
            document.getElementById("s95").innerHTML = 119;
            document.getElementById("s99").innerHTML = 126;
            //Diastolic
            document.getElementById("d50").innerHTML = 59;
            document.getElementById("d90").innerHTML = 74;
            document.getElementById("d95").innerHTML = 78;
            document.getElementById("d99").innerHTML = 86;
        }
    }


    if (g==1 && a==12){
        if (h>148 && h<153.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 102;
            document.getElementById("s90").innerHTML = 116;
            document.getElementById("s95").innerHTML = 120;
            document.getElementById("s99").innerHTML = 127;
            //Diastolic
            document.getElementById("d50").innerHTML = 60;
            document.getElementById("d90").innerHTML = 75;
            document.getElementById("d95").innerHTML = 79;
            document.getElementById("d99").innerHTML = 87;
        }
    }


    if (g==1 && a==12){
        if (h>153 && h<157.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 104;
            document.getElementById("s90").innerHTML = 118;
            document.getElementById("s95").innerHTML = 122;
            document.getElementById("s99").innerHTML = 129;
            //Diastolic
            document.getElementById("d50").innerHTML = 61;
            document.getElementById("d90").innerHTML = 75;
            document.getElementById("d95").innerHTML = 80;
            document.getElementById("d99").innerHTML = 88;
        }
    }


    if (g==1 && a==12){
        if (h>157 && h<163.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 106;
            document.getElementById("s90").innerHTML = 120;
            document.getElementById("s95").innerHTML = 123;
            document.getElementById("s99").innerHTML = 131;
            //Diastolic
            document.getElementById("d50").innerHTML = 62;
            document.getElementById("d90").innerHTML = 76;
            document.getElementById("d95").innerHTML = 81;
            document.getElementById("d99").innerHTML = 89;
        }
    }


    if (g==1 && a==12){
        if (h>163 && h<167.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 108;
            document.getElementById("s90").innerHTML = 121;
            document.getElementById("s95").innerHTML = 125;
            document.getElementById("s99").innerHTML = 133;
            //Diastolic
            document.getElementById("d50").innerHTML = 63;
            document.getElementById("d90").innerHTML = 77;
            document.getElementById("d95").innerHTML = 82;
            document.getElementById("d99").innerHTML = 90;
        }
    }


    if (g==1 && a==12){
        if (h>167 && h<170.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 109;
            document.getElementById("s90").innerHTML = 123;
            document.getElementById("s95").innerHTML = 127;
            document.getElementById("s99").innerHTML = 134;
            //Diastolic
            document.getElementById("d50").innerHTML = 63;
            document.getElementById("d90").innerHTML = 78;
            document.getElementById("d95").innerHTML = 82;
            document.getElementById("d99").innerHTML = 90;
        }
    }


    if (g==1 && a==12){
        if (h>170){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 110;
            document.getElementById("s90").innerHTML = 123;
            document.getElementById("s95").innerHTML = 127;
            document.getElementById("s99").innerHTML = 135;
            //Diastolic
            document.getElementById("d50").innerHTML = 64;
            document.getElementById("d90").innerHTML = 79;
            document.getElementById("d95").innerHTML = 83;
            document.getElementById("d99").innerHTML = 91;
        }
    }


    if (g==1 && a==13){
        if (h<150.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 104;
            document.getElementById("s90").innerHTML = 117;
            document.getElementById("s95").innerHTML = 121;
            document.getElementById("s99").innerHTML = 128;
            //Diastolic
            document.getElementById("d50").innerHTML = 60;
            document.getElementById("d90").innerHTML = 75;
            document.getElementById("d95").innerHTML = 79;
            document.getElementById("d99").innerHTML = 87;
        }
    }


    if (g==1 && a==13){
        if (h>150 && h<154.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 105;
            document.getElementById("s90").innerHTML = 118;
            document.getElementById("s95").innerHTML = 122;
            document.getElementById("s99").innerHTML = 130;
            //Diastolic
            document.getElementById("d50").innerHTML = 60;
            document.getElementById("d90").innerHTML = 75;
            document.getElementById("d95").innerHTML = 79;
            document.getElementById("d99").innerHTML = 87;
        }
    }


    if (g==1 && a==13){
        if (h>154 && h<159.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 106;
            document.getElementById("s90").innerHTML = 120;
            document.getElementById("s95").innerHTML = 124;
            document.getElementById("s99").innerHTML = 131;
            //Diastolic
            document.getElementById("d50").innerHTML = 61;
            document.getElementById("d90").innerHTML = 76;
            document.getElementById("d95").innerHTML = 80;
            document.getElementById("d99").innerHTML = 88;
        }
    }


    if (g==1 && a==13){
        if (h>159 && h<165.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 108;
            document.getElementById("s90").innerHTML = 122;
            document.getElementById("s95").innerHTML = 126;
            document.getElementById("s99").innerHTML = 133;
            //Diastolic
            document.getElementById("d50").innerHTML = 62;
            document.getElementById("d90").innerHTML = 77;
            document.getElementById("d95").innerHTML = 81;
            document.getElementById("d99").innerHTML = 89;
        }
    }


    if (g==1 && a==11){
        if (h>165 && h<170.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 110;
            document.getElementById("s90").innerHTML = 124;
            document.getElementById("s95").innerHTML = 128;
            document.getElementById("s99").innerHTML = 135;
            //Diastolic
            document.getElementById("d50").innerHTML = 63;
            document.getElementById("d90").innerHTML = 78;
            document.getElementById("d95").innerHTML = 82;
            document.getElementById("d99").innerHTML = 90;
        }
    }


    if (g==1 && a==11){
        if (h>170 && h<174.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 111;
            document.getElementById("s90").innerHTML = 125;
            document.getElementById("s95").innerHTML = 129;
            document.getElementById("s99").innerHTML = 136;
            //Diastolic
            document.getElementById("d50").innerHTML = 64;
            document.getElementById("d90").innerHTML = 79;
            document.getElementById("d95").innerHTML = 83;
            document.getElementById("d99").innerHTML = 91;
        }
    }


    if (g==1 && a==11){
        if (h>174){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 112;
            document.getElementById("s90").innerHTML = 126;
            document.getElementById("s95").innerHTML = 130;
            document.getElementById("s99").innerHTML = 137;
            //Diastolic
            document.getElementById("d50").innerHTML = 64;
            document.getElementById("d90").innerHTML = 79;
            document.getElementById("d95").innerHTML = 83;
            document.getElementById("d99").innerHTML = 91;
        }
    }


    if (g==2 && a==1){
        if (h<66.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 83;
            document.getElementById("s90").innerHTML = 97;
            document.getElementById("s95").innerHTML = 100;
            document.getElementById("s99").innerHTML = 108;
            //Diastolic
            document.getElementById("d50").innerHTML = 38;
            document.getElementById("d90").innerHTML = 52;
            document.getElementById("d95").innerHTML = 56;
            document.getElementById("d99").innerHTML = 64;
        }
    }


    if (g==2 && a==1){
        if (h>66 && h<69.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 84;
            document.getElementById("s90").innerHTML = 97;
            document.getElementById("s95").innerHTML = 101;
            document.getElementById("s99").innerHTML = 108;
            //Diastolic
            document.getElementById("d50").innerHTML = 39;
            document.getElementById("d90").innerHTML = 53;
            document.getElementById("d95").innerHTML = 57;
            document.getElementById("d99").innerHTML = 64;
        }
    }


    if (g==2 && a==1){
        if (h>69 && h<71.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 85;
            document.getElementById("s90").innerHTML = 98;
            document.getElementById("s95").innerHTML = 102;
            document.getElementById("s99").innerHTML = 109;
            //Diastolic
            document.getElementById("d50").innerHTML = 39;
            document.getElementById("d90").innerHTML = 53;
            document.getElementById("d95").innerHTML = 57;
            document.getElementById("d99").innerHTML = 65;
        }
    }


    if (g==2 && a==1){
        if (h>71 && h<74.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 86;
            document.getElementById("s90").innerHTML = 100;
            document.getElementById("s95").innerHTML = 104;
            document.getElementById("s99").innerHTML = 111;
            //Diastolic
            document.getElementById("d50").innerHTML = 40;
            document.getElementById("d90").innerHTML = 54;
            document.getElementById("d95").innerHTML = 58;
            document.getElementById("d99").innerHTML = 65;
        }
    }


    if (g==2 && a==1){
        if (h>74 && h<76.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 88;
            document.getElementById("s90").innerHTML = 101;
            document.getElementById("s95").innerHTML = 105;
            document.getElementById("s99").innerHTML = 112;
            //Diastolic
            document.getElementById("d50").innerHTML = 41;
            document.getElementById("d90").innerHTML = 55;
            document.getElementById("d95").innerHTML = 59;
            document.getElementById("d99").innerHTML = 66;
        }
    }


    if (g==2 && a==1){
        if (h>76 && h<79.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 89;
            document.getElementById("s90").innerHTML = 102;
            document.getElementById("s95").innerHTML = 106;
            document.getElementById("s99").innerHTML = 113;
            //Diastolic
            document.getElementById("d50").innerHTML = 41;
            document.getElementById("d90").innerHTML = 55;
            document.getElementById("d95").innerHTML = 59;
            document.getElementById("d99").innerHTML = 67;
        }
    }


    if (g==2 && a==1){
        if (h>79){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 90;
            document.getElementById("s90").innerHTML = 103;
            document.getElementById("s95").innerHTML = 107;
            document.getElementById("s99").innerHTML = 114;
            //Diastolic
            document.getElementById("d50").innerHTML = 42;
            document.getElementById("d90").innerHTML = 56;
            document.getElementById("d95").innerHTML = 60;
            document.getElementById("d99").innerHTML = 67;
        }
    }


    if (g==2 && a==2){
        if (h<76.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 85;
            document.getElementById("s90").innerHTML = 98;
            document.getElementById("s95").innerHTML = 102;
            document.getElementById("s99").innerHTML = 109;
            //Diastolic
            document.getElementById("d50").innerHTML = 43;
            document.getElementById("d90").innerHTML = 57;
            document.getElementById("d95").innerHTML = 61;
            document.getElementById("d99").innerHTML = 69;
        }
    }


    if (g==2 && a==2){
        if (h>76 && h<80.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 85;
            document.getElementById("s90").innerHTML = 99;
            document.getElementById("s95").innerHTML = 103;
            document.getElementById("s99").innerHTML = 110;
            //Diastolic
            document.getElementById("d50").innerHTML = 44;
            document.getElementById("d90").innerHTML = 58;
            document.getElementById("d95").innerHTML = 62;
            document.getElementById("d99").innerHTML = 69;
        }
    }


    if (g==2 && a==2){
        if (h>80 && h<83.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 87;
            document.getElementById("s90").innerHTML = 100;
            document.getElementById("s95").innerHTML = 104;
            document.getElementById("s99").innerHTML = 111;
            //Diastolic
            document.getElementById("d50").innerHTML = 44;
            document.getElementById("d90").innerHTML = 58;
            document.getElementById("d95").innerHTML = 62;
            document.getElementById("d99").innerHTML = 70;
        }
    }


    if (g==2 && a==2){
        if (h>83 && h<86.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 88;
            document.getElementById("s90").innerHTML = 101;
            document.getElementById("s95").innerHTML = 105;
            document.getElementById("s99").innerHTML = 112;
            //Diastolic
            document.getElementById("d50").innerHTML = 45;
            document.getElementById("d90").innerHTML = 59;
            document.getElementById("d95").innerHTML = 63;
            document.getElementById("d99").innerHTML = 70;
        }
    }


    if (g==2 && a==2){
        if (h>86 && h<89.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 89;
            document.getElementById("s90").innerHTML = 103;
            document.getElementById("s95").innerHTML = 107;
            document.getElementById("s99").innerHTML = 114;
            //Diastolic
            document.getElementById("d50").innerHTML = 46;
            document.getElementById("d90").innerHTML = 60;
            document.getElementById("d95").innerHTML = 64;
            document.getElementById("d99").innerHTML = 71;
        }
    }


    if (g==2 && a==2){
        if (h>89 && h<93.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 91;
            document.getElementById("s90").innerHTML = 104;
            document.getElementById("s95").innerHTML = 106;
            document.getElementById("s99").innerHTML = 115;
            //Diastolic
            document.getElementById("d50").innerHTML = 46;
            document.getElementById("d90").innerHTML = 61;
            document.getElementById("d95").innerHTML = 65;
            document.getElementById("d99").innerHTML = 72;
        }
    }

    if (g==2 && a==2){
        if (h>93){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 91;
            document.getElementById("s90").innerHTML = 105;
            document.getElementById("s95").innerHTML = 109;
            document.getElementById("s99").innerHTML = 116;
            //Diastolic
            document.getElementById("d50").innerHTML = 47;
            document.getElementById("d90").innerHTML = 61;
            document.getElementById("d95").innerHTML = 65;
            document.getElementById("d99").innerHTML = 72;
        }
    }


    if (g==2 && a==3){
        if (h<84.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 86;
            document.getElementById("s90").innerHTML = 100;
            document.getElementById("s95").innerHTML = 104;
            document.getElementById("s99").innerHTML = 111;
            //Diastolic
            document.getElementById("d50").innerHTML = 47;
            document.getElementById("d90").innerHTML = 61;
            document.getElementById("d95").innerHTML = 65;
            document.getElementById("d99").innerHTML = 73;
        }
    }


    if (g==2 && a==3){
        if (h>84 && h<87.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 87;
            document.getElementById("s90").innerHTML = 100;
            document.getElementById("s95").innerHTML = 104;
            document.getElementById("s99").innerHTML = 111;
            //Diastolic
            document.getElementById("d50").innerHTML = 48;
            document.getElementById("d90").innerHTML = 62;
            document.getElementById("d95").innerHTML = 66;
            document.getElementById("d99").innerHTML = 73;
        }
    }


    if (g==2 && a==3){
        if (h>87 && h<91.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 88;
            document.getElementById("s90").innerHTML = 102;
            document.getElementById("s95").innerHTML = 105;
            document.getElementById("s99").innerHTML = 113;
            //Diastolic
            document.getElementById("d50").innerHTML = 48;
            document.getElementById("d90").innerHTML = 62;
            document.getElementById("d95").innerHTML = 66;
            document.getElementById("d99").innerHTML = 74;
        }
    }


    if (g==2 && a==3){
        if (h>91 && h<95.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 89;
            document.getElementById("s90").innerHTML = 103;
            document.getElementById("s95").innerHTML = 107;
            document.getElementById("s99").innerHTML = 114;
            //Diastolic
            document.getElementById("d50").innerHTML = 49;
            document.getElementById("d90").innerHTML = 63;
            document.getElementById("d95").innerHTML = 67;
            document.getElementById("d99").innerHTML = 74;
        }
    }


    if (g==2 && a==3){
        if (h>95 && h<99.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 91;
            document.getElementById("s90").innerHTML = 104;
            document.getElementById("s95").innerHTML = 108;
            document.getElementById("s99").innerHTML = 115;
            //Diastolic
            document.getElementById("d50").innerHTML = 50;
            document.getElementById("d90").innerHTML = 64;
            document.getElementById("d95").innerHTML = 68;
            document.getElementById("d99").innerHTML = 75;
        }
    }


    if (g==2 && a==3){
        if (h>99 && h<102.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 92;
            document.getElementById("s90").innerHTML = 106;
            document.getElementById("s95").innerHTML = 109;
            document.getElementById("s99").innerHTML = 116;
            //Diastolic
            document.getElementById("d50").innerHTML = 50;
            document.getElementById("d90").innerHTML = 64;
            document.getElementById("d95").innerHTML = 68;
            document.getElementById("d99").innerHTML = 76;
        }
    }


    if (g==2 && a==3){
        if (h>102){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 93;
            document.getElementById("s90").innerHTML = 106;
            document.getElementById("s95").innerHTML = 110;
            document.getElementById("s99").innerHTML = 117;
            //Diastolic
            document.getElementById("d50").innerHTML = 51;
            document.getElementById("d90").innerHTML = 65;
            document.getElementById("d95").innerHTML = 69;
            document.getElementById("d99").innerHTML = 76;
        }
    }


    if (g==2 && a==4){
        if (h<90.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 88;
            document.getElementById("s90").innerHTML = 101;
            document.getElementById("s95").innerHTML = 105;
            document.getElementById("s99").innerHTML = 112;
            //Diastolic
            document.getElementById("d50").innerHTML = 50;
            document.getElementById("d90").innerHTML = 64;
            document.getElementById("d95").innerHTML = 68;
            document.getElementById("d99").innerHTML = 76;
        }
    }


    if (g==2 && a==4){
        if (h>90 && h<94.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 88;
            document.getElementById("s90").innerHTML = 101;
            document.getElementById("s95").innerHTML = 105;
            document.getElementById("s99").innerHTML = 112;
            //Diastolic
            document.getElementById("d50").innerHTML = 50;
            document.getElementById("d90").innerHTML = 64;
            document.getElementById("d95").innerHTML = 68;
            document.getElementById("d99").innerHTML = 76;
        }
    }


    if (g==2 && a==4){
        if (h>94 && h<98.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 90;
            document.getElementById("s90").innerHTML = 103;
            document.getElementById("s95").innerHTML = 107;
            document.getElementById("s99").innerHTML = 114;
            //Diastolic
            document.getElementById("d50").innerHTML = 51;
            document.getElementById("d90").innerHTML = 65;
            document.getElementById("d95").innerHTML = 69;
            document.getElementById("d99").innerHTML = 76;
        }
    }


    if (g==2 && a==4){
        if (h>98 && h<103.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 91;
            document.getElementById("s90").innerHTML = 104;
            document.getElementById("s95").innerHTML = 108;
            document.getElementById("s99").innerHTML = 115;
            //Diastolic
            document.getElementById("d50").innerHTML = 52;
            document.getElementById("d90").innerHTML = 66;
            document.getElementById("d95").innerHTML = 70;
            document.getElementById("d99").innerHTML = 77;
        }
    }


    if (g==2 && a==4){
        if (h>103 && h<107.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 92;
            document.getElementById("s90").innerHTML = 106;
            document.getElementById("s95").innerHTML = 110;
            document.getElementById("s99").innerHTML = 117;
            //Diastolic
            document.getElementById("d50").innerHTML = 52;
            document.getElementById("d90").innerHTML = 67;
            document.getElementById("d95").innerHTML = 71;
            document.getElementById("d99").innerHTML = 78;
        }
    }


    if (g==2 && a==4){
        if (h>107 && h<111.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 94;
            document.getElementById("s90").innerHTML = 107;
            document.getElementById("s95").innerHTML = 111;
            document.getElementById("s99").innerHTML = 118;
            //Diastolic
            document.getElementById("d50").innerHTML = 53;
            document.getElementById("d90").innerHTML = 67;
            document.getElementById("d95").innerHTML = 71;
            document.getElementById("d99").innerHTML = 79;
        }
    }


    if (g==2 && a==4){
        if (h>111){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 94;
            document.getElementById("s90").innerHTML = 108;
            document.getElementById("s95").innerHTML = 112;
            document.getElementById("s99").innerHTML = 119;
            //Diastolic
            document.getElementById("d50").innerHTML = 54;
            document.getElementById("d90").innerHTML = 68;
            document.getElementById("d95").innerHTML = 72;
            document.getElementById("d99").innerHTML = 79;
        }
    }


    if (g==2 && a==5){
        if (h<105.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 89;
            document.getElementById("s90").innerHTML = 103;
            document.getElementById("s95").innerHTML = 107;
            document.getElementById("s99").innerHTML = 114;
            //Diastolic
            document.getElementById("d50").innerHTML = 52;
            document.getElementById("d90").innerHTML = 66;
            document.getElementById("d95").innerHTML = 70;
            document.getElementById("d99").innerHTML = 78;
        }
    }


    if (g==2 && a==5){
        if (h>105 && h<107.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 90;
            document.getElementById("s90").innerHTML = 103;
            document.getElementById("s95").innerHTML = 107;
            document.getElementById("s99").innerHTML = 114;
            //Diastolic
            document.getElementById("d50").innerHTML = 52;
            document.getElementById("d90").innerHTML = 66;
            document.getElementById("d95").innerHTML = 70;
            document.getElementById("d99").innerHTML = 78;
        }
    }


    if (g==2 && a==5){
        if (h>107 && h<110.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 91;
            document.getElementById("s90").innerHTML = 105;
            document.getElementById("s95").innerHTML = 108;
            document.getElementById("s99").innerHTML = 116;
            //Diastolic
            document.getElementById("d50").innerHTML = 53;
            document.getElementById("d90").innerHTML = 67;
            document.getElementById("d95").innerHTML = 71;
            document.getElementById("d99").innerHTML = 79;
        }
    }


    if (g==2 && a==5){
        if (h>110 && h<115.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 93;
            document.getElementById("s90").innerHTML = 106;
            document.getElementById("s95").innerHTML = 110;
            document.getElementById("s99").innerHTML = 117;
            //Diastolic
            document.getElementById("d50").innerHTML = 54;
            document.getElementById("d90").innerHTML = 68;
            document.getElementById("d95").innerHTML = 72;
            document.getElementById("d99").innerHTML = 79;
        }
    }


    if (g==2 && a==5){
        if (h>115 && h<117.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 94;
            document.getElementById("s90").innerHTML = 107;
            document.getElementById("s95").innerHTML = 111;
            document.getElementById("s99").innerHTML = 118;
            //Diastolic
            document.getElementById("d50").innerHTML = 55;
            document.getElementById("d90").innerHTML = 69;
            document.getElementById("d95").innerHTML = 73;
            document.getElementById("d99").innerHTML = 80;
        }
    }


    if (g==2 && a==5){
        if (h>117 && h<120.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 95;
            document.getElementById("s90").innerHTML = 109;
            document.getElementById("s95").innerHTML = 112;
            document.getElementById("s99").innerHTML = 120;
            //Diastolic
            document.getElementById("d50").innerHTML = 55;
            document.getElementById("d90").innerHTML = 69;
            document.getElementById("d95").innerHTML = 73;
            document.getElementById("d99").innerHTML = 81;
        }
    }


    if (g==2 && a==5){
        if (h>120){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 96;
            document.getElementById("s90").innerHTML = 109;
            document.getElementById("s95").innerHTML = 113;
            document.getElementById("s99").innerHTML = 120;
            //Diastolic
            document.getElementById("d50").innerHTML = 56;
            document.getElementById("d90").innerHTML = 70;
            document.getElementById("d95").innerHTML = 74;
            document.getElementById("d99").innerHTML = 81;
        }
    }



    if (g==2 && a==6){
        if (h<108.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 91;
            document.getElementById("s90").innerHTML = 104;
            document.getElementById("s95").innerHTML = 108;
            document.getElementById("s99").innerHTML = 115;
            //Diastolic
            document.getElementById("d50").innerHTML = 54;
            document.getElementById("d90").innerHTML = 68;
            document.getElementById("d95").innerHTML = 72;
            document.getElementById("d99").innerHTML = 80;
        }
    }


    if (g==2 && a==6){
        if (h>108 && h<115.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 92;
            document.getElementById("s90").innerHTML = 105;
            document.getElementById("s95").innerHTML = 109;
            document.getElementById("s99").innerHTML = 116;
            //Diastolic
            document.getElementById("d50").innerHTML = 54;
            document.getElementById("d90").innerHTML = 68;
            document.getElementById("d95").innerHTML = 72;
            document.getElementById("d99").innerHTML = 80;
        }
    }


    if (g==2 && a==6){
        if (h>115 && h<118.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 93;
            document.getElementById("s90").innerHTML = 106;
            document.getElementById("s95").innerHTML = 110;
            document.getElementById("s99").innerHTML = 117;
            //Diastolic
            document.getElementById("d50").innerHTML = 55;
            document.getElementById("d90").innerHTML = 69;
            document.getElementById("d95").innerHTML = 73;
            document.getElementById("d99").innerHTML = 80;
        }
    }


    if (g==2 && a==6){
        if (h>118 && h<123.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 94;
            document.getElementById("s90").innerHTML = 108;
            document.getElementById("s95").innerHTML = 111;
            document.getElementById("s99").innerHTML = 119;
            //Diastolic
            document.getElementById("d50").innerHTML = 56;
            document.getElementById("d90").innerHTML = 70;
            document.getElementById("d95").innerHTML = 74;
            document.getElementById("d99").innerHTML = 81;
        }
    }


    if (g==2 && a==6){
        if (h>123 && h<126.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 96;
            document.getElementById("s90").innerHTML = 109;
            document.getElementById("s95").innerHTML = 113;
            document.getElementById("s99").innerHTML = 120;
            //Diastolic
            document.getElementById("d50").innerHTML = 56;
            document.getElementById("d90").innerHTML = 70;
            document.getElementById("d95").innerHTML = 74;
            document.getElementById("d99").innerHTML = 82;
        }
    }


    if (g==2 && a==6){
        if (h>126 && h<130.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 97;
            document.getElementById("s90").innerHTML = 110;
            document.getElementById("s95").innerHTML = 114;
            document.getElementById("s99").innerHTML = 121;
            //Diastolic
            document.getElementById("d50").innerHTML = 57;
            document.getElementById("d90").innerHTML = 71;
            document.getElementById("d95").innerHTML = 75;
            document.getElementById("d99").innerHTML = 83;
        }
    }


    if (g==2 && a==6){
        if (h>130){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 98;
            document.getElementById("s90").innerHTML = 111;
            document.getElementById("s95").innerHTML = 115;
            document.getElementById("s99").innerHTML = 122;
            //Diastolic
            document.getElementById("d50").innerHTML = 58;
            document.getElementById("d90").innerHTML = 72;
            document.getElementById("d95").innerHTML = 76;
            document.getElementById("d99").innerHTML = 83;
        }
    }


    if (g==2 && a==7){
        if (h<117.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 93;
            document.getElementById("s90").innerHTML = 106;
            document.getElementById("s95").innerHTML = 110;
            document.getElementById("s99").innerHTML = 117;
            //Diastolic
            document.getElementById("d50").innerHTML = 55;
            document.getElementById("d90").innerHTML = 69;
            document.getElementById("d95").innerHTML = 73;
            document.getElementById("d99").innerHTML = 81;
        }
    }


    if (g==2 && a==7){
        if (h>117 && h<120.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 93;
            document.getElementById("s90").innerHTML = 107;
            document.getElementById("s95").innerHTML = 111;
            document.getElementById("s99").innerHTML = 118;
            //Diastolic
            document.getElementById("d50").innerHTML = 56;
            document.getElementById("d90").innerHTML = 70;
            document.getElementById("d95").innerHTML = 74;
            document.getElementById("d99").innerHTML = 81;
        }
    }


    if (g==2 && a==7){
        if (h>120 && h<124.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 95;
            document.getElementById("s90").innerHTML = 108;
            document.getElementById("s95").innerHTML = 112;
            document.getElementById("s99").innerHTML = 119;
            //Diastolic
            document.getElementById("d50").innerHTML = 56;
            document.getElementById("d90").innerHTML = 70;
            document.getElementById("d95").innerHTML = 74;
            document.getElementById("d99").innerHTML = 82;
        }
    }


    if (g==2 && a==7){
        if (h>124 && h<128.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 96;
            document.getElementById("s90").innerHTML = 109;
            document.getElementById("s95").innerHTML = 113;
            document.getElementById("s99").innerHTML = 120;
            //Diastolic
            document.getElementById("d50").innerHTML = 57;
            document.getElementById("d90").innerHTML = 71;
            document.getElementById("d95").innerHTML = 75;
            document.getElementById("d99").innerHTML = 82;
        }
    }


    if (g==2 && a==7){
        if (h>128 && h<132.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 97;
            document.getElementById("s90").innerHTML = 111;
            document.getElementById("s95").innerHTML = 115;
            document.getElementById("s99").innerHTML = 122;
            //Diastolic
            document.getElementById("d50").innerHTML = 58;
            document.getElementById("d90").innerHTML = 72;
            document.getElementById("d95").innerHTML = 76;
            document.getElementById("d99").innerHTML = 83;
        }
    }


    if (g==2 && a==7){
        if (h>132 && h<136.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 99;
            document.getElementById("s90").innerHTML = 112;
            document.getElementById("s95").innerHTML = 116;
            document.getElementById("s99").innerHTML = 123;
            //Diastolic
            document.getElementById("d50").innerHTML = 58;
            document.getElementById("d90").innerHTML = 72;
            document.getElementById("d95").innerHTML = 76;
            document.getElementById("d99").innerHTML = 84;
        }
    }


    if (g==2 && a==7){
        if (h>136){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 99;
            document.getElementById("s90").innerHTML = 113;
            document.getElementById("s95").innerHTML = 116;
            document.getElementById("s99").innerHTML = 124;
            //Diastolic
            document.getElementById("d50").innerHTML = 59;
            document.getElementById("d90").innerHTML = 73;
            document.getElementById("d95").innerHTML = 77;
            document.getElementById("d99").innerHTML = 84;
        }
    }



    if (g==2 && a==8){
        if (h<120.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 95;
            document.getElementById("s90").innerHTML = 108;
            document.getElementById("s95").innerHTML = 112;
            document.getElementById("s99").innerHTML = 119;
            //Diastolic
            document.getElementById("d50").innerHTML = 57;
            document.getElementById("d90").innerHTML = 71;
            document.getElementById("d95").innerHTML = 75;
            document.getElementById("d99").innerHTML = 82;
        }
    }



    if (g==2 && a==8){
        if (h>120 && h<123.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 95;
            document.getElementById("s90").innerHTML = 109;
            document.getElementById("s95").innerHTML = 112;
            document.getElementById("s99").innerHTML = 120;
            //Diastolic
            document.getElementById("d50").innerHTML = 57;
            document.getElementById("d90").innerHTML = 71;
            document.getElementById("d95").innerHTML = 75;
            document.getElementById("d99").innerHTML = 82;
        }
    }


    if (g==2 && a==8){
        if (h>123 && h<127.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 96;
            document.getElementById("s90").innerHTML = 110;
            document.getElementById("s95").innerHTML = 114;
            document.getElementById("s99").innerHTML = 121;
            //Diastolic
            document.getElementById("d50").innerHTML = 57;
            document.getElementById("d90").innerHTML = 71;
            document.getElementById("d95").innerHTML = 75;
            document.getElementById("d99").innerHTML = 83;
        }
    }


    if (g==2 && a==8){
        if (h>127 && h<130.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 98;
            document.getElementById("s90").innerHTML = 111;
            document.getElementById("s95").innerHTML = 115;
            document.getElementById("s99").innerHTML = 122;
            //Diastolic
            document.getElementById("d50").innerHTML = 58;
            document.getElementById("d90").innerHTML = 72;
            document.getElementById("d95").innerHTML = 76;
            document.getElementById("d99").innerHTML = 83;
        }
    }


    if (g==2 && a==8){
        if (h>130 && h<136.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 99;
            document.getElementById("s90").innerHTML = 113;
            document.getElementById("s95").innerHTML = 116;
            document.getElementById("s99").innerHTML = 123;
            //Diastolic
            document.getElementById("d50").innerHTML = 59;
            document.getElementById("d90").innerHTML = 73;
            document.getElementById("d95").innerHTML = 77;
            document.getElementById("d99").innerHTML = 84;
        }
    }


    if (g==2 && a==8){
        if (h>136 && h<139.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 100;
            document.getElementById("s90").innerHTML = 114;
            document.getElementById("s95").innerHTML = 118;
            document.getElementById("s99").innerHTML = 125;
            //Diastolic
            document.getElementById("d50").innerHTML = 60;
            document.getElementById("d90").innerHTML = 74;
            document.getElementById("d95").innerHTML = 78;
            document.getElementById("d99").innerHTML = 85;
        }
    }


    if (g==2 && a==8){
        if (h>139){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 101;
            document.getElementById("s90").innerHTML = 114;
            document.getElementById("s95").innerHTML = 118;
            document.getElementById("s99").innerHTML = 125;
            //Diastolic
            document.getElementById("d50").innerHTML = 60;
            document.getElementById("d90").innerHTML = 74;
            document.getElementById("d95").innerHTML = 78;
            document.getElementById("d99").innerHTML = 86;
        }
    }


    if (g==2 && a==9){
        if (h<123.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 96;
            document.getElementById("s90").innerHTML = 110;
            document.getElementById("s95").innerHTML = 114;
            document.getElementById("s99").innerHTML = 121;
            //Diastolic
            document.getElementById("d50").innerHTML = 58;
            document.getElementById("d90").innerHTML = 72;
            document.getElementById("d95").innerHTML = 76;
            document.getElementById("d99").innerHTML = 83;
        }
    }


    if (g==2 && a==9){
        if (h>123 && h<126.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 97;
            document.getElementById("s90").innerHTML = 110;
            document.getElementById("s95").innerHTML = 114;
            document.getElementById("s99").innerHTML = 121;
            //Diastolic
            document.getElementById("d50").innerHTML = 58;
            document.getElementById("d90").innerHTML = 72;
            document.getElementById("d95").innerHTML = 76;
            document.getElementById("d99").innerHTML = 83;
        }
    }



    if (g==2 && a==9){
        if (h>126 && h<130.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 98;
            document.getElementById("s90").innerHTML = 112;
            document.getElementById("s95").innerHTML = 115;
            document.getElementById("s99").innerHTML = 123;
            //Diastolic
            document.getElementById("d50").innerHTML = 58;
            document.getElementById("d90").innerHTML = 72;
            document.getElementById("d95").innerHTML = 76;
            document.getElementById("d99").innerHTML = 84;
        }
    }

    

    if (g==2 && a==9){
        if (h>130 && h<134.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 100;
            document.getElementById("s90").innerHTML = 113;
            document.getElementById("s95").innerHTML = 117;
            document.getElementById("s99").innerHTML = 124;
            //Diastolic
            document.getElementById("d50").innerHTML = 59;
            document.getElementById("d90").innerHTML = 73;
            document.getElementById("d95").innerHTML = 77;
            document.getElementById("d99").innerHTML = 84;
        }
    }


    if (g==2 && a==9){
        if (h>134 && h<138.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 101;
            document.getElementById("s90").innerHTML = 114;
            document.getElementById("s95").innerHTML = 118;
            document.getElementById("s99").innerHTML = 125;
            //Diastolic
            document.getElementById("d50").innerHTML = 60;
            document.getElementById("d90").innerHTML = 74;
            document.getElementById("d95").innerHTML = 78;
            document.getElementById("d99").innerHTML = 85;
        }
    }


    if (g==2 && a==9){
        if (h>138 && h<142.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 102;
            document.getElementById("s90").innerHTML = 116;
            document.getElementById("s95").innerHTML = 119;
            document.getElementById("s99").innerHTML = 127;
            //Diastolic
            document.getElementById("d50").innerHTML = 61;
            document.getElementById("d90").innerHTML = 75;
            document.getElementById("d95").innerHTML = 79;
            document.getElementById("d99").innerHTML = 86;
        }
    }


    if (g==2 && a==9){
        if (h>142){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 103;
            document.getElementById("s90").innerHTML = 116;
            document.getElementById("s95").innerHTML = 120;
            document.getElementById("s99").innerHTML = 127;
            //Diastolic
            document.getElementById("d50").innerHTML = 61;
            document.getElementById("d90").innerHTML = 75;
            document.getElementById("d95").innerHTML = 79;
            document.getElementById("d99").innerHTML = 87;
        }
    }



    if (g==2 && a==10){
        if (h<125.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 98;
            document.getElementById("s90").innerHTML = 112;
            document.getElementById("s95").innerHTML = 116;
            document.getElementById("s99").innerHTML = 123;
            //Diastolic
            document.getElementById("d50").innerHTML = 59;
            document.getElementById("d90").innerHTML = 73;
            document.getElementById("d95").innerHTML = 77;
            document.getElementById("d99").innerHTML = 84;
        }
    }



    if (g==2 && a==10){
        if (h>125 && h<129.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 99;
            document.getElementById("s90").innerHTML = 112;
            document.getElementById("s95").innerHTML = 116;
            document.getElementById("s99").innerHTML = 123;
            //Diastolic
            document.getElementById("d50").innerHTML = 59;
            document.getElementById("d90").innerHTML = 73;
            document.getElementById("d95").innerHTML = 77;
            document.getElementById("d99").innerHTML = 84;
        }
    }


    if (g==2 && a==10){
        if (h>129 && h<133.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 100;
            document.getElementById("s90").innerHTML = 114;
            document.getElementById("s95").innerHTML = 117;
            document.getElementById("s99").innerHTML = 125;
            //Diastolic
            document.getElementById("d50").innerHTML = 59;
            document.getElementById("d90").innerHTML = 73;
            document.getElementById("d95").innerHTML = 77;
            document.getElementById("d99").innerHTML = 85;
        }
    }


    if (g==2 && a==10){
        if (h>133 && h<137.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 102;
            document.getElementById("s90").innerHTML = 115;
            document.getElementById("s95").innerHTML = 119;
            document.getElementById("s99").innerHTML = 126;
            //Diastolic
            document.getElementById("d50").innerHTML = 60;
            document.getElementById("d90").innerHTML = 74;
            document.getElementById("d95").innerHTML = 78;
            document.getElementById("d99").innerHTML = 86;
        }
    }


    if (g==2 && a==10){
        if (h>137 && h<141.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 103;
            document.getElementById("s90").innerHTML = 116;
            document.getElementById("s95").innerHTML = 120;
            document.getElementById("s99").innerHTML = 127;
            //Diastolic
            document.getElementById("d50").innerHTML = 61;
            document.getElementById("d90").innerHTML = 75;
            document.getElementById("d95").innerHTML = 79;
            document.getElementById("d99").innerHTML = 86;
        }
    }


    if (g==2 && a==10){
        if (h>141 && h<145.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 104;
            document.getElementById("s90").innerHTML = 118;
            document.getElementById("s95").innerHTML = 121;
            document.getElementById("s99").innerHTML = 129;
            //Diastolic
            document.getElementById("d50").innerHTML = 62;
            document.getElementById("d90").innerHTML = 76;
            document.getElementById("d95").innerHTML = 80;
            document.getElementById("d99").innerHTML = 88;
        }
    }



    if (g==2 && a==10){
        if (h>145){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 105;
            document.getElementById("s90").innerHTML = 118;
            document.getElementById("s95").innerHTML = 122;
            document.getElementById("s99").innerHTML = 129;
            //Diastolic
            document.getElementById("d50").innerHTML = 62;
            document.getElementById("d90").innerHTML = 76;
            document.getElementById("d95").innerHTML = 80;
            document.getElementById("d99").innerHTML = 88;
        }
    }


    if (g==2 && a==11){
        if (h<127.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 100;
            document.getElementById("s90").innerHTML = 114;
            document.getElementById("s95").innerHTML = 118;
            document.getElementById("s99").innerHTML = 125;
            //Diastolic
            document.getElementById("d50").innerHTML = 60;
            document.getElementById("d90").innerHTML = 74;
            document.getElementById("d95").innerHTML = 78;
            document.getElementById("d99").innerHTML = 85;
        }
    }


    if (g==2 && a==11){
        if (h>127 && h<132.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 101;
            document.getElementById("s90").innerHTML = 114;
            document.getElementById("s95").innerHTML = 118;
            document.getElementById("s99").innerHTML = 125;
            //Diastolic
            document.getElementById("d50").innerHTML = 60;
            document.getElementById("d90").innerHTML = 74;
            document.getElementById("d95").innerHTML = 78;
            document.getElementById("d99").innerHTML = 85;
        }
    }


    if (g==2 && a==11){
        if (h>132 && h<135.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 102;
            document.getElementById("s90").innerHTML = 116;
            document.getElementById("s95").innerHTML = 119;
            document.getElementById("s99").innerHTML = 126;
            //Diastolic
            document.getElementById("d50").innerHTML = 60;
            document.getElementById("d90").innerHTML = 74;
            document.getElementById("d95").innerHTML = 78;
            document.getElementById("d99").innerHTML = 86;
        }
    }


    if (g==2 && a==11){
        if (h>135 && h<140.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 103;
            document.getElementById("s90").innerHTML = 117;
            document.getElementById("s95").innerHTML = 121;
            document.getElementById("s99").innerHTML = 128;
            //Diastolic
            document.getElementById("d50").innerHTML = 61;
            document.getElementById("d90").innerHTML = 75;
            document.getElementById("d95").innerHTML = 79;
            document.getElementById("d99").innerHTML = 87;
        }
    }


    if (g==2 && a==11){
        if (h>140 && h<144.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 105;
            document.getElementById("s90").innerHTML = 118;
            document.getElementById("s95").innerHTML = 122;
            document.getElementById("s99").innerHTML = 129;
            //Diastolic
            document.getElementById("d50").innerHTML = 62;
            document.getElementById("d90").innerHTML = 76;
            document.getElementById("d95").innerHTML = 80;
            document.getElementById("d99").innerHTML = 87;
        }
    }


    if (g==2 && a==11){
        if (h>144 && h<148.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 106;
            document.getElementById("s90").innerHTML = 119;
            document.getElementById("s95").innerHTML = 123;
            document.getElementById("s99").innerHTML = 130;
            //Diastolic
            document.getElementById("d50").innerHTML = 63;
            document.getElementById("d90").innerHTML = 77;
            document.getElementById("d95").innerHTML = 81;
            document.getElementById("d99").innerHTML = 88;
        }
    }


    if (g==2 && a==11){
        if (h>148){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 107;
            document.getElementById("s90").innerHTML = 120;
            document.getElementById("s95").innerHTML = 124;
            document.getElementById("s99").innerHTML = 131;
            //Diastolic
            document.getElementById("d50").innerHTML = 63;
            document.getElementById("d90").innerHTML = 77;
            document.getElementById("d95").innerHTML = 81;
            document.getElementById("d99").innerHTML = 89;
        }
    }


    if (g==2 && a==12){
        if (h<131.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 102;
            document.getElementById("s90").innerHTML = 116;
            document.getElementById("s95").innerHTML = 119;
            document.getElementById("s99").innerHTML = 127;
            //Diastolic
            document.getElementById("d50").innerHTML = 61;
            document.getElementById("d90").innerHTML = 75;
            document.getElementById("d95").innerHTML = 79;
            document.getElementById("d99").innerHTML = 86;
        }
    }


    if (g==2 && a==12){
        if (h>131 && h<135.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 103;
            document.getElementById("s90").innerHTML = 116;
            document.getElementById("s95").innerHTML = 120;
            document.getElementById("s99").innerHTML = 127;
            //Diastolic
            document.getElementById("d50").innerHTML = 61;
            document.getElementById("d90").innerHTML = 75;
            document.getElementById("d95").innerHTML = 79;
            document.getElementById("d99").innerHTML = 86;
        }
    }


    if (g==2 && a==12){
        if (h>135 && h<139.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 104;
            document.getElementById("s90").innerHTML = 117;
            document.getElementById("s95").innerHTML = 121;
            document.getElementById("s99").innerHTML = 128;
            //Diastolic
            document.getElementById("d50").innerHTML = 61;
            document.getElementById("d90").innerHTML = 75;
            document.getElementById("d95").innerHTML = 79;
            document.getElementById("d99").innerHTML = 87;
        }
    }


    if (g==2 && a==12){
        if (h>139 && h<143.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 105;
            document.getElementById("s90").innerHTML = 119;
            document.getElementById("s95").innerHTML = 123;
            document.getElementById("s99").innerHTML = 130;
            //Diastolic
            document.getElementById("d50").innerHTML = 62;
            document.getElementById("d90").innerHTML = 76;
            document.getElementById("d95").innerHTML = 80;
            document.getElementById("d99").innerHTML = 88;
        }
    }


    if (g==2 && a==12){
        if (h>143 && h<147.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 107;
            document.getElementById("s90").innerHTML = 120;
            document.getElementById("s95").innerHTML = 124;
            document.getElementById("s99").innerHTML = 131;
            //Diastolic
            document.getElementById("d50").innerHTML = 63;
            document.getElementById("d90").innerHTML = 77;
            document.getElementById("d95").innerHTML = 81;
            document.getElementById("d99").innerHTML = 88;
        }
    }


    if (g==2 && a==12){
        if (h>147 && h<151.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 108;
            document.getElementById("s90").innerHTML = 121;
            document.getElementById("s95").innerHTML = 125;
            document.getElementById("s99").innerHTML = 132;
            //Diastolic
            document.getElementById("d50").innerHTML = 64;
            document.getElementById("d90").innerHTML = 78;
            document.getElementById("d95").innerHTML = 82;
            document.getElementById("d99").innerHTML = 89;
        }
    }


    if (g==2 && a==12){
        if (h>151){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 109;
            document.getElementById("s90").innerHTML = 122;
            document.getElementById("s95").innerHTML = 126;
            document.getElementById("s99").innerHTML = 133;
            //Diastolic
            document.getElementById("d50").innerHTML = 64;
            document.getElementById("d90").innerHTML = 78;
            document.getElementById("d95").innerHTML = 82;
            document.getElementById("d99").innerHTML = 89;
        }
    }


    if (g==2 && a==13){
        if (h<135.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile <5%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 104;
            document.getElementById("s90").innerHTML = 117;
            document.getElementById("s95").innerHTML = 121;
            document.getElementById("s99").innerHTML = 128;
            //Diastolic
            document.getElementById("d50").innerHTML = 62;
            document.getElementById("d90").innerHTML = 76;
            document.getElementById("d95").innerHTML = 80;
            document.getElementById("d99").innerHTML = 87;
        }
    }


    if (g==2 && a==13){
        if (h>135 && h<139.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 10%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 105;
            document.getElementById("s90").innerHTML = 118;
            document.getElementById("s95").innerHTML = 122;
            document.getElementById("s99").innerHTML = 129;
            //Diastolic
            document.getElementById("d50").innerHTML = 62;
            document.getElementById("d90").innerHTML = 76;
            document.getElementById("d95").innerHTML = 80;
            document.getElementById("d99").innerHTML = 87;
        }
    }


    if (g==2 && a==13){
        if (h>139 && h<143.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 25%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 106;
            document.getElementById("s90").innerHTML = 119;
            document.getElementById("s95").innerHTML = 123;
            document.getElementById("s99").innerHTML = 130;
            //Diastolic
            document.getElementById("d50").innerHTML = 62;
            document.getElementById("d90").innerHTML = 76;
            document.getElementById("d95").innerHTML = 80;
            document.getElementById("d99").innerHTML = 88;
        }
    }


    if (g==2 && a==13){
        if (h>143 && h<148.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 50%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 107;
            document.getElementById("s90").innerHTML = 121;
            document.getElementById("s95").innerHTML = 124;
            document.getElementById("s99").innerHTML = 132;
            //Diastolic
            document.getElementById("d50").innerHTML = 63;
            document.getElementById("d90").innerHTML = 77;
            document.getElementById("d95").innerHTML = 81;
            document.getElementById("d99").innerHTML = 89;
        }
    }


    if (g==2 && a==13){
        if (h>148 && h<151.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 75%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 109;
            document.getElementById("s90").innerHTML = 122;
            document.getElementById("s95").innerHTML = 126;
            document.getElementById("s99").innerHTML = 133;
            //Diastolic
            document.getElementById("d50").innerHTML = 64;
            document.getElementById("d90").innerHTML = 78;
            document.getElementById("d95").innerHTML = 82;
            document.getElementById("d99").innerHTML = 89;
        }
    }


    if (g==2 && a==13){
        if (h>151 && h<155.1){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile 90%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 110;
            document.getElementById("s90").innerHTML = 123;
            document.getElementById("s95").innerHTML = 127;
            document.getElementById("s99").innerHTML = 134;
            //Diastolic
            document.getElementById("d50").innerHTML = 65;
            document.getElementById("d90").innerHTML = 79;
            document.getElementById("d95").innerHTML = 83;
            document.getElementById("d99").innerHTML = 90;
        }
    }


    if (g==2 && a==13){
        if (h>155){
            document.getElementById("cmessage").style.display = "block";
            document.getElementById("cmessage").innerHTML = "Hight centile >95%";
            document.getElementById("results").style.display = "block";

            //Systolic
            document.getElementById("s50").innerHTML = 110;
            document.getElementById("s90").innerHTML = 124;
            document.getElementById("s95").innerHTML = 128;
            document.getElementById("s99").innerHTML = 136;
            //Diastolic
            document.getElementById("d50").innerHTML = 65;
            document.getElementById("d90").innerHTML = 79;
            document.getElementById("d95").innerHTML = 83;
            document.getElementById("d99").innerHTML = 91;
        }
    }

}




var input = document.getElementById("hdata");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("calculate").click();
  }
});