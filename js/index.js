
var head_app_downloding = document.getElementById("head-app-downloding");
var head_app_hover = document.getElementById("head-app-hover");


head_app_downloding.addEventListener('mouseover', function () {
    head_app_hover.style.opacity = "1";
    head_app_hover.style.transform = "translateY(0px)";
});
head_app_downloding.addEventListener('mouseleave', function () {
    head_app_hover.style.opacity = "0";
    head_app_hover.style.transform = "translateY(-20px)";
});




var search_hover_warp = document.getElementById("search-hover-warp");
var search_btn = document.getElementById("search-btn");
var search_close_img = document.getElementById("search-close-img");

search_btn.addEventListener('click', function () {
    search_hover_warp.style.display = "block";
});

search_close_img.addEventListener('click', function () {
    search_hover_warp.style.display = "none";
});



var head_nav = document.getElementById("head_nav");
var head_nav_sub = document.getElementById("head-nav-sub");

head_nav.addEventListener('mouseover', function () {
    head_nav_sub.style.display = "block";
});
head_nav_sub.addEventListener('mouseleave', function () {
    head_nav_sub.style.display = "none";
});


var head_userinfo = document.getElementById("head-userinfo");
var head_login_hover = document.getElementById("head-login-hover");

head_userinfo.addEventListener('mouseover', function () {
    head_login_hover.style.display = "block";
});
head_login_hover.addEventListener('mouseleave', function () {
    head_login_hover.style.display = "none";
});








var banner_img = document.getElementsByClassName("banner-img");
var banner_btn_list = document.getElementsByClassName("banner-btn-list");
var index = 0;
var goIndex = function () {
    clearActvie();
    banner_btn_list[index].className = "banner-btn-list Active";
    banner_img[index].className = 'banner-img selected';
}
var goNext = function () {
    clearActvie();
    if (index < 4) {
        index++;
    } else {
        index = 0;//数组从0开始计数
    }
    goIndex();
}
var clearActvie = function () {
    for (var i = 0; i < banner_btn_list.length; i++) {
        banner_btn_list[i].className = 'banner-btn-list';
        banner_img[i].className = 'banner-img';
    }
}
var banner_btn_list_Index = 0;
for (var i = 0; i < banner_btn_list.length; i++) {
    banner_btn_list[i].addEventListener('mouseover', function () {
        var banner_btn_list_Index = this.getAttribute("data-banner");//获取标签自带属性
        index = banner_btn_list_Index;//将值传递给index 再执行 goIndex
        goIndex();
    });
}
var HasNext = setInterval(() => {
    goNext();
}, 2500);
//每2.5s 自动执行一次goNext







var news_title = document.getElementsByClassName("news-title");
var news_tab_cont = document.getElementsByClassName("news-tab-cont");
var news_Fast = document.getElementById("news-Fast");
var news_cont = document.getElementsByClassName("news-cont");
var news_type = document.getElementsByClassName("news-type");
var news_time = document.getElementsByClassName("news-time");

var newsIndex = 0;


var show_news = function () {
    clearTitle();
    news_title[newsIndex].className = "news-title selected";
    if (newsIndex == 0) {
        news_Fast.innerHTML = "终极魔典回归，B站达人招募进行中！";
        news_cont[0].innerText = "双龙铸城！金克丝带你用4分钟看懂2022英雄联盟季前赛！";
        news_cont[1].innerText = "双城之战宝典双人模式积分说明";
        news_cont[2].innerText = "【英雄联盟】动画新预告来袭，双城发展过程中，即将出现新势力？";
        news_cont[3].innerText = "11.23版本更新公告：季前赛来袭，终极魔典回归！";
        news_cont[4].innerText = "11.23云顶之弈版本更新公告";
        news_cont[5].innerText = "跨次元联动 ? 腾讯地图金克丝语音导航正式上线!";

        news_type[0].className = "news-type news-video";
        news_type[0].innerText = "视频";
        news_type[1].className = "news-type news-notice";
        news_type[1].innerText = "公告";
        news_type[2].className = "news-type news-video"
        news_type[2].innerText = "视频";
        news_type[3].className = "news-type news-notice"
        news_type[3].innerText = "公告";
        news_type[4].className = "news-type news-notice"
        news_type[4].innerText = "公告";
        news_type[5].className = "news-type news-news";
        news_type[5].innerText = "新闻";

        news_time[0].innerText = "11-18";
        news_time[1].innerText = "11-18";
        news_time[2].innerText = "11-18";
        news_time[3].innerText = "11-17";
        news_time[4].innerText = "11-17";
        news_time[5].innerText = "11-17";
    }
    else if (newsIndex == 1) {
        news_Fast.innerHTML = "2021年11月18日 不停机更新公告";
        news_cont[0].innerText = "双城之战宝典双人模式积分说明！";
        news_cont[1].innerText = "11.23版本更新公告：季前赛来袭，终极魔典回归！";
        news_cont[2].innerText = "11.23云顶之弈版本更新公告";
        news_cont[3].innerText = "11月19日周免英雄更新公告";
        news_cont[4].innerText = "蓝色精萃商店限时开启";
        news_cont[5].innerText = "2021排位赛奖励";
        for (var i = 0; i < news_type.length; i++) {
            news_type[i].className = "news-type news-notice";
            news_type[i].innerText = "公告";
            news_time[i].innerText = "11-17";
        }
        news_time[0].innerText = "11-18";
        news_time[5].innerText = "11-16";
    } else if (newsIndex == 2) {
        news_Fast.innerHTML = "2021LPL年度纪录片《不破不立》，首集EDG篇即将开播!";
        news_cont[0].innerText = "LPL版孤勇者，谁说站在光里的才算英雄！";
        news_cont[1].innerText = "冠军骑士超级周末到来！EDG夺冠庆典现已开启";
        news_cont[2].innerText = "峡谷第一线：EDG骑士归来，巅峰立新王";
        news_cont[3].innerText = "十秒真粉丝：Viper厄斐琉斯血月肃杀清辉不留痕";
        news_cont[4].innerText = "选手靠谱时刻：12路外赛区解说看EDG夺冠";
        news_cont[5].innerText = "TOP5：Meiko极限轰炸时光破昼夜";
        for (var i = 0; i < news_type.length; i++) {
            news_type[i].className = "news-type news-video";
            news_type[i].innerText = "视频";
            news_time[i].innerText = "11-07";
        }
        news_time[0].innerText = "11-12";
        news_time[1].innerText = "11-11";
        news_time[2].innerText = "11-09";
    } else if (newsIndex == 3) {
        news_Fast.innerHTML = "双龙铸城！金克丝带你用4分钟看懂2022英雄联盟季前赛！";
        news_cont[0].innerText = "魔典换新回归！蔚带你用2分钟畅玩季前赛新版终极魔典";
        news_cont[1].innerText = "【季前赛】虎牙莎莉教你如何迅速上手5件新装备";
        news_cont[2].innerText = "【季前赛前瞻】新龙地形安妮恐成最大受益者？";
        news_cont[3].innerText = "【季前赛前瞻】船长真的完美匹配先攻吗？";
        news_cont[4].innerText = "新版元素龙效果逆天！小漠 S12季前赛五大系统解读";
        news_cont[5].innerText = "【季前赛】带你快人一步解锁新版本地形隐藏玩法！";
        for (var i = 0; i < news_type.length; i++) {
            news_type[i].className = "news-type news-video";
            news_type[i].innerText = "视频";
            news_time[i].innerText = "11-17";
        }
        news_type[2].innerText = "教学";
        news_type[3].innerText = "教学";
        news_type[2].className = "news-type news-teach";
        news_type[3].className = "news-type news-teach";
    } else {
        news_Fast.innerHTML = "猫和老鼠版《孤勇者》";
        news_cont[0].innerText = "《简笔画联盟》你好小可爱，我们又见面啦~啾咪~";
        news_cont[1].innerText = "英雄联盟双城之战第四集，双城里的背景宇宙设定";
        news_cont[2].innerText = "《简笔画联盟》有多少艾克重来~";
        news_cont[3].innerText = "盟物堂：萌萌哒小萝莉格温 看看是你的菜嘛？";
        news_cont[4].innerText = "【双城之战 / 混剪】我已经只剩下你了 我不能失去你";
        news_cont[5].innerText = "【关系预测】硬核解析！梳理皮祖人物的复杂关系网！";

        news_type[0].className = "news-type news-video";
        news_type[0].innerText = "娱乐";
        news_type[1].className = "news-type news-news";
        news_type[1].innerText = "新闻";
        news_type[2].className = "news-type news-video";
        news_type[2].innerText = "娱乐";
        news_type[3].className = "news-type news-news";
        news_type[3].innerText = "新闻";
        news_type[4].className = "news-type news-video";
        news_type[4].innerText = "视频";
        news_type[5].className = "news-type news-video";
        news_type[5].innerText = "视频";

        news_time[0].innerText = "11-17";
        news_time[1].innerText = "11-14";
        news_time[2].innerText = "11-13";
        news_time[3].innerText = "11-13";
        news_time[4].innerText = "11-11";
        news_time[5].innerText = "11-06";
    }
}

var clearTitle = function () {
    for (var i = 0; i < news_title.length; i++) {
        news_title[i].className = "news-title";
    }
}
for (var i = 0; i < news_title.length; i++) {
    news_title[i].addEventListener('mouseover', function () {
        newsIndex = this.getAttribute("data-news");
        show_news();
    });
}



var closeVideo = document.getElementById("closeVideo");
var VideoBox = document.getElementById("VideoBox");
closeVideo.onclick = function () {
    VideoBox.style.display = "none";
}
var MyVideo = document.getElementById("MyVideo");
MyVideo.muted = true;























