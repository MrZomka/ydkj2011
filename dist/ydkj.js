(()=>{var e={424:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var n=r(645),o=r.n(n),i=r(667),a=r.n(i),s=r(776),c=r(273),d=r(566),u=r(390),p=r(42),l=r(728),h=r(899),f=r(1),g=r(596),m=r(681),b=o()((function(e){return e[1]})),v=a()(s),w=a()(c),y=a()(d),x=a()(u),k=a()(p),C=a()(l),$=a()(h),P=a()(f),z=a()(g),M=a()(m);b.push([e.id,'body {\r\n    margin: 0;\r\n    color: #000;\r\n    background-color: #000;\r\n}\r\n\r\n@font-face {\r\n    font-family: "JackCondensed";\r\n    src: url('+v+');\r\n}\r\n\r\n@font-face {\r\n    font-family: "JackCondensedItalic";\r\n    src: url('+w+');\r\n    font-style: italic;\r\n}\r\n\r\n@font-face {\r\n    font-family: "JackCondensedPhat";\r\n    src: url('+y+');\r\n}\r\n\r\n@font-face {\r\n    font-family: "JackCondensedPhat";\r\n    src: url('+x+');\r\n    font-style: italic;\r\n}\r\n\r\n@font-face {\r\n    font-family: "JackExtraCond";\r\n    src: url('+k+');\r\n}\r\n\r\n@font-face {\r\n    font-family: "JackExtraCondPhat";\r\n    src: url('+C+');\r\n}\r\n\r\n@font-face {\r\n    font-family: "JackRoman";\r\n    src: url('+$+');\r\n}\r\n\r\n@font-face {\r\n    font-family: "JackRomanPhat";\r\n    src: url('+P+");\r\n}\r\n\r\n.wrapper {\r\n    position: fixed;\r\n    width: 1280px;\r\n    height: 720px;\r\n    background-color: #fff5;\r\n    overflow: hidden;\r\n}\r\n\r\n.video-wrapper {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 4;\r\n}\r\n\r\n.video-wrapper>video {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.opening-egg {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 400px;\r\n    height: 700px;\r\n}\r\n\r\n.opening-egg-sponsor {\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 30px;\r\n    left: 0;\r\n}\r\n\r\n.opening-egg-back-1, .opening-egg-back-2 {\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.opening-egg-back-1 {\r\n    background-image: url("+z+");\r\n}\r\n\r\n.opening-egg-back-2 {\r\n    background-image: url("+M+");\r\n    opacity: 0;\r\n}\r\n\r\n.prize-image {\r\n    width: 500px;\r\n    height: 500px;\r\n    background-position: 0 0;\r\n}",""]);const S=b},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);n&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},412:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(379),o=r.n(n),i=r(424);o()(i.Z,{insert:"head",singleton:!1});const a=i.Z.locals||{}},379:(e,t,r)=>{"use strict";var n,o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),i=[];function a(e){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===e){t=r;break}return t}function s(e,t){for(var r={},n=[],o=0;o<e.length;o++){var s=e[o],c=t.base?s[0]+t.base:s[0],d=r[c]||0,u="".concat(c," ").concat(d);r[c]=d+1;var p=a(u),l={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(i[p].references++,i[p].updater(l)):i.push({identifier:u,updater:g(l,t),references:1}),n.push(u)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=r.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function l(e,t,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var h=null,f=0;function g(e,t){var r,n,o;if(t.singleton){var i=f++;r=h||(h=c(t)),n=p.bind(null,r,i,!1),o=p.bind(null,r,i,!0)}else r=c(t),n=l.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=a(r[n]);i[o].references--}for(var c=s(e,t),d=0;d<r.length;d++){var u=a(r[d]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}r=c}}}},548:e=>{e.exports=class{constructor(){}Play(e){}}},478:e=>{e.exports=class{constructor(){}Play(e){return console.log(e),new Howl({src:[e.audio],volume:null===e.volume?1:e.volume,loop:!!e.loop})}}},512:e=>{e.exports=class{constructor(){this.CreateEgg()}CreateEgg(){this.egg=$("<div/>").addClass("opening-egg").appendTo(Game.wrapper),this.eggBack1=$("<img/>").addClass("opening-egg-back-1").appendTo(this.egg),this.eggBack2=$("<img/>").addClass("opening-egg-back-2").appendTo(this.egg),this.EggEnter()}EggEnter(){}}},193:e=>{e.exports=class{constructor(e,t){this.id=e,this.type=t,this.LoadData()}GetContentPath(){return`resource/content/${this.type}/${this.id}`}LoadData(){fetch(`${this.GetContentPath()}/data.json`).then((e=>e.json())).then((e=>{console.log(`Loaded data for ${this.type} ${this.id}`),this.data=e,console.log(this.data),this.LoadResources()}))}GetField(e){return this.data.fields.find((t=>t.n==e))||{}}GetAudioPath(e){return`${this.GetContentPath()}/${e}.mp3`}LoadResources(){this.data.fields.filter((e=>"A"==e.t&&e.id>-1)).forEach((e=>{e.audio=Game.audioManager.Play({audio:this.GetAudioPath(e.id)}),e.audio.on("load",(()=>console.log(`Loaded audio ${e.id}`)))}))}}},643:e=>{e.exports=class{constructor(e){this.audioManager=e,$.getJSON("resource/talkshow/talkshow.json").then((e=>this.data=e))}Play(e,t){if(e)switch(typeof e){case"string":case"number":return this.audioManager.Play({audio:`resource/talkshow/audio/${e}.mp3`,loop:t});case"object":if(e.length)return this.Play(e[Math.floor(Math.random()*e.length)],t)}}}},625:e=>{e.exports=class{constructor(){this.videoWrapper=$("<div/>").addClass("video-wrapper").appendTo(Game.wrapper)}CreateVideo(e){const t={};e.loop&&(t.loop=!0);const r=$("<video/>").attr(t).css({zIndex:e.layer||1}).append($("<source/>").attr({src:`resource/basic/video/${e.video}.webm`,type:"video/webm"})).appendTo(this.videoWrapper);return e.play&&r[0].play(),r}CreateVideoBackgroundTransition(e,t,r){const n=this.CreateVideo({video:e,layer:2+(r||0)});return n.on("play",(()=>{this.currentVideo=n,this.currentBackground&&this.currentBackground.remove(),this.currentBackground=this.CreateVideo({video:t,layer:1+(r||0),loop:!0}),n.on("ended",(()=>{n.remove(),this.currentBackground[0].play(),this.currentBackground.css({zIndex:6}),this.currentVideo=this.currentBackground}))})),n[0]}CreateSegue(e,t){return this.CreateVideoBackgroundTransition(`Q${e}_1`,`Q${t||e}_2`,2)}pause(e){this.currentVideo&&this.currentVideo[0][e?"pause":"play"]()}}},381:(e,t,r)=>{const n=r(580);e.exports=class extends(r(193)){constructor(e){super(e,"episode")}LoadResources(){super.LoadResources(),this.sponsorLogo=$("<img/>").attr("src",`${this.GetContentPath()}/${this.GetField("gLogo").id}.svg`)}LoadPrize(){this.prizeImage=$("<div/>").addClass("prize-image").css({backgroundImage:`url(${this.GetContentPath()}/prize.png)`,backgroundSize:`100% ${100*this.data.prizeFrameCount}%`}),Game.wrapper.append(this.prizeImage)}PlayPrize(){this.prizeAnimation=anime({targets:this.prizeImage[0],backgroundPosition:["0% 0%",`0% ${100*(this.data.prizeFrameCount-1)}%`],duration:1500,easing:`steps(${this.data.prizeFrameCount-1})`,loop:!0})}StopPrize(){this.prizeAnimation.pause(),this.prizeImage.remove()}GetQuestionForIndex(e){const t=this.GetField("tQuestions").split(",")[e];switch(this.GetField("tTypes").split(",")[e]){case"S":return new n(t)}}}},699:(e,t,r)=>{const n=r(478),o=r(625),i=r(548),a=r(643),s=r(381),c=r(512);r(412),e.exports=class{constructor(){window.Game=this,this.wrapper=$("<div/>").addClass("wrapper").appendTo(document.body),this.resize(),$(window).on("resize",(()=>this.resize())),this.videoManager=new o,this.audioManager=new n,this.animationManager=new i,this.talkshowManager=new a(this.audioManager),this.episode=new s("606"),this.openingState=new c}resize(){const e=$(window).innerWidth(),t=$(window).innerHeight();this.wrapper.css({transform:`scale(${Math.min(e/1280,t/720)})`,top:t/2-360,left:e/2-640})}}},211:(e,t,r)=>{e.exports=class extends(r(193)){constructor(e){super(e,"question")}}},580:(e,t,r)=>{e.exports=class extends(r(211)){constructor(e){super(e),this.hasPrize=this.GetField("nPrize").v>0,this.hasPrize&&Game.episode.LoadPrize()}}},776:(e,t,r)=>{"use strict";e.exports=r.p+"bd93e2e645d82d393ec8.woff"},273:(e,t,r)=>{"use strict";e.exports=r.p+"d927177d2e98f32b6948.woff"},566:(e,t,r)=>{"use strict";e.exports=r.p+"89ffd2bef52a385bd826.woff"},390:(e,t,r)=>{"use strict";e.exports=r.p+"8391dddacdbeed99672b.woff"},42:(e,t,r)=>{"use strict";e.exports=r.p+"b4d6562507bb65353a98.woff"},728:(e,t,r)=>{"use strict";e.exports=r.p+"e3325b933d94459bf5ad.woff"},899:(e,t,r)=>{"use strict";e.exports=r.p+"8b96656a995405761761.woff"},1:(e,t,r)=>{"use strict";e.exports=r.p+"84b35b10afb97551b753.woff"},596:(e,t,r)=>{"use strict";e.exports=r.p+"c06ebea626631f8d6648.svg"},681:(e,t,r)=>{"use strict";e.exports=r.p+"d096336ac7d9e9b1f47a.svg"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{const e=r(699);$(window).one("click",(()=>new e))})()})();