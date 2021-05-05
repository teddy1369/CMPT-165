define(["require","exports","tslib","react","classnames","spectrum_comments/annotation_instructional_tooltip_pane/utilities","spectrum_comments/utils/throttle-debounce","spectrum_comments/annotation_conductor_layer/utilities"],function(t,e,o,n,i,s,a,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=(function(t){function e(e){var o=t.call(this,e)||this;return o.tooltipElement=null,o.onTooltipRef=function(t){o.tooltipElement=t},o.componentElement=null,o.onComponentRef=function(t){o.componentElement=t},o.cachedLayerRect=null,o.cachedTooltipRect=null,o.clearCachedMousePositionAndRects=function(){o.cachedLayerRect=null,o.cachedTooltipRect=null,o.state.mousePosition&&o.setState({mousePosition:void 0})},o.updateTooltipIsTooBig=function(){var t=o.getRects(),e=t.layerRect,n=t.tooltipRect;if(e&&n){var i=n.width>=.75*e.width||n.height>.33*e.height;o.setState({tooltipIsTooBig:i})}},o.throttledUpdateTooltipIsTooBig=a.throttle(o.updateTooltipIsTooBig,20),o.executor=function(t){return t()},o.debouncedExecutor=a.debounce(o.executor,200),o.unhideAndPlaceTooltip=function(t,e){var n=o.getRects(),i=n.layerRect,s=n.tooltipRect;if(!i||!s)return void o.setState({fading:!1});var a=i.left,c=i.top,l=i.width,r=s.width,u=s.height,p=t-a,d=Math.round(e-c-u/2),h=p<l/2,m=o.state.tooltipRelativeToPointer;switch(m){case"left":h&&p-r<0&&(m="right");break;case"right":!h&&p+r>l&&(m="left")}var f=Math.round("left"===m?p-r:p);o.setState({fading:!1,mouseIsInPane:!0,mousePosition:{top:d,left:f},tooltipRelativeToPointer:m})},o.hideTooltip=function(){o.setState({fading:!1,mousePosition:void 0})},o.onMouseMove=function(t){o.state.fading||o.setState({fading:!0});var e=t.clientX,n=t.clientY,i=c.getSurfaceFromEvt(t);o.debouncedExecutor(function(){i===c.Surface.Link||i===c.Surface.Text?o.hideTooltip():o.unhideAndPlaceTooltip(e,n)})},o.onMouseEnter=function(){window.setTimeout(function(){o.setState({mouseIsInPane:!0})},120)},o.handleMouseOut=function(){o.setState({fading:!1,mouseIsInPane:!1,mousePosition:void 0})},o.onMouseLeave=function(){o.setState({fading:!0}),o.debouncedExecutor(o.handleMouseOut)},o.state={fading:!1,mouseIsInPane:!1,tooltipIsTooBig:!0,tooltipRelativeToPointer:"right"},o}return o.__extends(e,t),Object.defineProperty(e.prototype,"localization",{get:function(){return this.props.localization},enumerable:!0,configurable:!0}),e.prototype.componentDidMount=function(){document.addEventListener("scroll",this.clearCachedMousePositionAndRects,!0),this.updateTooltipIsTooBig()},e.prototype.componentWillUnmount=function(){document.removeEventListener("scroll",this.clearCachedMousePositionAndRects,!0)},e.prototype.componentDidUpdate=function(t){var e=t.layerSize,o=t.vacuousMode,n=this.props,i=n.layerSize,s=n.vacuousMode;i.width===e.width&&i.height===e.height&&s===o||(this.clearCachedMousePositionAndRects(),this.throttledUpdateTooltipIsTooBig())},e.prototype.getRects=function(){if(!this.cachedLayerRect||!this.cachedTooltipRect){var t=this,e=t.componentElement,o=t.tooltipElement;this.cachedLayerRect=e&&e.getBoundingClientRect(),this.cachedTooltipRect=o&&o.getBoundingClientRect()}return{layerRect:this.cachedLayerRect,tooltipRect:this.cachedTooltipRect}},Object.defineProperty(e.prototype,"tooltipClassName",{get:function(){var t=this.state,e=t.mouseIsInPane,o=t.mousePosition,n=t.tooltipIsTooBig;return i("sc-annotation-mouse-tooltip",{"sc-annotation-mouse-tooltip--fading":t.fading,"sc-annotation-mouse-tooltip--hidden":n||!e||void 0===o})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tooltipInnerClassName",{get:function(){var t=this.state,e=t.mouseIsInPane,o=t.tooltipRelativeToPointer;return i("sc-annotation-mouse-tooltip__content",{"sc-annotation-mouse-tooltip__content--left":e&&"left"===o,"sc-annotation-mouse-tooltip__content--right":e&&"right"===o})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tooltipStyle",{get:function(){var t=this.state,e=t.mouseIsInPane,o=t.mousePosition;if(e){var n=o?[o.top,o.left]:[0,0],i=n[0];return{transform:"translate3d("+n[1]+"px,"+i+"px,0)"}}return{}},enumerable:!0,configurable:!0}),e.prototype.render=function(){var t=this.props,e=t.children,i=t.vacuousMode,a=!i&&{onMouseEnter:this.onMouseEnter,onMouseMove:this.onMouseMove,onMouseLeave:this.onMouseLeave};return n.createElement("div",o.__assign({ref:this.onComponentRef,className:s.COMPONENT_CLASS_NAME},a),e,!i&&n.createElement("div",{ref:this.onTooltipRef,className:this.tooltipClassName,style:this.tooltipStyle},n.createElement("div",{className:this.tooltipInnerClassName},this.localization.clickAndDragToComment||"Select an area to comment on")))},e})(n.Component);e.AnnotationInstructionalTooltipPane=l});
//# sourceMappingURL=index.min.js-vflLU9S3n.map