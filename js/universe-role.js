



var contents_list = document.getElementsByClassName("contents-list");
var text2 = document.getElementsByClassName("text2");
for (var i = 0; i < contents_list.length; i++) {
    text2[i].innerHTML = "探索<i class='more'></i>";
}

var content_main_mid = document.getElementsByClassName("content-main-mid");

for (var i = 0; i < content_main_mid.length; i++) {
    content_main_mid[i].className = "content-main-mid row" + (i + 1);
}














