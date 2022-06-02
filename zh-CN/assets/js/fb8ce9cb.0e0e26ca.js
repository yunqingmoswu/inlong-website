"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4365],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56729:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i=["components"],o={title:"\u5b89\u88c5\u90e8\u7f72"},u=void 0,p={unversionedId:"modules/manager/quick_start",id:"modules/manager/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u73af\u5883\u51c6\u5907",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/modules/manager/quick_start.md",sourceDirName:"modules/manager",slug:"/modules/manager/quick_start",permalink:"/zh-CN/docs/next/modules/manager/quick_start",draft:!1,editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/manager/quick_start.md",tags:[],version:"current",frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72"},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/next/modules/manager/overview"},next:{title:"\u6982\u89c8",permalink:"/zh-CN/docs/next/modules/dashboard/overview"}},s={},c=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"Flink \u63d2\u4ef6",id:"flink-\u63d2\u4ef6",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"\u6ce8\u518c\u6d88\u606f\u961f\u5217",id:"\u6ce8\u518c\u6d88\u606f\u961f\u5217",level:2}],m={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5b89\u88c5\u5e76\u542f\u52a8 MySQL 5.7+")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u521d\u59cb\u5316\u6570\u636e\u5e93\n",(0,l.kt)("inlineCode",{parentName:"p"},"inlong-manager")," \u76ee\u5f55\u4e0b\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"sql/apache_inlong_manager.sql"),"\u6587\u4ef6\uff0c\u901a\u8fc7\u4e0b\u8ff0\u547d\u4ee4\u52a0\u8f7d\u6b64\u6587\u4ef6\uff0c\u5b8c\u6210\u8868\u7ed3\u6784\u53ca\u57fa\u7840\u6570\u636e\u7684\u521d\u59cb\u5316\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u901a\u8fc7\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u521b\u5efaDB\u548c\u8868\uff1a\nmysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_manager.sql\n")))),(0,l.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 MySQL \u6570\u636e\u5e93\uff0c\u8bf7\u4e0b\u8f7d ",(0,l.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar"),", \u5e76\u5c06\u5176\u653e\u5165 ",(0,l.kt)("inlineCode",{parentName:"li"},"lib/")," \u76ee\u5f55\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 PostgreSQL \u6570\u636e\u5e93\uff0c\u4e0d\u9700\u8981\u5f15\u5165\u989d\u5916\u4f9d\u8d56\u3002")),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("p",null,"\u524d\u5f80 ",(0,l.kt)("inlineCode",{parentName:"p"},"inlong-manager")," \u76ee\u5f55\uff0c\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/application.properties")," \u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"# manager \u670d\u52a1\u7684\u7aef\u53e3\u53f7\nserver.port=8083\n\n# \u9ed8\u8ba4\u4f7f\u7528\u7684\u914d\u7f6e\u6587\u4ef6\u4e3a dev\nspring.profiles.active=dev\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u6307\u5b9a\u4e86 dev \u914d\u7f6e\uff0c\u63a5\u4e0b\u6765\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/application-dev.properties")," \u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"spring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true&serverTimezone=GMT%2b8\nspring.datasource.druid.username=root\nspring.datasource.druid.password=inlong\n")),(0,l.kt)("h2",{id:"flink-\u63d2\u4ef6"},"Flink \u63d2\u4ef6"),(0,l.kt)("p",null,"InLong \u652f\u6301 Manager \u53d1\u8d77 Sort \u4efb\u52a1\u8fdb\u884c\u6570\u636e\u5206\u62e3\uff0c\u9700\u8981\u5148\u914d\u7f6e Flink \u73af\u5883\u4fe1\u606f\u3002\u914d\u7f6e\u6587\u4ef6\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"plugins/flink-sort-plugin.properties"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"# Flink host split by coma if more than one host, such as 'host1,host2'\nflink.rest.address=127.0.0.1\n# Flink port\nflink.rest.port=8081\n# Flink jobmanager port\nflink.jobmanager.port=6123\n# InLong Audit Proxy Address\nmetrics.audit.proxy.hosts=127.0.0.1:10081\n")),(0,l.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"bash +x bin/startup.sh\n")),(0,l.kt)("h2",{id:"\u6ce8\u518c\u6d88\u606f\u961f\u5217"},"\u6ce8\u518c\u6d88\u606f\u961f\u5217"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u82e5\u4f7f\u7528InLong TubeMQ\uff0c\u6ce8\u518c\u547d\u4ee4\u4e3a\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" --request POST http://localhost:8083/api/inlong/manager/openapi/cluster/save --data \'\n{\n        "name": "tube_cluster",\n        "type": "TUBE",\n        "mqSetName": "default_set_name",\n        "extParams": "{\\"tube.manager.url\\": \\"127.0.0.1:8080\\", \\"tube.master.url\\": \\"127.0.0.1:8715\\", \\"tube.cluster.id\\": \\"1\\"}",\n        "inCharges": "admin",\n        "creator": "admin"\n}\'\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"extParams"),": \u96c6\u7fa4\u914d\u7f6e\u4fe1\u606f\uff0c\u6309\u7167JSON\u683c\u5f0f\u8bbe\u7f6e\uff0c\u6bd4\u5982:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tube.manager.url": "http://127.0.0.1:8080",\n  "tube.master.url": "127.0.0.1:8715",\n  "tube.cluster.id": "1"\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u82e5\u4f7f\u7528Pulsar\uff0c\u6ce8\u518c\u547d\u4ee4\u4e3a\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" --request POST http://localhost:8083/api/inlong/manager/openapi/cluster/save --data \'\n{\n        "name": "pulsar_cluster",\n        "type": "PULSAR",\n        "url": "pulsar://pulsar:6650",\n        "token": "null",\n        "mqSetName": "default_set_name",\n        "extParams": "{\\"pulsar_adminUrl\\": \\"http://pulsar:8080\\"}",\n        "inCharges": "admin",\n        "creator": "admin"\n}\'\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"url"),"\u4e3aPulsar\u96c6\u7fa4\u7684\u5730\u5740\uff0c\u5f62\u5982",(0,l.kt)("inlineCode",{parentName:"li"},"pulsar://127.0.0.1:6650,127.0.0.1:6650,127.0.0.1:6650")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pulsar_adminUrl"),"\u4e3a\u5176\u5b83\u96c6\u7fa4\u914d\u7f6e\u4fe1\u606f")))}d.isMDXComponent=!0}}]);