$(".popup-base .close, .popup-base .btn-base").click(function(){$(this).parents(".popup-base").parent("div").hide()}),$(".popup-base").dblclick(function(a){a.currentTarget===a.target&&$(this).parent("div").hide()}),$(".bjx-layout, .bjx-campusSect2").on("click",".js-follow",function(){var o,a,i=$(this);i.data("loading")||(i.data("loading",1),o=1,i.hasClass("disabled")&&(o=0),a={id:i.data("id"),act:o},$.ajax({url:"/api/talk_follow",type:"POST",data:JSON.stringify(a),processData:!1,contentType:"application/json",cache:!1}).done(function(a){var t;1===a.status?o?(window.msg_hint("关注成功",{type:"success"}),i.addClass("disabled").text("已关注")):(window.msg_hint("取消关注成功",{type:"success"}),i.removeClass("disabled").text("立即关注")):600===a.status?window.msg_alert(a.message,{btn1_fun:function(){location.href=a.data},btn2_fun:function(){location.href=a.data}}):601===a.status?location.href=a.data:(t=a.data&&a.data.Error?a.data.Error:a.message,window.msg_alert(t))}).always(function(){i.data("loading",0)}))}),$(".bjx-layout, .bjx-campusSect2").on("click",".js-enroll",function(){$(this).hasClass("disabled")||$(this).data("loading")||$(".popup-applyForm").data({id:$(this).data("id"),dom:this}).show()}),$(".popup-applyForm").on("click",".btn2",function(){var a,t,o,i,n,p,s,e,l,d=$(".popup-applyForm").data("id"),r=$(".popup-applyForm").data("dom");d&&(a=/^[\u4E00-\u9FFF\uF900-\uFAFF（） A-Za-z\(\)\,\.]{4,50}$/,t=$('.popup-applyForm input[name="name"]').val(),o=$('.popup-applyForm input[name="phone"]').val(),i=$('.popup-applyForm input[name="school"]').val(),n=$('.popup-applyForm input[name="majors"]').val(),p=$('.popup-applyForm input[name="tel"]').val(),s=$('.popup-applyForm input[name="email"]').val(),e=$('.popup-applyForm input[name="wx"]').val(),l=$('.popup-applyForm input[name="qq"]').val(),""!=t?/^[\u4E00-\u9FFF\uF900-\uFAFF A-Za-z\.]{2,30}$/.test(t.trim())?""!=o?/^1\d{10}$/.test(o.trim())?""!=i?a.test(i.trim())?""!=n?a.test(n.trim())?!p||/^\(?0\d{2,3}[\)-\s]?\d{7,8}(-\d{1,4})?$/.test(p.trim())?!s||/^\w[\w\.\-\_]*@([\w\-]+\.)+(\w+\.?)+$/.test(s.trim())?!e||/^[A-Za-z][A-Za-z0-9_-]{5,19}$/.test(e.trim())?!l||/^\d{5,10}$/.test(l.trim())?(l={id:d,name:t.trim(),phone:o.trim(),school:i.trim(),majors:n.trim(),tel:p.trim(),email:s.trim(),wx:e.trim(),qq:l.trim()},$(".popup-applyForm").hide(),$(r).data("loading",1),$.ajax({url:"/api/dual_enroll",type:"POST",data:JSON.stringify(l),processData:!1,contentType:"application/json",cache:!1}).done(function(a){var t;1===a.status?(window.msg_hint("报名成功",{type:"success"}),$(r).addClass("disabled").text("已报名")):600===a.status?window.msg_alert(a.message,{btn1_fun:function(){location.href=a.data},btn2_fun:function(){location.href=a.data}}):601===a.status?location.href=a.data:(t=a.data&&a.data.Error?a.data.Error:a.message,window.msg_alert(t))}).always(function(){$(r).data("loading",0)})):window.msg_alert("请输入正确的QQ号码"):window.msg_alert("请输入正确的微信号码"):window.msg_alert("请输入正确的邮箱账号"):window.msg_alert("请输入正确的固话号码"):window.msg_alert("请输入正确的专业名称"):window.msg_alert("专业名称不能为空"):window.msg_alert("请输入正确的院校名称"):window.msg_alert("毕业院校不能为空"):window.msg_alert("请输入正确的手机号"):window.msg_alert("手机号不能为空"):window.msg_alert("请输入正确的姓名"):window.msg_alert("姓名不能为空"))});