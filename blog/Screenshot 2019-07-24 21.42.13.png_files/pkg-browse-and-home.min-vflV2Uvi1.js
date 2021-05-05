define("modules/clean/emoji_utils",["require","exports"],function(e,t){"use strict";function r(e){var t=i();t.lastIndex=0;var r=t.exec(e);if(r&&0===r.index){var n=r[0];if("‍"===e[n.length])return"";var a=t.exec(e);return a&&a.index===n.length?"":n||""}return""}function i(){return n||(n=/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]\ufe0f?|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g),n}Object.defineProperty(t,"__esModule",{value:!0});var n;t.getFirstEmojiFromTitle=r}),define("modules/clean/filename_highlights",["require","exports","tslib","external/classnames","react"],function(e,t,r,i,n){"use strict";function a(e,t){if(!t||!t.length)return[];var r=[],i=0;return t.forEach(function(t){var n=t.pos;n>i&&(i=n);var a=e.indexOf(t.string,i);a>=0&&r.push({pos:a,len:t.string.length,string:t.string})}),r}function o(e,t,r,i){if(!t)return[{text:e,isHighlighted:!1}];r||(r=0),i||(i=e.length),t=a(e,t);for(var n=0,o=0,l=[];n<e.length;){var s=void 0,u=void 0,c=t[o];if(o>=t.length?(u=!1,s=n+e.length):c.pos>n?(u=!1,s=c.pos):(u=!0,s=c.pos+c.len),!(n<r&&s<=r||n>=i&&s>=i)){var d=e.substring(Math.max(n,r),Math.min(s,i));l.push({text:d,isHighlighted:u})}n=s,u&&o++}return l}function l(e,t,r,i){return h(o(e,t,r,i))}function s(e,t,r,i){if(r||(r=0),i||(i=e.length),!t||!d(e,t))return[{text:e.substring(r,i),isHighlighted:!1}];for(var n=[],a=0,o=0,l=t;o<l.length;o++){var s=l[o],u=e.indexOf(s.highlight_str,a),c=u+s.highlight_str.length;if(a=c,!(u<r&&c<=r||u>=i)){var h=s.highlight_str;u<r&&(h=h.slice(r-u)),i<c&&(h=h.slice(0,-(c-i))),n.push({text:h,isHighlighted:s.is_highlighted})}}return n}function u(e,t,r,i){return h(s(e,t,r,i))}function c(e){return h(e.map(function(e){return{text:e.highlight_str,isHighlighted:e.is_highlighted}}))}function d(e,t){return e===t.map(function(e){return e.highlight_str}).join("")}function h(e){return n.createElement("span",null,e.map(function(e,t){return n.createElement("span",{className:i.default({highlighted:e.isHighlighted,"is-highlighted":e.isHighlighted}),key:t},e.text)}))}Object.defineProperty(t,"__esModule",{value:!0}),i=r.__importDefault(i),n=r.__importStar(n),t.highlightMatchSections=o,t.highlightMatchReact=l,t.highlightSectionsFromHighlightSpans=s,t.highlightReactFromHighlightSpans=u,t.highlightReactFromAllHighlightSpans=c}),define("modules/clean/paper_formatting_utils",["require","exports","tslib","modules/clean/emoji_utils","react","modules/clean/filename_highlights","spectrum/icon_content"],function(e,t,r,i,n,a,o){"use strict";function l(e,t,r,n){var o=e.title,l=e.highlight_spans,u=e.title_highlights,c=l&&l.length>0,d=i.getFirstEmojiFromTitle(o);if(d)if(o=o.substr(d.length),c){var h={highlight_str:l[0].highlight_str.substr(d.length),is_highlighted:l[0].is_highlighted};l=[h].concat(l.slice(1))}else if(u){var m=d.length/2;u=u.slice().map(function(e){return{pos:e.pos-m,len:e.string.length,string:e.string}})}var f;return f=c?a.highlightReactFromHighlightSpans(o,l):a.highlightMatchReact(o,u),{title:o,highlightedTitle:f,icon:s(d,t,r,n)}}function s(e,t,r,i){return e?n.default.createElement("div",{className:"mc-media-cell-icon brws-file-name-icon-emoji-container"},n.default.createElement(o.IconContent,{name:i?"blank-large":"blank-small",className:t}),n.default.createElement("span",{className:r},e)):n.default.createElement(o.IconContent,{name:i?"paper-large":"paper-small",className:t})}Object.defineProperty(t,"__esModule",{value:!0}),i=r.__importStar(i),n=r.__importDefault(n),a=r.__importStar(a),t.getPaperDocTitleParts=l}),define("modules/clean/photos/thumb_loading/buffered_thumb_store",["require","exports","tslib","modules/clean/photos/thumb_loading/generic_thumb_store","modules/clean/web_timing_logger","modules/core/exception"],function(e,t,r,i,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=r.__importStar(n),a=r.__importStar(a);var o=(function(){function e(e,t){var r=this;this.isTTI=!1,this.postTTISuccesses=[],this.postTTIErrors=[],this.postTTIRequests=[],this.wrapHandlers=function(e){return{onSuccess:function(t){r.isTTI?e.onSuccess(t):r.bufferCallbacks(r.postTTISuccesses,e,t)},onRequest:function(t){e.onRequest&&(r.isTTI?e.onRequest(t):r.bufferCallbacks(r.postTTIRequests,e,t))},onError:function(){e.onError&&(r.isTTI?e.onError():r.bufferErrorCallback(e))}}},this.innerStore=new i.GenericThumbStore(e,t),n.waitForTTI().then(function(){r.isTTI=!0,r.postTTIRequests.forEach(function(e){var t=e[0].onRequest;t&&t(e[1])}),r.postTTIErrors.forEach(function(e){return e.onError&&e.onError()}),r.postTTISuccesses.forEach(function(e){return e[0].onSuccess(e[1])}),r.postTTIRequests=[],r.postTTIErrors=[],r.postTTISuccesses=[]})}return e.prototype.get_thumb=function(e){return this.isTTI?this.innerStore.get_thumb(e):null},e.prototype.is_batching=function(){return this.innerStore.is_batching()},e.prototype.bind_url=function(e,t){var r=this.isTTI?t:this.wrapHandlers(t);return this.innerStore.bind_url(e,r)},e.prototype.bufferCallbacks=function(e,t,r){a.assert(!this.isTTI,"Should not buffer callback after TTI"),e.push([t,r])},e.prototype.bufferErrorCallback=function(e){a.assert(!this.isTTI,"Should not buffer error callback after TTI"),this.postTTIErrors.push(e)},e.prototype.unbind_url=function(e){this.innerStore.unbind_url(e)},e})();t.BufferedThumbStore=o}),define("modules/clean/react/icon/file_folder_icon",["require","exports","tslib","react","modules/clean/filetypes","modules/clean/react/icon/file_icon","modules/clean/react/icon/folder_icon","modules/core/i18n","modules/clean/static_urls"],function(e,t,r,i,n,a,o,l,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i=r.__importDefault(i);var u=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){var e=this.props.file,t=e.type,u=e.isDeleted,c=t===n.FileTypes.FILE||t===n.FileTypes.PACKAGE?i.default.createElement(a.FileIcon,r.__assign({},this.props)):i.default.createElement(o.FolderIcon,r.__assign({},this.props));return u?i.default.createElement("span",{className:"file-icon__badge-wrapper"},c,i.default.createElement("img",{src:s.static_url("/static/images/badges/trash-vfl3_SuXf.svg"),className:"file-icon__badge",alt:l._("deleted")})):c},t})(i.default.Component);t.FileOrFolderIcon=u}),define("modules/clean/react/icon/file_icon",["require","exports","tslib","react","spectrum/file_icon","spectrum/icon_content"],function(e,t,r,i,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i=r.__importDefault(i);var o;(function(e){e[e.READY=0]="READY",e[e.LOADED=1]="LOADED",e[e.ERROR=2]="ERROR"})(o||(o={}));var l=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={previewState:o.READY},t.handleImageLoad=function(){t.setState({previewState:o.LOADED})},t.handleImageError=function(){t.setState({previewState:o.ERROR})},t}return r.__extends(t,e),t.prototype.componentDidMount=function(){this.props.showPreview&&this.preloadImage()},t.prototype.componentWillReceiveProps=function(e){!this.props.showPreview&&e.showPreview&&this.preloadImage()},t.prototype.componentDidUpdate=function(e){var t=this.props.file.thumbnail_url_tmpl;this.props.showPreview&&t!==e.file.thumbnail_url_tmpl&&(this.setState({previewState:o.READY}),this.preloadImage())},t.prototype.preloadImage=function(){var e=this.props.file.thumbnail_url_tmpl;if(e){var t=new Image;t.onload=this.handleImageLoad,t.onerror=this.handleImageError,t.src=e}},t.prototype.render=function(){var e=this.props,t=e.file,l=e.variant,s=e.showPreview,u=r.__rest(e,["file","variant","showPreview"]),c=t.fq_path,d=t.thumbnail_url_tmpl,h=t.isDeleted,m=t.is_symlink,f=this.state.previewState;if(s&&d&&f===o.LOADED)return i.default.createElement("img",r.__assign({src:d,alt:t.fq_path,draggable:!1,onError:this.handleImageError},u));if(m){var p=l?l:"small",g="symlink-"+p;return i.default.createElement(a.IconContent,r.__assign({name:g,disabled:h},u))}return i.default.createElement(n.FileIcon,r.__assign({path:c,variant:l,disabled:h},u))},t.defaultProps={showPreview:!0,variant:"small"},t})(i.default.Component);t.FileIcon=l}),define("modules/clean/react/icon/folder_icon",["require","exports","tslib","react","spectrum/icon_content"],function(e,t,r,i,n){"use strict";function a(e){var t=e.length,r=e.lastIndexOf("_",t);return parseInt(e.substr(r+1,t),10)?e.substr(0,r):e}Object.defineProperty(t,"__esModule",{value:!0}),i=r.__importDefault(i);var o={folder_user:"folder_shared",folder_user_gray:"folder_shared",folder_team:"folder_team",folder_team_gray:"folder_team",folder_team_locked:"folder_team_read_only",folder_team_locked_gray:"folder_team_read_only",folder_user_locked:"folder_shared_read_only",folder_user_locked_gray:"folder_shared_read_only",folder:"folder",folder_gray:"folder",folder_team_member:"folder_team_member",folder_user_no_access:"folder_confidential",folder_app:"folder_app",package:"pkg",folder_camera:"folder_camera_upload",dropbox:"folder_dropbox",folder_user_no_access_admin_view:"folder_confidential_admin_view"};t.isLegacyFolderIcon=function(e){var t=a(e),r=["folder_star","folder_public"];return t in o||r.includes(t)},t.convertLegacyFolderIconToSpectrum=function(e,t){return(o[a(e)]||"folder")+"-"+t};var l=(function(e){function a(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(a,e),a.prototype.render=function(){var e=this.props,r=e.file,a=e.variant,o=void 0===a?"small":a,l=e.className,s=r.isDeleted,u=t.convertLegacyFolderIconToSpectrum(r.icon||"",o);return i.default.createElement(n.IconContent,{name:u,disabled:s,className:l})},a})(i.default.Component);t.FolderIcon=l;var s=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){return i.default.createElement(n.IconContent,{name:"folder-small"})},t})(i.default.Component);t.SimpleFolderIcon=s;var u=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){return i.default.createElement(n.IconContent,{name:"folder_shared-small"})},t})(i.default.Component);t.SharedFolderIcon=u;var c=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){return i.default.createElement(n.IconContent,{name:"folder_team-small"})},t})(i.default.Component);t.TeamFolderIcon=c}),define("modules/clean/react/maestro/checkbox",["require","exports","tslib","react","external/classnames"],function(e,t,r,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i=r.__importDefault(i),n=r.__importDefault(n);var a;(function(e){e[e.Checked=0]="Checked",e[e.PartiallyChecked=1]="PartiallyChecked",e[e.Unchecked=2]="Unchecked"})(a=t.CheckboxState||(t.CheckboxState={})),t.Checkbox=function(e){var t=e.checkboxState,r=e.ariaLabel,o=e.onClick,l=e.onMouseDown,s=e.tabIndex,u=n.default({"checkbox-button":!0,"partial-checked":t===a.PartiallyChecked,checked:t===a.Checked});return i.default.createElement("button",{role:"checkbox","aria-checked":t===a.Checked,"aria-label":r,className:u,onClick:o,onMouseDown:l,tabIndex:s})}}),define("modules/clean/react/maestro/tile_element",["require","exports","tslib","external/classnames","react","modules/clean/paper_formatting_utils","modules/clean/keycode","modules/clean/react/maestro/checkbox","modules/clean/react/maestro/tile_grid_logger","modules/clean/react/icon/file_folder_icon","modules/clean/user_education/react/user_education_effect"],function(e,t,r,i,n,a,o,l,s,u,c){"use strict";function d(e){var t=e.leftOffset,r=e.tileHeight,i=e.tileWidth,a=e.thumbNode,o=e.labelNode,l={left:t,height:r,width:i,pointerEvents:"none"},s={height:i,width:i};return n.default.createElement("div",{className:"tile",style:l},n.default.createElement("div",{className:"tile__thumb-container",style:s},a||n.default.createElement("div",{className:"tile__preview--placeholder"})),o)}Object.defineProperty(t,"__esModule",{value:!0}),i=r.__importDefault(i),n=r.__importDefault(n),a=r.__importStar(a);var h=function(){return null};t.TilePlaceholder=d;var m=(function(e){function t(i){var n=e.call(this,i)||this;return n.thumbRequestId=null,n.animationRequestIds=[],n.handleThumbnailError=function(){var e=n.props,t=e.onThumbnailError,r=e.tileIndex;n.setState({thumbLoaded:!1}),t&&t(r)},n.logTileInteractive=function(){var e=!!n.props.thumbnailUrl,t=n.state.thumbLoaded;if(n.props.onThumbnailLoad){var r=window.requestAnimationFrame(function(){var r=window.requestAnimationFrame(function(){n.props.onThumbnailLoad(n.props.tileIndex,e,t)});n.animationRequestIds.push(r)});n.animationRequestIds.push(r)}},n.toggleSelect=function(e){e.preventDefault(),e.stopPropagation(),n.props.handleToggleSelect(e)},n.handleKeyDown=function(e){var t=e.keyCode;e.currentTarget!==e.target||t!==o.KeyCode.SPACE&&t!==o.KeyCode.ENTER||(e.preventDefault(),n.props.onTileAction(e))},n.state=r.__assign({thumbLoaded:t.isThumbLoaded(i)},n.calcPaperTitleState(i)),n}return r.__extends(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.delayRenderFullTile?this.renderCompleteTileTimeout=setTimeout(function(){e.renderCompleteTileTimeout=0,e.fetchThumbnail(e.props)},100):this.fetchThumbnail(this.props),this.logTileInteractive()},t.prototype.componentDidUpdate=function(e,t){if(!e.isFocused&&this.props.isFocused){var r=this.refs.tileContainer;r&&r.focus()}},t.prototype.componentWillReceiveProps=function(e){if(e.thumbnailUrl!==this.props.thumbnailUrl&&(this.unbindThumbnailIfNeeded(),this.fetchThumbnail(e)),t.getPaperTitle(this.props)!==t.getPaperTitle(e)){var r=this.calcPaperTitleState(e);this.setState(r)}},t.getPaperTitle=function(e){return e.paper?e.paper.title:null},t.prototype.calcPaperTitleState=function(e){return e.paper?{paperTitleParts:a.getPaperDocTitleParts(e.paper,"brws-file-name-grid-icon","brws-file-name-grid-icon-emoji",!0)}:{}},t.prototype.componentWillUnmount=function(){this.unbindThumbnailIfNeeded(),this.renderCompleteTileTimeout&&clearTimeout(this.renderCompleteTileTimeout),this.animationRequestIds.forEach(function(e){window.cancelAnimationFrame(e)}),this.animationRequestIds=[]},t.prototype.fetchThumbnail=function(e){var t=this,r=e.thumbnailUrl,i=e.thumbStore;if(r){var n=Date.now();this.thumbRequestId=i.bind_url(r,{onSuccess:function(){t.setState({thumbLoaded:!0}),s.InfiniteTileGridLogger.logThumbRTT(Date.now()-n)},onError:function(){t.handleThumbnailError()}})}},t.prototype.unbindThumbnailIfNeeded=function(){var e=this.props.thumbStore;this.thumbRequestId&&(e.unbind_url(this.thumbRequestId),this.thumbRequestId=null),this.setState({thumbLoaded:!1})},t.isThumbLoaded=function(e){var t=e.thumbStore,r=e.thumbnailUrl;return!(!r||!t.get_thumb(r))},t.prototype.renderCheckbox=function(){var e=this.props.isSelected?l.CheckboxState.Checked:l.CheckboxState.Unchecked,t=n.default.createElement(l.Checkbox,{ariaLabel:this.props.checkboxAriaText,checkboxState:e,onClick:this.toggleSelect,tabIndex:-1});return 0===this.props.tileIndex&&(t=n.default.createElement(c.UserEducationEffect,{containerName:"FileItemRow",name:"FirstFileSelectCheckbox"},t)),n.default.createElement("div",{key:"tile-select-checkbox",className:"tile-select-checkbox"},t)},t.prototype.renderActionNode=function(){return n.default.createElement("div",{key:"tile-action-node",className:"tile__action-button"},this.props.actionNode)},t.prototype.renderThumbnail=function(){var e=this.props,t=e.thumbnailUrl,r=e.thumbStore,i=e.height,a=e.width,o=e.isSelected;if(this.state.thumbLoaded){var l=r.get_thumb(t);if(l){var s=o?a-24:a,u=i?i:s;return n.default.createElement("img",{className:"tile__preview tile__preview--thumb",draggable:!1,src:l,style:{maxHeight:u,maxWidth:s},onError:this.handleThumbnailError,alt:""})}}return this.renderFileIcon()},t.prototype.renderFileIcon=function(){var e=this.props,t=e.file;return e.paper?this.state.paperTitleParts.icon:t?n.default.createElement(u.FileOrFolderIcon,{className:"tile__preview tile__preview--icon brws-file-name-grid-icon",file:t,variant:"large",showPreview:!1,alt:""}):n.default.createElement("div",{className:"tile__preview--placeholder"})},t.prototype.render=function(){var e=this.props,t=e.file,a=e.height,o=e.width,l=e.leftOffset,s=e.labelNode,u=e.labelHeight,c=e.isViewOnly,h=e.isSelected,m=e.isActiveDropTarget,f=e.isAvailableDropTarget,p=e.altText,g=e.href,_=e.onTileAction,b=e.onDragEnter,T=e.onDragStart,v=e.isDraggable,y=e.isSelectable,E=e.isFocused,w=e.overrideTabIndex,I=s?n.default.createElement("div",{className:"tile-label","aria-hidden":"true"},s):null,S=a?a:o,P=S+u;if(c)return n.default.createElement(d,{leftOffset:l,tileHeight:P,tileWidth:o,thumbNode:this.renderThumbnail(),labelNode:I});var x={left:l,height:P,width:o},k={height:S,width:o},C={className:i.default("tile",{"tile--is-selected":h,"tile--is-dragover":m,"tile--is-droppable":f&&!m}),"data-filename":t&&t.name,style:x,draggable:v,href:g,onClick:_,onDragEnter:b,onDragStart:T,role:"gridcell"},L=n.default.createElement("div",{className:"tile__thumb-container",style:k},this.renderThumbnail());return n.default.createElement("div",{role:"row",ref:"tileContainer",className:"tile__container",onKeyDown:this.handleKeyDown,tabIndex:w||E?0:-1,"aria-label":p,"aria-selected":h},n.default.createElement("div",r.__assign({},C),L,y&&this.renderCheckbox(),this.renderActionNode(),I))},t.defaultProps={checkboxAriaText:"",delayRenderFullTile:!0,handleToggleSelect:h,isFocused:!1,isSelected:!1,isViewOnly:!1,onDragEnter:h,onDragStart:h,onTileAction:h},t})(n.default.PureComponent);t.TileElement=m}),define("modules/clean/react/maestro/tile_grid_logger",["require","exports","modules/clean/js_client_stopwatch","modules/core/browser"],function(e,t,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(function(){function e(e,t,r,i){var n=this;this.recordTileError=function(e){var t=Math.floor(e/n.numTilesPerPage);n.pagesWithThumbErrors.has(t)||n.pagesWithThumbErrors.add(t)},this.recordTileLoaded=function(e,t,r){if(r){if(n.thumbsLoaded.has(e))return;n.thumbsLoaded.add(e)}else{if(n.iconsLoaded.has(e))return;n.iconsLoaded.add(e)}var i=!1;i=n.numTiles%n.numTilesPerPage===0?e>=n.numTiles-n.numTilesPerPage:e>=n.numTiles-n.numTiles%n.numTilesPerPage;var a=n.numTilesPerPage;if(i){var o=n.numTiles%n.numTilesPerPage;0!==o&&(a=o)}var l=Math.floor(e/n.numTilesPerPage);if(r||!t){var s=n.numTilesFinalizedByPage[l]||0;n.numTilesFinalizedByPage[l]=s+1}if(0===l&&n.handleTTI){!(n.iconsLoaded.has(e)&&n.thumbsLoaded.has(e))&&(n.numTilesLoadedOnFirstPage++,n.numTilesLoadedOnFirstPage===a&&n.handleTTI())}r&&(n.pagesWithThumbs.has(l)||n.pagesWithThumbs.add(l),n.anyThumbLoadedTimeByPage.get(l)||n.anyThumbLoadedTimeByPage.set(l,n.getTimeNow()),n.numTilesFinalizedByPage[l]===a&&n.allThumbsLoadedTimeByPage.set(l,n.getTimeNow()))},this.pruneTrackedPages=function(){n.startTimeByPage.forEach(function(e,t){!n.pagesToLog.has(t)&&!n.pagesCompletedLogging.has(t)&&n.getTimeNow()-e>2e3&&n.startTimeByPage.delete(t)})},this.logCompletedPages=function(){n.pagesToLog.forEach(function(e){var t=n.startTimeByPage.get(e),r=Math.max(n.allThumbsLoadedTimeByPage.get(e),t),i=Math.max(n.anyThumbLoadedTimeByPage.get(e),t);return r&&!n.pagesWithThumbs.has(e)?void n.handlePageCompletedLogging(e):n.pagesWithThumbErrors.has(e)?void n.handlePageCompletedLogging(e):void(t&&r&&i&&(n.logPerfStats(e,t,i,r),n.handlePageCompletedLogging(e)))})},this.numTiles=e,this.numTilesPerPage=t,this.numTilesFinalizedByPage=[],this.numTilesLoadedOnFirstPage=0,this.iconsLoaded=new Set,this.thumbsLoaded=new Set,this.startTimeByPage=new Map,this.allThumbsLoadedTimeByPage=new Map,this.anyThumbLoadedTimeByPage=new Map,this.pagesWithThumbErrors=new Set,this.pagesWithThumbs=new Set,this.pagesCompletedLogging=new Set,this.pagesToLog=new Set,this.handleTTI=i}return e.prototype.getTimeNow=function(){var e=i.performance(),t=-1;return e&&e.now&&(t=e.now()),t},e.prototype.updateNumTiles=function(e){this.numTiles>=e||(this.numTiles=e)},e.prototype.handlePageCompletedLogging=function(e){this.pagesCompletedLogging.add(e),this.pagesToLog.delete(e),this.startTimeByPage.delete(e),this.anyThumbLoadedTimeByPage.delete(e),this.allThumbsLoadedTimeByPage.delete(e)},e.logThumbLoadError=function(){r.JSStopwatch.recordTrace("visual_browse_thumb_load_error",{stopwatchName:"infinite_tile_grid_logging",traceTime:0})},e.logThumbRTT=function(e){r.JSStopwatch.recordTrace("visual_browse_thumb_rtt",{stopwatchName:"infinite_tile_grid_logging",traceTime:e})},e.prototype.logPerfStats=function(e,t,i,n){r.JSStopwatch.recordTrace("loaded_any_thumbs_page_"+e,{stopwatchName:"infinite_tile_grid_logging",traceTime:i-t}),r.JSStopwatch.recordTrace("loaded_all_thumbs_page_"+e,{stopwatchName:"infinite_tile_grid_logging",traceTime:n-t})},e})();t.InfiniteTileGridLogger=n});
//# sourceMappingURL=pkg-browse-and-home.min.js-vfloPk5GO.map