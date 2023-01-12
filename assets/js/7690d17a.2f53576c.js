"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[50947],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},17806:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Deployment"},i=void 0,l={unversionedId:"modules/dataproxy/quick_start",id:"version-1.0.0/modules/dataproxy/quick_start",title:"Deployment",description:"All deploying files at inlong-dataproxy directory.",source:"@site/versioned_docs/version-1.0.0/modules/dataproxy/quick_start.md",sourceDirName:"modules/dataproxy",slug:"/modules/dataproxy/quick_start",permalink:"/docs/1.0.0/modules/dataproxy/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.0.0/modules/dataproxy/quick_start.md",tags:[],version:"1.0.0",frontMatter:{title:"Deployment"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/1.0.0/modules/dataproxy/overview"},next:{title:"Overview",permalink:"/docs/1.0.0/modules/tubemq/overview"}},u={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Configure Message Queue",id:"configure-message-queue",level:3},{value:"Configure InLong-Manager URL",id:"configure-inlong-manager-url",level:3},{value:"run",id:"run",level:2},{value:"check",id:"check",level:2},{value:"Add DataProxy configuration to InLong-Manager",id:"add-dataproxy-configuration-to-inlong-manager",level:2}],s={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All deploying files at ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-dataproxy")," directory."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"configure-message-queue"},"Configure Message Queue"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you use InLong TubeMQ, ",(0,a.kt)("inlineCode",{parentName:"li"},"tubemq_master_list")," is the rpc address of TubeMQ Master.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sed -i 's/TUBE_LIST/tubemq_master_list/g' conf/flume.conf\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you use Apache Pulsar, replace ",(0,a.kt)("inlineCode",{parentName:"li"},"pulsar_server_url_list")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"conf/flume-mulit-pulsar-tcp-example.conf")," and overwrite ",(0,a.kt)("inlineCode",{parentName:"li"},"conf/flume.conf"),".")),(0,a.kt)("p",null,"notice that conf/flume.conf FLUME_HOME is proxy the directory for proxy inner data"),(0,a.kt)("h3",{id:"configure-inlong-manager-url"},"Configure InLong-Manager URL"),(0,a.kt)("p",null,"configuration file: ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/common.properties"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# manager address\nmanager_hosts=127.0.0.1:8083\n# audit proxy address\naudit.proxys=127.0.0.1:10081\n")),(0,a.kt)("h2",{id:"run"},"run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sh bin/dataproxy-start.sh\n")),(0,a.kt)("h2",{id:"check"},"check"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"telnet 127.0.0.1 46801\n")),(0,a.kt)("h2",{id:"add-dataproxy-configuration-to-inlong-manager"},"Add DataProxy configuration to InLong-Manager"),(0,a.kt)("p",null,"After installing the DataProxy, you need to insert the IP and port of the DataProxy service is located into the backend database of InLong-Manager."),(0,a.kt)("p",null,"The SQL statement is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'-- address is the IP of the DataProxy service is located\nUPDATE apache_inlong_manager.data_proxy_cluster SET address="replace_by_dataproxy_ip" WHERE name="default_dataproxy";\n')))}p.isMDXComponent=!0}}]);