(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9958],{4670:function(e,t,i){Promise.resolve().then(i.bind(i,2844))},703:function(e,t,i){"use strict";i.d(t,{default:function(){return a.a}});var n=i(7447),a=i.n(n)},8792:function(e,t,i){"use strict";i.d(t,{default:function(){return a.a}});var n=i(5250),a=i.n(n)},7907:function(e,t,i){"use strict";var n=i(5313);i.o(n,"useRouter")&&i.d(t,{useRouter:function(){return n.useRouter}})},7447:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{getImageProps:function(){return l},default:function(){return c}});let n=i(6921),a=i(8630),s=i(1749),r=n._(i(536)),l=e=>{let{props:t}=(0,a.getImgProps)(e,{defaultLoader:r.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}},c=s.Image},2844:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return f}});var n=i(3827);i(2798);var a=i(8792),s=i(703),r=i(8065),l=i(4090),c={src:"/_next/static/media/fac.0edeb27a.svg",height:512,width:512,blurWidth:0,blurHeight:0},o=i(7908),d=i(1555),u=i(3838),m=i.n(u),h=i(7907);function f(){(0,h.useRouter)();let[e,t]=(0,l.useState)([]),[i,u]=(0,l.useState)(!1);(0,l.useEffect)(()=>{o.Z.get("".concat(d.Z,"/Category/AllCategories"),{headers:{Authorization:"Basic ".concat(d.f)}}).then(e=>{t(e.data)}).catch(e=>{u(!0),m().fire({icon:"error",title:"حدث خطأ اثناء الاتصال بالخادم",showConfirmButton:!1,timer:800})})},[]);let[f,x]=(0,l.useState)({id:null,name:""}),[g,j]=(0,l.useState)({id:null,name:""}),v=()=>{window.history.back()},p=i=>{o.Z.delete("".concat(d.Z,"/Category/").concat(i),{headers:{Authorization:"Basic ".concat(d.f)}}).then(n=>{200===n.status&&(m().fire({icon:"success",title:"تمت العملية بنجاح",showConfirmButton:!1,timer:800}),setTimeout(()=>{t(e.filter(e=>e.id!==i))},400))}).catch(e=>{m().fire({icon:"error",title:"حدث خطا اثناء الحذف من فضلك حاول مرة اخري",showConfirmButton:!1,timer:800})})},b=t=>{x(e.find(e=>e.id===t))},N=()=>{j({id:e.length+1,name:""})};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"ware-house",dir:"rtl",children:[(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"wrap-box",children:[(0,n.jsxs)("div",{className:"item-head",children:[(0,n.jsx)("div",{className:"item-back",onClick:()=>v(),children:(0,n.jsx)("i",{className:"fa-solid fa-chevron-right"})}),(0,n.jsx)("div",{className:"logo-item",children:(0,n.jsx)(s.default,{src:r.Z,alt:"Factory Logo"})}),(0,n.jsx)("div",{className:"phone-item",children:(0,n.jsxs)(a.default,{href:"tel:0123456789",className:"link-phone",children:[(0,n.jsx)("i",{className:"fa-solid fa-phone-volume"}),(0,n.jsx)("span",{children:"1285128664546"})]})})]}),(0,n.jsx)("div",{className:"add-box-item-warehouse",children:(0,n.jsx)("p",{onClick:()=>N(),children:"إضافة قسم جديد"})}),(0,n.jsxs)("div",{className:"item-bottom shadow-lg rounded",children:[(0,n.jsx)("div",{className:"box-items",children:e.map(e=>(0,n.jsxs)("div",{className:"item",children:[(0,n.jsxs)(a.default,{href:"/admin/inventory/type?catgoryId=".concat(e.id),className:"item-link-path",children:[(0,n.jsx)("div",{className:"item-image",children:(0,n.jsx)(s.default,{src:c,alt:"Item Logo"})}),(0,n.jsx)("div",{className:"item-icon",children:(0,n.jsx)("i",{className:"fa-solid fa-arrow-up-right-from-square"})}),(0,n.jsx)("div",{className:"item-text",children:(0,n.jsx)("p",{children:e.name})})]}),(0,n.jsxs)("div",{className:"edite-section",children:[(0,n.jsx)("p",{className:"edite",onClick:()=>b(e.id),children:(0,n.jsx)("i",{className:"fa-solid fa-edit"})}),(0,n.jsx)("p",{className:"delete",onClick:t=>p(e.id),children:(0,n.jsx)("i",{className:"fa-regular fa-trash-can"})})]})]},e.id))}),0==e.length&&i&&(0,n.jsx)("p",{colSpan:"8",className:"text-center",style:{color:"#ff0000",fontSize:"1.5rem",padding:"30px 0",letterSpacing:"1px",margin:"0"},children:"لا يوجد بيانات"}),0==e.length&&!i&&(0,n.jsx)("p",{colSpan:"8",className:"text-center",style:{fontSize:"1.5rem",color:"#000",padding:"30px 0",letterSpacing:"1px",margin:"0"},children:"الرجاء الانتظار جاري تحميل البيانات ..."})]})]})}),null!==f.id&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"overlay"}),(0,n.jsx)("div",{className:"edit-form-warehouse",children:(0,n.jsxs)("div",{className:"box-item",children:[(0,n.jsxs)("div",{className:"form-floating mb-3",children:[(0,n.jsx)("input",{type:"text",className:"form-control",id:"floatingInput",value:f.name,onChange:e=>x({...f,name:e.target.value})}),(0,n.jsx)("label",{htmlFor:"floatingInput",children:"العنوان"})]}),(0,n.jsxs)("div",{className:"btn-groub",children:[(0,n.jsx)("button",{className:"btn btn-save",onClick:()=>{o.Z.put("".concat(d.Z,"/Category/").concat(f.id),f).then(i=>{if(200===i.status){m().fire({icon:"success",title:"تمت العملية بنجاح",showConfirmButton:!1,timer:800});let i=e.findIndex(e=>e.id==f.id);t(e=>{let t=[...e];return t[i]=f,t})}}).catch(e=>{m().fire({icon:"error",title:"حدث خطأ ثناء التعديل من فضلك حاول مرة اخري مع العلم ان الاسم لا يجب ان يكون فارغ",showConfirmButton:!1,timer:800})}),x({id:null,name:""})},children:"Save"}),(0,n.jsx)("button",{className:"btn btn-cancel",onClick:()=>{x({id:null,name:""})},children:"Cancel"})]})]})})]}),null!==g.id&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"overlay"}),(0,n.jsx)("div",{className:"edit-form-warehouse",children:(0,n.jsxs)("div",{className:"box-item",children:[(0,n.jsxs)("div",{className:"form-floating mb-3",children:[(0,n.jsx)("input",{type:"text",className:"form-control",id:"floatingInput",value:g.name,placeholder:"Add new item",onChange:e=>j({...g,name:e.target.value})}),(0,n.jsx)("label",{htmlFor:"floatingInput",children:"اسم القسم"})]}),(0,n.jsxs)("div",{className:"btn-groub",children:[(0,n.jsx)("button",{className:"btn btn-outline-primary btn-save",onClick:()=>{if(i&&0==e.length)m().fire({icon:"error",title:"حدث خطا اثناء الاتصال بالخادم",showConfirmButton:!1,timer:800}),j({id:null,name:""});else{var n;let i=null===(n=e[e.length-1])||void 0===n?void 0:n.id;g.id=i+1,""!=g.name?(o.Z.post("".concat(d.Z,"/Category/AddCategory"),{name:g.name}).then(e=>{200===e.status&&(t(t=>[...t,e.data]),m().fire({icon:"success",title:"تمت العملية بنجاح",showConfirmButton:!1,timer:800}))}).catch(e=>{m().fire({icon:"error",title:"حدث خطا ثناء الاضافة من فضلك حاول مرة اخري مع العلم ان الاسم لا يجب ان يكون فارغ",showConfirmButton:!1,timer:800})}),j({id:null,name:""})):m().fire({icon:"error",title:"الاسم لا يجب ان يكون فارغ",showConfirmButton:!1,timer:1e3})}},children:"حفظ"}),(0,n.jsx)("button",{className:"btn btn-outline-danger btn-cancel",onClick:()=>j({id:null,name:""}),children:"الغاء"})]})]})})]})]})})}},2798:function(){},8065:function(e,t){"use strict";t.Z={src:"/_next/static/media/factory-logo.14bccf4b.svg",height:180,width:208,blurWidth:0,blurHeight:0}},1555:function(e,t,i){"use strict";i.d(t,{f:function(){return n}});let n=i(8620).Buffer.from("".concat("11190013",":").concat("60-dayfreetrial"),"utf8").toString("base64");t.Z="http://16.24.26.228:8080/api"}},function(e){e.O(0,[109,7908,9647,9117,2971,8069,1744],function(){return e(e.s=4670)}),_N_E=e.O()}]);