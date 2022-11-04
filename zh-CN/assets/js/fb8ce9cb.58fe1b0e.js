"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[64365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},i=void 0,o={unversionedId:"modules/manager/quick_start",id:"modules/manager/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u73af\u5883\u51c6\u5907",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/modules/manager/quick_start.md",sourceDirName:"modules/manager",slug:"/modules/manager/quick_start",permalink:"/zh-CN/docs/next/modules/manager/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/modules/manager/quick_start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/next/modules/manager/overview"},next:{title:"\u53c2\u6570\u914d\u7f6e",permalink:"/zh-CN/docs/next/modules/manager/configure"}},p={},s=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u6dfb\u52a0\u4f9d\u8d56",id:"\u6dfb\u52a0\u4f9d\u8d56",level:2},{value:"\u4fee\u6539\u914d\u7f6e",id:"\u4fee\u6539\u914d\u7f6e",level:2},{value:"\u914d\u7f6e Flink \u63d2\u4ef6",id:"\u914d\u7f6e-flink-\u63d2\u4ef6",level:2},{value:"\u542f\u52a8\u670d\u52a1",id:"\u542f\u52a8\u670d\u52a1",level:2},{value:"\u6ce8\u518c MQ \u96c6\u7fa4",id:"\u6ce8\u518c-mq-\u96c6\u7fa4",level:2},{value:"Pulsar \u96c6\u7fa4",id:"pulsar-\u96c6\u7fa4",level:3},{value:"TubeMQ \u96c6\u7fa4",id:"tubemq-\u96c6\u7fa4",level:3},{value:"(\u53ef\u9009) \u5f00\u542fOpenAPI\u8ba4\u8bc1",id:"\u53ef\u9009-\u5f00\u542fopenapi\u8ba4\u8bc1",level:2},{value:"\u5f00\u542f\u8ba4\u8bc1",id:"\u5f00\u542f\u8ba4\u8bc1",level:3},{value:"\u914d\u7f6e\u8ba4\u8bc1",id:"\u914d\u7f6e\u8ba4\u8bc1",level:3},{value:"\u521b\u5efa\u8ba4\u8bc1Key",id:"\u521b\u5efa\u8ba4\u8bc1key",level:3}],u={toc:s};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b89\u88c5\u5e76\u542f\u52a8 MySQL 5.7+")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u521d\u59cb\u5316\u6570\u636e\u5e93\n",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-manager")," \u76ee\u5f55\u4e0b\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"sql/apache_inlong_manager.sql"),"\u6587\u4ef6\uff0c\u901a\u8fc7\u4e0b\u8ff0\u547d\u4ee4\u52a0\u8f7d\u6b64\u6587\u4ef6\uff0c\u5b8c\u6210\u8868\u7ed3\u6784\u53ca\u57fa\u7840\u6570\u636e\u7684\u521d\u59cb\u5316\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u901a\u8fc7\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u521b\u5efaDB\u548c\u8868\uff1a\nmysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_manager.sql\n")))),(0,a.kt)("h2",{id:"\u6dfb\u52a0\u4f9d\u8d56"},"\u6dfb\u52a0\u4f9d\u8d56"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d Sort ",(0,a.kt)("a",{parentName:"li",href:"https://inlong.apache.org/download/main"},"Connector Binary file"),", \u5e76\u89e3\u538b\u653e\u5165",(0,a.kt)("inlineCode",{parentName:"li"},"inlong-sort/connectors"),"\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528 MySQL \u6570\u636e\u5e93\uff0c\u8bf7\u4e0b\u8f7d ",(0,a.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar"),"\uff0c\u5c06\u5176\u653e\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"lib/")," \u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528 PostgreSQL \u6570\u636e\u5e93\uff0c\u5219\u65e0\u9700\u989d\u5916\u4e0b\u8f7d\u4f9d\u8d56\u5305\u3002")),(0,a.kt)("h2",{id:"\u4fee\u6539\u914d\u7f6e"},"\u4fee\u6539\u914d\u7f6e"),(0,a.kt)("p",null,"\u524d\u5f80 ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-manager")," \u76ee\u5f55\uff0c\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/application.properties")," \u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# manager \u670d\u52a1\u7684\u7aef\u53e3\u53f7\nserver.port=8083\n\n# \u9ed8\u8ba4\u4f7f\u7528\u7684\u914d\u7f6e\u6587\u4ef6\u4e3a dev\nspring.profiles.active=dev\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u6307\u5b9a\u4e86 dev \u914d\u7f6e\uff0c\u63a5\u4e0b\u6765\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/application-dev.properties")," \u6587\u4ef6\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u6307\u5b9a\u4e86 test \u6216 prod\uff0c\u5219\u4fee\u6539\u5bf9\u5e94\u7684 application-xxx.properties \u6587\u4ef6\u3002 ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"spring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true&serverTimezone=GMT%2b8\nspring.datasource.druid.username=root\nspring.datasource.druid.password=inlong\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e-flink-\u63d2\u4ef6"},"\u914d\u7f6e Flink \u63d2\u4ef6"),(0,a.kt)("p",null,"InLong Manager \u53ef\u542f\u52a8 Sort \u4efb\u52a1\u8fdb\u884c\u6570\u636e\u7684\u6d88\u8d39\u548c\u843d\u5730\uff0c\u9700\u8981\u5148\u914d\u7f6e Flink \u73af\u5883\u4fe1\u606f\u3002\u914d\u7f6e\u6587\u4ef6\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins/flink-sort-plugin.properties"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# Flink host split by coma if more than one host, such as 'host1,host2'\nflink.rest.address=127.0.0.1\n# Flink port\nflink.rest.port=8081\n# Flink job manager port\nflink.jobmanager.port=6123\n# InLong Audit Proxy Address\nmetrics.audit.proxy.hosts=127.0.0.1:10081\n")),(0,a.kt)("h2",{id:"\u542f\u52a8\u670d\u52a1"},"\u542f\u52a8\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"bash +x bin/startup.sh\n")),(0,a.kt)("h2",{id:"\u6ce8\u518c-mq-\u96c6\u7fa4"},"\u6ce8\u518c MQ \u96c6\u7fa4"),(0,a.kt)("h3",{id:"pulsar-\u96c6\u7fa4"},"Pulsar \u96c6\u7fa4"),(0,a.kt)("p",null,"\u82e5\u4f7f\u7528 Pulsar \u4f5c\u4e3a\u6570\u636e\u7f13\u5b58\u7684\u6d88\u606f\u961f\u5217\uff0c\u5219\u9700\u8981\u6dfb\u52a0\u5176\u914d\u7f6e\u5230 InLong-Manager \u4e2d\uff1a"),(0,a.kt)("p",null,"\u6253\u5f00 Inlong-Dashboard \u9875\u9762\uff08\u9ed8\u8ba4\u662f ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1"},"http://127.0.0.1"),"\uff09\uff0c\u5728 ","[\u96c6\u7fa4\u7ba1\u7406]"," \u9875\u7b7e\u4e2d\u9009\u62e9\u6dfb\u52a0 Pulsar \u96c6\u7fa4\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(73465).Z,width:"840",height:"406"})),(0,a.kt)("p",null,"\u70b9\u51fb ","[\u65b0\u5efa\u96c6\u7fa4]"," \u6309\u94ae\uff0c\u5728\u5f39\u51fa\u7684\u6846\u4e2d\u586b\u5199 \u96c6\u7fa4\u540d\u79f0\u3001\u96c6\u7fa4\u6807\u7b7e\u3001\u8d23\u4efb\u4eba\u3001AdminUrl\u3001ServiceUrl \u53ca\u9ed8\u8ba4\u79df\u6237\u7b49\u5fc5\u586b\u4fe1\u606f\u5373\u53ef\u4fdd\u5b58\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8bf4\u660e\uff1a","[\u96c6\u7fa4\u6807\u7b7e]"," \u662f\u4e00\u4e2a\u903b\u8f91\u6982\u5ff5\uff0c\u540c\u540d\u7684\u6807\u7b7e\u5c06\u88ab\u89c6\u4e3a\u540c\u4e00\u5957\u96c6\u7fa4\uff0c\u6bd4\u5982\u76f8\u540c\u96c6\u7fa4\u6807\u7b7e\u7684 DataProxy \u96c6\u7fa4\u548c Pulsar \u96c6\u7fa4\uff0c\u5c5e\u4e8e\u540c\u4e00\u5957\u96c6\u7fa4\u3002")),(0,a.kt)("p",null,"\u586b\u5199\u793a\u4f8b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(52628).Z,width:"518",height:"568"})),(0,a.kt)("h3",{id:"tubemq-\u96c6\u7fa4"},"TubeMQ \u96c6\u7fa4"),(0,a.kt)("p",null,"\u82e5\u4f7f\u7528 InLong TubeMQ \u4f5c\u4e3a\u6570\u636e\u7f13\u5b58\u7684\u6d88\u606f\u961f\u5217\uff0c\u5219\u9700\u8981\u6dfb\u52a0\u5176\u914d\u7f6e\u5230 InLong-Manager \u4e2d\uff1a"),(0,a.kt)("p",null,"\u4e0e\u4e0a\u8ff0 Pulsar \u96c6\u7fa4\u7684\u6dfb\u52a0\u5165\u53e3\u76f8\u4f3c\uff0c\u586b\u5199\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(75502).Z,width:"516",height:"464"})),(0,a.kt)("h2",{id:"\u53ef\u9009-\u5f00\u542fopenapi\u8ba4\u8bc1"},"(\u53ef\u9009) \u5f00\u542fOpenAPI\u8ba4\u8bc1"),(0,a.kt)("h3",{id:"\u5f00\u542f\u8ba4\u8bc1"},"\u5f00\u542f\u8ba4\u8bc1"),(0,a.kt)("p",null,"Manager \u63d0\u4f9b OpenAPI \u5b89\u5168\u8bbf\u95ee\u8ba4\u8bc1\uff0c\u9ed8\u8ba4\u5173\u95ed\u3002\u5982\u9700\u5f00\u542f\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/application.properties")," \u6253\u5f00\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# Manager OpenAPI\u5b89\u5168\u8ba4\u8bc1\u5f00\u5173\nopenapi.auth.enabled=true\n")),(0,a.kt)("h3",{id:"\u914d\u7f6e\u8ba4\u8bc1"},"\u914d\u7f6e\u8ba4\u8bc1"),(0,a.kt)("p",null,"\u76f8\u5173\u7ec4\u4ef6\u9700\u914d\u7f6e\u7531 Manager \u5206\u914d\u7684\u8ba4\u8bc1 secret id \u548c secret key\uff0c\u4f8b\u5982 (\u5efa\u8bae\u4f7f\u7528\u65b0\u5206\u914d\u7684\u66ff\u4ee3\u9ed8\u8ba4\u503c)\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Agent")," conf \u76ee\u5f55\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"agent.properties"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"agent.manager.auth.secretId=admin\nagent.manager.auth.secretKey=87haw3VYTPqK5fK0\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Dataproxy")," conf \u76ee\u5f55\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"common.properties"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"manager.auth.secretId=admin\nmanager.auth.secretKey=87haw3VYTPqK5fK0\n")),(0,a.kt)("h3",{id:"\u521b\u5efa\u8ba4\u8bc1key"},"\u521b\u5efa\u8ba4\u8bc1Key"),(0,a.kt)("p",null,"\u7ba1\u7406\u5458\u53ef\u4ee5\u767b\u5f55\u5e94\u9f99 Dashboard \u7ba1\u7406\u7aef\u6765\u521b\u5efa secret id \u548c secret key\uff1a ",(0,a.kt)("strong",{parentName:"p"},"\u7cfb\u7edf\u7ba1\u7406->\u7528\u6237\u7ba1\u7406->\u65b0\u5efa\u8d26\u53f7"),"."))}c.isMDXComponent=!0},73465:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pulsar_cluster_cn-74d92582e63b3a05296b4e8323bbdec8.png"},52628:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pulsar_cluster_save_cn-188f29b79c2fb91937cc759705a4f810.png"},75502:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tube_cluster_save_cn-3ce5233f7d3f23e9250ed59d818981e6.png"}}]);