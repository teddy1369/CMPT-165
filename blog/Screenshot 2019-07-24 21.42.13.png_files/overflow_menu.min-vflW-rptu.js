define(["require","exports","tslib","react","modules/core/browser_detection","modules/clean/react/title_bubble","modules/core/i18n","spectrum/overflow_button","spectrum/popover","spectrum/mobile_menu","modules/clean/react/file_viewer/files2_utils"],function(e,t,r,n,l,o,a,i,u,s,c){"use strict";function d(e){var t=Array.isArray(e)?e.filter(function(e){return!!e}):e;return null==e||Array.isArray(t)&&0===t.length}function p(e){var t=e.disabled,r=e.onClick;return n.default.createElement(i.OverflowButton,{"aria-label":a._("More"),className:"u-mar-left-xs more-button",disabled:t===!0,onClick:r,tagName:"span",variant:"borderless"})}Object.defineProperty(t,"__esModule",{value:!0}),n=r.__importDefault(n);var b=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handlePopoverSelection=function(e,t){return e&&e(t)},t}return r.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.children,r=e.contentWrapperClassName,i=e.hideOnDisabled,b=d(t);if(b&&i)return null;if(l.is_mobile_or_tablet())return n.default.createElement(s.MobileMenu,{trigger:function(e){var t=e.openMobileMenu;return n.default.createElement(p,{disabled:b,onClick:t})}},t);var f=c.isFiles2M3Enabled()?"above":"below",m=c.isFiles2M3Enabled()?o.TitleBubble.POSITIONS.TOP:o.TitleBubble.POSITIONS.BOTTOM;return n.default.createElement(u.Popover,{className:"more-button-popover",onSelection:this.handlePopoverSelection},n.default.createElement(u.PopoverTrigger,{"aria-label":a._("More actions"),disabled:b},n.default.createElement(o.TitleBubble,{content:a._("More"),distanceFromTarget:10,isTargetPositionFixed:!0,position:m},n.default.createElement(p,{disabled:b}))),n.default.createElement("div",{className:r},n.default.createElement(u.PopoverContent,{attachment:"right",position:f},t)))},t})(n.default.Component);t.OverflowMenu=b;var f=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onSelect=function(e){l.is_mobile_or_tablet()&&e.preventDefault();var r=t.props.onSelect;return r&&r(e)},t}return r.__extends(t,e),t.prototype.render=function(){var e=l.is_mobile_or_tablet(),t=this.props,o=(t.onSelect,r.__rest(t,["onSelect"]));return e?n.default.createElement(s.MobileMenuItem,r.__assign({onSelect:this.onSelect},o)):n.default.createElement(u.PopoverContentItem,r.__assign({value:this.onSelect},o))},t})(n.default.Component);t.PopoverOrMobileItem=f});
//# sourceMappingURL=overflow_menu.min.js-vflh5-n1B.map