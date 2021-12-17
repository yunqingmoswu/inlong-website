"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8593],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,y=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},32168:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={title:"Bare Metal",sidebar_position:4},p=void 0,u={unversionedId:"deployment/bare_metal",id:"deployment/bare_metal",isDocsHomePage:!1,title:"Bare Metal",description:"Environment Requirements",source:"@site/docs/deployment/bare_metal.md",sourceDirName:"deployment",slug:"/deployment/bare_metal",permalink:"/docs/next/deployment/bare_metal",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/deployment/bare_metal.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Bare Metal",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/docs/next/deployment/k8s"},next:{title:"Overview",permalink:"/docs/next/modules/agent/overview"}},c=[{value:"Environment Requirements",id:"environment-requirements",children:[]},{value:"Deploy InLong TubeMQ Server (Optional)",id:"deploy-inlong-tubemq-server-optional",children:[]},{value:"Deploy InLong TubeMQ Manager (Optional)",id:"deploy-inlong-tubemq-manager-optional",children:[]},{value:"Deploy InLong Manager",id:"deploy-inlong-manager",children:[]},{value:"Deploy InLong WebSite",id:"deploy-inlong-website",children:[]},{value:"Deploy InLong Sort",id:"deploy-inlong-sort",children:[]},{value:"Deploy InLong DataProxy",id:"deploy-inlong-dataproxy",children:[]},{value:"Deploy InLong Agent",id:"deploy-inlong-agent",children:[]},{value:"Business configuration",id:"business-configuration",children:[]},{value:"Data report verification",id:"data-report-verification",children:[]}],s={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ZooKeeper 3.5+"),(0,a.kt)("li",{parentName:"ul"},"MySQL 5.7+"),(0,a.kt)("li",{parentName:"ul"},"Flink 1.9.x"),(0,a.kt)("li",{parentName:"ul"},"Apache Pulsar 2.6+ (Optional)")),(0,a.kt)("h2",{id:"deploy-inlong-tubemq-server-optional"},"Deploy InLong TubeMQ Server (Optional)"),(0,a.kt)("p",null,"If you use Apache Pulsar, you don\u2019t need to install this component."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/modules/tubemq/quick_start"},"deploy InLong TubeMQ Server")),(0,a.kt)("h2",{id:"deploy-inlong-tubemq-manager-optional"},"Deploy InLong TubeMQ Manager (Optional)"),(0,a.kt)("p",null,"If you use Apache Pulsar, you don\u2019t need to install this component."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/modules/tubemq/tubemq-manager/quick_start"},"deploy InLong TubeMQ Manager")),(0,a.kt)("h2",{id:"deploy-inlong-manager"},"Deploy InLong Manager"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/modules/manager/quick_start"},"deploy InLong Manager")),(0,a.kt)("h2",{id:"deploy-inlong-website"},"Deploy InLong WebSite"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/modules/website/quick_start"},"deploy InLong WebSite")),(0,a.kt)("h2",{id:"deploy-inlong-sort"},"Deploy InLong Sort"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/modules/sort/quick_start"},"deploy InLong Sort")),(0,a.kt)("h2",{id:"deploy-inlong-dataproxy"},"Deploy InLong DataProxy"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/modules/dataproxy/quick_start"},"deploy InLong DataProxy")),(0,a.kt)("h2",{id:"deploy-inlong-agent"},"Deploy InLong Agent"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/modules/agent/quick_start"},"deploy InLong Agent")),(0,a.kt)("h2",{id:"business-configuration"},"Business configuration"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/user_guide/user_manual"},"How to configure a new business")),(0,a.kt)("h2",{id:"data-report-verification"},"Data report verification"),(0,a.kt)("p",null,"At this stage, you can collect data through the file agent and verify whether the received data is consistent with the sent data in the specified Hive table."))}d.isMDXComponent=!0}}]);