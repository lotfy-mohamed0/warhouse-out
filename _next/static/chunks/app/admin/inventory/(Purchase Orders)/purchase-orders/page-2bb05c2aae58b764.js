(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7182],{8807:function(e,a,t){Promise.resolve().then(t.bind(t,3611))},3611:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return m}});var s=t(3827),l=t(4090);t(2798);var n=t(3441),r=t.n(n),i=t(3411),c=t.n(i),d=t(7908),o=t(1555);function m(){let[e,a]=(0,l.useState)([]),[t,n]=(0,l.useState)(!1),[i,m]=(0,l.useState)({});(0,l.useEffect)(()=>{d.Z.get("".concat(o.Z,"/PurchaseOrder/AllPurchaseOrders")).then(e=>{a(e.data.purchaseOrders),m(e.data.pagination)}).catch(e=>{n(!0),c().fire({icon:"error",title:"خطأ...",text:"حدث خطأ أثناء تحميل البيانات"})})},[]),(0,l.useEffect)(()=>{(void 0!=i.pageNumber||null!=i.pageNumber)&&d.Z.get("".concat(o.Z,"/PurchaseOrder/AllPurchaseOrders?pageNumber=").concat(i.pageNumber)).then(e=>{a(e.data.purchaseOrders),m({pageNumber:e.data.pagination.pageNumber,pageSize:e.data.pagination.pageSize,total:e.data.pagination.total,hasNextPage:e.data.pagination.hasNextPage,hasPreviousPage:e.data.pagination.hasPreviousPage})}).catch(e=>{n(!0),c().fire({icon:"error",text:"حدث خطا اثناء جلب البيانات",timer:1200})})},[i.pageNumber]);let h=Math.ceil(i.total/i.pageSize),[u,x]=(0,l.useState)("");(0,l.useEffect)(()=>{""===u&&d.Z.get("".concat(o.Z,"/PurchaseOrder/AllPurchaseOrders")).then(e=>{a(e.data.purchaseOrders)}).catch(e=>{n(!0),c().fire({icon:"error",title:"حذث خطأ ما اثناء جلب البيانات",showConfirmButton:!1,timer:800})})},[u]);let[p,j]=(0,l.useState)([]),[g,N]=(0,l.useState)(!1),f=(0,l.useRef)(),b=e=>{g&&(N(!1),j(p.filter(a=>a!==e))),p.includes(e)?j(p.filter(a=>a!==e)):j([...p,e])},v=t=>{d.Z.delete("".concat(o.Z,"/PurchaseOrder/Delete?id=").concat(t)).then(s=>{c().fire({icon:"success",title:"نم حذف العنصر بنجاح",showConfirmButton:!1,timer:800}),a(e.filter(e=>e.id!==t))}).catch(e=>{c().fire({icon:"error",title:"خطا اثناء الحذف"})})};(0,l.useEffect)(()=>{var e=document.getElementById("selectAll-input");e.checked&&(e.checked=!1),document.querySelectorAll("#checkbox-item").forEach(e=>{e.checked&&(e.checked=!1)})},[e]);let[y,P]=(0,l.useState)([]),[I,S]=(0,l.useState)([]),[C,k]=(0,l.useState)([]);(0,l.useEffect)(()=>{d.Z.get("".concat(o.Z,"/Status/AllStatus")).then(e=>{S(e.data)}).catch(e=>{c().fire({icon:"error",title:"خطأ...",text:"حدث خطأ أثناء تحميل البيانات"})}),d.Z.get("".concat(o.Z,"/Status/AllPriority")).then(e=>{k(e.data)}).catch(e=>{c().fire({icon:"error",title:"خطأ...",text:"حدث خطأ أثناء تحميل البيانات"})}),d.Z.get("".concat(o.Z,"/Storage/AllDepartments")).then(e=>{P(e.data)}).catch(e=>{c().fire({icon:"error",title:"خطأ...",text:"حدث خطأ أثناء تحميل البيانات"})})},[]);let[w,Z]=(0,l.useState)({id:"",notes:"",date:"",Name:"",Email:"",CategoryName:"",Phone:"",Status:"",Priority:"",relatedItems:[{ItemId:"",name:"",quantity:"",unit:"",weight:"",notes:""}]}),[q,E]=(0,l.useState)(!1),[O,D]=(0,l.useState)(!1),[F,A]=(0,l.useState)(!1),[B,z]=(0,l.useState)(!1),[L,M]=(0,l.useState)(!1),[T,_]=(0,l.useState)(!1),[H,R]=(0,l.useState)(!0),[Y,U]=(0,l.useState)([]),[W,G]=(0,l.useState)(null),J=e=>{let{name:a,value:t}=e.target;G(null),"Name"===a&&""!=t&&d.Z.post("".concat(o.Z,"/Supplier/SearchSupplier?name=").concat(t)).then(e=>{R(!0),G("Name"),U(e.data)}).catch(e=>{R(!1)}),Z(e=>({...e,[a]:t}))},K=e=>{Z(a=>({...a,Name:e.name,Email:e.email,Phone:e.phone})),G(null),U([])},Q=e=>{z(!1),D(!1),d.Z.get("".concat(o.Z,"/PurchaseOrder/PurchaseOrderById?id=").concat(e)).then(e=>{Z({id:e.data.id,notes:e.data.notes,date:e.data.date.slice(0,10),Name:e.data.name,Email:e.data.email,Phone:e.data.phone,Status:e.data.statusDto.name,Priority:e.data.priorityDto.name,refrenceId:e.data.refrenceId,CategoryName:e.data.departmentDto.name,relatedItems:e.data.products.map(e=>({ItemId:e.productId,name:e.productName,quantity:e.quantity,unit:e.unit,weight:e.weight,notes:e.notes}))}),M(!0),E(!0)}).catch(e=>{c().fire({icon:"error",title:"خطأ...",text:"حدث خطأ أثناء تحميل البيانات"})})},V=e=>{d.Z.get("".concat(o.Z,"/PurchaseOrder/PurchaseOrderById?id=").concat(e)).then(e=>{Z({id:e.data.id,notes:e.data.notes,date:e.data.date.slice(0,10),Name:e.data.name,Email:e.data.email,Phone:e.data.phone,Status:e.data.statusDto.name,Priority:e.data.priorityDto.name,refrenceId:e.data.refrenceId,CategoryName:e.data.departmentDto.name,relatedItems:e.data.products.map(e=>({ItemId:e.productId,name:e.productName,quantity:e.quantity,unit:e.unit,weight:e.weight,notes:e.notes}))}),D(!0),E(!0),z(!1),M(!1)}).catch(e=>{c().fire({icon:"error",title:"خطأ...",text:"حدث خطأ أثناء تحميل البيانات"})})},X=()=>{D(!1),E(!1),Z({id:"",notes:"",date:"",Name:"",Email:"",Phone:"",Status:"",Priority:"",refrenceId:"",CategoryName:"",relatedItems:[{ItemId:"",name:"",quantity:"",unit:"",weight:"",notes:""}]})},$=(e,a)=>{let{name:t,value:s}=a.target;if("ItemId"===t){if(""!=s)d.Z.get("".concat(o.Z,"/Product/ProductById?id=").concat(s)).then(a=>{let l=w.relatedItems.map((l,n)=>n===e?{...l,[t]:s,name:a.data.name,unit:a.data.unit}:l);Z(e=>({...e,relatedItems:l})),_(!1)}).catch(a=>{let l=w.relatedItems.map((a,l)=>l===e?{...a,[t]:s}:a);Z(e=>({...e,relatedItems:l})),_(!0)});else{let a=w.relatedItems.map((a,l)=>l===e?{...a,[t]:s}:a);Z(e=>({...e,relatedItems:a}))}}else{let a=w.relatedItems.map((a,l)=>l===e?{...a,[t]:s}:a);Z(e=>({...e,relatedItems:a}))}},ee=e=>{Z(a=>({...a,relatedItems:a.relatedItems.filter((a,t)=>t!==e)}))},[ea,et]=(0,l.useState)(new Date),[es,el]=(0,l.useState)(!1),[en,er]=(0,l.useState)({date:!1,category:!1}),ei=(0,l.useRef)(null),ec=(0,l.useRef)(null),ed=e=>{ei.current&&!ei.current.contains(e.target)&&ec.current&&!ec.current.contains(e.target)&&(el(!1),er({date:!1,category:!1}))};return(0,l.useEffect)(()=>(document.addEventListener("click",ed),()=>{document.removeEventListener("click",ed)}),[]),(0,s.jsxs)("div",{className:"table",children:[(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"header",children:[(0,s.jsxs)("div",{className:"head-box",children:[(0,s.jsx)("div",{className:"add-head",children:(0,s.jsx)("p",{onClick:()=>{E(!0),z(!0)},className:"add-item",children:"إضافة طلبية جديد"})}),(0,s.jsx)("div",{className:"add-head-print",onClick:()=>{if(0===p.length){c().fire({icon:"warning",title:"الرجاء تحديد عناصر للطباعة",showConfirmButton:!1,timer:1200});return}{let e=f.current.innerHTML,a=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=a,window.location.reload()}},children:(0,s.jsx)("p",{className:"print-icon",children:(0,s.jsx)("i",{className:"fa-solid fa-print"})})})]}),(0,s.jsxs)("div",{className:"search-box has-arrow",children:[(0,s.jsxs)("div",{className:"option-manu",ref:ei,children:[(0,s.jsx)("p",{children:(0,s.jsx)("button",{className:"btn btn-icon",type:"button",onClick:()=>el(!es),children:(0,s.jsx)("p",{className:"option-icon",children:(0,s.jsx)("i",{className:"fa-solid fa-sliders"})})})}),es&&(0,s.jsx)("div",{className:"collapse-body",children:(0,s.jsxs)("div",{className:"card card-body",children:[(0,s.jsx)("p",{children:(0,s.jsx)("button",{className:"btn head-box",type:"button",onClick:()=>er({...en,date:!en.date}),children:"التاريخ"})}),en.date&&(0,s.jsx)("div",{className:"collapse-horizontal",children:(0,s.jsx)("div",{className:"card card-body",style:{width:"300px"},ref:ec,children:(0,s.jsx)(r(),{selected:ea,onChange:e=>{et(e),x("");let t=e.getMonth()+1,s=e.getDate(),l=e.getFullYear(),n="".concat(l,"-").concat(t<10?"0".concat(t):t,"-").concat(s<10?"0".concat(s):s);d.Z.post("".concat(o.Z,"/PurchaseOrder/SearchPurchaseOrders"),{date:"".concat(n,"T00:00:00Z")}).then(e=>{a(e.data)}).catch(e=>{c().fire({icon:"error",title:"لا يوجد نتائج",showConfirmButton:!1,timer:800})})}})})})]})})]}),(0,s.jsxs)("form",{className:"d-flex search-top-table-form",role:"search",onSubmit:e=>{e.preventDefault(),d.Z.post("".concat(o.Z,"/PurchaseOrder/SearchPurchaseOrders"),{status:u}).then(e=>{a(e.data)}).catch(e=>{c().fire({icon:"error",title:"لا يوجد نتائج",showConfirmButton:!1,timer:800})})},children:[(0,s.jsxs)("div",{className:"form-floating search-input",children:[(0,s.jsx)("input",{type:"text",className:"form-control",id:"floatingInput",placeholder:"ابحث هنا",onChange:e=>x(e.target.value),value:u}),(0,s.jsx)("label",{htmlFor:"floatingInput",children:"ابحث هنا"})]}),(0,s.jsx)("button",{className:"btn",type:"submit",children:(0,s.jsx)("i",{className:"fa-solid fa-search"})})]}),(0,s.jsx)("div",{className:"go-back-arrow",children:(0,s.jsx)("p",{onClick:()=>{router.back()},children:(0,s.jsx)("i",{className:"fa-solid fa-chevron-right"})})})]})]}),(0,s.jsx)("div",{className:"table-contant",children:(0,s.jsxs)("table",{className:"table table-striped table-hover",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{id:"head-Of-table",children:[(0,s.jsx)("th",{type:"hide",children:(0,s.jsx)("input",{type:"checkbox",checked:g,style:{cursor:"pointer"},onChange:()=>{let a=document.querySelectorAll("#checkbox-item");g?(j([]),a.forEach(e=>{e.checked=!1})):(a.forEach(e=>{e.checked=!0}),j(e.map(e=>e.id))),N(!g)},id:"selectAll-input"})}),(0,s.jsx)("th",{scope:"col",type:"id",text:"ID",value:"id",children:"ID"}),(0,s.jsx)("th",{scope:"col",children:"الحالة"}),(0,s.jsx)("th",{scope:"col",children:"تاريخ التوافر"}),(0,s.jsx)("th",{scope:"col",children:"الملاحظات"}),(0,s.jsx)("th",{scope:"col",children:"تعديل"}),(0,s.jsx)("th",{scope:"col",children:"حذف"})]})}),(0,s.jsxs)("tbody",{children:[e.map(e=>{var a;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{scope:"row",children:(0,s.jsx)("div",{className:"check-box",children:(0,s.jsx)("input",{type:"checkbox",style:{cursor:"pointer"},id:"checkbox-item",checked:p.includes(e.id),onChange:a=>b(e.id,a)})})}),(0,s.jsx)("th",{scope:"row",style:{cursor:"pointer"},onClick:()=>Q(e.id),children:(0,s.jsx)("div",{className:"check-box",children:(0,s.jsx)("p",{className:"item-id",children:e.id})})}),(0,s.jsx)("td",{style:{cursor:"pointer"},className:"px-2 ".concat("طلب"==e.statusDto.name?"status-wating":"طلب"==e.statusDto.name?"status-wating":"تم التسليم"==e.statusDto.name?"order-done-sending":"تجهيز"==e.statusDto.name?"order-done-preparing":"canseld-order"),onClick:()=>Q(e.id),children:e.statusDto.name}),(0,s.jsx)("td",{className:"px-2",style:{cursor:"pointer"},onClick:()=>Q(e.id),children:e.date.slice(0,10)}),(0,s.jsx)("td",{className:"px-2",style:{cursor:"pointer"},children:(0,s.jsx)("p",{onClick:a=>{var t;return t=e.notes,void c().fire({title:"الملاحظات",text:t,icon:"info",confirmButtonText:"حسنا"})},value:e.notes,children:e.notes.length>10?(null===(a=e.notes)||void 0===a?void 0:a.slice(0,40))+"...":e.notes})}),"تم الطلب"==e.statusDto.name||"طلب"==e.statusDto.name?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("td",{className:"pen icon",style:{cursor:"pointer"},children:(0,s.jsx)("i",{className:"fa-regular fa-pen-to-square",onClick:()=>V(e.id)})}),(0,s.jsx)("td",{className:"trash icon",style:{cursor:"pointer"},children:(0,s.jsx)("i",{className:"fa-regular fa-trash-can",onClick:()=>v(e.id)})})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("td",{className:"ban-icon icon",children:(0,s.jsx)("i",{className:"fa-solid fa-ban"})}),(0,s.jsx)("td",{className:"ban-icon icon",children:(0,s.jsx)("i",{className:"fa-solid fa-ban"})})]})]},e.id)}),0==e.length&&t&&(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:"8",className:"text-center",style:{color:"#ff0000",fontSize:"1.5rem",padding:"30px 0",letterSpacing:"1px"},children:"لا يوجد بيانات"})}),0==e.length&&!t&&(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:"8",className:"text-center",style:{fontSize:"1.5rem",color:"#000",padding:"30px 0",letterSpacing:"1px"},children:"الرجاء الانتظار جاري تحميل البيانات ..."})})]})]})})]}),(0,s.jsx)("div",{className:"pagination-box-inventory",children:(0,s.jsx)("nav",{"aria-label":"Page navigation example",children:(0,s.jsxs)("ul",{className:"pagination",children:[(0,s.jsx)("li",{className:"page-item ".concat(!i.hasPreviousPage&&"disabled"),children:(0,s.jsx)("a",{className:"page-link",href:"#","aria-label":"Previous",onClick:()=>{i.hasPreviousPage&&m(e=>({...e,pageNumber:e.pageNumber-1}))},children:(0,s.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),h>0&&[...Array(h).keys()].map(e=>(0,s.jsx)("li",{className:"page-item ".concat(i.pageNumber===e+1&&"active"),children:(0,s.jsx)("a",{className:"page-link",href:"#",onClick:()=>m(a=>({...a,pageNumber:e+1})),children:e+1})},e+1)),(0,s.jsx)("li",{className:"page-item ".concat(!i.hasNextPage&&"disabled"),children:(0,s.jsx)("a",{className:"page-link",href:"#","aria-label":"Next",onClick:()=>{i.hasNextPage&&m(e=>({...e,pageNumber:e.pageNumber+1}))},children:(0,s.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})})}),(0,s.jsx)("div",{className:"inventory-print-container",ref:f,children:(0,s.jsxs)("div",{className:"inventory-print-container",children:[(0,s.jsx)("div",{className:"print-header",children:"طلبيات من المشتريات"}),(0,s.jsx)("div",{className:"print-table-container",children:(0,s.jsxs)("table",{className:"table table-bordered table-striped",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"ID"}),(0,s.jsx)("th",{scope:"col",children:"الحالة"}),(0,s.jsx)("th",{scope:"col",children:"تاريخ التوافر"}),(0,s.jsx)("th",{scope:"col",children:"الملاحظات"})]})}),(0,s.jsx)("tbody",{children:e.filter(e=>p.includes(e.id)).map(e=>{var a;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e.id}),(0,s.jsx)("td",{children:e.statusDto.name}),(0,s.jsx)("td",{children:e.date.slice(0,10)}),(0,s.jsx)("td",{children:e.notes.length>10?(null===(a=e.notes)||void 0===a?void 0:a.slice(0,40))+"...":e.notes})]},e.id)})})]})}),(0,s.jsxs)("div",{className:"print-footer",children:["\xa9 ",new Date().getFullYear()," تقرير المخزون"]})]})}),q&&(0,s.jsx)("div",{className:"modal show d-block",style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},children:(0,s.jsx)("div",{className:"modal-purchase-orders",children:(0,s.jsxs)("div",{className:"modal-content",children:[(0,s.jsxs)("div",{className:"modal-header",children:[(0,s.jsx)("button",{type:"button",className:"btn close",onClick:X,children:(0,s.jsx)("i",{className:"bi bi-x-lg"})}),(0,s.jsxs)("h5",{className:"modal-title",children:[O?"تعديل طلبية":null,L?"تفاصيل الطلبية":null,B?"إضافة طلبية":null]}),(0,s.jsx)("p",{})]}),(0,s.jsx)("div",{className:"modal-body",children:(0,s.jsxs)("form",{onSubmit:t=>{if(t.preventDefault(),O){let t={id:w.id,name:w.Name,date:w.date,notes:w.notes,email:w.Email,phone:w.Phone,departmentName:w.CategoryName,products:w.relatedItems.map(e=>({id:e.ItemId,name:e.name,unit:e.unit,weight:e.weight,quantity:e.quantity,notes:e.notes})),priorityName:w.Priority,statusName:w.Status};d.Z.put("".concat(o.Z,"/PurchaseOrder/UpdatePurchaseOrder/").concat(w.id),t).then(t=>{c().fire({icon:"success",title:"تمت العملية بنجاح",showConfirmButton:!1,timer:800}),a(e.map(e=>e.id===w.id?t.data:e)),X()}).catch(e=>{c().fire({icon:"error",title:"خطأ...",timer:800})})}else{let e={name:w.Name,date:w.date,notes:w.notes,email:w.Email,phone:w.Phone,departmentName:w.CategoryName,products:w.relatedItems.map(e=>({id:e.ItemId,name:e.name,unit:e.unit,weight:e.weight,quantity:e.quantity,notes:e.notes})),priorityName:w.Priority,statusName:w.Status};d.Z.post("".concat(o.Z,"/PurchaseOrder/AddPurchaseOrder"),e).then(e=>{c().fire({icon:"success",title:"تمت العملية بنجاح",showConfirmButton:!1,timer:800}),X(),d.Z.get("".concat(o.Z,"/PurchaseOrder/AllPurchaseOrders")).then(e=>{a(e.data.purchaseOrders),m({pageNumber:e.data.pagination.pageNumber,pageSize:e.data.pagination.pageSize,total:e.data.pagination.total,hasNextPage:e.data.pagination.hasNextPage,hasPreviousPage:e.data.pagination.hasPreviousPage})})}).catch(e=>{c().fire({icon:"error",title:"خطأ...",text:"حدث خطأ أثناء تحميل البيانات"})})}},className:"row",children:[O&&(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"id",children:"ID"}),(0,s.jsx)("input",{type:"text",className:"form-control",id:"id",name:"id",value:w.id,onChange:J,required:!0,disabled:!0})]})}),(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"CategoryName",children:"القسم"}),(0,s.jsxs)("select",{className:"form-select",id:"CategoryName",name:"CategoryName",value:w.CategoryName,onChange:J,required:!0,disabled:!B&&!O,children:[(0,s.jsx)("option",{selected:!0,value:"",disabled:!0,children:"اختر القسم"}),y.map((e,a)=>(0,s.jsx)("option",{value:e.name,children:e.name},a))]})]})}),(0,s.jsxs)("div",{className:"col-lg-6 col-md-12 box-name-employ-target",children:[(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"Name",children:"اسم المورد"}),(0,s.jsx)("input",{type:"text",className:"form-control",id:"Name",name:"Name",value:w.Name,onChange:J,required:!0,disabled:!B&&!O})]}),!H&&(0,s.jsx)("div",{className:"col-12",children:(0,s.jsx)("div",{className:"alert alert-danger",role:"alert",style:{padding:"5px",fontWeight:"bold"},children:"لا يوجد مورد بهذا الاسم"})}),"Name"==W&&Y.length>0&&(0,s.jsx)("ul",{children:Y.map((e,a)=>(0,s.jsxs)("li",{onClick:()=>K(e),children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("p",{className:"id-box",children:"ID-"}),(0,s.jsx)("span",{}),e.id," - ",e.name]}),(0,s.jsxs)("p",{className:"email-phone",children:[(0,s.jsx)("span",{children:e.email}),(0,s.jsx)("span",{className:"seprator"}),(0,s.jsx)("span",{children:e.phone})]}),(0,s.jsx)("hr",{})]},a))})]}),(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"Email",children:"البريد الإلكتروني"}),(0,s.jsx)("input",{type:"email",className:"form-control",id:"Email",name:"Email",value:w.Email,onChange:J,required:!0,disabled:!B&&!O})]})}),(0,s.jsxs)("div",{className:"col-lg-6 col-md-12",children:[(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"Phone",children:"الهاتف"}),(0,s.jsx)("input",{type:"number",className:"form-control",id:"Phone",name:"Phone",value:w.Phone,onChange:J,required:!0,disabled:!B&&!O})]}),"Phone"==W&&targertEmployee.length>0&&(0,s.jsx)("ul",{children:targertEmployee.map((e,a)=>(0,s.jsxs)("li",{onClick:()=>handleSelectedEmploy(e),children:[e.id," - ",e.name]},a))})]}),(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"date",children:"التاريخ"}),(0,s.jsx)("input",{type:"date",className:"form-control",id:"date",name:"date",value:w.date,onChange:J,required:!0,disabled:!B&&!O})]})}),(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"Status",children:"الحالة"}),(0,s.jsxs)("select",{className:"form-select",id:"Status",name:"Status",value:w.Status,onChange:J,required:!0,disabled:!B&&!O,children:[(0,s.jsx)("option",{value:"",selected:!0,disabled:!0,children:"اختر"}),I.map((e,a)=>(0,s.jsx)("option",{value:e.name,children:e.name},a))]})]})}),(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"Priority",children:"الأولوية"}),(0,s.jsxs)("select",{className:"form-select",id:"Priority",name:"Priority",value:w.Priority,onChange:J,required:!0,disabled:!B&&!O,children:[(0,s.jsx)("option",{value:"",selected:!0,disabled:!0,children:"اختر"}),C.map((e,a)=>(0,s.jsx)("option",{value:e.name,children:e.name},a))]})]})}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"notes",children:"الملاحظات"}),(0,s.jsx)("textarea",{className:"form-control",id:"notes",name:"notes",value:w.notes,onChange:J,disabled:!B&&!O})]})}),(0,s.jsx)("hr",{}),(0,s.jsx)("div",{className:"row",children:w.relatedItems.map((e,a)=>(0,s.jsxs)("div",{className:"col-lg-6 col-md-12",children:[(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-lg-6 col-md-6 col-m-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"ItemId-".concat(a),children:"معرف المنتج"}),(0,s.jsx)("input",{type:"number",className:"form-control ".concat(T&&e.ItemId.length>0?"is-invalid":""),id:"ItemId-".concat(a),name:"ItemId",value:e.ItemId,onChange:e=>$(a,e),required:!0,disabled:!B&&!O}),T&&(0,s.jsxs)("div",{id:"validationServer03Feedback",class:"invalid-feedback",children:["لا يوجد منتج بهذا المعرف ",e.ItemId]})]})}),w.relatedItems.length>1&&!L&&(0,s.jsx)("div",{className:"col-lg-6 col-md-6 col-m-12",children:(0,s.jsx)("button",{type:"button",className:"btn btn-purches-page-del-item-prod",children:(0,s.jsx)("i",{className:"bi bi-trash",onClick:()=>ee(a)})})}),(0,s.jsx)("div",{className:"col-lg-6 col-md-6 col-m-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"name-".concat(a),children:"اسم المنتج"}),(0,s.jsx)("input",{type:"text",className:"form-control",id:"name-".concat(a),name:"name",value:e.name,onChange:e=>$(a,e),required:!0,disabled:!B&&!O})]})}),(0,s.jsx)("div",{className:"col-lg-6 col-md-6 col-m-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"quantity-".concat(a),children:"الكمية"}),(0,s.jsx)("input",{type:"number",className:"form-control",id:"quantity-".concat(a),name:"quantity",value:e.quantity,onChange:e=>$(a,e),required:!0,disabled:!B&&!O})]})}),(0,s.jsx)("div",{className:"col-lg-6 col-md-6 col-m-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"unit-".concat(a),children:"الوحدة"}),(0,s.jsx)("input",{type:"text",className:"form-control",id:"unit-".concat(a),name:"unit",value:e.unit,onChange:e=>$(a,e),required:!0,disabled:!B&&!O})]})}),(0,s.jsx)("div",{className:"col-lg-6 col-md-6 col-m-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"weight-".concat(a),children:"الوزن"}),(0,s.jsx)("input",{type:"number",className:"form-control",id:"weight-".concat(a),name:"weight",value:e.weight,onChange:e=>$(a,e),required:!0,disabled:!B&&!O})]})}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"notes-".concat(a),children:"ملاحظة"}),(0,s.jsx)("textarea",{className:"form-control",id:"notes-".concat(a),name:"notes",value:e.notes,onChange:e=>$(a,e),disabled:!B&&!O})]})})]}),(0,s.jsx)("hr",{})]},a))}),B||O?(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-lg-6 col-sm-12",children:(0,s.jsx)("button",{type:"button",className:"btn submit",onClick:()=>{Z(e=>({...e,relatedItems:[...e.relatedItems,{ItemId:"",name:"",quantity:"",unit:"",weight:"",notes:""}]}))},children:(0,s.jsx)("i",{className:"fa-solid fa-plus"})})}),(0,s.jsx)("div",{className:"col-lg-6 col-sm-12",children:(0,s.jsx)("button",{type:"submit",className:"btn submit",children:"إرسال"})})]}):null]})})]})})})]})}},2798:function(){},1555:function(e,a,t){"use strict";t.d(a,{f:function(){return s}});let s=t(8620).Buffer.from("".concat("11190013",":").concat("60-dayfreetrial"),"utf8").toString("base64");a.Z="http://16.24.26.228:8080/api"}},function(e){e.O(0,[9461,1544,1778,7908,1564,9117,2971,8069,1744],function(){return e(e.s=8807)}),_N_E=e.O()}]);