function e(e,t=''){return e.replace(/([A-Z])/g,t+'$1').toLowerCase()}function t(e,t=''){return e.split(t).map(((e,t)=>t?e[0].toUpperCase()+e.slice(1):e)).join('')}function i(e,t=!1){const i=e.replace(/\/\*(.|\s)*?\*\//g,' ').replace(/\s+/g,' ').trim();if(!i)return t?null:{};const n=i.split(';').map((e=>{const t=e.indexOf(':');return-1===t?[e.trim()]:[e.slice(0,t).trim(),e.slice(t+1).trim()]})),o={};for(const[e,i]of n)e&&i&&(o[e.replace(/\W+\w/g,(e=>e.slice(-1).toUpperCase()))]=(t=!1)||i);return t?null:o}function n(...e){const t={};for(const i of e)i&&o(i,t,' ');return Object.keys(t).join(' ')}function o(e,t,i=''){switch(typeof e){case'string':if(i)for(const n of e.split(i))n&&(t[n]=!0);else t[e]=!0;break;case'object':if(e.constructor===Object)for(const i in e)i&&e[i]&&(t[i]=!0);else for(const n of e)if(n&&'string'==typeof n)if(i)for(const e of n.split(i))e&&(t[e]=!0);else t[n]=!0}}function r(e,t){if((e=e||'')===(t=t||''))return null;const i=e.split(' '),n=t.split(' '),o={};let r=null;if(i)for(const e of i)!e||n&&n.includes(e)||(o[e]=r=!1);if(n)for(const e of n)!e||i&&i.includes(e)||(o[e]=r=!0);return null!==r?o:null}function a(e,t){const i={};let n=!1;for(const o in e){void 0!==e[o]&&void 0===t[o]&&(i[o]=(n=!0)&&void 0)}for(const o in t){const r=t[o];e[o]!==r&&(i[o]=(n=!0)&&r)}return n?i:null}function s(e,t,i){if(e[i]){if(!t[i])return!1;const n=e[i],o=t[i];if(n!==o){for(const e in o)if(n[e]!==o[e])return!1;for(const e in n)if(void 0===o[e]&&void 0!==n[e])return!1}}else if(t[i])return!1;return!0}function l(e,t,i){return'svg'===e||t&&void 0!==t.ownerSVGElement?document.createElementNS(i||'http://www.w3.org/2000/svg',e):document.createElement(e)}function c(e){return e&&void 0!==e.ownerSVGElement||!1}const f={innerHTML:!0,outerHTML:!0,textContent:!0,innerText:!0,outerText:!0},d={autoCapitalize:'autocapitalize',autoFocus:'autofocus',contentEditable:'contenteditable',enterKeyHint:'enterkeyhint',exportParts:'exportparts',inputMode:'inputmode',itemId:'itemid',itemProp:'itemprop',itemRef:'itemref',itemScope:'itemscope',itemType:'itemtype',popOver:'popover',spellCheck:'spellcheck',tabIndex:'tabindex',virtualKeyboardPolicy:'virtualkeyboardpolicy',writingSuggestions:'writingsuggestions',acceptCharset:'accept-charset',autoComplete:'autocomplete',autoPlay:'autoplay',bgColor:'bgcolor',colSpan:'colspan',crossOrigin:'crossorigin',dateTime:'datetime',dirName:'dirname',encType:'enctype',formAction:'formaction',formEncType:'formenctype',formMethod:'formmethod',formNoValidate:'formnovalidate',formTarget:'formtarget',hrefLang:'hreflang',httpEquiv:'http-equiv',isMap:'ismap',maxLength:'maxlength',minLength:'minlength',noValidate:'novalidate',playsInline:'playsinline',readOnly:'readonly',referrerPolicy:'referrerpolicy',rowSpan:'rowspan',srcDoc:'srcdoc',srcLang:'srclang',srcSet:'srcset',useMap:'usemap',xmlBase:'xml:base',xmlLang:'xml:lang',xmlSpace:'xml:space',xmlnsXlink:'xmlns:xlink',accentHeight:'accent-height',alignmentBaseline:'alignment-baseline',allowReorder:'allow-reorder',arabicForm:'arabic-form',baselineShift:'baseline-shift',capHeight:'cap-height',clipPath:'clip-path',clipRule:'clip-rule',colorInterpolation:'color-interpolation',colorInterpolationFilters:'color-interpolation-filters',colorRendering:'color-rendering',dominantBaseline:'dominant-baseline',fillOpacity:'fill-opacity',fillRule:'fill-rule',floodColor:'flood-color',floodOpacity:'flood-opacity',fontFamily:'font-family',fontSize:'font-size',fontSizeAdjust:'font-size-adjust',fontStretch:'font-stretch',fontStyle:'font-style',fontVariant:'font-variant',fontWeight:'font-weight',glyphName:'glyph-name',glyphOrientationHorizontal:'glyph-orientation-horizontal',glyphOrientationVertical:'glyph-orientation-vertical',horizAdvX:'horiz-adv-x',horizOriginX:'horiz-origin-x',horizOriginY:'horiz-origin-y',imageRendering:'image-rendering',letterSpacing:'letter-spacing',lightingColor:'lighting-color',markerEnd:'marker-end',markerMid:'marker-mid',markerStart:'marker-start',overlinePosition:'overline-position',overlineThickness:'overline-thickness',paintOrder:'paint-order',pointerEvents:'pointer-events',shapeRendering:'shape-rendering',stopColor:'stop-color',stopOpacity:'stop-opacity',strokeDasharray:'stroke-dasharray',strokeDashoffset:'stroke-dashoffset',strokeLinecap:'stroke-linecap',strokeLinejoin:'stroke-linejoin',strokeMiterlimit:'stroke-miterlimit',strokeOpacity:'stroke-opacity',strokeWidth:'stroke-width',textAnchor:'text-anchor',textDecoration:'text-decoration',textRendering:'text-rendering',transformOrigin:'transform-origin',underlinePosition:'underline-position',underlineThickness:'underline-thickness',unicodeBidi:'unicode-bidi',unicodeRange:'unicode-range',unitsPerEm:'units-per-em',vAlphabetic:'v-alphabetic',vHanging:'v-hanging',vIdeographic:'v-ideographic',vMathematical:'v-mathematical',vectorEffect:'vector-effect',vertAdvY:'vert-adv-y',vertOriginX:'vert-origin-x',vertOriginY:'vert-origin-y',wordSpacing:'word-spacing',writingMode:'writing-mode',xlinkActuate:'xlink:actuate',xlinkArcrole:'xlink:arcrole',xlinkHref:'xlink:href',xlinkRole:'xlink:role',xlinkShow:'xlink:show',xlinkTitle:'xlink:title',xlinkType:'xlink:type'},u=['abort','activate','animationcancel','animationend','animationiteration','animationstart','auxclick','blur','canplay','canplaythrough','change','click','close','contextmenu','cuechange','dblclick','drag','dragend','dragenter','dragleave','dragover','dragstart','drop','durationchange','emptied','ended','error','focus','focusin','focusout','gotpointercapture','input','invalid','keydown','keypress','keyUp','load','loadeddata','loadedmetadata','loadstart','lostpointercapture','mousedown','mouseenter','mouseleave','mousemove','mouseout','mouseover','mouseup','mousewheel','pause','play','playing','pointercancel','pointerdown','pointerenter','pointerleave','pointermove','pointerout','pointerover','pointerup','progress','ratechange','repeat','reset','resize','scroll','securitypolicyViolation','seeked','seeking','select','show','stalled','submit','suspend','timeupdate','toggle','touchcancel','touchend','touchMove','touchstart','transitioncancel','transitionend','transitionrun','transitionstart','unload','volumechange','waiting','wheel'].reduce(((e,t)=>(e['on'+t]=t,e)),{});function p(e){var n;const o={};if(!(e instanceof Element))return o;for(const r of e.getAttributeNames())switch(r){case'style':{const t=i(e.style.cssText,!0);t&&(o.style=t);break}case'class':o.className=e.className;break;default:r.startsWith('data-')?(o.data=o.data||{},o.data[t(r.slice(5))]=e.getAttribute(r)):(o.attributes=o.attributes||{},o.attributes[r]=null!==(n=e.getAttribute(r))&&void 0!==n?n:void 0)}return o}function m(t,i,n,o){let r='';if(i||(i={}),!t&&(o instanceof Element&&(t=o.tagName.toLowerCase()||''),!t))return(o&&o.textContent||'')+(!0===n?'':n||'');if(o){const{className:e,style:t,data:n,attributes:r}=p(o);if(e&&(i.className=i.className?i.className+' '+e:e),t){i.style=i.style||{};for(const e in t)i.style[e]=t[e]}if(n){i.data=i.data||{};for(const e in n)i.data[e]=n[e]}for(const e in r)i[e]=r[e]}const{className:a,style:s,data:l,attributes:c}=i;if(r+='<'+t,a&&(r+=' class="'+a+'"'),s){let e='';for(const t in s)e+=t+': '+s[t]+';';e&&(r+=' style="'+e+'"')}if(l)for(const t in l)r+=' data-'+e(t,'-')+'="'+l[t].toString()+'"';if(c)for(let e in c)!c[e]||f[e]||u[e.toLowerCase()]||(r+=' '+e+'="'+c[e].toString()+'"');return n?(r+='>',!0!==n&&(r+=n),r+='</'+t+'>'):r+='/>',r}const g={class:!0,className:!0,style:!0};function h(e){var n;const o={};let r;for(const a in e)if(g[a])if('style'===a){const t='string'==typeof e.style?i(e.style):e.style||{};for(const e in t){o.style=t;break}}else e[a]&&(o.className=o.className?o.className+' '+e[a]:e[a]);else if(r=u[a.toLowerCase()]){if(!e[a])continue;o.listeners=o.listeners||{},o.listeners[r]=null!==(n=e[a])&&void 0!==n?n:void 0}else if(a.startsWith('data'))'-'===a[4]?(o.data=o.data||{},o.data[t(a.slice(5),'-')]=e[a]):o.data=Object.assign(Object.assign({},o.data),e.data);else{if(void 0===e[a])continue;o.attributes=o.attributes||{},o.attributes[d[a]||a.startsWith('aria')&&'-'!==a[4]&&'aria-'+a.slice(4).toLowerCase()||a]=e[a]}return o}function y(e,t){for(const i in t)if('className'===i){if((e.className||'')!==(t.className||''))return!1}else if(!s(e,t,i))return!1;for(const i in e)if(void 0===t[i]&&void 0!==e[i]&&'className'!==i)return!1;return!0}function v(e,t,i={},n=!0){var o,s;const l={},c=(i.style||t.style?1:0)|(i.data||t.data?2:0);if(c)for(const n of 1===c?['style']:2===c?['data']:['style','data']){const r=a(i[n]||{},t[n]||{});if(r&&(l[n]=r),r&&e)if('data'===n){const t=e.dataset;if(t)for(const e in r)void 0!==r[e]?t[e]=r[e]:delete t[e]}else{const t=e.style;if(t)for(const e in r)t[e]=null!==(o=r[e])&&void 0!==o?o:null}}if(i.className||t.className){const n=r(i.className,t.className);if(n&&(l.classNames=n),n&&e)for(const t in n)e.classList[n[t]?'add':'remove'](t)}if(i.attributes||t.attributes){const o=a(i.attributes||{},t.attributes||{});if(o&&(l.attributes=o),o&&e)for(const t in o)f[t]?n&&console.warn('Warning: Tried to apply a protected attribute: ',t,' for element: ',e):void 0===o[t]?e.removeAttribute(t):e.setAttribute(t,o[t])}if(i.listeners||t.listeners){const n=a(i.listeners||{},t.listeners||{});if(n&&(l.attributes=n),n&&e)for(const t in n){const o=null===(s=i.listeners)||void 0===s?void 0:s[t];o&&e.removeEventListener(t,o),n[t]&&e.addEventListener(t,n[t])}}for(const e in l)return l;return null}export{v as applyDOMProps,n as classNames,h as cleanDOMProps,o as collectNamesTo,l as createDOMElement,e as decapitalizeString,u as domListenerProps,d as domRenamedAttributes,f as domSkipAttributes,y as equalDOMProps,s as equalSubDictionaries,r as getClassNameDiffs,a as getDictionaryDiffs,c as isNodeSVG,i as parseDOMStyle,m as readDOMString,p as readFromDOM,t as recapitalizeString};
