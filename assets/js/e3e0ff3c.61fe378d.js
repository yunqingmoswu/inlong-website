"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7854],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=p(n),g=r,c=s["".concat(d,".").concat(g)]||s[g]||u[g]||l;return n?a.createElement(c,o(o({ref:e},m),{},{components:n})):a.createElement(c,o({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[s]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},51009:(t,e,n)=>{n.d(e,{Y:()=>a});const a={inLongVersion:"1.3.0-SNAPSHOT"}},66882:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),l=n(51009);const o={title:"MongoDB-CDC",sidebar_position:5},i=void 0,d={unversionedId:"data_node/extract_node/mongodb-cdc",id:"version-1.3.0/data_node/extract_node/mongodb-cdc",title:"MongoDB-CDC",description:"Overview",source:"@site/versioned_docs/version-1.3.0/data_node/extract_node/mongodb-cdc.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/mongodb-cdc",permalink:"/docs/1.3.0/data_node/extract_node/mongodb-cdc",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/data_node/extract_node/mongodb-cdc.md",tags:[],version:"1.3.0",sidebarPosition:5,frontMatter:{title:"MongoDB-CDC",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Kafka",permalink:"/docs/1.3.0/data_node/extract_node/kafka"},next:{title:"MySQL-CDC",permalink:"/docs/1.3.0/data_node/extract_node/mysql-cdc"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"Setup MongoDB",id:"setup-mongodb",level:2},{value:"Availability",id:"availability",level:3},{value:"How to create a MongoDB Extract Node",id:"how-to-create-a-mongodb-extract-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"MongoDB Extract Node Options",id:"mongodb-extract-node-options",level:2},{value:"Available Metadata",id:"available-metadata",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],s={toc:m};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The MongoDB CDC connector allows for reading snapshot data and incremental data from MongoDB. This document describes how to setup the MongoDB CDC connector to run SQL queries against MongoDB."),(0,r.kt)("h2",{id:"supported-version"},"Supported Version"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Extract Node"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/1.3.0/data_node/extract_node/mongodb-cdc"},"MongoDB-CDC")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.mongodb.com/"},"MongoDB"),": ",">","= 3.6")))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"In order to setup the MongoDB CDC connector, the following table provides dependency information for both projects using a build automation tool (such as Maven or SBT) and SQL Client with SQL JAR bundles."),(0,r.kt)("h3",{id:"maven-dependency"},"Maven dependency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-mongodb-cdc</artifactId>\n    <version>${l.Y.inLongVersion}</version>\n</dependency>\n`)),(0,r.kt)("h2",{id:"setup-mongodb"},"Setup MongoDB"),(0,r.kt)("h3",{id:"availability"},"Availability"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MongoDB version"),(0,r.kt)("p",{parentName:"li"},"MongoDB version ",">","= 3.6\nWe use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/changeStreams/"},"change streams")," feature (new in version 3.6) to capture change data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cluster Deployment"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/replication/"},"replica sets")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/sharding/"},"sharded clusters")," is required.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Storage Engine"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/core/wiredtiger/#std-label-storage-wiredtiger"},"WiredTiger")," storage engine is required.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/replica-configuration/#mongodb-rsconf-rsconf.protocolVersion"},"Replica set protocol version")),(0,r.kt)("p",{parentName:"li"},"Replica set protocol version 1 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/replica-configuration/#mongodb-rsconf-rsconf.protocolVersion"},"(pv1)")," is required.\nStarting in version 4.0, MongoDB only supports pv1. pv1 is the default for all new replica sets created with MongoDB 3.2 or later.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Privileges"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"changeStream")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," privileges are required by MongoDB Kafka Connector."),(0,r.kt)("p",{parentName:"li"},"You can use the following example for simple authorization.\nFor more detailed authorization, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/built-in-roles/#database-user-roles"},"MongoDB Database User Roles"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'use admin;\ndb.createUser({\n  user: "flinkuser",\n  pwd: "flinkpw",\n  roles: [\n    { role: "read", db: "admin" }, // read role includes changeStream privilege \n    { role: "readAnyDatabase", db: "admin" } // for snapshot reading\n  ]\n});\n')))),(0,r.kt)("h2",{id:"how-to-create-a-mongodb-extract-node"},"How to create a MongoDB Extract Node"),(0,r.kt)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,r.kt)("p",null,"The example below shows how to create an MongoDB Extract Node with ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink SQL")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Set checkpoint every 3000 milliseconds                       \nFlink SQL> SET 'execution.checkpointing.interval' = '3s';   \n\n-- Create a MySQL table 'mongodb_extract_node' in Flink SQL\nFlink SQL> CREATE TABLE mongodb_extract_node (\n  _id STRING, // must be declared\n  name STRING,\n  weight DECIMAL(10,3),\n  tags ARRAY<STRING>, -- array\n  price ROW<amount DECIMAL(10,2), currency STRING>, -- embedded document\n  suppliers ARRAY<ROW<name STRING, address STRING>>, -- embedded documents\n  PRIMARY KEY(_id) NOT ENFORCED\n) WITH (\n  'connector' = 'mongodb-cdc-inlong',\n  'hosts' = 'localhost:27017,localhost:27018,localhost:27019',\n  'username' = 'flinkuser',\n  'password' = 'flinkpw',\n  'database' = 'inventory',\n  'collection' = 'mongodb_extract_node'\n);\n\n-- Read snapshot and binlogs from mongodb_extract_node\nFlink SQL> SELECT * FROM mongodb_extract_node;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("p",null,"MongoDB\u2019s change event record doesn\u2019t have update before message. So, we can only convert it to Flink\u2019s UPSERT changelog stream. An upsert stream requires a unique key, so we must declare ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," as primary key. We can\u2019t declare other column as primary key, becauce delete operation do not contain\u2019s the key and value besides ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sharding key"),". "),(0,r.kt)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,r.kt)("p",null,"TODO: It will be supported in the future."),(0,r.kt)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,r.kt)("p",null,"TODO: It will be supported in the future."),(0,r.kt)("h2",{id:"mongodb-extract-node-options"},"MongoDB Extract Node Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Option")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connector"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify what connector to use, here should be ",(0,r.kt)("inlineCode",{parentName:"td"},"mongodb-cdc-inlong"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hosts"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The comma-separated list of hostname and port pairs of the MongoDB servers. eg. ",(0,r.kt)("inlineCode",{parentName:"td"},"localhost:27017,localhost:27018"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the database user to be used when connecting to MongoDB. This is required only when MongoDB is configured to use authentication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Password to be used when connecting to MongoDB. This is required only when MongoDB is configured to use authentication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the database to watch for changes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collection"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the collection in the database to watch for changes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connection.options"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The ampersand-separated ",(0,r.kt)("a",{parentName:"td",href:"https://docs.mongodb.com/manual/reference/connection-string/#std-label-connections-connection-options"},"connection options")," of MongoDB. eg. ",(0,r.kt)("inlineCode",{parentName:"td"},"replicaSet=test&connectTimeoutMS=300000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errors.tolerance"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to continue processing messages if an error is encountered. Accept ",(0,r.kt)("inlineCode",{parentName:"td"},"none")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"all"),". When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"none"),", the connector reports an error and blocks further processing of the rest of the records when it encounters an error. When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"all"),", the connector silently ignores any bad messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errors.log.enable"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether details of failed operations should be written to the log file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"copy.existing"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether copy existing data from source collections.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"copy.existing.pipeline"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"An array of JSON objects describing the pipeline operations to run when copying existing data. This can improve the use of indexes by the copying manager and make copying more efficient. eg. ",(0,r.kt)("inlineCode",{parentName:"td"},'[{"$match": {"closed": "false"}}]')," ensures that only documents in which the closed field is set to false are copied.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"copy.existing.max.threads"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Processors Count"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of threads to use when performing the data copy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"copy.existing.queue.size"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"16000"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The max size of the queue to use when copying data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"poll.max.batch.size"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of change stream documents to include in a single batch when polling for new data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"poll.await.time.ms"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"1500"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of time to wait before checking for new results on the change stream.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"heartbeat.interval.ms"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The length of time in milliseconds between sending heartbeat messages. Use 0 to disa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlong.metric"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Inlong metric label, format of value is groupId&streamId&nodeId.")))),(0,r.kt)("h2",{id:"available-metadata"},"Available Metadata"),(0,r.kt)("p",null,"The following format metadata can be exposed as read-only (VIRTUAL) columns in a table definition."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"DataType"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database_name"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the database that contain the row.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collection_name"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the collection that contain the row.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"op_ts"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP_LTZ(3) NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"It indicates the time that the change was made in the database. If the record is read from snapshot of the table instead of the change stream, the value is always 0.")))),(0,r.kt)("p",null,"The extended CREATE TABLE example demonstrates the syntax for exposing these metadata fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `mysql_extract_node` (\n    db_name STRING METADATA FROM 'database_name' VIRTUAL,\n    collection_name STRING METADATA  FROM 'collection_name' VIRTUAL,\n    operation_ts TIMESTAMP_LTZ(3) METADATA FROM 'op_ts' VIRTUAL,\n    _id STRING, // must be declared\n    name STRING,\n    weight DECIMAL(10,3),\n    tags ARRAY<STRING>, -- array\n    price ROW<amount DECIMAL(10,2), currency STRING>, -- embedded document\n    suppliers ARRAY<ROW<name STRING, address STRING>>, -- embedded documents\n    PRIMARY KEY(_id) NOT ENFORCED\n) WITH (\n      'connector' = 'mongodb-cdc-inlong', \n      'hostname' = 'YourHostname',\n      'username' = 'YourUsername',\n      'password' = 'YourPassword',\n      'database' = 'YourDatabase',\n      'collection' = 'YourTable' \n);\n")),(0,r.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"BSON type"),(0,r.kt)("th",{parentName:"tr",align:null},"Flink SQL type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Double"),(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decimal128"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL(p, s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date Timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"DATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date Timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"TIME")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP(3) TIMESTAMP_LTZ(3)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP(0) TIMESTAMP_LTZ(0)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String ObjectId UUID Symbol MD5 JavaScript Regex"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BinData"),(0,r.kt)("td",{parentName:"tr",align:null},"BYTES")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"ROW")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"ARRAY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DBPointer"),(0,r.kt)("td",{parentName:"tr",align:null},"ROW\\<\\$ref STRING, \\$id STRING",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.mongodb.com/manual/reference/geojson/"},"GeoJSON")),(0,r.kt)("td",{parentName:"tr",align:null},"Point : ROW\\<type STRING, coordinates ARRAY\\<DOUBLE",">",">"," Line : ROW\\<type STRING, coordinates ARRAY\\<ARRAY\\< DOUBLE",">",">",">"," ...")))))}u.isMDXComponent=!0}}]);