/**
 * Created by Administrator on 2017/7/17.
 */
var bannerSlide=function(){
    $('.flexslider').flexslider({

        directionNav: true,

        slideshowSpeed:5000

    });
}
$(function(){
    //banner
    setTimeout(bannerSlide,200);
    setTimeout(bannerSlide,4700);
    $("body").on("click",".popup-close",function(){
        bannerSlide();
    })


    var huadong = 800; //滚动速度
    $("body").on("click","#backtop",function(){
        $('html,body').animate({
            scrollTop: '0px'
        }, huadong);

    })
})

