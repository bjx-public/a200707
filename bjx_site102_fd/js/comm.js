!function(){function n(t,e){e=e||{};var n={title:"",msg:"",btn1_txt:"确定",btn1_fun:function(){},btn2_txt:"取消",btn2_fun:function(){}};function i(t){if("string"!=typeof t)return"";var e=Object.keys||function(t){var e,n=[];for(e in t=Object(t))n.push(e);return n},n={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;"},e=new RegExp("["+e(n).join("")+"]","g");return t.replace(e,function(t){return n[t]})}$.extend(n,e);var a,s,o=$('<div class="cc-msg-popup"></div>'),l=$('<div class="box"></div>'),c=$('<div class="close">×</div>'),d=$('<div class="title">'+i(n.title)+"</div>"),r=$('<div class="msg">'+i(n.msg)+"</div>"),p=$('<button class="confirm">'+i(n.btn1_txt)+"</button>"),e=$('<button class="cancel">'+i(n.btn2_txt)+"</button>"),u=function(){$(a).remove()};return(a=o).dblclick(function(){u(),n.btn2_fun()}),l.dblclick(function(t){t.stopPropagation()}),c.click(function(){u(),n.btn2_fun()}),p.click(function(){u(),n.btn1_fun()}),e.click(function(){u(),n.btn2_fun()}),1===t?s=$('<div class="btn"></div>').append(p):2===t&&(s=$('<div class="btn"></div>').append(e).append(p)),l.append(c).append(d).append(r).append(s).appendTo(o),$("html").append(o),o}window.net_loading=function(){var t=$("<div class='cc-loading'><div><img src='https://static.bjx.com.cn/public/a200707/bjx_site102_fd/img/loading.gif?v=2'><p>努力加载中</p></div>");return $("html").append(t),t},window.msg_alert=function(t,e){if(t)return(e=e||{}).msg=t,n(1,e)},window.msg_confirm=function(t,e){if(t)return(e=e||{}).msg=t,n(2,e)},window.msg_hint=function(t,e){if(e=e||{},t=t||""){var n={type:"",duration:3e3};$.extend(n,e);var i=$('<div class="cc-msg-hint slideInDown"></div>');return("success"===n.type?$('<div class="box success"><div class="msg"><i class="iconfont icon-success"></i><p>'+a(t)+"</p></div></div>"):"warning"===n.type?$('<div class="box warning"><div class="msg"><i class="iconfont icon-warning"></i><p>'+a(t)+"</p></div></div>"):"error"===n.type?$('<div class="box error"><div class="msg"><i class="iconfont icon-error"></i><p>'+a(t)+"</p></div></div>"):$('<div class="box info"><div class="msg"><i class="iconfont icon-info"></i><p>'+a(t)+"</p></div></div>")).appendTo(i),$("html").append(i),n.duration&&setTimeout(function(){i.removeClass("slideInDown").addClass("slideOutUp"),setTimeout(function(){i.remove()},600)},n.duration),i}function a(t){if("string"!=typeof t)return"";var e=Object.keys||function(t){var e,n=[];for(e in t=Object(t))n.push(e);return n},n={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;"},e=new RegExp("["+e(n).join("")+"]","g");return t.replace(e,function(t){return n[t]})}}}(),function(){var a=function a(){var i=$(".bjx-topnav .btns");i.length&&$.get("/api/get_login_info",function(t,e,n){/text\/html/.test(n.getResponseHeader("content-type"))&&i.replaceWith(t)}),$(".bjx-slogan").hide(),$(".bjx-xcxqr").hide(),$(".bjx-kefu .lg").hide()},s=function s(){var i=$(".bjx-topnav .greet");i.length&&$.get("/api/get_login_info",function(t,e,n){/text\/html/.test(n.getResponseHeader("content-type"))&&i.replaceWith(t)}),$(".bjx-slogan").show(),$(".bjx-xcxqr").show(),$(".bjx-kefu .lg").show()};window.addEventListener("storage",function(t){if("bjx_user_info"===t.key&&t.newValue){var e={};try{e=JSON.parse(t.newValue)}catch(n){}(e.UId?a:s)(),$(".js-op-login-ifr").remove(),$(".js-op-logout-ifr").remove()}})}(),$.ajaxSetup({success:function(t,e,n){/application\/json/.test(n.getResponseHeader("content-type"))&&(window.set_op_logout||!t.set_op_logout&&"set_op_logout"!==t.extra||((t=window.document.createElement("script")).src="/oidc/set_op_logout",window.document.body.appendChild(t)))}}),$(document).on("click","a",function(t){var e=$(this).data("url")||"";"nofollow"===$(this).attr("rel")&&e&&(t.preventDefault(),"_blank"===$(this).attr("target")?window.open(e):location.href=e)}),$(function(){$(".bjx-topnav").on("click",".js-menu-switch",function(){$(this).parents(".js-menu").hide().siblings(".js-menu").show()})}),$(document).on("mousedown",".js-track a",function(t){var e=$(this).parents(".js-track"),n=e.data("ba")||"",i=$(this).data("bp")||e.data("bp")||"",a=$(this).attr("href"),e=/notrack/.test(this.rel)||this.hasAttribute("notrack");n&&!e&&!/ba=(.*)|bp=(.*)/.test(a)&&/\/vip\/|\/companys\/\d+\.html|\/jobs\/\d+\.html/.test(a)&&(i=a+(/\?/.test(a)?"&":"?")+"ba="+n+(i?"&bp="+i:""),$(this).attr("href",i))}),$(function(){var n=0,i=0;$(".bjx-topnav .menu span").mousedown(function(t){var e;t.stopPropagation(),1===t.which&&(i=n=1,(e=$(this).find("s")).addClass("active"),setTimeout(function(){i=0,n||e.removeClass("active")},330),$(".bjx-topnav .menu .maps").toggleClass("active"))}),$(".bjx-topnav .menu span").mouseup(function(){n=0,i||$(this).find("s").removeClass("active")}),$(".bjx-topnav .menu .maps").mousedown(function(t){t.stopPropagation()}),$(document).mousedown(function(){$(".bjx-topnav .menu .maps").removeClass("active")})}),$(function(){var a,t,e;/spider/.test(navigator.userAgent.toLowerCase())||((a=$(".bjx-kefu .kf ul")).length<1||(t={},!(e=a.data("ind"))||2<=(e=e.split(",")).length&&(t.industry=e[0],t.depth=e[1]),$.get("/api/get_contact_info",t,function(t,e,n){var i;1===t.status&&(i="",1<t.data.length?(2<t.data.length&&!/bjx:uid=\d+/.test(document.cookie)&&$(".bjx-kefu .xy").hide(),$.each(t.data.slice(0,3),function(t,e){i+="<li>",e.HeadImg&&(i+='<img src="'+e.HeadImg+'">'),e.ServiceName&&(i+="<b>"+e.ServiceName+"</b>"),e.TelePhone&&(i+="<span>"+e.TelePhone+"</span>"),i+="</li>"})):1===t.data.length&&(t=t.data[0],i+="<li>",t.HeadImg&&(i+='<img src="'+t.HeadImg+'">'),t.ServiceName&&(i+="<b>"+t.ServiceName+"</b>"),t.TelePhone&&(i+="<span>"+t.TelePhone+"</span>"),t.MobilePhone&&(i+="<span>"+t.MobilePhone+"</span>"),i+="</li>"),a.html(i))})))}),$(document).on("click",".bjx-toptop .icon-guanbi",function(){$(this).parents(".bjx-toptop").remove()}),function(){function n(){var t=$('<div class="user-patch"><div class="popup"><div class="box"><form><dl><dt>角色选择</dt><dd><label class="rdo"><input type="radio" name="role" value="JobSeeker"><span>我要找工作</span></label><label class="rdo"><input type="radio" name="role" value="Recruiter"><span>我要招聘</span></label></dd><dt>行业选择</dt><dd><label class="slt"><input type="text" name="industry" placeholder="请选择行业" readonly><i class="iconfont icon-xiala"></i></label></dd><dt>设置密码</dt><dd><label class="ipt"><input type="password" name="pwd" maxlength="16" placeholder="8~16位非规律字母和数字组成"></label></dd></dl><button type="submit">确定</button></form></div></div></div>');$("body").append(t);var l=(e.prototype.next=function(t,e){for(var n=$("<ul/>"),i=0;i<t.length;i++)n.append(this.render(t[i],e));return n},e.prototype.render=function(t,e){var n=this,i=$("<li/>");return i.data("data",{value:t.value,label:t.label,item:t,layer:e}),2===this.type||3===this.type?t.children?i.append('<label><input type="radio" name="l'+e+'"></label><span title="'+t.label+'">'+t.label+'</span><i class="iconfont icon-xiangyoujiantou"></i>'):i.append('<label><input type="radio" name="l'+e+'"></label><span title="'+t.label+'">'+t.label+"</span>"):t.children?i.append('<span title="'+t.label+'">'+t.label+'</span><i class="iconfont icon-xiangyoujiantou"></i>'):i.append('<span title="'+t.label+'">'+t.label+"</span>"),2===this.type||3===this.type?(i.click(function(){var t=$(this).data("data");n.values.splice(t.layer,10,t.value),n.labels.splice(t.layer,10,t.label),n.items.splice(t.layer,10,t.item);var e=$(this).parents("ul").data("parent");e&&($(e).addClass("check").siblings("li").removeClass("check"),$(e).find("input").prop("checked",!0)),$(this).addClass("check").siblings("li").removeClass("check"),$(this).find("input").prop("checked",!0),t.item.children?((e=n.next(t.item.children,t.layer+1)).data("parent",this),n.insert(e,t.layer+1)):n.$dom.find("ul").slice(t.layer+1).remove(),t.item.children||(n.callback(),n.hide(),n.$dom.find("ul").slice(t.layer+1).remove())}),i.find("input").click(function(t){var e;3===n.type&&(t.stopPropagation(),e=$(this).parents("li").data("data"),n.values.splice(e.layer,10,e.value),n.labels.splice(e.layer,10,e.label),n.items.splice(e.layer,10,e.item),(t=$(this).parents("ul").data("parent"))&&($(t).addClass("check").siblings("li").removeClass("check"),$(t).find("input").prop("checked",!0)),n.$dom.find("ul").slice(e.layer+1).remove(),$(this).parents("li").addClass("check").siblings("li").removeClass("check"),$(this).parents("li").find("input").prop("checked",!0),n.callback(),n.hide(),n.$dom.find("ul").slice(e.layer+1).remove())})):(i.mouseover(function(){var t=$(this).data("data");n.values.splice(t.layer,10,t.value),n.labels.splice(t.layer,10,t.label),n.items.splice(t.layer,10,t.item);var e=$(this).parents("ul").data("parent");e&&$(e).addClass("check").siblings("li").removeClass("check"),t.item.children?((e=n.next(t.item.children,t.layer+1)).data("parent",this),n.insert(e,t.layer+1)):n.$dom.find("ul").slice(t.layer+1).remove()}),i.click(function(){var t=$(this).data("data");t.item.children&&1!==n.type||($(this).addClass("check").siblings("li").removeClass("check"),n.callback(),n.hide(),n.$dom.find("ul").slice(t.layer+1).remove())})),i},e.prototype.insert=function(t,e){this.$dom.find("ul").slice(e).remove(),this.$dom.append(t),this.backfill_status||this.$dom.find("ul").niceScroll({cursorcolor:"#949494",autohidemode:"leave"})},e.prototype.show=function(t,e,n){var i;t?(this.$dom.attr("class","cc-cascader2"),this.$el=$(t),i=this.$el.offset(),t=t.getBoundingClientRect(),e=i.top+this.$el.height()+10,n=i.left,document.documentElement.clientHeight-t.bottom<262&&(272<t.top?(this.$dom.addClass("below"),e-=272+this.$el.height()):(this.$dom.addClass("none"),e-=(252+this.$el.height())/2)),this.$dom.css({position:"absolute",top:e+"px",left:n+"px"}).show()):this.$dom.css({position:"fixed",top:e+"px",left:n+"px"}).show(),this.backfill_status||this.$dom.find("ul").niceScroll({cursorcolor:"#949494",autohidemode:"leave"})},e.prototype.hide=function(){this.$dom.hide(),this.$el&&this.$el.find(".iconfont").removeClass("active")},e.prototype.callback=function(t){var e=$.extend([],this.values),n=$.extend([],this.labels),i=$.map(this.items,function(t){var n={};return $.each(t,function(t,e){"children"!=t&&(n[t]=e)}),n});try{this.cb(e,n,i,t)}catch(a){}},e.prototype.backfill=function(t,e){this.backfill_status=1;var n=t||[],i=[],a=[],s=this;if(n&&n.length)for(var o=0;o<n.length;o++){var l=this.$dom.find("ul")[o];$(l).find("li").removeClass("check").each(function(){var t,e=$(this).data("data");e.value==n[o]&&($(this).addClass("check").find("input").prop("checked",!0),i.push(e.label),a.push(e.item),e.item.children&&0<e.item.children.length&&o<n.length-1&&(t=s.next(e.item.children,e.layer+1),s.insert(t,e.layer+1)))})}else this.$dom.find("ul li").removeClass("check");this.values=n,this.labels=i,this.items=a,this.backfill_status=0,this.callback(e)},e);function e(t,e,n){this.cb=e,this.type=n||0,this.values=[],this.labels=[],this.items=[];t=this.next(t,0);this.$dom=$('<div class="cc-cascader2" />').hide(),this.$dom.append(t).on("click",function(t){t.stopPropagation()});var i=this;$(document).click(function(){i.hide()});try{this.$dom.get(0).addEventListener("wheel",function(t){t.preventDefault()}),this.$dom.get(0).addEventListener("mousewheel",function(t){t.preventDefault()}),this.$dom.get(0).addEventListener("DOMMouseScroll",function(t){t.preventDefault()})}catch(a){}$("body").append(this.$dom)}$.nicescroll||$.getScript("https://static.bjx.com.cn/public/a200707/bjx_site102_fd/js/lib/jquery.nicescroll.min.js"),$.getJSON("/api/cond/industry/",function(t,e,n){var i=$(".user-patch .slt"),a=i.find("input"),s=i.find(".iconfont"),o=new l(t.data,function(t,e,n,i){a.val(e.join(" - ")).data("val",t.pop()),s.removeClass("active")},1);i.click(function(t){t.stopPropagation(),s.hasClass("active")?(s.removeClass("active"),o.hide()):(s.addClass("active"),t=this.getBoundingClientRect(),document.documentElement.clientHeight-t.bottom<262?260<t.top?o.show(null,t.top-262,t.left):o.show(null,t.top-111,t.left):o.show(null,t.bottom+10,t.left))}),$(document).click(function(){s.removeClass("active")})}),$(".user-patch form").submit(function(t){t.preventDefault?t.preventDefault():window.event.returnValue=!1;var e=$('.user-patch input[name="role"]:checked').val()||"",n=$('.user-patch input[name="industry"]').data("val")||"",t=$('.user-patch input[name="pwd"]').val()||"";if(e)if(n)if(t){if(/^(?=.*[0-9])(?=.*[a-zA-Z])(([\x21-\x7e])|[^a-zA-Z0-9]){8,16}$/.test(t))return delete window.sessionStorage.need_patch_userinfo,delete window.sessionStorage.need_patch_userinfo_switch,$.ajax({url:"/api/quick_signup/patch_para/",type:"post",data:JSON.stringify({role:e,industry:n,pwd:t}),processData:!1,contentType:"application/json",cache:!1,dataType:"json"}).done(function(t){$.ajax({url:t.url,type:"post",data:JSON.stringify(t.body),processData:!1,contentType:"application/json",cache:!1,dataType:"json",xhrFields:{withCredentials:!0}}).done(function(t){location.href="Recruiter"==e?"https://yun.bjx.com.cn/":"https://my.bjx.com.cn/"})}),!1;window.msg_alert("密码格式不符合要求")}else window.msg_alert("请输入密码");else window.msg_alert("请选择行业");else window.msg_alert("请选择角色")})}var i;window.sessionStorage.need_patch_userinfo&&window.sessionStorage.need_patch_userinfo_switch&&n(),/bjx:uid=\d+/.test(document.cookie)?((i=$(".bjx-topnav .btns")).length&&$.get("/api/get_login_info",function(t,e,n){/text\/html/.test(n.getResponseHeader("content-type"))&&i.replaceWith(t)}),$.getScript("https://static.bjx.com.cn/public/a200707/bjx_site102_fd/js/notices.js")):($(function(){var t;window.set_op_logout||window.check_op_login||((t=window.document.createElement("script")).src="/oidc/check_op_login",window.document.body.appendChild(t))}),0<$(".bjx-slogan").show().length&&$.getScript("https://static.bjx.com.cn/public/a200707/bjx_site102_fd/js/lib/gt.js",function(){var i="",e=function e(n){n.onSuccess(function(){var t=n.getValidate(),e=$('.bjx-slogan input[name="phone"]').val()||"";/^1\d{10}$/.test(e)?(a($(".bjx-slogan label span"),60),t.phone=e,$.ajax({url:"/api/quick_signup/geetest_check/",type:"post",data:JSON.stringify(t),processData:!1,contentType:"application/json",cache:!1,dataType:"json"}).done(function(t){1===t.status?(i=e,window.msg_hint("短信发送成功",{type:"success"})):(n.reset(),t=t.data&&t.data.Error?t.data.Error:"短信发送失败",window.msg_hint(t,{type:"error"}))})):window.msg_alert("请输入正确的手机号")}),window.captchaObj=n};$.ajax({url:"/api/quick_signup/geetest_get/",type:"get",cache:!1,dataType:"json"}).done(function(t){1===t.status?initGeetest({gt:t.data.Gt,challenge:t.data.Challenge,offline:!t.data.Success,new_captcha:t.data.New_Captcha,product:"bind"},e):console.log("极验初始化失败!")});var a=function a(t,e){var n=e||60;$(t).addClass("disabled").data("loading",1).html(n+"s"),$(t).siblings('input[name="code"]').val("");var i=setInterval(function(){--n<0?(clearInterval(i),$(t).removeClass("disabled").data("loading",0).html("重发")):$(t).html(n+"s")},1e3)};$(".bjx-slogan label span").click(function(t){var e;$(this).data("loading")||(e=$('.bjx-slogan input[name="phone"]').val()||"",/^1\d{10}$/.test(e)?window.captchaObj&&window.captchaObj.verify():window.msg_alert("请输入正确的手机号"))}),$(".bjx-slogan form").submit(function(t){t.preventDefault?t.preventDefault():window.event.returnValue=!1;var e=$('.bjx-slogan input[name="phone"]').val()||"",t=$('.bjx-slogan input[name="code"]').val()||"";if(i)if(i===e)if(t){t={phone:e,code:t,source:location.protocol+"//"+location.host};if(!window.slogan_login)return window.slogan_login=1,$.ajax({url:"/api/quick_signup/signup_para/",type:"post",data:JSON.stringify(t),processData:!1,contentType:"application/json",cache:!1,dataType:"json"}).done(function(t){$.ajax({url:t.url,type:"post",data:JSON.stringify(t.body),processData:!1,contentType:"application/json",cache:!1,dataType:"json",xhrFields:{withCredentials:!0}}).done(function(t){!1===t.IsError?(window.msg_hint("登录/注册成功",{type:"success"}),$("body").append('<script src="/oidc/check_op_login"><\/script>'),t.Data.Patch&&(n(),window.sessionStorage.need_patch_userinfo=1),setTimeout(function(){/bjx:uid=\d+/.test(document.cookie)||(window.sessionStorage.need_patch_userinfo_switch=1,window.location.reload())},7e3)):(window.slogan_login=0,t=t.Error||"登录/注册失败，请稍后再试",window.msg_hint(t,{type:"error"}))})}),!1}else window.msg_alert("验证码不能为空");else window.msg_alert("验证手机和当前手机号不一致");else window.msg_alert("请先获取验证码")})}),$(".bjx-xcxqr").show(),$(function(){$(".bjx-kefu .lg").show()}))}();