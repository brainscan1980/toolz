(()=>{var t={383:function(t){t.exports=function(){"use strict";var t=['a[href]:not([tabindex^="-"])','area[href]:not([tabindex^="-"])','input:not([type="hidden"]):not([type="radio"]):not([disabled]):not([tabindex^="-"])','input[type="radio"]:not([disabled]):not([tabindex^="-"])','select:not([disabled]):not([tabindex^="-"])','textarea:not([disabled]):not([tabindex^="-"])','button:not([disabled]):not([tabindex^="-"])','iframe:not([tabindex^="-"])','audio[controls]:not([tabindex^="-"])','video[controls]:not([tabindex^="-"])','[contenteditable]:not([tabindex^="-"])','[tabindex]:not([tabindex^="-"])'];function e(t){this._show=this.show.bind(this),this._hide=this.hide.bind(this),this._maintainFocus=this._maintainFocus.bind(this),this._bindKeypress=this._bindKeypress.bind(this),this.$el=t,this.shown=!1,this._id=this.$el.getAttribute("data-a11y-dialog")||this.$el.id,this._previouslyFocused=null,this._listeners={},this.create()}function i(t,e){return i=(e||document).querySelectorAll(t),Array.prototype.slice.call(i);var i}function n(t){(t.querySelector("[autofocus]")||t).focus()}function o(){i("[data-a11y-dialog]").forEach((function(t){new e(t)}))}return e.prototype.create=function(){this.$el.setAttribute("aria-hidden",!0),this.$el.setAttribute("aria-modal",!0),this.$el.setAttribute("tabindex",-1),this.$el.hasAttribute("role")||this.$el.setAttribute("role","dialog"),this._openers=i('[data-a11y-dialog-show="'+this._id+'"]'),this._openers.forEach(function(t){t.addEventListener("click",this._show)}.bind(this));const t=this.$el;return this._closers=i("[data-a11y-dialog-hide]",this.$el).filter((function(e){return e.closest('[aria-modal="true"], [data-a11y-dialog]')===t})).concat(i('[data-a11y-dialog-hide="'+this._id+'"]')),this._closers.forEach(function(t){t.addEventListener("click",this._hide)}.bind(this)),this._fire("create"),this},e.prototype.show=function(t){return this.shown||(document.documentElement.style.overflowY="hidden",this._previouslyFocused=document.activeElement,this.$el.removeAttribute("aria-hidden"),this.shown=!0,n(this.$el),document.body.addEventListener("focus",this._maintainFocus,!0),document.addEventListener("keydown",this._bindKeypress),this._fire("show",t)),this},e.prototype.hide=function(t){return this.shown?(document.documentElement.style.overflowY="",this.shown=!1,this.$el.setAttribute("aria-hidden","true"),this._previouslyFocused&&this._previouslyFocused.focus&&this._previouslyFocused.focus(),document.body.removeEventListener("focus",this._maintainFocus,!0),document.removeEventListener("keydown",this._bindKeypress),this._fire("hide",t),this):this},e.prototype.destroy=function(){return this.hide(),this._openers.forEach(function(t){t.removeEventListener("click",this._show)}.bind(this)),this._closers.forEach(function(t){t.removeEventListener("click",this._hide)}.bind(this)),this._fire("destroy"),this._listeners={},this},e.prototype.on=function(t,e){return void 0===this._listeners[t]&&(this._listeners[t]=[]),this._listeners[t].push(e),this},e.prototype.off=function(t,e){var i=(this._listeners[t]||[]).indexOf(e);return i>-1&&this._listeners[t].splice(i,1),this},e.prototype._fire=function(t,e){var i=this._listeners[t]||[],n=new CustomEvent(t,{detail:e});this.$el.dispatchEvent(n),i.forEach(function(t){t(this.$el,e)}.bind(this))},e.prototype._bindKeypress=function(e){const n=document.activeElement;n&&n.closest('[aria-modal="true"]')!==this.$el||(this.shown&&"Escape"===e.key&&"alertdialog"!==this.$el.getAttribute("role")&&(e.preventDefault(),this.hide(e)),this.shown&&"Tab"===e.key&&function(e,n){var o=function(e){return i(t.join(","),e).filter((function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)}))}(e),s=o.indexOf(document.activeElement);n.shiftKey&&0===s?(o[o.length-1].focus(),n.preventDefault()):n.shiftKey||s!==o.length-1||(o[0].focus(),n.preventDefault())}(this.$el,e))},e.prototype._maintainFocus=function(t){!this.shown||t.target.closest('[aria-modal="true"]')||t.target.closest("[data-a11y-dialog-ignore-focus-trap]")||n(this.$el)},"undefined"!=typeof document&&("loading"===document.readyState?document.addEventListener("DOMContentLoaded",o):window.requestAnimationFrame?window.requestAnimationFrame(o):window.setTimeout(o,16)),e}()}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,i),s.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(){var t=this;t.n=document.querySelector("nav"),t.close=function(){document.body.style.overflow="auto",t.n.classList.remove("active")},t.open=function(){document.body.style.overflow="hidden",t.n.classList.add("active")},t.n&&(document.querySelector("nav>button").addEventListener("click",(()=>{console.log("toggleNav"),t.n.classList.contains("active")?t.close():t.open()})),document.querySelector("nav>.nav-overlay").addEventListener("click",(()=>{t.close()})),document.querySelectorAll("nav ul > a").forEach((e=>e.addEventListener("click",(()=>{t.close()})))))}var e=i(383),n=i.n(e);function o(){var t=document.getElementsByClassName("theme-toggle");if(window.CSS&&CSS.supports("color","var(--bg)")&&t){var e=localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");e&&document.documentElement.setAttribute("data-theme",e);for(var i=0;i<t.length;i++)t[i].onclick=function(){var t="light";"light"===document.documentElement.getAttribute("data-theme")&&(t="dark"),document.documentElement.setAttribute("data-theme",t),localStorage.setItem("theme",t)}}}function s(){var t=this;t.gt=document.getElementById("gt-link"),t.scrollToTop=function(){window.scroll({top:0,left:0,behavior:"smooth"})},t.listeners=function(){window.addEventListener("scroll",(()=>{window.scrollY>0?t.gt.classList.remove("hidden"):t.gt.classList.add("hidden")})),t.gt.onclick=function(e){e.preventDefault(),(document.documentElement.scrollTop||document.body.scrollTop>0)&&t.scrollToTop()}},t.gt&&t.listeners()}function r(){let t=document.querySelectorAll("[class*=_aos]");if(IntersectionObserver&&t){let e=new IntersectionObserver((function(t){t.forEach((t=>{t.isIntersecting&&!t.target.classList.contains("_aos-done")?t.target.classList.add("_aos-done"):t.target.classList.remove("_aos-done")}))}),{root:null,threshold:0});t.forEach((t=>{e.observe(t)}))}}const a=document.querySelector("#dlg_changelog");new(n())(a);const d="3.1.2";var c=new class{constructor(t){this.LS=null,this.name=t,this.checkLS(),this.init(t)}clearAll(){this.LS.clear()}checkLS(){window&&window.localStorage?this.LS=window.localStorage:console.log("localStorage is there?")}init(t){this.LS&&(this.LS[t]?this.data=JSON.parse(this.LS[t]):this.data={})}set(t,e){this.data[t]=e,this.LS&&(this.LS[this.name]=JSON.stringify(this.data))}get(t){return!!this.data[t]&&this.data[t]}}("toolz").get("version");console.log(c,d),document.addEventListener("DOMContentLoaded",(()=>{new o,new t,new s,new r}))})()})();