
var refreshCheckCode = function () {
    var checked_code = $("#captcha-pic");
    var src = checked_code.attr("src").split("?")[0];
    checked_code.attr("src", src + "?_=" + Math.random());
};
$(function () {
    var Awindow=$(window).width();
    var ewmUrl="/upload/ewm.png";
    var message="";
    var showRightBar="true";
    var ewmCont='<div class="float_item div_weixinim" type="wx"><i class="float_wx"><img src="/upload/ewm.png" alt="微信二维码" class="ht_weixinimg" /></i><span>长按识别</span><div class="float_item_text float_item_text_wx"><p class="float_item_wx"><img src="/upload/ewm.png" alt="微信二维码" class="ht_weixinimg" /><span></span></p></div></div>';
    var messWindow='<div class="lam_box"><div class="box clearfix"><div class="ow_links"><span></span><h2>合作<i>意向表</i></h2><p>请您将建议或想法告诉我们，我们必当<br>竭尽全力为您服务，不辜负您的每一份信赖！</p></div><div class="message"><form class="message-body" action="#" method="post" onsubmit="return false;"><input type="text" placeholder="您的姓名" name="linkMan" id="linkMan"><input type="text" placeholder="联系电话" name="contact" id="telephone"><textarea name="msg" id="message" placeholder="描述您的需求"></textarea><div class="captcha-box"><input type="text" placeholder="验证码" name="vcode" id="captcha"><img src="/msgb/w9eFnLm5Jq8J8LwkPBZlZ4/vf" class="refresh-captcha" id="captcha-pic"></div><input type="button" placeholder="提交咨询" value="提交咨询" class="message-submit"></form><span id="submit-info" class="submit-info"></span></div></div></div>';
    var singleMessWindow='<div class="lam_box"><div class="box clearfix"><div class="ow_links"><span></span><h2>在线留言</h2></div><div class="message"><form class="message-body" action="#" method="post" onsubmit="return false;"><input type="text" placeholder="您的姓名" name="linkMan" id="linkMan"><input type="text" placeholder="联系电话" name="contact" id="telephone"><textarea name="msg" id="message" placeholder="描述您的需求"></textarea><div class="captcha-box"><input type="text" placeholder="验证码" name="vcode" id="captcha"><img src="/msgb/w9eFnLm5Jq8J8LwkPBZlZ4/vf" class="refresh-captcha" id="captcha-pic"></div><input type="button" placeholder="提交咨询" value="提交咨询" class="message-submit"></form><span id="submit-info" class="submit-info"></span></div></div></div>';

    if(Awindow<1000){
        var ua = navigator.userAgent.toLowerCase(),isWx = false,isBaidu = false,isHuaWei=false;
        if(ua.indexOf('baidu')>0){
            //百度浏览器
            isBaidu = true;
        }
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            //微信浏览器
            isWx = true;
        }
        if (ua.indexOf('honor')>0) {
            //华为浏览器
            isHuaWei = true;
        }
        console.log(isBaidu,isWx)
    }
    var ifEwmCont=ewmUrl.length>0?ewmCont:'';
    var ifMessWindow=message.length>0?messWindow:"";
    var qqUrl=Awindow>1000?"http://wpa.qq.com/msgrd?v=3&uin=9157188259&site=qq&menu=yes":"mqqwpa://im/chat?chat_type=wpa&uin=9157188259&version=1&src_type=web";
    var telUrl=Awindow>1000?"javascript:;":"tel:17757188259";
    var zwCont='<div class="float_item" type="qq">' +
    '               <a href="'+qqUrl+'" class="mob_qq" target="_blank">' +
    '                   <i class="float_qq"></i><span>在线咨询</span>' +
    '               </a>' +
    '<div class="float_item_text">'+
    '<p class="float_item_qq">'+
    '在线咨询：<b class="ht_qq">9157188259</b>'+'<span></span>'+
    '</p>'+
    '</div>'+
    '           </div>';
    var ifzwCont=Awindow<1000&&(isBaidu || isWx || isHuaWei)?"":zwCont;

    var floatText = '' +
        '<div class="float_box" id="float_box">' +
        '   <div class="float_wrap">' +
        '       <div class="float_links">' +
        '           <div class="float_item to_top">' +
        '               <a href="javascript:;">' +
        '                   <i class="float_top"></i>' +
        '                   <span>返回顶部</span>' +
        '               </a>' +
        '           </div>' + ifzwCont +
        '           <div class="float_item" type="tel">' +
        '               <a href="'+telUrl+'" class="mob_tel">' +
        '                   <i class="float_tel"></i>' +
        '                   <span>电话咨询</span>' +
        '               </a>' +
        '<div class="float_item_text">'+
        '<p class="float_item_tel">咨询热线：<b class="ht_phone">17757188259</b><span></span></p>'+
    '</div>'+
        '           </div>' +ifEwmCont+
        '       </div>' +
        '       <div class="float_toggle">' +
        '           <a href="javascript:;" class="toggle" title="展开/收起"></a>' +
        '       </div>' +
        '   </div>'+
        '</div>';
    /*弹窗*/
    if(showRightBar=="true"){
        $("body").append(floatText);
    }
    /*留言窗口控制*/
    if(message=="true" && $("#message_wrap").length>0){
        $("#message_wrap").append(messWindow);
    }
    if(message=="true" && $("#single_mess").length>0){
        $("#single_mess").append(singleMessWindow);
    }


        $(".refresh-captcha").click(function () {
        refreshCheckCode();
    })

    $(".message-submit").click(function () {
        var linkMan = $("#linkMan").val();
        var telephone = $("#telephone").val();
        var message = $("#message").val();
        var captcha = $("#captcha").val();
        var submit_info = "";
        if (linkMan.length == 0) {
            submit_info = "* 请输入您的姓名";
        }
        if (linkMan && telephone.length == 0) {
            submit_info = "* 请输入您的联系电话";
        }
        if (linkMan && telephone && message.length == 0) {
            submit_info = "* 请填写您的需求";
        }
        if (linkMan && telephone && message && captcha.length == 0) {
            submit_info = "* 请输入验证码";
        }
        if (linkMan && telephone && message && captcha) {
            $.ajax({
                url: "/msgb/w9eFnLm5Jq8J8LwkPBZlZ4/smsg",
                type: "post",
                dataType: "json",
                data: $(".message-body").serialize(),
                success: function (json) {
                    if (json.s) {
                        $("#submit-info").text(json.m);
                        $("#submit-info").show();
                        $(".message-body").find("[name]").val("");
                        refreshCheckCode();
                    } else {
                        $("#submit-info").text(json.m);
                        $("#submit-info").show();
                        refreshCheckCode();
                        $(".message-body [name='vcode']").val("");
                    }
                },
                error: function () {
                }
            })
        }
        $("#submit-info").html(submit_info).addClass("show");

    })

    $(document).on("click",".float_toggle",function(){
        var hasClass = $(".float_box").hasClass("float_box_min");
        if (!hasClass) {
            $(".float_box").addClass("float_box_min");
        } else {
            $(".float_box").removeClass("float_box_min");
        }
    })

    if(Awindow>1000) {
        $(document).on("mouseover", ".float_item", function () {
            $('.float_item_text').hide();
            $(this).children(".float_item_text").show();
        })
        $(document).on("mouseover", ".float_item_text", function () {
            $(this).show();
        })
        $(document).on("mouseout", ".float_item", function () {
            $(this).children(".float_item_text").hide();

        })
        $(document).on("mouseout", ".float_item_text", function () {
            $(this).hide();
        })
    }


    /*to_top*/
    $(document).on("click",".to_top",function(){
        $('body,html').animate({scrollTop:0},500);
    })
    $(window).scroll(function(){
        if ($(window).scrollTop()>100){
            $(".float_wrap").addClass("float_links_allow_gotop");
            $(".float_wrap .to_top").show();
        }else{
            $(".float_wrap").removeClass("float_links_allow_gotop");
            $(".float_wrap .to_top").hide();
        }
    })

})