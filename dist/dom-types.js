function e(e,t=''){return e.replace(/([A-Z])/g,t+'$1').toLowerCase()}function t(e,t=''){return e.split(t).map(((e,t)=>t?e[0].toUpperCase()+e.slice(1):e)).join('')}function o(e,t=!1){const o=e.replace(/\/\*(.|\s)*?\*\//g,' ').replace(/\s+/g,' ').trim();if(!o)return t?null:{};const i=o.split(';').map((e=>{const t=e.indexOf(':');return-1===t?[e.trim()]:[e.slice(0,t).trim(),e.slice(t+1).trim()]})),n={};for(const[e,o]of i)e&&o&&(n[e.replace(/\W+\w/g,(e=>e.slice(-1).toUpperCase()))]=(t=!1)||o);return t?null:n}function i(e,t,o=''){switch(typeof e){case'string':if(o)for(const i of e.split(o))i&&(t[i]=!0);else t[e]=!0;break;case'object':if(e.constructor===Object)for(const o in e)o&&e[o]&&(t[o]=!0);else for(const i of e)if(i&&'string'==typeof i)if(o)for(const e of i.split(o))e&&(t[e]=!0);else t[i]=!0}}function n(e,t){if((e=e||'')===(t=t||''))return null;const o=e.split(' '),i=t.split(' '),n={};let r=null;if(o)for(const e of o)!e||i&&i.includes(e)||(n[e]=r=!1);if(i)for(const e of i)!e||o&&o.includes(e)||(n[e]=r=!0);return null!==r?n:null}function r(e,t){const o={};let i=!1;for(const n in e){void 0!==e[n]&&void 0===t[n]&&(o[n]=void 0,i=!0)}for(const n in t){const r=t[n];e[n]!==r&&(o[n]=r,i=!0)}return i?o:null}function a(e,t,o){if(e[o]){if(!t[o])return!1;const i=e[o],n=t[o];if(i!==n){for(const e in n)if(i[e]!==n[e])return!1;for(const e in i)if(void 0===n[e]&&void 0!==i[e])return!1}}else if(t[o])return!1;return!0}Object.defineProperty(exports,'__esModule',{value:!0});const s={innerHTML:!0,outerHTML:!0,textContent:!0,innerText:!0,outerText:!0},l={autoCapitalize:'autocapitalize',autoFocus:'autofocus',contentEditable:'contenteditable',enterKeyHint:'enterkeyhint',exportParts:'exportparts',inputMode:'inputmode',itemId:'itemid',itemProp:'itemprop',itemRef:'itemref',itemScope:'itemscope',itemType:'itemtype',popOver:'popover',spellCheck:'spellcheck',tabIndex:'tabindex',virtualKeyboardPolicy:'virtualkeyboardpolicy',writingSuggestions:'writingsuggestions',acceptCharset:'accept-charset',autoComplete:'autocomplete',autoPlay:'autoplay',bgColor:'bgcolor',colSpan:'colspan',crossOrigin:'crossorigin',dateTime:'datetime',dirName:'dirname',encType:'enctype',formAction:'formaction',formEncType:'formenctype',formMethod:'formmethod',formNoValidate:'formnovalidate',formTarget:'formtarget',hrefLang:'hreflang',httpEquiv:'http-equiv',isMap:'ismap',maxLength:'maxlength',minLength:'minlength',noValidate:'novalidate',playsInline:'playsinline',readOnly:'readonly',referrerPolicy:'referrerpolicy',rowSpan:'rowspan',srcDoc:'srcdoc',srcLang:'srclang',srcSet:'srcset',useMap:'usemap',xmlBase:'xml:base',xmlLang:'xml:lang',xmlSpace:'xml:space',xmlnsXlink:'xmlns:xlink',accentHeight:'accent-height',alignmentBaseline:'alignment-baseline',allowReorder:'allow-reorder',arabicForm:'arabic-form',baselineShift:'baseline-shift',capHeight:'cap-height',clipPath:'clip-path',clipRule:'clip-rule',colorInterpolation:'color-interpolation',colorInterpolationFilters:'color-interpolation-filters',colorRendering:'color-rendering',dominantBaseline:'dominant-baseline',fillOpacity:'fill-opacity',fillRule:'fill-rule',floodColor:'flood-color',floodOpacity:'flood-opacity',fontFamily:'font-family',fontSize:'font-size',fontSizeAdjust:'font-size-adjust',fontStretch:'font-stretch',fontStyle:'font-style',fontVariant:'font-variant',fontWeight:'font-weight',glyphName:'glyph-name',glyphOrientationHorizontal:'glyph-orientation-horizontal',glyphOrientationVertical:'glyph-orientation-vertical',horizAdvX:'horiz-adv-x',horizOriginX:'horiz-origin-x',horizOriginY:'horiz-origin-y',imageRendering:'image-rendering',letterSpacing:'letter-spacing',lightingColor:'lighting-color',markerEnd:'marker-end',markerMid:'marker-mid',markerStart:'marker-start',overlinePosition:'overline-position',overlineThickness:'overline-thickness',paintOrder:'paint-order',pointerEvents:'pointer-events',shapeRendering:'shape-rendering',stopColor:'stop-color',stopOpacity:'stop-opacity',strokeDasharray:'stroke-dasharray',strokeDashoffset:'stroke-dashoffset',strokeLinecap:'stroke-linecap',strokeLinejoin:'stroke-linejoin',strokeMiterlimit:'stroke-miterlimit',strokeOpacity:'stroke-opacity',strokeWidth:'stroke-width',textAnchor:'text-anchor',textDecoration:'text-decoration',textRendering:'text-rendering',transformOrigin:'transform-origin',underlinePosition:'underline-position',underlineThickness:'underline-thickness',unicodeBidi:'unicode-bidi',unicodeRange:'unicode-range',unitsPerEm:'units-per-em',vAlphabetic:'v-alphabetic',vHanging:'v-hanging',vIdeographic:'v-ideographic',vMathematical:'v-mathematical',vectorEffect:'vector-effect',vertAdvY:'vert-adv-y',vertOriginX:'vert-origin-x',vertOriginY:'vert-origin-y',wordSpacing:'word-spacing',writingMode:'writing-mode',xlinkActuate:'xlink:actuate',xlinkArcrole:'xlink:arcrole',xlinkHref:'xlink:href',xlinkRole:'xlink:role',xlinkShow:'xlink:show',xlinkTitle:'xlink:title',xlinkType:'xlink:type'},c=['abort','activate','animationcancel','animationend','animationiteration','animationstart','auxclick','blur','canplay','canplaythrough','change','click','close','contextmenu','cuechange','dblclick','drag','dragend','dragenter','dragleave','dragover','dragstart','drop','durationchange','emptied','ended','error','focus','focusin','focusout','gotpointercapture','input','invalid','keydown','keypress','keyUp','load','loadeddata','loadedmetadata','loadstart','lostpointercapture','mousedown','mouseenter','mouseleave','mousemove','mouseout','mouseover','mouseup','mousewheel','pause','play','playing','pointercancel','pointerdown','pointerenter','pointerleave','pointermove','pointerout','pointerover','pointerup','progress','ratechange','repeat','reset','resize','scroll','securitypolicyViolation','seeked','seeking','select','show','stalled','submit','suspend','timeupdate','toggle','touchcancel','touchend','touchMove','touchstart','transitioncancel','transitionend','transitionrun','transitionstart','unload','volumechange','waiting','wheel'].reduce(((e,t)=>(e['on'+t]=t,e)),{});function d(e){var i;const n={};if(!(e instanceof Element))return n;for(const r of e.getAttributeNames())switch(r){case'style':{const t=o(e.style.cssText,!0);t&&(n.style=t);break}case'class':n.className=e.className;break;default:r.startsWith('data-')?(n.data=n.data||{},n.data[t(r.slice(5))]=e.getAttribute(r)):(n.attributes=n.attributes||{},n.attributes[r]=null!==(i=e.getAttribute(r))&&void 0!==i?i:void 0)}return n}const f={class:!0,className:!0,style:!0};exports.applyDOMProps=function(e,t,o={},i=!0){var a,l;const c={},d=(o.style||t.style?1:0)|(o.data||t.data?2:0);if(d)for(const i of 1===d?['style']:2===d?['data']:['style','data']){const n=r(o[i]||{},t[i]||{});if(n&&(c[i]=n),n&&e)if('data'===i){const t=e.dataset;if(t)for(const e in n)void 0!==n[e]?t[e]=n[e]:delete t[e]}else{const t=e.style;if(t)for(const e in n)t[e]=null!==(a=n[e])&&void 0!==a?a:null}}if(void 0!==o.className||void 0!==t.className){const i=n(o.className,t.className);if(i&&(c.classNames=i),i&&e)for(const t in i)e.classList[i[t]?'add':'remove'](t)}if(o.attributes||t.attributes){const n=r(o.attributes||{},t.attributes||{});if(n&&(c.attributes=n),n&&e)for(const t in n)s[t]?i&&console.warn('Warning: Tried to apply a protected attribute: ',t,' for element: ',e):void 0===n[t]?e.removeAttribute(t):e.setAttribute(t,n[t])}if(o.listeners||t.listeners){const i=r(o.listeners||{},t.listeners||{});if(i&&(c.attributes=i),i&&e)for(const t in i){const n=null===(l=o.listeners)||void 0===l?void 0:l[t];n&&e.removeEventListener(t,n),i[t]&&e.addEventListener(t,i[t])}}for(const e in c)return c;return null},exports.classNames=function(...e){const t={};for(const o of e)o&&i(o,t,' ');return Object.keys(t).join(' ')},exports.cleanDOMProps=function(e){var i;const n={};for(const r in e){if(f[r])if('style'===r){const t='string'==typeof e.style?o(e.style):e.style||{};for(const e in t){n.style=t;break}}else e[r]&&(n.className=n.className?n.className+' '+e[r]:e[r]);if(c[r.toLowerCase()]){if(!e[r])continue;n.listeners=n.listeners||{},n.listeners[r.toLowerCase()]=null!==(i=e[r])&&void 0!==i?i:void 0}else if(r.startsWith('data'))'-'===r[4]?(n.data=n.data||{},n.data[t(r.slice(5),'-')]=e[r]):n.data=Object.assign(Object.assign({},n.data),e.data);else{if(void 0===e[r])continue;n.attributes=n.attributes||{},n.attributes[l[r]||r.startsWith('aria')&&'-'!==r[4]&&'aria-'+r.slice(4).toLowerCase()||r]=e[r]}}return n},exports.collectNamesTo=i,exports.createDOMElement=function(e,t,o){return'svg'===e||t&&void 0!==t.ownerSVGElement?document.createElementNS(o||'http://www.w3.org/2000/svg',e):document.createElement(e)},exports.decapitalizeString=e,exports.domListenerProps=c,exports.domRenamedAttributes=l,exports.domSkipAttributes=s,exports.equalDOMProps=function(e,t){for(const o in t)if('className'===o){if((e.className||'')!==(t.className||''))return!1}else if(!a(e,t,o))return!1;for(const o in e)if(void 0===t[o]&&void 0!==e[o]&&'className'!==o)return!1;return!0},exports.equalSubDictionaries=a,exports.getClassNameDiffs=n,exports.getDictionaryDiffs=r,exports.isNodeSVG=function(e){return e&&void 0!==e.ownerSVGElement||!1},exports.parseDOMStyle=o,exports.readAsString=function t(o,i=['img']){const n=o.def;if(!n)return'';let r=n.tag,a='';if('string'!=typeof r){if(o.children)for(const e of o.children)a+=t(e);return a}let l=null;if(r)'_'===r&&(l=n.domElement||null);else{const e=n.domContent;e&&(e instanceof Node?l=e:a+=e.toString())}if(!r&&!l)return a;let f=o.domProps||{};if(l){if(l instanceof Element&&(r=l.tagName.toLowerCase()||''),!r)return l.textContent||'';const{className:e,style:t,data:o,attributes:i}=d(n.domElement);if(e&&(f.className=f.className?f.className+' '+e:e),t){f.style=f.style||{};for(const e in t)f.style[e]=t[e]}if(o){f.data=f.data||{};for(const e in o)f.data[e]=o[e]}for(const e in i)f[e]=i[e]}const{className:p,style:u,data:m,attributes:g}=f;if(a+='<'+r,p&&(a+=' class="'+p+'"'),u){let e='';for(const t in u)e+=t+': '+u[t]+';';e&&(a+=' style="'+e+'"')}if(m)for(const t in m)a+=' data-'+e(t,'-')+'="'+m[t].toString()+'"';if(g)for(let e in g)!g[e]||s[e]||c[e.toLowerCase()]||(a+=' '+e+'="'+g[e].toString()+'"');if(o.children&&void 0!==o.children[0]||i&&!i.includes(r)){a+='>';for(const e of o.children||[])a+=t(e);a+='</'+r+'>'}else a+='/>';return a},exports.readFromDOM=d,exports.recapitalizeString=t;
