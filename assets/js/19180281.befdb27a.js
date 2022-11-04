"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[44178],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>f});var o=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=o.createContext({}),c=function(n){var e=o.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},p=function(n){var e=c(n.components);return o.createElement(l.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,l=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),u=c(t),f=r,k=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return t?o.createElement(k,a(a({ref:e},p),{},{components:t})):o.createElement(k,a({ref:e},p))}));function f(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},92800:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const i={title:"Sort Plugin",sidebar_position:3},a="Overview",s={unversionedId:"design_and_concept/how_to_write_plugin_sort",id:"version-1.1.0/design_and_concept/how_to_write_plugin_sort",title:"Sort Plugin",description:"InLong-Sort is known as a real-time ETL system. Currently, supported sinks are hive, kafka, clickhouse and iceberg.",source:"@site/versioned_docs/version-1.1.0/design_and_concept/how_to_write_plugin_sort.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/how_to_write_plugin_sort",permalink:"/docs/1.1.0/design_and_concept/how_to_write_plugin_sort",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/design_and_concept/how_to_write_plugin_sort.md",tags:[],version:"1.1.0",sidebarPosition:3,frontMatter:{title:"Sort Plugin",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Agent Plugin",permalink:"/docs/1.1.0/design_and_concept/how_to_write_plugin_agent"},next:{title:"Manager Plugin",permalink:"/docs/1.1.0/design_and_concept/how_to_write_plugin_manager"}},l={},c=[],p={toc:c};function d(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"InLong-Sort is known as a real-time ETL system. Currently, supported sinks are hive, kafka, clickhouse and iceberg.\nThis article introduces how to extend a new type of sink in InLong-Sort."),(0,r.kt)("h1",{id:"extend-a-new-sink-function"},"Extend a new sink function"),(0,r.kt)("p",null,"InLong-Sort is based on flink, when extending a new type of sink in InLong-Sort, either a new type of flink sink\nor a predefined sink in flink is required.\nrefer to ",(0,r.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/datastream/overview/#datastream-connectors"},"DataStream Connectors "),"."),(0,r.kt)("h1",{id:"extend-a-new-sink-protocol"},"Extend a new sink protocol"),(0,r.kt)("p",null,"Firstly, implement a new sink protocol which extends\n",(0,r.kt)("inlineCode",{parentName:"p"},"inlong-sort/sort-common/src/main/java/org/apache/inlong/sort/protocol/sink/SinkInfo.java")),(0,r.kt)("p",null,"All necessary attributes used by the corresponding flink sink which extended before should be placed in the protocol"),(0,r.kt)("p",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class DemoSinkInfo extends SinkInfo {\n    \n    // Place necessary attributes here\n\n    @JsonCreator\n    public DemoSinkInfo(FieldInfo[] fields) {\n        super(fields);\n    }\n}\n")),(0,r.kt)("p",null,"Secondly, mark the new sink protocol as subtype of SinkInfo and give it a name"),(0,r.kt)("p",null,"Example : A new sink protocol DemoSinkInfo whose subtype name is ",(0,r.kt)("inlineCode",{parentName:"p"},"Constants.SINK_TYPE_DEMO")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * The base class of the data sink in the metadata.\n */\n@JsonTypeInfo(\n        use = JsonTypeInfo.Id.NAME,\n        include = JsonTypeInfo.As.PROPERTY,\n        property = "type")\n@JsonSubTypes({\n        @Type(value = ClickHouseSinkInfo.class, name = Constants.SINK_TYPE_CLICKHOUSE),\n        @Type(value = HiveSinkInfo.class, name = Constants.SINK_TYPE_HIVE),\n        @Type(value = KafkaSinkInfo.class, name = Constants.SINK_TYPE_KAFKA),\n        @Type(value = IcebergSinkInfo.class, name = Constants.SINK_TYPE_ICEBERG),\n        \n        // The new sink protocol\n        @Type(value = DemoSinkInfo.class, name = Constants.SINK_TYPE_DEMO)}\n)\npublic abstract class SinkInfo implements Serializable {\n\n    private static final long serialVersionUID = 1485856855405721745L;\n\n    @JsonProperty("fields")\n    private final FieldInfo[] fields;\n\n    public SinkInfo(@JsonProperty("fields") FieldInfo[] fields) {\n        this.fields = checkNotNull(fields);\n    }\n\n    @JsonProperty("fields")\n    public FieldInfo[] getFields() {\n        return fields;\n    }\n}\n')),(0,r.kt)("h1",{id:"bundle-the-new-sink-make-it-an-alternative-sink-in-inlong_sort"},"Bundle the new sink, make it an alternative sink in Inlong_sort"),(0,r.kt)("p",null,"After extending a new flink sink and a new sink protocol in InLong-Sort, we can bundle the new sink into the flink job\n(the entrance of InLong-Sort)"),(0,r.kt)("p",null,"The entrance of the flink job is ",(0,r.kt)("inlineCode",{parentName:"p"},"inlong-sort/sort-single-tenant/src/main/java/org/apache/inlong/sort/singletenant/flink/Entrance.java")),(0,r.kt)("p",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private static void buildSinkStream(\n        DataStream<Row> sourceStream,\n        Configuration config,\n        SinkInfo sinkInfo,\n        Map<String, Object> properties,\n        long dataflowId) throws IOException, ClassNotFoundException {\n    final String sinkType = checkNotNull(config.getString(Constants.SINK_TYPE));\n\n    switch (sinkType) {\n        case Constants.SINK_TYPE_CLICKHOUSE:\n            break;\n        case Constants.SINK_TYPE_HIVE:\n            break;\n        case Constants.SINK_TYPE_ICEBERG:\n            break;\n        case Constants.SINK_TYPE_KAFKA:\n            break;\n        case Constants.SINK_TYPE_DEMO:\n            // Add the extended sink function here\n            break;\n        default:\n            throw new IllegalArgumentException("Unsupported sink type " + sinkType);\n    }\n\n}\n\n')))}d.isMDXComponent=!0}}]);