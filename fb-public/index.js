(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,n){e.exports=n(218)},128:function(e,t,n){},133:function(e,t,n){},135:function(e,t,n){},206:function(e,t,n){},208:function(e,t,n){},210:function(e,t,n){},212:function(e,t,n){},214:function(e,t,n){},216:function(e,t,n){},218:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),c=n.n(o),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var u=n(28),d=n(8),l=n(50),m=n(21),p="TODO_ADD",f="TODO_COMPLETE",v="TODO_DELETE",j="TODO_UPDATE",h="TODO_ENABLE_EDIT",E="TODO_DISABLE_EDIT",b="TODO_DISABLE_EDIT_ALL",O="ADD_TODO_ENABLE_EDIT",y="ADD_TODO_DISABLE_EDIT",D="ADD_PROJECT",N={ADD_TODO:"ADD_TODO",TODO:"TODO"},T="READ",k="EDIT",w={id:null,title:"",completed:!1,dueDate:"",project:"",mode:T},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return e.map(function(e){return e.id===t.id?Object(m.a)({},e,{completed:!0}):e});case p:return Object(l.a)(e).concat([Object(m.a)({},w,{id:e.length,title:t.title,dueDate:t.dueDate,project:t.project||null})]);case j:return e.map(function(e){return e.id===t.id?Object(m.a)({},e,{title:t.title,dueDate:t.dueDate,project:t.project||null,mode:T}):e});case v:return e.filter(function(e){return e.id!==t.id});case h:return e.map(function(e){return e.id===t.id?Object(m.a)({},e,{mode:k}):Object(m.a)({},e,{mode:T})});case E:return e.map(function(e){return e.id===t.id?Object(m.a)({},e,{mode:T}):e});case b:return e.map(function(e){return Object(m.a)({},e,{mode:T})});default:return e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return t.id;case y:return null;default:return e}},x={name:"",subProjects:[]},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(l.a)(e).concat([Object(m.a)({},x,{name:t.name})]);default:return e}},A=Object(u.c)({todos:g,projects:M,todoFormId:P}),C=n(116),I=n.n(C),F=n(117),S=n(221),_=(n(128),function(){return r.a.createElement("header",{className:"topbar"},r.a.createElement("div",{className:"inner"},"TodoThis"))}),L=n(14),Y=n(15),B=n(17),W=n(16),U=n(18),R=n(219),J=n(222),K=n(2),z=n(29),Q=n(42),X=n(65),$=n(10),q=n.n($),G=n(23),H=(n(133),function(e){function t(){var e,n;Object(L.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(B.a)(this,(e=Object(W.a)(t)).call.apply(e,[this].concat(r)))).state={name:""},n.addProject=function(){""!==n.state.name.trim()&&(n.props.addProject(n.state.name.trim()),n.props.cancel())},n}return Object(U.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e=this;return this.props.isOpen&&r.a.createElement("div",{className:"project-form-container"},r.a.createElement("div",{className:"project-form-input"},r.a.createElement("input",{type:"text",autoFocus:!0,placeholder:"Name your project",value:this.state.name,onKeyPress:function(t){"Enter"===t.key&&e.addProject()},onChange:function(t){return e.setState({name:t.target.value})}})),r.a.createElement("div",{className:"project-form-actions"},r.a.createElement("div",{onClick:this.addProject,className:"project-form-save"},"Add Project"),r.a.createElement("div",{onClick:this.props.cancel,className:"project-form-cancel"},"Cancel")))}}]),t}(a.Component)),V=Object(d.b)(function(e){return{}},function(e){return{addProject:function(t){return e(function(e){return t=Object(G.a)(q.a.mark(function t(n){return q.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:D,name:e});case 1:case"end":return t.stop()}},t,this)})),function(e){return t.apply(this,arguments)};var t}(t))}}})(H),Z=(n(135),function(e){function t(){var e,n;Object(L.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(B.a)(this,(e=Object(W.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1,isProjectFormOpen:!1},n.toggleProjects=function(){n.setState(function(e){return{isOpen:!e.isOpen}})},n.openProjectForm=function(){n.setState({isProjectFormOpen:!0})},n}return Object(U.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.projects,a=t.todos,o=t.location,c=this.state,i=c.isOpen,s=c.isProjectFormOpen,u=o.pathname,d=K().format("DD");return r.a.createElement("div",{className:"sidebar"},r.a.createElement(R.a,{className:"nav-link ".concat("/inbox"===u&&"active"),to:"/inbox"},r.a.createElement(z.a,{className:"nav-link-icon",icon:Q.b}),"Inbox",r.a.createElement("span",{className:"counter"},a.filter(function(e){return!e.project}).length||"")),r.a.createElement(R.a,{className:"nav-link ".concat("/today"===u&&"active"),to:"/today"},r.a.createElement(z.a,{className:"nav-link-icon today",icon:X.a}),r.a.createElement("span",{className:"today-text"},d),"Today",r.a.createElement("span",{className:"counter"},a.filter(function(e){return K().isSame(e.dueDate,"day")}).length||"")),r.a.createElement(R.a,{className:"nav-link ".concat("/week"===u&&"active"),to:"/week"},r.a.createElement(z.a,{className:"nav-link-icon",icon:X.b}),"Next 7 Days",r.a.createElement("span",{className:"counter"},a.filter(function(e){return K(e.dueDate).isBefore(K().add(7,"days"),"day")}).length||"")),r.a.createElement("div",{onClick:this.toggleProjects,className:"nav-link projects"},r.a.createElement(z.a,{style:{transform:i?"rotate(90deg)":"rotate(0deg)"},className:"nav-link-icon projects",icon:Q.a}),"Projects"),r.a.createElement("div",{style:{height:i?"".concat(40*n.length+80,"px"):"0px"},className:"project-lists-container"},n.map(function(e){return r.a.createElement(R.a,{key:e.name,className:"nav-link  projects-list-item ".concat(u==="/projects/".concat(e.name)&&"active"),to:"/projects/".concat(e.name)},e.name,r.a.createElement("span",{className:"counter"},a.filter(function(t){return t.project===e.name}).length||""))}),s&&r.a.createElement(V,{isOpen:s,cancel:function(){return e.setState({isProjectFormOpen:!1})}})||r.a.createElement("div",{onClick:function(){return e.setState({isProjectFormOpen:!0})},className:"add-todo-button-container"},r.a.createElement("div",{className:"add-todo-button-plus"},"+"),r.a.createElement("div",{className:"add-todo-button-text"},"Add Project"))))}}]),t}(a.Component)),ee=Object(J.a)(Object(d.b)(function(e){return{projects:e.projects,todos:e.todos}})(Z)),te=n(220),ne=function(e){var t=e.type,n=e.id;return function(){var e=Object(G.a)(q.a.mark(function e(a){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next=e.t0===N.TODO?3:e.t0===N.ADD_TODO?5:7;break;case 3:return a({type:y}),e.abrupt("return",a({type:h,id:n}));case 5:return a({type:b}),e.abrupt("return",a({type:O,id:n}));case 7:return e.abrupt("return");case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},ae=function(e){var t=e.type,n=e.id;return function(){var e=Object(G.a)(q.a.mark(function e(a){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next=e.t0===N.TODO?3:e.t0===N.ADD_TODO?4:5;break;case 3:return e.abrupt("return",a({type:E,id:n}));case 4:return e.abrupt("return",a({type:y}));case 5:return e.abrupt("return");case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},re=(n(138),n(162),n(119)),oe=(n(206),function(e){function t(){var e,n;Object(L.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(B.a)(this,(e=Object(W.a)(t)).call.apply(e,[this].concat(r)))).state={title:n.props.title||"",dueDate:K(n.props.dueDate)||null,project:n.props.project||"",focused:!1,isProjectListOpen:!1},n.addTodo=function(){n.props.addTodo(n.state.title.trim(),n.state.dueDate,n.state.project),n.clearTitle()},n.updateTodo=function(){n.props.updateTodo(n.state.title.trim(),n.state.dueDate,n.state.project)},n.handleSubmit=function(){n.props.view&&"UPDATE"===n.props.view?n.updateTodo():n.addTodo()},n.clearTitle=function(){return n.setState({title:""})},n}return Object(U.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.view,a=t.disableEditMode,o=t.projects;return r.a.createElement("div",{className:"todo-form-container"},r.a.createElement("div",{className:"todo-form-input"},r.a.createElement("div",{className:"title"},r.a.createElement("input",{type:"text",autoFocus:!0,value:this.state.title,onKeyPress:function(t){"Enter"===t.key&&e.handleSubmit()},onChange:function(t){return e.setState({title:t.target.value})}}),this.state.isProjectListOpen&&r.a.createElement("div",{className:"todo-form-project-list"},o.map(function(t){return r.a.createElement("div",{key:t.name,className:"todo-form-project-item",onClick:function(){return e.setState({project:t.name,isProjectListOpen:!1})}},t.name)}))),r.a.createElement(re.SingleDatePicker,{date:this.state.dueDate,onDateChange:function(t){return e.setState({dueDate:t})},focused:this.state.focused,onFocusChange:function(t){var n=t.focused;return e.setState({focused:n})},id:"schedule",numberOfMonths:1,small:!0,hideKeyboardShortcutsPanel:!0,displayFormat:"MMM DD",orientation:"horizontal",anchorDirection:"left",daySize:30,isOutsideRange:function(){return!1}})),r.a.createElement("div",{className:"todo-form-actions"},r.a.createElement("div",{onClick:this.handleSubmit,className:"todo-form-save"},n&&"UPDATE"===n?"Save":"Add Task"),r.a.createElement("div",{onClick:a,className:"todo-form-cancel"},"Cancel"),r.a.createElement(z.a,{onClick:function(){return e.setState(function(e){return{isProjectListOpen:!e.isProjectListOpen}})},className:"todo-form-projects-button",icon:Q.c})))}}]),t}(a.Component)),ce=Object(d.b)(function(e){return{projects:e.projects}})(oe),ie=(n(208),function(e){function t(){var e,n;Object(L.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(B.a)(this,(e=Object(W.a)(t)).call.apply(e,[this].concat(r)))).updateTodo=function(e,t,a){n.props.updateTodo(n.props.todo.id,e.trim(),t,a)},n}return Object(U.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todo,n=e.completeTodo,a=e.deleteTodo,o=e.enableEditMode,c=e.disableEditMode;switch(t.mode){case k:return r.a.createElement(ce,{view:"UPDATE",title:t.title,dueDate:t.dueDate,project:t.project,updateTodo:this.updateTodo,disableEditMode:function(){return c({type:N.TODO,id:t.id})}});default:return r.a.createElement("div",{className:"todo-read-container"},r.a.createElement("div",{className:"todo-complete-btn-container"},r.a.createElement("div",{onClick:function(){return n(t.id)},className:"todo-complete-btn"})),r.a.createElement("div",{onClick:function(){return o({type:N.TODO,id:t.id})},className:"todo-title"},t.title),r.a.createElement(R.a,{to:t.project&&"/projects/".concat(t.project)||"/inbox",className:"todo-assigned-project"},t.project&&t.project||"Inbox"),r.a.createElement("div",{className:"todo-delete-container",onClick:function(){return a(t.id)}},r.a.createElement("div",{className:"todo-delete-btn"},"X")))}}}]),t}(a.Component)),se=Object(d.b)(function(){return{}},function(e){return{completeTodo:function(t){return e(function(e){return t=Object(G.a)(q.a.mark(function t(n){return q.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:f,id:e});case 1:case"end":return t.stop()}},t,this)})),function(e){return t.apply(this,arguments)};var t}(t))},updateTodo:function(t,n,a,r){return e(function(e,t,n,a){return r=Object(G.a)(q.a.mark(function r(o){return q.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=2;break}return r.abrupt("return",o({type:E,id:e}));case 2:o({type:j,id:e,title:t,dueDate:n,project:a});case 3:case"end":return r.stop()}},r,this)})),function(e){return r.apply(this,arguments)};var r}(t,n,a,r))},deleteTodo:function(t){return e(function(e){return t=Object(G.a)(q.a.mark(function t(n){return q.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:v,id:e});case 1:case"end":return t.stop()}},t,this)})),function(e){return t.apply(this,arguments)};var t}(t))},enableEditMode:function(t){var n=t.type,a=t.id;return e(ne({type:n,id:a}))},disableEditMode:function(t){var n=t.type,a=t.id;return e(ae({type:n,id:a}))}}})(ie),ue=(n(210),function(e){var t=e.enableEditMode;return r.a.createElement("div",{onClick:t,className:"add-todo-button-container"},r.a.createElement("div",{className:"add-todo-button-plus"},"+"),r.a.createElement("div",{className:"add-todo-button-text"},"Add Task"))}),de=function(e){function t(){var e,n;Object(L.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(B.a)(this,(e=Object(W.a)(t)).call.apply(e,[this].concat(r)))).addTodo=function(e,t,a){n.props.addTodo(e.trim(),t,a)},n}return Object(U.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.project,n=e.dueDate,a=e.enableEditMode,o=e.disableEditMode;switch(e.mode){case T:return r.a.createElement(ue,{enableEditMode:function(){return a({type:N.ADD_TODO,id:n||t||"Inbox"})}});case k:return r.a.createElement(ce,{addTodo:this.addTodo,disableEditMode:function(){return o({type:N.ADD_TODO})},project:t,dueDate:n});default:return}}}]),t}(a.Component),le=Object(d.b)(function(){return{}},function(e){return{addTodo:function(t,n,a){return e(function(e,t,n){return a=Object(G.a)(q.a.mark(function a(r){return q.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return",r({type:y}));case 2:r({type:p,title:e,dueDate:t,project:n});case 3:case"end":return a.stop()}},a,this)})),function(e){return a.apply(this,arguments)};var a}(t,n,a))},enableEditMode:function(t){var n=t.type,a=t.id;return e(ne({type:n,id:a}))},disableEditMode:function(t){var n=t.type,a=t.id;return e(ae({type:n,id:a}))}}})(de),me=(n(212),Object(d.b)(function(e,t){return{todos:function(e,t,n){return n?e.todos.filter(function(e){return!e.completed&&K(e.dueDate,"YYYY-MM-DD").isBefore(K(),"day")}):e.todos.filter(function(e){return!e.completed&&K(e.dueDate,"YYYY-MM-DD").isSame(t,"day")})}(e,t.dueDate,t.overdue),todoFormId:e.todoFormId}})(function(e){var t=e.date,n=e.todos,a=e.todoFormId,o=t?K(t).calendar(null,{sameDay:"[Today]",nextDay:"[Tomorrow]",nextWeek:"dddd",lastDay:"[Overdue]",lastWeek:"[Overdue]",sameElse:"[Overdue]"}):"Overdue",c="Today"===o?K(t).format("ddd MMM D"):t?K(t).format("MMM D"):"",i=K(t).format("YYYY-MM-DD");return"Overdue"===o&&0===n.length?r.a.createElement("div",null):r.a.createElement("div",{className:"todo-list-container"},r.a.createElement("header",{className:"todo-list-header"},r.a.createElement("div",{className:"todo-list-title ".concat("Overdue"===o&&"overdue")},o),r.a.createElement("div",{className:"todo-list-date"},c)),r.a.createElement("div",{className:"todo-list-content"},n.map(function(e){return r.a.createElement(se,{key:e.id,todo:e})})),"Overdue"!==o&&r.a.createElement(le,{dueDate:i,mode:a===i?k:T})||r.a.createElement("div",{className:"todo-list-add-todo-placeholder"}))})),pe=function(){return r.a.createElement(a.Fragment,null,r.a.createElement("header",{className:"view-header"},"Today"),r.a.createElement(me,{date:K()}))},fe=function(){return r.a.createElement(a.Fragment,null,r.a.createElement("header",{className:"view-header week"},"Next 7 Days"),r.a.createElement(me,{overdue:!0}),[0,1,2,3,4,5,6].map(function(e){return r.a.createElement(me,{key:e,date:K().add(e,"days")})}))},ve=function(e){function t(){return Object(L.a)(this,t),Object(B.a)(this,Object(W.a)(t).apply(this,arguments))}return Object(U.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.todoFormId;return r.a.createElement("div",null,r.a.createElement("header",{className:"view-header"},"Inbox"),t.map(function(e){return r.a.createElement(se,{key:e.id,todo:e})}),r.a.createElement(le,{mode:"Inbox"===n?k:T}))}}]),t}(a.Component),je=Object(d.b)(function(e){return{todos:function(e){return e.todos.filter(function(e){return!e.project})}(e),todoFormId:e.todoFormId}},function(e){return{enableTodoEditMode:function(t){return e(ne(t))},disableTodoEditMode:function(t){return e(ae(t))}}})(ve),he=Object(d.b)(function(e,t){return{todos:function(e,t){return e.todos.filter(function(e){return!e.completed&&e.project===t})}(e,t.match.params.projectName),projectName:t.match.params.projectName||"Projects",projects:e.projects,todoFormId:e.todoFormId}})(function(e){var t=e.projectName,n=e.todos,o=e.projects,c=e.todoFormId;switch(t){case"Projects":return r.a.createElement(a.Fragment,null,o.map(function(e){return r.a.createElement("div",{key:e.name,className:"todo-list-container"},r.a.createElement("header",{className:"todo-list-header project"},e.name),n.filter(function(t){return t.project===e.name}).map(function(e){return r.a.createElement(se,{key:e.id,todo:e})}),r.a.createElement(le,{project:e.name,mode:c===e.name?k:T}))}));default:return r.a.createElement("div",{className:"todo-list-container"},r.a.createElement("header",{className:"todo-list-header project"},t),n.map(function(e){return r.a.createElement(se,{key:e.title,todo:e})}),r.a.createElement(le,{project:t,mode:c===t?k:T}))}}),Ee=(n(214),Object(J.a)(function(){return r.a.createElement("article",{className:"view-container"},r.a.createElement(te.a,{path:"/inbox",component:je}),r.a.createElement(te.a,{path:"/today",component:pe}),r.a.createElement(te.a,{path:"/week",component:fe}),r.a.createElement(te.a,{path:"/projects/:projectName?",component:he}))})),be=(n(216),function(){return r.a.createElement(a.Fragment,null,r.a.createElement(_,null),r.a.createElement("div",{className:"grid-container"},r.a.createElement(ee,null),r.a.createElement(Ee,null)))}),Oe=Object(u.a)(I.a,F.a),ye=Object(u.d)(A,{},Oe);c.a.render(r.a.createElement(S.a,null,r.a.createElement(d.a,{store:ye},r.a.createElement(be,null))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");i?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):s(e)})}}()}},[[120,2,1]]]);
//# sourceMappingURL=main.eee9fdfd.chunk.js.map