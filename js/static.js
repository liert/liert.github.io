$(document).ready(function () {
    $(".change").click(function () {
        $("#talk_nonsense").load("./home/change.php");
    });
    $(".name").click(function () {
        $("#content").load("./home/index.php", function () {
            $.getScript("./js/home.js");
        });
    });
    $("#head_portrait").click(music);
    $(".one").click(function () {
        $("#content").load("./hacker/index.php", function () {
            $.getScript("./js/hacker.js");
        });
    });
    $(".two").click(function () {
        $("#content").load("./function/index.php", function () {
            $.getScript("./js/hacker.js");
        });
    });
    // $(".three").click(function () {
    //     $("#content").load("./CyberChef/index.html", function () {
    //         $.getScript("./js/hacker.js");
    //     });
    // });
    $(".four").click(function () {
        $("#content").load("./zahuo/index.php", function () {
            $.getScript("./zahuo/zahuo.js");
        });
    });
});
function background() {
    var img = new Image();
    var str = "./image/background/background" + Math.ceil(Math.random() * 100) + ".jpg";
    img.src = str;
    img.onload = function () {
        var sty = document.getElementById("background");
        sty.innerHTML = "body{background-image: url('" + str + "');}";
    }
}
// setInterval(background, 10000);
var time;
function music() {
    $.ajax({
        url: "./music.php",
        type: "post",
        data: {
            "music": "no"
        },
        success: function (res) {
            var id = res.split('|')[0];
            var name = res.split('|')[1];
            var length = res.split('|')[2];
            $("#musicname").html("当前歌曲: " + name);
            var iframe = document.getElementById("music");
            iframe.src = "//music.163.com/outchain/player?type=2&id=" + id + "&auto=1&height=66";
            if (time != undefined) {
                clearTimeout(time);
            }
            time = setTimeout(music, length);
        }
    });
}

