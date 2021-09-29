(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["company_jobs_content.htm"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"bjx-copClass\">";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data_jobs_cond")),"Dept");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("dept", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "<a href=\"/companys/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "args")),"id"), env.opts.autoescape);
output += "/jobs_";
output += runtime.suppressValue(runtime.memberLookup((t_4),"DeptID"), env.opts.autoescape);
output += "_1/\" data-id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"DeptID"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"DeptName"), env.opts.autoescape);
output += " (";
output += runtime.suppressValue(runtime.memberLookup((t_4),"JobCount"), env.opts.autoescape);
output += ")</a>";
;
}
}
frame = frame.pop();
output += "</div><div class=\"bjx-copJobslist\"><ul>";
frame = frame.push();
var t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data_jobs")),"lstJob");
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
output += "<li><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"detail_base"), env.opts.autoescape);
output += "/jobs/";
output += runtime.suppressValue(runtime.memberLookup((t_8),"JobID"), env.opts.autoescape);
output += ".html\" target=\"_blank\"><b>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"JobName"), env.opts.autoescape);
output += " ";
if(runtime.memberLookup((t_8),"IsShipping")) {
output += "<span>急招岗位</span>";
;
}
output += "</b><p>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"Salary"), env.opts.autoescape);
output += " <span>截止日期：";
output += runtime.suppressValue(env.getFilter("date_format").call(context, runtime.memberLookup((t_8),"EndDate"),"yyyy-MM-dd"), env.opts.autoescape);
output += " &nbsp;&nbsp;&nbsp;&nbsp; 职位刷新：";
output += runtime.suppressValue(env.getFilter("date2name2").call(context, runtime.memberLookup((t_8),"UDate")), env.opts.autoescape);
output += "</span></p><small>";
if(runtime.memberLookup((t_8),"Citys")) {
output += "<span title=\"工作地点\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"Citys"), env.opts.autoescape);
output += "</span>";
;
}
if(runtime.memberLookup((t_8),"WorkYear")) {
output += "<span title=\"工作年限\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"WorkYear"), env.opts.autoescape);
output += "</span>";
;
}
if(runtime.memberLookup((t_8),"EduName")) {
output += "<span title=\"学历要求\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"EduName"), env.opts.autoescape);
output += "</span>";
;
}
if(runtime.memberLookup((t_8),"RecruitCount")) {
output += "<span title=\"招聘人数\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"RecruitCount"), env.opts.autoescape);
output += "人</span>";
;
}
output += "</small></a></li>";
;
}
}
frame = frame.pop();
output += "</ul><div class=\"cc-pagelist\">";
frame = frame.push();
var t_11 = runtime.contextOrFrameLookup(context, frame, "pagelist_jobs");
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
output += "</div></div><div id=\"data_jobs_url\" data-value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "data_jobs_url"), env.opts.autoescape);
output += "\"></div>";
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
