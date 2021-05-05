define(["require","exports","tslib","react","external/prop-types","modules/clean/web_timing_logger","modules/clean/api_v2/default_user_client","modules/clean/integrations/integration_popover","modules/clean/integrations/data/store","modules/clean/integrations/performance_timer","modules/clean/integrations/log_event","modules/clean/integrations/report_error"],function(e,t,r,n,o,i,a,s,l,u,p,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=r.__importDefault(n),o=r.__importStar(o);var d=(function(e){function t(t){var r=e.call(this,t)||this;r.mounted=!1,r.popoverGroup=new s.IntegrationPopoverGroup,r.getApiV2Client=function(){return r.apiV2Client},r.getIntegrationStore=function(){return r.state.integrationStore},r.getPopoverGroup=function(){return r.popoverGroup},r.profileCardV2Enabled=function(){return r.state.profileCardV2Enabled},r.shouldAutoDisplayTooltip=function(){return r.state.autoDisplayTooltip},r.connectServiceLandingPagesEnabled=function(){return r.state.connectServiceLandingPagesEnabled},r.getPerformanceTimer=function(){return r.performanceTimer},r.getLogEvent=function(){return r.logEvent},r.getReportError=function(){return r.reportError},r.apiV2Client=new a.DefaultUserApiV2Client(r.props.user),r.performanceTimer=u.WebPerformanceTimer;var n=p.createIntegrationsActionsLogger();return r.logEvent=n.logEvent,r.reportError=c.webReportError,r.state={integrationStore:l.initStoreForIntegration(r.props.user.id),profileCardV2Enabled:void 0,autoDisplayTooltip:!1,connectServiceLandingPagesEnabled:!1},r}return r.__extends(t,e),t.prototype.getChildContext=function(){return{getApiV2Client:this.getApiV2Client,getIntegrationStore:this.getIntegrationStore,getPopoverGroup:this.getPopoverGroup,profileCardV2Enabled:this.profileCardV2Enabled,shouldAutoDisplayTooltip:this.shouldAutoDisplayTooltip,performanceTimer:this.getPerformanceTimer,logEvent:this.getLogEvent,reportError:this.getReportError}},t.prototype.componentDidMount=function(){var e=this;this.mounted=!0,i.waitForTTI().then(function(){return r.__awaiter(e,void 0,void 0,function(){var e,t,n;return r.__generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,this.apiV2Client.ns("integrations").rpc("get_user_settings",void 0,{})];case 1:return e=r.sent(),this.mounted&&(t=e.dismissed_prompts.filter(function(e){return"tooltip_click_for_more_auto_display"===e[".tag"]}).length>0,this.setState({autoDisplayTooltip:!t})),[3,3];case 2:return n=r.sent(),this.reportError(n,"non-critical",["ProfileCard"],{endpoint:"integrations/get_user_settings",entry_point:"file preview"}),[3,3];case 3:return[2]}})})}),i.waitForTTI().then(function(){return r.__awaiter(e,void 0,void 0,function(){var e,t,n,o;return r.__generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,this.apiV2Client.ns("integrations").rpc("are_features_available",{features:[{feature:"profile_card_v2",entry_point:"file_preview_top_bar"},{feature:"connect_service_landing_pages",entry_point:"file_preview_top_bar"}]},{})];case 1:return e=r.sent(),this.mounted&&(t=!1,n=!1,e.features.forEach(function(e){"profile_card_v2"===e.feature&&"available"===e.available[".tag"]&&(t=!0),"connect_service_landing_pages"===e.feature&&"available"===e.available[".tag"]&&(n=!0)}),this.setState({profileCardV2Enabled:t,connectServiceLandingPagesEnabled:n})),[3,3];case 2:return o=r.sent(),this.reportError(o,"non-critical",["ProfileCard"],{endpoint:"integrations/are_features_available",entry_point:"file preview"}),this.mounted&&this.setState({profileCardV2Enabled:!1,connectServiceLandingPagesEnabled:!1}),[3,3];case 3:return[2]}})})})},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return n.default.Children.only(this.props.children)},t.childContextTypes={getApiV2Client:o.func,getIntegrationStore:o.func,getPopoverGroup:o.func,profileCardV2Enabled:o.func,shouldAutoDisplayTooltip:o.func,performanceTimer:o.func,logEvent:o.func,reportError:o.func},t})(n.default.Component);t.IntegrationProvider=d});
//# sourceMappingURL=integration_provider.min.js-vflZONcZS.map