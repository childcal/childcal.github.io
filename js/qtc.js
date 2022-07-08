function qtc(){

    var qt = 0.04*(document.getElementById("qt").value);

    var RR = 0.04*(document.getElementById("rr").value);
    var RRd = Math.sqrt(RR);

    var qtc = qt/RRd;

    document.getElementById("qtcresult").innerHTML = "QTC Value is "+parseFloat(qtc).toFixed(3);


}



var input = document.getElementById("rr");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("calculate").click();
  }
});