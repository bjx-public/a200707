!function(){var a=[];function c(t){$.ajax({url:"/api/slot_stat",type:"POST",data:JSON.stringify({type:1,arr:[t]}),processData:!1,contentType:"application/json",cache:!1,dataType:"json"})}function e(t){t.forEach(function(t){t=a.indexOf(t);-1!==t&&a.splice(t,1)})}function r(n){a=a.concat(n),$.ajax({url:"/api/slot_stat",type:"POST",data:JSON.stringify({type:0,arr:n}),processData:!1,contentType:"application/json",cache:!1,dataType:"json"}).done(function(t){1!==t.status&&e(n)}).fail(function(t){e(n)})}function t(){for(var t=new IntersectionObserver(function(t,n){var e=[];t.forEach(function(t){!t.isIntersecting||(t=+t.target.dataset.pid)&&-1===a.indexOf(t)&&e.push(t)}),e&&e.length&&r(e)},{threshold:.95}),n=document.querySelectorAll(".js-put-slot"),e=0,i=n.length;e<i;e+=1){var o=n[e];t.observe(o),o.addEventListener("click",function(t){var n=!1,e=t.path||[],i=e.length;if(i){for(var o=0;o<i;o+=1)if("A"==e[o].nodeName){n=!0;break}}else"A"==t.target.nodeName&&(n=!0);!n||(t=+this.dataset.pid)&&c(t)})}}window.IntersectionObserver?t():$.getScript("https://static.bjx.com.cn/public/a200707/bjx_site200_dq/js/lib/intersection-observer.js",function(){t()}),window.pi_exposed=function(){return a},window.pi_listening=function(){t()},window.pi_clicking=function(t){c(t)},window.pi_exposing=function(t){var n;"[object Array]"===Object.prototype.toString.call(t)?(n=[],t.forEach(function(t){-1===a.indexOf(t=+t)&&n.push(t)}),n&&n.length&&r(n)):-1===a.indexOf(t=+t)&&r([t])}}();