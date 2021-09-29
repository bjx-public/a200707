(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["gongsi_cont.htm"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"bjx-copList js-track\" data-ba=\"colibrary_list\"><div class=\"box\">";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "list")),"length")) {
output += "<div class=\"body\">";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "list");
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
output += "<div class=\"cell\"><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"detail_base"), env.opts.autoescape);
output += "/companys/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"CompanyID"), env.opts.autoescape);
output += ".html\" target=\"_blank\">";
if(runtime.memberLookup((t_4),"LogoUrl")) {
output += "<img src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"LogoUrl"), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"CName"), env.opts.autoescape);
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
output += runtime.suppressValue(runtime.memberLookup((t_4),"CompanyID"), env.opts.autoescape);
output += ".html\" target=\"_blank\" title=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"CName"), env.opts.autoescape);
output += "招聘\"><h4>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"CName"), env.opts.autoescape);
output += "</h4></a><p>";
if(runtime.memberLookup((t_4),"Industry")) {
output += "<span>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"Industry"), env.opts.autoescape);
output += "</span>";
;
}
if(runtime.memberLookup((t_4),"Citys")) {
output += "<span>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"Citys"), env.opts.autoescape);
output += "</span>";
;
}
if(runtime.memberLookup((t_4),"Nature")) {
output += "<span>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"Nature"), env.opts.autoescape);
output += "</span>";
;
}
output += "</p><p>";
frame = frame.push();
var t_7 = env.getFilter("arr_slice").call(context, runtime.memberLookup((t_4),"Lightspot"),0,3);
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
output += "</p><ul><li><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"detail_base"), env.opts.autoescape);
output += "/companys/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"CompanyID"), env.opts.autoescape);
output += "/cmts_1/\" target=\"_blank\"><span>";
output += runtime.suppressValue(env.getFilter("d").call(context, runtime.memberLookup((t_4),"IntvCount"),"暂无",true), env.opts.autoescape);
output += "</span></a><small>面试评价</small></li><li><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"detail_base"), env.opts.autoescape);
output += "/companys/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"CompanyID"), env.opts.autoescape);
output += "/jobs_0_1/\" target=\"_blank\"><span>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"JobCount"), env.opts.autoescape);
output += "</span></a><small>在招职位</small></li><li><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"detail_base"), env.opts.autoescape);
output += "/companys/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"CompanyID"), env.opts.autoescape);
output += ".html\" target=\"_blank\"><span>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"LookRate"), env.opts.autoescape);
output += "%</span></a><small>简历查看率</small></li></ul></div>";
;
}
}
frame = frame.pop();
output += "</div>";
;
}
else {
output += "<div class=\"pher\"><div><i></i><b>暂时没有符合该条件的公司</b><p>请重新修改条件后再进行筛选</p></div></div>";
;
}
output += "</div></div><div class=\"cc-pagelist\">";
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
output += "</div>";
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
