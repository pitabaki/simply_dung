function init(){"use strict";var t=["marketing","typography","data_visualization","motion","illustration"],e=[],a=[],r=" active";$("button").click(function(){event.preventDefault();var n=this.id;a=[],e=[];var o=[];if($("img").removeClass(r),$("button").removeClass(r),"clear"!==n){var i=document.getElementById(n);i.className=r;for(var l=0;l<t.length;l++)n!==t[l]&&a.push("[data-category='"+t[l]+"']");for(var s=0;s<a.length;s++)o.push(document.querySelectorAll(a[s]));for(l=0;l<o.length;l++)for(var u=0;u<o[l].length;u++)o[l][u].className=r;return!1}return!1})}window.onload=init;