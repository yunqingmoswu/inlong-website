"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[95186],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),f=o,m=l["".concat(s,".").concat(f)]||l[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},92307:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"Auto Push",sidebar_position:1},i=void 0,c={unversionedId:"data_node/extract_node/auto_push",id:"version-1.1.0/data_node/extract_node/auto_push",title:"Auto Push",description:"Overview",source:"@site/versioned_docs/version-1.1.0/data_node/extract_node/auto_push.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/auto_push",permalink:"/docs/1.1.0/data_node/extract_node/auto_push",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/data_node/extract_node/auto_push.md",tags:[],version:"1.1.0",sidebarPosition:1,frontMatter:{title:"Auto Push",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/1.1.0/modules/audit/quick_start"},next:{title:"File",permalink:"/docs/1.1.0/data_node/extract_node/file"}},s={},u=[{value:"Overview",id:"overview",level:2}],p={toc:u};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Auto Push")," meanings send data to DataProxy module using DataProxy SDK, collect without Agent.\nDataProxy SDK currently supports TCP, HTTP, UDP protocols, please refer to the usage method ",(0,o.kt)("a",{parentName:"p",href:"https://inlong.apache.org/docs/next/sdk/dataproxy-sdk/example/"},"DataProxy SDK Example"),"."))}l.isMDXComponent=!0}}]);