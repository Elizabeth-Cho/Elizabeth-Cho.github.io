function openTab(tabName){
  var i;
  var x = document.getElementsByClassName("tabbed-content");
  var y = document.getElementsByClassName("side-tab");
  for (i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }

  for (i = 0; i < y.length; i++){
    y[i].className = y[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
}
