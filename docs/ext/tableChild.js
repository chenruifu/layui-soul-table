/**
 *
 * @name:  子表格扩展
 * @author: yelog
 * @link: https://github.com/yelog/layui-soul-table
 * @license: MIT
 * @version: v1.5.15
 */
layui.define(["table","element","form","laytpl"],function(exports){var $=layui.jquery,table=layui.table,laytpl=layui.laytpl,tableChildren={},ELEM_HOVER="soul-table-hover",mod={render:function(y){var t,f=this,l=$(y.elem),e=l.next().children(".layui-table-box"),p=y.id,v=e.children(".layui-table-header").children("table"),x=e.children(".layui-table-fixed").children(".layui-table-body").children("table"),g=e.children(".layui-table-body").children("table"),C=$.merge(e.children(".layui-table-body").children("table"),x),i=f.getCompleteCols(y.cols),a=[],n=void 0===y.soulSort||y.soulSort;for(f.fixHoverStyle(y),t=0;t<i.length;t++)i[t].children&&0<i[t].children.length&&a.push(t);if(void 0===l.attr("lay-filter")&&l.attr("lay-filter",p),0===l.parents(".childTr").length&&("function"==typeof y.rowEvent&&table.on("row("+l.attr("lay-filter")+")",function(e){var t=$(this).data("index");e.tr=C.children("tbody").children('tr[data-index="'+t+'"]'),y.rowEvent(e)}),"function"==typeof y.rowDoubleEvent&&table.on("rowDouble("+l.attr("lay-filter")+")",function(e){var t=$(this).data("index");e.tr=C.children("tbody").children('tr[data-index="'+t+'"]'),y.rowDoubleEvent(e)})),0<a.length)for(t=0;t<a.length;t++)!function(){var u=i[a[t]],e=a[t],b=u.icon||["layui-icon layui-icon-right","layui-icon layui-icon-down"];!n||y.url&&y.page||table.on("sort("+l.attr("lay-filter")+")",function(){f.render(y)}),u.isChild&&"function"==typeof u.isChild?C.find("tr").find('td[data-key$="'+u.key+'"]>div').each(function(e){u.isChild(layui.table.cache[p][e])&&(u.field?$(this).prepend('<i style="cursor: pointer" class="childTable '+b[0]+'"></i>'):$(this).html('<i style="cursor: pointer" class="childTable '+b[0]+'"></i>'))}):u.field?C.find("tr").find('td[data-key$="'+u.key+'"]>div').prepend('<i style="cursor: pointer" class="childTable '+b[0]+'"></i>'):C.find("tr").find('td[data-key$="'+u.key+'"]>div').html('<i style="cursor: pointer" class="childTable '+b[0]+'"></i>'),C.children("tbody").children("tr").each(function(){$(this).children("td:eq("+e+")").find(".childTable").on("click",function(e){layui.stope(e);var t=$(this).parents("tr:eq(0)").data("index"),l=$(this).parents("td:eq(0)").data("key"),i=g.children("tbody").children("tr[data-index="+t+"]").children('td[data-key="'+l+'"]').find(".childTable:eq(0)"),a=x.find("tr[data-index="+t+"]").children('td[data-key="'+l+'"]').find(".childTable:eq(0)"),n=table.cache[y.id][t],d=u.children;if("function"==typeof u.children&&(d=u.children(n)),2===u.show)!u.layerOption||"function"==typeof u.layerOption.title&&(u.layerOption.title=u.layerOption.title(n)),layer.open($.extend({type:1,title:"子表",maxmin:!0,content:f.getTables(this,n,u,y,d),area:"1000px",offset:"100px"},u.layerOption||{})),f.renderTable(this,n,u,y,d,b);else{!i.hasClass(b[1])&&u.collapse&&C.children("tbody").children("tr").children("td").find(".childTable").each(function(){$(this).hasClass(b[1])&&f.destroyChildren($(this).parents("tr:eq(0)").data("index"),y,b)}),i.hasClass(b[1])||i.parents("tr:eq(0)").children("td").find(".childTable").each(function(){$(this).hasClass(b[1])&&($(this).removeClass(b[1]).addClass(b[0]),f.destroyChildren($(this).parents("tr:eq(0)").data("index"),y,b))}),i.hasClass(b[1])?(i.removeClass(b[1]).addClass(b[0]),a.removeClass(b[1]).addClass(b[0])):(i.removeClass(b[0]).addClass(b[1]),a.removeClass(b[0]).addClass(b[1]));var r=i.parents("td:eq(0)").attr("rowspan");if(i.hasClass(b[1])){var o=[];if(o.push('<tr class="noHover childTr"><td colspan="'+v.find("th:visible").length+'"  style="cursor: inherit; padding: 0; width: '+i.parents("tr:eq(0)").width()+'px">'),o.push(f.getTables(this,n,u,y,d)),o.push("</td></tr>"),r){var h=parseInt(i.parents("tr:eq(0)").data("index"))+parseInt(r)-1;i.parents("table:eq(0)").children().children("[data-index='"+h+"']").after(o.join(""))}else i.parents("tr:eq(0)").after(o.join(""));if(layui.element.init("tab"),f.renderTable(this,n,u,y,d,b),0<x.length){var c=i.parents("tr:eq(0)").next(),s='<div class="soul-table-child-patch" style="height: '+c.children("td").height()+'px"></div>';c.children("td").children(".layui-tab-card").css({position:"absolute",top:0,width:"100%",background:"white","z-index":200}),c.children("td").append(s),x.find('tr[data-index="'+t+'"]').each(function(){$(this).after('<tr><td style="padding: 0;" colspan="'+$(this).children("[data-key]").length+'">'+s+"</td></tr>")}),table.resize(p)}3===u.show&&(i.parents("tr:eq(0)").next().find(".layui-table-view").css({margin:0,"border-width":0}),i.parents("tr:eq(0)").next().find(".layui-table-header").css("display","none")),i.parents("tr:eq(0)").next().children("td").children(".layui-tab").children(".layui-tab-content").on("click",function(e){$(e.target.parentElement).hasClass("layui-tab-title")||e.stopPropagation()}).off("dblclick").on("dblclick",function(e){e.stopPropagation()}).on("mouseenter","td",function(e){e.stopPropagation()}).on("change",function(e){layui.stope(e)})}else f.destroyChildren(t,y,b),table.resize(p)}})}),u.spread&&2!==u.show&&C.children("tbody").children("tr").children("td").find(".childTable").trigger("click")}()},getTables:function(e,t,l,i,a){var n,d=[],r=$(i.elem),o=i.id+$(e).parents("tr:eq(0)").data("index"),h=r.next().children(".layui-table-box").children(".layui-table-body"),c=h.children("table"),s=0;if(d.push('<div class="layui-tab layui-tab-card" lay-filter="table-child-tab-'+o+'" style="margin: 0;border: 0;box-shadow: none;'),2===l.show?d.push("max-width: "+(c.width()-2)+'px">'):3===l.show||"full"===l.childWidth?d.push('">'):(h.prop("scrollHeight")+(0<a.length?a[0].height:0)>h.height()&&(s=this.getScrollWidth()),d.push("max-width: "+(h.width()-1-s)+'px">')),3!==l.show&&(void 0===l.childTitle||l.childTitle)){for(d.push('<ul class="layui-tab-title">'),n=0;n<a.length;n++)d.push('<li class="'+(0===n?"layui-this":"")+'">'+("function"==typeof a[n].title?a[n].title(t):a[n].title)+"</li>");d.push("</ul>")}for(3===l.show?d.push('<div class="layui-tab-content" style="padding: 0">'):d.push('<div class="layui-tab-content" style="padding: 0 10px">'),n=0;n<a.length;n++){var u=o+n;d.push('<div class="layui-tab-item layui-show"><form action="" class="layui-form" ><table id="'+u+'" lay-filter="'+u+'"></table></form></div>')}return d.push("</div></div>"),d.join("")},renderTable:function(a,n,d,r,o,e){var t=[],h=this,c=r.id,s=c+$(a).parents("tr:eq(0)").data("index");if(d.lazy)t.push(b(h,a,n,d,r,0,o,e));else for(var u=0;u<o.length;u++)t.push(b(h,a,n,d,r,u,o,e));function b(e,t,l,i,a,n,d,r){var o,h=e.deepClone(d[n]),c=a.id,s=$(t).parents("tr:eq(0)").data("index"),u=c+s+n,b=$(a.elem).next().children(".layui-table-box"),y=$.merge(b.children(".layui-table-body").children("table"),b.children(".layui-table-fixed").children(".layui-table-body").children("table")).children("tbody").children('tr[data-index="'+s+'"]'),f=table.cache[c][s],p={data:f,tr:y,del:function(){table.cache[c][s]=[],e.destroyChildren(s,a,r),y.remove(),table.resize(c)},update:function(e){e=e||{},layui.each(e,function(l,e){if(l in f){var i,t=y.children('td[data-field="'+l+'"]');f[l]=e,table.eachCols(c,function(e,t){t.field==l&&t.templet&&(i=t.templet)}),t.children(".layui-table-cell").html(i?"function"==typeof i?i(f):laytpl($(i).html()||e).render(f):e),t.data("content",e)}})},close:function(){e.destroyChildren(s,a,r),table.resize(c)}};return h.id=u,h.elem="#"+u,"function"==typeof h.where&&(h.where=h.where(l)),"function"==typeof h.data&&(h.data=h.data(l)),"function"==typeof h.url&&(h.url=h.url(l)),o=table.render(h),i.lazy||0===n||$("#"+u).parents(".layui-tab-item:eq(0)").removeClass("layui-show"),"function"==typeof h.checkboxEvent&&table.on("checkbox("+u+")",function(e){h.checkboxEvent(e,p)}),"function"==typeof h.editEvent&&table.on("edit("+u+")",function(e){e.oldValue=$(this).prev().text(),h.editEvent(e,p)}),"function"==typeof h.toolEvent&&table.on("tool("+u+")",function(e){h.toolEvent(e,p)}),"function"==typeof h.toolbarEvent&&table.on("toolbar("+u+")",function(e){h.toolbarEvent(e,p)}),"function"==typeof h.rowEvent&&table.on("row("+u+")",function(e){h.rowEvent(e,p)}),"function"==typeof h.rowDoubleEvent&&table.on("rowDouble("+u+")",function(e){h.rowDoubleEvent(e,p)}),o}tableChildren[s]=t,layui.element.on("tab(table-child-tab-"+s+")",function(e){if(d.lazy){var t=!1;for(u=0;u<tableChildren[s].length;u++)if(tableChildren[s][u].config.id===s+e.index){t=!0;break}t||tableChildren[s].push(b(h,a,n,d,r,e.index,o))}var l=$(a).parents("tr:eq(0)").data("index"),i=$(e.elem).height();$(a).parents(".layui-table-box:eq(0)").children(".layui-table-body").children("table").children("tbody").children("tr[data-index="+l+"]").next().children().children(".soul-table-child-patch").css("height",i),$(a).parents(".layui-table-box:eq(0)").children(".layui-table-fixed").children(".layui-table-body").children("table").children("tbody").children("tr[data-index="+l+"]").next().children().children(".soul-table-child-patch").css("height",i),table.resize(c)})},destroyChildren:function(e,t,l){var i=t.id,a=$(t.elem).next().children(".layui-table-box"),n=a.children(".layui-table-fixed").children(".layui-table-body").children("table"),d=$.merge(a.children(".layui-table-body").children("table"),n).children("tbody").children('tr[data-index="'+e+'"]');d.find(".childTable").removeClass(l[1]).addClass(l[0]),d.next().remove();var r=tableChildren[i+e];if(layui.tableFilter&&layui.tableFilter.destroy(r),layui.soulTable)for(var o=0;o<tableChildren[i+e].length;o++)layui.soulTable.clearOriginCols(tableChildren[i+e][o].config.id);delete tableChildren[i+e]},cloneJSON:function(obj){var JSON_SERIALIZE_FIX={PREFIX:"[[JSON_FUN_PREFIX_",SUFFIX:"_JSON_FUN_SUFFIX]]"},sobj=JSON.stringify(obj,function(e,t){return"function"==typeof t?JSON_SERIALIZE_FIX.PREFIX+t.toString()+JSON_SERIALIZE_FIX.SUFFIX:t});return JSON.parse(sobj,function(key,value){return"string"==typeof value&&0<value.indexOf(JSON_SERIALIZE_FIX.SUFFIX)&&0===value.indexOf(JSON_SERIALIZE_FIX.PREFIX)?eval("("+value.replace(JSON_SERIALIZE_FIX.PREFIX,"").replace(JSON_SERIALIZE_FIX.SUFFIX,"")+")"):value})||{}},fixHoverStyle:function(e){var t=$(e.elem),l=t.next().children(".layui-table-box").children(".layui-table-body").children("table"),i=t.next().children(".layui-table-box").children(".layui-table-fixed").children(".layui-table-body").children("table"),a=t.next().find("style")[0],n=a.sheet||a.styleSheet||{};this.addCSSRule(n,".layui-table-hover","background-color: inherit"),this.addCSSRule(n,".layui-table-hover.soul-table-hover","background-color: #F2F2F2"),$.merge(i.children("tbody").children("tr"),l.children("tbody").children("tr")).on("mouseenter",function(){var e=$(this),t=$(this).data("index");e.data("off")||(i.children("tbody").children("tr[data-index="+t+"]").addClass(ELEM_HOVER),l.children("tbody").children("tr[data-index="+t+"]").addClass(ELEM_HOVER))}).on("mouseleave",function(){var e=$(this),t=$(this).data("index");e.data("off")||(i.children("tbody").children("tr[data-index="+t+"]").removeClass(ELEM_HOVER),l.children("tbody").children("tr[data-index="+t+"]").removeClass(ELEM_HOVER))})},addCSSRule:function(e,t,l,i){"insertRule"in e?e.insertRule(t+"{"+l+"}",i):"addRule"in e&&e.addRule(t,l,i)},deepClone:function(e){var t=Array.isArray(e)?[]:{};if(e&&"object"==typeof e)for(var l in e)e.hasOwnProperty(l)&&(t[l]=e&&"object"==typeof e[l]?this.deepClone(e[l]):e[l]);return t},getCompleteCols:function(e){var t,l,i,a,n=this.deepClone(e);for(t=0;t<n.length;t++)for(l=0;l<n[t].length;l++)if(!n[t][l].exportHandled){if(1<n[t][l].rowspan)for((a=this.deepClone(n[t][l])).exportHandled=!0,i=t+1;i<n.length;)n[i].splice(l,0,a),i++;if(1<n[t][l].colspan){for((a=this.deepClone(n[t][l])).exportHandled=!0,i=1;i<n[t][l].colspan;i++)n[t].splice(l,0,a);l=l+parseInt(n[t][l].colspan)-1}}return n[n.length-1]},getScrollWidth:function(e){var t=0;return e?t=e.offsetWidth-e.clientWidth:((e=document.createElement("div")).style.width="100px",e.style.height="100px",e.style.overflowY="scroll",document.body.appendChild(e),t=e.offsetWidth-e.clientWidth,document.body.removeChild(e)),t}};exports("tableChild",mod)});