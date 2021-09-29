(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["company_cmts_content.htm"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"bjx-copCmetdetail\"><div class=\"bjx-comComment\"><div class=\"comm-box-title\"><i></i>面试评价</div><div class=\"comm-box-body\">";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("company_cmts_content_list.htm", false, "company_cmts_content.htm", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "</div></div><div class=\"cc-pagelist\">";
frame = frame.push();
var t_7 = runtime.contextOrFrameLookup(context, frame, "pagelist_cmts");
if(t_7) {t_7 = runtime.fromIterator(t_7);
var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("page", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"url"), env.opts.autoescape);
output += "\" class=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"class"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"name"), env.opts.autoescape);
output += "</a>";
;
}
}
frame = frame.pop();
output += "</div></div><div id=\"data_cmts_url\" data-value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "data_cmts_url"), env.opts.autoescape);
output += "\"></div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
