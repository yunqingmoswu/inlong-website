"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1272],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=l(a),m=s,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,o=new Array(i);o[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6340:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=a(7462),s=a(3366),i=(a(7294),a(3905)),o=["components"],r={title:"User Manual",sidebar_position:2},c="1. User login",l={unversionedId:"user_guide/user_manual",id:"user_guide/user_manual",isDocsHomePage:!1,title:"User Manual",description:"Requires the user to enter the account name and password of the system.",source:"@site/docs/user_guide/user_manual.md",sourceDirName:"user_guide",slug:"/user_guide/user_manual",permalink:"/docs/user_guide/user_manual",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/user_guide/user_manual.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"User Manual",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/docs/user_guide/quick_start"},next:{title:"Hive Example",permalink:"/docs/user_guide/example"}},u=[{value:"2.1 Business Information",id:"21-business-information",children:[{value:"2.1.1 Business Information",id:"211-business-information",children:[]},{value:"2.1.2 Access requirements",id:"212-access-requirements",children:[]},{value:"2.1.3 Access scale",id:"213-access-scale",children:[]}]},{value:"2.2 Data stream",id:"22-data-stream",children:[{value:"2.2.1 Basic information",id:"221-basic-information",children:[]},{value:"2.2.2 Data source",id:"222-data-source",children:[]},{value:"2.2.3 Data Information",id:"223-data-information",children:[]},{value:"2.2.4 Data storage",id:"224-data-storage",children:[]}]},{value:"3.1 Execution log",id:"31-execution-log",children:[]},{value:"3.2 Task details",id:"32-task-details",children:[{value:"3.2.1 Business Information",id:"321-business-information",children:[]},{value:"3.2.2 Data stream",id:"322-data-stream",children:[]},{value:"3.2.3 Data Storage",id:"323-data-storage",children:[]}]},{value:"4.1 Consumer Information",id:"41-consumer-information",children:[]},{value:"5.1 My application",id:"51-my-application",children:[{value:"5.1.1 Data access details",id:"511-data-access-details",children:[]},{value:"5.1.2 Data consumption details",id:"512-data-consumption-details",children:[]}]},{value:"5.2 My approval",id:"52-my-approval",children:[{value:"5.2.1 Data Access Approval",id:"521-data-access-approval",children:[]},{value:"5.2.2 New data consumption approval",id:"522-new-data-consumption-approval",children:[]}]},{value:"6.1 New user",id:"61-new-user",children:[]},{value:"6.2 Delete user",id:"62-delete-user",children:[]},{value:"6.3 User Edit",id:"63-user-edit",children:[]},{value:"6.4 Change password",id:"64-change-password",children:[]}],d={toc:u};function p(e){var t=e.components,r=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1-user-login"},"1. User login"),(0,i.kt)("p",null,"Requires the user to enter the account name and password of the system."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6866).Z})),(0,i.kt)("h1",{id:"2-data-access"},"2. Data access"),(0,i.kt)("p",null,"The data access module displays a list of all tasks connected to the system within the current user authority, and can\nview, edit, update and delete the details of these tasks."),(0,i.kt)("p",null,"Click ","[Data Access]",", there are two steps to fill in data access information: business information, data stream."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1039).Z})),(0,i.kt)("h2",{id:"21-business-information"},"2.1 Business Information"),(0,i.kt)("h3",{id:"211-business-information"},"2.1.1 Business Information"),(0,i.kt)("p",null,"You are required to fill in basic business information for access tasks."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4807).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Business English ID: Unified lowercase English name, please try to include the product name and concise\nspecifications, such as pay_base"),(0,i.kt)("li",{parentName:"ul"},"Business Chinese name: Chinese description of the business, easy to use and retrieve, up to 128 characters"),(0,i.kt)("li",{parentName:"ul"},"Business responsible person: at least 2 people, the business responsible person can view and modify business\ninformation, add and modify all access configuration items"),(0,i.kt)("li",{parentName:"ul"},"Business introduction: Cut SMS to introduce the business background and application of this access task:")),(0,i.kt)("h3",{id:"212-access-requirements"},"2.1.2 Access requirements"),(0,i.kt)("p",null,"Access requirements require users to choose message middleware: high throughput (TUBE):"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2870).Z})),(0,i.kt)("p",null,"High-throughput-Tube: high-throughput message transmission component, suitable for log message transmission."),(0,i.kt)("h3",{id:"213-access-scale"},"2.1.3 Access scale"),(0,i.kt)("p",null,"The scale of access requires users to judge the scale of access data in advance, to allocate computing and storage\nresources later."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3744).Z})),(0,i.kt)("h2",{id:"22-data-stream"},"2.2 Data stream"),(0,i.kt)("p",null,"Click ","[Next]"," to enter the data flow information filling step. There are four modules for data flow information filling:\nbasic information, data source, data information, and data stream."),(0,i.kt)("p",null,"In the data flow process, you can click ","[New Data Stream]"," to create a new data stream page:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1509).Z})),(0,i.kt)("h3",{id:"221-basic-information"},"2.2.1 Basic information"),(0,i.kt)("p",null,"You are required to fill in the basic information of the data stream in the access task:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(103).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data stream ID: The prefix is automatically generated according to the product/project, the unique identifier of the\ndata in the business, the unique identifier defined by a certain business, the data stream ID in the data source, and\nthe entry in the Hive information table The data stream ID is the same"),(0,i.kt)("li",{parentName:"ul"},"Data stream name: interface information description, the length is limited to varchar (64), 32 Chinese"),(0,i.kt)("li",{parentName:"ul"},"Data stream owner: The data stream owner can view and modify data stream information, add and modify all access\nconfiguration items"),(0,i.kt)("li",{parentName:"ul"},"Introduction to data flow: simple text introduction to data flow")),(0,i.kt)("h3",{id:"222-data-source"},"2.2.2 Data source"),(0,i.kt)("p",null,"You are required to select the source of the data stream."),(0,i.kt)("p",null,"Currently, three methods of file and independent push are supported, and the detailed information of the data source can\nbe supplemented in the advanced options."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"File: The business data is in the file, and the business machine deploys InLong Agent, which is read according to\ncustomized policy rules"),(0,i.kt)("li",{parentName:"ul"},"Autonomous push: Push data to the messaging middleware through the SDK")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7433).Z})),(0,i.kt)("h3",{id:"223-data-information"},"2.2.3 Data Information"),(0,i.kt)("p",null,"You are required to fill in the data-related information in the data stream."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(728).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data Format"),(0,i.kt)("li",{parentName:"ul"},"Data encoding: If the data source contains Chinese, you need choose UTF-8 or GBK, otherwise the encoding format is\nincorrect and garbled characters after storage"),(0,i.kt)("li",{parentName:"ul"},"Source field separator: the format of data sent to MQ"),(0,i.kt)("li",{parentName:"ul"},"Source data field: attributes with different meanings divided by a certain format in MQ")),(0,i.kt)("h3",{id:"224-data-storage"},"2.2.4 Data storage"),(0,i.kt)("p",null,"You are required to select the final flow direction of this task, this part is not currently supports both hive storage\nand autonomous push."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7556).Z})),(0,i.kt)("p",null,"Add HIVE storage:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8993).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Target database: hive database name (prepared to create in advance)"),(0,i.kt)("li",{parentName:"ul"},"Target table: hive table name"),(0,i.kt)("li",{parentName:"ul"},"First-level partition: the field name of the first-level subdirectory of hdfs data divided by hive data"),(0,i.kt)("li",{parentName:"ul"},"Secondary partition: the field name of the first-level subdirectory of hdfs data divided by hive data"),(0,i.kt)("li",{parentName:"ul"},"Username: hive server connection account name"),(0,i.kt)("li",{parentName:"ul"},"User password: hive server connection account password"),(0,i.kt)("li",{parentName:"ul"},"HDFS url: Hive bottom HDFS connection"),(0,i.kt)("li",{parentName:"ul"},"JDBC url: jdbc url of hive server"),(0,i.kt)("li",{parentName:"ul"},"Field related information: source field name, source field type, HIVE field name, HIVE field type, field description,\nand support deletion and addition-")),(0,i.kt)("h1",{id:"3-access-details"},"3. Access details"),(0,i.kt)("h2",{id:"31-execution-log"},"3.1 Execution log"),(0,i.kt)("p",null,'When the status of the data access task is "approved successfully" or "configuration failed", the "execution log"\nfunction can be used to allow users to view the progress and details of the task.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8607).Z})),(0,i.kt)("p",null,"Click ","[Execution Log]"," to display the details of the task execution log in a pop-up window."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4293).Z})),(0,i.kt)("p",null,'The execution log will display the task type, execution result, execution log content, end time, and the end time of the\nexecution of the access process. If the execution fails, you can "restart" the task and execute it again.'),(0,i.kt)("h2",{id:"32-task-details"},"3.2 Task details"),(0,i.kt)("p",null,"The business person in charge/following person can view the access details of the task, and can modify and update part\nof the information under the status of ","[Waiting Applying]",", ","[Configuration Successful]",", and ","[Configuration Failed]","."),(0,i.kt)("p",null,"There are three modules in the access task details: business information, data stream and data storage."),(0,i.kt)("h3",{id:"321-business-information"},"3.2.1 Business Information"),(0,i.kt)("p",null,"Display the basic business information in the access task, click ","[Edit]"," to modify part of the content"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5181).Z})),(0,i.kt)("h3",{id:"322-data-stream"},"3.2.2 Data stream"),(0,i.kt)("p",null,"Display the basic information of the data flow under the access task, click ","[New Data Flow]"," to create a new data flow\ninformation"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9908).Z})),(0,i.kt)("h3",{id:"323-data-storage"},"3.2.3 Data Storage"),(0,i.kt)("p",null,"Display the basic information of the data flow in the access task, select different flow types through the drop-down\nbox, and click ","[New Flow Configuration]"," to create a new data storage."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6203).Z})),(0,i.kt)("h1",{id:"4-data-consumption"},"4. Data consumption"),(0,i.kt)("p",null,"Data consumption currently does not support direct consumption access to data, and data can be consumed normally after\nthe approval process."),(0,i.kt)("p",null,"Click ","[New Consumption]"," to enter the data consumption process, and you need to fill in information related to\nconsumption."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7657).Z})),(0,i.kt)("h2",{id:"41-consumer-information"},"4.1 Consumer Information"),(0,i.kt)("p",null,"Applicants need to gradually fill in the basic consumer business information related to data consumption applications in\nthe information filling module"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8822).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Consumer group name: The prefix is automatically generated according to the product/project. The brief name of the\nconsumer must be composed of lowercase letters, numbers, and underscores. The final approval will assign the consumer\nname based on the abbreviation splicing"),(0,i.kt)("li",{parentName:"ul"},"Consumer Responsible Person: At least 2 persons are required to choose the responsible person; the responsible person\ncan view and modify the consumption information"),(0,i.kt)("li",{parentName:"ul"},"Consumer target business ID: you need to select the business ID of the consumer data, you can click ","[Query]"," and select\nthe appropriate business ID in the pop-up window\n",(0,i.kt)("img",{src:a(2008).Z})),(0,i.kt)("li",{parentName:"ul"},"Data usage: select data usage usage"),(0,i.kt)("li",{parentName:"ul"},"Data usage description: The applicant needs to briefly explain the items used and the purpose of the data according to\ntheir own consumption scenarios After completing the information, click ","[Submit]",", and the data consumption process\nwill be formally submitted to the approver before it will take effect.")),(0,i.kt)("h1",{id:"5-approval-management"},"5. Approval management"),(0,i.kt)("p",null,"The approval management function module currently includes my application and my approval, and all tasks of data access\nand consumption application approval in the management system."),(0,i.kt)("h2",{id:"51-my-application"},"5.1 My application"),(0,i.kt)("p",null,"Display the current task list submitted by the applicant for data access and consumption in the system, click ","[Details]","\nto view the current basic information and approval process of the task."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3480).Z})),(0,i.kt)("h3",{id:"511-data-access-details"},"5.1.1 Data access details"),(0,i.kt)("p",null,"Data access task detailed display The current basic information of the application task includes: applicant-related\ninformation, basic information about application access, and current approval process nodes."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3171).Z})),(0,i.kt)("h3",{id:"512-data-consumption-details"},"5.1.2 Data consumption details"),(0,i.kt)("p",null,"Data consumption task details display basic information of current application tasks including: applicant information,\nbasic consumption information, and current approval process nodes."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8916).Z})),(0,i.kt)("h2",{id:"52-my-approval"},"5.2 My approval"),(0,i.kt)("p",null,"As a data access officer and system member with approval authority, have the responsibility for data access or\nconsumption approval."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6829).Z})),(0,i.kt)("h3",{id:"521-data-access-approval"},"5.2.1 Data Access Approval"),(0,i.kt)("p",null,"New data access approval: currently it is a first-level approval, which is approved by the system administrator."),(0,i.kt)("p",null,"The system administrator will review whether the access process meets the access requirements based on the data access\nbusiness information."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5369).Z})),(0,i.kt)("h3",{id:"522-new-data-consumption-approval"},"5.2.2 New data consumption approval"),(0,i.kt)("p",null,"New data consume approval: currently it is a first-level approval, which is approved by the person in charge of the\nbusiness."),(0,i.kt)("p",null,"Business approval: The person in charge of the data access business judges whether the consumption meets the business\nrequirements according to the access information:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4929).Z})),(0,i.kt)("h1",{id:"6-system-management"},"6. System Management"),(0,i.kt)("p",null,"Only users with the role of system administrator can use this function. They can create, modify, and delete users:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3302).Z})),(0,i.kt)("h2",{id:"61-new-user"},"6.1 New user"),(0,i.kt)("p",null,"Users with system administrator rights can create new user accounts"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4690).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Account types: Ordinary users (with data access and data consumption permissions, but without data access approval and\naccount management permissions); system administrators (with data access and data consumption permissions, data access\napproval and account management permissions)"),(0,i.kt)("li",{parentName:"ul"},"username: username for login"),(0,i.kt)("li",{parentName:"ul"},"user password:\n-Effective duration: the account can be used in the system\n",(0,i.kt)("img",{src:a(6367).Z}))),(0,i.kt)("h2",{id:"62-delete-user"},"6.2 Delete user"),(0,i.kt)("p",null,"The system administrator can delete the account of the created user. After the deletion, the account will stop using:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4756).Z})),(0,i.kt)("h2",{id:"63-user-edit"},"6.3 User Edit"),(0,i.kt)("p",null,"The system administrator can modify the created account:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6846).Z})),(0,i.kt)("p",null,"The system administrator can modify the account type and effective duration to proceed:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7525).Z})),(0,i.kt)("h2",{id:"64-change-password"},"6.4 Change password"),(0,i.kt)("p",null,"The user can modify the account password, click ","[Modify Password]",", enter the old password and the new password, after\nconfirmation, the new password of this account will take effect:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6330).Z})))}p.isMDXComponent=!0},1039:function(e,t,a){t.Z=a.p+"assets/images/image-1624431177918-95ea081c82d148e01848987443a7793c.png"},4807:function(e,t,a){t.Z=a.p+"assets/images/image-1624431271642-7325ee6a704dae17a4d1b7baa6c55ce1.png"},2870:function(e,t,a){t.Z=a.p+"assets/images/image-1624431306077-fd91379e6cef0ef7fb0834b390d26081.png"},3744:function(e,t,a){t.Z=a.p+"assets/images/image-1624431333949-43ad52b3ffa3e01329822b38dde5d277.png"},1509:function(e,t,a){t.Z=a.p+"assets/images/image-1624431416449-d3d59918a7bd08f2deb481e5fd4cbd98.png"},103:function(e,t,a){t.Z=a.p+"assets/images/image-1624431435574-ed243ae88a9be5511b1c7511cf1d5e87.png"},7433:function(e,t,a){t.Z=a.p+"assets/images/image-1624431594406-df78435a37da265110e6f5dcc5ea3236.png"},728:function(e,t,a){t.Z=a.p+"assets/images/image-1624431617259-79c1f0881394a8e1e8fda58ff443e9a6.png"},7556:function(e,t,a){t.Z=a.p+"assets/images/image-1624431713360-73fcde085496fcff476e72ece79a3074.png"},8993:function(e,t,a){t.Z=a.p+"assets/images/image-1624431787323-5c358330aa9d98a28f887c6bc699d383.png"},8607:function(e,t,a){t.Z=a.p+"assets/images/image-1624432002615-5d1986e99c99a7c8410656ab2676f920.png"},4293:function(e,t,a){t.Z=a.p+"assets/images/image-1624432022859-896538dcdc53d0dd834d60dd5cec5ef1.png"},5181:function(e,t,a){t.Z=a.p+"assets/images/image-1624432076857-79e107534d47594e26e66a6e61aede7b.png"},9908:function(e,t,a){t.Z=a.p+"assets/images/image-1624432092795-4ffb5c6560a1b876ee985389f4674f46.png"},6203:function(e,t,a){t.Z=a.p+"assets/images/image-1624432114765-5a8af6d09d59ec308f3ef7f2063b13f9.png"},7657:function(e,t,a){t.Z=a.p+"assets/images/image-1624432235900-f71edf583b188793707e0f561ee3ba06.png"},8822:function(e,t,a){t.Z=a.p+"assets/images/image-1624432254118-33a6d97d973e2872e9e53d4cbebe8d3f.png"},2008:function(e,t,a){t.Z=a.p+"assets/images/image-1624432286674-9853d11f33318f394eea705d9cfcd140.png"},3480:function(e,t,a){t.Z=a.p+"assets/images/image-1624432445002-b6cd6262bbb9012f06a72091a5ec9298.png"},3171:function(e,t,a){t.Z=a.p+"assets/images/image-1624432458971-d9f910891c45e7ed95a005c276a3181e.png"},8916:function(e,t,a){t.Z=a.p+"assets/images/image-1624432474526-62d8f0211df39af00583e77669d84dcd.png"},6829:function(e,t,a){t.Z=a.p+"assets/images/image-1624432496461-8451c9c09d3a3fe90b1660ec1d94a22b.png"},5369:function(e,t,a){t.Z=a.p+"assets/images/image-1624432515850-29364ea956882287ca1b8bb48b5a1a17.png"},4929:function(e,t,a){t.Z=a.p+"assets/images/image-1624432535541-b2ca3753d7d7ce8b9f95739f7c69a6eb.png"},3302:function(e,t,a){t.Z=a.p+"assets/images/image-1624432652141-835dbf13a80b62324a1c20e6526b2404.png"},4690:function(e,t,a){t.Z=a.p+"assets/images/image-1624432668340-4bc249db829ea832b475565b480f1451.png"},6367:function(e,t,a){t.Z=a.p+"assets/images/image-1624432740241-902d6ac30fca2f18083d8ddecbd50180.png"},4756:function(e,t,a){t.Z=a.p+"assets/images/image-1624432759224-fe8616b872ae8c1426f1f47f46b5847a.png"},6846:function(e,t,a){t.Z=a.p+"assets/images/image-1624432778845-5913d51b7905a265aa0b40e98a80628e.png"},7525:function(e,t,a){t.Z=a.p+"assets/images/image-1624432797226-7e39cadb9746f2745b341a0313b1b39c.png"},6330:function(e,t,a){t.Z=a.p+"assets/images/image-1624432829313-74769de3ddbe89790bfbb54a8c6df399.png"},6866:function(e,t,a){t.Z=a.p+"assets/images/image-1624433272455-9859de21dc5c9fbf72c091610aa7a535.png"}}]);