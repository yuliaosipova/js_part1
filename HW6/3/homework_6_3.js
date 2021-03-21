var arr = ["img1.jpg", "img2.jpg", "img3.jpg"];
var i = 0;

function next() {
    var img = document.querySelector("img");
    if (i == (arr.length - 1)) {
        i = 0;
    } else {
        i++;
    }
    img.src = "img/" + arr[i];
}

function prev(){
    var img = document.querySelector("img");
    if (i == 0) {
        i = arr.length - 1;
    } else {
        i--;
    }
    img.src = "img/" + arr[i];
}