!function(){var e,t;history.pushState&&window.nunjucksENV&&((t=/bjx:nonce=([^;]+)/.exec(document.cookie))&&t[1]&&(t=(e=Date.now())+ +t[1],$.ajax({url:"/api/get_rand",type:"POST",data:{t:e,r:t},cache:!1}).done(function(e){})),window.anchorClick=function(o,a){var e=window.net_loading();$.ajax({url:o,type:"GET",data:"ajax=1",cache:!1,dataType:"json",timeout:1e4}).done(function(e){try{var t=window.nunjucksENV.render("zhuanti_cont.htm",e);$("#render_slot").html(t),a&&a.setURL&&history.pushState(null,null,o),a&&a.goTop&&$("html,body").scrollTop($("#render_slot").offset().top-20),e.seo&&e.seo.title&&$("title").text(e.seo.title)}catch(n){console.error(n)}}).fail(function(e){/刷新/.test(e.responseText)&&(location.href=o)}).always(function(){e.remove()})},$(window).on("popstate",function(e){var t=location.pathname+location.search;e.preventDefault(),window.anchorClick(t)}),$("#render_slot").on("click",".cc-pagelist a",function(e){var t=$(this).attr("href");t&&"javascript:;"!==t&&(e.preventDefault(),window.anchorClick(t,{setURL:1,goTop:1}))}),$(".bjx-checkBar").on("click","a",function(e){var t=$(this).attr("href");t&&"javascript:;"!==t&&(e.preventDefault(),window.anchorClick(t,{setURL:1}))}),$(".bjx-checkBar").on("click","a",function(e){$(this).parent().siblings("li").children("a").removeClass("checked"),$(this).addClass("checked")}))}(),function(){var t=window.localStorage&&window.localStorage.bjx_guess_index||0;function e(){var e=$(".bjx-guess .head a").data("max")||0;t=+t,(e=+e)&&e<=t?t=1:t+=1,$.get("/api/section/bjx_guess/",{index:t},function(e){-1!==e.indexOf("<")?$(".bjx-guess").replaceWith(e):t=0,window.localStorage.bjx_guess_index=t})}e(),$(".right").on("click",".bjx-guess .head a",function(){e()})}();