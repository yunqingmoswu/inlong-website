"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6339],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),g=r,m=u["".concat(p,".").concat(g)]||u[g]||s[g]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83678:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Data Node Plugin",sidebar_position:5},p=void 0,d={unversionedId:"design_and_concept/inlong_data_node_plugin",id:"design_and_concept/inlong_data_node_plugin",title:"Data Node Plugin",description:"Overview",source:"@site/docs/design_and_concept/inlong_data_node_plugin.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/inlong_data_node_plugin",permalink:"/docs/next/design_and_concept/inlong_data_node_plugin",draft:!1,editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/design_and_concept/inlong_data_node_plugin.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Data Node Plugin",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Dashboard Plugin",permalink:"/docs/next/design_and_concept/how_to_write_plugin_dashboard"},next:{title:"How to Build",permalink:"/docs/next/quick_start/how_to_build"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Extend Extract Node",id:"extend-extract-node",level:2},{value:"Extend Load Node",id:"extend-load-node",level:2},{value:"Last but not Least",id:"last-but-not-least",level:2}],u={toc:s};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Inlong is aimed at create dataflow between different data sources, now Inlong has support several universal data sources such as ",(0,o.kt)("strong",{parentName:"p"},"MySQL"),", ",(0,o.kt)("strong",{parentName:"p"},"Apache Kafka"),", ",(0,o.kt)("strong",{parentName:"p"},"ClickHouse")," on Input/Output respectively,\nYou can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://inlong.apache.org/docs/next/data_node/extract_node/auto_push"},"data_node")," for specific information.\nWe Plan to support more data sources in the future, and this article is a development manual to extend data nodes."),(0,o.kt)("h2",{id:"extend-extract-node"},"Extend Extract Node"),(0,o.kt)("p",null,"In order to extend an input data sources , also refered to ",(0,o.kt)("strong",{parentName:"p"},"extract node")," in Inlong. We take ",(0,o.kt)("strong",{parentName:"p"},"MySQL_BINLOG")," for example."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Develop extract node plugin in sort, refer to ",(0,o.kt)("a",{parentName:"li",href:"https://inlong.apache.org/docs/next/design_and_concept/how_to_write_plugin_sort"},"how_to_write_plugin_sort")),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("strong",{parentName:"li"},"TaskType")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.common.enums.TaskTypeEnum")),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("strong",{parentName:"li"},"SourceType")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.common.enums.SourceType")),(0,o.kt)("li",{parentName:"ul"},"Create new package under package path: ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.common.pojo.source"),", develop every entity class needed."),(0,o.kt)("li",{parentName:"ul"},"Create Operation class for new data source under package path: ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.service.source"),"."),(0,o.kt)("li",{parentName:"ul"},"Transfer data source to ",(0,o.kt)("strong",{parentName:"li"},"ExtractNode")," supported in ",(0,o.kt)("strong",{parentName:"li"},"Sort"),", refer to ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.service.sort.util.ExtractNodeUtils"))),(0,o.kt)("h2",{id:"extend-load-node"},"Extend Load Node"),(0,o.kt)("p",null,"The way to extend data sink is nearly the same with data source"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Develop load node plugin in sort, refer to ",(0,o.kt)("a",{parentName:"li",href:"https://inlong.apache.org/docs/next/design_and_concept/how_to_write_plugin_sort"},"how_to_write_plugin_sort")),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("strong",{parentName:"li"},"SinkType")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.common.enums.SinkType")),(0,o.kt)("li",{parentName:"ul"},"Create new package under package path: ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.common.pojo.sink"),", develop every entity class needed."),(0,o.kt)("li",{parentName:"ul"},"Create Operation class for new data source under package path: ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.service.sink"),"."),(0,o.kt)("li",{parentName:"ul"},"Transfer data sink to ",(0,o.kt)("strong",{parentName:"li"},"LoadNode")," supported in ",(0,o.kt)("strong",{parentName:"li"},"Sort"),", refer to ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.service.sort.util.LoadNodeUtils"))),(0,o.kt)("h2",{id:"last-but-not-least"},"Last but not Least"),(0,o.kt)("p",null,"Any Optimization Suggestions are welcome through ",(0,o.kt)("strong",{parentName:"p"},"email")," or ",(0,o.kt)("strong",{parentName:"p"},"pr"),"."))}g.isMDXComponent=!0}}]);