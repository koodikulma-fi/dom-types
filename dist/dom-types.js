function e(e,t='-'){return e.replace(/([A-Z])/g,t+'$1').toLowerCase()}function t(e,t='-'){return e.split(t).map(((e,t)=>e?t?e[0].toUpperCase()+e.slice(1):e:'')).join('')}function o(e,t=!1){const o=e.replace(/\/\*(.|\s)*?\*\//g,' ').replace(/\s+/g,' ').trim();if(!o)return t?null:{};const i=o.split(';').map((e=>{const t=e.indexOf(':');return-1===t?[e.trim()]:[e.slice(0,t).trim(),e.slice(t+1).trim()]})),n={};for(const[e,o]of i)e&&o&&(n[e.replace(/\W+\w/g,(e=>e.slice(-1).toUpperCase()))]=(t=!1)||o);return t?null:n}function i(e,t){if((e=e||'')===(t=t||''))return null;const o=e.split(' '),i=t.split(' '),n={};let r=null;if(o)for(const e of o)!e||i&&i.includes(e)||(n[e]=r=!1);if(i)for(const e of i)!e||o&&o.includes(e)||(n[e]=r=!0);return null!==r?n:null}function n(e,t,o=''){switch(typeof t){case'string':if(o)for(const i of t.split(o))i&&(e[i]=!0);else e[t]=!0;break;case'object':if(Array.isArray(t)){for(const i of t)if(i&&'string'==typeof i)if(o)for(const t of i.split(o))t&&(e[t]=!0);else e[i]=!0}else for(const o in t)if(o&&t[o])for(const i of t[o])i&&(e[i]=!0)}}function r(e,t){const o={};let i=!1;for(const n in e){void 0!==e[n]&&void 0===t[n]&&(o[n]=(i=!0)&&void 0)}for(const n in t){const r=t[n];e[n]!==r&&(o[n]=(i=!0)&&r)}return i?o:null}function a(e,t,...o){for(const i of o){if(!e[i]&&!t[i])continue;const o=e[i]||{},n=t[i]||{};if(o!==n){for(const e in o)if(n[e]!==o[e])return!1;for(const e in n)if(o[e]!==n[e])return!1}}return!0}Object.defineProperty(exports,'__esModule',{value:!0});const s={innerHTML:!0,outerHTML:!0,textContent:!0,innerText:!0,outerText:!0},l={autoCapitalize:'autocapitalize',autoFocus:'autofocus',contentEditable:'contenteditable',enterKeyHint:'enterkeyhint',exportParts:'exportparts',inputMode:'inputmode',itemId:'itemid',itemProp:'itemprop',itemRef:'itemref',itemScope:'itemscope',itemType:'itemtype',popOver:'popover',spellCheck:'spellcheck',tabIndex:'tabindex',virtualKeyboardPolicy:'virtualkeyboardpolicy',writingSuggestions:'writingsuggestions',acceptCharset:'accept-charset',autoComplete:'autocomplete',autoPlay:'autoplay',bgColor:'bgcolor',colSpan:'colspan',crossOrigin:'crossorigin',dateTime:'datetime',dirName:'dirname',encType:'enctype',formAction:'formaction',formEncType:'formenctype',formMethod:'formmethod',formNoValidate:'formnovalidate',formTarget:'formtarget',hrefLang:'hreflang',httpEquiv:'http-equiv',isMap:'ismap',maxLength:'maxlength',minLength:'minlength',noValidate:'novalidate',playsInline:'playsinline',readOnly:'readonly',referrerPolicy:'referrerpolicy',rowSpan:'rowspan',srcDoc:'srcdoc',srcLang:'srclang',srcSet:'srcset',useMap:'usemap',xmlBase:'xml:base',xmlLang:'xml:lang',xmlSpace:'xml:space',xmlnsXlink:'xmlns:xlink',accentHeight:'accent-height',alignmentBaseline:'alignment-baseline',allowReorder:'allow-reorder',arabicForm:'arabic-form',baselineShift:'baseline-shift',capHeight:'cap-height',clipPath:'clip-path',clipRule:'clip-rule',colorInterpolation:'color-interpolation',colorInterpolationFilters:'color-interpolation-filters',colorRendering:'color-rendering',dominantBaseline:'dominant-baseline',fillOpacity:'fill-opacity',fillRule:'fill-rule',floodColor:'flood-color',floodOpacity:'flood-opacity',fontFamily:'font-family',fontSize:'font-size',fontSizeAdjust:'font-size-adjust',fontStretch:'font-stretch',fontStyle:'font-style',fontVariant:'font-variant',fontWeight:'font-weight',glyphName:'glyph-name',glyphOrientationHorizontal:'glyph-orientation-horizontal',glyphOrientationVertical:'glyph-orientation-vertical',horizAdvX:'horiz-adv-x',horizOriginX:'horiz-origin-x',horizOriginY:'horiz-origin-y',imageRendering:'image-rendering',letterSpacing:'letter-spacing',lightingColor:'lighting-color',markerEnd:'marker-end',markerMid:'marker-mid',markerStart:'marker-start',overlinePosition:'overline-position',overlineThickness:'overline-thickness',paintOrder:'paint-order',pointerEvents:'pointer-events',shapeRendering:'shape-rendering',stopColor:'stop-color',stopOpacity:'stop-opacity',strokeDasharray:'stroke-dasharray',strokeDashoffset:'stroke-dashoffset',strokeLinecap:'stroke-linecap',strokeLinejoin:'stroke-linejoin',strokeMiterlimit:'stroke-miterlimit',strokeOpacity:'stroke-opacity',strokeWidth:'stroke-width',textAnchor:'text-anchor',textDecoration:'text-decoration',textRendering:'text-rendering',transformOrigin:'transform-origin',underlinePosition:'underline-position',underlineThickness:'underline-thickness',unicodeBidi:'unicode-bidi',unicodeRange:'unicode-range',unitsPerEm:'units-per-em',vAlphabetic:'v-alphabetic',vHanging:'v-hanging',vIdeographic:'v-ideographic',vMathematical:'v-mathematical',vectorEffect:'vector-effect',vertAdvY:'vert-adv-y',vertOriginX:'vert-origin-x',vertOriginY:'vert-origin-y',wordSpacing:'word-spacing',writingMode:'writing-mode',xlinkActuate:'xlink:actuate',xlinkArcrole:'xlink:arcrole',xlinkHref:'xlink:href',xlinkRole:'xlink:role',xlinkShow:'xlink:show',xlinkTitle:'xlink:title',xlinkType:'xlink:type'},c=['abort','activate','animationcancel','animationend','animationiteration','animationstart','auxclick','blur','canplay','canplaythrough','change','click','close','contextmenu','cuechange','dblclick','drag','dragend','dragenter','dragleave','dragover','dragstart','drop','durationchange','emptied','ended','error','focus','focusin','focusout','gotpointercapture','input','invalid','keydown','keypress','keyUp','load','loadeddata','loadedmetadata','loadstart','lostpointercapture','mousedown','mouseenter','mouseleave','mousemove','mouseout','mouseover','mouseup','mousewheel','pause','play','playing','pointercancel','pointerdown','pointerenter','pointerleave','pointermove','pointerout','pointerover','pointerup','progress','ratechange','repeat','reset','resize','scroll','securitypolicyViolation','seeked','seeking','select','show','stalled','submit','suspend','timeupdate','toggle','touchcancel','touchend','touchMove','touchstart','transitioncancel','transitionend','transitionrun','transitionstart','unload','volumechange','waiting','wheel'].reduce(((e,t)=>(e['on'+t]=t,e)),{}),p={class:!0,className:!0,style:!0};function f(e){var i;const n={};if(!(e instanceof Element))return n;for(const r of e.getAttributeNames())switch(r){case'style':{const t=o(e.style.cssText,!0);t&&(n.style=t);break}case'class':n.className=e.className;break;default:r.startsWith('data-')?(n.data=n.data||{},n.data[t(r.slice(5))]=e.getAttribute(r)):(n.attributes=n.attributes||{},n.attributes[r]=null!==(i=e.getAttribute(r))&&void 0!==i?i:void 0)}return n}exports.applyDOMProps=function(e,t,o={},n=s,a=!0){var l,c;const p={},f=(o.style||t.style?1:0)|(o.data||t.data?2:0);if(f)for(const i of 1===f?['style']:2===f?['data']:['style','data']){const n=r(o[i]||{},t[i]||{});if(n&&(p[i]=n),n&&e)if('data'===i){const t=e.dataset;if(t)for(const e in n)void 0!==n[e]?t[e]=n[e]:delete t[e]}else{const t=e.style;if(t)for(const e in n)t[e]=null!==(l=n[e])&&void 0!==l?l:null}}if(o.className||t.className){const n=i(o.className,t.className);if(n&&(p.className=n),n&&e)for(const t in n)e.classList[n[t]?'add':'remove'](t)}if(o.attributes||t.attributes){const i=r(o.attributes||{},t.attributes||{});if(i&&(p.attributes=i),i&&e)for(const t in i)n[t]?a&&console.warn('Warning: Tried to apply a protected attribute: ',t,' for element: ',e):void 0===i[t]?e.removeAttribute(t):e.setAttribute(t,i[t])}if(o.listeners||t.listeners){const i=r(o.listeners||{},t.listeners||{});if(i&&(p.attributes=i),i&&e)for(const t in i){const n=null===(c=o.listeners)||void 0===c?void 0:c[t];n&&e.removeEventListener(t,n),i[t]&&e.addEventListener(t,i[t])}}for(const e in p)return p;return null},exports.camelCaseStr=t,exports.classNames=function(...e){let t='';for(const o of e)o&&('string'==typeof o?t+=' '+o:Array.isArray(o)?t+=' '+o.filter((e=>e)).join(' '):o&&o.constructor instanceof Object&&(t+=' '+Object.keys(o).filter((e=>o[e])).join(' ')));return t.trimStart().replace(/\s+/g,' ')},exports.cleanDOMProps=function(e,i=c,n=l){var r;const a={};let s;for(const l in e)if(p[l])if('style'===l){const t='string'==typeof e.style?o(e.style):e.style||{};for(const e in t){a.style=t;break}}else e[l]&&(a.className=a.className?a.className+' '+e[l]:e[l]);else if(s=i[l.toLowerCase()]){if(!e[l])continue;a.listeners=a.listeners||{},a.listeners[s]=null!==(r=e[l])&&void 0!==r?r:void 0}else if(l.startsWith('data'))'-'===l[4]?(a.data=a.data||{},a.data[t(l.slice(5))]=e[l]):a.data=Object.assign(Object.assign({},a.data),e.data);else{if(void 0===e[l])continue;a.attributes=a.attributes||{},a.attributes[n[l]||l.startsWith('aria')&&'-'!==l[4]&&'aria-'+l.slice(4).toLowerCase()||l]=e[l]}return a},exports.cleanNames=function(...e){const t={};for(const o of e)o&&n(t,o,' ');return Object.keys(t).join(' ')},exports.collectKeysTo=n,exports.createDOMElement=function(e,t,o){return'svg'===e||t&&(!0===t||void 0!==t.ownerSVGElement)?document.createElementNS(o||'http://www.w3.org/2000/svg',e):document.createElement(e)},exports.domListenerProps=c,exports.domRenamedAttributes=l,exports.domSkipAttributes=s,exports.equalDOMProps=function(e,t){return(e.className||'')===(t.className||'')&&a(e,t,'style','data','listeners','attributes')},exports.equalSubDictionaries=a,exports.getDictionaryDiffs=r,exports.getNameDiffs=i,exports.isNodeSVG=function(e){return e&&void 0!==e.ownerSVGElement||!1},exports.lowerCaseStr=e,exports.parseDOMStyle=o,exports.readDOMProps=f,exports.readDOMString=function(t,o,i,n,r=s){let a='';if(o||(o={}),!t&&(n&&n instanceof Element&&(t=n.tagName.toLowerCase()||''),!t))return(n&&n.textContent||'')+(!0===i?'':i||'');if(n){const{className:e,style:t,data:i,attributes:r}=f(n);if(e&&(o.className=o.className?o.className+' '+e:e),t){o.style=o.style||{};for(const e in t)o.style[e]=t[e]}if(i){o.data=o.data||{};for(const e in i)o.data[e]=i[e]}for(const e in r)o[e]=r[e]}const{className:l,style:p,data:d,attributes:u}=o;if(a+='<'+t,l&&(a+=' class="'+l+'"'),p){let e='';for(const t in p)e+=t+': '+p[t]+';';e&&(a+=' style="'+e+'"')}if(d)for(const t in d)a+=' data-'+e(t)+'="'+d[t].toString()+'"';if(u)for(let e in u)!u[e]||r[e]||c[e.toLowerCase()]||(a+=' '+e+'="'+u[e].toString()+'"');return i?(a+='>',!0!==i&&(a+=i),a+='</'+t+'>'):a+='/>',a};
