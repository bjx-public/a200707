(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["search_cont.htm"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "type") == "cops") {
output += "<div class=\"bjx-sechCop js-track\" data-ba=\"search_gongsi\">";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "list_cop")),"length") > 0) {
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "list_cop");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("cop", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "<div class=\"item\"><div class=\"col0\"><label class=\"ckb\"><input type=\"checkbox\" data-id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"ID"), env.opts.autoescape);
output += "\"><i class=\"iconfont icon-check\"></i></label></div><div class=\"col1\"><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"detail_base"), env.opts.autoescape);
output += "/companys/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"ID"), env.opts.autoescape);
output += ".html\" target=\"_blank\">";
if(runtime.memberLookup((t_4),"Logo")) {
output += "<img src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"Logo"), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"Name"), env.opts.autoescape);
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
output += "</a><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"detail_base"), env.opts.autoescape);
output += "/companys/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"ID"), env.opts.autoescape);
output += ".html\" target=\"_blank\" title=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"Name"), env.opts.autoescape);
output += "招聘\"><h5>";
output += runtime.suppressValue(env.getFilter("cn_substr").call(context, runtime.memberLookup((t_4),"Name"),0,24), env.opts.autoescape);
output += "</h5></a><p>";
if(runtime.memberLookup((t_4),"IndustryName")) {
output += "<span title=\"公司行业\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"IndustryName"), env.opts.autoescape);
output += "</span>";
;
}
if(runtime.memberLookup((t_4),"NatureName")) {
output += "<span title=\"公司性质\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"NatureName"), env.opts.autoescape);
output += "</span>";
;
}
if(runtime.memberLookup((t_4),"ScaleName")) {
output += "<span title=\"公司规模\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"ScaleName"), env.opts.autoescape);
output += "</span>";
;
}
if(runtime.memberLookup((runtime.memberLookup((t_4),"JobNames")),"length") > 0) {
output += "<span>热招 <i>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"JobNames")),0), env.opts.autoescape);
output += "</i> 等";
output += runtime.suppressValue(runtime.memberLookup((t_4),"JobCount"), env.opts.autoescape);
output += "个职位</span>";
;
}
output += "</p><p>";
frame = frame.push();
var t_7 = env.getFilter("arr_slice").call(context, runtime.memberLookup((t_4),"Welfares"),0,4);
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
output += "</p></div></div>";
;
}
}
frame = frame.pop();
output += "<div class=\"bjx-batch\"><label class=\"ckb\"><input type=\"checkbox\"><i class=\"iconfont icon-check\"></i><span>全选</span></label><button class=\"btn js-follow\">批量关注</button></div>";
;
}
else {
output += "<div class=\"pher\"><div><i></i><b>暂时没有符合该关键词的公司</b><p>请重新修改关键词后再进行搜索</p></div></div>";
;
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "pagelist")),"length")) {
output += "<div class=\"bjx-paging\"><div class=\"cc-pagelist\">";
frame = frame.push();
var t_11 = runtime.contextOrFrameLookup(context, frame, "pagelist");
if(t_11) {t_11 = runtime.fromIterator(t_11);
var t_10 = t_11.length;
for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("page", t_12);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
output += "<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_12),"url"), env.opts.autoescape);
output += "\" class=\"";
output += runtime.suppressValue(runtime.memberLookup((t_12),"class"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_12),"name"), env.opts.autoescape);
output += "</a>";
;
}
}
frame = frame.pop();
output += "</div></div>";
;
}
output += "</div>";
;
}
else {
output += "<div class=\"bjx-sechJob js-track\" data-ba=\"";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "type")?"search_zhiwei":"bjxtuijian_list"), env.opts.autoescape);
output += "\">";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "list_job")),"length") > 0) {
frame = frame.push();
var t_15 = runtime.contextOrFrameLookup(context, frame, "list_job");
if(t_15) {t_15 = runtime.fromIterator(t_15);
var t_14 = t_15.length;
for(var t_13=0; t_13 < t_15.length; t_13++) {
var t_16 = t_15[t_13];
frame.set("job", t_16);
frame.set("loop.index", t_13 + 1);
frame.set("loop.index0", t_13);
frame.set("loop.revindex", t_14 - t_13);
frame.set("loop.revindex0", t_14 - t_13 - 1);
frame.set("loop.first", t_13 === 0);
frame.set("loop.last", t_13 === t_14 - 1);
frame.set("loop.length", t_14);
output += "<div class=\"item\"><div class=\"col0\"><label class=\"ckb\"><input type=\"checkbox\" data-id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_16),"JobID"), env.opts.autoescape);
output += "\" data-isOL=\"";
output += runtime.suppressValue(runtime.memberLookup((t_16),"IsOnline"), env.opts.autoescape);
output += "\"><i class=\"iconfont icon-check\"></i></label></div><div class=\"col1\"><b><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"detail_base"), env.opts.autoescape);
output += "/jobs/";
output += runtime.suppressValue(runtime.memberLookup((t_16),"JobID"), env.opts.autoescape);
output += ".html\" target=\"_blank\" title=\"";
output += runtime.suppressValue(runtime.memberLookup((t_16),"Name"), env.opts.autoescape);
output += "招聘\" class=\"";
output += runtime.suppressValue((!runtime.memberLookup((t_16),"IsOnline")?"s":""), env.opts.autoescape);
output += runtime.suppressValue((runtime.memberLookup((t_16),"IsShipping")?"s":""), env.opts.autoescape);
output += runtime.suppressValue((runtime.memberLookup((t_16),"IsTop")?"s":""), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_16),"Name"), env.opts.autoescape);
output += "</a>";
if(!runtime.memberLookup((t_16),"IsOnline")) {
output += "<i class=\"flag-djb\">登记表</i>";
;
}
if(runtime.memberLookup((t_16),"IsShipping")) {
output += "<i class=\"flag-jp\">急聘</i>";
;
}
if(runtime.memberLookup((t_16),"IsTop")) {
output += "<i class=\"flag-tg\">推广</i>";
;
}
output += "<strong>";
output += runtime.suppressValue(runtime.memberLookup((t_16),"PayValue"), env.opts.autoescape);
output += "</strong></b><p>";
if(runtime.memberLookup((t_16),"CityName")) {
output += "<span title=\"工作地点\">";
output += runtime.suppressValue(runtime.memberLookup((t_16),"CityName"), env.opts.autoescape);
output += "</span>";
;
}
if(runtime.memberLookup((t_16),"WorkYearName")) {
output += "<span title=\"工作年限\">";
output += runtime.suppressValue(runtime.memberLookup((t_16),"WorkYearName"), env.opts.autoescape);
output += "</span>";
;
}
if(runtime.memberLookup((t_16),"EducationName")) {
output += "<span title=\"学历要求\">";
output += runtime.suppressValue(runtime.memberLookup((t_16),"EducationName"), env.opts.autoescape);
output += "</span>";
;
}
if(runtime.memberLookup((t_16),"RecruitNum")) {
output += "<span title=\"招聘人数\">";
output += runtime.suppressValue(runtime.memberLookup((t_16),"RecruitNum"), env.opts.autoescape);
output += "</span>";
;
}
output += "</p><p>";
frame = frame.push();
var t_19 = env.getFilter("arr_slice").call(context, runtime.memberLookup((t_16),"Lables"),0,4);
if(t_19) {t_19 = runtime.fromIterator(t_19);
var t_18 = t_19.length;
for(var t_17=0; t_17 < t_19.length; t_17++) {
var t_20 = t_19[t_17];
frame.set("tag", t_20);
frame.set("loop.index", t_17 + 1);
frame.set("loop.index0", t_17);
frame.set("loop.revindex", t_18 - t_17);
frame.set("loop.revindex0", t_18 - t_17 - 1);
frame.set("loop.first", t_17 === 0);
frame.set("loop.last", t_17 === t_18 - 1);
frame.set("loop.length", t_18);
output += "<small>";
output += runtime.suppressValue(t_20, env.opts.autoescape);
output += "</small>";
;
}
}
frame = frame.pop();
output += "</p></div><div class=\"col2\"><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"detail_base"), env.opts.autoescape);
output += "/companys/";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_16),"Company")),"ID"), env.opts.autoescape);
output += ".html\" target=\"_blank\">";
if(runtime.memberLookup((runtime.memberLookup((t_16),"Company")),"Logo")) {
output += "<img src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_16),"Company")),"Logo"), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_16),"Company")),"Name"), env.opts.autoescape);
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
output += "</a><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"detail_base"), env.opts.autoescape);
output += "/companys/";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_16),"Company")),"ID"), env.opts.autoescape);
output += ".html\" target=\"_blank\" title=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_16),"Company")),"Name"), env.opts.autoescape);
output += "招聘\"><h5>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_16),"Company")),"Name"), env.opts.autoescape);
output += "</h5></a><p>";
if(runtime.memberLookup((runtime.memberLookup((t_16),"Company")),"Nature")) {
output += "<span title=\"公司性质\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_16),"Company")),"Nature"), env.opts.autoescape);
output += "</span>";
;
}
if(runtime.memberLookup((runtime.memberLookup((t_16),"Company")),"Scale")) {
output += "<span title=\"公司规模\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_16),"Company")),"Scale"), env.opts.autoescape);
output += "</span>";
;
}
output += "</p></div><div class=\"col3\"><p><b>";
if(runtime.memberLookup((runtime.memberLookup((t_16),"Recruiter")),"HeadUrl")) {
output += "<img src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_16),"Recruiter")),"HeadUrl"), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_16),"Recruiter")),"Name"), env.opts.autoescape);
output += "\">";
if(runtime.memberLookup((runtime.memberLookup((t_16),"Recruiter")),"IsCheck")) {
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
if(runtime.memberLookup((runtime.memberLookup((t_16),"Recruiter")),"Name")) {
output += "<span title=\"面试官姓名\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_16),"Recruiter")),"Name"), env.opts.autoescape);
output += "</span>";
;
}
if(runtime.memberLookup((runtime.memberLookup((t_16),"Recruiter")),"Position")) {
output += "<span title=\"面试官职位\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_16),"Recruiter")),"Position"), env.opts.autoescape);
output += "</span>";
;
}
output += "</p><small>职位刷新于 ";
output += runtime.suppressValue(env.getFilter("date2name2").call(context, runtime.memberLookup((t_16),"RefreshDate")), env.opts.autoescape);
output += "</small></div></div>";
;
}
}
frame = frame.pop();
output += "<div class=\"bjx-batch\"><label class=\"ckb\"><input type=\"checkbox\"><i class=\"iconfont icon-check\"></i><span>全选</span></label><button class=\"btn js-collect\">批量收藏</button><button class=\"btn js-deliver\">批量投递</button></div>";
;
}
else {
output += "<div class=\"pher\"><div><i></i><b>暂时没有符合该关键词的职位</b><p>请重新修改关键词后再进行搜索</p></div></div>";
;
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "pagelist")),"length")) {
output += "<div class=\"bjx-paging\"><div class=\"cc-pagelist\">";
frame = frame.push();
var t_23 = runtime.contextOrFrameLookup(context, frame, "pagelist");
if(t_23) {t_23 = runtime.fromIterator(t_23);
var t_22 = t_23.length;
for(var t_21=0; t_21 < t_23.length; t_21++) {
var t_24 = t_23[t_21];
frame.set("page", t_24);
frame.set("loop.index", t_21 + 1);
frame.set("loop.index0", t_21);
frame.set("loop.revindex", t_22 - t_21);
frame.set("loop.revindex0", t_22 - t_21 - 1);
frame.set("loop.first", t_21 === 0);
frame.set("loop.last", t_21 === t_22 - 1);
frame.set("loop.length", t_22);
output += "<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_24),"url"), env.opts.autoescape);
output += "\" class=\"";
output += runtime.suppressValue(runtime.memberLookup((t_24),"class"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_24),"name"), env.opts.autoescape);
output += "</a>";
;
}
}
frame = frame.pop();
output += "</div></div>";
;
}
output += "</div>";
;
}
if(runtime.contextOrFrameLookup(context, frame, "type")) {
output += "<div class=\"bjx-sechQSA\"><div class=\"head\">对搜索结果是否满意？</div><div class=\"body\"><ul><li><i class=\"iconfont icon-manyidu1\"></i><p>不满意</p></li><li class=\"checked\"><i class=\"iconfont icon-manyidu\"></i><p>一般</p></li><li><i class=\"iconfont icon-manyidu2\"></i><p>满意</p></li></ul><textarea placeholder=\"请填写更多反馈建议...\"></textarea><button>提交</button></div></div>";
;
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "list_hotword")),"length") > 0) {
output += "<div class=\"bjx-sechRWD\"><div class=\"head\"><em></em><span>你也许还对这些感兴趣</span></div><div class=\"body\"><div class=\"list\">";
frame = frame.push();
var t_27 = runtime.contextOrFrameLookup(context, frame, "list_hotword");
if(t_27) {t_27 = runtime.fromIterator(t_27);
var t_26 = t_27.length;
for(var t_25=0; t_25 < t_27.length; t_25++) {
var t_28 = t_27[t_25];
frame.set("item", t_28);
frame.set("loop.index", t_25 + 1);
frame.set("loop.index0", t_25);
frame.set("loop.revindex", t_26 - t_25);
frame.set("loop.revindex0", t_26 - t_25 - 1);
frame.set("loop.first", t_25 === 0);
frame.set("loop.last", t_25 === t_26 - 1);
frame.set("loop.length", t_26);
output += "<a href=\"/hotword/";
output += runtime.suppressValue(runtime.memberLookup((t_28),"Id"), env.opts.autoescape);
output += "/\">";
output += runtime.suppressValue(runtime.memberLookup((t_28),"KeyWord"), env.opts.autoescape);
output += "招聘</a>";
;
}
}
frame = frame.pop();
output += "</div></div></div>";
;
}
output += "<input type=\"hidden\" id=\"js_apis_usr\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"apis")),"usr"), env.opts.autoescape);
output += "\"><input type=\"hidden\" id=\"js_feedback\" value='";
output += runtime.suppressValue(env.getFilter("dump").call(context, runtime.contextOrFrameLookup(context, frame, "feedback")), env.opts.autoescape);
output += "'>";
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
