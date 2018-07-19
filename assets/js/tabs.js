function openChar(charName) {
    var i;
    var x = document.getElementsByClassName("char");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(charName).style.display = "inline-block";
}

function openList(){
  var x = document.getElementById("char-bar");
  if(x.className === "char-tab"){
    x.className += " responsive";
  }
  else{
    x.className = "char-tab";
  }
}
