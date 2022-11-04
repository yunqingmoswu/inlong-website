"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[29281],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=m(a),g=r,k=s["".concat(p,".").concat(g)]||s[g]||d[g]||l;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},28615:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"Elasticsearch Example",sidebar_position:4},i=void 0,o={unversionedId:"modules/sort-standalone/elasticsearch_example",id:"version-1.2.0/modules/sort-standalone/elasticsearch_example",title:"Elasticsearch Example",description:"Prepare to get module archive",source:"@site/versioned_docs/version-1.2.0/modules/sort-standalone/elasticsearch_example.md",sourceDirName:"modules/sort-standalone",slug:"/modules/sort-standalone/elasticsearch_example",permalink:"/docs/1.2.0/modules/sort-standalone/elasticsearch_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.2.0/modules/sort-standalone/elasticsearch_example.md",tags:[],version:"1.2.0",sidebarPosition:4,frontMatter:{title:"Elasticsearch Example",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Hive Example",permalink:"/docs/1.2.0/modules/sort-standalone/hive_example"},next:{title:"Overview",permalink:"/docs/1.2.0/modules/audit/overview"}},p={},m=[{value:"Prepare to get module archive",id:"prepare-to-get-module-archive",level:2},{value:"Prepare to modify configuration file",id:"prepare-to-modify-configuration-file",level:2},{value:"Example: conf/common.properties",id:"example-confcommonproperties",level:3},{value:"Example: conf/SortClusterConfig.conf",id:"example-confsortclusterconfigconf",level:3},{value:"Example: conf/sid_es_v3.conf",id:"example-confsid_es_v3conf",level:3},{value:"Modify configuration file:conf/common.properties",id:"modify-configuration-fileconfcommonproperties",level:2},{value:"Modify configuration file: SortClusterConfig.conf",id:"modify-configuration-file-sortclusterconfigconf",level:2},{value:"Modify configuration: SortTaskConfig",id:"modify-configuration-sorttaskconfig",level:3},{value:"Modify configuration: idParams of Elasticsearch sort task",id:"modify-configuration-idparams-of-elasticsearch-sort-task",level:3},{value:"Modify configuration: sinkParams of Elasticsearch sort task",id:"modify-configuration-sinkparams-of-elasticsearch-sort-task",level:3},{value:"Modify configuration file: sid_es_v3.conf",id:"modify-configuration-file-sid_es_v3conf",level:2},{value:"Modify configuration: sid_es_v3.conf",id:"modify-configuration-sid_es_v3conf",level:3},{value:"Modify configuration: CacheCluster",id:"modify-configuration-cachecluster",level:3},{value:"Modify configuration: Topic",id:"modify-configuration-topic",level:3},{value:"Start inlong-sort-standalone application",id:"start-inlong-sort-standalone-application",level:2}],u={toc:m};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prepare-to-get-module-archive"},"Prepare to get module archive"),(0,r.kt)("p",null,"Module archive is in the directory:inlong-sort-standalone/sort-standalone-dist/target/, the archive file is apache-inlong-sort-standalone-${project.version}-bin.tar.gz."),(0,r.kt)("h2",{id:"prepare-to-modify-configuration-file"},"Prepare to modify configuration file"),(0,r.kt)("p",null,'At first, decompress the archive file, copy three files in the directory "conf/es/" to the directory "conf/".'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"conf/common.properties, common configuration of all components."),(0,r.kt)("li",{parentName:"ul"},"conf/SortClusterConfig.conf, sink configuration of all sort tasks."),(0,r.kt)("li",{parentName:"ul"},"conf/sid_es_v3.conf, data source configuration example of a sort task, the file name is same with sort task name in SortClusterConfig.conf.")),(0,r.kt)("h3",{id:"example-confcommonproperties"},"Example: conf/common.properties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"clusterId=esv3-sz-sz1\nnodeId=nodeId\nmetricDomains=Sort\nmetricDomains.Sort.domainListeners=org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener\nmetricDomains.Sort.snapshotInterval=60000\nsortChannel.type=org.apache.inlong.sort.standalone.channel.BufferQueueChannel\nsortSink.type=org.apache.inlong.sort.standalone.sink.elasticsearch.EsSink\nsortSource.type=org.apache.inlong.sort.standalone.source.sortsdk.SortSdkSource\n\nsortClusterConfig.type=file\nsortClusterConfig.file=SortClusterConfig.conf\nsortSourceConfig.QueryConsumeConfigType=file\n#sortTaskId.conf\n\n#sortClusterConfig.type=manager\n#sortSourceConfig.QueryConsumeConfigType=manager\n#managerUrlLoaderType=org.apache.inlong.sort.standalone.config.loader.CommonPropertiesManagerUrlLoader\n#sortClusterConfig.managerUrl=http://${manager_ip:port}/api/inlong/manager/openapi/sort/getClusterConfig\n#sortSourceConfig.managerUrl=http://${manager_ip:port}/api/inlong/manager/openapi/sort/getSortSource\n")),(0,r.kt)("h3",{id:"example-confsortclusterconfigconf"},"Example: conf/SortClusterConfig.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "clusterName": "esv3-gz-gz1",\n    "sortTasks": [{\n        "name": "sid_es_v3",\n        "type": "ES",\n        "idParams": [{\n            "indexNamePattern": "inlong0fc00000046_{yyyyMMdd}",\n            "contentOffset": "0",\n            "inlongGroupId": "atta",\n            "fieldOffset": "2",\n            "fieldNames": "ftime extinfo t1 t2 t3 t4",\n            "inlongStreamId": "0fc00000046",\n            "separator": "|"\n        }],\n        "sinkParams": {\n            "httpHosts": "11.187.135.221:9200",\n            "password": "yingyan@ES",\n            "auditSetName": "es-rmrv7g7a",\n            "bulkSizeMb": "10",\n            "flushInterval": "60",\n            "keywordMaxLength": "32767",\n            "bulkAction": "4000",\n            "concurrentRequests": "5",\n            "maxConnect": "10",\n            "isUseIndexId": "false",\n            "username": "elastic"\n        }\n    }]\n}\n')),(0,r.kt)("h3",{id:"example-confsid_es_v3conf"},"Example: conf/sid_es_v3.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "sortClusterName": "esv3-gz-gz1",\n    "sortTaskId": "sid_es_v3",\n    "cacheZones": {\n        "pc_atta6th_sz1": {\n            "zoneName": "pc_atta6th_sz1",\n            "serviceUrl": "http://9.139.53.86:8080",\n            "authentication": "eyJrZXlJZCI6InB1bHNhci04MnhhN24zZWs1ZHciLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwdWxzYXItODJ4YTduM2VrNWR3X2FkbWluIn0.D5H_j8UQk8KYWHw_mzq2HmR393SnbL5Gz7JYCANBPnI",\n            "topics": [{\n                "topic": "pulsar-82xa7n3ek5dw/atta/atta_topic_1",\n                "partitionCnt": 10,\n                "topicProperties": {}\n            }],\n            "cacheZoneProperties": {},\n            "zoneType": "pulsar"\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"modify-configuration-fileconfcommonproperties"},"Modify configuration file:conf/common.properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clusterId"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-sort-standalone cluster id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nodeId"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Local IP"),(0,r.kt)("td",{parentName:"tr",align:null},"Current node id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metricDomains"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Sort"),(0,r.kt)("td",{parentName:"tr",align:null},"domain name of metric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metricDomains.Sort.domainListeners"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener"),(0,r.kt)("td",{parentName:"tr",align:null},"class name list of metric listener, separated by space")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metricDomains.Sort.snapshotInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"60000"),(0,r.kt)("td",{parentName:"tr",align:null},"interval snapshoting metric data(millisecond)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prometheusHttpPort"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"8080"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP server port of prometheus simple client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortChannel.type"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.channel.BufferQueueChannel"),(0,r.kt)("td",{parentName:"tr",align:null},"Channel class name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortSink.type"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Sink class name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortSource.type"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.inlong.sort.standalone.source.sortsdk.SortSdkSource"),(0,r.kt)("td",{parentName:"tr",align:null},"Source class name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortClusterConfig.type"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"manager"),(0,r.kt)("td",{parentName:"tr",align:null},"Loader source of cluster configuration data: ","[file,manager,UserDefinedClassName]",".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortClusterConfig.file"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"SortClusterConfig.conf"),(0,r.kt)("td",{parentName:"tr",align:null},"File name in class resource when sortClusterConfig.type=file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortClusterConfig.managerUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"The parameter is the cluster configuration URL of InlongManager when sortClusterConfig.type=manager. ",(0,r.kt)("br",null),"For example:http://${manager ip:port}/api/inlong/manager/openapi/sort/standalone/getClusterConfig")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortSourceConfig.QueryConsumeConfigType"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"manager"),(0,r.kt)("td",{parentName:"tr",align:null},"Loader source of sort task configuration data: ","[file,manager,UserDefinedClassName]",". ",(0,r.kt)("br",null),"Sort task configuration file is ${sortTaskId}.conf in the class resource when sortSourceConfig.QueryConsumeConfigType=file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortSourceConfig.managerUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"The parameter is the sort task configuration URL of InlongManager when sortClusterConfig.type=manager. ",(0,r.kt)("br",null),"For example:http://${manager ip:port}/api/inlong/manager/openapi/sort/standalone/getSortSource")))),(0,r.kt)("h2",{id:"modify-configuration-file-sortclusterconfigconf"},"Modify configuration file: SortClusterConfig.conf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get cluster configuration data from the file:SortClusterConfig.conf in classpath, it can not support online updating."),(0,r.kt)("li",{parentName:"ul"},"Get cluster configuration data from InlongManager URL, it can support online updating.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clusterName"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-sort-standalone cluster id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortTasks"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"JsonArray","<","SortTaskConfig",">"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Sort task list")))),(0,r.kt)("h3",{id:"modify-configuration-sorttaskconfig"},"Modify configuration: SortTaskConfig"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"sort task name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},'sort task type, for example:HIVE("hive"), TUBE("tube"), KAFKA("kafka"), PULSAR("pulsar"), ELASTICSEARCH("elasticsearch"), UNKNOWN("n")')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"idParams"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Inlong DataStream configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sinkParams"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Sort task parameters")))),(0,r.kt)("h3",{id:"modify-configuration-idparams-of-elasticsearch-sort-task"},"Modify configuration: idParams of Elasticsearch sort task"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlongGroupId"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"inlongGroupId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlongStreamId"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"inlongStreamId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"separator"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"separator of Inlong datastream in data source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fieldNames"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"field name list of Elasticsearch index, separated by space.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"indexNamePattern"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"index name pattern of Elasticsearch,date time variable include {yyyyMMdd},{yyyyMMddHH},{yyyyMMddHHmm}.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contentOffset"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"field index offset of source content")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fieldOffset"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"offset of Elasticsearch index field name list")))),(0,r.kt)("h3",{id:"modify-configuration-sinkparams-of-elasticsearch-sort-task"},"Modify configuration: sinkParams of Elasticsearch sort task"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"httpHosts"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Hosts of Elasticsearch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Username of Elasticsearch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Password of Elasticsearch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isUseIndexId"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Create index id or not")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bulkSizeMb"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Max content size per bulk(MB)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flushInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"60"),(0,r.kt)("td",{parentName:"tr",align:null},"Max interval between flushing operation(Second)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keywordMaxLength"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"32767"),(0,r.kt)("td",{parentName:"tr",align:null},"Max keyword length(Byte)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bulkAction"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"4000"),(0,r.kt)("td",{parentName:"tr",align:null},"Max index request per bulk")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxConnect"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Max opening HTTP connect")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"concurrentRequests"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Max concurrent requests per HTTP connect")))),(0,r.kt)("h2",{id:"modify-configuration-file-sid_es_v3conf"},"Modify configuration file: sid_es_v3.conf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The file name include sort task name plus the postfix ".conf". '),(0,r.kt)("li",{parentName:"ul"},"Get the configuration data from the file in classpath, it can not support online updating."),(0,r.kt)("li",{parentName:"ul"},"Get the configuration data from InlongManager URL, it can support online updating.")),(0,r.kt)("h3",{id:"modify-configuration-sid_es_v3conf"},"Modify configuration: sid_es_v3.conf"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortClusterName"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"inlong-sort-standalone cluster id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortTaskId"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Sort task name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheZones"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"JsonObject","<","String, JsonObject",">"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Cache cluster list, Map","<","cacheClusterName, CacheCluster",">")))),(0,r.kt)("h3",{id:"modify-configuration-cachecluster"},"Modify configuration: CacheCluster"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zoneName"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"cache cluster name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zoneType"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"[pulsar,tube,kafka]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"serviceUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar serviceUrl or Kafka broker list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authentication"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar authentication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheZoneProperties"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Map","<","String,String",">"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Cache consumer configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topics"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"List","<","Topic",">"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Topic list of Cache consumer")))),(0,r.kt)("h3",{id:"modify-configuration-topic"},"Modify configuration: Topic"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"cache topic name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"partitionCnt"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"cache topic partition count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topicProperties"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Map","<","String,String",">"),(0,r.kt)("td",{parentName:"tr",align:null},"NA"),(0,r.kt)("td",{parentName:"tr",align:null},"Cache topic configuration")))),(0,r.kt)("h2",{id:"start-inlong-sort-standalone-application"},"Start inlong-sort-standalone application"),(0,r.kt)("p",null,'At last, execute the shell file "./bin/sort-start.sh" for starting sort-standalone, you can check the log file "sort.log".'))}d.isMDXComponent=!0}}]);