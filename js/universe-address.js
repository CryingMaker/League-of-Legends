


var bg = document.getElementsByClassName("bg");
var img = document.getElementsByClassName("img");


for (var i = 0; i < img.length; i++) {
    img[i].src = "./universe-address-img/address" + (i + 1) + "-icon.png";
    bg[i].style.backgroundImage = "url(./universe-address-img/address" + (i + 1) + ".jpg)";
}









