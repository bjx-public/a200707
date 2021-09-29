(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["bangdan_cont.htm"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["list", "site"], 
[], 
function (l_list, l_site, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("list", l_list);
frame.set("site", l_site);
var t_2 = "";frame = frame.push();
var t_5 = l_list;
if(t_5) {t_5 = runtime.fromIterator(t_5);
var t_4 = t_5.length;
for(var t_3=0; t_3 < t_5.length; t_3++) {
var t_6 = t_5[t_3];
frame.set("item", t_6);
frame.set("loop.index", t_3 + 1);
frame.set("loop.index0", t_3);
frame.set("loop.revindex", t_4 - t_3);
frame.set("loop.revindex0", t_4 - t_3 - 1);
frame.set("loop.first", t_3 === 0);
frame.set("loop.last", t_3 === t_4 - 1);
frame.set("loop.length", t_4);
t_2 += "<div class=\"cell type1\"><a href=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_site),"detail_base"), env.opts.autoescape);
t_2 += "/companys/";
t_2 += runtime.suppressValue(runtime.memberLookup((t_6),"CompanyID"), env.opts.autoescape);
t_2 += ".html\" target=\"_blank\">";
if(runtime.memberLookup((t_6),"LogoUrl")) {
t_2 += "<img src=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((t_6),"LogoUrl"), env.opts.autoescape);
t_2 += "\" alt=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((t_6),"CName"), env.opts.autoescape);
t_2 += "\">";
;
}
else {
t_2 += "<img src=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_site),"asset")),"base"), env.opts.autoescape);
t_2 += "/img/default_logo.png";
t_2 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_site),"asset")),"rev"), env.opts.autoescape);
t_2 += "\">";
;
}
t_2 += "</a><a href=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_site),"detail_base"), env.opts.autoescape);
t_2 += "/companys/";
t_2 += runtime.suppressValue(runtime.memberLookup((t_6),"CompanyID"), env.opts.autoescape);
t_2 += ".html\" target=\"_blank\" title=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((t_6),"CName"), env.opts.autoescape);
t_2 += "招聘\"><h4>";
t_2 += runtime.suppressValue(runtime.memberLookup((t_6),"CName"), env.opts.autoescape);
t_2 += "</h4></a><p>";
if(runtime.memberLookup((t_6),"Industry")) {
t_2 += "<span>";
t_2 += runtime.suppressValue(runtime.memberLookup((t_6),"Industry"), env.opts.autoescape);
t_2 += "</span>";
;
}
if(runtime.memberLookup((t_6),"Citys")) {
t_2 += "<span>";
t_2 += runtime.suppressValue(runtime.memberLookup((t_6),"Citys"), env.opts.autoescape);
t_2 += "</span>";
;
}
if(runtime.memberLookup((t_6),"Nature")) {
t_2 += "<span>";
t_2 += runtime.suppressValue(runtime.memberLookup((t_6),"Nature"), env.opts.autoescape);
t_2 += "</span>";
;
}
t_2 += "</p><p>";
frame = frame.push();
var t_9 = env.getFilter("arr_slice").call(context, runtime.memberLookup((t_6),"Lightspot"),0,3);
if(t_9) {t_9 = runtime.fromIterator(t_9);
var t_8 = t_9.length;
for(var t_7=0; t_7 < t_9.length; t_7++) {
var t_10 = t_9[t_7];
frame.set("tag", t_10);
frame.set("loop.index", t_7 + 1);
frame.set("loop.index0", t_7);
frame.set("loop.revindex", t_8 - t_7);
frame.set("loop.revindex0", t_8 - t_7 - 1);
frame.set("loop.first", t_7 === 0);
frame.set("loop.last", t_7 === t_8 - 1);
frame.set("loop.length", t_8);
t_2 += "<small>";
t_2 += runtime.suppressValue(t_10, env.opts.autoescape);
t_2 += "</small>";
;
}
}
frame = frame.pop();
t_2 += "</p><ul><li><a href=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_site),"detail_base"), env.opts.autoescape);
t_2 += "/companys/";
t_2 += runtime.suppressValue(runtime.memberLookup((t_6),"CompanyID"), env.opts.autoescape);
t_2 += "/cmts_1/\" target=\"_blank\"><span>";
t_2 += runtime.suppressValue(env.getFilter("d").call(context, runtime.memberLookup((t_6),"IntvCount"),"暂无",true), env.opts.autoescape);
t_2 += "</span></a><small>面试评价</small></li><li><a href=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_site),"detail_base"), env.opts.autoescape);
t_2 += "/companys/";
t_2 += runtime.suppressValue(runtime.memberLookup((t_6),"CompanyID"), env.opts.autoescape);
t_2 += "/jobs_0_1/\" target=\"_blank\"><span>";
t_2 += runtime.suppressValue(runtime.memberLookup((t_6),"JobCount"), env.opts.autoescape);
t_2 += "</span></a><small>在招职位</small></li><li><a href=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_site),"detail_base"), env.opts.autoescape);
t_2 += "/companys/";
t_2 += runtime.suppressValue(runtime.memberLookup((t_6),"CompanyID"), env.opts.autoescape);
t_2 += ".html\" target=\"_blank\"><span>";
t_2 += runtime.suppressValue(runtime.memberLookup((t_6),"LookRate"), env.opts.autoescape);
t_2 += "%</span></a><small>简历查看率</small></li></ul></div>";
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("type11");
context.setVariable("type11", macro_t_1);
var macro_t_11 = runtime.makeMacro(
["list", "site"], 
[], 
function (l_list, l_site, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("list", l_list);
frame.set("site", l_site);
var t_12 = "";frame = frame.push();
var t_15 = l_list;
if(t_15) {t_15 = runtime.fromIterator(t_15);
var t_14 = t_15.length;
for(var t_13=0; t_13 < t_15.length; t_13++) {
var t_16 = t_15[t_13];
frame.set("item", t_16);
frame.set("loop.index", t_13 + 1);
frame.set("loop.index0", t_13);
frame.set("loop.revindex", t_14 - t_13);
frame.set("loop.revindex0", t_14 - t_13 - 1);
frame.set("loop.first", t_13 === 0);
frame.set("loop.last", t_13 === t_14 - 1);
frame.set("loop.length", t_14);
t_12 += "<div class=\"cell type2\"><b>";
if(runtime.memberLookup((t_16),"HRHead")) {
t_12 += "<img src=\"";
t_12 += runtime.suppressValue(runtime.memberLookup((t_16),"HRHead"), env.opts.autoescape);
t_12 += "\" alt=\"";
t_12 += runtime.suppressValue(runtime.memberLookup((t_16),"HRName"), env.opts.autoescape);
t_12 += "\">";
if(runtime.memberLookup((t_16),"IsCheck")) {
t_12 += "<i></i>";
;
}
;
}
else {
t_12 += "<img src=\"";
t_12 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_site),"asset")),"base"), env.opts.autoescape);
t_12 += "/img/user_avatar.png";
t_12 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_site),"asset")),"rev"), env.opts.autoescape);
t_12 += "\">";
;
}
t_12 += "</b><a href=\"";
t_12 += runtime.suppressValue(runtime.memberLookup((l_site),"detail_base"), env.opts.autoescape);
t_12 += "/companys/";
t_12 += runtime.suppressValue(runtime.memberLookup((t_16),"CompanyID"), env.opts.autoescape);
t_12 += ".html\" target=\"_blank\" title=\"";
t_12 += runtime.suppressValue(runtime.memberLookup((t_16),"HRName"), env.opts.autoescape);
t_12 += "招聘\"><h4>";
t_12 += runtime.suppressValue(runtime.memberLookup((t_16),"HRName"), env.opts.autoescape);
t_12 += "</h4></a><p>";
if(runtime.memberLookup((t_16),"HRTitle")) {
t_12 += "<span>";
t_12 += runtime.suppressValue(runtime.memberLookup((t_16),"HRTitle"), env.opts.autoescape);
t_12 += "</span>";
;
}
if(runtime.memberLookup((t_16),"ShortName")) {
t_12 += "<span>";
t_12 += runtime.suppressValue(runtime.memberLookup((t_16),"ShortName"), env.opts.autoescape);
t_12 += "</span>";
;
}
t_12 += "</p><p>";
frame = frame.push();
var t_19 = env.getFilter("arr_slice").call(context, runtime.memberLookup((t_16),"Lightspot"),0,3);
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
t_12 += "<small>";
t_12 += runtime.suppressValue(t_20, env.opts.autoescape);
t_12 += "</small>";
;
}
}
frame = frame.pop();
t_12 += "</p><ul><li><a href=\"";
t_12 += runtime.suppressValue(runtime.memberLookup((l_site),"detail_base"), env.opts.autoescape);
t_12 += "/companys/";
t_12 += runtime.suppressValue(runtime.memberLookup((t_16),"CompanyID"), env.opts.autoescape);
t_12 += "/jobs_0_1/\" target=\"_blank\"><span>";
t_12 += runtime.suppressValue(runtime.memberLookup((t_16),"JobCount"), env.opts.autoescape);
t_12 += "</span></a><small>发布职位</small></li><li><a href=\"";
t_12 += runtime.suppressValue(runtime.memberLookup((l_site),"detail_base"), env.opts.autoescape);
t_12 += "/companys/";
t_12 += runtime.suppressValue(runtime.memberLookup((t_16),"CompanyID"), env.opts.autoescape);
t_12 += ".html\" target=\"_blank\"><span>";
t_12 += runtime.suppressValue(runtime.memberLookup((t_16),"LookRate"), env.opts.autoescape);
t_12 += "%</span></a><small>简历查看率</small></li><li><a href=\"";
t_12 += runtime.suppressValue(runtime.memberLookup((l_site),"detail_base"), env.opts.autoescape);
t_12 += "/companys/";
t_12 += runtime.suppressValue(runtime.memberLookup((t_16),"CompanyID"), env.opts.autoescape);
t_12 += ".html\" target=\"_blank\"><span>";
t_12 += runtime.suppressValue(runtime.memberLookup((t_16),"TreaRate"), env.opts.autoescape);
t_12 += "%</span></a><small>简历处理率</small></li></ul></div>";
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_12);
});
context.addExport("type12");
context.setVariable("type12", macro_t_11);
var macro_t_21 = runtime.makeMacro(
["list", "site"], 
[], 
function (l_list, l_site, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("list", l_list);
frame.set("site", l_site);
var t_22 = "";frame = frame.push();
var t_25 = l_list;
if(t_25) {t_25 = runtime.fromIterator(t_25);
var t_24 = t_25.length;
for(var t_23=0; t_23 < t_25.length; t_23++) {
var t_26 = t_25[t_23];
frame.set("item", t_26);
frame.set("loop.index", t_23 + 1);
frame.set("loop.index0", t_23);
frame.set("loop.revindex", t_24 - t_23);
frame.set("loop.revindex0", t_24 - t_23 - 1);
frame.set("loop.first", t_23 === 0);
frame.set("loop.last", t_23 === t_24 - 1);
frame.set("loop.length", t_24);
t_22 += "<div class=\"cell type1\">";
if(runtime.memberLookup((t_26),"LogoUrl")) {
t_22 += "<img src=\"";
t_22 += runtime.suppressValue(runtime.memberLookup((t_26),"LogoUrl"), env.opts.autoescape);
t_22 += "\" alt=\"";
t_22 += runtime.suppressValue(runtime.memberLookup((t_26),"CName"), env.opts.autoescape);
t_22 += "\">";
;
}
else {
t_22 += "<img src=\"";
t_22 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_site),"asset")),"base"), env.opts.autoescape);
t_22 += "/img/default_logo.png";
t_22 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_site),"asset")),"rev"), env.opts.autoescape);
t_22 += "\">";
;
}
t_22 += "<i class=\"star3-";
t_22 += runtime.suppressValue(env.getFilter("num2class").call(context, runtime.memberLookup((t_26),"Score")), env.opts.autoescape);
t_22 += "\"></i><a href=\"";
t_22 += runtime.suppressValue(runtime.memberLookup((l_site),"detail_base"), env.opts.autoescape);
t_22 += "/companys/";
t_22 += runtime.suppressValue(runtime.memberLookup((t_26),"CompanyID"), env.opts.autoescape);
t_22 += ".html\" target=\"_blank\" title=\"";
t_22 += runtime.suppressValue(runtime.memberLookup((t_26),"CName"), env.opts.autoescape);
t_22 += "招聘\">";
t_22 += runtime.suppressValue(runtime.memberLookup((t_26),"CName"), env.opts.autoescape);
t_22 += "</a></div>";
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_22);
});
context.addExport("type21");
context.setVariable("type21", macro_t_21);
if(runtime.contextOrFrameLookup(context, frame, "type") == "mingxing") {
output += "<div class=\"js-track\" data-ba=\"colibrary_mingxing\">";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "type") == "shangshi") {
output += "<div class=\"js-track\" data-ba=\"colibrary_shangshi\">";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "type") == "gaoxiao") {
output += "<div class=\"js-track\" data-ba=\"colibrary_gaoxiaohr\">";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "type") == "bitou") {
output += "<div class=\"js-track\" data-ba=\"colibrary_bitou\">";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "type") == "haoping") {
output += "<div class=\"js-track\" data-ba=\"colibrary_haoping\">";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "type") == "jituan") {
output += "<div class=\"js-track\" data-ba=\"colibrary_jituan\">";
;
}
else {
output += "<div class=\"js-track\" data-ba=\"\">";
;
}
;
}
;
}
;
}
;
}
;
}
if(runtime.contextOrFrameLookup(context, frame, "type") == "haoping") {
output += "<div class=\"bjx-boardCat2\"><div class=\"box\"><div class=\"body\">";
output += runtime.suppressValue((lineno = 0, colno = 3385, runtime.callWrap(macro_t_21, "type21", context, [runtime.contextOrFrameLookup(context, frame, "list"),runtime.contextOrFrameLookup(context, frame, "site")])), env.opts.autoescape);
output += "</div></div></div>";
;
}
else {
output += "<div class=\"bjx-boardCat1\"><div class=\"box\"><div class=\"body\">";
if(runtime.contextOrFrameLookup(context, frame, "type") == "gaoxiao") {
output += runtime.suppressValue((lineno = 0, colno = 3523, runtime.callWrap(macro_t_11, "type12", context, [runtime.contextOrFrameLookup(context, frame, "list"),runtime.contextOrFrameLookup(context, frame, "site")])), env.opts.autoescape);
;
}
else {
output += runtime.suppressValue((lineno = 0, colno = 3555, runtime.callWrap(macro_t_1, "type11", context, [runtime.contextOrFrameLookup(context, frame, "list"),runtime.contextOrFrameLookup(context, frame, "site")])), env.opts.autoescape);
;
}
output += "</div></div></div>";
;
}
output += "</div><div class=\"bjx-paging\"><span>以上数据排名不分先后</span><div class=\"cc-pagelist\">";
frame = frame.push();
var t_29 = runtime.contextOrFrameLookup(context, frame, "pagelist");
if(t_29) {t_29 = runtime.fromIterator(t_29);
var t_28 = t_29.length;
for(var t_27=0; t_27 < t_29.length; t_27++) {
var t_30 = t_29[t_27];
frame.set("page", t_30);
frame.set("loop.index", t_27 + 1);
frame.set("loop.index0", t_27);
frame.set("loop.revindex", t_28 - t_27);
frame.set("loop.revindex0", t_28 - t_27 - 1);
frame.set("loop.first", t_27 === 0);
frame.set("loop.last", t_27 === t_28 - 1);
frame.set("loop.length", t_28);
output += "<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_30),"url"), env.opts.autoescape);
output += "\" class=\"";
output += runtime.suppressValue(runtime.memberLookup((t_30),"class"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_30),"name"), env.opts.autoescape);
output += "</a>";
;
}
}
frame = frame.pop();
output += "</div></div>";
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
