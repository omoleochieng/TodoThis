(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(62)},42:function(e,t,n){},45:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(28),c=n.n(r),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var u=n(14),l=n(4),s="TODO_ADD",p="TODO_COMPLETE",m="TODO_DELETE",f="TODO_UPDATE",E="TODO_ENABLE_EDIT",b="TODO_DISABLE_EDIT",v="TODO_DISABLE_EDIT_ALL",j="ADD_TODO_ENABLE_EDIT",O="ADD_TODO_DISABLE_EDIT",h="READ",D="EDIT",T=n(7),y=n(16),g=[{id:0,title:"Pay Bills - 1",completed:!1,dueDate:"2018-10-15",project:"Finances",mode:h},{id:1,title:"Pay Bills - 2",completed:!1,dueDate:"2018-10-16",project:"Finances",mode:h},{id:2,title:"Pay Bills - 3",completed:!1,dueDate:"2018-10-14",project:"Finances",mode:h},{id:3,title:"Attend HOA Meeting - 1",completed:!1,dueDate:"2018-10-18",project:"Admin",mode:h},{id:4,title:"Attend HOA Meeting - 2",completed:!1,dueDate:"2018-10-14",project:"Admin",mode:h},{id:5,title:"Attend HOA Meeting - 3",completed:!1,dueDate:"2018-10-15",project:"Admin",mode:h},{id:6,title:"Dental Exam",completed:!1,dueDate:"2018-10-15",project:"Guard",mode:h},{id:7,title:"Submit Timesheet",completed:!1,dueDate:"2018-10-14",project:"Google",mode:h},{id:8,title:"Attend Training",completed:!1,dueDate:"2018-10-17",project:null,mode:h}],N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return e.map(function(e){return e.id===t.id?Object(y.a)({},e,{completed:!0}):e});case s:return Object(T.a)(e).concat([{id:e.length,title:t.title,dueDate:t.dueDate,project:t.project||null}]);case f:return e.map(function(e){return e.id===t.id?Object(y.a)({},e,{title:t.title,dueDate:t.dueDate,project:t.project||null,mode:h}):e});case m:return e.filter(function(e){return e.id!==t.id});case E:return e.map(function(e){return e.id===t.id?Object(y.a)({},e,{mode:D}):Object(y.a)({},e,{mode:h})});case b:return e.map(function(e){return e.id===t.id?Object(y.a)({},e,{mode:h}):e});case v:return e.map(function(e){return Object(y.a)({},e,{mode:h})});default:return e}},w=[{name:"Work",subProjects:[{name:"Guard"},{name:"Google"}]},{name:"Personal",subProjects:[{name:"Admin"},{name:"Finances"}]}],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return(arguments.length>1?arguments[1]:void 0).type,e},M=Object(u.c)({todos:N,projects:k,addTodoId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.id;case O:return null;default:return e}}}),A=n(31),x=n.n(A),_=n(32),I=n(65),C=(n(42),function(){return o.a.createElement("header",{className:"topbar"},o.a.createElement("div",{className:"inner"},"TodoThis"))}),P=n(8),S=n(9),B=n(11),Y=n(10),L=n(12),F=n(63),W=n(66),U=n(3),G=n(17),H=n(25),J=n(26),R=(n(45),function(e){function t(){var e,n;Object(P.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(B.a)(this,(e=Object(Y.a)(t)).call.apply(e,[this].concat(o)))).state={isOpen:!1},n.toggleProjects=function(){n.setState(function(e){return{isOpen:!e.isOpen}})},n}return Object(L.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects,n=e.todos,a=e.location,r=this.state.isOpen,c=a.pathname,i=U().format("DD");return o.a.createElement("div",{className:"sidebar"},o.a.createElement(F.a,{className:"nav-link ".concat("/inbox"===c&&"active"),to:"/inbox"},o.a.createElement(G.a,{className:"nav-link-icon",icon:H.b}),"Inbox",o.a.createElement("span",{className:"counter"},n.filter(function(e){return!e.project}).length||"")),o.a.createElement(F.a,{className:"nav-link ".concat("/today"===c&&"active"),to:"/today"},o.a.createElement(G.a,{className:"nav-link-icon today",icon:J.a}),o.a.createElement("span",{className:"today-text"},i),"Today",o.a.createElement("span",{className:"counter"},n.filter(function(e){return U().isSame(e.dueDate,"day")}).length||"")),o.a.createElement(F.a,{className:"nav-link ".concat("/week"===c&&"active"),to:"/week"},o.a.createElement(G.a,{className:"nav-link-icon",icon:J.b}),"Next 7 Days",o.a.createElement("span",{className:"counter"},n.filter(function(e){return U(e.dueDate).isBefore(U().add(7,"days"),"day")}).length||"")),o.a.createElement("div",{onClick:this.toggleProjects,className:"nav-link projects"},o.a.createElement(G.a,{style:{transform:r?"rotate(90deg)":"rotate(0deg)"},className:"nav-link-icon projects",icon:H.a}),"Projects"),o.a.createElement("div",{style:{height:r?"".concat(40*t.length,"px"):"0px"},className:"project-lists-container"},t.map(function(e){return o.a.createElement(F.a,{key:e,className:"nav-link  projects-list-item ".concat(c==="/projects/".concat(e)&&"active"),to:"/projects/".concat(e)},e,o.a.createElement("span",{className:"counter"},n.filter(function(t){return t.project===e}).length||""))})))}}]),t}(a.Component)),Q=Object(W.a)(Object(l.b)(function(e){return{projects:e.projects.reduce(function(e,t){return Object(T.a)(e).concat([t.name],Object(T.a)(t.subProjects.map(function(e){return e.name})))},[]),todos:e.todos}})(R)),X=n(64),$=n(6),q=n.n($),z=n(15),K=function(e){var t=e.type,n=e.id;return function(){var e=Object(z.a)(q.a.mark(function e(a){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="TODO"===e.t0?3:"ADD_TODO"===e.t0?5:7;break;case 3:return a({type:O}),e.abrupt("return",a({type:E,id:n}));case 5:return a({type:v}),e.abrupt("return",a({type:j,id:n}));case 7:return e.abrupt("return");case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},V=function(e){var t=e.type,n=e.id;return function(){var e=Object(z.a)(q.a.mark(function e(a){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="TODO"===e.t0?3:"ADD_TODO"===e.t0?4:5;break;case 3:return e.abrupt("return",a({type:b,id:n}));case 4:return e.abrupt("return",a({type:O}));case 5:return e.abrupt("return");case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},Z=(n(50),function(e){function t(){var e,n;Object(P.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(B.a)(this,(e=Object(Y.a)(t)).call.apply(e,[this].concat(o)))).state={title:n.props.title||"",dueDate:n.props.dueDate||"",project:n.props.project||""},n.addTodo=function(){n.props.addTodo(n.state.title.trim(),n.state.dueDate,n.state.project),n.clearTitle()},n.updateTodo=function(){n.props.updateTodo(n.state.title.trim(),n.state.dueDate,n.state.project)},n.handleSubmit=function(){n.props.view&&"UPDATE"===n.props.view?n.updateTodo():n.addTodo()},n.clearTitle=function(){return n.setState({title:""})},n}return Object(L.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.view,a=t.disableEditMode;return o.a.createElement("div",{className:"todo-form-container"},o.a.createElement("div",{className:"todo-form-input"},o.a.createElement("input",{type:"text",autoFocus:!0,value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})}}),o.a.createElement("input",{type:"date",value:this.state.dueDate,onChange:function(t){return e.setState({dueDate:t.target.value})}})),o.a.createElement("div",{className:"todo-form-actions"},o.a.createElement("div",{onClick:this.handleSubmit,className:"todo-form-save"},n&&"UPDATE"===n?"Save":"Add Task"),o.a.createElement("div",{onClick:a,className:"todo-form-cancel"},"Cancel"),o.a.createElement("select",{className:"todo-form-projects-button",value:this.state.project,onChange:function(t){return e.setState({project:t.target.value})}},o.a.createElement("option",{value:""},"---"),this.props.projects.map(function(e){return o.a.createElement("option",{key:e,value:e},e)}))))}}]),t}(a.Component)),ee=Object(l.b)(function(e){return{projects:e.projects.reduce(function(e,t){return Object(T.a)(e).concat([t.name],Object(T.a)(t.subProjects.map(function(e){return e.name})))},[])}})(Z),te=(n(52),function(e){function t(){var e,n;Object(P.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(B.a)(this,(e=Object(Y.a)(t)).call.apply(e,[this].concat(o)))).updateTodo=function(e,t,a){n.props.updateTodo(n.props.todo.id,e.trim(),t,a)},n}return Object(L.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todo,n=e.completeTodo,a=e.deleteTodo,r=e.enableEditMode,c=e.disableEditMode;switch(t.mode){case D:return o.a.createElement(ee,{view:"UPDATE",title:t.title,dueDate:t.dueDate,project:t.project,updateTodo:this.updateTodo,disableEditMode:c});default:return o.a.createElement("div",{className:"todo-read-container"},o.a.createElement("div",{className:"todo-complete-btn-container"},o.a.createElement("div",{onClick:function(){return n(t.id)},className:"todo-complete-btn"})),o.a.createElement("div",{onClick:r,className:"todo-title"},t.title),o.a.createElement(F.a,{to:t.project&&"/projects/".concat(t.project)||"/inbox",className:"todo-assigned-project"},t.project&&t.project||"Inbox"),o.a.createElement("div",{className:"todo-delete-container",onClick:function(){return a(t.id)}},o.a.createElement("div",{className:"todo-delete-btn"},"X")))}}}]),t}(a.Component)),ne=Object(l.b)(function(){return{}},function(e){return{completeTodo:function(t){return e(function(e){return t=Object(z.a)(q.a.mark(function t(n){return q.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:p,id:e});case 1:case"end":return t.stop()}},t,this)})),function(e){return t.apply(this,arguments)};var t}(t))},updateTodo:function(t,n,a,o){return e(function(e,t,n,a){return o=Object(z.a)(q.a.mark(function o(r){return q.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(t){o.next=2;break}return o.abrupt("return",r({type:b,id:e}));case 2:r({type:f,id:e,title:t,dueDate:n,project:a});case 3:case"end":return o.stop()}},o,this)})),function(e){return o.apply(this,arguments)};var o}(t,n,a,o))},deleteTodo:function(t){return e(function(e){return t=Object(z.a)(q.a.mark(function t(n){return q.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:m,id:e});case 1:case"end":return t.stop()}},t,this)})),function(e){return t.apply(this,arguments)};var t}(t))}}})(te),ae=(n(54),function(e){var t=e.enableEditMode;return o.a.createElement("div",{onClick:t,className:"add-todo-button-container"},o.a.createElement("div",{className:"add-todo-button-plus"},"+"),o.a.createElement("div",{className:"add-todo-button-text"},"Add Task"))}),oe=function(e){function t(){var e,n;Object(P.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(B.a)(this,(e=Object(Y.a)(t)).call.apply(e,[this].concat(o)))).addTodo=function(e,t,a){n.props.addTodo(e.trim(),t,a)},n}return Object(L.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.props,t=e.project,n=e.dueDate,a=e.enableEditMode,r=e.disableEditMode;switch(e.mode){case h:return o.a.createElement(ae,{enableEditMode:a});case D:return o.a.createElement(ee,{addTodo:this.addTodo,disableEditMode:r,project:t,dueDate:n});default:return}}}]),t}(a.Component),re=Object(l.b)(function(){return{}},function(e){return{addTodo:function(t,n,a){return e(function(e,t,n){return a=Object(z.a)(q.a.mark(function a(o){return q.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return",o({type:O}));case 2:o({type:s,title:e,dueDate:t,project:n});case 3:case"end":return a.stop()}},a,this)})),function(e){return a.apply(this,arguments)};var a}(t,n,a))}}})(oe),ce=(n(56),Object(l.b)(function(e,t){return{todos:t.overdue?e.todos.filter(function(e){return!e.completed}).filter(function(e){return U(e.dueDate,"YYYY-MM-DD").isBefore(U(),"day")}):e.todos.filter(function(e){return!e.completed}).filter(function(e){return U(e.dueDate,"YYYY-MM-DD").isSame(t.date,"day")}),addTodoId:e.addTodoId}},function(e){return{enableTodoEditMode:function(t){return e(K(t))},disableTodoEditMode:function(t){return e(V(t))}}})(function(e){var t=e.date,n=e.todos,a=e.addTodoId,r=e.enableTodoEditMode,c=e.disableTodoEditMode,i=t?U(t).calendar(null,{sameDay:"[Today]",nextDay:"[Tomorrow]",nextWeek:"dddd",lastDay:"[Overdue]",lastWeek:"[Overdue]",sameElse:"[Overdue]"}):"Overdue",d="Today"===i?U(t).format("ddd MMM D"):t?U(t).format("MMM D"):"";return"Overdue"===i&&0===n.length?o.a.createElement("div",null):o.a.createElement("div",{className:"todo-list-container"},o.a.createElement("header",{className:"todo-list-header"},o.a.createElement("div",{className:"todo-list-title ".concat("Overdue"===i&&"overdue")},i),o.a.createElement("div",{className:"todo-list-date"},d)),o.a.createElement("div",{className:"todo-list-content"},n.map(function(e){return o.a.createElement(ne,{key:e.title,todo:e,enableEditMode:function(){return r({type:"TODO",id:e.id})},disableEditMode:function(){return c({type:"TODO",id:e.id})}})})),"Overdue"!==i&&o.a.createElement(re,{dueDate:U(t).format("YYYY-MM-DD"),enableEditMode:function(){return r({type:"ADD_TODO",id:t})},disableEditMode:function(){return c({type:"ADD_TODO"})},mode:a===t?D:h})||o.a.createElement("div",{className:"todo-list-add-todo-placeholder"}))})),ie=function(){return o.a.createElement(a.Fragment,null,o.a.createElement("header",{className:"view-header"},"Today"),o.a.createElement(ce,{date:U()}))},de=function(){return o.a.createElement(a.Fragment,null,o.a.createElement("header",{className:"view-header week"},"Next 7 Days"),o.a.createElement(ce,{overdue:!0}),[0,1,2,3,4,5,6].map(function(e){return o.a.createElement(ce,{key:e,date:U().add(e,"days")})}))},ue=function(e){function t(){return Object(P.a)(this,t),Object(B.a)(this,Object(Y.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.enableTodoEditMode,a=e.disableTodoEditMode,r=e.addTodoId;return o.a.createElement("div",null,o.a.createElement("header",{className:"view-header"},"Inbox"),t.map(function(e){return o.a.createElement(ne,{key:e.title,todo:e,enableEditMode:function(){return n({type:"TODO",id:e.id})},disableEditMode:function(){return a({type:"TODO",id:e.id})}})}),o.a.createElement(re,{enableEditMode:function(){return n({type:"ADD_TODO",id:"Inbox"})},disableEditMode:function(){return a({type:"ADD_TODO"})},mode:"Inbox"===r?D:h}))}}]),t}(a.Component),le=Object(l.b)(function(e){return{todos:e.todos.filter(function(e){return!e.project}),addTodoId:e.addTodoId}},function(e){return{enableTodoEditMode:function(t){return e(K(t))},disableTodoEditMode:function(t){return e(V(t))}}})(ue),se=Object(l.b)(function(e,t){var n=t.match.params.projectName?e.todos.filter(function(e){return!e.completed&&e.project===t.match.params.projectName}):e.todos.filter(function(e){return!e.completed&&e.project}),a=e.projects.reduce(function(e,t){return Object(T.a)(e).concat([t.name],Object(T.a)(t.subProjects.map(function(e){return e.name})))},[]);return{todos:n,projectName:t.match.params.projectName||"Projects",projects:a,addTodoId:e.addTodoId}},function(e){return{enableTodoEditMode:function(t){return e(K(t))},disableTodoEditMode:function(t){return e(V(t))}}})(function(e){var t=e.projectName,n=e.todos,r=e.projects,c=e.addTodoId,i=e.enableTodoEditMode,d=e.disableTodoEditMode;switch(t){case"Projects":return o.a.createElement(a.Fragment,null,r.map(function(e){return o.a.createElement("div",{key:e,className:"todo-list-container"},o.a.createElement("header",{className:"todo-list-header project"},e),n.filter(function(t){return t.project===e}).map(function(e){return o.a.createElement(ne,{key:e.title,todo:e,enableEditMode:function(){return i({type:"TODO",id:e.id})},disableEditMode:function(){return d({type:"TODO",id:e.id})}})}),o.a.createElement(re,{project:e,enableEditMode:function(){return i({type:"ADD_TODO",id:e})},disableEditMode:function(){return d({type:"ADD_TODO"})},mode:c===e?D:h}))}));default:return o.a.createElement("div",{className:"todo-list-container"},o.a.createElement("header",{className:"todo-list-header project"},t),n.map(function(e){return o.a.createElement(ne,{key:e.title,todo:e,enableEditMode:function(){return i({type:"TODO",id:e.id})},disableEditMode:function(){return d({type:"TODO",id:e.id})}})}),o.a.createElement(re,{project:t,enableEditMode:function(){return i({type:"ADD_TODO",id:t})},disableEditMode:function(){return d({type:"ADD_TODO"})},mode:c===t?D:h}))}}),pe=(n(58),Object(W.a)(function(){return o.a.createElement("article",{className:"view-container"},o.a.createElement(X.a,{path:"/inbox",component:le}),o.a.createElement(X.a,{path:"/today",component:ie}),o.a.createElement(X.a,{path:"/week",component:de}),o.a.createElement(X.a,{path:"/projects/:projectName?",component:se}))})),me=(n(60),function(){return o.a.createElement(a.Fragment,null,o.a.createElement(C,null),o.a.createElement("div",{className:"grid-container"},o.a.createElement(Q,null),o.a.createElement(pe,null)))}),fe=Object(u.a)(x.a,_.a),Ee=Object(u.d)(M,{},fe);c.a.render(o.a.createElement(I.a,null,o.a.createElement(l.a,{store:Ee},o.a.createElement(me,null))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");i?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):d(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):d(e)})}}()}},[[34,2,1]]]);
//# sourceMappingURL=main.d3c646c7.chunk.js.map