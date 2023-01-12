"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[68525],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},89506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"MySQL",sidebar_position:3},i=void 0,c={unversionedId:"data_node/extract_node/mysql",id:"version-1.1.0/data_node/extract_node/mysql",title:"MySQL",description:"\u914d\u7f6e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/data_node/extract_node/mysql.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/mysql",permalink:"/zh-CN/docs/1.1.0/data_node/extract_node/mysql",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/data_node/extract_node/mysql.md",tags:[],version:"1.1.0",sidebarPosition:3,frontMatter:{title:"MySQL",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Kafka",permalink:"/zh-CN/docs/1.1.0/data_node/extract_node/kafka"},next:{title:"\u81ea\u4e3b\u6d88\u8d39",permalink:"/zh-CN/docs/1.1.0/data_node/load_node/auto_consumption"}},l={},s=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u6570\u636e\u6e90\u9009\u62e9 <code>BINLOG</code>",id:"\u6570\u636e\u6e90\u9009\u62e9-binlog",level:3},{value:"\u914d\u7f6e MySQL \u6570\u636e\u6e90",id:"\u914d\u7f6e-mysql-\u6570\u636e\u6e90",level:3}],d={toc:s};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("h3",{id:"\u6570\u636e\u6e90\u9009\u62e9-binlog"},"\u6570\u636e\u6e90\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"h3"},"BINLOG")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MySQL BINLOG",src:n(41102).Z,width:"1880",height:"399"})),(0,o.kt)("h3",{id:"\u914d\u7f6e-mysql-\u6570\u636e\u6e90"},"\u914d\u7f6e MySQL \u6570\u636e\u6e90"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MySQL SOURCE",src:n(18831).Z,width:"826",height:"898"})))}p.isMDXComponent=!0},41102:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mysql-binlog-21c890abab0f03d8f5b09f4e7ad2f778.png"},18831:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mysql-source-d4b1f4f4bbe3db4c9dfc6083aeb49d85.png"}}]);