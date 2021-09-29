(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["top500_cont.htm"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"bjx-topList\">";
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
output += "<div class=\"item\"><div class=\"top\">";
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
output += "<b><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"detail_base"), env.opts.autoescape);
output += "/companys/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"CompanyID"), env.opts.autoescape);
output += ".html\" target=\"_blank\" title=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "job")),"CompanyName"), env.opts.autoescape);
output += "招聘\"><span>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"ShortName"), env.opts.autoescape);
output += "</span><span>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"CompanyName"), env.opts.autoescape);
output += "</span></a></b><p>";
frame = frame.push();
var t_7 = env.getFilter("arr_slice").call(context, runtime.memberLookup((t_4),"JobList"),0,8);
if(t_7) {t_7 = runtime.fromIterator(t_7);
var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("job", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"detail_base"), env.opts.autoescape);
output += "/jobs/";
output += runtime.suppressValue(runtime.memberLookup((t_8),"JobID"), env.opts.autoescape);
output += ".html\" target=\"_blank\" title=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"JobName"), env.opts.autoescape);
output += "招聘\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"JobName"), env.opts.autoescape);
output += "</a>";
;
}
}
frame = frame.pop();
output += "</p></div><div class=\"bottom\"><span>目前已在北极星发布了<em>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"JobCount"), env.opts.autoescape);
output += "</em>个热招岗位</span>";
if(runtime.memberLookup((t_4),"Score")) {
output += "<i class=\"star3-";
output += runtime.suppressValue(env.getFilter("num2class").call(context, runtime.memberLookup((t_4),"Score")), env.opts.autoescape);
output += "\"></i>";
;
}
output += "</div><div class=\"side\"><span>";
output += runtime.suppressValue(env.getFilter("date_format").call(context, runtime.memberLookup((t_4),"UDate"),"yyyy-MM-dd"), env.opts.autoescape);
output += "</span><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"detail_base"), env.opts.autoescape);
output += "/companys/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"CompanyID"), env.opts.autoescape);
output += ".html\" target=\"_blank\">查看详情</a></div></div>";
;
}
}
frame = frame.pop();
output += "<div class=\"bjx-paging\"><span>以上数据排名不分先后</span><div class=\"cc-pagelist\">";
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
output += "</div></div></div>";
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
