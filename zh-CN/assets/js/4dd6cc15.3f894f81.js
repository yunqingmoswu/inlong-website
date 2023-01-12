"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[33855],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||l;return r?n.createElement(k,o(o({ref:t},i),{},{components:r})):n.createElement(k,o({ref:t},i))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},43054:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"\u76d1\u63a7\u6307\u6807",sidebar_position:4},o=void 0,s={unversionedId:"modules/sort/metrics",id:"version-1.4.0/modules/sort/metrics",title:"\u76d1\u63a7\u6307\u6807",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.4.0/modules/sort/metrics.md",sourceDirName:"modules/sort",slug:"/modules/sort/metrics",permalink:"/zh-CN/docs/modules/sort/metrics",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.4.0/modules/sort/metrics.md",tags:[],version:"1.4.0",sidebarPosition:4,frontMatter:{title:"\u76d1\u63a7\u6307\u6807",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u793a\u4f8b",permalink:"/zh-CN/docs/modules/sort/example"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/modules/manager/overview"}},d={},p=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u6307\u6807",id:"\u6307\u6807",level:2},{value:"\u652f\u6301\u7684 extract \u8282\u70b9",id:"\u652f\u6301\u7684-extract-\u8282\u70b9",level:3},{value:"\u652f\u6301\u7684 load \u8282\u70b9",id:"\u652f\u6301\u7684-load-\u8282\u70b9",level:3},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2}],i={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,a.kt)("p",null,"\u6211\u4eec\u4e3a\u8282\u70b9\u589e\u52a0\u4e86\u6307\u6807\u8ba1\u7b97\u3002 \u7528\u6237\u6dfb\u52a0 with \u9009\u9879 ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong.metric")," \u540e Sort \u4f1a\u8ba1\u7b97\u6307\u6807\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"inlong.metric")," \u9009\u9879\u7684\u503c\u7531\u4e09\u90e8\u5206\u6784\u6210\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"groupId&streamId&nodeId"),"\u3002\n\u7528\u6237\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/deployment/metric_reporters/"},"metric reporter")," \u53bb\u4e0a\u62a5\u6570\u636e\u3002"),(0,a.kt)("h2",{id:"\u6307\u6807"},"\u6307\u6807"),(0,a.kt)("h3",{id:"\u652f\u6301\u7684-extract-\u8282\u70b9"},"\u652f\u6301\u7684 extract \u8282\u70b9"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"extract \u8282\u70b9"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numRecordsIn"),(0,a.kt)("td",{parentName:"tr",align:null},"kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u8bb0\u5f55\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numBytesIn"),(0,a.kt)("td",{parentName:"tr",align:null},"kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u5b57\u8282\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numRecordsInPerSecond"),(0,a.kt)("td",{parentName:"tr",align:null},"kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6bcf\u79d2\u8f93\u5165\u8bb0\u5f55\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numBytesInPerSecond"),(0,a.kt)("td",{parentName:"tr",align:null},"kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6bcf\u79d2\u8f93\u5165\u5b57\u8282\u6570")))),(0,a.kt)("h3",{id:"\u652f\u6301\u7684-load-\u8282\u70b9"},"\u652f\u6301\u7684 load \u8282\u70b9"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"load \u8282\u70b9"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numRecordsOut"),(0,a.kt)("td",{parentName:"tr",align:null},"clickhouse,elasticsearch,greenplum,hbase,",(0,a.kt)("br",null),"hdfs,hive,iceberg,kafka,",(0,a.kt)("br",null),"mysql,oracle,postgresql,sqlserver,tdsql-postgresql"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u8bb0\u5f55\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numBytesOut"),(0,a.kt)("td",{parentName:"tr",align:null},"clickhouse,elasticsearch,greenplum,hbase,",(0,a.kt)("br",null),"hdfs,hive,iceberg,kafka,",(0,a.kt)("br",null),"mysql,oracle,postgresql,sqlserver,tdsql-postgresql"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u5b57\u8282\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numRecordsOutPerSecond"),(0,a.kt)("td",{parentName:"tr",align:null},"clickhouse,elasticsearch,greenplum,",(0,a.kt)("br",null),"hbase,hdfs,hive,iceberg,",(0,a.kt)("br",null),"kafka,mysql,oracle,postgresql,sqlserver,tdsql-postgresql"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6bcf\u79d2\u8f93\u51fa\u8bb0\u5f55\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numBytesOutPerSecond"),(0,a.kt)("td",{parentName:"tr",align:null},"clickhouse,elasticsearch,greenplum,",(0,a.kt)("br",null),"hbase,hdfs,hive,iceberg,kafka,",(0,a.kt)("br",null),"mysql,oracle,postgresql,sqlserver,tdsql-postgresql"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6bcf\u79d2\u8f93\u51fa\u5b57\u8282\u6570")))),(0,a.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,a.kt)("p",null,"\u8fd9\u91cc\u5c06\u4ecb\u7ecd\u4e00\u4e2a\u540c\u6b65MYSQL\u6570\u636e\u5230PostgreSQL\u7684\u4f8b\u5b50\uff0c\u540c\u65f6\u4ecb\u7ecd\u6307\u6807\u7684\u4f7f\u7528\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"flink sql \u7684\u4f7f\u7528")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"\n create table `table_groupId_streamId_nodeId1`(\n     `id` INT,\n    `name` INT,\n    `age` STRING,\n    PRIMARY KEY(`id`) NOT ENFORCED)\n    WITH (\n        'connector' = 'mysql-cdc-inlong',\n        'hostname' = 'xxxx',\n        'username' = 'xxx',\n        'password' = 'xxx',\n        'database-name' = 'test',\n        'scan.incremental.snapshot.enabled' = 'true',\n        'server-time-zone' = 'GMT+8',\n        'table-name' = 'user',\n        'inlong.metric' = 'mysqlGroup&mysqlStream&mysqlNode1'\n);\n\n CREATE TABLE `table_groupId_streamId_nodeId2`(\n     PRIMARY KEY (`id`) NOT ENFORCED,\n     `id` INT,\n     `name` STRING,\n     `age` INT)\n     WITH (\n         'connector' = 'jdbc-inlong',\n         'url' = 'jdbc:postgresql://ip:5432/postgres',\n         'username' = 'postgres',\n         'password' = 'inlong',\n         'table-name' = 'public.user',\n         'inlong.metric' = 'pggroup&pgStream&pgNode'\n         );\n\n INSERT INTO `table_groupId_streamId_nodeId2`\n SELECT\n     `id`,\n     `name`,\n     `age`\n FROM `table_groupId_streamId_nodeId1`;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6211\u4eec\u53ef\u4ee5\u5728flink-conf.yaml\u4e2d\u6dfb\u52a0metric report\u914d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"metric.reporters: promgateway\nmetrics.reporter.promgateway.class: org.apache.flink.metrics.prometheus.PrometheusPushGatewayReporter\nmetrics.reporter.promgateway.host: ip\nmetrics.reporter.promgateway.port: 9091\nmetrics.reporter.promgateway.interval: 60 SECONDS\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ip")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"port")," \u662f\u4f60\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus/pushgateway/releases"},"pushgateway")," \u7684\u914d\u7f6e\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c\u4e0a\u9762\u7684sql\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbf\u95ee pushgateway \u7684 url: http://ip:port")),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u4f7f\u7528\u7684 metric report \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.flink.metrics.prometheus.PrometheusPushGatewayReporter")," \u6307\u6807\u540d\u5c06\u6dfb\u52a0\u524d\u7f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"flink_taskmanager_job_task_operator"),"\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u5b8c\u6574\u7684\u6307\u6807\u540d\u5982\u4e0b:",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("inlineCode",{parentName:"p"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsIn"),",",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("inlineCode",{parentName:"p"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesIn"),",",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("inlineCode",{parentName:"p"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsInPerSecond"),",",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("inlineCode",{parentName:"p"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesInPerSecond"),",",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("inlineCode",{parentName:"p"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsOut"),",",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("inlineCode",{parentName:"p"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesOut"),",",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("inlineCode",{parentName:"p"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsOutPerSecond"),",",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("inlineCode",{parentName:"p"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesOutPerSecond"),"."))}m.isMDXComponent=!0}}]);