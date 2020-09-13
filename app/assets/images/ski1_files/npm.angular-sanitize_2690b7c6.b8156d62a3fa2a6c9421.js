/*! For license information please see npm.angular-sanitize~2690b7c6.b8156d62a3fa2a6c9421.js.LICENSE.txt */
(window.webpackJsonpAem=window.webpackJsonpAem||[]).push([[5],{"9fb71cf0d4836a0eab0f":function(e,t,n){n("dab8434e87fa931cb8db"),e.exports="ngSanitize"},dab8434e87fa931cb8db:function(e,t){!function(e,t){var n,r,i,o,a,s,l,c,u,d,h=t.$$minErr("$sanitize");t.module("ngSanitize",[]).provider("$sanitize",(function(){var f=!1,m=!1;this.$get=["$$sanitizeUri",function(e){return f=!0,m&&r(T,C),function(t){var n=[];return u(t,d(n,(function(t,n){return!/^unsafe:/.test(e(t,n))}))),n.join("")}}],this.enableSvg=function(e){return a(e)?(m=e,this):m},this.addValidElements=function(e){return f||(o(e)&&(e={htmlElements:e}),A(C,e.svgElements),A(v,e.htmlVoidElements),A(T,e.htmlVoidElements),A(T,e.htmlElements)),this},this.addValidAttrs=function(e){return f||r(D,$(e,!0)),this},n=t.bind,r=t.extend,i=t.forEach,o=t.isArray,a=t.isDefined,s=t.$$lowercase,l=t.noop,u=function(e,t){null===e||void 0===e?e="":"string"!==typeof e&&(e=""+e);var n=F(e);if(!n)return"";var r=5;do{if(0===r)throw h("uinput","Failed to sanitize html because the input is unstable");r--,e=n.innerHTML,n=F(e)}while(e!==n.innerHTML);for(var i=n.firstChild;i;){switch(i.nodeType){case 1:t.start(i.nodeName.toLowerCase(),N(i.attributes));break;case 3:t.chars(i.textContent)}var o;if(!(o=i.firstChild)&&(1===i.nodeType&&t.end(i.nodeName.toLowerCase()),!(o=j("nextSibling",i))))for(;null==o&&(i=j("parentNode",i))!==n;)o=j("nextSibling",i),1===i.nodeType&&t.end(i.nodeName.toLowerCase());i=o}for(;i=n.firstChild;)n.removeChild(i)},d=function(e,t){var r=!1,o=n(e,e.push);return{start:function(e,n){e=s(e),!r&&E[e]&&(r=e),r||!0!==T[e]||(o("<"),o(e),i(n,(function(n,r){var i=s(r),a="img"===e&&"src"===i||"background"===i;!0!==D[i]||!0===z[i]&&!t(n,a)||(o(" "),o(r),o('="'),o(q(n)),o('"'))})),o(">"))},end:function(e){e=s(e),r||!0!==T[e]||!0===v[e]||(o("</"),o(e),o(">")),e==r&&(r=!1)},chars:function(e){r||o(q(e))}}},c=e.Node.prototype.contains||function(e){return!!(16&this.compareDocumentPosition(e))};var p=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,g=/([^#-~ |!])/g,v=M("area,br,col,hr,img,wbr"),b=M("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),y=M("rp,rt"),x=r({},y,b),k=r({},b,M("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),w=r({},y,M("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),C=M("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),E=M("script,style"),T=r({},v,k,w,x),z=M("background,cite,href,longdesc,src,xlink:href,xml:base"),L=M("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),S=M("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",!0),D=r({},z,S,L);function M(e,t){return $(e.split(","),t)}function $(e,t){var n,r={};for(n=0;n<e.length;n++)r[t?s(e[n]):e[n]]=!0;return r}function A(e,t){t&&t.length&&r(e,$(t))}var F=function(e,t){var n;if(!t||!t.implementation)throw h("noinert","Can't create an inert html document");var r=((n=t.implementation.createHTMLDocument("inert")).documentElement||n.getDocumentElement()).querySelector("body");return r.innerHTML='<svg><g onload="this.parentNode.remove()"></g></svg>',r.querySelector("svg")?(r.innerHTML='<svg><p><style><img src="</style><img src=x onerror=alert(1)//">',r.querySelector("svg img")?function(t){t="<remove></remove>"+t;try{var n=(new e.DOMParser).parseFromString(t,"text/html").body;return n.firstChild.remove(),n}catch(e){return}}:function(e){return r.innerHTML=e,t.documentMode&&H(r),r}):function(t){t="<remove></remove>"+t;try{t=encodeURI(t)}catch(e){return}var n=new e.XMLHttpRequest;n.responseType="document",n.open("GET","data:text/html;charset=utf-8,"+t,!1),n.send(null);var r=n.response.body;return r.firstChild.remove(),r}}(e,e.document);function N(e){for(var t={},n=0,r=e.length;n<r;n++){var i=e[n];t[i.name]=i.value}return t}function q(e){return e.replace(/&/g,"&amp;").replace(p,(function(e){return"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";"})).replace(g,(function(e){return"&#"+e.charCodeAt(0)+";"})).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function H(t){for(;t;){if(t.nodeType===e.Node.ELEMENT_NODE)for(var n=t.attributes,r=0,i=n.length;r<i;r++){var o=n[r],a=o.name.toLowerCase();"xmlns:ns1"!==a&&0!==a.lastIndexOf("ns1:",0)||(t.removeAttributeNode(o),r--,i--)}var s=t.firstChild;s&&H(s),t=j("nextSibling",t)}}function j(e,t){var n=t[e];if(n&&c.call(t,n))throw h("elclob","Failed to sanitize html because the element is clobbered: {0}",t.outerHTML||t.outerText);return n}})).info({angularVersion:"1.8.0"}),t.module("ngSanitize").filter("linky",["$sanitize",function(e){var n=/((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,r=/^mailto:/i,i=t.$$minErr("linky"),o=t.isDefined,a=t.isFunction,s=t.isObject,c=t.isString;return function(t,u,h){if(null==t||""===t)return t;if(!c(t))throw i("notstring","Expected string but received: {0}",t);for(var f,m,p,g=a(h)?h:s(h)?function(){return h}:function(){return{}},v=t,b=[];f=v.match(n);)m=f[0],f[2]||f[4]||(m=(f[3]?"http://":"mailto:")+m),p=f.index,y(v.substr(0,p)),x(m,f[0].replace(r,"")),v=v.substring(p+f[0].length);return y(v),e(b.join(""));function y(e){e&&b.push(function(e){var t=[];return d(t,l).chars(e),t.join("")}(e))}function x(e,t){var n,r=g(e);for(n in b.push("<a "),r)b.push(n+'="'+r[n]+'" ');o(u)&&!("target"in r)&&b.push('target="',u,'" '),b.push('href="',e.replace(/"/g,"&quot;"),'">'),y(t),b.push("</a>")}}}])}(window,window.angular)}}]);