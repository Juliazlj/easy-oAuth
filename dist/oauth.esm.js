import t from"qs";import r from"axios";import e from"js-cookie";var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(t,r){return t(r={exports:{}},r.exports),r.exports}var i=function(t){return t&&t.Math==Math&&t},a=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n&&n)||Function("return this")(),c=function(t){try{return!!t()}catch(t){return!0}},u=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,s={f:l&&!f.call({1:2},1)?function(t){var r=l(this,t);return!!r&&r.enumerable}:f},p=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}},h={}.toString,d=function(t){return h.call(t).slice(8,-1)},v="".split,y=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==d(t)?v.call(t,""):Object(t)}:Object,g=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},m=function(t){return y(g(t))},b=function(t){return"object"==typeof t?null!==t:"function"==typeof t},w=function(t,r){if(!b(t))return t;var e,n;if(r&&"function"==typeof(e=t.toString)&&!b(n=e.call(t)))return n;if("function"==typeof(e=t.valueOf)&&!b(n=e.call(t)))return n;if(!r&&"function"==typeof(e=t.toString)&&!b(n=e.call(t)))return n;throw TypeError("Can't convert object to primitive value")},x={}.hasOwnProperty,S=function(t,r){return x.call(t,r)},O=a.document,E=b(O)&&b(O.createElement),j=function(t){return E?O.createElement(t):{}},P=!u&&!c((function(){return 7!=Object.defineProperty(j("div"),"a",{get:function(){return 7}}).a})),L=Object.getOwnPropertyDescriptor,_={f:u?L:function(t,r){if(t=m(t),r=w(r,!0),P)try{return L(t,r)}catch(t){}if(S(t,r))return p(!s.f.call(t,r),t[r])}},T=function(t){if(!b(t))throw TypeError(String(t)+" is not an object");return t},k=Object.defineProperty,A={f:u?k:function(t,r,e){if(T(t),r=w(r,!0),T(e),P)try{return k(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},I=u?function(t,r,e){return A.f(t,r,p(1,e))}:function(t,r,e){return t[r]=e,t},R=function(t,r){try{I(a,t,r)}catch(e){a[t]=r}return r},N=a["__core-js_shared__"]||R("__core-js_shared__",{}),C=Function.toString;"function"!=typeof N.inspectSource&&(N.inspectSource=function(t){return C.call(t)});var D,M,F,G=N.inspectSource,$=a.WeakMap,U="function"==typeof $&&/native code/.test(G($)),V=o((function(t){(t.exports=function(t,r){return N[t]||(N[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),z=0,B=Math.random(),K=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++z+B).toString(36)},W=V("keys"),Y=function(t){return W[t]||(W[t]=K(t))},H={},q=a.WeakMap;if(U){var X=new q,J=X.get,Q=X.has,Z=X.set;D=function(t,r){return Z.call(X,t,r),r},M=function(t){return J.call(X,t)||{}},F=function(t){return Q.call(X,t)}}else{var tt=Y("state");H[tt]=!0,D=function(t,r){return I(t,tt,r),r},M=function(t){return S(t,tt)?t[tt]:{}},F=function(t){return S(t,tt)}}var rt,et={set:D,get:M,has:F,enforce:function(t){return F(t)?M(t):D(t,{})},getterFor:function(t){return function(r){var e;if(!b(r)||(e=M(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}},nt=o((function(t){var r=et.get,e=et.enforce,n=String(String).split("String");(t.exports=function(t,r,o,i){var c=!!i&&!!i.unsafe,u=!!i&&!!i.enumerable,f=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof r||S(o,"name")||I(o,"name",r),e(o).source=n.join("string"==typeof r?r:"")),t!==a?(c?!f&&t[r]&&(u=!0):delete t[r],u?t[r]=o:I(t,r,o)):u?t[r]=o:R(r,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&r(this).source||G(this)}))})),ot=a,it=function(t){return"function"==typeof t?t:void 0},at=function(t,r){return arguments.length<2?it(ot[t])||it(a[t]):ot[t]&&ot[t][r]||a[t]&&a[t][r]},ct=Math.ceil,ut=Math.floor,ft=function(t){return isNaN(t=+t)?0:(t>0?ut:ct)(t)},lt=Math.min,st=function(t){return t>0?lt(ft(t),9007199254740991):0},pt=Math.max,ht=Math.min,dt=function(t){return function(r,e,n){var o,i=m(r),a=st(i.length),c=function(t,r){var e=ft(t);return e<0?pt(e+r,0):ht(e,r)}(n,a);if(t&&e!=e){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===e)return t||c||0;return!t&&-1}},vt={includes:dt(!0),indexOf:dt(!1)},yt=vt.indexOf,gt=function(t,r){var e,n=m(t),o=0,i=[];for(e in n)!S(H,e)&&S(n,e)&&i.push(e);for(;r.length>o;)S(n,e=r[o++])&&(~yt(i,e)||i.push(e));return i},mt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],bt=mt.concat("length","prototype"),wt={f:Object.getOwnPropertyNames||function(t){return gt(t,bt)}},xt={f:Object.getOwnPropertySymbols},St=at("Reflect","ownKeys")||function(t){var r=wt.f(T(t)),e=xt.f;return e?r.concat(e(t)):r},Ot=function(t,r){for(var e=St(r),n=A.f,o=_.f,i=0;i<e.length;i++){var a=e[i];S(t,a)||n(t,a,o(r,a))}},Et=/#|\.prototype\./,jt=function(t,r){var e=Lt[Pt(t)];return e==Tt||e!=_t&&("function"==typeof r?c(r):!!r)},Pt=jt.normalize=function(t){return String(t).replace(Et,".").toLowerCase()},Lt=jt.data={},_t=jt.NATIVE="N",Tt=jt.POLYFILL="P",kt=jt,At=_.f,It=function(t,r){var e,n,o,i,c,u=t.target,f=t.global,l=t.stat;if(e=f?a:l?a[u]||R(u,{}):(a[u]||{}).prototype)for(n in r){if(i=r[n],o=t.noTargetGet?(c=At(e,n))&&c.value:e[n],!kt(f?n:u+(l?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Ot(i,o)}(t.sham||o&&o.sham)&&I(i,"sham",!0),nt(e,n,i,t)}},Rt=!!Object.getOwnPropertySymbols&&!c((function(){return!String(Symbol())})),Nt=Rt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ct=Array.isArray||function(t){return"Array"==d(t)},Dt=function(t){return Object(g(t))},Mt=Object.keys||function(t){return gt(t,mt)},Ft=u?Object.defineProperties:function(t,r){T(t);for(var e,n=Mt(r),o=n.length,i=0;o>i;)A.f(t,e=n[i++],r[e]);return t},Gt=at("document","documentElement"),$t=Y("IE_PROTO"),Ut=function(){},Vt=function(t){return"<script>"+t+"<\/script>"},zt=function(){try{rt=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,r;zt=rt?function(t){t.write(Vt("")),t.close();var r=t.parentWindow.Object;return t=null,r}(rt):((r=j("iframe")).style.display="none",Gt.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write(Vt("document.F=Object")),t.close(),t.F);for(var e=mt.length;e--;)delete zt.prototype[mt[e]];return zt()};H[$t]=!0;var Bt,Kt,Wt,Yt=Object.create||function(t,r){var e;return null!==t?(Ut.prototype=T(t),e=new Ut,Ut.prototype=null,e[$t]=t):e=zt(),void 0===r?e:Ft(e,r)},Ht=wt.f,qt={}.toString,Xt="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],Jt={f:function(t){return Xt&&"[object Window]"==qt.call(t)?function(t){try{return Ht(t)}catch(t){return Xt.slice()}}(t):Ht(m(t))}},Qt=V("wks"),Zt=a.Symbol,tr=Nt?Zt:Zt&&Zt.withoutSetter||K,rr=function(t){return S(Qt,t)||(Rt&&S(Zt,t)?Qt[t]=Zt[t]:Qt[t]=tr("Symbol."+t)),Qt[t]},er={f:rr},nr=A.f,or=A.f,ir=rr("toStringTag"),ar=function(t,r,e){if(function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(t),void 0===r)return t;switch(e){case 0:return function(){return t.call(r)};case 1:return function(e){return t.call(r,e)};case 2:return function(e,n){return t.call(r,e,n)};case 3:return function(e,n,o){return t.call(r,e,n,o)}}return function(){return t.apply(r,arguments)}},cr=rr("species"),ur=function(t,r){var e;return Ct(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!Ct(e.prototype)?b(e)&&null===(e=e[cr])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===r?0:r)},fr=[].push,lr=function(t){var r=1==t,e=2==t,n=3==t,o=4==t,i=6==t,a=5==t||i;return function(c,u,f,l){for(var s,p,h=Dt(c),d=y(h),v=ar(u,f,3),g=st(d.length),m=0,b=l||ur,w=r?b(c,g):e?b(c,0):void 0;g>m;m++)if((a||m in d)&&(p=v(s=d[m],m,h),t))if(r)w[m]=p;else if(p)switch(t){case 3:return!0;case 5:return s;case 6:return m;case 2:fr.call(w,s)}else if(o)return!1;return i?-1:n||o?o:w}},sr={forEach:lr(0),map:lr(1),filter:lr(2),some:lr(3),every:lr(4),find:lr(5),findIndex:lr(6)},pr=sr.forEach,hr=Y("hidden"),dr=rr("toPrimitive"),vr=et.set,yr=et.getterFor("Symbol"),gr=Object.prototype,mr=a.Symbol,br=at("JSON","stringify"),wr=_.f,xr=A.f,Sr=Jt.f,Or=s.f,Er=V("symbols"),jr=V("op-symbols"),Pr=V("string-to-symbol-registry"),Lr=V("symbol-to-string-registry"),_r=V("wks"),Tr=a.QObject,kr=!Tr||!Tr.prototype||!Tr.prototype.findChild,Ar=u&&c((function(){return 7!=Yt(xr({},"a",{get:function(){return xr(this,"a",{value:7}).a}})).a}))?function(t,r,e){var n=wr(gr,r);n&&delete gr[r],xr(t,r,e),n&&t!==gr&&xr(gr,r,n)}:xr,Ir=function(t,r){var e=Er[t]=Yt(mr.prototype);return vr(e,{type:"Symbol",tag:t,description:r}),u||(e.description=r),e},Rr=Nt?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof mr},Nr=function(t,r,e){t===gr&&Nr(jr,r,e),T(t);var n=w(r,!0);return T(e),S(Er,n)?(e.enumerable?(S(t,hr)&&t[hr][n]&&(t[hr][n]=!1),e=Yt(e,{enumerable:p(0,!1)})):(S(t,hr)||xr(t,hr,p(1,{})),t[hr][n]=!0),Ar(t,n,e)):xr(t,n,e)},Cr=function(t,r){T(t);var e=m(r),n=Mt(e).concat(Gr(e));return pr(n,(function(r){u&&!Dr.call(e,r)||Nr(t,r,e[r])})),t},Dr=function(t){var r=w(t,!0),e=Or.call(this,r);return!(this===gr&&S(Er,r)&&!S(jr,r))&&(!(e||!S(this,r)||!S(Er,r)||S(this,hr)&&this[hr][r])||e)},Mr=function(t,r){var e=m(t),n=w(r,!0);if(e!==gr||!S(Er,n)||S(jr,n)){var o=wr(e,n);return!o||!S(Er,n)||S(e,hr)&&e[hr][n]||(o.enumerable=!0),o}},Fr=function(t){var r=Sr(m(t)),e=[];return pr(r,(function(t){S(Er,t)||S(H,t)||e.push(t)})),e},Gr=function(t){var r=t===gr,e=Sr(r?jr:m(t)),n=[];return pr(e,(function(t){!S(Er,t)||r&&!S(gr,t)||n.push(Er[t])})),n};(Rt||(nt((mr=function(){if(this instanceof mr)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,r=K(t),e=function(t){this===gr&&e.call(jr,t),S(this,hr)&&S(this[hr],r)&&(this[hr][r]=!1),Ar(this,r,p(1,t))};return u&&kr&&Ar(gr,r,{configurable:!0,set:e}),Ir(r,t)}).prototype,"toString",(function(){return yr(this).tag})),nt(mr,"withoutSetter",(function(t){return Ir(K(t),t)})),s.f=Dr,A.f=Nr,_.f=Mr,wt.f=Jt.f=Fr,xt.f=Gr,er.f=function(t){return Ir(rr(t),t)},u&&(xr(mr.prototype,"description",{configurable:!0,get:function(){return yr(this).description}}),nt(gr,"propertyIsEnumerable",Dr,{unsafe:!0}))),It({global:!0,wrap:!0,forced:!Rt,sham:!Rt},{Symbol:mr}),pr(Mt(_r),(function(t){!function(t){var r=ot.Symbol||(ot.Symbol={});S(r,t)||nr(r,t,{value:er.f(t)})}(t)})),It({target:"Symbol",stat:!0,forced:!Rt},{for:function(t){var r=String(t);if(S(Pr,r))return Pr[r];var e=mr(r);return Pr[r]=e,Lr[e]=r,e},keyFor:function(t){if(!Rr(t))throw TypeError(t+" is not a symbol");if(S(Lr,t))return Lr[t]},useSetter:function(){kr=!0},useSimple:function(){kr=!1}}),It({target:"Object",stat:!0,forced:!Rt,sham:!u},{create:function(t,r){return void 0===r?Yt(t):Cr(Yt(t),r)},defineProperty:Nr,defineProperties:Cr,getOwnPropertyDescriptor:Mr}),It({target:"Object",stat:!0,forced:!Rt},{getOwnPropertyNames:Fr,getOwnPropertySymbols:Gr}),It({target:"Object",stat:!0,forced:c((function(){xt.f(1)}))},{getOwnPropertySymbols:function(t){return xt.f(Dt(t))}}),br)&&It({target:"JSON",stat:!0,forced:!Rt||c((function(){var t=mr();return"[null]"!=br([t])||"{}"!=br({a:t})||"{}"!=br(Object(t))}))},{stringify:function(t,r,e){for(var n,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=r,(b(r)||void 0!==t)&&!Rr(t))return Ct(r)||(r=function(t,r){if("function"==typeof n&&(r=n.call(this,t,r)),!Rr(r))return r}),o[1]=r,br.apply(null,o)}});mr.prototype[dr]||I(mr.prototype,dr,mr.prototype.valueOf),Kt="Symbol",(Bt=mr)&&!S(Bt=Wt?Bt:Bt.prototype,ir)&&or(Bt,ir,{configurable:!0,value:Kt}),H[hr]=!0;var $r,Ur,Vr=function(t,r,e){var n=w(r);n in t?A.f(t,n,p(0,e)):t[n]=e},zr=at("navigator","userAgent")||"",Br=a.process,Kr=Br&&Br.versions,Wr=Kr&&Kr.v8;Wr?Ur=($r=Wr.split("."))[0]+$r[1]:zr&&(!($r=zr.match(/Edge\/(\d+)/))||$r[1]>=74)&&($r=zr.match(/Chrome\/(\d+)/))&&(Ur=$r[1]);var Yr=Ur&&+Ur,Hr=rr("species"),qr=function(t){return Yr>=51||!c((function(){var r=[];return(r.constructor={})[Hr]=function(){return{foo:1}},1!==r[t](Boolean).foo}))},Xr=rr("isConcatSpreadable"),Jr=Yr>=51||!c((function(){var t=[];return t[Xr]=!1,t.concat()[0]!==t})),Qr=qr("concat"),Zr=function(t){if(!b(t))return!1;var r=t[Xr];return void 0!==r?!!r:Ct(t)};It({target:"Array",proto:!0,forced:!Jr||!Qr},{concat:function(t){var r,e,n,o,i,a=Dt(this),c=ur(a,0),u=0;for(r=-1,n=arguments.length;r<n;r++)if(Zr(i=-1===r?a:arguments[r])){if(u+(o=st(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,u++)e in i&&Vr(c,u,i[e])}else{if(u>=9007199254740991)throw TypeError("Maximum allowed index exceeded");Vr(c,u++,i)}return c.length=u,c}});var te=Object.defineProperty,re={},ee=function(t){throw t},ne=function(t,r){if(S(re,t))return re[t];r||(r={});var e=[][t],n=!!S(r,"ACCESSORS")&&r.ACCESSORS,o=S(r,0)?r[0]:ee,i=S(r,1)?r[1]:void 0;return re[t]=!!e&&!c((function(){if(n&&!u)return!0;var t={length:-1};n?te(t,1,{enumerable:!0,get:ee}):t[1]=1,e.call(t,o,i)}))},oe=sr.filter,ie=qr("filter"),ae=ne("filter");It({target:"Array",proto:!0,forced:!ie||!ae},{filter:function(t){return oe(this,t,arguments.length>1?arguments[1]:void 0)}});var ce=function(t,r){var e=[][t];return!!e&&c((function(){e.call(null,r||function(){throw 1},1)}))},ue=sr.forEach,fe=ce("forEach"),le=ne("forEach"),se=fe&&le?[].forEach:function(t){return ue(this,t,arguments.length>1?arguments[1]:void 0)};It({target:"Array",proto:!0,forced:[].forEach!=se},{forEach:se});var pe=vt.indexOf,he=[].indexOf,de=!!he&&1/[1].indexOf(1,-0)<0,ve=ce("indexOf"),ye=ne("indexOf",{ACCESSORS:!0,1:0});It({target:"Array",proto:!0,forced:de||!ve||!ye},{indexOf:function(t){return de?he.apply(this,arguments)||0:pe(this,t,arguments.length>1?arguments[1]:void 0)}}),It({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}});var ge=Date.prototype,me=ge.toString,be=ge.getTime;new Date(NaN)+""!="Invalid Date"&&nt(ge,"toString",(function(){var t=be.call(this);return t==t?me.call(this):"Invalid Date"})),It({target:"Object",stat:!0,forced:!u,sham:!u},{defineProperties:Ft}),It({target:"Object",stat:!0,forced:!u,sham:!u},{defineProperty:A.f});var we=_.f,xe=c((function(){we(1)}));It({target:"Object",stat:!0,forced:!u||xe,sham:!u},{getOwnPropertyDescriptor:function(t,r){return we(m(t),r)}}),It({target:"Object",stat:!0,sham:!u},{getOwnPropertyDescriptors:function(t){for(var r,e,n=m(t),o=_.f,i=St(n),a={},c=0;i.length>c;)void 0!==(e=o(n,r=i[c++]))&&Vr(a,r,e);return a}}),It({target:"Object",stat:!0,forced:c((function(){Mt(1)}))},{keys:function(t){return Mt(Dt(t))}});var Se=function(){var t=T(this),r="";return t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.sticky&&(r+="y"),r};function Oe(t,r){return RegExp(t,r)}var Ee,je,Pe={UNSUPPORTED_Y:c((function(){var t=Oe("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:c((function(){var t=Oe("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},Le=RegExp.prototype.exec,_e=String.prototype.replace,Te=Le,ke=(Ee=/a/,je=/b*/g,Le.call(Ee,"a"),Le.call(je,"a"),0!==Ee.lastIndex||0!==je.lastIndex),Ae=Pe.UNSUPPORTED_Y||Pe.BROKEN_CARET,Ie=void 0!==/()??/.exec("")[1];(ke||Ie||Ae)&&(Te=function(t){var r,e,n,o,i=this,a=Ae&&i.sticky,c=Se.call(i),u=i.source,f=0,l=t;return a&&(-1===(c=c.replace("y","")).indexOf("g")&&(c+="g"),l=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(u="(?: "+u+")",l=" "+l,f++),e=new RegExp("^(?:"+u+")",c)),Ie&&(e=new RegExp("^"+u+"$(?!\\s)",c)),ke&&(r=i.lastIndex),n=Le.call(a?e:i,l),a?n?(n.input=n.input.slice(f),n[0]=n[0].slice(f),n.index=i.lastIndex,i.lastIndex+=n[0].length):i.lastIndex=0:ke&&n&&(i.lastIndex=i.global?n.index+n[0].length:r),Ie&&n&&n.length>1&&_e.call(n[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n});var Re=Te;It({target:"RegExp",proto:!0,forced:/./.exec!==Re},{exec:Re});var Ne=rr("species"),Ce=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),De="$0"==="a".replace(/./,"$0"),Me=rr("replace"),Fe=!!/./[Me]&&""===/./[Me]("a","$0"),Ge=!c((function(){var t=/(?:)/,r=t.exec;t.exec=function(){return r.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]})),$e=function(t,r,e,n){var o=rr(t),i=!c((function(){var r={};return r[o]=function(){return 7},7!=""[t](r)})),a=i&&!c((function(){var r=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[Ne]=function(){return e},e.flags="",e[o]=/./[o]),e.exec=function(){return r=!0,null},e[o](""),!r}));if(!i||!a||"replace"===t&&(!Ce||!De||Fe)||"split"===t&&!Ge){var u=/./[o],f=e(o,""[t],(function(t,r,e,n,o){return r.exec===Re?i&&!o?{done:!0,value:u.call(r,e,n)}:{done:!0,value:t.call(e,r,n)}:{done:!1}}),{REPLACE_KEEPS_$0:De,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Fe}),l=f[0],s=f[1];nt(String.prototype,t,l),nt(RegExp.prototype,o,2==r?function(t,r){return s.call(t,this,r)}:function(t){return s.call(t,this)})}n&&I(RegExp.prototype[o],"sham",!0)},Ue=function(t){return function(r,e){var n,o,i=String(g(r)),a=ft(e),c=i.length;return a<0||a>=c?t?"":void 0:(n=i.charCodeAt(a))<55296||n>56319||a+1===c||(o=i.charCodeAt(a+1))<56320||o>57343?t?i.charAt(a):n:t?i.slice(a,a+2):o-56320+(n-55296<<10)+65536}},Ve={codeAt:Ue(!1),charAt:Ue(!0)}.charAt,ze=function(t,r,e){return r+(e?Ve(t,r).length:1)},Be=function(t,r){var e=t.exec;if("function"==typeof e){var n=e.call(t,r);if("object"!=typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==d(t))throw TypeError("RegExp#exec called on incompatible receiver");return Re.call(t,r)},Ke=Math.max,We=Math.min,Ye=Math.floor,He=/\$([$&'`]|\d\d?|<[^>]*>)/g,qe=/\$([$&'`]|\d\d?)/g,Xe=function(t){return void 0===t?t:String(t)};$e("replace",2,(function(t,r,e,n){var o=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,i=n.REPLACE_KEEPS_$0,a=o?"$":"$0";return[function(e,n){var o=g(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,n):r.call(String(o),e,n)},function(t,n){if(!o&&i||"string"==typeof n&&-1===n.indexOf(a)){var u=e(r,t,this,n);if(u.done)return u.value}var f=T(t),l=String(this),s="function"==typeof n;s||(n=String(n));var p=f.global;if(p){var h=f.unicode;f.lastIndex=0}for(var d=[];;){var v=Be(f,l);if(null===v)break;if(d.push(v),!p)break;""===String(v[0])&&(f.lastIndex=ze(l,st(f.lastIndex),h))}for(var y="",g=0,m=0;m<d.length;m++){v=d[m];for(var b=String(v[0]),w=Ke(We(ft(v.index),l.length),0),x=[],S=1;S<v.length;S++)x.push(Xe(v[S]));var O=v.groups;if(s){var E=[b].concat(x,w,l);void 0!==O&&E.push(O);var j=String(n.apply(void 0,E))}else j=c(b,l,w,x,O,n);w>=g&&(y+=l.slice(g,w)+j,g=w+b.length)}return y+l.slice(g)}];function c(t,e,n,o,i,a){var c=n+t.length,u=o.length,f=qe;return void 0!==i&&(i=Dt(i),f=He),r.call(a,f,(function(r,a){var f;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(c);case"<":f=i[a.slice(1,-1)];break;default:var l=+a;if(0===l)return r;if(l>u){var s=Ye(l/10);return 0===s?r:s<=u?void 0===o[s-1]?a.charAt(1):o[s-1]+a.charAt(1):r}f=o[l-1]}return void 0===f?"":f}))}}));var Je=Object.is||function(t,r){return t===r?0!==t||1/t==1/r:t!=t&&r!=r};$e("search",1,(function(t,r,e){return[function(r){var e=g(this),n=null==r?void 0:r[t];return void 0!==n?n.call(r,e):new RegExp(r)[t](String(e))},function(t){var n=e(r,t,this);if(n.done)return n.value;var o=T(t),i=String(this),a=o.lastIndex;Je(a,0)||(o.lastIndex=0);var c=Be(o,i);return Je(o.lastIndex,a)||(o.lastIndex=a),null===c?-1:c.index}]}));for(var Qe in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Ze=a[Qe],tn=Ze&&Ze.prototype;if(tn&&tn.forEach!==se)try{I(tn,"forEach",se)}catch(t){tn.forEach=se}}var rn=o((function(t){var r=function(t){var r=Object.prototype,e=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,r,e,n){var o=r&&r.prototype instanceof l?r:l,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return E()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=b(a,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var l=u(t,r,e);if("normal"===l.type){if(n=e.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(n="completed",e.method="throw",e.arg=l.arg)}}}(t,e,a),i}function u(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f={};function l(){}function s(){}function p(){}var h={};h[o]=function(){return this};var d=Object.getPrototypeOf,v=d&&d(d(O([])));v&&v!==r&&e.call(v,o)&&(h=v);var y=p.prototype=l.prototype=Object.create(h);function g(t){["next","throw","return"].forEach((function(r){t[r]=function(t){return this._invoke(r,t)}}))}function m(t,r){var n;this._invoke=function(o,i){function a(){return new r((function(n,a){!function n(o,i,a,c){var f=u(t[o],t,i);if("throw"!==f.type){var l=f.arg,s=l.value;return s&&"object"==typeof s&&e.call(s,"__await")?r.resolve(s.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(f.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function b(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,b(t,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,f;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function w(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function x(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function O(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return s.prototype=y.constructor=p,p.constructor=s,p[a]=s.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===s||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(m.prototype),m.prototype[i]=function(){return this},t.AsyncIterator=m,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new m(c(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),y[a]="Generator",y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),f},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),x(e),f}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;x(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:O(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}));function en(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}var nn=function(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){en(i,n,o,a,c,"next",t)}function c(t){en(i,n,o,a,c,"throw",t)}a(void 0)}))}};var on=function(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t};function an(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function cn(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?an(Object(e),!0).forEach((function(r){on(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):an(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var un=window.ENV,fn=un.originUrl,ln=void 0===fn?"//icity-dev.cloud.cityworks.cn":fn,sn=un.loginParams,pn=void 0===sn?{client_id:"a1c7b4a4ade84e888009dcdad83909a1",client_secret:"8d28a7aef4af477a8da685a3afaa75d8",response_type:"code",state:"_oAuth"}:sn,hn=function(){e.remove("token");var r=cn(cn({redirect_uri:window.location.href.replace(window.location.search,"")},pn),{},{random:Date.now()});window.location="".concat(ln,"/api/reception-center/oauth/authorize?").concat(t.stringify(r))},dn=function(r){return 0===r.indexOf("?")&&(r=r.substring(1)),t.parse(r)},vn=function(){var e=nn(rn.mark((function e(n){var o,i;return rn.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=cn(cn(cn({},pn),n),{},{grant_type:"authorization_code",redirect_uri:window.location.href.replace(window.location.search,"")}),e.next=3,r.post("".concat(ln,"/api/reception-center/oauth/token"),t.stringify(o),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 3:return i=e.sent,e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),yn=function(){var t=nn(rn.mark((function t(){var r,n,o,i;return rn.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=dn(window.location.search),e.get("token")){t.next=13;break}if(!r.code||r.state!==pn.state){t.next=12;break}return t.next=6,vn(r);case 6:n=t.sent,o=n.access_token,i=n.expires_in,e.set("token",o,{expires:i/60/60/24}),t.next=13;break;case 12:hn();case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),gn=Object.freeze({__proto__:null,jumpToLogin:hn,parseUrlParams:dn,getToken:vn,beforeRoute:yn});export default gn;