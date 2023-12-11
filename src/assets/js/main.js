$(function () {
    $(".header__right").mouseover(function () {
        $(this).find(".img1").stop().mouseover(function () {
            $(".img1").fadeIn(200).addClass("on");
        });
        $(this).find(".img1").stop().mouseout(function () {
            $(".img1").removeClass("on");
        });
        $(this).find(".img2").stop().mouseover(function () {
            $(".img2").fadeIn(200).addClass("on");
        });
        $(this).find(".img2").stop().mouseout(function () {
            $(".img2").removeClass("on");
        });
        $(this).find(".img3").stop().mouseover(function () {
            $(".img3").fadeIn(200).addClass("on");
        });
        $(this).find(".img3").stop().mouseout(function () {
            $(".img3").removeClass("on");
        });
    });
});