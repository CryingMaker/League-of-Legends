
var hover1_on = document.getElementById("hover1-on");
var head_hover1_box = document.getElementById("head-hover1-box");
var head_hover1_mid = document.getElementById("head-hover1-mid");


hover1_on.addEventListener('mouseover', function () {
    head_hover1_box.style.transform = "translateY(0px)";
    head_hover2_box.style.transform = "translateY(-64px)";
})
head_hover1_box.addEventListener('mouseleave', function () {
    head_hover1_box.style.transform = "translateY(-64px)";
})


var hover2_on = document.getElementById("hover2-on");
var head_hover2_box = document.getElementById("head-hover2-box");
var head_hover2_mid = document.getElementById("head-hover2-mid");


hover2_on.addEventListener('mouseover', function () {
    head_hover2_box.style.transform = "translateY(0px)";
    head_hover1_box.style.transform = "translateY(-100px)";
})
head_hover2_box.addEventListener('mouseleave', function () {
    head_hover2_box.style.transform = "translateY(-100px)";
})


var search = document.getElementById("search");
var search_close = document.getElementById("search-close");
var head_hover3_box = document.getElementById("head-hover3-box");

search.addEventListener('click', function () {
    head_hover3_box.style.top = "64px";
})
search_close.addEventListener('click', function () {
    head_hover3_box.style.top = "-100px";
})








