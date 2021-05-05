define(["require","exports","tslib","react","modules/core/i18n","modules/clean/react/css","modules/clean/react/comments2/data/sidebar_watcher","modules/clean/react/file_activity_stream/tti_logger","modules/clean/react/file_sidebar/managed_comments_tab","modules/clean/react/file_sidebar/file_sidebar_base","modules/clean/react/file_sidebar/file_sidebar_connect","modules/clean/react/file_sidebar/file_sidebar_logger","modules/clean/react/file_sidebar/store/sidebar/helpers","modules/clean/react/file_sidebar/store/sidebar/actions","modules/clean/react/file_sidebar/store/sidebar/selectors","modules/clean/react/file_sidebar/store/file_activity/actions","modules/clean/react/file_sidebar/store/file_activity/selectors","modules/clean/react/file_sidebar/thirdparty_activity_logger","modules/clean/react/file_activity_stream/file_activity_stream","modules/clean/react/file_metadata/metadata_tab","modules/clean/sticker_util","modules/clean/react/file_viewer/models","modules/clean/react/file_viewer/file_preview_event_emitter","modules/clean/react/file_viewer/constants","modules/clean/react/file_viewer/exp_controller_mode","modules/clean/react/file_activity_stream/thirdparty_activity_onboarding_bluedot","modules/clean/react/file_sidebar/store/sidebar/selectors","modules/constants/file_viewer"],function(e,t,i,r,a,s,o,n,l,c,d,m,p,u,_,f,b,v,h,y,S,T,C,g,E,A,F,M){"use strict";function I(e){return{collapsed:!e.open,fileSidebarDispatch:e.dispatch,isMobile:!1}}function w(e){return i.__assign({},_.getSidebarState(e),{fileActivityCount:b.getVisibleActivityCount(e),tabs:_.getTabsState(e),fileActivities:b.getActivities(e),activityTabClicked:F.getThirdPartyBlueDotOnboardedState(e)})}Object.defineProperty(t,"__esModule",{value:!0}),r=i.__importDefault(r),p=i.__importStar(p),u=i.__importStar(u),_=i.__importStar(_),f=i.__importStar(f),b=i.__importStar(b);var O=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.notifyStore=function(e){t.props.dispatch(u.openFile({file:e.currentFile,isVersionHistoryMode:e.isVersionHistoryMode,user:e.user})),e.user&&t.props.dispatch(f.getActivityStream(e.user.id,e.currentFile))},t.onSelectTab=function(e){var i=t.props,r=i.dispatch,a=i.fileActivityCount,s=i.tabs.comments,o=i.user;r(u.selectTab(e)),C.filePreviewEventEmitter.emit(g.EventType.FilePreviewModeBounce,T.FilePreviewSession.currentSession),m.logSidebarTabSelected({selected_tab:e,num_comments:s.extra.commentCount,num_events:a,viewing_user_id:o?o.id:null}),"activity"===e&&(v.thirdPartyHiveLogger(t.props.fileActivities),t.props.activityTabClicked||r(u.thirdpartyBlueDotOnboard()))},t}return i.__extends(t,e),t.prototype.componentWillMount=function(){E.isFiles2ControllerExperimentOn()&&this.props.mode&&this.props.dispatch(u.OverrideInitialState(this.props.mode)),S.fetchStickersAndCreateStickerUtil()},t.prototype.componentDidMount=function(){n.faStreamTTILogger.recordStart(this.props.currentFile.file_id),this.notifyStore(this.props)},t.prototype.componentWillReceiveProps=function(e){E.isFiles2ControllerExperimentOn()&&this.props.mode!==e.mode&&e.mode&&this.props.dispatch(u.OverrideInitialState(e.mode));var t={file:this.props.currentFile,isVersionHistoryMode:this.props.isVersionHistoryMode,user:this.props.user},i={file:e.currentFile,isVersionHistoryMode:e.isVersionHistoryMode,user:e.user};p.isContextChanged(t,i)&&(n.faStreamTTILogger.recordStart(this.props.currentFile.file_id),this.notifyStore(e))},t.prototype.componentDidUpdate=function(e){var t=e.ready,i=e.activeTab,r=e.open,a=e.openReason,s=this.props,n=s.ready,l=s.activeTab,c=s.open,d=s.openReason;!t&&n&&o.sideChannelEventEmitter.emit("comments"===l?o.COMMENTS_VISIBLE_SIGNAL:o.COMMENTS_HIDDEN_SIGNAL),!c||"comments"!==l||"toggle_button"===d||r&&"toggle_button"!==a&&"comments"===i?!r||"comments"!==i||c&&"comments"===l||o.sideChannelEventEmitter.emit(o.COMMENTS_HIDDEN_SIGNAL):o.sideChannelEventEmitter.emit(o.COMMENTS_VISIBLE_SIGNAL)},t.prototype.componentWillUnmount=function(){this.props.dispatch(f.reset()),this.props.dispatch(u.reset())},t.prototype.renderCommentsTab=function(){var e=this.props.tabs.comments;return r.default.createElement(c.FileSidebarBase.Tab,{key:"comments",name:a._("Comments"),count:e.count,contentClassName:"comments2-sidebar-tab-content"},r.default.createElement(l.ManagedCommentsTab,i.__assign({},this.props,I(this.props))))},t.prototype.renderFileActivityTab=function(){var e=this.props,t=e.currentFile,i=e.user;return r.default.createElement(c.FileSidebarBase.Tab,{key:"activity",name:a._("Activity")},r.default.createElement(h.FileActivityStream,{file:t,user:i}))},t.prototype.renderFileMetadataTab=function(){var e=this.props,t=e.currentFile,i=e.user,s=e.sharedLinkInfo,o=e.activeTab,n=e.previewType,l="metadata"===o;return r.default.createElement(c.FileSidebarBase.Tab,{key:"metadata",name:a._("About",{comment:"Tab name on the sidebar"})},r.default.createElement(y.MetadataTab,{file:t,user:i,sharedLinkInfo:s,isActiveTab:l,previewType:n}))},t.prototype.render=function(){var e=this.props,t=e.activeTab,i=e.open,a=e.ready,s=e.tabs,o=s.comments,n=s.activity,l=s.metadata;if(E.isFiles2ControllerExperimentOn()&&!this.props.mode)return r.default.createElement("div",{className:"file-sidebar"});var d=[o.show?this.renderCommentsTab():null,n.show?this.renderFileActivityTab():null,l.show?this.renderFileMetadataTab():null].filter(function(e){return e});if(0===d.length)return r.default.createElement("div",{className:"file-sidebar"});var m=null;return M.GEMINI_THIRDPARTY_ACTIVITY_ONBOARDING_BLUEDOT&&(m=r.default.createElement(A.ThirdPartyActivityOnboardingBlueDot,{user:this.props.user,activityTabClicked:this.props.activityTabClicked,fileActivities:this.props.fileActivities,showActivityTab:n.show})),r.default.createElement(c.FileSidebarBase,{activeTabKey:t,isOpen:a&&i,onSelectTab:this.onSelectTab,headerComponent:this.props.headerComponent,thirdpartyOnboardingDot:m},d)},t})(r.default.Component);t.FileSidebarComponent=O;var N=d.fileSidebarConnect(w)(O);t.FileSidebar=s.requireCssWithComponent(N,["/static/css/file-sidebar-vfl9kGbXX.css"])});
//# sourceMappingURL=file_sidebar_component.min.js-vflIku_Qw.map