"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[83841],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"Deployment"},o=void 0,s={unversionedId:"modules/audit/quick_start",id:"version-1.0.0/modules/audit/quick_start",title:"Deployment",description:"All deploying files at inlong-audit directory, if you use MySQL to store audit data, you need to first create the database through sql/apacheinlongaudit.sql.",source:"@site/versioned_docs/version-1.0.0/modules/audit/quick_start.md",sourceDirName:"modules/audit",slug:"/modules/audit/quick_start",permalink:"/docs/1.0.0/modules/audit/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.0.0/modules/audit/quick_start.md",tags:[],version:"1.0.0",frontMatter:{title:"Deployment"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/1.0.0/modules/audit/overview"},next:{title:"Example",permalink:"/docs/1.0.0/sdk/dataproxy-sdk/example"}},l={},u=[{value:"Audit Proxy",id:"audit-proxy",level:2},{value:"Configure Pulsar",id:"configure-pulsar",level:3},{value:"Start",id:"start",level:3},{value:"Audit Store",id:"audit-store",level:2},{value:"Configure",id:"configure",level:3},{value:"Start",id:"start-1",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All deploying files at ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-audit")," directory, if you use MySQL to store audit data, you need to first create the database through ",(0,a.kt)("inlineCode",{parentName:"p"},"sql/apache_inlong_audit.sql"),"."),(0,a.kt)("h2",{id:"audit-proxy"},"Audit Proxy"),(0,a.kt)("h3",{id:"configure-pulsar"},"Configure Pulsar"),(0,a.kt)("p",null,"The configuration file  is ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/audit.conf"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},"agent1.sources.tcp-source.host = 0.0.0.0\nagent1.sources.tcp-source.port = 46801\nagent1.sinks.pulsar-sink-msg1.pulsar_server_url= pulsar://PULSAR_BROKER_LIST\nagent1.sinks.pulsar-sink-msg1.topic = persistent://public/default/inlong-audit\nagent1.sinks.pulsar-sink-msg2.pulsar_server_url = pulsar://PULSAR_BROKER_LIST\nagent1.sinks.pulsar-sink-msg2.topic = persistent://public/default/inlong-audit\n")),(0,a.kt)("h3",{id:"start"},"Start"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},"sh ./bin/proxy-start.sh\n")),(0,a.kt)("h2",{id:"audit-store"},"Audit Store"),(0,a.kt)("h3",{id:"configure"},"Configure"),(0,a.kt)("p",null,"The configuration file  is ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/application.properties"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},"# store.server: mysql / elasticsearch \naudit.config.store.mode=mysql\n# audit pulsar topic\naudit.pulsar.server.url=pulsar://127.0.0.1:6650\naudit.pulsar.topic=persistent://public/default/inlong-audit\naudit.pulsar.consumer.sub.name=sub-audit\n# mysql\nspring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL\nspring.datasource.druid.username=root\nspring.datasource.druid.password=inlong\n")),(0,a.kt)("h3",{id:"start-1"},"Start"),(0,a.kt)("p",null,"The startup script file ",(0,a.kt)("inlineCode",{parentName:"p"},"./bin/store-start.sh")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},"sh ./bin/store-start.sh\n")),(0,a.kt)("p",null,"The default listen port is ",(0,a.kt)("inlineCode",{parentName:"p"},"46801"),"."))}c.isMDXComponent=!0}}]);