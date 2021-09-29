(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["zhuanti_cont.htm"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"bjx-specList\">";
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
output += "<div class=\"item\"><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"LinkUrl"), env.opts.autoescape);
output += "\" target=\"_blank\"><img src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"SpecialImg"), env.opts.autoescape);
output += "\"></a><b><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"LinkUrl"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"Special"), env.opts.autoescape);
output += "</a><small>";
output += runtime.suppressValue(env.getFilter("date_format").call(context, runtime.memberLookup((t_4),"UDate"),"yyyy-MM-dd"), env.opts.autoescape);
output += "</small></b><p>";
output += runtime.suppressValue(env.getFilter("cn_substr").call(context, runtime.memberLookup((t_4),"SpecialDesc"),0,140,"..."), env.opts.autoescape);
output += "</p><p>此专题中包含 <span>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"CoCount"), env.opts.autoescape);
output += "</span> 家优质企业，<span>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"JobCount"), env.opts.autoescape);
output += "</span> 个有效岗位</p></div>";
;
}
}
frame = frame.pop();
output += "<div class=\"bjx-paging\"><div class=\"cc-pagelist\">";
frame = frame.push();
var t_7 = runtime.contextOrFrameLookup(context, frame, "pagelist");
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
