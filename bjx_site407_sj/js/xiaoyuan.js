!function(){var a=[],s=[0,0,0,0],n=function n(){$.getScript("https://static.bjx.com.cn/public/a200707/bjx_site407_sj/js/put_img.js",function(){a.length&&window.pi_exposing(a)})};$.get("/api/slot/10011/-1/-1/-1/2",function(e,t,i){e&&/html/.test(i.getResponseHeader("content-type"))&&($("body").prepend(e),a.push($(e).data("pid")))}),$.get("/api/slot/10006/-1/-1/-1/-1",function(e,t,i){e&&/html/.test(i.getResponseHeader("content-type"))&&($(".js-slot-slide").replaceWith(e),setTimeout(function(){window.swiper_slide=new Swiper(".js-swiper-slide",{autoplay:5e3,loop:!0,mousewheelControl:!0,paginationClickable:!0,pagination:".swiper-pagination",onInit:function(e){e=$(e.wrapper).find(".swiper-slide-active .item");window.pi_exposing&&e.length&&e.data("pid")&&window.pi_exposing(e.data("pid"))},onSlideChangeEnd:function(e){var t=$(e.wrapper).find(".swiper-slide-active .item");window.pi_exposing&&t.length&&t.data("pid")&&window.pi_exposing(t.data("pid")),$(".js-swiper-slide ~ .swiper-tab span").removeClass("active").eq(e.realIndex||0).addClass("active")},onClick:function(e,t){if(pi_clicking){var i=!1,a=t.path||[],s=a.length;if(s){for(var n=0;n<s;n+=1)if("A"==a[n].nodeName){i=!0;break}}else"A"==t.target.nodeName&&(i=!0);!i||(e=$(e.wrapper).find(".swiper-slide-active .item").data("pid"))&&pi_clicking(e)}}});var t=$(".js-swiper-slide ~ .swiper-tab span");t.click(function(){t.removeClass("active"),$(this).addClass("active");var e=t.index(this);window.swiper_slide.slideTo(e+1)})},500)),s[0]=1,/^1+$/.test(s.join(""))&&n()}),$.get("/api/slot/10007/-1/-1/-1/-1",function(e,t,i){e&&/html/.test(i.getResponseHeader("content-type"))&&$(".js-slot-focus").replaceWith(e),s[1]=1,/^1+$/.test(s.join(""))&&n()}),$.get("/api/slot/10008/-1/-1/-1/-1",function(e,t,i){e&&/html/.test(i.getResponseHeader("content-type"))&&$(".js-slot-chunk1").replaceWith(e),s[2]=1,/^1+$/.test(s.join(""))&&n()}),$.get("/api/slot/10009/-1/-1/-1/-1",function(e,t,i){e&&/html/.test(i.getResponseHeader("content-type"))&&$(".js-slot-chunk2").replaceWith(e),s[3]=1,/^1+$/.test(s.join(""))&&n()});var t=0,i=$(".bjx-campusSect1 .head span");i.click(function(){var e=i.index($(this));t!=e&&(t=e,i.removeClass("active").addClass("deactive"),$(this).addClass("active"),$(".bjx-campusSect1 .body").animate({opacity:0},100),delete(e=$(this).data("args")).name,$.get("/api/section/xiaoyuan_latest/",e,function(e){$(".bjx-campusSect1 .body").stop().empty().append(e).css({opacity:1})}))});var o=0,p=$(".bjx-homeRcmd .head span");p.click(function(){var e=p.index($(this));o!=e&&(o=e,p.removeClass("active").addClass("deactive"),$(this).addClass("active"),$(".bjx-homeRcmd .body").animate({opacity:0},100),delete(e=$(this).data("args")).name,$.get("/api/section/xiaoyuan_rcmd/",e,function(e){$(".bjx-homeRcmd .body").stop().empty().append(e).css({opacity:1})}))})}();