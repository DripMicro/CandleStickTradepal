(window.webpackJsonpreact=window.webpackJsonpreact||[]).push([[17],{380:function(e,t,r){},468:function(e,t,r){"use strict";r.r(t),r.d(t,"CreateNewAccountModal",(function(){return T})),r.d(t,"EditingModal",(function(){return N}));var n=r(28),a=r(167),o=r(346),c=r(36),i=r(0),l=r.n(i),u=r(475),s=r(382),d=r(148),f=r(383),p=r(478),h=r(491),m=r(477),y=r(490),b=r(387),g=r(390),v=r(484),E=r(460),O=r(485),j=r(389),w=r(384),x=r(487),C=r(469),P=r(470),k=r(471),L=(r(380),r(26));function S(){S=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(L){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof f?t:f,c=Object.create(o.prototype),i=new C(a||[]);return n(c,"_invoke",{value:O(e,r,i)}),c}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var d={};function f(){}function p(){}function h(){}var m={};l(m,o,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(P([])));b&&b!==t&&r.call(b,o)&&(m=b);var g=h.prototype=f.prototype=Object.create(m);function v(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var a;n(this,"_invoke",{value:function(n,o){function c(){return new t((function(a,c){!function n(a,o,c,i){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,c,i)}),(function(e){n("throw",e,c,i)})):t.resolve(d).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,i)}))}i(l.arg)}(n,o,a,c)}))}return a=a?a.then(c,c):c()}})}function O(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=j(c,r);if(i){if(i===d)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function j(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function P(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=h,n(g,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:p,configurable:!0}),p.displayName=l(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},v(E.prototype),l(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var c=new E(u(t,r,n,a),o);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},v(g),l(g,i,"Generator"),l(g,o,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=P,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}var T=function(e){var t=e.open,r=e.columns,o=e.placeholderStyle,u=e.onClose,s=e.onSubmit,d=Object(i.useState)((function(){return r.reduce((function(e,t){var r;return e[null!==(r=t.accessorKey)&&void 0!==r?r:""]="",e}),{})})),f=Object(c.a)(d,2),p=f[0],h=f[1];return l.a.createElement(v.a,{open:t,onClose:u,PaperProps:{style:{borderRadius:"10px"}}},l.a.createElement(E.a,{textAlign:"center",style:{background:"#27283a",color:"white"}},"Create New Account"),l.a.createElement(O.a,{style:{background:"#27283a"}},l.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},l.a.createElement(j.a,{sx:{width:"100%",minWidth:{xs:"300px",sm:"360px",md:"400px"},gap:"1.5rem"}},r.map((function(e){return"_id"===e.accessorKey||"request"===e.accessorKey||"period"===e.accessorKey?null:l.a.createElement(w.a,{key:e.accessorKey,placeholder:e.header,name:e.accessorKey,inputProps:{style:o},onChange:function(e){return h(Object(a.a)(Object(a.a)({},p),{},Object(n.a)({},e.target.name,e.target.value)))}})}))))),l.a.createElement(x.a,{sx:{p:"1.25rem"},style:{background:"#27283a"}},l.a.createElement(b.a,{onClick:u,style:{color:"#27283a",backgroundColor:"#8b8fa3"},variant:"contained"},"Cancel"),l.a.createElement(b.a,{style:{backgroundColor:"#8b8fa3"},onClick:function(){s(p),u()},variant:"contained"},"Create New Account")))},N=function(e){var t=e.open,r=(e.columns,e.placeholderStyle),o=e.rowdata,c=e.setRowdata,i=e.onClose,u=e.onSubmit;console.log(o);return l.a.createElement(v.a,{open:t,onClose:i,PaperProps:{style:{borderRadius:"10px"}}},l.a.createElement(E.a,{textAlign:"center",style:{background:"#27283a",color:"white"}},"Edit"),l.a.createElement(O.a,{style:{background:"#27283a"}},l.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},l.a.createElement(j.a,{sx:{width:"100%",minWidth:{xs:"300px",sm:"360px",md:"400px"},gap:"1.5rem"}},l.a.createElement(w.a,{name:"firstName",value:o.firstName,placeholder:"First Name",inputProps:{style:r},onChange:function(e){return c(Object(a.a)(Object(a.a)({},o),{},Object(n.a)({},e.target.name,e.target.value)))}}),l.a.createElement(w.a,{name:"lastname",value:o.lastname,placeholder:"Last Name",inputProps:{style:r},onChange:function(e){return c(Object(a.a)(Object(a.a)({},o),{},Object(n.a)({},e.target.name,e.target.value)))}}),l.a.createElement(w.a,{name:"email",value:o.email,placeholder:"Email",inputProps:{style:r},onChange:function(e){return c(Object(a.a)(Object(a.a)({},o),{},Object(n.a)({},e.target.name,e.target.value)))}}),l.a.createElement(w.a,{name:"Phone",value:o.Phone,placeholder:"Phone",inputProps:{style:r},onChange:function(e){return c(Object(a.a)(Object(a.a)({},o),{},Object(n.a)({},e.target.name,e.target.value)))}}),l.a.createElement(w.a,{name:"country",value:o.country,placeholder:"Country",inputProps:{style:r},onChange:function(e){return c(Object(a.a)(Object(a.a)({},o),{},Object(n.a)({},e.target.name,e.target.value)))}}),l.a.createElement(w.a,{name:"period",value:o.period,placeholder:"Period",inputProps:{style:r},onChange:function(e){return c(Object(a.a)(Object(a.a)({},o),{},Object(n.a)({},e.target.name,e.target.value)))}}),l.a.createElement(w.a,{name:"request",placeholder:"Request",value:o.request,inputProps:{style:r},onChange:function(e){return c(Object(a.a)(Object(a.a)({},o),{},Object(n.a)({},e.target.name,e.target.value)))}})))),l.a.createElement(x.a,{sx:{p:"1.25rem"},style:{background:"#27283a"}},l.a.createElement(b.a,{onClick:i,style:{color:"#27283a",backgroundColor:"#8b8fa3"},variant:"contained"},"Cancel"),l.a.createElement(b.a,{style:{backgroundColor:"#8b8fa3"},onClick:function(){u(o),i()},variant:"contained"},"SAVE")))},_=function(e){return!!e.length},F=function(e){return!!e.length&&e.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)},K=function(e){return e>=18&&e<=50};t.default=function(){var e=Object(L.d)((function(e){return e.InputValue})).Rperiod,t={borderBottom:"2px solid #c8cce3",color:"#c8cce3","::placeholder":{color:"#c8cce3"}},r={color:"white"},v=Object(i.useState)(!1),E=Object(c.a)(v,2),O=E[0],j=E[1],w=Object(i.useState)(!1),x=Object(c.a)(w,2),A=x[0],z=x[1],B=Object(i.useState)([]),G=Object(c.a)(B,2),R=G[0],q=G[1],I=Object(i.useState)({}),D=Object(c.a)(I,2),M=D[0],V=D[1],J=Object(i.useState)(""),U=Object(c.a)(J,2),W=U[0],Y=U[1],Z=Object(i.useState)([]),H=Object(c.a)(Z,2),$=H[0],Q=H[1];Object(i.useEffect)((function(){X(),console.log("ss: "+e)}),[]);var X=function(){u.a.post("/api/users/getallusers").then((function(e){console.log("Getallusers: ",e.data),q(e.data)}))},ee=function(){var e=Object(o.a)(S().mark((function e(t){return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),u.a.post("/api/users/updateuser",t).then((function(e){console.log(e.data),q(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=Object(i.useCallback)((function(e){if(window.confirm("Are you sure you want to delete ".concat(e.getValue("firstName"))))return console.log(e.original),void u.a.post("/api/users/deleteuser",e.original).then((function(e){console.log(e.data),q(e.data)}))}),[R]),re=Object(i.useCallback)((function(e){return{error:!!M[e.id],helperText:M[e.id],onBlur:function(t){("email"===e.column.id?F(t.target.value):"age"===e.column.id?K(+t.target.value):_(t.target.value))?(delete M[e.id],V(Object(a.a)({},M))):V(Object(a.a)(Object(a.a)({},M),{},Object(n.a)({},e.id,"".concat(e.column.columnDef.header," is required"))))}}}),[M]),ne=Object(d.a)(),ae=Object(f.a)({palette:{mode:"dark",primary:ne.palette.secondary,background:{default:"#27283a"}}}),oe=Object(i.useMemo)((function(){return[{accessorKey:"_id",header:"ID",enableColumnOrdering:!1,enableEditing:!1,enableSorting:!1,size:80},{accessorKey:"firstName",header:"First Name",size:140,muiTableBodyCellEditTextFieldProps:function(e){var t=e.cell;return Object(a.a)({},re(t))}},{accessorKey:"lastname",header:"Last Name",size:140,muiTableBodyCellEditTextFieldProps:function(e){var t=e.cell;return Object(a.a)({},re(t))}},{accessorKey:"email",header:"Email",muiTableBodyCellEditTextFieldProps:function(e){var t=e.cell;return Object(a.a)(Object(a.a)({},re(t)),{},{type:"email"})}},{accessorKey:"Phone",header:"Phone",size:80,muiTableBodyCellEditTextFieldProps:function(e){var t=e.cell;return Object(a.a)(Object(a.a)({},re(t)),{},{type:"number"})}},{accessorKey:"country",header:"Country",size:140,muiTableBodyCellEditTextFieldProps:function(e){var t=e.cell;return Object(a.a)({},re(t))}},{accessorKey:"period",header:"Period",size:80,muiTableBodyCellEditTextFieldProps:function(e){var t=e.cell;return Object(a.a)(Object(a.a)({},re(t)),{},{type:"number"})}},{accessorKey:"request",header:"Request",size:80,muiTableBodyCellEditTextFieldProps:function(e){var t=e.cell;return Object(a.a)(Object(a.a)({},re(t)),{},{type:"number"})}}]}),[re]),ce=function(e){return function(t){if("Search"===e||"Enter"===t.key){console.log(W);var r={searchword:W};console.log(W),W?u.a.post("/api/users/searchuser",r).then((function(e){console.log(e.data),q(e.data)})):u.a.post("/api/users/getallusers").then((function(e){q(e.data)}))}}},ie=function(e){return function(){console.log(e._valuesCache),Q(e._valuesCache),z(!0)}};return l.a.createElement("div",{className:"custom-table"},l.a.createElement(p.a,{theme:ae},l.a.createElement(s.a,{displayColumnDefOptions:{"mrt-row-actions":{muiTableHeadCellProps:{align:"center"},size:120}},enableFilters:!1,columns:oe,data:R,editingMode:"modal",enableColumnOrdering:!1,enableEditing:!0,renderRowActions:function(e){var t=e.row;e.table;return l.a.createElement(h.a,{sx:{display:"flex",gap:"1rem"}},l.a.createElement(m.a,{arrow:!0,placement:"left",title:"Edit"},l.a.createElement(y.a,{onClick:ie(t),style:{color:"#c8cce3"}},l.a.createElement(C.a,null))),l.a.createElement(m.a,{arrow:!0},l.a.createElement(y.a,{color:"error",onClick:function(){return te(t)},style:{color:"#c8cce3"}},l.a.createElement(P.a,null))))},renderTopToolbarCustomActions:function(){return l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(b.a,{style:{backgroundColor:"#8b8fa3",marginRight:"65px"},onClick:function(){return j(!0)},variant:"contained"},"Create"),l.a.createElement(g.a,{value:W,onChange:function(e){return Y(e.target.value)},onKeyPressCapture:ce(""),placeholder:"Search here....",inputProps:{style:t},InputProps:{disableUnderline:!0}}),l.a.createElement(y.a,{onClick:ce("Search"),style:{position:"absolute",left:"325px",top:"8px",color:"#8b8fa3"}},l.a.createElement(k.a,null)))}})),l.a.createElement(T,{columns:oe,open:O,onClose:function(){return j(!1)},onSubmit:function(e){console.log(e),u.a.post("/api/users/AddUser",e).then((function(e){console.log(e.data),q(e.data)}))},placeholderStyle:r}),l.a.createElement(N,{columns:oe,open:A,onClose:function(){return z(!1)},onSubmit:ee,rowdata:$,setRowdata:Q,placeholderStyle:r}))}}}]);
//# sourceMappingURL=17.f5d7a2e1.chunk.js.map