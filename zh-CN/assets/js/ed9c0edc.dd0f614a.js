"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[78011],{3905:(t,l,e)=>{e.d(l,{Zo:()=>s,kt:()=>m});var n=e(67294);function r(t,l,e){return l in t?Object.defineProperty(t,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[l]=e,t}function a(t,l){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var l=1;l<arguments.length;l++){var e=null!=arguments[l]?arguments[l]:{};l%2?a(Object(e),!0).forEach((function(l){r(t,l,e[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))}))}return t}function u(t,l){if(null==t)return{};var e,n,r=function(t,l){if(null==t)return{};var e,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)e=a[n],l.indexOf(e)>=0||(r[e]=t[e]);return r}(t,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)e=a[n],l.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var o=n.createContext({}),k=function(t){var l=n.useContext(o),e=l;return t&&(e="function"==typeof t?t(l):d(d({},l),t)),e},s=function(t){var l=k(t.components);return n.createElement(o.Provider,{value:l},t.children)},i="mdxType",c={inlineCode:"code",wrapper:function(t){var l=t.children;return n.createElement(n.Fragment,{},l)}},p=n.forwardRef((function(t,l){var e=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),i=k(e),p=r,m=i["".concat(o,".").concat(p)]||i[p]||c[p]||a;return e?n.createElement(m,d(d({ref:l},s),{},{components:e})):n.createElement(m,d({ref:l},s))}));function m(t,l){var e=arguments,r=l&&l.mdxType;if("string"==typeof t||r){var a=e.length,d=new Array(a);d[0]=p;var u={};for(var o in l)hasOwnProperty.call(l,o)&&(u[o]=l[o]);u.originalType=t,u[i]="string"==typeof t?t:r,d[1]=u;for(var k=2;k<a;k++)d[k]=e[k];return n.createElement.apply(null,d)}return n.createElement.apply(null,e)}p.displayName="MDXCreateElement"},9228:(t,l,e)=>{e.d(l,{Y:()=>n});const n={inLongVersion:"1.2.0-incubating"}},66818:(t,l,e)=>{e.r(l),e.d(l,{assets:()=>k,contentTitle:()=>u,default:()=>c,frontMatter:()=>d,metadata:()=>o,toc:()=>s});var n=e(87462),r=(e(67294),e(3905)),a=e(9228);const d={title:"MySQL-CDC",sidebar_position:6},u=void 0,o={unversionedId:"data_node/extract_node/mysql-cdc",id:"version-1.2.0/data_node/extract_node/mysql-cdc",title:"MySQL-CDC",description:"\u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2.0/data_node/extract_node/mysql-cdc.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/mysql-cdc",permalink:"/zh-CN/docs/1.2.0/data_node/extract_node/mysql-cdc",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.2.0/data_node/extract_node/mysql-cdc.md",tags:[],version:"1.2.0",sidebarPosition:6,frontMatter:{title:"MySQL-CDC",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"MongoDB-CDC",permalink:"/zh-CN/docs/1.2.0/data_node/extract_node/mongodb-cdc"},next:{title:"Oracle-CDC",permalink:"/zh-CN/docs/1.2.0/data_node/extract_node/oracle-cdc"}},k={},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u652f\u6301\u7684\u7248\u672c",id:"\u652f\u6301\u7684\u7248\u672c",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"Maven \u4f9d\u8d56",id:"maven-\u4f9d\u8d56",level:3},{value:"\u8bbe\u7f6e MySQL \u670d\u52a1\u5668",id:"\u8bbe\u7f6e-mysql-\u670d\u52a1\u5668",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u4e3a\u6bcf\u4e2a Reader \u8bbe\u7f6e\u4e00\u4e2a\u4e0d\u540c\u7684 SERVER ID",id:"\u4e3a\u6bcf\u4e2a-reader-\u8bbe\u7f6e\u4e00\u4e2a\u4e0d\u540c\u7684-server-id",level:3},{value:"\u8bbe\u7f6e MySQL \u4f1a\u8bdd\u8d85\u65f6",id:"\u8bbe\u7f6e-mysql-\u4f1a\u8bdd\u8d85\u65f6",level:3},{value:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a MySQL Extract \u8282\u70b9",id:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a-mysql-extract-\u8282\u70b9",level:2},{value:"SQL API \u7528\u6cd5",id:"sql-api-\u7528\u6cd5",level:3},{value:"InLong Dashboard \u7528\u6cd5",id:"inlong-dashboard-\u7528\u6cd5",level:3},{value:"InLong Manager Client \u7528\u6cd5",id:"inlong-manager-client-\u7528\u6cd5",level:3},{value:"MySQL Extract \u8282\u70b9\u53c2\u6570",id:"mysql-extract-\u8282\u70b9\u53c2\u6570",level:2},{value:"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5",id:"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],i={toc:s};function c(t){let{components:l,...d}=t;return(0,r.kt)("wrapper",(0,n.Z)({},i,d,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.kt)("p",null,"MySQL Extract \u8282\u70b9\u5141\u8bb8\u4ece MySQL \u6570\u636e\u5e93\u4e2d\u8bfb\u53d6\u5feb\u7167\u6570\u636e\u548c\u589e\u91cf\u6570\u636e\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u8bbe\u7f6e MySQL Extract \u8282\u70b9\u4ee5\u5bf9 MySQL \u6570\u636e\u5e93\u8fd0\u884c SQL \u67e5\u8be2\u3002"),(0,r.kt)("h2",{id:"\u652f\u6301\u7684\u7248\u672c"},"\u652f\u6301\u7684\u7248\u672c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Extract \u8282\u70b9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"),(0,r.kt)("th",{parentName:"tr",align:null},"Driver"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.2.0/data_node/extract_node/mysql-cdc"},"MySQL-CDC")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://dev.mysql.com/doc"},"MySQL"),": 5.6, 5.7, 8.0.x ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://www.aliyun.com/product/rds/mysql"},"RDS MySQL"),": 5.6, 5.7, 8.0.x ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://www.aliyun.com/product/polardb"},"PolarDB MySQL"),": 5.6, 5.7, 8.0.x ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://aws.amazon.com/cn/rds/aurora"},"Aurora MySQL"),": 5.6, 5.7, 8.0.x ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://mariadb.org"},"MariaDB"),": 10.x ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/ApsaraDB/galaxysql"},"PolarDB X"),": 2.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"JDBC Driver: 8.0.21")))),(0,r.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,r.kt)("p",null,"\u4e3a\u4e86\u8bbe\u7f6e MySQL Extract \u8282\u70b9\uff0c\u4e0b\u8868\u63d0\u4f9b\u4e86\u4f7f\u7528\u6784\u5efa\u81ea\u52a8\u5316\u5de5\u5177\uff08\u4f8b\u5982 Maven \u6216 SBT\uff09\u548c\u5e26\u6709 Sort Connectors JAR \u5305\u7684 SQL \u5ba2\u6237\u7aef\u7684\u4e24\u4e2a\u9879\u76ee\u7684\u4f9d\u8d56\u5173\u7cfb\u4fe1\u606f\u3002"),(0,r.kt)("h3",{id:"maven-\u4f9d\u8d56"},"Maven \u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-mysql-cdc</artifactId>\n    <version>${a.Y.inLongVersion}</version>\n</dependency>\n`)),(0,r.kt)("p",null,"\u8fde\u63a5 MySQL \u6570\u636e\u5e93\u8fd8\u9700\u8981 MySQL \u9a71\u52a8\u7a0b\u5e8f\u4f9d\u8d56\u9879\u3002\u8bf7\u4e0b\u8f7d",(0,r.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.21/mysql-connector-java-8.0.21.jar"},"mysql-connector-java-8.0.21.jar")," \u5e76\u5c06\u5176\u653e\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"FLINK_HOME/lib/"),"\u3002"),(0,r.kt)("h2",{id:"\u8bbe\u7f6e-mysql-\u670d\u52a1\u5668"},"\u8bbe\u7f6e MySQL \u670d\u52a1\u5668"),(0,r.kt)("p",null,"\u4f60\u5fc5\u987b\u5b9a\u4e49\u4e00\u4e2a\u5bf9 Debezium MySQL \u8fde\u63a5\u5668\u76d1\u63a7\u7684\u6240\u6709\u6570\u636e\u5e93\u5177\u6709\u9002\u5f53\u6743\u9650\u7684 MySQL \u7528\u6237\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa MySQL \u7528\u6237:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5411\u7528\u6237\u6388\u4e88\u6240\u9700\u7684\u6743\u9650:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> GRANT SELECT, SHOW DATABASES, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'user' IDENTIFIED BY 'password';\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"scan.incremental.snapshot.enabled")," \u65f6\u4e0d\u518d\u9700\u8981 RELOAD \u6743\u9650\uff08\u9ed8\u8ba4\u542f\u7528\uff09\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5237\u65b0\u7528\u6237\u7684\u6743\u9650\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> FLUSH PRIVILEGES;\n")),(0,r.kt)("p",null,"\u67e5\u770b\u66f4\u591a\u5173\u4e8e",(0,r.kt)("a",{parentName:"p",href:"https://debezium.io/documentation/reference/1.5/connectors/mysql.html#mysql-creating-user"},"\u6743\u9650\u8bf4\u660e"),"\u3002"),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("h3",{id:"\u4e3a\u6bcf\u4e2a-reader-\u8bbe\u7f6e\u4e00\u4e2a\u4e0d\u540c\u7684-server-id"},"\u4e3a\u6bcf\u4e2a Reader \u8bbe\u7f6e\u4e00\u4e2a\u4e0d\u540c\u7684 SERVER ID"),(0,r.kt)("p",null,"\u6bcf\u4e00\u4e2a\u8bfb\u53d6 Binlog \u7684 MySQL \u6570\u636e\u5e93\u5ba2\u6237\u7aef\u90fd\u5e94\u8be5\u6709\u4e00\u4e2a\u552f\u4e00\u7684 Id\uff0c\u79f0\u4e3a Server Id\u3002 MySQL \u670d\u52a1\u5668\u5c06\u4f7f\u7528\u6b64 Id \u6765\u7ef4\u62a4\u7f51\u7edc\u8fde\u63a5\u548c Binlog \u4f4d\u7f6e\u3002\u56e0\u6b64\uff0c\u5982\u679c\u4e0d\u540c\u7684\u4f5c\u4e1a\u5171\u4eab\u76f8\u540c\u7684\u670d\u52a1\u5668 Id\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4ece\u9519\u8bef\u7684 Binlog \u4f4d\u7f6e\u8bfb\u53d6\u3002\n\u56e0\u6b64\uff0c\u5efa\u8bae\u901a\u8fc7 ","[SQL Hints]","(",(0,r.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.11/dev/table/sql/hints"},"https://ci.apache.org/projects/flink/flink-docs-release-1.11/dev/table/sql/hints"),". html),\n\u4f8b\u5982\u5047\u8bbe\u6e90\u5e76\u884c\u5ea6\u4e3a 4\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT * FROM source_table /*+ OPTIONS('server-id'='5401-5404') */ ;")," \u4e3a 4 \u4e2a Source Reader \u4e2d\u7684\u6bcf\u4e00\u4e2a\u5206\u914d\u552f\u4e00\u7684\u670d\u52a1\u5668 Id\u3002"),(0,r.kt)("h3",{id:"\u8bbe\u7f6e-mysql-\u4f1a\u8bdd\u8d85\u65f6"},"\u8bbe\u7f6e MySQL \u4f1a\u8bdd\u8d85\u65f6"),(0,r.kt)("p",null,"\u5f53\u4e3a\u5927\u578b\u6570\u636e\u5e93\u5236\u4f5c\u521d\u59cb\u4e00\u81f4\u5feb\u7167\u65f6\uff0c\u60a8\u5efa\u7acb\u7684\u8fde\u63a5\u53ef\u80fd\u4f1a\u5728\u8bfb\u53d6\u8868\u65f6\u8d85\u65f6\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728 MySQL \u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"interactive_timeout")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"wait_timeout")," \u6765\u9632\u6b62\u8fd9\u79cd\u884c\u4e3a\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interactive_timeout"),"\uff1a\u670d\u52a1\u5668\u5728\u5173\u95ed\u4ea4\u4e92\u5f0f\u8fde\u63a5\u4e4b\u524d\u7b49\u5f85\u5176\u6d3b\u52a8\u7684\u79d2\u6570\u3002\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_interactive_timeout"},"MySQL \u6587\u6863"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wait_timeout"),"\uff1a\u670d\u52a1\u5668\u5728\u5173\u95ed\u975e\u4ea4\u4e92\u5f0f\u8fde\u63a5\u4e4b\u524d\u7b49\u5f85\u5176\u6d3b\u52a8\u7684\u79d2\u6570\u3002\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_wait_timeout"},"MySQL \u6587\u6863"),"\u3002")),(0,r.kt)("h2",{id:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a-mysql-extract-\u8282\u70b9"},"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a MySQL Extract \u8282\u70b9"),(0,r.kt)("h3",{id:"sql-api-\u7528\u6cd5"},"SQL API \u7528\u6cd5"),(0,r.kt)("p",null,"\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink SQL")," \u521b\u5efa\u4e00\u4e2a MySQL Extract \u8282\u70b9: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u8bbe\u7f6e Checkpoint \u4e3a 3000 \u6beb\u79d2                       \nFlink SQL> SET 'execution.checkpointing.interval' = '3s';   \n\nFlink SQL> CREATE TABLE mysql_extract_node (\n     order_id INT,\n     order_date TIMESTAMP(0),\n     customer_name STRING,\n     price DECIMAL(10, 5),\n     product_id INT,\n     order_status BOOLEAN,\n     PRIMARY KEY(order_id) NOT ENFORCED\n     ) WITH (\n     'connector' = 'mysql-cdc-inlong',\n     'hostname' = 'YourHostname',\n     'port' = '3306',\n     'username' = 'YourUsername',\n     'password' = 'YourPassword',\n     'database-name' = 'YourDatabaseName',\n     'table-name' = 'YourTableName');\n  \nFlink SQL> SELECT * FROM mysql_extract_node;\n")),(0,r.kt)("h3",{id:"inlong-dashboard-\u7528\u6cd5"},"InLong Dashboard \u7528\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Choose the ",(0,r.kt)("inlineCode",{parentName:"p"},"BINLOG")," Data Source\n",(0,r.kt)("img",{alt:"MySQL BINLOG",src:e(90963).Z,width:"1880",height:"399"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure the MySQL Source\n",(0,r.kt)("img",{alt:"MySQL SOURCE",src:e(24767).Z,width:"826",height:"898"})))),(0,r.kt)("h3",{id:"inlong-manager-client-\u7528\u6cd5"},"InLong Manager Client \u7528\u6cd5"),(0,r.kt)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd\u3002"),(0,r.kt)("h2",{id:"mysql-extract-\u8282\u70b9\u53c2\u6570"},"MySQL Extract \u8282\u70b9\u53c2\u6570"),(0,r.kt)("div",{class:"highlight"},(0,r.kt)("table",{class:"colwidths-auto docutils"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{class:"text-left",style:{width:"10%"}},"\u53c2\u6570"),(0,r.kt)("th",{class:"text-left",style:{width:"8%"}},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{class:"text-left",style:{width:"7%"}},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{class:"text-left",style:{width:"10%"}},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{class:"text-left",style:{width:"65%"}},"\u63cf\u8ff0"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"connector"),(0,r.kt)("td",null,"required"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u8fde\u63a5\u5668\uff0c\u8fd9\u91cc\u5e94\u8be5\u662f ",(0,r.kt)("code",null,"'mysql-cdc-inlong'"),"\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"hostname"),(0,r.kt)("td",null,"required"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"MySQL \u6570\u636e\u5e93\u670d\u52a1\u5668\u7684 IP \u5730\u5740\u6216\u4e3b\u673a\u540d\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"username"),(0,r.kt)("td",null,"required"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u8fde\u63a5\u5230 MySQL \u6570\u636e\u5e93\u670d\u52a1\u5668\u65f6\u8981\u4f7f\u7528\u7684 MySQL \u7528\u6237\u540d\u79f0\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"password"),(0,r.kt)("td",null,"required"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u8fde\u63a5\u5230 MySQL \u6570\u636e\u5e93\u670d\u52a1\u5668\u65f6\u4f7f\u7528\u7684\u5bc6\u7801\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"database-name"),(0,r.kt)("td",null,"required"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u8981\u76d1\u63a7\u7684 MySQL \u670d\u52a1\u5668\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002 database-name \u8fd8\u652f\u6301\u6b63\u5219\u8868\u8fbe\u5f0f\u6765\u76d1\u63a7\u591a\u4e2a\u8868\u662f\u5426\u5339\u914d\u6b63\u5219\u8868\u8fbe\u5f0f\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"table-name"),(0,r.kt)("td",null,"required"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u8981\u76d1\u63a7\u7684 MySQL \u6570\u636e\u5e93\u7684\u8868\u540d\u3002 table-name \u8fd8\u652f\u6301\u6b63\u5219\u8868\u8fbe\u5f0f\u6765\u76d1\u63a7\u591a\u4e2a\u8868\u662f\u5426\u5339\u914d\u6b63\u5219\u8868\u8fbe\u5f0f\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"port"),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"3306"),(0,r.kt)("td",null,"Integer"),(0,r.kt)("td",null,"MySQL \u6570\u636e\u5e93\u670d\u52a1\u5668\u7684\u6574\u6570\u7aef\u53e3\u53f7\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"server-id"),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"Integer"),(0,r.kt)("td",null,"\u6b64\u6570\u636e\u5e93\u5ba2\u6237\u7aef\u7684\u6570\u5b57 Id \u6216\u6570\u5b57 Id \u8303\u56f4\uff0c\u6570\u5b57 Id \u8bed\u6cd5\u7c7b\u4f3c\u4e8e '5400'\uff0c \u6570\u5b57 Id \u8303\u56f4\u8bed\u6cd5\u7c7b\u4f3c\u4e8e\u201c5400-5408\u201d\uff0c\u542f\u7528\u201cscan.incremental.snapshot.enabled\u201d\u65f6\u5efa\u8bae\u4f7f\u7528\u6570\u5b57 Id \u8303\u56f4\u8bed\u6cd5\u3002 \u5728 MySQL \u96c6\u7fa4\u4e2d\u6240\u6709\u5f53\u524d\u8fd0\u884c\u7684\u6570\u636e\u5e93\u8fdb\u7a0b\u4e2d\uff0c\u6bcf\u4e2a Id \u90fd\u5fc5\u987b\u662f\u552f\u4e00\u7684\u3002\u6b64\u8fde\u63a5\u5668\u52a0\u5165 MySQL \u96c6\u7fa4 \u4f5c\u4e3a\u53e6\u4e00\u53f0\u670d\u52a1\u5668\uff08\u5177\u6709\u6b64\u552f\u4e00 Id\uff09\uff0c\u56e0\u6b64\u5b83\u53ef\u4ee5\u8bfb\u53d6 Binlog\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4f1a\u751f\u6210\u4e00\u4e2a\u4ecb\u4e8e 5400 \u548c 6400 \u4e4b\u95f4\u7684\u968f\u673a\u6570\uff0c \u5c3d\u7ba1\u6211\u4eec\u5efa\u8bae\u8bbe\u7f6e\u4e00\u4e2a\u660e\u786e\u7684\u503c\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"scan.incremental.snapshot.enabled"),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"true"),(0,r.kt)("td",null,"Boolean"),(0,r.kt)("td",null,"\u589e\u91cf\u5feb\u7167\u662f\u4e00\u79cd\u8bfb\u53d6\u8868\u5feb\u7167\u7684\u65b0\u673a\u5236\u3002\u4e0e\u65e7\u7684\u5feb\u7167\u673a\u5236\u76f8\u6bd4\uff0c \u589e\u91cf\u5feb\u7167\u6709\u5f88\u591a\u4f18\u70b9\uff0c\u5305\u62ec\uff1a (1) \u5feb\u7167\u8bfb\u53d6\u65f6 Source \u53ef\u4ee5\u5e76\u884c\uff0c (2) Source \u53ef\u4ee5\u5728\u5feb\u7167\u8bfb\u53d6\u65f6\u5728 Chunk \u7c92\u5ea6\u4e0a\u8fdb\u884c\u68c0\u67e5\u70b9\uff0c (3) Source \u5728\u8bfb\u5feb\u7167\u524d\u4e0d\u9700\u8981\u83b7\u53d6\u5168\u5c40\u8bfb\u9501\uff08FLUSH TABLES WITH READ LOCK\uff09\u3002 \u5982\u679c\u60a8\u5e0c\u671b\u6e90\u4ee3\u7801\u5e76\u884c\u8fd0\u884c\uff0c\u6bcf\u4e2a\u5e76\u884c\u9605\u8bfb\u5668\u90fd\u5e94\u8be5\u6709\u4e00\u4e2a\u552f\u4e00\u7684\u670d\u52a1\u5668 ID\uff0c\u6240\u4ee5 'server-id' \u5fc5\u987b\u662f '5400-6400' \u8fd9\u6837\u7684\u8303\u56f4\uff0c\u5e76\u4e14\u8303\u56f4\u5fc5\u987b\u5927\u4e8e\u5e76\u884c\u5ea6\u3002 \u8bf7\u53c2\u9605",(0,r.kt)("a",{href:"https://ververica.github.io/flink-cdc-connectors/release-2.2/content/connectors/mysql-cdc.html#incremental-snapshot-reading"},"\u589e\u91cf\u5feb\u7167\u9605\u8bfb"),"\u90e8\u5206\u4e86\u89e3\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"scan.incremental.snapshot.chunk.size"),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"8096"),(0,r.kt)("td",null,"Integer"),(0,r.kt)("td",null,"\u8868\u5feb\u7167\u7684\u5757\u5927\u5c0f\uff08\u884c\u6570\uff09\uff0c\u8bfb\u53d6\u8868\u7684\u5feb\u7167\u65f6\uff0c\u8868\u7684\u5feb\u7167\u88ab\u5206\u6210\u591a\u4e2a\u5757\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"scan.snapshot.fetch.size"),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"1024"),(0,r.kt)("td",null,"Integer"),(0,r.kt)("td",null,"\u8bfb\u53d6\u8868\u5feb\u7167\u65f6\u6bcf\u6b21\u8f6e\u8be2\u7684\u6700\u5927\u83b7\u53d6\u5927\u5c0f\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"scan.startup.mode"),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"initial"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,'MySQL CDC \u6d88\u8d39\u8005\u7684\u53ef\u9009\u542f\u52a8\u6a21\u5f0f\uff0c\u6709\u6548\u679a\u4e3e\u4e3a"initial" \u548c"latest-offset"\u3002 \u8bf7\u53c2\u9605',(0,r.kt)("a",{href:"https://ververica.github.io/flink-cdc-connectors/release-2.2/content/connectors/mysql-cdc.html#startup-reading-position"},"\u542f\u52a8\u9605\u8bfb\u4f4d\u7f6e"),"\u90e8\u5206\u4e86\u89e3\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"server-time-zone"),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"UTC"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,'\u6570\u636e\u5e93\u670d\u52a1\u5668\u4e2d\u7684\u4f1a\u8bdd\u65f6\u533a\uff0c\u4f8b\u5982"Asia/Shanghai"\u3002 \u5b83\u63a7\u5236 MYSQL \u4e2d\u7684 TIMESTAMP \u7c7b\u578b\u5982\u4f55\u8f6c\u6362\u4e3a STRING\u3002 \u67e5\u770b\u66f4\u591a',(0,r.kt)("a",{href:"https://debezium.io/documentation/reference/1.5/connectors/mysql.html#mysql-temporal-types"},"\u8fd9\u91cc"),"\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"debezium.min.row. count.to.stream.result"),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"1000"),(0,r.kt)("td",null,"Integer"),(0,r.kt)("td",null,"\u5728\u5feb\u7167\u64cd\u4f5c\u671f\u95f4\uff0c\u8fde\u63a5\u5668\u5c06\u67e5\u8be2\u6bcf\u4e2a\u5305\u542b\u7684\u8868\uff0c\u4ee5\u4fbf\u4e3a\u8be5\u8868\u4e2d\u7684\u6240\u6709\u884c\u751f\u6210\u8bfb\u53d6\u4e8b\u4ef6\u3002\u6b64\u53c2\u6570\u786e\u5b9a MySQL \u8fde\u63a5\u662f\u5426\u4f1a\u5c06\u8868\u7684\u6240\u6709\u7ed3\u679c\u62c9\u5165\u5185\u5b58\uff08\u901f\u5ea6\u5f88\u5feb\u4f46\u9700\u8981\u5927\u91cf\u5185\u5b58\uff09\uff0c\u6216\u8005\u662f\u5426\u5c06\u7ed3\u679c\u6539\u4e3a\u6d41\u5f0f\u4f20\u8f93\uff08\u53ef\u80fd\u8f83\u6162\uff0c\u4f46\u9002\u7528\u4e8e\u975e\u5e38\u5927\u7684\u8868\uff09\u3002\u8be5\u503c\u6307\u5b9a\u5728\u8fde\u63a5\u5668\u6d41\u5f0f\u4f20\u8f93\u7ed3\u679c\u4e4b\u524d\u8868\u5fc5\u987b\u5305\u542b\u7684\u6700\u5c0f\u884c\u6570\uff0c\u9ed8\u8ba4\u4e3a 1,000\u3002\u5c06\u6b64\u53c2\u6570\u8bbe\u7f6e\u4e3a'0'\u4ee5\u8df3\u8fc7\u6240\u6709\u8868\u5927\u5c0f\u68c0\u67e5\u5e76\u59cb\u7ec8\u5728\u5feb\u7167\u671f\u95f4\u6d41\u5f0f\u4f20\u8f93\u6240\u6709\u7ed3\u679c\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"connect.timeout"),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"30s"),(0,r.kt)("td",null,"Duration"),(0,r.kt)("td",null,"\u8fde\u63a5\u5668\u5728\u5c1d\u8bd5\u8fde\u63a5\u5230 MySQL \u6570\u636e\u5e93\u670d\u52a1\u5668\u540e\u5728\u8d85\u65f6\u4e4b\u524d\u5e94\u7b49\u5f85\u7684\u6700\u957f\u65f6\u95f4\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"connect.max-retries"),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"3"),(0,r.kt)("td",null,"Integer"),(0,r.kt)("td",null,"\u8fde\u63a5\u5668\u5e94\u91cd\u8bd5\u4ee5\u5efa\u7acb MySQL \u6570\u636e\u5e93\u670d\u52a1\u5668\u8fde\u63a5\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"connection.pool.size"),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"20"),(0,r.kt)("td",null,"Integer"),(0,r.kt)("td",null,"\u8fde\u63a5\u6c60\u5927\u5c0f\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"jdbc.properties.*"),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"20"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u4f20\u9012\u81ea\u5b9a\u4e49 JDBC URL \u5c5e\u6027\u7684\u9009\u9879\u3002\u7528\u6237\u53ef\u4ee5\u4f20\u9012\u81ea\u5b9a\u4e49\u5c5e\u6027\uff0c\u4f8b\u5982 'jdbc.properties.useSSL' = 'false'\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"heartbeat.interval"),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"30s"),(0,r.kt)("td",null,"Duration"),(0,r.kt)("td",null,"\u53d1\u9001\u5fc3\u8df3\u4e8b\u4ef6\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u7528\u4e8e\u8ddf\u8e2a\u6700\u65b0\u53ef\u7528\u7684 Binlog \u504f\u79fb\u91cf\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"append-mode"),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"false"),(0,r.kt)("td",null,"Boolean"),(0,r.kt)("td",null,"\u662f\u5426\u4ec5\u652f\u6301 Append\uff0c\u5982\u679c\u4e3a 'true'\uff0cMySQL Extract Node \u4f1a\u5c06\u6240\u6709 Upsert \u6d41\u8f6c\u6362\u4e3a Append \u6d41\uff0c\u4ee5\u652f\u6301\u4e0d\u652f\u6301 Upsert \u6d41\u7684\u4e0b\u6e38\u573a\u666f\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"migrate-all"),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"false"),(0,r.kt)("td",null,"Boolean"),(0,r.kt)("td",null,"\u662f\u5426\u662f\u5168\u5e93\u8fc1\u79fb\u573a\u666f\uff0c\u5982\u679c\u4e3a 'true'\uff0cMySQL Extract Node \u5219\u5c06\u8868\u7684\u7269\u7406\u5b57\u6bb5\u548c\u5176\u4ed6\u5143\u5b57\u6bb5\u538b\u7f29\u6210 'canal-json' \u683c\u5f0f\u7684\u7279\u6b8a\u5143\u5b57\u6bb5 'data'\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"debezium.*"),(0,r.kt)("td",null,"optional"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u5c06 Debezium \u7684\u5c5e\u6027\u4f20\u9012\u7ed9\u7528\u4e8e\u4ece MySQL \u670d\u52a1\u5668\u6355\u83b7\u6570\u636e\u66f4\u6539\u7684 Debezium Embedded Engine\u3002 \u4f8b\u5982\uff1a",(0,r.kt)("code",null,"'debezium.snapshot.mode' = 'never'"),"\u3002 \u8be6\u7ec6\u4e86\u89e3 ",(0,r.kt)("a",{href:"https://debezium.io/documentation/reference/1.5/connectors/mysql.html#mysql-connector-properties"},"Debezium \u7684 MySQL \u8fde\u63a5\u5668\u5c5e\u6027\u3002")))))),(0,r.kt)("h2",{id:"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5"},"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u683c\u5f0f\u5143\u6570\u636e\u53ef\u4ee5\u4f5c\u4e3a\u8868\u5b9a\u4e49\u4e2d\u7684\u53ea\u8bfb (VIRTUAL) \u5217\u516c\u5f00\u3002"),(0,r.kt)("table",{class:"colwidths-auto docutils"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{class:"text-left",style:{width:"15%"}},"\u5b57\u6bb5\u540d\u79f0"),(0,r.kt)("th",{class:"text-left",style:{width:"30%"}},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{class:"text-left",style:{width:"55%"}},"\u63cf\u8ff0"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"meta.table_name"),(0,r.kt)("td",null,"STRING NOT NULL"),(0,r.kt)("td",null,"\u8be5\u884c\u6240\u5c5e\u7684\u8868\u540d\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"meta.database_name"),(0,r.kt)("td",null,"STRING NOT NULL"),(0,r.kt)("td",null,"\u8be5\u884c\u6240\u5c5e\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"meta.op_ts"),(0,r.kt)("td",null,"TIMESTAMP_LTZ(3) NOT NULL"),(0,r.kt)("td",null,"\u5b83\u6307\u793a\u5728\u6570\u636e\u5e93\u4e2d\u8fdb\u884c\u66f4\u6539\u7684\u65f6\u95f4\u3002 ",(0,r.kt)("br",null),"\u5982\u679c\u8bb0\u5f55\u662f\u4ece\u8868\u7684\u5feb\u7167\u800c\u4e0d\u662fbinlog\u4e2d\u8bfb\u53d6\u7684\uff0c\u5219\u8be5\u503c\u59cb\u7ec8\u4e3a0\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"meta.op_type"),(0,r.kt)("td",null,"STRING"),(0,r.kt)("td",null,"\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u7c7b\u578b\uff0c\u5982 INSERT/DELETE \u7b49\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"meta.data"),(0,r.kt)("td",null,"STRING"),(0,r.kt)("td",null,"`canal-json` \u683c\u5f0f\u5316\u7684\u884c\u7684\u6570\u636e\u53ea\u6709\u5728 `migrate-all` \u9009\u9879\u4e3a 'true' \u65f6\u624d\u5b58\u5728\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"meta.is_ddl"),(0,r.kt)("td",null,"BOOLEAN"),(0,r.kt)("td",null,"\u662f\u5426\u662f DDL \u8bed\u53e5\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"meta.ts"),(0,r.kt)("td",null,"TIMESTAMP_LTZ(3) NOT NULL"),(0,r.kt)("td",null,"\u63a5\u6536\u548c\u5904\u7406\u884c\u7684\u5f53\u524d\u65f6\u95f4\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"meta.sql_type"),(0,r.kt)("td",null,"MAP"),(0,r.kt)("td",null,"\u5c06 Sql_type \u8868\u5b57\u6bb5\u6620\u5c04\u5230 Java \u6570\u636e\u7c7b\u578b Id\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"meta.mysql_type"),(0,r.kt)("td",null,"MAP"),(0,r.kt)("td",null,"\u8868\u7684\u7ed3\u6784\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"meta.pk_names"),(0,r.kt)("td",null,"ARRAY"),(0,r.kt)("td",null,"\u8868\u7684\u4e3b\u952e\u540d\u79f0\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"meta.batch_id"),(0,r.kt)("td",null,"BIGINT"),(0,r.kt)("td",null,"Binlog\u7684\u6279\u6b21id\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"meta.update_before"),(0,r.kt)("td",null,"ARRAY"),(0,r.kt)("td",null,"\u8be5\u884c\u66f4\u65b0\u524d\u7684\u6570\u636e\u3002")))),(0,r.kt)("p",null,"\u6269\u5c55\u7684 CREATE TABLE \u793a\u4f8b\u6f14\u793a\u4e86\u4f7f\u7528\u8fd9\u4e9b\u5143\u6570\u636e\u5b57\u6bb5\u7684\u8bed\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `mysql_extract_node` (\n      `id` INT,\n      `name` STRING,\n      `database_name` string METADATA FROM 'meta.database_name',\n      `table_name`    string METADATA FROM 'meta.table_name',\n      `op_ts`         timestamp(3) METADATA FROM 'meta.op_ts',\n      `op_type` string METADATA FROM 'meta.op_type',\n      `batch_id` bigint METADATA FROM 'meta.batch_id',\n      `is_ddl` boolean METADATA FROM 'meta.is_ddl',\n      `update_before` ARRAY<MAP<STRING, STRING>> METADATA FROM 'meta.update_before',\n      `mysql_type` MAP<STRING, STRING> METADATA FROM 'meta.mysql_type',\n      `pk_names` ARRAY<STRING> METADATA FROM 'meta.pk_names',\n      `data` STRING METADATA FROM 'meta.data',\n      `sql_type` MAP<STRING, INT> METADATA FROM 'meta.sql_type',\n      `ingestion_ts` TIMESTAMP(3) METADATA FROM 'meta.ts',\n      PRIMARY KEY (`id`) NOT ENFORCED \n) WITH (\n      'connector' = 'mysql-cdc-inlong', \n      'hostname' = 'YourHostname',\n      'migrate-all' = 'true',\n      'port' = '3306',                \n      'username' = 'YourUsername',\n      'password' = 'YourPassword',\n      'database-name' = 'YourDatabase',\n      'table-name' = 'YourTable' \n      );\n")),(0,r.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.kt)("div",{class:"wy-table-responsive"},(0,r.kt)("table",{class:"colwidths-auto docutils"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{class:"text-left"},"MySQL type"),(0,r.kt)("th",{class:"text-left"},"Flink SQL type"),(0,r.kt)("th",{class:"text-left"},"NOTE"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"TINYINT"),(0,r.kt)("td",null,"TINYINT"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SMALLINT",(0,r.kt)("br",null),"TINYINT UNSIGNED"),(0,r.kt)("td",null,"SMALLINT"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"INT",(0,r.kt)("br",null),"MEDIUMINT",(0,r.kt)("br",null),"SMALLINT UNSIGNED"),(0,r.kt)("td",null,"INT"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"BIGINT",(0,r.kt)("br",null),"INT UNSIGNED"),(0,r.kt)("td",null,"BIGINT"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"BIGINT UNSIGNED"),(0,r.kt)("td",null,"DECIMAL(20, 0)"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"REAL",(0,r.kt)("br",null),"FLOAT",(0,r.kt)("br",null)),(0,r.kt)("td",null,"FLOAT"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"DOUBLE"),(0,r.kt)("td",null,"DOUBLE"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"NUMERIC(p, s)",(0,r.kt)("br",null),"DECIMAL(p, s)",(0,r.kt)("br",null),"where p <= 38",(0,r.kt)("br",null)),(0,r.kt)("td",null,"DECIMAL(p, s)"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"NUMERIC(p, s)",(0,r.kt)("br",null),"DECIMAL(p, s)",(0,r.kt)("br",null),"where 38 < p <= 65",(0,r.kt)("br",null)),(0,r.kt)("td",null,"STRING"),(0,r.kt)("td",null,"The precision for DECIMAL data type is up to 65 in MySQL, but the precision for DECIMAL is limited to 38 in Flink. So if you define a decimal column whose precision is greater than 38, you should map it to STRING to avoid precision loss.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"BOOLEAN",(0,r.kt)("br",null),"TINYINT(1)",(0,r.kt)("br",null),"BIT(1)"),(0,r.kt)("td",null,"BOOLEAN"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"DATE"),(0,r.kt)("td",null,"DATE"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"TIME [(p)]"),(0,r.kt)("td",null,"TIME [(p)]"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"TIMESTAMP [(p)]",(0,r.kt)("br",null),"DATETIME [(p)]"),(0,r.kt)("td",null,"TIMESTAMP [(p)]"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"CHAR(n)"),(0,r.kt)("td",null,"CHAR(n)"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"VARCHAR(n)"),(0,r.kt)("td",null,"VARCHAR(n)"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"BIT(n)"),(0,r.kt)("td",null,"BINARY(\u2308n/8\u2309)"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"BINARY(n)"),(0,r.kt)("td",null,"BINARY(n)"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"VARBINARY(N)"),(0,r.kt)("td",null,"VARBINARY(N)"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"TINYTEXT",(0,r.kt)("br",null),"TEXT",(0,r.kt)("br",null),"MEDIUMTEXT",(0,r.kt)("br",null),"LONGTEXT",(0,r.kt)("br",null)),(0,r.kt)("td",null,"STRING"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"TINYBLOB",(0,r.kt)("br",null),"BLOB",(0,r.kt)("br",null),"MEDIUMBLOB",(0,r.kt)("br",null),"LONGBLOB",(0,r.kt)("br",null)),(0,r.kt)("td",null,"BYTES"),(0,r.kt)("td",null,"Currently, for BLOB data type in MySQL, only the blob whose length isn't greater than 2,147,483,647(2 ** 31 - 1) is supported. ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"YEAR"),(0,r.kt)("td",null,"INT"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ENUM"),(0,r.kt)("td",null,"STRING"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"JSON"),(0,r.kt)("td",null,"STRING"),(0,r.kt)("td",null,"The JSON data type  will be converted into STRING with JSON format in Flink.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SET"),(0,r.kt)("td",null,"ARRAY<STRING>"),(0,r.kt)("td",null,"As the SET data type in MySQL is a string object that can have zero or more values, it should always be mapped to an array of string"))))))}c.isMDXComponent=!0},90963:(t,l,e)=>{e.d(l,{Z:()=>n});const n=e.p+"assets/images/mysql-binlog-21c890abab0f03d8f5b09f4e7ad2f778.png"},24767:(t,l,e)=>{e.d(l,{Z:()=>n});const n=e.p+"assets/images/mysql-source-d4b1f4f4bbe3db4c9dfc6083aeb49d85.png"}}]);