function lowerCaseStr(str,delimiter='-'){return str.replace(/([A-Z])/g,delimiter+'$1').toLowerCase()}function camelCaseStr(str,splitter='-'){return str.split(splitter).map(((s,i)=>s?i?s[0].toUpperCase()+s.slice(1):s:'')).join('')}function parseDOMStyle(cssText,nullIfEmpty=!1){const text=cssText.replace(/\/\*(.|\s)*?\*\//g,' ').replace(/\s+/g,' ').trim();if(!text)return nullIfEmpty?null:{};const pairs=text.split(';').map((o=>{const i=o.indexOf(':');return-1===i?[o.trim()]:[o.slice(0,i).trim(),o.slice(i+1).trim()]})),style={};for(const[prop,val]of pairs)prop&&val&&(style[prop.replace(/\W+\w/g,(match=>match.slice(-1).toUpperCase()))]=(nullIfEmpty=!1)||val);return nullIfEmpty?null:style}function cleanNames(...names){const record={};for(const name of names)name&&collectKeysTo(record,name,' ');return Object.keys(record).join(' ')}function getNameDiffs(origName,newName,splitter=' '){if((origName=origName||'')===(newName=newName||''))return null;const origNames=splitter?origName.split(splitter):[origName],newNames=splitter?newName.split(splitter):[newName],diffs={};let did=null;if(origNames)for(const name of origNames)!name||newNames&&newNames.includes(name)||(diffs[name]=did=!1);if(newNames)for(const name of newNames)!name||origNames&&origNames.includes(name)||(diffs[name]=did=!0);return null!==did?diffs:null}function collectKeysTo(record,keyLikes,keySplitter=''){switch(typeof keyLikes){case'string':for(const k of keySplitter?keyLikes.split(keySplitter):[keyLikes])k&&(record[k]=!0);break;case'object':if(keyLikes[Symbol.iterator]&&'function'==typeof keyLikes[Symbol.iterator]){for(const key of keyLikes)if(key&&'string'==typeof key)for(const k of keySplitter?key.split(keySplitter):[key])k&&(record[k]=!0)}else for(const key in keyLikes)if(key&&keyLikes[key])for(const k of keySplitter?key.split(keySplitter):[key])k&&(record[k]=!0)}}function getDictionaryDiffs(orig,update){const diffs={};let hasDiffs=!1;for(const prop in orig){void 0!==orig[prop]&&void 0===update[prop]&&(diffs[prop]=(hasDiffs=!0)&&void 0)}for(const prop in update){const newValue=update[prop];orig[prop]!==newValue&&(diffs[prop]=(hasDiffs=!0)&&newValue)}return hasDiffs?diffs:null}function equalSubDictionaries(a,b,...props){for(const prop of props){if(!a[prop]&&!b[prop])continue;const aData=a[prop]||{},bData=b[prop]||{};if(aData!==bData){for(const p in aData)if(bData[p]!==aData[p])return!1;for(const p in bData)if(aData[p]!==bData[p])return!1}}return!0}Object.defineProperty(exports,'__esModule',{value:!0});const domSkipAttributes={innerHTML:!0,outerHTML:!0,textContent:!0,innerText:!0,outerText:!0},domDirectAttributes={value:!0},domFalseStrAttributes={async:!0,autocomplete:!0,autoplay:!0,contenteditable:!0,checked:!0,controls:!0,default:!0,defer:!0,disabled:!0,draggable:!0,hidden:!0,insert:!0,ismap:!0,loop:!0,multiple:!0,muted:!0,novalidate:!0,open:!0,playsinline:!0,required:!0,reversed:!0,selected:!0,spellcheck:!0,writingsuggestions:!0},domRenamedAttributes={autoCapitalize:'autocapitalize',autoFocus:'autofocus',contentEditable:'contenteditable',enterKeyHint:'enterkeyhint',exportParts:'exportparts',inputMode:'inputmode',itemId:'itemid',itemProp:'itemprop',itemRef:'itemref',itemScope:'itemscope',itemType:'itemtype',popOver:'popover',spellCheck:'spellcheck',tabIndex:'tabindex',virtualKeyboardPolicy:'virtualkeyboardpolicy',writingSuggestions:'writingsuggestions',acceptCharset:'accept-charset',autoComplete:'autocomplete',autoPlay:'autoplay',bgColor:'bgcolor',colSpan:'colspan',crossOrigin:'crossorigin',dateTime:'datetime',dirName:'dirname',encType:'enctype',formAction:'formaction',formEncType:'formenctype',formMethod:'formmethod',formNoValidate:'formnovalidate',formTarget:'formtarget',hrefLang:'hreflang',httpEquiv:'http-equiv',isMap:'ismap',maxLength:'maxlength',minLength:'minlength',noValidate:'novalidate',playsInline:'playsinline',readOnly:'readonly',referrerPolicy:'referrerpolicy',rowSpan:'rowspan',srcDoc:'srcdoc',srcLang:'srclang',srcSet:'srcset',useMap:'usemap',xmlBase:'xml:base',xmlLang:'xml:lang',xmlSpace:'xml:space',xmlnsXlink:'xmlns:xlink',accentHeight:'accent-height',alignmentBaseline:'alignment-baseline',allowReorder:'allow-reorder',arabicForm:'arabic-form',baselineShift:'baseline-shift',capHeight:'cap-height',clipPath:'clip-path',clipRule:'clip-rule',colorInterpolation:'color-interpolation',colorInterpolationFilters:'color-interpolation-filters',colorRendering:'color-rendering',dominantBaseline:'dominant-baseline',fillOpacity:'fill-opacity',fillRule:'fill-rule',floodColor:'flood-color',floodOpacity:'flood-opacity',fontFamily:'font-family',fontSize:'font-size',fontSizeAdjust:'font-size-adjust',fontStretch:'font-stretch',fontStyle:'font-style',fontVariant:'font-variant',fontWeight:'font-weight',glyphName:'glyph-name',glyphOrientationHorizontal:'glyph-orientation-horizontal',glyphOrientationVertical:'glyph-orientation-vertical',horizAdvX:'horiz-adv-x',horizOriginX:'horiz-origin-x',horizOriginY:'horiz-origin-y',imageRendering:'image-rendering',letterSpacing:'letter-spacing',lightingColor:'lighting-color',markerEnd:'marker-end',markerMid:'marker-mid',markerStart:'marker-start',overlinePosition:'overline-position',overlineThickness:'overline-thickness',paintOrder:'paint-order',pointerEvents:'pointer-events',shapeRendering:'shape-rendering',stopColor:'stop-color',stopOpacity:'stop-opacity',strokeDashArray:'stroke-dasharray',strokeDashOffset:'stroke-dashoffset',strokeLineCap:'stroke-linecap',strokeLineJoin:'stroke-linejoin',strokeMiterLimit:'stroke-miterlimit',strokeOpacity:'stroke-opacity',strokeWidth:'stroke-width',textAnchor:'text-anchor',textDecoration:'text-decoration',textRendering:'text-rendering',transformOrigin:'transform-origin',underlinePosition:'underline-position',underlineThickness:'underline-thickness',unicodeBidi:'unicode-bidi',unicodeRange:'unicode-range',unitsPerEm:'units-per-em',vAlphabetic:'v-alphabetic',vHanging:'v-hanging',vIdeographic:'v-ideographic',vMathematical:'v-mathematical',vectorEffect:'vector-effect',vertAdvY:'vert-adv-y',vertOriginX:'vert-origin-x',vertOriginY:'vert-origin-y',wordSpacing:'word-spacing',writingMode:'writing-mode',xlinkActuate:'xlink:actuate',xlinkArcrole:'xlink:arcrole',xlinkHref:'xlink:href',xlinkRole:'xlink:role',xlinkShow:'xlink:show',xlinkTitle:'xlink:title',xlinkType:'xlink:type'},domListenerProps=['abort','activate','animationcancel','animationend','animationiteration','animationstart','auxclick','beforeinput','beforetoggle','begin','blur','cancel','canplay','canplaythrough','change','click','close','contextlost','contextmenu','contextrestored','copy','cuechange','cut','dblclick','drag','dragend','dragenter','dragleave','dragover','dragstart','drop','durationchange','emptied','ended','error','focus','focusin','focusout','formdata','gotpointercapture','input','invalid','keydown','keypress','keyup','load','loadeddata','loadedmetadata','loadstart','lostpointercapture','mousedown','mouseenter','mouseleave','mousemove','mouseout','mouseover','mouseup','mousewheel','paste','pause','play','playing','pointercancel','pointerdown','pointerenter','pointerleave','pointermove','pointerout','pointerover','pointerup','progress','ratechange','repeat','reset','resize','scroll','scrollend','securitypolicyviolation','seeked','seeking','select','selectionchange','selectstart','show','slotchange','stalled','submit','suspend','timeupdate','toggle','touchcancel','touchend','touchmove','touchstart','transitioncancel','transitionend','transitionrun','transitionstart','unload','volumechange','waiting','webkitanimationend','webkitanimationiteration','webkitanimationstart','webkittransitionend','wheel'].reduce(((acc,evName)=>(acc['on'+evName]=evName,acc)),{}),cssProps={class:!0,className:!0,style:!0};function readDOMProps(node){var _a;const domProps={};if(!node.getAttributeNames)return domProps;for(const attr of node.getAttributeNames())switch(attr){case'style':{const style=parseDOMStyle(node.style.cssText,!0);style&&(domProps.style=style);break}case'class':domProps.className=node.className;break;default:attr.startsWith('data-')?(domProps.data=domProps.data||{},domProps.data[camelCaseStr(attr.slice(5))]=node.getAttribute(attr)):(domProps.attributes=domProps.attributes||{},domProps.attributes[attr]=null!==(_a=node.getAttribute(attr))&&void 0!==_a?_a:void 0)}return domProps}exports.applyDOMProps=function applyDOMProps(domElement,newProps,oldProps={},logWarnings=!0){var _a,_b;const diffs={},runStyleData=(oldProps.style||newProps.style?1:0)|(oldProps.data||newProps.data?2:0);if(runStyleData)for(const attr of 1===runStyleData?['style']:2===runStyleData?['data']:['style','data']){const subDiffs=getDictionaryDiffs(oldProps[attr]||{},newProps[attr]||{});if(subDiffs&&(diffs[attr]=subDiffs),subDiffs&&domElement)if('data'===attr){const dMap=domElement.dataset;if(dMap)for(const p in subDiffs)void 0!==subDiffs[p]?dMap[p]=subDiffs[p]:delete dMap[p]}else{const s=domElement.style;if(s)for(const p in subDiffs)s[p]=null!==(_a=subDiffs[p])&&void 0!==_a?_a:null}}if(oldProps.className||newProps.className){const classDiffs=getNameDiffs(oldProps.className,newProps.className);if(classDiffs&&(diffs.className=classDiffs),classDiffs&&domElement)for(const name in classDiffs)domElement.classList[classDiffs[name]?'add':'remove'](name)}if(oldProps.attributes||newProps.attributes){const subDiffs=getDictionaryDiffs(oldProps.attributes||{},newProps.attributes||{});if(subDiffs&&(diffs.attributes=subDiffs),subDiffs&&domElement)for(const attr in subDiffs){if(domSkipAttributes[attr]){logWarnings&&console.warn('Warning: Tried to apply a protected attribute: ',attr,' for element: ',domElement);continue}const v=subDiffs[attr];if(domDirectAttributes[attr])domElement[attr]=void 0===v?'':v;else if(domFalseStrAttributes[attr]){const str=v?((v||'')+'').trim().toLowerCase():'';str&&'0'!==str&&'false'!==str?domElement.setAttribute(attr,v):domElement.removeAttribute(attr)}else void 0===v?domElement.removeAttribute(attr):domElement.setAttribute(attr,v)}}if(oldProps.listeners||newProps.listeners){const subDiffs=getDictionaryDiffs(oldProps.listeners||{},newProps.listeners||{});if(subDiffs&&(diffs.attributes=subDiffs),subDiffs&&domElement)for(const prop in subDiffs){const oldListener=null===(_b=oldProps.listeners)||void 0===_b?void 0:_b[prop];oldListener&&domElement.removeEventListener(prop,oldListener),subDiffs[prop]&&domElement.addEventListener(prop,subDiffs[prop])}}for(const _prop in diffs)return diffs;return null},exports.camelCaseStr=camelCaseStr,exports.classNames=function classNames(...names){let str='';for(const name of names)name&&('string'==typeof name?str+=' '+name:name[Symbol.iterator]&&'function'==typeof name[Symbol.iterator]?str+=' '+[...name].filter((n=>n)).join(' '):name&&'object'==typeof name&&(str+=' '+Object.keys(name).filter((n=>name[n])).join(' ')));return str.trimStart().replace(/\s+/g,' ')},exports.cleanDOMProps=function cleanDOMProps(origProps){var _a;const props={};let lProp;for(const prop in origProps)if(cssProps[prop])if('style'===prop){const style='string'==typeof origProps.style?parseDOMStyle(origProps.style):origProps.style||{};for(const _p in style){props.style=style;break}}else origProps[prop]&&(props.className=props.className?props.className+' '+origProps[prop]:origProps[prop]);else if(lProp=domListenerProps[prop.toLowerCase()]){if(!origProps[prop])continue;props.listeners=props.listeners||{},props.listeners[lProp]=null!==(_a=origProps[prop])&&void 0!==_a?_a:void 0}else if(prop.startsWith('data'))'-'===prop[4]?(props.data=props.data||{},props.data[camelCaseStr(prop.slice(5))]=origProps[prop]):props.data=Object.assign(Object.assign({},props.data),origProps.data);else{if(void 0===origProps[prop])continue;props.attributes=props.attributes||{},props.attributes[domRenamedAttributes[prop]||prop.startsWith('aria')&&'-'!==prop[4]&&'aria-'+prop.slice(4).toLowerCase()||prop]=origProps[prop]}return props},exports.cleanNames=cleanNames,exports.collectKeysTo=collectKeysTo,exports.createDOMElement=function createDOMElement(tag,checkSVGByParentNode,namespaceURI){return'svg'===tag||checkSVGByParentNode&&(!0===checkSVGByParentNode||void 0!==checkSVGByParentNode.ownerSVGElement)?document.createElementNS(namespaceURI||'http://www.w3.org/2000/svg',tag):document.createElement(tag)},exports.domDirectAttributes=domDirectAttributes,exports.domFalseStrAttributes=domFalseStrAttributes,exports.domListenerProps=domListenerProps,exports.domRenamedAttributes=domRenamedAttributes,exports.domSelfClosingTags=['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'],exports.domSkipAttributes=domSkipAttributes,exports.equalDOMProps=function equalDOMProps(a,b){return(a.className||'')===(b.className||'')&&equalSubDictionaries(a,b,'style','data','listeners','attributes')},exports.equalSubDictionaries=equalSubDictionaries,exports.getDictionaryDiffs=getDictionaryDiffs,exports.getNameDiffs=getNameDiffs,exports.isNodeSVG=function isNodeSVG(node){return node&&void 0!==node.ownerSVGElement||!1},exports.lowerCaseStr=lowerCaseStr,exports.parseDOMStyle=parseDOMStyle,exports.readDOMProps=readDOMProps,exports.readDOMString=function readDOMString(tag,domProps,childrenContent,readFromNode){let dom='';if(domProps||(domProps={}),!tag&&(readFromNode&&readFromNode.tagName&&(tag=readFromNode.tagName.toLowerCase()||''),!tag))return(readFromNode&&readFromNode.textContent||'')+(!0===childrenContent?'':childrenContent||'');if(readFromNode){const{className,style,data,attributes}=readDOMProps(readFromNode);if(domProps=Object.assign({},domProps),className&&(domProps.className=domProps.className?cleanNames(domProps.className,className):className),style){domProps.style=Object.assign({},domProps.style);for(const prop in style)domProps.style[prop]=style[prop]}if(data){domProps.data=Object.assign({},domProps.data);for(const prop in data)domProps.data[prop]=data[prop]}if(attributes){domProps.attributes=Object.assign({},domProps.attributes);for(const prop in attributes)domProps.attributes[prop]=attributes[prop]}}const{className,style,data,attributes}=domProps;if(dom+='<'+tag,className&&(dom+=' class="'+className+'"'),style){let s='';for(const prop in style)s+=(s?' ':'')+lowerCaseStr(prop)+': '+style[prop]+';';s&&(dom+=' style="'+s+'"')}if(data)for(const prop in data)dom+=' data-'+lowerCaseStr(prop)+'="'+data[prop].toString()+'"';if(attributes)for(let prop in attributes)!attributes[prop]||domSkipAttributes[prop]||domListenerProps[prop.toLowerCase()]||(dom+=' '+prop+'="'+attributes[prop].toString()+'"');return childrenContent?(dom+='>',!0!==childrenContent&&(dom+=childrenContent),dom+='</'+tag+'>'):dom+='/>',dom};
