







var banner_img = document.getElementById("banner-img");
var banner_btn_box_list = document.getElementsByClassName("banner-btn-box-list");

var bannerIndex = 1;

var showIndex = function () {
    clear();
    banner_img.src = "./img2/banner" + bannerIndex + ".jpg";
    banner_btn_box_list[bannerIndex - 1].className = "banner-btn-box-list insetColor";
}

var clear = function () {
    for (var i = 0; i < banner_btn_box_list.length; i++) {
        banner_btn_box_list[i].className = "banner-btn-box-list";
    }

}


for (var i = 0; i < banner_btn_box_list.length; i++) {
    banner_btn_box_list[i].addEventListener('mouseover', function () {
        bannerIndex = this.getAttribute("data-banner");
        showIndex();
    });
}









var Area1_box_img1 = document.getElementById("Area1-box-img1");
var Area1_box_img2 = document.getElementById("Area1-box-img2");
var main_name = document.getElementsByClassName("main-name");
var Area_left = document.getElementById("Area-left");
var Area_right = document.getElementById("Area-right");

var faction1 = document.getElementById("faction1");
var faction2 = document.getElementById("faction2");

var banner1Index = 1;

var showIndex1 = function () {
    Area1_box_img1.src = "./img2/zone" + banner1Index + ".jpg";
    Area1_box_img2.src = "./img2/zone" + banner1Index + "-icon.png";

    if (banner1Index == 1) {
        main_name[0].innerHTML = "盖伦";
        faction1.innerText = "战士";
        faction2.innerText = "德玛西亚";
    } else if (banner1Index == 2) {
        main_name[0].innerHTML = "奥恩";
        faction1.innerText = "坦克";
        faction2.innerText = "弗雷尔卓德";
    } else if (banner1Index == 3) {
        main_name[0].innerHTML = "塞恩";
        faction1.innerText = "坦克";
        faction2.innerText = "诺克萨斯";
    } else {
        main_name[0].innerHTML = "布里茨";
        faction1.innerText = "坦克";
        faction2.innerText = "祖安";
    }
}
Area_left.addEventListener("click", function () {
    if (banner1Index < 2) {
        banner1Index = 4;
    } else {
        banner1Index--;
    }
    showIndex1();
});

Area_right.addEventListener("click", function () {
    if (banner1Index > 3) {
        banner1Index = 1;
    } else {
        banner1Index++;
    }
    showIndex1();
});




var address_img1 = document.getElementById("address-img1");
var address_img2 = document.getElementById("address-img2");
var address_text = document.getElementById("address-text");

var address_left = document.getElementById("address-left");
var address_right = document.getElementById("address-right");



var banner2Index = 1;

var showIndex2 = function () {
    address_img1.src = "./img2/address" + banner2Index + ".jpg";
    address_img2.src = "./img2/address" + banner2Index + "-icon.png";

    if (banner2Index == 1) {
        address_text.innerText = "比尔吉沃特";
    } else if (banner2Index == 2) {
        address_text.innerText = "德玛西亚";
    } else if (banner2Index == 3) {
        address_text.innerText = "艾欧尼亚";
    } else {
        address_text.innerText = "诺克萨斯";
    }
}
address_left.addEventListener("click", function () {
    if (banner2Index < 2) {
        banner2Index = 4;
    } else {
        banner2Index--;
    }
    showIndex2();
});

address_right.addEventListener("click", function () {
    if (banner2Index > 3) {
        banner2Index = 1;
    } else {
        banner2Index++;
    }
    showIndex2();
});









