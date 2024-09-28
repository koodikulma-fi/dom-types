Object.defineProperty(exports,'__esModule',{value:!0});const t={style:!0,data:!0};function s(t){const s=t.replace(/\/\*(.|\s)*?\*\//g,' ').replace(/\s+/g,' ').trim();if(!s)return{};const e=s.split(';').map((t=>{const s=t.indexOf(':');return-1===s?[t.trim()]:[t.slice(0,s).trim(),t.slice(s+1).trim()]})),o={};for(const[t,s]of e)t&&(o[t.replace(/\W+\w/g,(t=>t.slice(-1).toUpperCase()))]=s);return o}function e(t,s,e=''){switch(typeof t){case'string':if(e)for(const o of t.split(e))o&&(s[o]=!0);else s[t]=!0;break;case'object':if(t.constructor===Object)for(const e in t)e&&t[e]&&(s[e]=!0);else for(const o of t)if(o&&'string'==typeof o)if(e)for(const t of o.split(e))t&&(s[t]=!0);else s[o]=!0}}exports.classNames=function(...t){const s={};for(const o of t)o&&e(o,s,' ');return Object.keys(s).join(' ')},exports.cleanDOMProps=function(t,e){const o=e?Object.assign({},t):t;o.class&&(o.className=o.className?o.class+' '+o.className:o.class),delete o.class,'string'==typeof o.style&&(o.style=s(o.style));for(const t in o)t.startsWith('aria')&&!t.startsWith('aria-')&&(o['aria-'+t.slice(4).toLowerCase()]=o[t],delete o[t]);return o},exports.collectNamesTo=e,exports.equalDOMProps=function(s,e){for(const o in t)if(s[o]){if(!e[o])return!1;const t=s[o],n=e[o];if(t!==n){for(const s in n)if(t[s]!==n[s])return!1;for(const s in t)if(void 0===n[s]&&void 0!==t[s])return!1}}else if(e[o])return!1;for(const o in e)if(s[o]!==e[o]&&!t[o])return!1;for(const o in s)if(void 0===e[o]&&void 0!==s[o]&&!t[o])return!1;return!0},exports.getClassNameDiffs=function(t,s){if((t=t||'')===(s=s||''))return null;const e=t.split(' '),o=s.split(' '),n={};let r=null;if(e)for(const t of e)!t||o&&-1!==o.indexOf(t)||(n[t]=r=!1);if(o)for(const t of o)!t||e&&-1!==e.indexOf(t)||(n[t]=r=!0);return null!==r?n:null},exports.getDictionaryDiffs=function(t,s){const e={};let o=!1;for(const n in t){void 0!==t[n]&&void 0===s[n]&&(e[n]=void 0,o=!0)}for(const n in s){const r=s[n];t[n]!==r&&(e[n]=r,o=!0)}return o?e:null},exports.parseDOMStyle=s;
