"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2310],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(n),h=i,m=g["".concat(s,".").concat(h)]||g[h]||p[h]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},34399:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={title:"Release InLong 0.11.0",sidebar_position:3},s=void 0,u={permalink:"/blog/apache-inlong-0.11.0",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/blog/blog/apache-inlong-0.11.0.md",source:"@site/blog/apache-inlong-0.11.0.md",title:"Release InLong 0.11.0",description:"Apache InLong (incubating)  has been renamed from the original Apache TubeMQ (incubating) from 0.9.0.  With the name change,  InLong has also been upgraded from a single message queue to a one-stop integration framework for massive data.  InLong supports data collection,  aggregation,  caching,  and sorting,  users can import data from the data source to the real-time computing engine or land to offline storage with a simple configuration.",date:"2022-05-31T01:57:02.000Z",formattedDate:"May 31, 2022",tags:[],readingTime:4.915,truncated:!1,authors:[],frontMatter:{title:"Release InLong 0.11.0",sidebar_position:3},nextItem:{title:"Release InLong 0.12.0",permalink:"/blog/apache-inlong-0.12.0"}},c={authorsImageUrls:[]},p=[{value:"Apache InLong(incubating) Introduction",id:"apache-inlongincubating-introduction",level:3},{value:"What\u2019s New in Apache InLong(incubating) 0.11.0",id:"whats-new-in-apache-inlongincubating-0110",level:3},{value:"InLong on Kubernetes",id:"inlong-on-kubernetes",level:4},{value:"Open up dataproxy-&gt;pulsar data flow",id:"open-up-dataproxy-pulsar-data-flow",level:4},{value:"Go SDK for InLong TubeMQ",id:"go-sdk-for-inlong-tubemq",level:4},{value:"refactor the official website",id:"refactor-the-official-website",level:4},{value:"Apache InLong(incubating) follow-up planning",id:"apache-inlongincubating-follow-up-planning",level:3}],g={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache InLong (incubating)  has been renamed from the original Apache TubeMQ (incubating) from 0.9.0.  With the name change,  InLong has also been upgraded from a single message queue to a one-stop integration framework for massive data.  InLong supports data collection,  aggregation,  caching,  and sorting,  users can import data from the data source to the real-time computing engine or land to offline storage with a simple configuration.\nThe just-released version ",(0,o.kt)("inlineCode",{parentName:"p"},"0.11.0-incubating")," is the third version after the name changed.  This version includes next features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lower the user's threshold for use further.  Support all modules of InLong to be deployed on Kubernetes,  and refactor the official website,  so that users can more easily access related documents."),(0,o.kt)("li",{parentName:"ul"},"Support more usage scenarios,  increase the data flow direction of ",(0,o.kt)("inlineCode",{parentName:"li"},"Dataproxy -> Pulsar"),",  and cover scenarios with higher requirements for data integrity and consistency."),(0,o.kt)("li",{parentName:"ul"},"Supports SDKs in more languages for TubeMQ.  This version opens the production-level TubeMQ Go SDK, which is convenient for users who use the Go language to access")),(0,o.kt)("p",null,"This version closed more than 80 issues, including four significant features and 35 improvements."),(0,o.kt)("h3",{id:"apache-inlongincubating-introduction"},"Apache InLong(incubating) Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://inlong.apache.org"},"Apache InLong")," is a one-stop integration framework for massive data donated by Tencent to the Apache community.  It provides automatic,  safe,  reliable,  and high-performance data transmission capabilities to facilitate the construction of streaming-based data analysis,  modeling,  and applications.",(0,o.kt)("br",{parentName:"p"}),"\n","The Apache InLong project was originally called TubeMQ,  focusing on high-performance,  low-cost message queuing services.  In order to further release the surrounding ecological capabilities of TubeMQ,  we upgraded the project to InLong,  focusing on creating a one-stop integration framework for massive data."),(0,o.kt)("p",null,"Apache InLong uses TDBank internally used by Tencent as the prototype,  and relies on trillion-level data access and processing capabilities to integrate the entire process of data collection,  aggregation,  storage,  and sorting data processing.  It is simple to use,  flexible to expand,  stable and reliable characteristic."),(0,o.kt)("img",{src:"/img/inlong-structure-en.png",align:"center",alt:"Apache InLong"}),(0,o.kt)("p",null,"Apache InLong serves the entire life cycle from data collection to landing,  and provides different processing modules according to different stages of data,  including the next modules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"inlong-agent"),",  data collection agent, supports reading regular logs from specified directories or files and reporting data one by one.  In the future,  DB collection and HTTP reporting capabilities will also be expanded."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"inlong-dataproxy"),",  a Proxy component based on Flume-ng,  supports data transmission blocking,  placing retransmission, and has the ability to forward received data to different MQ (message queues)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"inlong-tubemq"),",  Tencent's self-developed message queuing service,  focuses on high-performance storage and transmission of massive data in big data scenarios and has a relatively good core advantage in mass practice and low cost."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"inlong-sort"),",  after consuming data from different MQ services,  perform ETL processing,  and then aggregate and write the data into Apache Hive, ClickHouse,  Hbase,  IceBerg,  etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"inlong-manager"),", provides complete data service management and control capabilities,  including metadata,  OpenAPI,  task flow,  authority,  etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"inlong-website"),", a front-end page for managing data access,  simplifying the use of the entire InLong control platform.")),(0,o.kt)("h3",{id:"whats-new-in-apache-inlongincubating-0110"},"What\u2019s New in Apache InLong(incubating) 0.11.0"),(0,o.kt)("h4",{id:"inlong-on-kubernetes"},"InLong on Kubernetes"),(0,o.kt)("p",null,"Apache InLong includes multiple components such as data collection,  data aggregation,  data caching,  data sorting,  and cluster management and control.  In order to facilitate users to use and support cloud-native features,  all components currently support deployment in Kubernetes.\nThanks to @shink for contributing to this feature.  For specific details,  please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1308"},"INLONG-1308"),"."),(0,o.kt)("h4",{id:"open-up-dataproxy-pulsar-data-flow"},"Open up dataproxy->pulsar data flow"),(0,o.kt)("p",null,"Before version 0.11.0,  InLong's data caching layer could only support TubeMQ.  TubeMQ is very suitable for scenarios with huge data volumes,  but in extreme scenarios,  there may be a small amount of data loss. To provide data reliability, the Inlong added support for Apache Pulsar in version 0.11.0.  Now InLong backend can support data flow ",(0,o.kt)("inlineCode",{parentName:"p"},"agent -> dataProxy -> tubeMQ/pulsar -> sort.")," The introduction of Pulsar makes the application scenarios covered by InLong more abundant,  which could meet the needs of more users.\nThanks to @baomingyu for his contribution to this feature.  For more details,  please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1330"},"INLONG-1330"),"."),(0,o.kt)("h4",{id:"go-sdk-for-inlong-tubemq"},"Go SDK for InLong TubeMQ"),(0,o.kt)("p",null,"Before version 0.11.0,  InLong TubeMQ supports SDKs in three languages:  Java,  C++,  and Python.  With more and more applications of Go language,  the demand for Go language SDK in the community is also increasing. Version 0.11.0 was officially introduced to the Go language SDK of TubeMQ.  The multilingual SDK is enriched,  and the difficulty of access and use for Go language users is also reduced.\nThanks to @TszKitLo40 for contributing to this feature. For more details, please refer to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/issues/624"},"INLONG-624")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/issues/1570"},"INLONG-1578")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/issues/1584"},"INLONG-1584")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/issues/1666"},"INLONG-1666")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/issues/1682"},"INLONG-1682"))),(0,o.kt)("h4",{id:"refactor-the-official-website"},"refactor the official website"),(0,o.kt)("p",null,"In version 0.11.0,  InLong uses Docusaurus to refactor the ",(0,o.kt)("a",{parentName:"p",href:"https://inlong.apache.org/"},"official website")," to provide a more concise and intuitive document management and display.\nThanks to @leezng for his contribution to this feature. For more details,  please refer to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/issues/1631"},"INLONG-1631")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/issues/1632"},"INLONG-1632")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/issues/1633"},"INLONG-1633")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/issues/1634"},"INLONG-1634")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/issues/1635"},"INLONG-1635")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/issues/1636"},"INLONG-1636")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/issues/1637"},"INLONG-1637")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/issues/1638"},"INLONG-1638"))),(0,o.kt)("p",null,"In addition to the above major features,  InLong 0.11.0 version has other key improvements,  including but not limited to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added contribution guidelines in the main Repo,  ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/issues/1623"},"INLONG-1623")),(0,o.kt)("li",{parentName:"ul"},"Add Inlong-Manager to DataProxy configuration management, ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/issues/1595"},"INLONG-1595")),(0,o.kt)("li",{parentName:"ul"},"Optimized the GitHub issue template, ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/issues/1585"},"INLONG-1585")),(0,o.kt)("li",{parentName:"ul"},"Code Checkstyle optimization, ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/issues/1571"},"INLONG-1571"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/issues/1593"},"INLONG-1593"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/issues/1593"},"INLONG-1593"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/issues/1662"},"INLONG-1662")),(0,o.kt)("li",{parentName:"ul"},"Agent introduces message filter, ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/issues/1641"},"INLONG-1641"))),(0,o.kt)("p",null,"The 0.11.0 version also fixes ~45 bugs. Thanks to all the contributions who have contributed to the Inlong community (in no particular order):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"shink"),(0,o.kt)("li",{parentName:"ul"},"baomingyu"),(0,o.kt)("li",{parentName:"ul"},"TszKitLo40"),(0,o.kt)("li",{parentName:"ul"},"leezng"),(0,o.kt)("li",{parentName:"ul"},"ruanwenjun"),(0,o.kt)("li",{parentName:"ul"},"leo65535"),(0,o.kt)("li",{parentName:"ul"},"luchunliang"),(0,o.kt)("li",{parentName:"ul"},"pierre94"),(0,o.kt)("li",{parentName:"ul"},"EMsnap"),(0,o.kt)("li",{parentName:"ul"},"dockerzhang"),(0,o.kt)("li",{parentName:"ul"},"gosonzhang"),(0,o.kt)("li",{parentName:"ul"},"healchow"),(0,o.kt)("li",{parentName:"ul"},"guangxuCheng"),(0,o.kt)("li",{parentName:"ul"},"yuanboliu")),(0,o.kt)("h3",{id:"apache-inlongincubating-follow-up-planning"},"Apache InLong(incubating) follow-up planning"),(0,o.kt)("p",null,"In the subsequent version planning of InLong, we will further release the capabilities of InLong to cover more usage scenarios, mainly including"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support Apache Pulsar full link data access capabilities, including back-end processing and front-end management capabilities."),(0,o.kt)("li",{parentName:"ul"},"Support data flow such as ClickHouse,  Apache Iceberg,  Apache HBase, etc.")))}h.isMDXComponent=!0}}]);