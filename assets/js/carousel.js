var slide_index = [1, 1, 1, 1];
var slide_id = ["hh", "mh", "hst", "misc"];
show_slides(1, 0);
show_slides(1, 1);
show_slides(1, 2);
show_slides(1, 3);

function plus_slides(n, index) {
    show_slides(slide_index[index] += n, index);
    console.log("click");
}

function show_slides(n, index) {
    var i;
    var x = document.getElementsByClassName(slide_id[index]);
    console.log(index);
    if (n > x.length) {
        slide_index[index] = 1;
    }
    if (n < 1) {
        slide_index[index] = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slide_index[index] - 1].style.display = "block";
}
