(function(e){function t(t){for(var n,c,i=t[0],s=t[1],u=t[2],d=0,b=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(b.length)b.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o={id:"app",class:"container"},a=Object(n["e"])("div",{class:"row"},[Object(n["e"])("div",{class:"col-md-12 mt-2"},[Object(n["e"])("h1",null,"Usuarios")])],-1),c={class:"row"},i={class:"col-md-12"};function s(e,t,r,s,u,l){var d=Object(n["j"])("formulario-usuario"),b=Object(n["j"])("tabla-usuarios");return Object(n["h"])(),Object(n["d"])("div",o,[a,Object(n["e"])("div",c,[Object(n["e"])("div",i,[Object(n["f"])(d,{onCrearUsuario:l.postUsuario},null,8,["onCrearUsuario"]),Object(n["f"])(b,{usuarios:u.usuarios,onEliminarUsuario:l.deleteUsuario,onActualizarUsuario:l.putUsuario},null,8,["usuarios","onEliminarUsuario","onActualizarUsuario"])])])])}var u=r("2909"),l=r("1da1"),d=(r("96cf"),r("d3b7"),r("e9c4"),r("99af"),r("d81d"),r("4de4"),r("b0c0"),{id:"tabla-usuarios"}),b={key:0,class:"alert alert-info",role:"alert"},p={class:"table"},m=Object(n["e"])("thead",null,[Object(n["e"])("tr",null,[Object(n["e"])("th",null,"Nombre"),Object(n["e"])("th",null,"Email"),Object(n["e"])("th",null,"Acciones")])],-1),j={key:0},f=["onUpdate:modelValue"],h={key:1},O={key:2},v=["onUpdate:modelValue"],y={key:3},g={key:4},k=["onClick"],U=["onClick"],w={key:5},x=["onClick"],E=["onClick"];function C(e,t,r,o,a,c){return Object(n["h"])(),Object(n["d"])("div",d,[r.usuarios.length?Object(n["c"])("",!0):(Object(n["h"])(),Object(n["d"])("div",b," No se han agregado usuarios ")),Object(n["e"])("table",p,[m,Object(n["e"])("tbody",null,[(Object(n["h"])(!0),Object(n["d"])(n["a"],null,Object(n["i"])(r.usuarios,(function(t){return Object(n["h"])(),Object(n["d"])("tr",{key:t.id},[a.editando===t.id?(Object(n["h"])(),Object(n["d"])("td",j,[Object(n["m"])(Object(n["e"])("input",{type:"text",class:"form-control","onUpdate:modelValue":function(e){return t.name=e}},null,8,f),[[n["l"],t.name]])])):(Object(n["h"])(),Object(n["d"])("td",h,Object(n["k"])(t.name),1)),a.editando===t.id?(Object(n["h"])(),Object(n["d"])("td",O,[Object(n["m"])(Object(n["e"])("input",{type:"email",class:"form-control","onUpdate:modelValue":function(e){return t.email=e}},null,8,v),[[n["l"],t.email]])])):(Object(n["h"])(),Object(n["d"])("td",y,Object(n["k"])(t.email),1)),a.editando===t.id?(Object(n["h"])(),Object(n["d"])("td",g,[Object(n["e"])("button",{class:"btn btn-success",onClick:function(e){return c.guardarUsuario(t)}},"💾 Guardar",8,k),Object(n["e"])("button",{class:"btn btn-secondary ml-2",onClick:function(e){return c.cancelarEdicion(t)}},"❌ Cancelar",8,U)])):(Object(n["h"])(),Object(n["d"])("td",w,[Object(n["e"])("button",{class:"btn btn-info",onClick:function(e){return c.editarUsuario(t)}},"✏️ Editar",8,x),Object(n["e"])("button",{class:"btn btn-danger ml-2",onClick:function(r){return e.$emit("eliminar-usuario",t)}},"🗑️ Eliminar",8,E)]))])})),128))])])])}var P={name:"tabla-usuarios",props:{usuarios:Array},data:function(){return{editando:null}},methods:{editarUsuario:function(e){this.usuarioEditado=Object.assign({},e),this.editando=e.id},guardarUsuario:function(e){e.name.length&&e.email.length&&(this.$emit("actualizar-usuario",e),this.editando=null)},cancelarEdicion:function(e){Object.assign(e,this.usuarioEditado),this.editando=null}}},S=r("6b0d"),F=r.n(S);const R=F()(P,[["render",C]]);var T=R,I={id:"formulario-usuario"},V={class:"container"},_={class:"row"},A={class:"col-md-4"},N={class:"form-group"},J=Object(n["e"])("label",null,"Nombre",-1),M={class:"col-md-4"},$={class:"form-group"},z=Object(n["e"])("label",null,"Email",-1),D=Object(n["e"])("div",{class:"row"},[Object(n["e"])("div",{class:"col-md-4"},[Object(n["e"])("div",{class:"form-group"},[Object(n["e"])("button",{class:"btn btn-primary"},"Añadir usuario")])])],-1),G={class:"container"},K={class:"row"},L={class:"col-md-12"},q={key:0,class:"alert alert-danger",role:"alert"},B={key:1,class:"alert alert-success",role:"alert"};function H(e,t,r,o,a,c){return Object(n["h"])(),Object(n["d"])("div",I,[Object(n["e"])("form",{onSubmit:t[5]||(t[5]=Object(n["n"])((function(){return c.enviarFormulario&&c.enviarFormulario.apply(c,arguments)}),["prevent"]))},[Object(n["e"])("div",V,[Object(n["e"])("div",_,[Object(n["e"])("div",A,[Object(n["e"])("div",N,[J,Object(n["m"])(Object(n["e"])("input",{ref:"name","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.usuario.name=e}),type:"text",class:Object(n["g"])(["form-control",{"is-invalid":a.procesando&&c.nameInvalido}]),onFocus:t[1]||(t[1]=function(){return c.resetEstado&&c.resetEstado.apply(c,arguments)}),onKeypress:t[2]||(t[2]=function(){return c.resetEstado&&c.resetEstado.apply(c,arguments)})},null,34),[[n["l"],a.usuario.name]])])]),Object(n["e"])("div",M,[Object(n["e"])("div",$,[z,Object(n["m"])(Object(n["e"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.usuario.email=e}),type:"email",class:Object(n["g"])([{"is-invalid":a.procesando&&c.emailInvalido},"form-control"]),onFocus:t[4]||(t[4]=function(){return c.resetEstado&&c.resetEstado.apply(c,arguments)})},null,34),[[n["l"],a.usuario.email]])])])]),D]),Object(n["e"])("div",G,[Object(n["e"])("div",K,[Object(n["e"])("div",L,[a.error&&a.procesando?(Object(n["h"])(),Object(n["d"])("div",q," Debes rellenar todos los campos! ")):Object(n["c"])("",!0),a.correcto?(Object(n["h"])(),Object(n["d"])("div",B," El usuario ha sido agregado correctamente! ")):Object(n["c"])("",!0)])])])],32)])}var Q={name:"formulario-usuario",data:function(){return{procesando:!1,correcto:!1,error:!1,usuario:{name:"",email:""}}},methods:{enviarFormulario:function(){this.procesando=!0,this.resetEstado(),this.nameInvalido||this.emailInvalido?this.error=!0:(this.$emit("crear-usuario",this.usuario),this.$refs.name.focus(),this.error=!1,this.correcto=!0,this.procesando=!1,this.usuario={name:"",email:""})},resetEstado:function(){this.correcto=!1,this.error=!1}},computed:{nameInvalido:function(){return this.usuario.name.length<1},emailInvalido:function(){return this.usuario.email.length<1}}};const W=F()(Q,[["render",H]]);var X=W,Y={name:"app",data:function(){return{usuarios:[]}},methods:{getUsuarios:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return r=t.sent,t.next=6,r.json();case 6:e.usuarios=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},postUsuario:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return n=r.sent,r.next=6,n.json();case 6:o=r.sent,t.usuarios=[].concat(Object(u["a"])(t.usuarios),[o]),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),console.error(r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},putUsuario:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("https://jsonplaceholder.typicode.com/users/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return n=r.sent,r.next=6,n.json();case 6:o=r.sent,t.usuarios=t.usuarios.map((function(t){return t.id===e.id?o:t})),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),console.error(r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteUsuario:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("https://jsonplaceholder.typicode.com/usuarios/".concat(e.id),{method:"DELETE"});case 3:t.usuarios=t.usuarios.filter((function(t){return t.id!==e.id})),r.next=9;break;case 6:r.prev=6,r.t0=r["catch"](0),console.error(r.t0);case 9:case"end":return r.stop()}}),r,null,[[0,6]])})))()}},mounted:function(){this.getUsuarios()},components:{TablaUsuarios:T,FormularioUsuario:X}};const Z=F()(Y,[["render",s]]);var ee=Z;Object(n["b"])(ee).mount("#app")}});
//# sourceMappingURL=app.c81d2e2a.js.map