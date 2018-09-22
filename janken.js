$(function () {
    $('a[href^="#"]').click(function () {
        var speed = 1000; //ここはお好きな数値に変えてください
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});
//↑スルっと動くやつ




$("#gu").on("click", function () {
    var com = Math.floor(Math.random() * 3 + 1)
    if (com == 1) {
        $("#result").html('<img src="img/aiko.jpg">');
        $("#com").html('<img src="img/gu.png">');
    }
    if (com == 2) {
        $("#result").html('<img src="img/kati.jpg">');
        $("#com").html('<img src="img/cho.png">');
    }
    if (com == 3) {
        $("#result").html('<img src="img/make.jpg">');
        $("#com").html('<img src="img/pa.png">');

    }
});

$("#cho").on("click", function () {
    var com = Math.floor(Math.random() * 3 + 1)
    if (com == 1) {
        $("#result").html('<img src="img/make.jpg">');
        $("#com").html('<img src="img/gu.png">');
    }
    if (com == 2) {
        $("#result").html('<img src="img/aiko.jpg">');
        $("#com").html('<img src="img/cho.png">');
    }
    if (com == 3) {
        $("#result").html('<img src="img/kati.jpg">');
        $("#com").html('<img src="img/pa.png">');
    }
});

$("#pa").on("click", function () {
    var com = Math.floor(Math.random() * 3 + 1)
    if (com == 1) {
        $("#result").html('<img src="img/kati.jpg">');
        $("#com").html('<img src="img/gu.png">');
    }
    if (com == 2) {
        $("#result").html('<img src="img/make.jpg">');
        $("#com").html('<img src="img/cho.png">');
    }
    if (com == 3) {
        $("#result").html('<img src="img/aiko.jpg">');
        $("#com").html('<img src="img/pa.png">');
    }
});

$("#btn").on('click', function () {
    //最初の画像に戻す処理
    $("#result").html('<img src="img/before1.jpeg">')
});


$(document).ready(function () {
    $('#mainimg').jrumble({
        rangeX: 2, //ブルブルX
        rangeY: 2, //ブルブルY
        rangeRot: 3, //ブルブル角度
        rumbleSpeed: 10,//ブルブル速度
        rumbleEvent: 'hover' //イベント（hover、click、mousedown、constant）

    });
});
