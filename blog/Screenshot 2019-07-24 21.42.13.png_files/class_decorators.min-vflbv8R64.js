define(["require","exports","tslib"],function(e,n,r){"use strict";function t(e){return function(n,t){return e.concat([null]).reverse().reduce(function(e,n){var t,u=e.nodes,c=e.result,s=u.shift();return{nodes:u,result:null!==n?r.__assign({},s,(t={},t[n]=c,t)):c}},{nodes:e.reduce(function(e,n){var r=e[0],t=e.slice(1);return[r[n]||{},r].concat(t)},[n]),result:t}).result}}function u(e,n){return r.__assign({},e.reduce(function(e,t){var u;return r.__assign({},e,(u={},u[t]=n(t),u))},{}))}function c(e){return u(Object.keys(e),function(n){return{__place__:t(["composers",n]),on:u(e[n].evts,function(r){return{__place__:t(["reducers",n,"evts",r]),update:u(e[n].values,function(e){return{__place__:t(["reducers",n,"values",e,r])}})}})}})}function s(e){return function(n,r){var t=n.scope;n.scope=function(){return e.__place__(t&&t.call(this)||{},n[r].bind(this))}}}Object.defineProperty(n,"__esModule",{value:!0}),n.scaffold=c,n.plug=s});
//# sourceMappingURL=class_decorators.min.js-vfl0E1WIU.map