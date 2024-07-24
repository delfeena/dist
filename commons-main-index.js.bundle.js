/*! For license information please see commons-main-index.js.bundle.js.LICENSE.txt */
(self.webpackChunkFilmcave=self.webpackChunkFilmcave||[]).push([[911],{7995:function(e,t,o){var n,r,i,s,a,u,c,l,f,p,d,h;e.exports=(n=o(8221),r=o(6245),i=o(7612),s=o(826),a=o(6170),u=o(9754),c=o(3215),l=o(3950),f=o(3031),p=o(7350),d=o(7200),h=o(6540),function(){"use strict";var e={654:function(e,t,o){var n,r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o);var r=Object.getOwnPropertyDescriptor(t,o);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,n,r)}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&i(t,e,o);return s(t,e),t},u=this&&this.__spreadArray||function(e,t,o){if(o||2===arguments.length)for(var n,r=0,i=t.length;r<i;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.setKeyMap=t.destroy=t.setThrottle=t.init=t.SpatialNavigation=t.ROOT_FOCUS_KEY=void 0;var l=c(o(747)),f=c(o(842)),p=c(o(432)),d=c(o(23)),h=c(o(682)),y=c(o(784)),v=c(o(67)),g=c(o(150)),b=c(o(117)),m=a(o(964)),C=c(o(35)),w="left",F="right",x="up",K="down",E="enter",S=((n={}).left=[37],n.up=[38],n.right=[39],n.down=[40],n.enter=[13],n);t.ROOT_FOCUS_KEY="SN:ROOT";var O=["#0FF","#FF0","#F0F"],P={leading:!0,trailing:!1},L=function(){function e(){this.focusableComponents={},this.focusKey=null,this.parentsHavingFocusedChild=[],this.enabled=!1,this.nativeMode=!1,this.throttle=0,this.throttleKeypresses=!1,this.useGetBoundingClientRect=!1,this.shouldFocusDOMNode=!1,this.pressedKeys={},this.paused=!1,this.keyDownEventListener=null,this.keyUpEventListener=null,this.keyMap=S,this.onKeyEvent=this.onKeyEvent.bind(this),this.pause=this.pause.bind(this),this.resume=this.resume.bind(this),this.setFocus=this.setFocus.bind(this),this.updateAllLayouts=this.updateAllLayouts.bind(this),this.navigateByDirection=this.navigateByDirection.bind(this),this.init=this.init.bind(this),this.setThrottle=this.setThrottle.bind(this),this.destroy=this.destroy.bind(this),this.setKeyMap=this.setKeyMap.bind(this),this.getCurrentFocusKey=this.getCurrentFocusKey.bind(this),this.setFocusDebounced=(0,g.default)(this.setFocus,300,{leading:!1,trailing:!0}),this.debug=!1,this.visualDebugger=null,this.logIndex=0}return e.getCutoffCoordinate=function(e,t,o,n){var r=n.left,i=n.top,s=n.width,a=n.height,u=e?i:r,c=e?a:s;return t?o?u:u+c:o?u+c:u},e.getRefCorners=function(e,t,o){var n=o.left,r=o.top,i=o.width,s=o.height,a={a:{x:0,y:0},b:{x:0,y:0}};switch(e){case x:var u=t?r+s:r;a.a={x:n,y:u},a.b={x:n+i,y:u};break;case K:u=t?r:r+s,a.a={x:n,y:u},a.b={x:n+i,y:u};break;case w:var c=t?n+i:n;a.a={x:c,y:r},a.b={x:c,y:r+s};break;case F:c=t?n:n+i,a.a={x:c,y:r},a.b={x:c,y:r+s}}return a},e.isAdjacentSlice=function(e,t,o){var n=e.a,r=e.b,i=t.a,s=t.b,a=o?"x":"y",u=n[a],c=r[a],l=i[a],f=s[a],p=.2*(c-u);return Math.max(0,Math.min(c,f)-Math.max(u,l))>=p},e.getPrimaryAxisDistance=function(e,t,o){var n=e.a,r=t.a,i=o?"y":"x";return Math.abs(r[i]-n[i])},e.getSecondaryAxisDistance=function(e,t,o){var n=e.a,r=e.b,i=t.a,s=t.b,a=o?"x":"y",u=n[a],c=r[a],l=i[a],f=s[a],p=[];return p.push(Math.abs(l-u)),p.push(Math.abs(l-c)),p.push(Math.abs(f-u)),p.push(Math.abs(f-c)),Math.min.apply(Math,p)},e.prototype.sortSiblingsByPriority=function(t,o,n,r){var i=this,s=n===K||n===x,a=e.getRefCorners(n,!1,o);return(0,p.default)(t,(function(t){var o=e.getRefCorners(n,!0,t.layout),u=e.isAdjacentSlice(a,o,s),c=u?e.getPrimaryAxisDistance:e.getSecondaryAxisDistance,l=u?e.getSecondaryAxisDistance:e.getPrimaryAxisDistance,f=c(a,o,s),p=l(a,o,s),d=5*f+p,h=(d+1)/(u?5:1);return i.log("smartNavigate","distance (primary, secondary, total weighted) for ".concat(t.focusKey," relative to ").concat(r," is"),f,p,d),i.log("smartNavigate","priority for ".concat(t.focusKey," relative to ").concat(r," is"),h),i.visualDebugger&&(i.visualDebugger.drawPoint(o.a.x,o.a.y,"yellow",6),i.visualDebugger.drawPoint(o.b.x,o.b.y,"yellow",6)),h}))},e.prototype.init=function(e){var t=void 0===e?{}:e,o=t.debug,n=void 0!==o&&o,r=t.visualDebug,i=void 0!==r&&r,s=t.nativeMode,a=void 0!==s&&s,u=t.throttle,c=void 0===u?0:u,l=t.throttleKeypresses,f=void 0!==l&&l,p=t.useGetBoundingClientRect,d=void 0!==p&&p,h=t.shouldFocusDOMNode,y=void 0!==h&&h;this.enabled||(this.enabled=!0,this.nativeMode=a,this.throttleKeypresses=f,this.useGetBoundingClientRect=d,this.shouldFocusDOMNode=y&&!a,this.debug=n,this.nativeMode||(Number.isInteger(c)&&c>0&&(this.throttle=c),this.bindEventHandlers(),i&&(this.visualDebugger=new C.default,this.startDrawLayouts())))},e.prototype.setThrottle=function(e){var t=void 0===e?{}:e,o=t.throttle,n=void 0===o?0:o,r=t.throttleKeypresses,i=void 0!==r&&r;this.throttleKeypresses=i,this.nativeMode||(this.unbindEventHandlers(),Number.isInteger(n)&&(this.throttle=n),this.bindEventHandlers())},e.prototype.startDrawLayouts=function(){var e=this,t=function(){requestAnimationFrame((function(){e.visualDebugger.clearLayouts(),(0,y.default)(e.focusableComponents,(function(t,o){e.visualDebugger.drawLayout(t.layout,o,t.parentFocusKey)})),t()}))};t()},e.prototype.destroy=function(){this.enabled&&(this.enabled=!1,this.nativeMode=!1,this.throttle=0,this.throttleKeypresses=!1,this.focusKey=null,this.parentsHavingFocusedChild=[],this.focusableComponents={},this.paused=!1,this.keyMap=S,this.unbindEventHandlers())},e.prototype.getEventType=function(e){return(0,d.default)(this.getKeyMap(),(function(t){return t.includes(e)}))},e.prototype.bindEventHandlers=function(){var e=this;"undefined"!=typeof window&&window.addEventListener&&(this.keyDownEventListener=function(t){if(!0!==e.paused){e.debug&&(e.logIndex+=1);var o=e.getEventType(t.keyCode);if(o){e.pressedKeys[o]=e.pressedKeys[o]?e.pressedKeys[o]+1:1,t.preventDefault(),t.stopPropagation();var n={pressedKeys:e.pressedKeys};o===E&&e.focusKey?e.onEnterPress(n):!1===e.onArrowPress(o,n)?(e.log("keyDownEventListener","default navigation prevented"),e.visualDebugger&&e.visualDebugger.clear()):e.onKeyEvent(t)}}},this.throttle&&(this.keyDownEventListenerThrottled=(0,v.default)(this.keyDownEventListener.bind(this),this.throttle,P)),this.keyUpEventListener=function(t){var o=e.getEventType(t.keyCode);delete e.pressedKeys[o],e.throttle&&!e.throttleKeypresses&&e.keyDownEventListenerThrottled.cancel(),o===E&&e.focusKey&&e.onEnterRelease()},window.addEventListener("keyup",this.keyUpEventListener),window.addEventListener("keydown",this.throttle?this.keyDownEventListenerThrottled:this.keyDownEventListener))},e.prototype.unbindEventHandlers=function(){if("undefined"!=typeof window&&window.removeEventListener){window.removeEventListener("keyup",this.keyUpEventListener),this.keyUpEventListener=null;var e=this.throttle?this.keyDownEventListenerThrottled:this.keyDownEventListener;window.removeEventListener("keydown",e),this.keyDownEventListener=null}},e.prototype.onEnterPress=function(e){var t=this.focusableComponents[this.focusKey];t?t.focusable?t.onEnterPress&&t.onEnterPress(e):this.log("onEnterPress","componentNotFocusable"):this.log("onEnterPress","noComponent")},e.prototype.onEnterRelease=function(){var e=this.focusableComponents[this.focusKey];e?e.focusable?e.onEnterRelease&&e.onEnterRelease():this.log("onEnterRelease","componentNotFocusable"):this.log("onEnterRelease","noComponent")},e.prototype.onArrowPress=function(e,t){var o=this.focusableComponents[this.focusKey];if(o)return o&&o.onArrowPress&&o.onArrowPress(e,t);this.log("onArrowPress","noComponent")},e.prototype.navigateByDirection=function(e,t){if(!0!==this.paused&&!this.nativeMode){var o=[K,x,w,F];o.includes(e)?(this.log("navigateByDirection","direction",e),this.smartNavigate(e,null,t)):this.log("navigateByDirection","Invalid direction. You passed: `".concat(e,"`, but you can use only these: "),o)}},e.prototype.onKeyEvent=function(e){this.visualDebugger&&this.visualDebugger.clear();var t=(0,d.default)(this.getKeyMap(),(function(t){return t.includes(e.keyCode)}));this.smartNavigate(t,null,{event:e})},e.prototype.smartNavigate=function(t,o,n){var r=this;if(!this.nativeMode){this.log("smartNavigate","direction",t),this.log("smartNavigate","fromParentFocusKey",o),this.log("smartNavigate","this.focusKey",this.focusKey),o||(0,y.default)(this.focusableComponents,(function(e){e.layoutUpdated=!1}));var i=this.focusableComponents[o||this.focusKey];if(this.log("smartNavigate","currentComponent",i?i.focusKey:void 0,i?i.node:void 0,i),i){this.updateLayout(i.focusKey);var s=i.parentFocusKey,a=i.focusKey,u=i.layout,c=t===K||t===x,p=t===K||t===F,d=e.getCutoffCoordinate(c,p,!1,u),h=(0,l.default)(this.focusableComponents,(function(t){if(t.parentFocusKey===s&&t.focusable){r.updateLayout(t.focusKey);var o=e.getCutoffCoordinate(c,p,!0,t.layout);return p?o>=d:o<=d}return!1}));if(this.debug&&(this.log("smartNavigate","currentCutoffCoordinate",d),this.log("smartNavigate","siblings","".concat(h.length," elements:"),h.map((function(e){return e.focusKey})).join(", "),h.map((function(e){return e.node})),h.map((function(e){return e})))),this.visualDebugger){var v=e.getRefCorners(t,!1,u);this.visualDebugger.drawPoint(v.a.x,v.a.y),this.visualDebugger.drawPoint(v.b.x,v.b.y)}var g=this.sortSiblingsByPriority(h,u,t,a),b=(0,f.default)(g);if(this.log("smartNavigate","nextComponent",b?b.focusKey:void 0,b?b.node:void 0,b),b)this.setFocus(b.focusKey,n);else{var m=this.focusableComponents[s];m&&m.isFocusBoundary||this.smartNavigate(t,s,n)}}}},e.prototype.saveLastFocusedChildKey=function(e,t){e&&(this.log("saveLastFocusedChildKey","".concat(e.focusKey," lastFocusedChildKey set"),t),e.lastFocusedChildKey=t)},e.prototype.log=function(e,t){for(var o=[],n=2;n<arguments.length;n++)o[n-2]=arguments[n];this.debug&&console.log.apply(console,u(["%c".concat(e,"%c").concat(t),"background: ".concat(O[this.logIndex%O.length],"; color: black; padding: 1px 5px;"),"background: #333; color: #BADA55; padding: 1px 5px;"],o,!1))},e.prototype.getCurrentFocusKey=function(){return this.focusKey},e.prototype.getNextFocusKey=function(e){var t=this,o=this.focusableComponents[e];if(!o||this.nativeMode)return e;var n=(0,l.default)(this.focusableComponents,(function(t){return t.parentFocusKey===e&&t.focusable}));if(n.length>0){var r=o.lastFocusedChildKey,i=o.preferredChildFocusKey;if(this.log("getNextFocusKey","lastFocusedChildKey is",r),this.log("getNextFocusKey","preferredChildFocusKey is",i),r&&o.saveLastFocusedChild&&this.isParticipatingFocusableComponent(r))return this.log("getNextFocusKey","lastFocusedChildKey will be focused",r),this.getNextFocusKey(r);if(i&&this.isParticipatingFocusableComponent(i))return this.log("getNextFocusKey","preferredChildFocusKey will be focused",i),this.getNextFocusKey(i);n.forEach((function(e){return t.updateLayout(e.focusKey)}));var s=function(e){var t=(0,p.default)(e,(function(e){var t=e.layout;return Math.abs(t.left)+Math.abs(t.top)}));return(0,f.default)(t)}(n).focusKey;return this.log("getNextFocusKey","childKey will be focused",s),this.getNextFocusKey(s)}return this.log("getNextFocusKey","targetFocusKey",e),e},e.prototype.addFocusable=function(e){var t=e.focusKey,o=e.node,n=e.parentFocusKey,r=e.onEnterPress,i=e.onEnterRelease,s=e.onArrowPress,a=e.onFocus,u=e.onBlur,c=e.saveLastFocusedChild,l=e.trackChildren,f=e.onUpdateFocus,p=e.onUpdateHasFocusedChild,d=e.preferredChildFocusKey,h=e.autoRestoreFocus,y=e.focusable,v=e.isFocusBoundary;if(this.focusableComponents[t]={focusKey:t,node:o,parentFocusKey:n,onEnterPress:r,onEnterRelease:i,onArrowPress:s,onFocus:a,onBlur:u,onUpdateFocus:f,onUpdateHasFocusedChild:p,saveLastFocusedChild:c,trackChildren:l,preferredChildFocusKey:d,focusable:y,isFocusBoundary:v,autoRestoreFocus:h,lastFocusedChildKey:null,layout:{x:0,y:0,width:0,height:0,left:0,top:0,node:o},layoutUpdated:!1},!this.nativeMode){this.updateLayout(t),this.log("addFocusable","Component added: ",this.focusableComponents[t]),t===this.focusKey&&this.setFocus(t);for(var g=this.focusableComponents[this.focusKey];g;){if(g.parentFocusKey===t){this.updateParentsHasFocusedChild(this.focusKey,{});break}g=this.focusableComponents[g.parentFocusKey]}}},e.prototype.removeFocusable=function(e){var t=e.focusKey,o=this.focusableComponents[t];if(o){var n=o.parentFocusKey;(0,o.onUpdateFocus)(!1),this.log("removeFocusable","Component removed: ",o),delete this.focusableComponents[t];var r=this.parentsHavingFocusedChild.includes(t);this.parentsHavingFocusedChild=this.parentsHavingFocusedChild.filter((function(e){return e!==t}));var i=this.focusableComponents[n],s=t===this.focusKey;if(i&&i.lastFocusedChildKey===t&&(i.lastFocusedChildKey=null),this.nativeMode)return;(s||r)&&i&&i.autoRestoreFocus&&(this.log("removeFocusable","Component removed: ",s?"Leaf component":"Container component","Auto restoring focus to: ",n),this.setFocusDebounced(n))}},e.prototype.getNodeLayoutByFocusKey=function(e){var t=this.focusableComponents[e];return t?(this.updateLayout(t.focusKey),t.layout):null},e.prototype.setCurrentFocusedKey=function(e,t){if(this.isFocusableComponent(this.focusKey)&&e!==this.focusKey){var o=this.focusableComponents[this.focusKey];o.onUpdateFocus(!1),o.onBlur(this.getNodeLayoutByFocusKey(this.focusKey),t),this.log("setCurrentFocusedKey","onBlur",o)}if(this.focusKey=e,this.isFocusableComponent(this.focusKey)){var n=this.focusableComponents[this.focusKey];this.shouldFocusDOMNode&&n.node&&n.node.focus(),n.onUpdateFocus(!0),n.onFocus(this.getNodeLayoutByFocusKey(this.focusKey),t),this.log("setCurrentFocusedKey","onFocus",n)}},e.prototype.updateParentsHasFocusedChild=function(e,t){for(var o=this,n=[],r=this.focusableComponents[e];r;){var i=r.parentFocusKey,s=this.focusableComponents[i];if(s){var a=s.focusKey;n.push(a)}r=s}var u=(0,b.default)(this.parentsHavingFocusedChild,n),c=(0,b.default)(n,this.parentsHavingFocusedChild);(0,h.default)(u,(function(e){var n=o.focusableComponents[e];n&&n.trackChildren&&n.onUpdateHasFocusedChild(!1),o.onIntermediateNodeBecameBlurred(e,t)})),(0,h.default)(c,(function(e){var n=o.focusableComponents[e];n&&n.trackChildren&&n.onUpdateHasFocusedChild(!0),o.onIntermediateNodeBecameFocused(e,t)})),this.parentsHavingFocusedChild=n},e.prototype.updateParentsLastFocusedChild=function(e){for(var t=this.focusableComponents[e];t;){var o=t.parentFocusKey,n=this.focusableComponents[o];n&&this.saveLastFocusedChildKey(n,t.focusKey),t=n}},e.prototype.getKeyMap=function(){return this.keyMap},e.prototype.setKeyMap=function(e){this.keyMap=r(r({},this.getKeyMap()),function(e){var t={};return Object.entries(e).forEach((function(e){var o=e[0],n=e[1];"number"==typeof n?t[o]=[n]:Array.isArray(n)&&(t[o]=n)})),t}(e))},e.prototype.isFocusableComponent=function(e){return!!this.focusableComponents[e]},e.prototype.isParticipatingFocusableComponent=function(e){return this.isFocusableComponent(e)&&this.focusableComponents[e].focusable},e.prototype.onIntermediateNodeBecameFocused=function(e,t){this.isParticipatingFocusableComponent(e)&&this.focusableComponents[e].onFocus(this.getNodeLayoutByFocusKey(e),t)},e.prototype.onIntermediateNodeBecameBlurred=function(e,t){this.isParticipatingFocusableComponent(e)&&this.focusableComponents[e].onBlur(this.getNodeLayoutByFocusKey(e),t)},e.prototype.pause=function(){this.paused=!0},e.prototype.resume=function(){this.paused=!1},e.prototype.setFocus=function(e,t){if(void 0===t&&(t={}),this.setFocusDebounced.cancel(),this.enabled){this.log("setFocus","focusKey",e);var o=this.getNextFocusKey(e);this.log("setFocus","newFocusKey",o),this.setCurrentFocusedKey(o,t),this.updateParentsHasFocusedChild(o,t),this.updateParentsLastFocusedChild(o)}},e.prototype.updateAllLayouts=function(){var e=this;this.nativeMode||(0,y.default)(this.focusableComponents,(function(t,o){e.updateLayout(o)}))},e.prototype.updateLayout=function(e){var t=this.focusableComponents[e];if(t&&!this.nativeMode&&!t.layoutUpdated){var o=t.node,n=this.useGetBoundingClientRect?(0,m.getBoundingClientRect)(o):(0,m.default)(o);t.layout=r(r({},n),{node:o})}},e.prototype.updateFocusable=function(e,t){var o=t.node,n=t.preferredChildFocusKey,r=t.focusable,i=t.isFocusBoundary,s=t.onEnterPress,a=t.onEnterRelease,u=t.onArrowPress,c=t.onFocus,l=t.onBlur;if(!this.nativeMode){var f=this.focusableComponents[e];f&&(f.preferredChildFocusKey=n,f.focusable=r,f.isFocusBoundary=i,f.onEnterPress=s,f.onEnterRelease=a,f.onArrowPress=u,f.onFocus=c,f.onBlur=l,o&&(f.node=o))}},e.prototype.isNativeMode=function(){return this.nativeMode},e}();t.SpatialNavigation=new L,t.init=t.SpatialNavigation.init,t.setThrottle=t.SpatialNavigation.setThrottle,t.destroy=t.SpatialNavigation.destroy,t.setKeyMap=t.SpatialNavigation.setKeyMap},35:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o="undefined"!=typeof window&&window.document,n=o?window.innerWidth:0,r=o?window.innerHeight:0,i=function(){function e(){o&&(this.debugCtx=e.createCanvas("sn-debug","1010"),this.layoutsCtx=e.createCanvas("sn-layouts","1000"))}return e.createCanvas=function(e,t){var o=document.querySelector("#".concat(e))||document.createElement("canvas");o.setAttribute("id",e);var i=o.getContext("2d");return o.style.zIndex=t,o.style.position="fixed",o.style.top="0",o.style.left="0",document.body.appendChild(o),o.width=n,o.height=r,i},e.prototype.clear=function(){o&&this.debugCtx.clearRect(0,0,n,r)},e.prototype.clearLayouts=function(){o&&this.layoutsCtx.clearRect(0,0,n,r)},e.prototype.drawLayout=function(e,t,n){o&&(this.layoutsCtx.strokeStyle="green",this.layoutsCtx.strokeRect(e.left,e.top,e.width,e.height),this.layoutsCtx.font="8px monospace",this.layoutsCtx.fillStyle="red",this.layoutsCtx.fillText(t,e.left,e.top+10),this.layoutsCtx.fillText(n,e.left,e.top+25),this.layoutsCtx.fillText("left: ".concat(e.left),e.left,e.top+40),this.layoutsCtx.fillText("top: ".concat(e.top),e.left,e.top+55))},e.prototype.drawPoint=function(e,t,n,r){void 0===n&&(n="blue"),void 0===r&&(r=10),o&&(this.debugCtx.strokeStyle=n,this.debugCtx.lineWidth=3,this.debugCtx.strokeRect(e-r/2,t-r/2,r,r))},e}();t.default=i},607:function(e,t,o){var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o);var r=Object.getOwnPropertyDescriptor(t,o);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,n,r)}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),r=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||n(t,e,o)};Object.defineProperty(t,"__esModule",{value:!0}),r(o(79),t),r(o(445),t),r(o(654),t)},964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getBoundingClientRect=void 0;var o=function(e){for(var t=e.offsetParent,o=e.offsetHeight,n=e.offsetWidth,r=e.offsetLeft,i=e.offsetTop;t&&1===t.nodeType;)r+=t.offsetLeft-t.scrollLeft,i+=t.offsetTop-t.scrollTop,t=t.offsetParent;return{height:o,left:r,top:i,width:n}};t.default=function(e){var t=e&&e.parentElement;if(e&&t){var n=o(t),r=o(e),i=r.height,s=r.left,a=r.top,u=r.width;return{x:s-n.left,y:a-n.top,width:u,height:i,left:s,top:a}}return{x:0,y:0,width:0,height:0,left:0,top:0}},t.getBoundingClientRect=function(e){if(e&&e.getBoundingClientRect){var t=e.getBoundingClientRect();return{x:t.x,y:t.y,width:t.width,height:t.height,left:t.left,top:t.top}}return{x:0,y:0,width:0,height:0,left:0,top:0}}},445:function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.useFocusContext=t.FocusContext=void 0;var n=o(156),r=o(654);t.FocusContext=(0,n.createContext)(r.ROOT_FOCUS_KEY),t.useFocusContext=function(){return(0,n.useContext)(t.FocusContext)}},79:function(e,t,o){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useFocusable=void 0;var r=o(156),i=n(o(604)),s=n(o(461)),a=o(654),u=o(445);t.useFocusable=function(e){var t=void 0===e?{}:e,o=t.focusable,n=void 0===o||o,c=t.saveLastFocusedChild,l=void 0===c||c,f=t.trackChildren,p=void 0!==f&&f,d=t.autoRestoreFocus,h=void 0===d||d,y=t.isFocusBoundary,v=void 0!==y&&y,g=t.focusKey,b=t.preferredChildFocusKey,m=t.onEnterPress,C=void 0===m?i.default:m,w=t.onEnterRelease,F=void 0===w?i.default:w,x=t.onArrowPress,K=void 0===x?function(){return!0}:x,E=t.onFocus,S=void 0===E?i.default:E,O=t.onBlur,P=void 0===O?i.default:O,L=t.extraProps,k=(0,r.useCallback)((function(e){C(L,e)}),[C,L]),M=(0,r.useCallback)((function(){F(L)}),[F,L]),R=(0,r.useCallback)((function(e,t){return K(e,L,t)}),[L,K]),j=(0,r.useCallback)((function(e,t){S(e,L,t)}),[L,S]),N=(0,r.useCallback)((function(e,t){P(e,L,t)}),[L,P]),D=(0,r.useRef)(null),_=(0,r.useState)(!1),A=_[0],B=_[1],T=(0,r.useState)(!1),U=T[0],H=T[1],q=(0,u.useFocusContext)(),I=(0,r.useMemo)((function(){return g||(0,s.default)("sn:focusable-item-")}),[g]),X=(0,r.useCallback)((function(e){void 0===e&&(e={}),a.SpatialNavigation.setFocus(I,e)}),[I]);return(0,r.useEffect)((function(){var e=D.current;return a.SpatialNavigation.addFocusable({focusKey:I,node:e,parentFocusKey:q,preferredChildFocusKey:b,onEnterPress:k,onEnterRelease:M,onArrowPress:R,onFocus:j,onBlur:N,onUpdateFocus:function(e){return void 0===e&&(e=!1),B(e)},onUpdateHasFocusedChild:function(e){return void 0===e&&(e=!1),H(e)},saveLastFocusedChild:l,trackChildren:p,isFocusBoundary:v,autoRestoreFocus:h,focusable:n}),function(){a.SpatialNavigation.removeFocusable({focusKey:I})}}),[]),(0,r.useEffect)((function(){var e=D.current;a.SpatialNavigation.updateFocusable(I,{node:e,preferredChildFocusKey:b,focusable:n,isFocusBoundary:v,onEnterPress:k,onEnterRelease:M,onArrowPress:R,onFocus:j,onBlur:N})}),[I,b,n,v,k,M,R,j,N]),{ref:D,focusSelf:X,focused:A,hasFocusedChild:U,focusKey:I,setFocus:a.SpatialNavigation.isNativeMode()?i.default:a.SpatialNavigation.setFocus,navigateByDirection:a.SpatialNavigation.navigateByDirection,pause:a.SpatialNavigation.pause,resume:a.SpatialNavigation.resume,updateAllLayouts:a.SpatialNavigation.updateAllLayouts,getCurrentFocusKey:a.SpatialNavigation.getCurrentFocusKey}}},150:function(e){e.exports=n},117:function(e){e.exports=r},747:function(e){e.exports=i},23:function(e){e.exports=s},842:function(e){e.exports=a},682:function(e){e.exports=u},784:function(e){e.exports=c},604:function(e){e.exports=l},432:function(e){e.exports=f},67:function(e){e.exports=p},461:function(e){e.exports=d},156:function(e){e.exports=h}},t={};return function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,o),i.exports}(607)}())},1036:(e,t,o)=>{"use strict";var n=o(9840),r=o(4634),i=o(7056);u.httpHandler=o(7495);var s=function(e){var t={};return e?(e.trim().split("\n").forEach((function(e){var o=e.indexOf(":"),n=e.slice(0,o).trim().toLowerCase(),r=e.slice(o+1).trim();void 0===t[n]?t[n]=r:Array.isArray(t[n])?t[n].push(r):t[n]=[t[n],r]})),t):t};function a(e,t,o){var n=e;return i(t)?(o=t,"string"==typeof e&&(n={uri:e})):n=r({},t,{uri:e}),n.callback=o,n}function u(e,t,o){return c(t=a(e,t,o))}function c(e){if(void 0===e.callback)throw new Error("callback argument missing");var t=!1,o=function(o,n,r){t||(t=!0,e.callback(o,n,r))};function n(){var e=void 0;if(e=l.response?l.response:l.responseText||function(e){try{if("document"===e.responseType)return e.responseXML;var t=e.responseXML&&"parsererror"===e.responseXML.documentElement.nodeName;if(""===e.responseType&&!t)return e.responseXML}catch(e){}return null}(l),g)try{e=JSON.parse(e)}catch(e){}return e}function r(e){return clearTimeout(f),e instanceof Error||(e=new Error(""+(e||"Unknown XMLHttpRequest Error"))),e.statusCode=0,o(e,b)}function i(){if(!c){var t;clearTimeout(f),t=e.useXDR&&void 0===l.status?200:1223===l.status?204:l.status;var r=b,i=null;return 0!==t?(r={body:n(),statusCode:t,method:d,headers:{},url:p,rawRequest:l},l.getAllResponseHeaders&&(r.headers=s(l.getAllResponseHeaders()))):i=new Error("Internal XMLHttpRequest Error"),o(i,r,r.body)}}var a,c,l=e.xhr||null;l||(l=e.cors||e.useXDR?new u.XDomainRequest:new u.XMLHttpRequest);var f,p=l.url=e.uri||e.url,d=l.method=e.method||"GET",h=e.body||e.data,y=l.headers=e.headers||{},v=!!e.sync,g=!1,b={body:void 0,headers:{},statusCode:0,method:d,url:p,rawRequest:l};if("json"in e&&!1!==e.json&&(g=!0,y.accept||y.Accept||(y.Accept="application/json"),"GET"!==d&&"HEAD"!==d&&(y["content-type"]||y["Content-Type"]||(y["Content-Type"]="application/json"),h=JSON.stringify(!0===e.json?h:e.json))),l.onreadystatechange=function(){4===l.readyState&&setTimeout(i,0)},l.onload=i,l.onerror=r,l.onprogress=function(){},l.onabort=function(){c=!0},l.ontimeout=r,l.open(d,p,!v,e.username,e.password),v||(l.withCredentials=!!e.withCredentials),!v&&e.timeout>0&&(f=setTimeout((function(){if(!c){c=!0,l.abort("timeout");var e=new Error("XMLHttpRequest timeout");e.code="ETIMEDOUT",r(e)}}),e.timeout)),l.setRequestHeader)for(a in y)y.hasOwnProperty(a)&&l.setRequestHeader(a,y[a]);else if(e.headers&&!function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}(e.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in e&&(l.responseType=e.responseType),"beforeSend"in e&&"function"==typeof e.beforeSend&&e.beforeSend(l),l.send(h||null),l}e.exports=u,e.exports.default=u,u.XMLHttpRequest=n.XMLHttpRequest||function(){},u.XDomainRequest="withCredentials"in new u.XMLHttpRequest?u.XMLHttpRequest:n.XDomainRequest,function(e,t){for(var o=0;o<e.length;o++)t(e[o])}(["get","put","post","patch","head","delete"],(function(e){u["delete"===e?"del":e]=function(t,o,n){return(o=a(t,o,n)).method=e.toUpperCase(),c(o)}}))},8978:(e,t,o)=>{var n=o(4722);n.DOMImplementation,n.XMLSerializer,t.DOMParser=o(5752).DOMParser},2505:(e,t,o)=>{e.exports=o(8015)},7056:e=>{e.exports=function(e){if(!e)return!1;var o=t.call(e);return"[object Function]"===o||"function"==typeof e&&"[object RegExp]"!==o||"undefined"!=typeof window&&(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)};var t=Object.prototype.toString},8926:(e,t)=>{function o(e){if(e&&"object"==typeof e){var t=e.which||e.keyCode||e.charCode;t&&(e=t)}if("number"==typeof e)return s[e];var o,i=String(e);return(o=n[i.toLowerCase()])?o:(o=r[i.toLowerCase()])||(1===i.length?i.charCodeAt(0):void 0)}o.isEventKey=function(e,t){if(e&&"object"==typeof e){var o=e.which||e.keyCode||e.charCode;if(null==o)return!1;if("string"==typeof t){var i;if(i=n[t.toLowerCase()])return i===o;if(i=r[t.toLowerCase()])return i===o}else if("number"==typeof t)return t===o;return!1}};var n=(t=e.exports=o).code=t.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},r=t.aliases={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};for(i=97;i<123;i++)n[String.fromCharCode(i)]=i-32;for(var i=48;i<58;i++)n[i-48]=i;for(i=1;i<13;i++)n["f"+i]=i+111;for(i=0;i<10;i++)n["numpad "+i]=i+96;var s=t.names=t.title={};for(i in n)s[n[i]]=i;for(var a in r)n[a]=r[a]},5228:e=>{"use strict";var t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},o=0;o<10;o++)t["_"+String.fromCharCode(o)]=o;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var i,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in i=Object(arguments[u]))o.call(i,c)&&(a[c]=i[c]);if(t){s=t(i);for(var l=0;l<s.length;l++)n.call(i,s[l])&&(a[s[l]]=i[s[l]])}}return a}},5556:(e,t,o)=>{var n=o(4363);e.exports=o(4574)(n.isElement,!0)},961:(e,t,o)=>{"use strict";e.exports=o(1557)},9651:(e,t,o)=>{"use strict";o.d(t,{A:()=>r});var n=o(9320);o(2845);const r=n.A},324:e=>{var t="undefined"!=typeof Element,o="function"==typeof Map,n="function"==typeof Set,r="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,s){if(e===s)return!0;if(e&&s&&"object"==typeof e&&"object"==typeof s){if(e.constructor!==s.constructor)return!1;var a,u,c,l;if(Array.isArray(e)){if((a=e.length)!=s.length)return!1;for(u=a;0!=u--;)if(!i(e[u],s[u]))return!1;return!0}if(o&&e instanceof Map&&s instanceof Map){if(e.size!==s.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!s.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],s.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&s instanceof Set){if(e.size!==s.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!s.has(u.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(s)){if((a=e.length)!=s.length)return!1;for(u=a;0!=u--;)if(e[u]!==s[u])return!1;return!0}if(e.constructor===RegExp)return e.source===s.source&&e.flags===s.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof s.valueOf)return e.valueOf()===s.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof s.toString)return e.toString()===s.toString();if((a=(c=Object.keys(e)).length)!==Object.keys(s).length)return!1;for(u=a;0!=u--;)if(!Object.prototype.hasOwnProperty.call(s,c[u]))return!1;if(t&&e instanceof Element)return!1;for(u=a;0!=u--;)if(("_owner"!==c[u]&&"__v"!==c[u]&&"__o"!==c[u]||!e.$$typeof)&&!i(e[c[u]],s[c[u]]))return!1;return!0}return e!=e&&s!=s}e.exports=function(e,t){try{return i(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},6658:(e,t,o)=>{e.exports=o(1528)},4363:(e,t,o)=>{"use strict";e.exports=o(8413)},9375:e=>{e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},8505:(e,t,o)=>{var n=o(9375);e.exports=d,e.exports.parse=i,e.exports.compile=function(e,t){return a(i(e,t),t)},e.exports.tokensToFunction=a,e.exports.tokensToRegExp=p;var r=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(e,t){for(var o,n=[],i=0,s=0,a="",l=t&&t.delimiter||"/";null!=(o=r.exec(e));){var f=o[0],p=o[1],d=o.index;if(a+=e.slice(s,d),s=d+f.length,p)a+=p[1];else{var h=e[s],y=o[2],v=o[3],g=o[4],b=o[5],m=o[6],C=o[7];a&&(n.push(a),a="");var w=null!=y&&null!=h&&h!==y,F="+"===m||"*"===m,x="?"===m||"*"===m,K=o[2]||l,E=g||b;n.push({name:v||i++,prefix:y||"",delimiter:K,optional:x,repeat:F,partial:w,asterisk:!!C,pattern:E?c(E):C?".*":"[^"+u(K)+"]+?"})}}return s<e.length&&(a+=e.substr(s)),a&&n.push(a),n}function s(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function a(e,t){for(var o=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(o[r]=new RegExp("^(?:"+e[r].pattern+")$",f(t)));return function(t,r){for(var i="",a=t||{},u=(r||{}).pretty?s:encodeURIComponent,c=0;c<e.length;c++){var l=e[c];if("string"!=typeof l){var f,p=a[l.name];if(null==p){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(n(p)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(f=u(p[d]),!o[c].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(f)+"`");i+=(0===d?l.prefix:l.delimiter)+f}}else{if(f=l.asterisk?encodeURI(p).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):u(p),!o[c].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');i+=l.prefix+f}}else i+=l}return i}}function u(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function c(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function l(e,t){return e.keys=t,e}function f(e){return e&&e.sensitive?"":"i"}function p(e,t,o){n(t)||(o=t||o,t=[]);for(var r=(o=o||{}).strict,i=!1!==o.end,s="",a=0;a<e.length;a++){var c=e[a];if("string"==typeof c)s+=u(c);else{var p=u(c.prefix),d="(?:"+c.pattern+")";t.push(c),c.repeat&&(d+="(?:"+p+d+")*"),s+=d=c.optional?c.partial?p+"("+d+")?":"(?:"+p+"("+d+"))?":p+"("+d+")"}}var h=u(o.delimiter||"/"),y=s.slice(-h.length)===h;return r||(s=(y?s.slice(0,-h.length):s)+"(?:"+h+"(?=$))?"),s+=i?"$":r&&y?"":"(?="+h+"|$)",l(new RegExp("^"+s,f(o)),t)}function d(e,t,o){return n(t)||(o=t||o,t=[]),o=o||{},e instanceof RegExp?function(e,t){var o=e.source.match(/\((?!\?)/g);if(o)for(var n=0;n<o.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(e,t)}(e,t):n(e)?function(e,t,o){for(var n=[],r=0;r<e.length;r++)n.push(d(e[r],t,o).source);return l(new RegExp("(?:"+n.join("|")+")",f(o)),t)}(e,t,o):function(e,t,o){return p(i(e,o),t,o)}(e,t,o)}},2098:(e,t,o)=>{"use strict";var n,r=o(6540),i=(n=r)&&"object"==typeof n&&"default"in n?n.default:n;function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var a=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,o){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==o&&"function"!=typeof o)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,c=[];function l(){u=e(c.map((function(e){return e.props}))),f.canUseDOM?t(u):o&&(u=o(u))}var f=function(e){var t,o;function r(){return e.apply(this,arguments)||this}o=e,(t=r).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o,r.peek=function(){return u},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,c=[],e};var s=r.prototype;return s.UNSAFE_componentWillMount=function(){c.push(this),l()},s.componentDidUpdate=function(){l()},s.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),l()},s.render=function(){return i.createElement(n,this.props)},r}(r.PureComponent);return s(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),s(f,"canUseDOM",a),f}}},6540:(e,t,o)=>{"use strict";e.exports=o(4837)},9982:(e,t,o)=>{"use strict";e.exports=o(213)},8318:function(e,t,o){!function(e){"use strict";var t,o=function(){try{if(e.URLSearchParams&&"bar"===new e.URLSearchParams("foo=bar").get("foo"))return e.URLSearchParams}catch(e){}return null}(),n=o&&"a=1"===new o({a:1}).toString(),r=o&&"+"===new o("s=%2B").get("s"),i=o&&"size"in o.prototype,s="__URLSearchParams__",a=!o||((t=new o).append("s"," &"),"s=+%26"===t.toString()),u=d.prototype,c=!(!e.Symbol||!e.Symbol.iterator);if(!(o&&n&&r&&a&&i)){u.append=function(e,t){b(this[s],e,t)},u.delete=function(e){delete this[s][e]},u.get=function(e){var t=this[s];return this.has(e)?t[e][0]:null},u.getAll=function(e){var t=this[s];return this.has(e)?t[e].slice(0):[]},u.has=function(e){return C(this[s],e)},u.set=function(e,t){this[s][e]=[""+t]},u.toString=function(){var e,t,o,n,r=this[s],i=[];for(t in r)for(o=h(t),e=0,n=r[t];e<n.length;e++)i.push(o+"="+h(n[e]));return i.join("&")};var l,f=e.Proxy&&o&&(!r||!a||!n||!i);f?(l=new Proxy(o,{construct:function(e,t){return new e(new d(t[0]).toString())}})).toString=Function.prototype.toString.bind(d):l=d,Object.defineProperty(e,"URLSearchParams",{value:l});var p=e.URLSearchParams.prototype;p.polyfill=!0,!f&&e.Symbol&&(p[e.Symbol.toStringTag]="URLSearchParams"),"forEach"in p||(p.forEach=function(e,t){var o=g(this.toString());Object.getOwnPropertyNames(o).forEach((function(n){o[n].forEach((function(o){e.call(t,o,n,this)}),this)}),this)}),"sort"in p||(p.sort=function(){var e,t,o,n=g(this.toString()),r=[];for(e in n)r.push(e);for(r.sort(),t=0;t<r.length;t++)this.delete(r[t]);for(t=0;t<r.length;t++){var i=r[t],s=n[i];for(o=0;o<s.length;o++)this.append(i,s[o])}}),"keys"in p||(p.keys=function(){var e=[];return this.forEach((function(t,o){e.push(o)})),v(e)}),"values"in p||(p.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),v(e)}),"entries"in p||(p.entries=function(){var e=[];return this.forEach((function(t,o){e.push([o,t])})),v(e)}),c&&(p[e.Symbol.iterator]=p[e.Symbol.iterator]||p.entries),"size"in p||Object.defineProperty(p,"size",{get:function(){var e=g(this.toString());if(p===this)throw new TypeError("Illegal invocation at URLSearchParams.invokeGetter");return Object.keys(e).reduce((function(t,o){return t+e[o].length}),0)}})}function d(e){((e=e||"")instanceof URLSearchParams||e instanceof d)&&(e=e.toString()),this[s]=g(e)}function h(e){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'\(\)~]|%20|%00/g,(function(e){return t[e]}))}function y(e){return e.replace(/[ +]/g,"%20").replace(/(%[a-f0-9]{2})+/gi,(function(e){return decodeURIComponent(e)}))}function v(t){var o={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return c&&(o[e.Symbol.iterator]=function(){return o}),o}function g(e){var t={};if("object"==typeof e)if(m(e))for(var o=0;o<e.length;o++){var n=e[o];if(!m(n)||2!==n.length)throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");b(t,n[0],n[1])}else for(var r in e)e.hasOwnProperty(r)&&b(t,r,e[r]);else{0===e.indexOf("?")&&(e=e.slice(1));for(var i=e.split("&"),s=0;s<i.length;s++){var a=i[s],u=a.indexOf("=");-1<u?b(t,y(a.slice(0,u)),y(a.slice(u+1))):a&&b(t,y(a),"")}}return t}function b(e,t,o){var n="string"==typeof o?o:null!=o&&"function"==typeof o.toString?o.toString():JSON.stringify(o);C(e,t)?e[t].push(n):e[t]=[n]}function m(e){return!!e&&"[object Array]"===Object.prototype.toString.call(e)}function C(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(void 0!==o.g?o.g:"undefined"!=typeof window?window:this)}}]);
//# sourceMappingURL=commons-main-index.js.bundle.js.map