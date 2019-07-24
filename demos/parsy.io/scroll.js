window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementsByClassName("navbar").style.background =
        "rgba(0, 0, 0, 0)";
  } else {
    document.getElementsByClassName("navbar").style.background =
        "rgba(0, 0, 0, 1)";
  }
}
