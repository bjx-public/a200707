!function(){var t,n;history.pushState&&window.nunjucksENV&&((n=/bjx:nonce=([^;]+)/.exec(document.cookie))&&n[1]&&(n=(t=Date.now())+ +n[1],$.ajax({url:"/api/get_rand",type:"POST",data:{t:t,r:n},cache:!1}).done(function(t){})),window.anchorClick=function(a,o){var t=window.net_loading();$.ajax({url:a,type:"GET",data:"ajax=1",cache:!1,dataType:"json",timeout:1e4}).done(function(t){try{var n=window.nunjucksENV.render("bangdan_cont.htm",t);$("#render_slot").html(n),o&&o.setURL&&history.pushState(null,null,a),o&&o.goTop&&$("html,body").scrollTop($("#render_slot").offset().top-20)}catch(e){console.error(e)}}).fail(function(t){/刷新/.test(t.responseText)&&(location.href=a)}).always(function(){t.remove()})},$(window).on("popstate",function(t){var n=location.pathname+location.search;t.preventDefault(),window.anchorClick(n)}),$("#render_slot").on("click",".cc-pagelist a",function(t){var n=$(this).attr("href");n&&"javascript:;"!==n&&(t.preventDefault(),window.anchorClick(n,{setURL:1,goTop:1}))}),$(".bjx-filterBar").on("click","a",function(t){var n=$(this).attr("href");$(this).hasClass("checked")?t.preventDefault():n&&"javascript:;"!==n&&/province=-?\d+/.test(n)&&(t.preventDefault(),window.anchorClick(n,{setURL:1}))}),$(".bjx-filterBar").on("click","a",function(t){$(this).siblings("a").removeClass("checked"),$(this).addClass("checked")}))}();