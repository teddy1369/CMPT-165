define(["require","exports","tslib","react","external/react-redux","modules/clean/react/file_viewer/data/selectors","modules/clean/react/file_viewer/files2_utils","file-viewer/core","modules/clean/react/file_viewer/title_bar_main","modules/clean/react/watermarking/title_bar","modules/clean/react/watermarking/utils"],function(e,i,a,r,t,n,l,s,o,d,c){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),r=a.__importDefault(r),i.TitleBar=function(e){var i=e.canClose,t=e.canRestoreRevision,n=e.closeUrl,m=e.file,u=e.fileSubpath,f=e.fileViewAction,h=e.fileViewOrigin,g=e.hidePageChrome,w=e.isSeenStatesEnabled,_=e.isVersionHistoryMode,b=e.isViewingFileSubpath,V=e.maxFilenameEmLength,v=e.mode,C=e.onClose,k=e.onMount,E=e.onRestoreRevision,S=e.sharedLinkInfo,R=e.sharePermission,p=e.shareToken,F=e.sizeClass,M=e.user;if(l.isFiles2WatermarkingEnabled(M))return r.default.createElement(o.TitleBar,{canClose:i,canRestoreRevision:t,className:"title-bar__default",closeUrl:n,file:m,fileSubpath:u,fileViewAction:f,fileViewOrigin:h,hidePageChrome:g,isSeenStatesEnabled:w,isVersionHistoryMode:_,isViewingFileSubpath:b,maxFilenameEmLength:V,onClose:C,onMount:k,onRestoreRevision:E,sharedLinkInfo:S,sharePermission:R,shareToken:p,sizeClass:F,user:M});var T={"aria-hidden":"true"},L=v!==s.FileViewerMode.Watermarking?{}:T,P=v===s.FileViewerMode.Watermarking?{}:T,x=M&&c.allowWatermark(m,M);return r.default.createElement("div",null,r.default.createElement("div",a.__assign({},L),r.default.createElement(o.TitleBar,{canClose:i,canRestoreRevision:t,className:"title-bar__default",closeUrl:n,file:m,fileSubpath:u,fileViewAction:f,fileViewOrigin:h,hidePageChrome:g,isSeenStatesEnabled:w,isVersionHistoryMode:_,isViewingFileSubpath:b,maxFilenameEmLength:V,onClose:C,onMount:k,onRestoreRevision:E,sharedLinkInfo:S,sharePermission:R,shareToken:p,sizeClass:F,user:M})),x&&r.default.createElement("div",a.__assign({},P),r.default.createElement(d.TitleBar,{className:"title-bar__watermarking",file:m,fileSubpath:u,fileViewAction:f,fileViewOrigin:h,hidePageChrome:g,isVersionHistoryMode:_,isViewingFileSubpath:b,maxFilenameEmLength:V,sharedLinkInfo:S,sizeClass:F,user:M})))};var m=function(e){return{mode:n.getMode(e)}};i.ConnectedTitleBar=t.connect(m)(i.TitleBar)});
//# sourceMappingURL=title_bar_components.min.js-vfljyljVb.map