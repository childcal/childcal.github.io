function calbmi(){



    
    var gender = document.getElementById("gender");
    var g = gender.options[gender.selectedIndex].value;

    var age = document.getElementById("age");
    var a = age.options[age.selectedIndex].value;

    var h = document.getElementById("hdata").value;
    var hm = h/100;

    var w = document.getElementById("wdata").value;

    var bmi = w/(hm*hm);
    var bmix = parseFloat(bmi).toFixed(2);



    if (g < 1 ){
        document.getElementById("gmessage").innerHTML = "Please select a gender";
        document.getElementById("cmessage").style.display = "none";
        document.getElementById("target").style.display = "none";
    }
    else{
        document.getElementById("gmessage").innerHTML = "";

    }


    if (a < 1 ){
        document.getElementById("agemessage").innerHTML = "Please select an age";
        document.getElementById("cmessage").style.display = "none";
        document.getElementById("target").style.display = "none";
    }
    else{
        document.getElementById("agemessage").innerHTML = "";

    }


    if (h < 40 | h > 200 ){
        document.getElementById("hmessage").innerHTML = "Please type a valid height (cm)";
        document.getElementById("cmessage").style.display = "none";
        document.getElementById("target").style.display = "none";
    }

   if (200> h && h >40) {

       document.getElementById("hmessage").innerHTML = "";
    }


    if (w < 3 | w > 120 ){
        document.getElementById("wmessage").innerHTML = "Please type a valid weight (Kg)";
        document.getElementById("cmessage").style.display = "none";
        document.getElementById("target").style.display = "none";
    }
    else{
        document.getElementById("wmessage").innerHTML = "";

    }

   if (120> h && h >3) {

       document.getElementById("hmessage").innerHTML = "";
    }
    
 




    if (g==1 && a==2){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(16.6*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<14.8){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";

        }

        if (bmi>14.8 && bmi<15.2){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>15.1 && bmi<15.8){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>15.7 && bmi<17.6){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>17.5 && bmi<18.6){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>18.5 && bmi<19.4){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>19.3){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }


    }

    if (g==1 && a==3){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(16.0*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<14.6){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>14.5 && bmi<14.8){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>14.7 && bmi<15.3){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>15.2 && bmi<16.8){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>16.7 && bmi<17.4){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>17.3 && bmi<18.4){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>18.3){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }


    }

    if (g==1 && a==4){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(15.6*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<14.1){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>14.0 && bmi<14.6){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>14.5 && bmi<14.9){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>14.8 && bmi<16.6){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>16.5 && bmi<16.9){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>16.8 && bmi<17.9){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>17.8){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";

        }


    }

    if (g==1 && a==5){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(15.4*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<13.8){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>13.8 && bmi<14.2){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>14.1 && bmi<14.7){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>14.6 && bmi<16.3){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>16.2 && bmi<17.2){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>17.1 && bmi<18.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>18.0){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }


    }

    if (g==1 && a==6){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(15.4*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<13.8){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>13.7 && bmi<14.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>13.9 && bmi<14.6){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>14.6 && bmi<16.4){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>16.5 && bmi<17.5){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>17.4 && bmi<18.4){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>18.3){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }


    }

    if (g==1 && a==7){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(15.5*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<13.7){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>13.6 && bmi<14.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>13.9 && bmi<14.6){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>14.6 && bmi<16.6){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>16.6 && bmi<18.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>17.9 && bmi<19.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>18.9){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }


    }

    if (g==1 && a==8){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(15.8*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<13.8){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>13.7 && bmi<14.1){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>14.0 && bmi<14.8){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>14.7 && bmi<17.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>16.9 && bmi<18.6){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>18.5 && bmi<20.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>19.9){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }


    }

    if (g==1 && a==9){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(16.2*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<14.0){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>13.9 && bmi<14.4){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>14.3 && bmi<15.1){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>15.0 && bmi<17.6){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>17.5 && bmi<19.4){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>19.3 && bmi<21.1){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>21.0){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }


    }

    if (g==1 && a==10){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(16.6*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<14.2){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>14.1 && bmi<14.6){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>14.5 && bmi<15.4){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>15.3 && bmi<18.2){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>18.1 && bmi<20.3){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>20.2 && bmi<22.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>22.0){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }

        


    }

    if (g==1 && a==11){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(17.2*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<14.5){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>14.4 && bmi<15.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>14.9 && bmi<15.9){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>15.8 && bmi<18.9){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>18.8 && bmi<21.2){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>21.1 && bmi<23.1){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>23.1){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }

        


    }

    if (g==1 && a==12){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(17.8*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<15.0){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>14.9 && bmi<15.4){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>15.3 && bmi<16.4){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>16.3 && bmi<19.6){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>19.5 && bmi<22){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>21.9 && bmi<24.1){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>24.0){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }


    }

    if (g==1 && a==13){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(18.4*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<15.4){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>15.3 && bmi<16.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>15.9 && bmi<17.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>16.9 && bmi<20.4){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>20.3 && bmi<23.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>22.9 && bmi<25.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>24.9){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }


    }

    if (g==1 && a==14){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(19.1*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<16.0){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>15.9 && bmi<16.5){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>16.4 && bmi<17.6){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>17.5 && bmi<21.2){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>21.1 && bmi<23.8){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>23.7 && bmi<26){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>25.9){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }


    }

    if (g==2 && a==2){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(16.4*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<14.4){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>14.3 && bmi<14.8){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>14.7 && bmi<15.5){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>15.4 && bmi<17.4){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>17.3 && bmi<18.4){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>18.3 && bmi<19.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>18.9){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }


    }

    if (g==2 && a==3){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(15.7*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<14.0){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>13.9 && bmi<14.4){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>14.3 && bmi<15.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>14.9 && bmi<116.6){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>16.5 && bmi<17.6){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>17.5 && bmi<18.3){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>18.2){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }


    }

    if (g==2 && a==4){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(15.4*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<13.8){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>13.7 && bmi<14.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>13.9 && bmi<14.6){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>14.5 && bmi<16.3){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>16.2 && bmi<17.3){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>17.2 && bmi<18.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>17.9){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }


    }

    if (g==2 && a==5){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(15.2*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<13.5){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>13.4 && bmi<13.8){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>13.7 && bmi<14.4){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>14.3 && bmi<16.2){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>16.1 && bmi<17.4){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>17.3 && bmi<18.3){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>18.2){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }


    }

    if (g==2 && a==6){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(15.3*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<13.5){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>13.4 && bmi<13.8){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>13.7 && bmi<14.4){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>14.3 && bmi<16.4){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>16.3 && bmi<17.7){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>17.6 && bmi<18.8){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>18.7){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }


    }

    if (g==2 && a==7){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(15.5*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<13.5){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>13.4 && bmi<13.8){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>13.7 && bmi<14.5){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>14.4 && bmi<16.7){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>16.6 && bmi<18.3){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>18.2 && bmi<19.6){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>19.5){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }


    }

    if (g==2 && a==8){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(15.8*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<13.5){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>13.4 && bmi<13.9){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>13.8 && bmi<14.8){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>14.7 && bmi<17.4){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>17.3 && bmi<19.1){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>19.0 && bmi<20.6){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>20.5){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }


    }

    if (g==2 && a==9){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(16.4*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<13.8){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>13.7 && bmi<14.2){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>14.1 && bmi<15.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>14.9 && bmi<18.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>17.9 && bmi<20.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>19.9 && bmi<21.8){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>21.7){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }


    }

    if (g==2 && a==10){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(16.8*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<14.0){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>13.9 && bmi<14.5){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>14.4 && bmi<15.5){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>15.4 && bmi<18.6){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>18.5 && bmi<21.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>20.9 && bmi<23.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>22.9){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }


    }

    if (g==2 && a==11){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(17.5*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<14.4){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>14.3 && bmi<14.9){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>14.8 && bmi<16.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>15.9 && bmi<19.5){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>19.4 && bmi<22.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>21.9 && bmi<24.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>23.9){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }


    }

    if (g==2 && a==12){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(18.1*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<14.8){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>14.7 && bmi<15.4){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>15.3 && bmi<16.5){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>16.4 && bmi<20.2){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>20.1 && bmi<22.9){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>22.8 && bmi<25.3){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>25.2){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }


    }

    if (g==2 && a==13){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(18.7*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<15.2){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>15.1 && bmi<15.9){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>15.8 && bmi<17.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>16.9 && bmi<21.0){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>20.9 && bmi<23.8){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>23.7 && bmi<26.2){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>26.1){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
        }


    }

    if (g==2 && a==14){
        document.getElementById("target").style.display = "block";
        document.getElementById("target").innerHTML = "Target body weight is "+parseFloat(19.3*hm*hm).toFixed(2)+" Kg";
        document.getElementById("cmessage").style.display = "block";
        document.getElementById("bmimsg").style.display = "block";
        document.getElementById("bmimsg").innerHTML = "BMI Value is "+bmix;

        if (bmi<15.8){
            document.getElementById("cmessage").innerHTML = "BMI centile <5%";
            document.getElementById("cmessage").style.color = "rgb(48, 48, 48)";
        }

        if (bmi>15.7 && bmi<16.3){
            document.getElementById("cmessage").innerHTML = "BMI centile within 10%";
        }

        if (bmi>16.2 && bmi<17.6){
            document.getElementById("cmessage").innerHTML = "BMI centile within 25%";
        }

        if (bmi>17.5 && bmi<21.6){
            document.getElementById("cmessage").innerHTML = "BMI centile within 50%";
        }

        if (bmi>21.5 && bmi<24.6){
            document.getElementById("cmessage").innerHTML = "BMI centile within 75%";
        }

        if (bmi>24.5 && bmi<27.2){
            document.getElementById("cmessage").innerHTML = "BMI centile within 90%";
            document.getElementById("cmessage").style.color = "orange";
        }

        if (bmi>27.1){
            document.getElementById("cmessage").innerHTML = "BMI centile >95%";
            document.getElementById("cmessage").style.color = "red";
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