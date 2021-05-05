define("modules/clean/react/file_sidebar/file_sidebar_maestro_toggle_button",["require","exports","tslib","react","modules/clean/react/title_bubble","modules/core/i18n","spectrum/icon_global","external/classnames"],function(e,t,r,i,s,n,a,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i=r.__importDefault(i),c=r.__importDefault(c);var o=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){var e=this.props.isOpen?n._("Hide"):n._("Show"),t=c.default("sprite-button",this.props.className),r=c.default("file-sidebar__collapse-arrow",{open:this.props.isOpen});return i.default.createElement(s.TitleBubble,{content:e,position:s.TitleBubble.POSITIONS.LEFT,distanceFromTarget:10},i.default.createElement("button",{onClick:this.props.onClick,disabled:this.props.isDisabled,className:t,"aria-label":e},i.default.createElement(a.IconGlobal,{className:"file-sidebar__collapse-line",name:"collapse-line"}),i.default.createElement(a.IconGlobal,{className:r,name:"collapse-arrow"})))},t.defaultProps={className:""},t})(i.default.Component);t.FileSidebarMaestroToggleButton=o}),define("modules/clean/sticker_util",["require","exports","tslib","react","external/lodash","modules/clean/ajax","modules/clean/react/async/loadable"],function(e,t,r,i,s,n,a){"use strict";function c(e,s){var n=this;return a.Loadable({loader:function(){return r.__awaiter(n,void 0,Promise,function(){var s;return r.__generator(this,function(n){switch(n.label){case 0:return[4,t.fetchStickersAndCreateStickerUtil()];case 1:return s=n.sent(),[2,function(t){return i.default.createElement(e,r.__assign({},t,{stickerUtil:s}))}]}})})},loading:s})}var o=this;Object.defineProperty(t,"__esModule",{value:!0}),i=r.__importDefault(i),s=r.__importStar(s),n=r.__importStar(n);var l=(function(){function e(e){this.stickersJson=e}return e.prototype.getStickers=function(){if(!this.cachedStickerDataSets){var e=s.groupBy(this.stickersJson.stickers,"set_id");this.cachedStickerDataSets=this.stickersJson.sets.map(function(t){var r=t.id;return{id:r,stickers:s.get(e,r,[])}})}return this.cachedStickerDataSets},Object.defineProperty(e.prototype,"stickerDataById",{get:function(){return this.cachedStickerDataById||(this.cachedStickerDataById=s.keyBy(this.stickersJson.stickers,"id")),this.cachedStickerDataById},enumerable:!0,configurable:!0}),e.prototype.isLiveSticker=function(e){return this.stickerDataById[e]&&this.stickerDataById[e].live_sticker},e.prototype.getStickerImageUrl=function(e,t){return void 0===t&&(t="png"),this.stickersJson.sticker_img_url+"/"+e+"?type="+t},e.prototype.getStickerSetImageUrl=function(e){return this.stickersJson.sticker_set_img_url+"/"+e},e})();t.fetchStickersAndCreateStickerUtil=s.once(function(){return r.__awaiter(o,void 0,void 0,function(){var e;return r.__generator(this,function(t){switch(t.label){case 0:return e=l.bind,[4,new Promise(function(e,t){return n.SilentBackgroundRequest({url:"/file_activity/get_stickers",type:"POST",dataType:"json",success:e,error:function(e,r,i){return t(Error(i))}})})];case 1:return[2,new(e.apply(l,[void 0,t.sent()]))]}})})}),t.withAsyncStickerUtil=c;var u=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.stickerId,r=e.stickerUtil,s=e.className;return i.default.createElement("img",{className:s,src:r.getStickerImageUrl(t)})},t})(i.default.PureComponent);t.StickerImage=c(u)});
//# sourceMappingURL=pkg-legacy-ac.min.js-vflUpmd2w.map