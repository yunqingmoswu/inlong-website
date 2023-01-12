"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[20658],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return t?a.createElement(k,l(l({ref:n},u),{},{components:t})):a.createElement(k,l({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99503:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={title:"\u4f8b\u5b50",sidebar_position:3},l=void 0,s={unversionedId:"modules/sort/example",id:"version-1.3.0/modules/sort/example",title:"\u4f8b\u5b50",description:"\u793a\u4f8b",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.0/modules/sort/example.md",sourceDirName:"modules/sort",slug:"/modules/sort/example",permalink:"/zh-CN/docs/1.3.0/modules/sort/example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/modules/sort/example.md",tags:[],version:"1.3.0",sidebarPosition:3,frontMatter:{title:"\u4f8b\u5b50",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/1.3.0/modules/sort/quick_start"},next:{title:"\u76d1\u63a7\u6307\u6807",permalink:"/zh-CN/docs/1.3.0/modules/sort/metrics"}},i={},p=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:2},{value:"\u51c6\u5907 InLong Sort \u548c Connectors",id:"\u51c6\u5907-inlong-sort-\u548c-connectors",level:2},{value:"\u4f7f\u7528 SQL API \u65b9\u5f0f",id:"\u4f7f\u7528-sql-api-\u65b9\u5f0f",level:2},{value:"\u8bfb MySQL \u5199 Kafka",id:"\u8bfb-mysql-\u5199-kafka",level:3},{value:"\u8bfb Kafka \u5199 Hive",id:"\u8bfb-kafka-\u5199-hive",level:3},{value:"\u4f7f\u7528 Inlong Dashboard \u65b9\u5f0f",id:"\u4f7f\u7528-inlong-dashboard-\u65b9\u5f0f",level:2},{value:"\u4f7f\u7528 Manager Client Tools \u65b9\u5f0f",id:"\u4f7f\u7528-manager-client-tools-\u65b9\u5f0f",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,"\u4e3a\u4e86\u66f4\u5bb9\u6613\u521b\u5efa InLong Sort \u4f5c\u4e1a\uff0c\u8fd9\u91cc\u6211\u4eec\u5217\u51fa\u4e86\u4e00\u4e9b\u6570\u636e\u6d41\u914d\u7f6e\u793a\u4f8b\u3002\u4e0b\u9762\u5c06\u4ecb\u7ecd InLong Sort \u7684 SQL\u3001Dashboard\u3001Manager \u5ba2\u6237\u7aef\u5de5\u5177\u7684\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JDK 1.8.x"),(0,r.kt)("li",{parentName:"ul"},"Flink 1.13.5"),(0,r.kt)("li",{parentName:"ul"},"MySQL"),(0,r.kt)("li",{parentName:"ul"},"Kafka"),(0,r.kt)("li",{parentName:"ul"},"Hadoop"),(0,r.kt)("li",{parentName:"ul"},"Hive 3.x")),(0,r.kt)("h2",{id:"\u51c6\u5907-inlong-sort-\u548c-connectors"},"\u51c6\u5907 InLong Sort \u548c Connectors"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.0/modules/sort/quick_start"},"\u90e8\u7f72\u6307\u5f15"),"\u51c6\u5907 InLong Sort \u548c\u6570\u636e\u8282\u70b9 Connectors\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528-sql-api-\u65b9\u5f0f"},"\u4f7f\u7528 SQL API \u65b9\u5f0f"),(0,r.kt)("p",null,"\u793a\u4f8b\u6784\u5efa\u4e86 MySQL --\x3e Kafka --\x3e Hive \u7684\u6570\u636e\u6d41\uff0c\u4e3a\u4e86\u4fbf\u4e8e\u7406\u89e3\u6d41\u7a0b\u6267\u884c\u8fc7\u7a0b\u8fdb\u884c\u4e86\u62c6\u89e3\u3002"),(0,r.kt)("h3",{id:"\u8bfb-mysql-\u5199-kafka"},"\u8bfb MySQL \u5199 Kafka"),(0,r.kt)("p",null,"\u5355\u8868\u540c\u6b65\u914d\u7f6e\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./bin/flink run -c org.apache.inlong.sort.Entrance FLINK_HOME/lib/sort-dist-[version].jar \\\n--sql.script.file /YOUR_SQL_SCRIPT_DIR/mysql-to-kafka.sql\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mysql-to-kafka.sql")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `table_1`(\n    PRIMARY KEY (`id`) NOT ENFORCED,\n    `id` BIGINT,\n    `name` STRING,\n    `age` INT,\n    `salary` FLOAT,\n    `ts` TIMESTAMP(2),\n    `event_type` STRING)\n    WITH (\n    'append-mode' = 'true',\n    'connector' = 'mysql-cdc-inlong',\n    'hostname' = 'localhost',\n    'username' = 'root',\n    'password' = 'password',\n    'database-name' = 'dbName',\n    'table-name' = 'tableName'\n);\n\nCREATE TABLE `table_2`(\n    `id` BIGINT,\n    `name` STRING,\n    `age` INT,\n    `salary` FLOAT,\n    `ts` TIMESTAMP(2))\n    WITH (\n    'topic' = 'topicName',-- Your kafka topic\n    'properties.bootstrap.servers' = 'localhost:9092',\n    'connector' = 'kafka',\n    'json.timestamp-format.standard' = 'SQL',\n    'json.encode.decimal-as-plain-number' = 'true',\n    'json.map-null-key.literal' = 'null',\n    'json.ignore-parse-errors' = 'true',\n    'json.map-null-key.mode' = 'DROP',\n    'format' = 'json',\n    'json.fail-on-missing-field' = 'false'\n);\n\nINSERT INTO `table_2` \n    SELECT \n    `id` AS `id`,\n    `name` AS `name`,\n    `age` AS `age`,\n    CAST(NULL as FLOAT) AS `salary`,\n    `ts` AS `ts`\n    FROM `table_1`;\n\n")),(0,r.kt)("h3",{id:"\u8bfb-kafka-\u5199-hive"},"\u8bfb Kafka \u5199 Hive"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f:"),"  \u9996\u5148\u9700\u8981\u5728 hive \u4e2d\u521b\u5efa user \u8868\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./bin/flink run -c org.apache.inlong.sort.Entrance FLINK_HOME/lib/sort-dist-[version].jar \\\n--sql.script.file /YOUR_SQL_SCRIPT_DIR/kafka-to-hive.sql\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"kafka-to-hive.sql")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `table_1`(\n    `id` BIGINT,\n    `name` STRING,\n    `age` INT,\n    `salary` FLOAT,\n    `ts` TIMESTAMP(2)\n    WITH (\n    'topic' = 'topicName',-- Your kafka topic\n    'properties.bootstrap.servers' = 'localhost:9092',\n    'connector' = 'kafka',\n    'scan.startup.mode' = 'earliest-offset',\n    'json.timestamp-format.standard' = 'SQL',\n    'json.encode.decimal-as-plain-number' = 'true',\n    'json.map-null-key.literal' = 'null',\n    'json.ignore-parse-errors' = 'true',\n    'json.map-null-key.mode' = 'DROP',\n    'format' = 'json',\n    'json.fail-on-missing-field' = 'false',\n    'properties.group.id' = 'groupId'-- Your group id\n);\n\nCREATE TABLE `user`(\n    `id` BIGINT,\n    `name` STRING,\n    `age` INT,\n    `salary` FLOAT,\n    `ts` TIMESTAMP(9))\n    WITH (\n    'connector' = 'hive',\n    'default-database' = 'default',\n    'hive-version' = '3.1.2',\n    'hive-conf-dir' = 'hdfs://ip:9000/.../hive-site.xml' -- Put your hive-site.xml into HDFS\n);\n\nINSERT INTO `user` \n    SELECT \n    `id` AS `id`,\n    `name` AS `name`,\n    `age` AS `age`,\n    CAST(NULL as FLOAT) AS `salary`,\n    `ts` AS `ts`\n    FROM `table_1`;\n\n")),(0,r.kt)("p",null,"\u5907\u6ce8\uff1a\u4ee5\u4e0a\u8fc7\u7a0b\u6240\u6709\u7684 SQL \u53ef\u4ee5\u653e\u5728\u4e00\u4e2a\u6587\u4ef6\u4e2d\u63d0\u4ea4\u6267\u884c\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528-inlong-dashboard-\u65b9\u5f0f"},"\u4f7f\u7528 Inlong Dashboard \u65b9\u5f0f"),(0,r.kt)("p",null,"\u76ee\u524d Dashboard \u652f\u6301\u6587\u4ef6\u91c7\u96c6\u540c\u6b65\u7684\u65b9\u5f0f\uff0c\u4ee5\u4e0a\u6570\u636e\u6e90\u53ef\u89c6\u5316\u914d\u7f6e\u65b9\u5f0f\u6b63\u5728\u5f00\u53d1\u4e2d\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528-manager-client-tools-\u65b9\u5f0f"},"\u4f7f\u7528 Manager Client Tools \u65b9\u5f0f"),(0,r.kt)("p",null,"TODO: \u672a\u6765\u53d1\u5e03\u7684\u7248\u672c\u5c06\u4f1a\u652f\u6301\u3002"))}c.isMDXComponent=!0}}]);