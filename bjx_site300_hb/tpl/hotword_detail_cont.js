(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["hotword_detail_cont.htm"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "args")),"type") == 1) {
output += "<div class=\"bjx-sechJob js-track\" data-ba=\"hotword_shezhao\">";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "args")),"type") == 2) {
output += "<div class=\"bjx-sechJob js-track\" data-ba=\"hotword_xiaozhao\">";
;
}
else {
output += "<div class=\"bjx-sechJob js-track\" data-ba=\"hotword_quanbu\">";
;
}
;
}
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"HWJobList")),"List");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "<div class=\"item\"><div class=\"col1\"><b><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"detail_base"), env.opts.autoescape);
output += "/jobs/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"JobID"), env.opts.autoescape);
output += ".html\" target=\"_blank\" title=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"JobName"), env.opts.autoescape);
output += "招聘\" class=\"";
output += runtime.suppressValue((!runtime.memberLookup((t_4),"IsOnline")?"s":""), env.opts.autoescape);
output += runtime.suppressValue((runtime.memberLookup((t_4),"IsShipping")?"s":""), env.opts.autoescape);
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "job")),"IsTop")?"s":""), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"JobName"), env.opts.autoescape);
output += "招聘</a>";
if(!runtime.memberLookup((t_4),"IsOnline")) {
output += "<i class=\"flag-djb\">登记表</i>";
;
}
if(runtime.memberLookup((t_4),"IsShipping")) {
output += "<i class=\"flag-jp\">急聘</i>";
;
}
if(runtime.memberLookup((t_4),"IsTop")) {
output += "<i class=\"flag-tg\">推广</i>";
;
}
output += "<strong>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"Salary"), env.opts.autoescape);
output += "</strong></b><p>";
if(runtime.memberLookup((t_4),"JCitys")) {
output += "<span title=\"工作地点\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"JCitys"), env.opts.autoescape);
output += "</span>";
;
}
if(runtime.memberLookup((t_4),"WorkYear")) {
output += "<span title=\"工作年限\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"WorkYear"), env.opts.autoescape);
output += "</span>";
;
}
if(runtime.memberLookup((t_4),"EduName")) {
output += "<span title=\"学历要求\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"EduName"), env.opts.autoescape);
output += "</span>";
;
}
if(runtime.memberLookup((t_4),"RecruitCount")) {
output += "<span title=\"招聘人数\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"RecruitCount"), env.opts.autoescape);
output += "人</span>";
;
}
output += "</p><p>";
frame = frame.push();
var t_7 = env.getFilter("arr_slice").call(context, runtime.memberLookup((t_4),"Lightsopt"),0,4);
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
output += "<small>";
output += runtime.suppressValue(t_8, env.opts.autoescape);
output += "</small>";
;
}
}
frame = frame.pop();
output += "</p></div><div class=\"col2\">";
if(runtime.memberLookup((t_4),"CompanyLogo")) {
output += "<img src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"CompanyLogo"), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"CompanyName"), env.opts.autoescape);
output += "\">";
;
}
else {
output += "<img src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"asset")),"base"), env.opts.autoescape);
output += "/img/default_logo.png";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"asset")),"rev"), env.opts.autoescape);
output += "\">";
;
}
output += "<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"detail_base"), env.opts.autoescape);
output += "/companys/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"CompanyID"), env.opts.autoescape);
output += ".html\" target=\"_blank\" title=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"CompanyName"), env.opts.autoescape);
output += "招聘\"><h5>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"CompanyName"), env.opts.autoescape);
output += "</h5></a><p>";
if(runtime.memberLookup((t_4),"Nature")) {
output += "<span title=\"公司性质\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"Nature"), env.opts.autoescape);
output += "</span>";
;
}
if(runtime.memberLookup((t_4),"Scale")) {
output += "<span title=\"公司规模\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"Scale"), env.opts.autoescape);
output += "</span>";
;
}
output += "</p></div><div class=\"col3\"><p><b>";
if(runtime.memberLookup((t_4),"HRHead")) {
output += "<img src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"HRHead"), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"HRName"), env.opts.autoescape);
output += "\">";
if(runtime.memberLookup((t_4),"IsCheck")) {
output += "<i></i>";
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
output += "</b>";
if(runtime.memberLookup((t_4),"HRName")) {
output += "<span title=\"面试官姓名\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"HRName"), env.opts.autoescape);
output += "</span>";
;
}
if(runtime.memberLookup((t_4),"HRTitle")) {
output += "<span title=\"面试官职位\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"HRTitle"), env.opts.autoescape);
output += "</span>";
;
}
output += "</p><small>职位刷新于 ";
output += runtime.suppressValue(env.getFilter("date2name2").call(context, runtime.memberLookup((t_4),"UDate")), env.opts.autoescape);
output += "</small></div></div>";
;
}
}
frame = frame.pop();
output += "<div class=\"bjx-more\">";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "args")),"type") == 1) {
output += "<a href=\"/search/result/?kw=";
output += runtime.suppressValue(env.getFilter("urlencode").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"HotWord")),"KeyWord")), env.opts.autoescape);
output += "\" target=\"_blank\">查看更多<span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"HotWord")),"KeyWord"), env.opts.autoescape);
output += "</span>社会招聘职位</a>";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "args")),"type") == 2) {
output += "<a href=\"/search/result/?kw=";
output += runtime.suppressValue(env.getFilter("urlencode").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"HotWord")),"KeyWord")), env.opts.autoescape);
output += "\" target=\"_blank\">查看更多<span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"HotWord")),"KeyWord"), env.opts.autoescape);
output += "</span>校园招聘职位</a>";
;
}
else {
output += "<a href=\"/search/result/?kw=";
output += runtime.suppressValue(env.getFilter("urlencode").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"HotWord")),"KeyWord")), env.opts.autoescape);
output += "\" target=\"_blank\">查看更多<span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"HotWord")),"KeyWord"), env.opts.autoescape);
output += "</span>招聘职位</a>";
;
}
;
}
output += "</div></div>";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "hotword")),"List")),"length") > 0) {
output += "<div class=\"bjx-sechRWD\"><div class=\"head\"><em></em><span>你也许还对这些感兴趣</span></div><div class=\"body\"><div class=\"list\">";
frame = frame.push();
var t_11 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "hotword")),"List");
if(t_11) {t_11 = runtime.fromIterator(t_11);
var t_10 = t_11.length;
for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("item", t_12);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
output += "<a href=\"/hotword/";
output += runtime.suppressValue(runtime.memberLookup((t_12),"Id"), env.opts.autoescape);
output += "/\">";
output += runtime.suppressValue(runtime.memberLookup((t_12),"KeyWord"), env.opts.autoescape);
output += "招聘</a>";
;
}
}
frame = frame.pop();
output += "</div></div></div>";
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
