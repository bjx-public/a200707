!function(){var t=$("#js_industry").data("val")||{},t=t.value+"/"+t.depth+"/-1/-1",a=[0,0],i=function i(){$.getScript("https://static.bjx.com.cn/public/a200707/bjx_site100_dl/js/put_img.js")};$.get("/api/slot/10004/"+t,function(t,e,s){t&&/html/.test(s.getResponseHeader("content-type"))&&$(".js-slot-chunk1").replaceWith(t),a[0]=1,/^1+$/.test(a.join(""))&&i()},"html"),$.get("/api/slot/10005/"+t,function(t,e,s){t&&/html/.test(s.getResponseHeader("content-type"))&&$(".js-slot-chunk2").replaceWith(t),a[1]=1,/^1+$/.test(a.join(""))&&i()},"html");var e=0,s=$(".bjx-homeRcmd .head span");s.click(function(){var t=s.index($(this));e!=t&&(e=t,s.removeClass("active").addClass("deactive"),$(this).addClass("active"),$(".bjx-homeRcmd .body").animate({opacity:0},100),delete(t=$(this).data("args")).name,$.get("/api/section/home_rcmd/",t,function(t){$(".bjx-homeRcmd .body").stop().empty().append(t).css({opacity:1})}))})}();