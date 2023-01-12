"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[37876],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},g=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),s=p(t),d=o,f=s["".concat(c,".").concat(d)]||s[d]||u[d]||a;return t?r.createElement(f,l(l({ref:n},g),{},{components:t})):r.createElement(f,l({ref:n},g))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},32505:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={title:"\u6587\u4ef6",sidebar_position:3},l=void 0,i={unversionedId:"modules/agent/file",id:"version-0.12.0/modules/agent/file",title:"\u6587\u4ef6",description:"\u6587\u4ef6Agent\u914d\u7f6e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.12.0/modules/agent/file.md",sourceDirName:"modules/agent",slug:"/modules/agent/file",permalink:"/zh-CN/docs/0.12.0/modules/agent/file",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.12.0/modules/agent/file.md",tags:[],version:"0.12.0",sidebarPosition:3,frontMatter:{title:"\u6587\u4ef6",sidebar_position:3},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/0.12.0/modules/agent/quick_start"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/0.12.0/modules/dataproxy/overview"}},c={},p=[{value:"\u6587\u4ef6Agent\u914d\u7f6e",id:"\u6587\u4ef6agent\u914d\u7f6e",level:2},{value:"\u4ece\u6587\u4ef6\u540d\u79f0\u4e2d\u83b7\u53d6\u6570\u636e\u65f6\u95f4",id:"\u4ece\u6587\u4ef6\u540d\u79f0\u4e2d\u83b7\u53d6\u6570\u636e\u65f6\u95f4",level:2},{value:"\u65f6\u95f4\u504f\u79fb\u91cfoffset\u8bfb\u53d6",id:"\u65f6\u95f4\u504f\u79fb\u91cfoffset\u8bfb\u53d6",level:2}],g={toc:p};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6587\u4ef6agent\u914d\u7f6e"},"\u6587\u4ef6Agent\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'/data/inlong-agent/test.log  //\u4ee3\u8868\u8bfb\u53d6inlong-agent\u6587\u4ef6\u5939\u4e0b\u7684\u7684\u65b0\u589e\u6587\u4ef6test.log\n/data/inlong-agent/test[0-9]{1} //\u4ee3\u8868\u8bfb\u53d6inlong-agent\u6587\u4ef6\u5939\u4e0b\u7684\u65b0\u589e\u6587\u4ef6test\u540e\u63a5\u4e00\u4e2a\u6570\u5b57\u7ed3\u5c3e\n/data/inlong-agent/test //\u5982\u679ctest\u4e3a\u76ee\u5f55\uff0c\u5219\u4ee3\u8868\u8bfb\u53d6test\u4e0b\u7684\u6240\u6709\u65b0\u589e\u6587\u4ef6\n/data/inlong-agent/^\\\\d+(\\\\.\\\\d+)? // \u4ee5\u4e00\u4e2a\u6216\u591a\u4e2a\u6570\u5b57\u5f00\u5934,\u4e4b\u540e\u53ef\u4ee5\u662f.\u6216\u8005\u4e00\u4e2a.\u6216\u591a\u4e2a\u6570\u5b57\u7ed3\u5c3e\uff0c?\u4ee3\u8868\u53ef\u9009,\u53ef\u4ee5\u5339\u914d\u7684\u5b9e\u4f8b\uff1a"5", "1.5" \u548c "2.21"\n')),(0,o.kt)("h2",{id:"\u4ece\u6587\u4ef6\u540d\u79f0\u4e2d\u83b7\u53d6\u6570\u636e\u65f6\u95f4"},"\u4ece\u6587\u4ef6\u540d\u79f0\u4e2d\u83b7\u53d6\u6570\u636e\u65f6\u95f4"),(0,o.kt)("p",null,"Agent\u652f\u6301\u4ece\u6587\u4ef6\u540d\u79f0\u4e2d\u83b7\u53d6\u65f6\u95f4\u5f53\u4f5c\u6570\u636e\u7684\u751f\u4ea7\u65f6\u95f4\uff0c\u914d\u7f6e\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/data/inlong-agent/***YYYYMMDDHH***\n")),(0,o.kt)("p",null,"\u5176\u4e2dYYYYDDMMHH\u4ee3\u8868\u6570\u636e\u65f6\u95f4\uff0cYYYY\u8868\u793a\u5e74\uff0cMM\u8868\u793a\u6708\u4efd\uff0cDD\u8868\u793a\u5929\uff0cHH\u8868\u793a\u5c0f\u65f6\n\u5176\u4e2d***\u4e3a\u4efb\u610f\u5b57\u7b26"),(0,o.kt)("p",null,"\u540c\u65f6\u9700\u8981\u5728job conf\u4e2d\u52a0\u5165\u5f53\u524d\u6570\u636e\u7684\u5468\u671f\uff0c\u5f53\u524d\u652f\u6301\u5929\u5468\u671f\u4ee5\u53ca\u5c0f\u65f6\u5468\u671f\uff0c\n\u5728\u6dfb\u52a0\u4efb\u52a1\u65f6\uff0c\u52a0\u5165\u5c5e\u6027job.cycleUnit"),(0,o.kt)("p",null,"job.cycleUnit \u5305\u542b\u5982\u4e0b\u4e24\u79cd\u7c7b\u578b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"D : \u4ee3\u8868\u6570\u636e\u65f6\u95f4\u5929\u7ef4\u5ea6"),(0,o.kt)("li",{parentName:"ul"},"H : \u4ee3\u8868\u6570\u636e\u65f6\u95f4\u5c0f\u65f6\u7ef4\u5ea6")),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a\n\u914d\u7f6e\u6570\u636e\u6e90\u4e3a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/data/inlong-agent/2021020211.log\n")),(0,o.kt)("p",null,"\u5199\u5165\u6570\u636e\u5230 2021020211.log\n\u914d\u7f6e job.cycleUnit \u4e3a D\n\u5219agent\u4f1a\u57282021020211\u65f6\u95f4\u5c1d\u8bd52021020211.log\u6587\u4ef6\uff0c\u8bfb\u53d6\u6587\u4ef6\u4e2d\u7684\u6570\u636e\u65f6\uff0c\u4f1a\u5c06\u6240\u6709\u6570\u636e\u4ee520210202\u8fd9\u4e2a\u65f6\u95f4\u5199\u5165\u5230\u540e\u7aefproxy\n\u5982\u679c\u914d\u7f6e job.cycleUnit \u4e3a H\n\u5219\u91c7\u96c62021020211.log\u6587\u4ef6\u4e2d\u7684\u6570\u636e\u65f6\uff0c\u4f1a\u5c06\u6240\u6709\u6570\u636e\u4ee52021020211\u8fd9\u4e2a\u65f6\u95f4\u5199\u5165\u5230\u540e\u7aefproxy\u3002"),(0,o.kt)("p",null,"\u63d0\u4ea4job\u4e3e\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'http://localhost:8008/config/job\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n"job": {\n"dir": {\n"path": "",\n"pattern": "/data/inlong-agent/2021020211.log"\n},\n"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",\n"id": 1,\n"thread": {\n"running": {\n"core": "4"\n}\n},\n"name": "fileAgentTest",\n"cycleUnit": "D",\n"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n},\n"proxy": {\n"inlongGroupId": "groupId",\n"inlongStreamId": "streamId"\n},\n"op": "add"\n}\'\n')),(0,o.kt)("h2",{id:"\u65f6\u95f4\u504f\u79fb\u91cfoffset\u8bfb\u53d6"},"\u65f6\u95f4\u504f\u79fb\u91cfoffset\u8bfb\u53d6"),(0,o.kt)("p",null,"\u5728\u914d\u7f6e\u6309\u7167\u65f6\u95f4\u8bfb\u53d6\u4e4b\u540e\uff0c\u5982\u679c\u60f3\u8981\u8bfb\u53d6\u5f53\u524d\u65f6\u95f4\u4e4b\u5916\u7684\u5176\u4ed6\u65f6\u95f4\u7684\u6570\u636e\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u65f6\u95f4\u504f\u79fb\u91cf\u5b8c\u6210\n\u914d\u7f6ejob\u5c5e\u6027\u540d\u79f0\u4e3ajob.timeOffset\uff0c\u503c\u4e3a\u6570\u5b57 + \u65f6\u95f4\u7ef4\u5ea6\uff0c\u65f6\u95f4\u7ef4\u5ea6\u5305\u62ec\u5929\u548c\u5c0f\u65f6\n\u4f8b\u5982\u652f\u6301\u5982\u4e0b\u8bbe\u7f6e:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1d \u8bfb\u53d6\u5f53\u524d\u65f6\u95f4\u540e\u4e00\u5929\u7684\u6570\u636e "),(0,o.kt)("li",{parentName:"ul"},"-1h \u8bfb\u53d6\u5f53\u524d\u65f6\u95f4\u524d\u4e00\u4e2a\u5c0f\u65f6\u7684\u6570\u636e")),(0,o.kt)("p",null,"\u63d0\u4ea4job\u4e3e\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'http://localhost:8008/config/job\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n"job": {\n"dir": {\n"path": "",\n"pattern": "/data/inlong-agent/test.log"\n},\n"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",\n"id": 1,\n"thread": {\n"running": {\n"core": "4"\n}\n},\n"name": "fileAgentTest",\n"cycleUnit": "D",\n"timeOffset": "-1d",\n"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n},\n"proxy": {\n"inlongGroupId": "groupId",\n"inlongStreamId": "streamId"\n},\n"op": "add"\n}\'\n')))}s.isMDXComponent=!0}}]);