!function(){var n,o;history.pushState&&window.nunjucksENV&&((o=/bjx:nonce=([^;]+)/.exec(document.cookie))&&o[1]&&(o=(n=Date.now())+ +o[1],$.ajax({url:"/api/get_rand",type:"POST",data:{t:n,r:o},cache:!1}).done(function(n){})),window.anchorClick=function(e,a){var n=window.net_loading();$.ajax({url:e,type:"GET",data:"ajax=1",cache:!1,dataType:"json",timeout:1e4}).done(function(n){try{var o=window.nunjucksENV.render("job_more_content.htm",n);$("#job_more_content").html(o),a&&a.setURL&&history.pushState(null,null,e),a&&a.goTop&&$("html,body").scrollTop($(".bjx-jobRecmed").offset().top-40)}catch(t){console.error(t)}}).fail(function(n){/刷新/.test(n.responseText)&&(location.href=e)}).always(function(){n.remove()})},$("#job_more_content").delegate(".cc-pagelist a","click",function(n){window.nunjucksENV&&(n.preventDefault(),(n=$(this).attr("href"))&&"javascript:;"!=n&&window.anchorClick(n,{setURL:!0,goTop:!0}))}),$(window).on("popstate",function(n){window.nunjucksENV&&(n.preventDefault(),n=location.pathname,window.anchorClick(n))}))}();