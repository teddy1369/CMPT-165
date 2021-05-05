define(["require","exports","tslib","react","spectrum_comments/utils/scroll_list","spectrum_comments/utils/calc_visibility_data","spectrum_comments/utils/shallow_equals","spectrum_comments/utils/throttle-debounce"],function(t,i,e,s,l,a,r,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=(function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.lastVisibilityData=a.createEmptyVisibilityData(),i.renewVisibilityData=function(){var t=i.props,e=t.onVisibilityDataChange,s=t.trackedItems,l=i.scrollListRef,n=a.calcVisibilityData(l,s);r.shallowEquals(n,i.lastVisibilityData)||e(n),i.lastVisibilityData=n},i.throttledRenewVisibilityData=n.throttle(i.renewVisibilityData,250),i}return e.__extends(i,t),i.prototype.componentDidMount=function(){this.renewVisibilityData()},i.prototype.componentDidUpdate=function(t){t.trackedItems!==this.props.trackedItems&&this.throttledRenewVisibilityData()},i.prototype.render=function(){var t=this,i=this.props,e=i.className,a=i.children;return s.createElement(l.ScrollList,{ref:function(i){t.scrollListRef=i&&i.listRef},className:e,onScroll:this.throttledRenewVisibilityData,onWindowResize:this.throttledRenewVisibilityData},a)},i})(s.PureComponent);i.VisibilityAwareScrollList=o});
//# sourceMappingURL=visibility_aware_scroll_list.min.js-vflxLVmmF.map