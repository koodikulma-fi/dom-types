function t(t,e='-'){return t.replace(/([A-Z])/g,e+'$1').toLowerCase()}function e(t,e='-'){return t.split(e).map(((t,e)=>t?e?t[0].toUpperCase()+t.slice(1):t:'')).join('')}function i(t,e=!1){const i=t.replace(/\/\*(.|\s)*?\*\//g,' ').replace(/\s+/g,' ').trim();if(!i)return e?null:{};const n=i.split(';').map((t=>{const e=t.indexOf(':');return-1===e?[t.trim()]:[t.slice(0,e).trim(),t.slice(e+1).trim()]})),o={};for(const[t,i]of n)t&&i&&(o[t.replace(/\W+\w/g,(t=>t.slice(-1).toUpperCase()))]=(e=!1)||i);return e?null:o}function n(...t){const e={};for(const i of t)i&&a(e,i,' ');return Object.keys(e).join(' ')}function o(...t){let e='';for(const i of t)i&&('string'==typeof i?e+=' '+i:i[Symbol.iterator]&&'function'==typeof i[Symbol.iterator]?e+=' '+[...i].filter((t=>t)).join(' '):i&&'object'==typeof i&&(e+=' '+Object.keys(i).filter((t=>i[t])).join(' ')));return e.trimStart().replace(/\s+/g,' ')}function r(t,e){if((t=t||'')===(e=e||''))return null;const i=t.split(' '),n=e.split(' '),o={};let r=null;if(i)for(const t of i)!t||n&&n.includes(t)||(o[t]=r=!1);if(n)for(const t of n)!t||i&&i.includes(t)||(o[t]=r=!0);return null!==r?o:null}function a(t,e,i=''){switch(typeof e){case'string':if(i)for(const n of e.split(i))n&&(t[n]=!0);else t[e]=!0;break;case'object':if(e[Symbol.iterator]&&'function'==typeof e[Symbol.iterator]){for(const n of e)if(n&&'string'==typeof n)if(i)for(const e of n.split(i))e&&(t[e]=!0);else t[n]=!0}else for(const i in e)if(i&&e[i])for(const n of e[i])n&&(t[n]=!0)}}function s(t,e){const i={};let n=!1;for(const o in t){void 0!==t[o]&&void 0===e[o]&&(i[o]=(n=!0)&&void 0)}for(const o in e){const r=e[o];t[o]!==r&&(i[o]=(n=!0)&&r)}return n?i:null}function l(t,e,...i){for(const n of i){if(!t[n]&&!e[n])continue;const i=t[n]||{},o=e[n]||{};if(i!==o){for(const t in i)if(o[t]!==i[t])return!1;for(const t in o)if(i[t]!==o[t])return!1}}return!0}function c(t,e,i){return'svg'===t||e&&(!0===e||void 0!==e.ownerSVGElement)?document.createElementNS(i||'http://www.w3.org/2000/svg',t):document.createElement(t)}function f(t){return t&&void 0!==t.ownerSVGElement||!1}const u={innerHTML:!0,outerHTML:!0,textContent:!0,innerText:!0,outerText:!0},d={autoCapitalize:'autocapitalize',autoFocus:'autofocus',contentEditable:'contenteditable',enterKeyHint:'enterkeyhint',exportParts:'exportparts',inputMode:'inputmode',itemId:'itemid',itemProp:'itemprop',itemRef:'itemref',itemScope:'itemscope',itemType:'itemtype',popOver:'popover',spellCheck:'spellcheck',tabIndex:'tabindex',virtualKeyboardPolicy:'virtualkeyboardpolicy',writingSuggestions:'writingsuggestions',acceptCharset:'accept-charset',autoComplete:'autocomplete',autoPlay:'autoplay',bgColor:'bgcolor',colSpan:'colspan',crossOrigin:'crossorigin',dateTime:'datetime',dirName:'dirname',encType:'enctype',formAction:'formaction',formEncType:'formenctype',formMethod:'formmethod',formNoValidate:'formnovalidate',formTarget:'formtarget',hrefLang:'hreflang',httpEquiv:'http-equiv',isMap:'ismap',maxLength:'maxlength',minLength:'minlength',noValidate:'novalidate',playsInline:'playsinline',readOnly:'readonly',referrerPolicy:'referrerpolicy',rowSpan:'rowspan',srcDoc:'srcdoc',srcLang:'srclang',srcSet:'srcset',useMap:'usemap',xmlBase:'xml:base',xmlLang:'xml:lang',xmlSpace:'xml:space',xmlnsXlink:'xmlns:xlink',accentHeight:'accent-height',alignmentBaseline:'alignment-baseline',allowReorder:'allow-reorder',arabicForm:'arabic-form',baselineShift:'baseline-shift',capHeight:'cap-height',clipPath:'clip-path',clipRule:'clip-rule',colorInterpolation:'color-interpolation',colorInterpolationFilters:'color-interpolation-filters',colorRendering:'color-rendering',dominantBaseline:'dominant-baseline',fillOpacity:'fill-opacity',fillRule:'fill-rule',floodColor:'flood-color',floodOpacity:'flood-opacity',fontFamily:'font-family',fontSize:'font-size',fontSizeAdjust:'font-size-adjust',fontStretch:'font-stretch',fontStyle:'font-style',fontVariant:'font-variant',fontWeight:'font-weight',glyphName:'glyph-name',glyphOrientationHorizontal:'glyph-orientation-horizontal',glyphOrientationVertical:'glyph-orientation-vertical',horizAdvX:'horiz-adv-x',horizOriginX:'horiz-origin-x',horizOriginY:'horiz-origin-y',imageRendering:'image-rendering',letterSpacing:'letter-spacing',lightingColor:'lighting-color',markerEnd:'marker-end',markerMid:'marker-mid',markerStart:'marker-start',overlinePosition:'overline-position',overlineThickness:'overline-thickness',paintOrder:'paint-order',pointerEvents:'pointer-events',shapeRendering:'shape-rendering',stopColor:'stop-color',stopOpacity:'stop-opacity',strokeDasharray:'stroke-dasharray',strokeDashoffset:'stroke-dashoffset',strokeLinecap:'stroke-linecap',strokeLinejoin:'stroke-linejoin',strokeMiterlimit:'stroke-miterlimit',strokeOpacity:'stroke-opacity',strokeWidth:'stroke-width',textAnchor:'text-anchor',textDecoration:'text-decoration',textRendering:'text-rendering',transformOrigin:'transform-origin',underlinePosition:'underline-position',underlineThickness:'underline-thickness',unicodeBidi:'unicode-bidi',unicodeRange:'unicode-range',unitsPerEm:'units-per-em',vAlphabetic:'v-alphabetic',vHanging:'v-hanging',vIdeographic:'v-ideographic',vMathematical:'v-mathematical',vectorEffect:'vector-effect',vertAdvY:'vert-adv-y',vertOriginX:'vert-origin-x',vertOriginY:'vert-origin-y',wordSpacing:'word-spacing',writingMode:'writing-mode',xlinkActuate:'xlink:actuate',xlinkArcrole:'xlink:arcrole',xlinkHref:'xlink:href',xlinkRole:'xlink:role',xlinkShow:'xlink:show',xlinkTitle:'xlink:title',xlinkType:'xlink:type'},p=['abort','activate','animationcancel','animationend','animationiteration','animationstart','auxclick','blur','canplay','canplaythrough','change','click','close','contextmenu','cuechange','dblclick','drag','dragend','dragenter','dragleave','dragover','dragstart','drop','durationchange','emptied','ended','error','focus','focusin','focusout','gotpointercapture','input','invalid','keydown','keypress','keyUp','load','loadeddata','loadedmetadata','loadstart','lostpointercapture','mousedown','mouseenter','mouseleave','mousemove','mouseout','mouseover','mouseup','mousewheel','pause','play','playing','pointercancel','pointerdown','pointerenter','pointerleave','pointermove','pointerout','pointerover','pointerup','progress','ratechange','repeat','reset','resize','scroll','securitypolicyViolation','seeked','seeking','select','show','stalled','submit','suspend','timeupdate','toggle','touchcancel','touchend','touchMove','touchstart','transitioncancel','transitionend','transitionrun','transitionstart','unload','volumechange','waiting','wheel'].reduce(((t,e)=>(t['on'+e]=e,t)),{}),m={class:!0,className:!0,style:!0};function g(t){var n;const o={};if(!(t instanceof Element))return o;for(const r of t.getAttributeNames())switch(r){case'style':{const e=i(t.style.cssText,!0);e&&(o.style=e);break}case'class':o.className=t.className;break;default:r.startsWith('data-')?(o.data=o.data||{},o.data[e(r.slice(5))]=t.getAttribute(r)):(o.attributes=o.attributes||{},o.attributes[r]=null!==(n=t.getAttribute(r))&&void 0!==n?n:void 0)}return o}function y(t,n=p,o=d){var r;const a={};let s;for(const l in t)if(m[l])if('style'===l){const e='string'==typeof t.style?i(t.style):t.style||{};for(const t in e){a.style=e;break}}else t[l]&&(a.className=a.className?a.className+' '+t[l]:t[l]);else if(s=n[l.toLowerCase()]){if(!t[l])continue;a.listeners=a.listeners||{},a.listeners[s]=null!==(r=t[l])&&void 0!==r?r:void 0}else if(l.startsWith('data'))'-'===l[4]?(a.data=a.data||{},a.data[e(l.slice(5))]=t[l]):a.data=Object.assign(Object.assign({},a.data),t.data);else{if(void 0===t[l])continue;a.attributes=a.attributes||{},a.attributes[o[l]||l.startsWith('aria')&&'-'!==l[4]&&'aria-'+l.slice(4).toLowerCase()||l]=t[l]}return a}function h(t,e){return(t.className||'')===(e.className||'')&&l(t,e,'style','data','listeners','attributes')}function v(t,e,i={},n=!0,o=u){var a,l;const c={},f=(i.style||e.style?1:0)|(i.data||e.data?2:0);if(f)for(const n of 1===f?['style']:2===f?['data']:['style','data']){const o=s(i[n]||{},e[n]||{});if(o&&(c[n]=o),o&&t)if('data'===n){const e=t.dataset;if(e)for(const t in o)void 0!==o[t]?e[t]=o[t]:delete e[t]}else{const e=t.style;if(e)for(const t in o)e[t]=null!==(a=o[t])&&void 0!==a?a:null}}if(i.className||e.className){const n=r(i.className,e.className);if(n&&(c.className=n),n&&t)for(const e in n)t.classList[n[e]?'add':'remove'](e)}if(i.attributes||e.attributes){const r=s(i.attributes||{},e.attributes||{});if(r&&(c.attributes=r),r&&t)for(const e in r)o[e]?n&&console.warn('Warning: Tried to apply a protected attribute: ',e,' for element: ',t):void 0===r[e]?t.removeAttribute(e):t.setAttribute(e,r[e])}if(i.listeners||e.listeners){const n=s(i.listeners||{},e.listeners||{});if(n&&(c.attributes=n),n&&t)for(const e in n){const o=null===(l=i.listeners)||void 0===l?void 0:l[e];o&&t.removeEventListener(e,o),n[e]&&t.addEventListener(e,n[e])}}for(const t in c)return c;return null}function k(e,i,n,o,r=u){let a='';if(i||(i={}),!e&&(o&&o instanceof Element&&(e=o.tagName.toLowerCase()||''),!e))return(o&&o.textContent||'')+(!0===n?'':n||'');if(o){const{className:t,style:e,data:n,attributes:r}=g(o);if(t&&(i.className=i.className?i.className+' '+t:t),e){i.style=i.style||{};for(const t in e)i.style[t]=e[t]}if(n){i.data=i.data||{};for(const t in n)i.data[t]=n[t]}for(const t in r)i[t]=r[t]}const{className:s,style:l,data:c,attributes:f}=i;if(a+='<'+e,s&&(a+=' class="'+s+'"'),l){let t='';for(const e in l)t+=e+': '+l[e]+';';t&&(a+=' style="'+t+'"')}if(c)for(const e in c)a+=' data-'+t(e)+'="'+c[e].toString()+'"';if(f)for(let t in f)!f[t]||r[t]||p[t.toLowerCase()]||(a+=' '+t+'="'+f[t].toString()+'"');return n?(a+='>',!0!==n&&(a+=n),a+='</'+e+'>'):a+='/>',a}export{v as applyDOMProps,e as camelCaseStr,o as classNames,y as cleanDOMProps,n as cleanNames,a as collectKeysTo,c as createDOMElement,p as domListenerProps,d as domRenamedAttributes,u as domSkipAttributes,h as equalDOMProps,l as equalSubDictionaries,s as getDictionaryDiffs,r as getNameDiffs,f as isNodeSVG,t as lowerCaseStr,i as parseDOMStyle,g as readDOMProps,k as readDOMString};
