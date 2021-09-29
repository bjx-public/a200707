(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["company_cmts_content_list.htm"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data_cmts")),"Eval")),"length") > 0) {
output += "<dl><dt>综合评分：<i class=\"star1-";
output += runtime.suppressValue(env.getFilter("num2class").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data_cmts")),"EvalSum")),"Score")), env.opts.autoescape);
output += "\"></i><span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data_cmts")),"EvalSum")),"Score"), env.opts.autoescape);
output += "</span><small>( 来自";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data_cmts")),"Pageing")),"TotalCount"), env.opts.autoescape);
output += "个人的评价 )</small></dt><dd>描述相符：<i class=\"star2-";
output += runtime.suppressValue(env.getFilter("num2class").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data_cmts")),"EvalSum")),"GdeJob")), env.opts.autoescape);
output += "\"></i><span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data_cmts")),"EvalSum")),"GdeJob"), env.opts.autoescape);
output += "</span>面试官：<i class=\"star2-";
output += runtime.suppressValue(env.getFilter("num2class").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data_cmts")),"EvalSum")),"GdeIntv")), env.opts.autoescape);
output += "\"></i><span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data_cmts")),"EvalSum")),"GdeIntv"), env.opts.autoescape);
output += "</span>公司环境：<i class=\"star2-";
output += runtime.suppressValue(env.getFilter("num2class").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data_cmts")),"EvalSum")),"GdeEnv")), env.opts.autoescape);
output += "\"></i><span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data_cmts")),"EvalSum")),"GdeEnv"), env.opts.autoescape);
output += "</span></dd></dl><ul>";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data_cmts")),"Eval");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("pl", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "<li><div class=\"item-uPic\">";
if(runtime.memberLookup((t_4),"HeadImg")) {
output += "<img src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"HeadImg"), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"UserName"), env.opts.autoescape);
output += "\">";
;
}
else {
if(runtime.memberLookup((t_4),"UserSex") == 0) {
output += "<img src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"asset")),"base"), env.opts.autoescape);
output += "/img/user_avatar_woman.png";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"asset")),"rev"), env.opts.autoescape);
output += "\">";
;
}
else {
output += "<img src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"asset")),"base"), env.opts.autoescape);
output += "/img/user_avatar_man.png";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"asset")),"rev"), env.opts.autoescape);
output += "\">";
;
}
;
}
if(runtime.memberLookup((t_4),"IsSenior")) {
output += "<i class=\"vip\"></i>";
;
}
output += "</div><div class=\"item\"><div><span class=\"item-uName\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"UserName"), env.opts.autoescape);
output += "</span>综合评分：<i class=\"star2-";
output += runtime.suppressValue(env.getFilter("num2class").call(context, runtime.memberLookup((t_4),"Score")), env.opts.autoescape);
output += "\"><div class=\"stat2-detail\"><table><tr><td>描述相符：</td><td><i class=\"star2-";
output += runtime.suppressValue(env.getFilter("num2class").call(context, runtime.memberLookup((t_4),"GdeJob")), env.opts.autoescape);
output += "\"></i></td><td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"GdeJob"), env.opts.autoescape);
output += "</td></tr><tr><td>面试官：</td><td><i class=\"star2-";
output += runtime.suppressValue(env.getFilter("num2class").call(context, runtime.memberLookup((t_4),"GdeIntv")), env.opts.autoescape);
output += "\"></i></td><td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"GdeIntv"), env.opts.autoescape);
output += "</td></tr><tr><td>公司环境：</td><td><i class=\"star2-";
output += runtime.suppressValue(env.getFilter("num2class").call(context, runtime.memberLookup((t_4),"GdeEnv")), env.opts.autoescape);
output += "\"></i></td><td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"GdeEnv"), env.opts.autoescape);
output += "</td></tr></table></div></i>面试职位：<span class=\"item-job\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"JobName"), env.opts.autoescape);
output += "</span><span class=\"item-date\">";
output += runtime.suppressValue(env.getFilter("date_format").call(context, runtime.memberLookup((t_4),"EvalDate"),"yyyy-MM-dd hh:mm"), env.opts.autoescape);
output += "</span></div><div>";
frame = frame.push();
var t_7 = env.getFilter("split").call(context, runtime.memberLookup((t_4),"IntvLable"),",");
if(t_7) {t_7 = runtime.fromIterator(t_7);
var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("tag", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "<span class=\"item-tag\">";
output += runtime.suppressValue(t_8, env.opts.autoescape);
output += "</span>";
;
}
}
frame = frame.pop();
output += "</div><div>[面试过程]<span class=\"item-comment\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"EvalContent"), env.opts.autoescape);
output += "</span></div><div>";
if(runtime.memberLookup((t_4),"HRID")) {
output += "<span class=\"item-but1\">企业回复</span>";
;
}
output += "<span class=\"item-but2\" data-para=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"EvalID"), env.opts.autoescape);
output += "\">有用(";
output += runtime.suppressValue(runtime.memberLookup((t_4),"LikeCount"), env.opts.autoescape);
output += ")</span></div>";
if(runtime.memberLookup((t_4),"HRID")) {
output += "<blockquote><div class=\"item-hrPic\">";
if(runtime.memberLookup((t_4),"HRImg")) {
output += "<img src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"HRImg"), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"HRName"), env.opts.autoescape);
output += "\">";
if(runtime.memberLookup((t_4),"IsCheck")) {
output += "<i class=\"vip\"></i>";
;
}
;
}
else {
output += "<img src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"asset")),"base"), env.opts.autoescape);
output += "/img/user_avatar.png";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"asset")),"rev"), env.opts.autoescape);
output += "\">";
;
}
output += "</div><div class=\"item-hrName\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"HRName"), env.opts.autoescape);
output += " · ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"HRTitle"), env.opts.autoescape);
output += "<span class=\"item-date\">";
output += runtime.suppressValue(env.getFilter("date_format").call(context, runtime.memberLookup((t_4),"HRReDate"),"yyyy-MM-dd hh:mm"), env.opts.autoescape);
output += "</span></div><div class=\"item-reply\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"HRReContent"), env.opts.autoescape);
output += "</div></blockquote>";
;
}
output += "</div></li>";
;
}
}
frame = frame.pop();
output += "</ul>";
;
}
else {
output += "<div class=\"nocmet\"><span></span></div>";
;
}
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
