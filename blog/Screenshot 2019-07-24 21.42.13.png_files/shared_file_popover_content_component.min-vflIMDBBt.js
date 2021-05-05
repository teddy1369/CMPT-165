define(["require","exports","tslib","react","spectrum/popover","modules/clean/react/css","modules/clean/react/sprite","modules/core/i18n"],function(e,t,o,r,a,n,p,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=o.__importDefault(r);var s=(function(e){function t(t){return e.call(this,t)||this}return o.__extends(t,e),t.prototype.renderPopoverContentItems=function(e){for(var t=[],o=0,n=e;o<n.length;o++){var p=n[o];t.push(r.default.createElement(a.PopoverContentItem,{key:p.text,value:p,className:"app-action-row"},r.default.createElement("div",{className:"app-action-row-content"},this.renderIcon(p),r.default.createElement("span",{className:"app-action-legacy-option-text"},p.text))))}return t},t.prototype.renderIcon=function(e){return e.spriteName?r.default.createElement(p.Sprite,{group:"web",name:e.spriteName,alt:e.text,className:"app-action-popover-icon-sprite"}):r.default.createElement("img",{alt:e.text,src:e.iconUrl,className:"app-action-popover-icon"})},t.prototype.render=function(){return 0===this.props.openOptions.length?null:r.default.createElement(a.PopoverItemGroup,{className:"app-action-category-group",key:"category-edit"},r.default.createElement(a.PopoverItemGroupTitle,{className:"app-action-category-title"},c._("Edit")),this.renderPopoverContentItems(this.props.openOptions),r.default.createElement(a.PopoverItemGroupSeparator,{className:"app-action-menu-separator"}))},t})(r.default.Component);t.SharedFilePopoverContentComponent=s,t.SharedFilePopoverContent=n.requireCssWithComponent(s,["/static/css/app_actions/index-vflHjobNJ.css"])});
//# sourceMappingURL=shared_file_popover_content_component.min.js-vflwsqsnX.map