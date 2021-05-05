define(["require","exports","tslib","react","spectrum_comments/utils/throttle-debounce","classnames","spectrum_comments/annotation_conductor_layer/utilities","spectrum_comments/annotation_rectangle_creation_layer/utilities","spectrum_comments/annotation_highlight_creation_layer","spectrum_comments/annotation_rectangle_creation_layer"],function(t,e,n,o,a,i,r,s,l,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=(function(t){function e(e){var n=t.call(this,e)||this;return n.mouseDownSurface=r.Surface.None,n.hasMouseMoved=!1,n.layerRef=null,n.onDragStart=function(t){n.props.canCreate&&r.isOnImage(t)&&t.preventDefault()},n.onMouseMove=function(t){var e=n.props.annotation,o=0===(void 0!==t.buttons?t.buttons:t.nativeEvent.which);if(n.hasMouseMoved=!0,o&&!e)return void n.onHoverPointChange(r.toPoint(t))},n.onMouseDown=function(t){s.pertainsToLeftClick(t)&&(n.mouseDownSurface=r.getSurfaceFromEvt(t),n.hasMouseMoved=!1)},n.onMouseUp=function(t){var e=n.props,o=e.annotation,a=e.onClick;n.hasMouseMoved||n.mouseDownSurface===r.Surface.None||(o?n.attemptClearAllAnnotations():a&&a(r.toPoint(t))),n.mouseDownSurface=r.Surface.None},n.onHoverPointChange=a.throttle(function(t){var e=n.props.onHoverPointChange;e&&e(t)},50),n.onMouseLeave=function(){n.onHoverPointChange(void 0)},n.onRectChangeStart=function(){var t=n.props.layerSize;if(n.layerRef&&t){var e=n.layerRef.getBoundingClientRect(),o=e.left,a=e.top,i=t.width,r=t.height;n.setState({layerRect:{x:o,y:a,width:i,height:r}})}},n.onRectChange=function(t,e,o){var a=n.state.layerRect;if(a&&n.props.canCreate){var i=r.applyEdgeBounding(t,a,e),s=r.createRectangleFromPixelRectangle(i,a);o?n.props.onAnnotationChange({type:"rnd",regions:[s]},!0):n.setState({internalAnnotation:{type:"rnd",regions:[s]}})}},n.onRectChangeEnd=function(){var t=n.state.internalAnnotation;(t||n.props.canDismiss)&&n.props.onAnnotationChange(t,!1),n.setState({layerRect:null})},n.onTextHighlightChange=function(t){if(n.layerRef&&n.highlightIsCreatable){var e=n.layerRef.getBoundingClientRect(),o=t.map(function(t){return r.createNormalizedRegion(t,e)});window.getSelection().removeAllRanges(),n.props.onAnnotationChange({type:"highlight",regions:o},!1),n.setState({buttonPosition:null})}},n.onCursorHighlightChange=function(t){if(t&&n.layerRef&&n.props.canCreate){var e=t.rangeRects,o=t.boundingRect,a=t.size,i=t.margin,s=n.layerRef.getBoundingClientRect(),l=r.getOverlayElementPosition(o,e[0],s,a,i);n.setState({buttonPosition:{x:l.x,y:l.y}})}else n.setState({buttonPosition:null})},n.setLayerRef=function(t){t&&(n.layerRef=t)},n.attemptClearHighlightPlacement=function(){n.setState({buttonPosition:null}),n.attemptClearAnnotation("highlight"),window.getSelection().removeAllRanges()},n.attemptClearRectanglePlacement=function(){n.attemptClearAnnotation("rnd")},n.attemptClearAllAnnotations=function(){n.attemptClearHighlightPlacement(),n.attemptClearRectanglePlacement()},n.attemptClearAnnotation=function(t){var e=n.props.annotation;n.annotationIsDismissable&&e&&e.type===t&&n.props.onAnnotationChange(null,!1)},n.state={layerRect:null,buttonPosition:null,internalAnnotation:e.annotation},n}return n.__extends(e,t),Object.defineProperty(e.prototype,"className",{get:function(){var t=this.props.canCreate;return i(r.COMPONENT_CLASS_NAME,{"sc-annotation-conductor-layer__can-create":t,"sc-annotation-conductor-layer__is-creating-rnd":this.state.layerRect})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rectanglePlacement",{get:function(){var t=this.props.layerSize,e=this.state.internalAnnotation;if(e&&"rnd"===e.type){var n=e.regions[0];return r.createPlacementFromNormalizedRegion(n,t.width,t.height)}return null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"highlightPlacement",{get:function(){var t=this.props.annotation;return{button:this.state.buttonPosition,highlight:t&&"highlight"===t.type?{highlight:t.regions}:null}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"annotationIsDismissable",{get:function(){return null!==this.props.annotation&&this.props.canDismiss},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"highlightIsCreatable",{get:function(){return this.props.canCreate&&this.state.buttonPosition},enumerable:!0,configurable:!0}),e.prototype.componentWillReceiveProps=function(t){var e=t.annotation;e!==this.state.internalAnnotation&&this.setState({internalAnnotation:e})},e.prototype.render=function(){var t=this,e=t.highlightPlacement,n=t.rectanglePlacement,a=t.props,i=t.state,r=t.className,s=a.children,u=i.buttonPosition;return o.createElement("div",{ref:this.setLayerRef,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseLeave,onMouseMove:this.onMouseMove,className:r,onDragStart:this.onDragStart},o.createElement(l.AnnotationHighlightCreationLayer,{placement:e,buttonPosition:u,onTextHighlightChange:this.onTextHighlightChange,onCursorHighlightChange:this.onCursorHighlightChange},o.createElement(c.AnnotationRectangleCreationLayer,{placement:n,clearPlacement:this.attemptClearRectanglePlacement,onRectChangeStart:this.onRectChangeStart,onRectChange:this.onRectChange,onRectChangeEnd:this.onRectChangeEnd},s)))},e})(o.PureComponent);e.AnnotationConductorLayer=u});
//# sourceMappingURL=index.min.js-vflRCg47o.map