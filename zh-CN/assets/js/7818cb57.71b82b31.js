"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[50877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},l=void 0,i={unversionedId:"modules/dataproxy/quick_start",id:"modules/dataproxy/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u6240\u6709\u7684\u5b89\u88c5\u6587\u4ef6\u90fd\u5728 inlong-dataproxy \u76ee\u5f55\u4e0b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/modules/dataproxy/quick_start.md",sourceDirName:"modules/dataproxy",slug:"/modules/dataproxy/quick_start",permalink:"/zh-CN/docs/next/modules/dataproxy/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/dataproxy/quick_start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/next/modules/dataproxy/overview"},next:{title:"\u53c2\u6570\u914d\u7f6e",permalink:"/zh-CN/docs/next/modules/dataproxy/configuration"}},p={},s=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u914d\u7f6e InLong-Manager \u5730\u5740",id:"\u914d\u7f6e-inlong-manager-\u5730\u5740",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"\u68c0\u67e5",id:"\u68c0\u67e5",level:2},{value:"\u5c06 DataProxy \u6ce8\u518c\u5230 InLong-Manager",id:"\u5c06-dataproxy-\u6ce8\u518c\u5230-inlong-manager",level:2}],c={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6240\u6709\u7684\u5b89\u88c5\u6587\u4ef6\u90fd\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-dataproxy")," \u76ee\u5f55\u4e0b\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("h3",{id:"\u914d\u7f6e-inlong-manager-\u5730\u5740"},"\u914d\u7f6e InLong-Manager \u5730\u5740"),(0,a.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"conf/common.properties"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# local IP\nproxy.local.ip=127.0.0.1\n# manager \u5730\u5740\nmanager.hosts=127.0.0.1:8083\n# audit proxy \u5730\u5740\naudit.proxys=127.0.0.1:10081\n")),(0,a.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u9ed8\u8ba4\u4f7f\u7528 Pulsar \u6765\u7f13\u5b58\u6570\u636e\uff0c\u52a0\u8f7d dataproxy-pulsar.conf \u914d\u7f6e\u6587\u4ef6\nbash +x bin/dataproxy-start.sh\n# \u6216\u8005\nbash +x bin/dataproxy-start.sh pulsar\n\n# \u5982\u679c\u4f7f\u7528 Inlong TubeMQ \u6765\u7f13\u5b58\u6570\u636e\n# bash +x bin/dataproxy-start.sh tubemq\n\n# \u5982\u679c\u4f7f\u7528 Kafka \u6765\u7f13\u5b58\u6570\u636e\n# bash +x bin/dataproxy-start.sh kafka\n")),(0,a.kt)("h2",{id:"\u68c0\u67e5"},"\u68c0\u67e5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"telnet 127.0.0.1 46801\n")),(0,a.kt)("h2",{id:"\u5c06-dataproxy-\u6ce8\u518c\u5230-inlong-manager"},"\u5c06 DataProxy \u6ce8\u518c\u5230 InLong-Manager"),(0,a.kt)("p",null,"\u5b89\u88c5\u5b8c DataProxy \u540e\uff0c\u9700\u8981\u5c06 DataProxy \u670d\u52a1\u7684 IP \u6dfb\u52a0\u5230 InLong-Manager \u4e2d\u3002"),(0,a.kt)("p",null,"\u6253\u5f00 Inlong-Dashboard \u9875\u9762\uff08\u9ed8\u8ba4\u662f ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1"},"http://127.0.0.1"),"\uff09\uff0c\u5728 ","[\u96c6\u7fa4\u7ba1\u7406]"," \u9875\u7b7e\u4e2d\u9009\u62e9\u6dfb\u52a0 DataProxy \u96c6\u7fa4\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(12851).Z,width:"840",height:"409"})),(0,a.kt)("p",null,"\u70b9\u51fb ","[\u65b0\u5efa\u96c6\u7fa4]"," \u6309\u94ae\uff0c\u5728\u5f39\u51fa\u7684\u6846\u4e2d\u586b\u5199 \u96c6\u7fa4\u540d\u79f0\u3001\u96c6\u7fa4\u6807\u7b7e\u3001\u8d23\u4efb\u4eba \u5373\u53ef\u4fdd\u5b58\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8bf4\u660e\uff1a","[\u96c6\u7fa4\u6807\u7b7e]"," \u662f\u4e00\u4e2a\u903b\u8f91\u6982\u5ff5\uff0c\u540c\u540d\u7684\u6807\u7b7e\u5c06\u88ab\u89c6\u4e3a\u540c\u4e00\u5957\u96c6\u7fa4\uff0c\u6bd4\u5982\u76f8\u540c\u96c6\u7fa4\u6807\u7b7e\u7684 DataProxy \u96c6\u7fa4\u548c Pulsar \u96c6\u7fa4\uff0c\u5c5e\u4e8e\u540c\u4e00\u5957\u96c6\u7fa4\u3002")),(0,a.kt)("p",null,"\u7136\u540e\u4e3a\u6b64 DataProxy \u96c6\u7fa4\u6dfb\u52a0\u8282\u70b9 \u2014\u2014 \u4e00\u4e2a DataProxy \u96c6\u7fa4\u53ef\u4ee5\u652f\u6301\u6dfb\u52a0\u591a\u4e2a\u8282\u70b9\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(32226).Z,width:"841",height:"400"})),(0,a.kt)("p",null,"\u586b\u5199 DataProxy \u8282\u70b9\u7684 IP \u548c\u7aef\u53e3\u5373\u53ef\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(36275).Z,width:"840",height:"457"})))}u.isMDXComponent=!0},12851:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dp_cluster_cn-520b6e359e1818d9e71f159a74902aa2.png"},32226:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dp_cluster_node_cn-8b911466b0e7d45be82d085e17c8cbeb.png"},36275:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dp_cluster_node_save_cn-bb28b7e9098fdd00d6b7e0c9efbaddd3.png"}}]);