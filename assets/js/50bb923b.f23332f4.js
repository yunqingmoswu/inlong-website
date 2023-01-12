"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[64272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Overview",sidebar_position:1},i=void 0,l={unversionedId:"modules/dashboard/overview",id:"version-1.1.0/modules/dashboard/overview",title:"Overview",description:"This is a dashboard console for us to use the Apache InLong.",source:"@site/versioned_docs/version-1.1.0/modules/dashboard/overview.md",sourceDirName:"modules/dashboard",slug:"/modules/dashboard/overview",permalink:"/docs/1.1.0/modules/dashboard/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/modules/dashboard/overview.md",tags:[],version:"1.1.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/1.1.0/modules/manager/quick_start"},next:{title:"Deployment",permalink:"/docs/1.1.0/modules/dashboard/quick_start"}},s={},p=[{value:"Guide For Developer",id:"guide-for-developer",level:2},{value:"Test",id:"test",level:3},{value:"Build",id:"build",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is a dashboard console for us to use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong"},"Apache InLong"),"."),(0,o.kt)("h2",{id:"guide-for-developer"},"Guide For Developer"),(0,o.kt)("p",null,"You should check that ",(0,o.kt)("inlineCode",{parentName:"p"},"nodejs >= 12.0")," is installed."),(0,o.kt)("p",null,"In the project, you can run some built-in commands:"),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," is not installed, you should first run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install"),"."),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn dev")," to run the application in development mode."),(0,o.kt)("p",null,"If the server runs successfully, the browser will open ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")," to view in the browser."),(0,o.kt)("p",null,"If you edit, the page will reload.\nYou will also see any lint errors in the console."),(0,o.kt)("p",null,"The start of the web server depends on the back-end server ",(0,o.kt)("inlineCode",{parentName:"p"},"manger api")," interface."),(0,o.kt)("p",null,"You should start the backend server first, and then set the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"/inlong-dashboard/src/setupProxy.js")," to the address of the api service."),(0,o.kt)("h3",{id:"test"},"Test"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm test")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn test")),(0,o.kt)("p",null,"Start the test runner in interactive observation mode.\nFor more information, see the section on ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/running-tests/"},"Running Tests"),"."),(0,o.kt)("h3",{id:"build"},"Build"),(0,o.kt)("p",null,"First, make sure that the project has run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install")," to install ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run build")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn build"),"."),(0,o.kt)("p",null,"Build the application for production into the build folder.\nBetter page performance can be obtained in the constructed production mode."),(0,o.kt)("p",null,"After the build, the code is compressed, and the file name includes the hash value.\nYour application is ready to be deployed!"),(0,o.kt)("p",null,"For details, see the section on ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/deployment/"},"deployment"),"."))}u.isMDXComponent=!0}}]);