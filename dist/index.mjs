var o=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var c=(t,s)=>{var e={};for(var i in t)u.call(t,i)&&s.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&o)for(var i of o(t))s.indexOf(i)<0&&h.call(t,i)&&(e[i]=t[i]);return e};import y from"html-webpack-plugin";function a(t={}){this.options=t,this.PluginName="HtmlWebpackPluginInjectThymeLeafTags"}a.prototype.apply=function(t){t.hooks.thisCompilation.tap(this.PluginName,s=>{var e=this;y.getHooks(s).afterTemplateExecution.tapAsync(this.PluginName,(i,n)=>{let{headTags:p,bodyTags:f}=i;p.forEach(function(r){e.injectTags(r)}),f.forEach(function(r){e.injectTags(r)}),n(null,i)})})};a.prototype.injectTags=function(t){t.attributes.src&&(t.attributes["th:src"]=`@{${this.options.scriptPrefix}${t.attributes.src}}`),t.attributes.href&&(t.attributes["th:href"]=`@{${this.options.scriptPrefix}${t.attributes.href}}`);let n=t.attributes,{src:s,href:e}=n,i=c(n,["src","href"]);return t.attributes=i,t};var b=a;export{b as default};