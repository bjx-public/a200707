!function(){var e=$("#js_area").data("val")||"-1",n=[],a=[0,0,0,0],o=function o(){$.getScript("https://static.bjx.com.cn/public/a200707/bjx_site303_dqzl/js/put_img.js",function(){n.length&&window.pi_exposing(n)})};$.get("/api/slot/10011/-1/-1/"+e+"/-1",function(t,e,i){t&&/html/.test(i.getResponseHeader("content-type"))&&($("body").prepend(t),n.push($(t).data("pid")))}),$.get("/api/slot/10000/-1/-1/"+e+"/-1",function(t,e,i){t&&/html/.test(i.getResponseHeader("content-type"))&&$(".js-slot-jigsaw").replaceWith(t),a[0]=1,/^1+$/.test(a.join(""))&&o()}),$.get("/api/slot/10001/-1/-1/"+e+"/-1",function(t,e,i){t&&/html/.test(i.getResponseHeader("content-type"))&&$(".js-slot-hot").replaceWith(t),a[1]=1,/^1+$/.test(a.join(""))&&o()}),$.get("/api/slot/10002/-1/-1/"+e+"/-1",function(t,e,i){t&&/html/.test(i.getResponseHeader("content-type"))&&$(".js-slot-star").replaceWith(t),a[2]=1,/^1+$/.test(a.join(""))&&o()}),$.get("/api/slot/10003/-1/-1/"+e+"/-1",function(t,e,i){t&&/html/.test(i.getResponseHeader("content-type"))&&($(".js-slot-xxtt").replaceWith(t),setTimeout(function(){var t=$(".js-swiper-xxtt").data("len");window.swiper_xxtt=new Swiper(".js-swiper-xxtt",{direction:"vertical",autoplay:+t<2?0:5e3,loop:!0,mousewheelControl:!0,spaceBetween:20,onInit:function(t){t=$(t.wrapper).find(".swiper-slide-active .item");window.pi_exposing&&t.length&&t.data("pid")&&window.pi_exposing(t.data("pid"))},onSlideChangeEnd:function(t){t=$(t.wrapper).find(".swiper-slide-active .item");window.pi_exposing&&t.length&&t.data("pid")&&window.pi_exposing(t.data("pid"))},onClick:function(t,e){if(window.pi_clicking){var i=!1,n=e.path||[],a=n.length;if(a){for(var o=0;o<a;o+=1)if("A"==n[o].nodeName){i=!0;break}}else"A"==e.target.nodeName&&(i=!0);!i||(t=$(t.wrapper).find(".swiper-slide-active .item").data("pid"))&&window.pi_clicking(t)}}})},500)),a[3]=1,/^1+$/.test(a.join(""))&&o()}),$(".bjx-topnav .area small").click(function(){$(".bjx-topnav .area .citys").show()}),$(".bjx-topnav .area .citys b").click(function(){$(".bjx-topnav .area .citys").hide()});var t=new Swiper(".js-swiper-quick",{autoplay:5e3,loop:!0,mousewheelControl:!0,paginationClickable:!0,pagination:".swiper-pagination"});$(".js-swiper-quick").hover(function(){t.stopAutoplay()},function(){t.startAutoplay()}),$(".bjx-homeCat .cats li").on("mouseover",function(){var e=this,t=$(this).data("ind").split(",");2!=t.length||$(this).data("loading")||($(this).data("loading",1),$.get("/api/section/home_indnav_child",{industry:t[0],depth:t[1],_:Date.now()},function(t){/行业导航/.test(t)&&$(e).find(".js-slot-child").replaceWith(t)}),$.get("/api/section/home_indnav_jobs",{industry:t[0],depth:t[1],_:Date.now()},function(t){/热门职位/.test(t)&&$(e).find(".js-slot-jobs").replaceWith(t)}),$.get("/api/section/home_indnav_cops",{industry:t[0],depth:t[1],_:Date.now()},function(t){/热招企业/.test(t)&&$(e).find(".js-slot-cops").replaceWith(t)}))});var i=0,s=$(".bjx-homeRcmd .head span");s.click(function(){var t=s.index($(this));i!=t&&(i=t,s.removeClass("active").addClass("deactive"),$(this).addClass("active"),$(".bjx-homeRcmd .body").animate({opacity:0},100),delete(t=$(this).data("args")).name,e&&(t.provid=e),$.get("/api/section/home_rcmd/",t,function(t){$(".bjx-homeRcmd .body").stop().empty().append(t).css({opacity:1})}))}),$(".bjx-flink .body span").click(function(){var t=$(this).text(),e=$(this).siblings("p");"展开"==t?($(this).html('收起<i class="iconfont icon-shangla"></i>'),e.css("height","auto")):($(this).html('展开<i class="iconfont icon-xiala"></i>'),e.css("height","26px"))}),$(".bjx-searchBar form").submit(function(t){if(""===($(this).find("input").val()||"").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))return window.$msg_alert||(window.$msg_alert=1,window.msg_alert("请输入关键词",{btn1_fun:function(){delete window.$msg_alert}})),!1}),$(".bjx-flink").on("click","a",function(t){return t.preventDefault(),window.open($(this).attr("href")).opener=null,!1})}();