"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2649],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=i(a),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||o;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[m]="string"==typeof e?e:r,l[1]=d;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},73317:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const o={title:"Overview",sidebar_position:1},l=void 0,d={unversionedId:"data_node/load_node/overview",id:"data_node/load_node/overview",title:"Overview",description:"Overview",source:"@site/docs/data_node/load_node/overview.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/overview",permalink:"/docs/next/data_node/load_node/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/data_node/load_node/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"TubeMQ",permalink:"/docs/next/data_node/extract_node/tube"},next:{title:"Auto Consumption",permalink:"/docs/next/data_node/load_node/auto_consumption"}},p={},i=[{value:"Overview",id:"overview",level:2},{value:"Supported Load Nodes",id:"supported-load-nodes",level:2},{value:"Supported Flink Versions",id:"supported-flink-versions",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:2}],s={toc:i};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Load Nodes is a set of Sink Connectors based on ",(0,r.kt)("a",{href:"https://flink.apache.org/"},"Apache Flink",(0,r.kt)("sup",null,"\xae"))," for loading data to different storage systems. "),(0,r.kt)("h2",{id:"supported-load-nodes"},"Supported Load Nodes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Load Node"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Driver"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/data_node/load_node/kafka"},"Kafka")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://kafka.apache.org/"},"Kafka"),": 0.10+"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/data_node/load_node/hbase"},"HBase")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://hbase.apache.org/"},"HBase"),": 2.2.x"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/data_node/load_node/postgresql"},"PostgreSQL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.postgresql.org/"},"PostgreSQL"),": 9.6, 10, 11, 12"),(0,r.kt)("td",{parentName:"tr",align:null},"JDBC Driver: 42.2.12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/data_node/load_node/oracle"},"Oracle")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.oracle.com/index.html"},"Oracle"),": 11, 12, 19"),(0,r.kt)("td",{parentName:"tr",align:null},"Oracle Driver: 19.3.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/data_node/load_node/mysql"},"MySQL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://dev.mysql.com/doc"},"MySQL"),": 5.6, 5.7, 8.0.x ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://www.aliyun.com/product/rds/mysql"},"RDS MySQL"),": 5.6, 5.7, 8.0.x ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://www.aliyun.com/product/polardb"},"PolarDB MySQL"),": 5.6, 5.7, 8.0.x ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://aws.amazon.com/cn/rds/aurora"},"Aurora MySQL"),": 5.6, 5.7, 8.0.x ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://mariadb.org"},"MariaDB"),": 10.x ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/ApsaraDB/galaxysql"},"PolarDB X"),": 2.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"JDBC Driver: 8.0.21")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/data_node/load_node/tdsql-postgresql"},"TDSQL-PostgreSQL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://cloud.tencent.com/document/product/1129"},"TDSQL-PostgreSQL"),": 10.17"),(0,r.kt)("td",{parentName:"tr",align:null},"JDBC Driver: 42.2.12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/data_node/load_node/greenplum"},"Greenplum")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://greenplum.org/"},"Greenplum"),": 4.x, 5.x, 6.x"),(0,r.kt)("td",{parentName:"tr",align:null},"JDBC Driver: 42.2.12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/data_node/load_node/elasticsearch"},"Elasticsearch")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.elastic.co/"},"Elasticsearch"),": 6.x, 7.x"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/data_node/load_node/clickhouse"},"ClickHouse")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://clickhouse.com/"},"ClickHouse"),": 20.7+"),(0,r.kt)("td",{parentName:"tr",align:null},"JDBC Driver: 0.3.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/data_node/load_node/hive"},"Hive")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://hive.apache.org/"},"Hive"),": 1.x, 2.x, 3.x"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/data_node/load_node/sqlserver"},"SQLServer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.microsoft.com/sql-server"},"SQLServer"),": 2012, 2014, 2016, 2017, 2019"),(0,r.kt)("td",{parentName:"tr",align:null},"JDBC Driver: 7.2.2.jre8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/data_node/load_node/hdfs"},"HDFS")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://hadoop.apache.org/"},"HDFS"),": 2.x, 3.x"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/data_node/load_node/iceberg"},"Iceberg")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://iceberg.apache.org/"},"Iceberg"),": 0.13.1+"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/data_node/load_node/hudi"},"Hudi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://hudi.apache.org/"},"Hudi"),": 0.12.x"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("h2",{id:"supported-flink-versions"},"Supported Flink Versions"),(0,r.kt)("p",null,"The following table shows the version mapping between InLong",(0,r.kt)("sup",null,"\xae")," Load Nodes and Flink",(0,r.kt)("sup",null,"\xae"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"InLong",(0,r.kt)("sup",null,"\xae")," Load Nodes Version"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Flink",(0,r.kt)("sup",null,"\xae")," Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("font",{color:"DarkCyan"},"1.2.0")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("font",{color:"MediumVioletRed"},"1.13.5"))))),(0,r.kt)("h2",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/modules/sort/quick_start"},"Deploy InLong Sort")),(0,r.kt)("li",{parentName:"ul"},"Create Data Node")),(0,r.kt)("p",null,"The example shows how to create a MySQL Load Node in ",(0,r.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.13/dev/table/sqlClient.html"},"Flink SQL Client")," and load data to it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Creates a MySQL Extract Node\nCREATE TABLE mysql_extract_node (\n    id INT NOT NULL,\n    name STRING,\n    age INT,\n    weight DECIMAL(10,3),\n    PRIMARY KEY(id) NOT ENFORCED\n) WITH (\n      'connector' = 'mysql-cdc-inlong',\n      'hostname' = 'YourHostname',\n      'port' = '3306',\n      'username' = 'YourUsername',\n      'password' = 'YourPassword',\n      'database-name' = 'YourDatabaseName',\n      'table-name' = 'YourTableName'\n      );\n-- Creates a MySQL Load Node\nCREATE TABLE mysql_load_node (\n id INT NOT NULL,\n name STRING,\n age INT,\n weight DECIMAL(10,3),\n PRIMARY KEY(id) NOT ENFORCED\n) WITH (\n 'connector' = 'jdbc-inlong',\n 'url' = 'jdbc:mysql://YourHostname:3306/YourDatabaseName',\n 'username' = 'YourUsername',\n 'password' = 'YourPassword',\n 'table-name' = 'YourTableName'\n);\n\nINSERT INTO mysql_load_node SELECT id, name, age, weight FROM mysql_extract_node;\n")))}m.isMDXComponent=!0}}]);