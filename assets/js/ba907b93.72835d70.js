"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},12457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={title:"Analysis of InLong Sort ETL Solution"},i="Analysis of InLong Sort ETL Solution Based on Apache Flink SQL",l={permalink:"/blog/2022/06/16/inlong-sort-etl",editUrl:"https://github.com/apache/inlong-website/edit/master/blog/blog/2022-06-16-inlong-sort-etl.md",source:"@site/blog/2022-06-16-inlong-sort-etl.md",title:"Analysis of InLong Sort ETL Solution",description:"1. Background",date:"2022-06-16T00:00:00.000Z",formattedDate:"June 16, 2022",tags:[],readingTime:10.495,truncated:!1,authors:[],frontMatter:{title:"Analysis of InLong Sort ETL Solution"},prevItem:{title:"Release InLong 1.2.0",permalink:"/blog/2022/06/22/release-1.2.0"},nextItem:{title:"Release InLong 1.1.0",permalink:"/blog/2022/04/25/release-1.1.0"}},s={authorsImageUrls:[]},d=[{value:"1. Background",id:"1-background",level:2},{value:"2. Introduction",id:"2-introduction",level:2},{value:"2.1 Requirements",id:"21-requirements",level:3},{value:"2.2 Usage Scenarios",id:"22-usage-scenarios",level:3},{value:"2.3 Design Goal",id:"23-design-goal",level:3},{value:"2.4 Basic Concepts",id:"24-basic-concepts",level:3},{value:"2.5 Domain Model",id:"25-domain-model",level:3},{value:"2.6 Function Use-case Diagram",id:"26-function-use-case-diagram",level:3},{value:"3. System Outline Design",id:"3-system-outline-design",level:2},{value:"3.1 System Architecture Diagram",id:"31-system-architecture-diagram",level:3},{value:"3.2 InLong Sort Internal Operation Flow Chart",id:"32-inlong-sort-internal-operation-flow-chart",level:3},{value:"3.3 Module Design",id:"33-module-design",level:3},{value:"3.3.1 Module Structure",id:"331-module-structure",level:4},{value:"3.3.2 Module Division",id:"332-module-division",level:4},{value:"4. Detailed System Design",id:"4-detailed-system-design",level:2},{value:"4.1 Node Described in SQL",id:"41-node-described-in-sql",level:3},{value:"4.1.1 ExtractNode Described in SQL",id:"411-extractnode-described-in-sql",level:4},{value:"4.1.2 TransformNode  Described in SQL",id:"412-transformnode--described-in-sql",level:4},{value:"4.1.3 LoadNode Described in SQL",id:"413-loadnode-described-in-sql",level:4},{value:"4.2 Field T Described in SQL",id:"42-field-t-described-in-sql",level:3},{value:"4.2.1 Filter operator",id:"421-filter-operator",level:4},{value:"4.2.2 Watermark",id:"422-watermark",level:4}],c={toc:d};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-background"},"1. Background"),(0,r.kt)("p",null,"With the increasing number of users and developers of Apache InLong(incubating), the demand for richer usage scenarios and low-cost operation is getting stronger and stronger. Among them, the demand for adding Transform (T) to the whole link of InLong has received the most feedback. After the research and design of @yunqingmoswu, @EMsnap, @gong, @thexiay community developers, the InLong Sort ETL solution based on Flink SQL has been completed. This article will introduce the implementation details of the solution in detail."),(0,r.kt)("p",null,"Firstly, based on Apache Flink SQL, there are mainly the following considerations\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Flink SQL has high scalability and flexibility brought about by its powerful expression ability. Basically, Flink SQL can support most demand scenarios in the community. When the built-in functions of Flink SQL do not meet the requirements, we can also extend them through various UDFs."),(0,r.kt)("li",{parentName:"ul"},"Compared with the implementation of the underlying API of Flink, the development cost of Flink SQL is lower. Only for the first time, the conversion logic of Flink SQL needs to be implemented. In the future, we can focus on the construction of the ability of Flink SQL, such as the extension connector and the UDF."),(0,r.kt)("li",{parentName:"ul"},"In general, Flink SQL will be more robust and run more stable. The reason is that Flink SQL shields a lot of the underlying details of Flink, has strong community support, and has been practiced by a large number of users."),(0,r.kt)("li",{parentName:"ul"},"For users, Flink SQL is also easier to understand, especially for users who have used SQL, the usage is simple and familiar, which helps users to land quickly."),(0,r.kt)("li",{parentName:"ul"},"For the migration of existing real-time tasks, if they are originally SQL-type tasks, especially Flink SQL tasks, the migration cost is extremely low, and in some cases, no changes are even required.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": For all codes of this scheme, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/tree/master/inlong-sort"},"Apache InLong Sort"),", which can be downloaded and used in the upcoming version 1.2.0."),(0,r.kt)("h2",{id:"2-introduction"},"2. Introduction"),(0,r.kt)("h3",{id:"21-requirements"},"2.1 Requirements"),(0,r.kt)("p",null,"The main requirements of this solution are the completed inlong sort module transform (T) capability, including:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Transform"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Deduplication in the window"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Deduplicate data within a time window")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"time window aggregation"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Aggregate data within a time window")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"time format conversion"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Converts the value of a field to a string in the target time format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"field segmentation"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Split a field into multiple new fields by a delimiter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"string replacement"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Replace some or all of the contents of a string field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Data filtering"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Discard or retain data that meets the filter conditions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Content extraction"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Extract part of a field to create a new field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Join"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Support two table join")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Value substitution"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Given a matching value, if the field's value is equal to that value, replace it with the target value")))),(0,r.kt)("h3",{id:"22-usage-scenarios"},"2.2 Usage Scenarios"),(0,r.kt)("p",null,"Users of big data integration have transform requirements such as data transformation, connection and filtering in many business scenarios."),(0,r.kt)("h3",{id:"23-design-goal"},"2.3 Design Goal"),(0,r.kt)("p",null,"This design needs to achieve the following goals:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Functionality: Under InLong Sort's existing architecture and data flow model, it covers basic Transform capabilities and has the ability to expand rapidly."),(0,r.kt)("li",{parentName:"ul"},"Compatibility: The new InLong Sort data model is forward compatible to ensure that historical tasks can be configured and run properly."),(0,r.kt)("li",{parentName:"ul"},"Maintainability: The conversion of the InLong Sort data model to Flink SQL only needs to be implemented once. When there are new functional requirements later, this part does not need to be changed, even if there are changes, it can be supported with a small amount of changes."),(0,r.kt)("li",{parentName:"ul"},"Extensibility: When the open source Flink Connector or the built-in Flink SQL function does not meet the requirements, you can customize the Flink Connector and UDF to achieve its function expansion.")),(0,r.kt)("h3",{id:"24-basic-concepts"},"2.4 Basic Concepts"),(0,r.kt)("p",null,"The core concept refers to the explanation of terms in the outline design"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"InLong Dashboard"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Inlong front end management interface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"InLong Manager Client"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Wrap the interface in the manager for external user programs to call without going through the front-end inlong dashboard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"InLong Manager Openapi"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Inlong manager and external system call interface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"InLong Manager metaData"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Inlong manager metadata management, including metadata information of group and stream dimensions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"InLong Manager task manager"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Inlong manager manages the data source collection task module, manages agent task distribution, instruction distribution, and heartbeat reporting")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"InLong Group"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Data flow group, including multiple data flows, one group represents one data access")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"InLong Stream"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Data flow: a data flow has a specific flow direction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Stream Source"),(0,r.kt)("td",{parentName:"tr",align:"center"},"There are corresponding acquisition end and sink end in the stream. This design only involves the stream source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Stream Info"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Abstract of data flow in sort, including various sources, transformations, destinations, etc. of the data flow")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Group Info"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Encapsulation of data flow in sort. A group info can contain multiple stream infos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Node"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Abstraction of data source, data transformation and data destination in data synchronization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Extract Node"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Source side abstraction of data synchronization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Load Node"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Destination abstraction of data synchronization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MySQL Extract Node"),(0,r.kt)("td",{parentName:"tr",align:"center"},"MySQL data source abstraction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Kafka Load Node"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Kafka data destination abstraction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Transform Node"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Transformation process abstraction of data synchronization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Aggregate Transform Node"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Data synchronization aggregation class transformation process abstraction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Node Relation"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Relationship abstraction of nodes in data synchronization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Field Relation"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Abstraction of the relationship between upstream and downstream node fields in data synchronization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Abstraction of the relationship between upstream and downstream node fields in data synchronization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Substring Function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Abstraction of string interception function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Filter Function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Abstraction of data filter function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Function Param"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Input parameter abstraction of function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Constant Param"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Constant parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Field Info"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Node field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Meta FieldInfo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Node meta information field")))),(0,r.kt)("h3",{id:"25-domain-model"},"2.5 Domain Model"),(0,r.kt)("p",null,"This design mainly involves the following entities: "),(0,r.kt)("p",null,"Group, Stream, GroupInfo, StreamInfo, Node, NodeRelation, FieldRelation, Function, FilterFunction, SubstringFunction, FunctionParam, FieldInfo, MetaFieldInfo, MySQLExtractNode, KafkaLoadNode, etc."),(0,r.kt)("p",null,"For ease of understanding, this section will model and analyze the relationship between entities. Description of entity correspondence of domain model:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One group corresponds to one group info"),(0,r.kt)("li",{parentName:"ul"},"A group contains one or more streams"),(0,r.kt)("li",{parentName:"ul"},"One stream corresponds to one StreamInfo"),(0,r.kt)("li",{parentName:"ul"},"A GroupInfo contains one or more StreamInfo"),(0,r.kt)("li",{parentName:"ul"},"A StreamInfo contains multiple nodes"),(0,r.kt)("li",{parentName:"ul"},"A StreamInfo contains one or more NodeRelations"),(0,r.kt)("li",{parentName:"ul"},"A NodeRelation contains one or more FieldRelations"),(0,r.kt)("li",{parentName:"ul"},"A NodeRelation contains 0 or more FilterFunctions"),(0,r.kt)("li",{parentName:"ul"},"A FieldRelation contains one function or one FieldInfo as the source field and one FieldInfo as the target field"),(0,r.kt)("li",{parentName:"ul"},"A function contains one or more FunctionParams")),(0,r.kt)("p",null,"The above relationship can be represented by UML object relationship diagram as:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sort_UML",src:n(34858).Z,width:"2576",height:"869"})),(0,r.kt)("h3",{id:"26-function-use-case-diagram"},"2.6 Function Use-case Diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sort-usecase",src:n(31265).Z,width:"606",height:"356"})),(0,r.kt)("h2",{id:"3-system-outline-design"},"3. System Outline Design"),(0,r.kt)("h3",{id:"31-system-architecture-diagram"},"3.1 System Architecture Diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"architecture",src:n(40726).Z,width:"461",height:"741"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Serialization: Serialization Implementation Module"),(0,r.kt)("li",{parentName:"ul"},"Deserialization: Deserialization Implementation Module"),(0,r.kt)("li",{parentName:"ul"},"Flink Source: Custom Flink source implementation module"),(0,r.kt)("li",{parentName:"ul"},"Flink Sink: Custom Flink sink implementation module"),(0,r.kt)("li",{parentName:"ul"},"Transformation: Custom Transform implementation module"),(0,r.kt)("li",{parentName:"ul"},"GroupInfo: Corresponding to Inlong group"),(0,r.kt)("li",{parentName:"ul"},"StreamInfo: Corresponding to inlong stream"),(0,r.kt)("li",{parentName:"ul"},"Node: Abstraction of data source, data conversion and data destination in data synchronization"),(0,r.kt)("li",{parentName:"ul"},"FlinkSQLParser: SQL parser")),(0,r.kt)("h3",{id:"32-inlong-sort-internal-operation-flow-chart"},"3.2 InLong Sort Internal Operation Flow Chart"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sort-operation-flow",src:n(65120).Z,width:"771",height:"61"})),(0,r.kt)("h3",{id:"33-module-design"},"3.3 Module Design"),(0,r.kt)("p",null,"This design only adds Flink connector and Flink SQL generator to the original system, and modifies the data model module."),(0,r.kt)("h4",{id:"331-module-structure"},"3.3.1 Module Structure"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sort-module-structure",src:n(79690).Z,width:"771",height:"1011"})),(0,r.kt)("h4",{id:"332-module-division"},"3.3.2 Module Division"),(0,r.kt)("p",null,"Description of important module division:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"FlinkSQLParser"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Used to generate Flink SQL core classes, including references to GroupInfo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"GroupInfo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The internal abstraction of sort for inlong group is used to encapsulate the synchronization related information of the entire inlong group, including the reference to list\\<StreamInfo",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"StreamInfo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The internal abstraction of sort to inlong stream is used to encapsulate inlong stream synchronization related information, including references to list\\<node",">",", list\\<NodeRelation",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Node"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The top-level interface of the synchronization node. Its subclass implementation is mainly used to encapsulate the data of the synchronization data source and the transformation node")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ExtractNode"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Data extract node abstraction, inherited from node")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"LoadNode"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Data load node abstraction, inherited from node")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"TransformNode"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Data transformation node abstraction, inherited from node")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"NodeRelation"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Define relationships between nodes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"FieldRelation"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Define field relationships between nodes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Abstract of T-ability execution function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"FilterFunction"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function abstraction for data filtering, inherited from function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"SubstringFunction"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Used for string interception function abstraction, inherited from function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"FunctionParam"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Abstraction for function parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ConstantParam"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Encapsulation of function constant parameters, inherited from FunctionParam")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"FieldInfo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The encapsulation of node fields can also be used as function input parameters, inherited from FunctionParam")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"MetaFieldInfo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The encapsulation of built-in fields is currently mainly used in the metadata field scenario of canal JSON, which is inherited from FieldInfo")))),(0,r.kt)("h2",{id:"4-detailed-system-design"},"4. Detailed System Design"),(0,r.kt)("p",null,"The following describes the principle of SQL generation by taking MySQL synchronizing data to Kafka as an example"),(0,r.kt)("h3",{id:"41-node-described-in-sql"},"4.1 Node Described in SQL"),(0,r.kt)("h4",{id:"411-extractnode-described-in-sql"},"4.1.1 ExtractNode Described in SQL"),(0,r.kt)("p",null,"The node configuration is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},' private Node buildMySQLExtractNode() {\n        List<FieldInfo> fields = Arrays.asList(\n                new FieldInfo("name", new StringFormatInfo()),\n                new FieldInfo("age", new IntFormatInfo()));\n        return new MySqlExtractNode("1", "mysql_input", fields,\n                null, null, "id",\n                Collections.singletonList("tableName"), "localhost", "root", "password",\n                "inlong", null, null,\n                null, null);\n    }\n')),(0,r.kt)("p",null,"The generated SQL is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `mysql_1` (`name` string,`age` int) \nwith \n('connector' = 'mysql-cdc-inlong',\n'hostname' = 'localhost',\n'username' = 'root',\n'password' = 'password',\n'database-name' = 'inlong',\n'table-name' = 'tableName')\n")),(0,r.kt)("h4",{id:"412-transformnode--described-in-sql"},"4.1.2 TransformNode  Described in SQL"),(0,r.kt)("p",null,"The node configuration is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},' List<FilterFunction> filters = Arrays.asList(\n                new SingleValueFilterFunction(EmptyOperator.getInstance(),\n                        new FieldInfo("age", new IntFormatInfo()),\n                        LessThanOperator.getInstance(), new ConstantParam(25)),\n                new SingleValueFilterFunction(AndOperator.getInstance(),\n                        new FieldInfo("age", new IntFormatInfo()),\n                        MoreThanOrEqualOperator.getInstance(), new ConstantParam(18))\n        );\n')),(0,r.kt)("p",null,"The generated SQL is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT `name` AS `name`,`age` AS `age` FROM `mysql_1` WHERE `age` < 25 AND `age` >= 18\n")),(0,r.kt)("h4",{id:"413-loadnode-described-in-sql"},"4.1.3 LoadNode Described in SQL"),(0,r.kt)("p",null,"The node configuration is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},' private Node buildKafkaLoadNode(FilterStrategy filterStrategy) {\n        List<FieldInfo> fields = Arrays.asList(\n                new FieldInfo("name", new StringFormatInfo()),\n                new FieldInfo("age", new IntFormatInfo())\n        );\n        List<FieldRelation> relations = Arrays\n                .asList(\n                        new FieldRelation(new FieldInfo("name", new StringFormatInfo()),\n                                new FieldInfo("name", new StringFormatInfo())),\n                        new FieldRelation(new FieldInfo("age", new IntFormatInfo()),\n                                new FieldInfo("age", new IntFormatInfo()))\n                );\n        List<FilterFunction> filters = Arrays.asList(\n                new SingleValueFilterFunction(EmptyOperator.getInstance(),\n                        new FieldInfo("age", new IntFormatInfo()),\n                        LessThanOperator.getInstance(), new ConstantParam(25)),\n                new SingleValueFilterFunction(AndOperator.getInstance(),\n                        new FieldInfo("age", new IntFormatInfo()),\n                        MoreThanOrEqualOperator.getInstance(), new ConstantParam(18))\n        );\n        return new KafkaLoadNode("2", "kafka_output", fields, relations, filters,\n                filterStrategy, "topic1", "localhost:9092",\n                new CanalJsonFormat(), null,\n                null, "id");\n    }\n')),(0,r.kt)("p",null,"The generated SQL is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `kafka_3` (`name` string,`age` int) \nwith (\n'connector' = 'kafka-inlong',\n'topic' = 'topic1',\n'properties.bootstrap.servers' = 'localhost:9092',\n'format' = 'canal-json-inlong',\n'canal-json-inlong.ignore-parse-errors' = 'true',\n'canal-json-inlong.map-null-key.mode' = 'DROP',\n'canal-json-inlong.encode.decimal-as-plain-number' = 'true',\n'canal-json-inlong.timestamp-format.standard' = 'SQL',\n'canal-json-inlong.map-null-key.literal' = 'null'\n)\n")),(0,r.kt)("h3",{id:"42-field-t-described-in-sql"},"4.2 Field T Described in SQL"),(0,r.kt)("h4",{id:"421-filter-operator"},"4.2.1 Filter operator"),(0,r.kt)("p",null,"See 4.1 node configuration for relevant configurations"),(0,r.kt)("p",null,"The generated SQL is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO `kafka_3` SELECT `name` AS `name`,`age` AS `age` FROM `mysql_1` WHERE `age` < 25 AND `age` >= 18\n")),(0,r.kt)("h4",{id:"422-watermark"},"4.2.2 Watermark"),(0,r.kt)("p",null,"The complete configuration of GroupInfo is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private Node buildMySqlExtractNode() {\n        List<FieldInfo> fields = Arrays.asList(\n                new FieldInfo("name", new StringFormatInfo()),\n                new FieldInfo("age", new IntFormatInfo()),\n                new FieldInfo("ts", new TimestampFormatInfo()));\n        WatermarkField wk = new WatermarkField(new FieldInfo("ts", new TimestampFormatInfo()),\n                new StringConstantParam("1"),\n                new TimeUnitConstantParam(TimeUnit.MINUTE));\n        return new MySqlExtractNode("1", "mysql_input", fields,\n                wk, null, "id",\n                Collections.singletonList("tableName"), "localhost", "root", "password",\n                "inlong", null, null,\n                null, null);\n    }\n\n    private Node buildKafkaNode() {\n        List<FieldInfo> fields = Arrays.asList(\n                new FieldInfo("name", new StringFormatInfo()),\n                new FieldInfo("age", new IntFormatInfo()),\n                new FieldInfo("ts", new TimestampFormatInfo()));\n        List<FieldRelation> relations = Arrays\n                .asList(new FieldRelation(new FieldInfo("name", new StringFormatInfo()),\n                                new FieldInfo("name", new StringFormatInfo())),\n                        new FieldRelation(new FieldInfo("age", new IntFormatInfo()),\n                                new FieldInfo("age", new IntFormatInfo()))\n                );\n        return new KafkaLoadNode("2", "kafka_output", fields, relations, null, null,\n                "topic", "localhost:9092", new JsonFormat(),\n                1, null, "id");\n    }\n\n    private NodeRelation buildNodeRelation(List<Node> inputs, List<Node> outputs) {\n        List<String> inputIds = inputs.stream().map(Node::getId).collect(Collectors.toList());\n        List<String> outputIds = outputs.stream().map(Node::getId).collect(Collectors.toList());\n        return new NodeRelation(inputIds, outputIds);\n    }\n\n    @Override\n    public GroupInfo getTestObject() {\n        Node input = buildMySqlExtractNode();\n        Node output = buildKafkaNode();\n        StreamInfo streamInfo = new StreamInfo("1", Arrays.asList(input, output), Collections.singletonList(\n                buildNodeRelation(Collections.singletonList(input), Collections.singletonList(output))));\n        return new GroupInfo("1", Collections.singletonList(streamInfo));\n    }\n')))}m.isMDXComponent=!0},40726:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/architecture-b4c0fb3783a6ed2f2868f534df98e74b.png"},79690:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sort-module-structure-4dd424ae93043cb912dba69c08590b33.png"},65120:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sort-operation-flow-77363f12a68a011beba26db9ccc6fedb.png"},31265:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sort-usecase-fb8639f9724899ab3afcbf35b8a21902.png"},34858:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sort_UML-896d751427509d769add998680df9516.png"}}]);