(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4933],{2405:function(e,t,a){Promise.resolve().then(a.bind(a,5589))},7907:function(e,t,a){"use strict";var s=a(5313);a.o(s,"useRouter")&&a.d(t,{useRouter:function(){return s.useRouter}})},5589:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var s=a(3827),i=a(4090),c=a(7907),r=a(7908),l=a(1555),n=a(3411),o=a.n(n);function d(){let e=(0,c.useRouter)(),[t,a]=(0,i.useState)([]),[n,d]=(0,i.useState)(!1),[m,h]=(0,i.useState)({});(0,i.useEffect)(()=>{r.Z.get("".concat(l.Z,"/Customer/AllCustomers"),{headers:{Authorization:"Basic ".concat(l.f)}}).then(e=>{a(e.data.customers),h(e.data.pagination)}).catch(e=>{d(!0),o().fire({icon:"error",title:"حدث خطأ ما اثناء جلب البيانات",showConfirmButton:!1,timer:800})})},[]),(0,i.useEffect)(()=>{(void 0!=m.pageNumber||null!=m.pageNumber)&&r.Z.get("".concat(l.Z,"/Customer/AllCustomers?pageNumber=").concat(m.pageNumber)).then(e=>{a(e.data.customers),h(e.data.pagination)}).catch(e=>{d(!0),o().fire({icon:"error",text:"حدث خطا اثناء جلب البيانات",timer:1200})})},[m.pageNumber]);let u=Math.ceil(m.total/m.pageSize),[x,p]=(0,i.useState)("");(0,i.useEffect)(()=>{""==x&&r.Z.get("".concat(l.Z,"/Customer/AllCustomers")).then(e=>{a(e.data.customers),h(e.data.pagination)}).catch(e=>{d(!0),o().fire({icon:"error",title:"حذث خطأ ما اثناء جلب البيانات",showConfirmButton:!1,timer:800})})},[x]);let[j,f]=(0,i.useState)([]),[g,N]=(0,i.useState)(!1),b=(0,i.useRef)(),v=e=>{g&&(N(!1),f(j.filter(t=>t!==e))),j.includes(e)?f(j.filter(t=>t!==e)):f([...j,e])},[C,y]=(0,i.useState)({id:"",name:"",address:"",email:"",commercialRegister:"",phone:""}),[k,w]=(0,i.useState)(!1),[S,Z]=(0,i.useState)(!1),R=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e?(y(e),Z(!0)):(y({id:"",name:"",address:"",email:"",commercialRegister:"",phone:""}),Z(!1)),w(!0)},B=()=>{w(!1)},A=e=>{let{name:t,value:a}=e.target;y(e=>({...e,[t]:a}))},E=e=>{o().fire({title:"تأكيد",text:"هل تريد حذف هذا العنصر؟",icon:"warning",showCancelButton:!0,confirmButtonText:"نعم، احذف!",cancelButtonText:"إلغاء"}).then(s=>{s.isConfirmed&&(r.Z.delete("".concat(l.Z,"/Customer/DeleteCustomer?id=").concat(e)).then(s=>{o().fire({icon:"success",title:"تم الحذف بنجاح",showConfirmButton:!1,timer:800}),setTimeout(()=>{a(t.filter(t=>t.id!==e))},400)}).catch(e=>{o().fire({icon:"error",title:"حدث خطأ ما اثناء الحذف",showConfirmButton:!1,timer:800})}),B())})};return(0,i.useEffect)(()=>{var e=document.getElementById("selectAll-input");e.checked&&(e.checked=!1),document.querySelectorAll("#checkbox-item").forEach(e=>{e.checked&&(e.checked=!1)})},[t]),(0,s.jsxs)("div",{className:"table",children:[(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"header",children:[(0,s.jsxs)("div",{className:"head-box",children:[(0,s.jsx)("div",{className:"add-head",children:(0,s.jsx)("p",{onClick:()=>R(),className:"add-item",children:"إضافة عميل جديد"})}),(0,s.jsx)("div",{className:"add-head-print",onClick:()=>{if(0===j.length){o().fire({icon:"warning",title:"الرجاء تحديد عناصر للطباعة",showConfirmButton:!1,timer:1200});return}{let e=b.current.innerHTML,t=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=t,window.location.reload()}},children:(0,s.jsx)("p",{className:"print-icon",children:(0,s.jsx)("i",{className:"fa-solid fa-print"})})})]}),(0,s.jsxs)("div",{className:"search-box has-arrow",children:[(0,s.jsxs)("form",{className:"d-flex search-top-table-form",role:"search",onSubmit:e=>{e.preventDefault(),""==x?r.Z.get("".concat(l.Z,"/Customer/AllCustomers")).then(e=>{a(e.data.customers),h(e.data.pagination)}).catch(e=>{d(!0),o().fire({icon:"error",title:"حذث خطأ ما اثناء جلب البيانات",showConfirmButton:!1,timer:800})}):r.Z.post("".concat(l.Z,"/Customer/SearchCustomer"),{name:x}).then(e=>{a(e.data)}).catch(e=>{o().fire({icon:"error",title:"لا يوجد نتائج",showConfirmButton:!1,timer:800})})},children:[(0,s.jsxs)("div",{className:"form-floating search-input",children:[(0,s.jsx)("input",{type:"text",className:"form-control",id:"floatingInput",placeholder:"ابحث هنا",onChange:e=>p(e.target.value),value:x}),(0,s.jsx)("label",{htmlFor:"floatingInput",children:"اسم العميل"})]}),(0,s.jsx)("button",{className:"btn",type:"submit",children:(0,s.jsx)("i",{className:"fa-solid fa-search"})})]}),(0,s.jsx)("div",{className:"go-back-arrow",children:(0,s.jsx)("p",{onClick:()=>{e.back()},children:(0,s.jsx)("i",{className:"fa-solid fa-chevron-right"})})})]})]}),(0,s.jsx)("div",{className:"table-contant",children:(0,s.jsxs)("table",{className:"table table-striped table-hover",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{id:"head-Of-table",children:[(0,s.jsx)("th",{type:"hide",children:(0,s.jsx)("input",{type:"checkbox",checked:g,onChange:()=>{let e=document.querySelectorAll("#checkbox-item");g?(f([]),e.forEach(e=>{e.checked=!1})):(e.forEach(e=>{e.checked=!0}),f(t.map(e=>e.id))),N(!g)},id:"selectAll-input"})}),(0,s.jsx)("th",{scope:"col",type:"id",text:"ID",value:"id",children:"ID"}),(0,s.jsx)("th",{scope:"col",type:"text",value:"name",text:"اسم العميل",children:"اسم العميل "}),(0,s.jsx)("th",{scope:"col",type:"number",value:"phone",text:"رقم التليفون",children:"رقم التليفون"}),(0,s.jsx)("th",{scope:"col",type:"email",value:"email",text:"الايميل",children:"الايميل"}),(0,s.jsx)("th",{scope:"col",type:"text",value:"address",text:"العنوان",children:"العنوان"}),(0,s.jsx)("th",{scope:"col",type:"text",value:"commercialRegister",text:"السجل التجارى",children:"السجل التجارى"}),(0,s.jsx)("th",{scope:"col",type:"hide",children:"تعديل"}),(0,s.jsx)("th",{scope:"col",type:"hide",children:"حذف"})]})}),(0,s.jsxs)("tbody",{children:[null==t?void 0:t.map(e=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{scope:"row",children:(0,s.jsx)("div",{className:"check-box",children:(0,s.jsx)("input",{type:"checkbox",id:"checkbox-item",checked:j.includes(e.id),onChange:t=>v(e.id,t)})})}),(0,s.jsx)("th",{scope:"row",children:(0,s.jsx)("div",{className:"check-box",children:(0,s.jsx)("p",{className:"item-id",children:e.id})})}),(0,s.jsx)("td",{className:"px-2",children:e.name}),(0,s.jsx)("td",{children:e.phone}),(0,s.jsx)("td",{className:"px-2",children:e.email}),(0,s.jsx)("td",{className:"px-2",children:e.address}),(0,s.jsx)("td",{className:"px-2",children:e.commercialRegister}),(0,s.jsx)("td",{className:"pen icon",children:(0,s.jsx)("i",{className:"fa-regular fa-pen-to-square",onClick:()=>R(e)})}),(0,s.jsx)("td",{className:"trash icon",children:(0,s.jsx)("i",{className:"fa-regular fa-trash-can",onClick:()=>E(e.id)})})]},e.id)),0==t.length&&n&&(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:"9",className:"text-center",style:{color:"#ff0000",fontSize:"1.5rem",padding:"30px 0",letterSpacing:"1px"},children:"لا يوجد بيانات"})}),0==t.length&&!n&&(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:"9",className:"text-center",style:{fontSize:"1.5rem",color:"#000",padding:"30px 0",letterSpacing:"1px"},children:"الرجاء الانتظار جاري تحميل البيانات ..."})})]})]})})]}),(0,s.jsx)("div",{className:"pagination-box-inventory",children:(0,s.jsx)("nav",{"aria-label":"Page navigation example",children:(0,s.jsxs)("ul",{className:"pagination",children:[(0,s.jsx)("li",{className:"page-item ".concat(!m.hasPreviousPage&&"disabled"),children:(0,s.jsx)("a",{className:"page-link",href:"#","aria-label":"Previous",onClick:()=>{m.hasPreviousPage&&h(e=>({...e,pageNumber:e.pageNumber-1}))},children:(0,s.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),u>0&&[...Array(u).keys()].map(e=>(0,s.jsx)("li",{className:"page-item ".concat(m.pageNumber===e+1&&"active"),children:(0,s.jsx)("a",{className:"page-link",href:"#",onClick:()=>h(t=>({...t,pageNumber:e+1})),children:e+1})},e+1)),(0,s.jsx)("li",{className:"page-item ".concat(!m.hasNextPage&&"disabled"),children:(0,s.jsx)("a",{className:"page-link",href:"#","aria-label":"Next",onClick:()=>{m.hasNextPage&&h(e=>({...e,pageNumber:e.pageNumber+1}))},children:(0,s.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})})}),(0,s.jsx)("div",{className:"inventory-print-container",ref:b,children:(0,s.jsxs)("div",{className:"inventory-print-container",children:[(0,s.jsx)("div",{className:"print-header",children:"العملاء"}),(0,s.jsx)("div",{className:"print-table-container",children:(0,s.jsxs)("table",{className:"table table-bordered table-striped",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"اسم العميل "}),(0,s.jsx)("th",{children:"رقم التليفون"}),(0,s.jsx)("th",{children:"الايميل"}),(0,s.jsx)("th",{children:"العنوان"}),(0,s.jsx)("th",{children:"السجل التجارى"})]})}),(0,s.jsx)("tbody",{children:t.filter(e=>j.includes(e.id)).map(e=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e.name}),(0,s.jsx)("td",{children:e.phone}),(0,s.jsx)("td",{children:e.email}),(0,s.jsx)("td",{children:e.address}),(0,s.jsx)("td",{children:e.commercialRegister})]},e.id))})]})}),(0,s.jsxs)("div",{className:"print-footer",children:["\xa9 ",new Date().getFullYear()," تقرير المخزون"]})]})}),k&&(0,s.jsx)("div",{className:"modal show d-block modal-client-form-edit-add",style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},children:(0,s.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,s.jsxs)("div",{className:"modal-content",children:[(0,s.jsxs)("div",{className:"modal-header",children:[(0,s.jsx)("button",{type:"button",className:"close btn",onClick:B,children:(0,s.jsx)("i",{className:"bi bi-x-lg"})}),(0,s.jsx)("h5",{className:"modal-title",children:S?"تعديل":"إضافة عميل جديد"})]}),(0,s.jsx)("div",{className:"modal-body",children:(0,s.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),S){let e={id:C.id,name:C.name,address:C.address,email:C.email,commercialRegister:C.commercialRegister,phone:C.phone};r.Z.put("".concat(l.Z,"/Customer/UpdateCustomer?id=").concat(C.id),e).then(e=>{a(t.map(e=>e.id==C.id?C:e)),o().fire({icon:"success",title:"تم التعديل بنجاح",showConfirmButton:!1,timer:800})}).catch(e=>{o().fire({icon:"error",title:"حذث خطأ ما اثناء التعديل",showConfirmButton:!1,timer:800})})}else{let e={name:C.name,address:C.address,email:C.email,commercialRegister:C.commercialRegister,phone:C.phone};C.id=t.length+1,r.Z.post("".concat(l.Z,"/Customer/AddCustomer"),e).then(e=>{r.Z.get("".concat(l.Z,"/Customer/AllCustomers")).then(e=>{a(e.data.customers),h(e.data.pagination)}).catch(e=>{d(!0)}),o().fire({icon:"success",title:"تمت الإضافة بنجاح",showConfirmButton:!1,timer:800})}).catch(e=>{o().fire({icon:"error",title:"حدث خطأ ما اثناء الإضافة",showConfirmButton:!1,timer:800})})}B()},className:"rowa",children:[(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"name",children:"الاسم"}),(0,s.jsx)("input",{type:"text",className:"form-control",id:"name",name:"name",value:C.name,onChange:A,required:!0})]})}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"address",children:"العنوان"}),(0,s.jsx)("input",{type:"text",className:"form-control",id:"address",name:"address",value:C.address,onChange:A,required:!0})]})}),(0,s.jsx)("div",{className:"col-12 ",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"email",children:"البريد الإلكتروني"}),(0,s.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",value:C.email,onChange:A,required:!0})]})}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"commercialRegister",children:"رقم السجل التجاري"}),(0,s.jsx)("input",{type:"number",className:"form-control",id:"commercialRegister",name:"commercialRegister",value:C.commercialRegister,onChange:A,required:!0})]})}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"phone",children:"رقم الهاتف"}),(0,s.jsx)("input",{type:"number",className:"form-control",id:"phone",name:"phone",value:C.phone,onChange:A,required:!0})]})}),(0,s.jsx)("div",{className:"col-lg-12 mb-3",children:(0,s.jsx)("button",{type:"submit",className:"btn btn-primary",children:S?"تحديث":"إضافة"})})]})})]})})})]})}},1555:function(e,t,a){"use strict";a.d(t,{f:function(){return s}});let s=a(8620).Buffer.from("".concat("11190013",":").concat("60-dayfreetrial"),"utf8").toString("base64");t.Z="http://16.24.26.228:8080/api"}},function(e){e.O(0,[9461,7908,2971,8069,1744],function(){return e(e.s=2405)}),_N_E=e.O()}]);