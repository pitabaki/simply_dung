var animating={Id:function(t){"use strict";return"string"==typeof t?document.getElementById(t):(console.log("Id was not properly passed to animating.select()."),!1)},indLeft:function(t,e,n,o){"use strict";var i=document.getElementById(t);setTimeout(function(){return"string"!=typeof t||null===i?!1:void("string"==typeof e&&"string"==typeof n?(i.style.marginLeft=e,i.style.opacity=n):"string"==typeof e&&""!==e&&""===n?i.style.marginLeft=e:"string"==typeof n&&""!==n&&""===e?i.style.opacity=n:console.log("Error AnimateIn: only an id was passed."))},o)},indTop:function(t,e,n,o){"use strict";var i=document.getElementById(t);setTimeout(function(){return"string"!=typeof t||null===i?!1:void("string"==typeof e&&"string"==typeof n?(i.style.marginTop=e+"px",i.style.opacity=n):"string"==typeof e&&""!==e&&""===n?i.style.marginTop=e:"string"==typeof n&&""!==n&&""===e?i.style.opacity=n:console.log("Error AnimateIn: only an id was passed."))},o)},opac:function(t,e,n){"use strict";var o=document.getElementById(t);if("string"!=typeof t||null===o)return!1;var i=o.childNodes;setTimeout(function(){for(var t=0;t<i.length;t++)"string"==typeof i[t].innerHTML&&(i[t].style.opacity=e)},n)},grpTop:function(t,e,n,o){"use strict";function i(t){setTimeout(function(){t.style.marginTop=e+"px",console.log("time")},400)}var s=document.getElementById(t);if("string"!=typeof t||null===s)return!1;var r=s.childNodes;console.log(r),setTimeout(function(){for(var t=0;t<r.length;t++)r[t].className===n&&i(r[t])},o)}};