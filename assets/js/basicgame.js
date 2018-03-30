function changeImage(){
  var counter = 0;
  var falling = "../assets/Images/Backgrounds/Falling Background.png";
  var forest = "../assets/Images/gallery/forest.png";
  var button = document.getElementById("next");

  button.onclick = function(){
    counter += 1;
    document.getElementById("text").innerHTML = counter;
    if(counter%2 == 1){
      document.getElementById("background").src = falling;
    }
    else if(counter%2 == 0){
      document.getElementById("background").src = forest;
    }
  }
  //var counter = 0;
  //document.getElementById("background").src =
  //"../assets/Images/Backgrounds/Falling Background.png";
}

function switchBox(){
  var next = document.getElementById("next");
  var a2 = document.getElementById("choice-a-2");
  var b2 = document.getElementById("choice-b-2");
  var a3 = document.getElementById("choice-a-3");
  var b3 = document.getElementById("choice-b-3");
  var c3 = document.getElementById("choice-c-3");

  next.onclick = function(){
    document.getElementById("dialogue").style.display = "none";
    document.getElementById("two-choice").style.display = "block";
  }

  a2.onclick = function(){
    document.getElementById("two-choice").style.display = "none";
    document.getElementById("dialogue").style.display = "block";
  }

  b2.onclick = function(){
    document.getElementById("two-choice").style.display = "none"
    document.getElementById("three-choice").style.display = "block";
  }

  a3.onclick = function(){
    document.getElementById("three-choice").style.display = "none";
    document.getElementById("two-choice").style.display = "block";
  }

  b3.onclick = function(){
    document.getElementById("three-choice").style.display = "none";
    document.getElementById("dialogue").style.display = "block";
  }

  c3.onclick = function(){
    var back = document.getElementById("background").src;
    if(back == "../assets/Images/Backgrounds/Bedroom.png")){
      document.getElementById("background").src =
        "../assets/Images/Backgrounds/glitch.gif";
    }
    else{
      document.getElementById("background").src =
        "../assets/Images/Backgrounds/Bedroom.png";
    }
  }
}
