(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[298],{2543:function(e,t,a){Promise.resolve().then(a.bind(a,25))},7907:function(e,t,a){"use strict";var s=a(5313);a.o(s,"useRouter")&&a.d(t,{useRouter:function(){return s.useRouter}})},25:function(e,t,a){"use strict";a.r(t);var s=a(3827),l=a(4090),n=a(7908),i=a(3411),r=a.n(i),c=a(7907),o=a(1555),d=a(3441),m=a.n(d);t.default=()=>{var e;let t=(0,c.useRouter)(),[a,i]=(0,l.useState)([]),[d,u]=(0,l.useState)(!1),[h,x]=(0,l.useState)({});(0,l.useEffect)(()=>{n.Z.get("".concat(o.Z,"/CustomerOrder/AllCustomerOrders")).then(e=>{i(e.data.customerOrders),x(e.data.pagination)}).catch(e=>{u(!0),r().fire({icon:"error",title:"Error fetching data",showConfirmButton:!1,timer:1500})})},[]),(0,l.useEffect)(()=>{(void 0!=h.pageNumber||null!=h.pageNumber)&&n.Z.get("".concat(o.Z,"/CustomerOrder/AllCustomerOrders?pageNumber=").concat(h.pageNumber)).then(e=>{i(e.data.customerOrders),x(e.data.pagination)}).catch(e=>{u(!0),r().fire({icon:"error",text:"حدث خطا اثناء جلب البيانات",timer:1200})})},[h.pageNumber]);let p=Math.ceil(h.total/h.pageSize),[j,g]=(0,l.useState)("");(0,l.useEffect)(()=>{for(let e=0;e<q.length;e++)j===q[e].name&&n.Z.post("".concat(o.Z,"/CustomerOrder/SearchCustomerOrders"),{status:j}).then(e=>{i(e.data)}).catch(e=>{r().fire({icon:"error",title:"لا يوجد نتائج",showConfirmButton:!1,timer:800})})},[j]),(0,l.useEffect)(()=>{""===j&&n.Z.get("".concat(o.Z,"/CustomerOrder/AllCustomerOrders")).then(e=>{i(e.data.customerOrders),x(e.data.pagination)}).catch(e=>{u(!0),r().fire({icon:"error",title:"حذث خطأ ما اثناء جلب البيانات",showConfirmButton:!1,timer:800})})},[j]);let N=e=>{r().fire({title:"هل تريد الغاء هذه الطلبية؟",icon:"warning",showCancelButton:!0,confirmButtonText:"نعم, الغاء الطلبية",cancelButtonText:"لا, الغاء الامر"}).then(t=>{t.isConfirmed&&n.Z.delete("".concat(o.Z,"/CustomerOrder/DeleteOrder?id=").concat(e)).then(t=>{i(a.filter(t=>t.id!==e)),r().fire({icon:"success",title:"تم الغاء الطلبية بنجاح",showConfirmButton:!1,timer:1e3})}).catch(e=>{r().fire({icon:"error",title:"حدث خطأ أثناء الغاء الطلبية",showConfirmButton:!1,timer:1e3})})})},[b,f]=(0,l.useState)(!1),[v,y]=(0,l.useState)(!1),[C,w]=(0,l.useState)(!1),[S,I]=(0,l.useState)([]),[q,k]=(0,l.useState)([]),[Z,D]=(0,l.useState)([]);(0,l.useEffect)(()=>{n.Z.get("".concat(o.Z,"/Status/AllStatus")).then(e=>{k(e.data)}).catch(e=>{r().fire({icon:"error",title:"خطأ...",text:"حدث خطأ أثناء تحميل البيانات"})}),n.Z.get("".concat(o.Z,"/Status/AllPriority")).then(e=>{D(e.data)}).catch(e=>{r().fire({icon:"error",title:"خطأ...",text:"حدث خطأ أثناء تحميل البيانات"})}),n.Z.get("".concat(o.Z,"/Storage/AllDepartments")).then(e=>{I(e.data)}).catch(e=>{r().fire({icon:"error",title:"خطأ...",text:"حدث خطأ أثناء تحميل البيانات"})})},[]);let[O,F]=(0,l.useState)({id:"",notes:"",date:"",time:"",name:"",email:"",categoryName:"",phone:"",status:"",relatedItems:[{id:"",name:"",quantity:"",unit:"",weight:""}]}),[B,P]=(0,l.useState)(!1),[E,A]=(0,l.useState)(!1),[z,R]=(0,l.useState)(!1),[_,L]=(0,l.useState)({}),[M,T]=(0,l.useState)(!0),[U,W]=(0,l.useState)([]),[Y,G]=(0,l.useState)(null),H=e=>{let{name:t,value:a}=e.target;G(null),"name"===t&&""!=a&&n.Z.post("".concat(o.Z,"/Customer/SearchCustomer"),{name:a}).then(e=>{T(!0),G("name"),W(e.data)}).catch(e=>{T(!1)}),F(e=>({...e,[t]:a}))},J=e=>{console.log(e),F(t=>({...t,name:e.name,email:e.email,phone:e.phone})),G(null),W([])},K=e=>{n.Z.get("".concat(o.Z,"/CustomerOrder/CustomerOrderById?id=").concat(e.id)).then(e=>{let t=e.data,a={id:t.id,notes:t.notes,time:t.time,date:t.availabilityDate.slice(0,10),name:t.name,email:t.email,categoryName:t.departmentDto.name,phone:t.phone,status:t.statusDto.name,relatedItems:t.products.map(e=>({id:e.id,name:e.name,unit:e.unit,weight:e.weight,quantity:e.quantity}))};L(e.data),F(a),f(!0),P(!0)}).catch(e=>{r().fire({icon:"error",title:"خطأ...",text:"حدث خطأ أثناء تحميل البيانات"})})},Q=()=>{F({id:"",notes:"",date:"",time:"",name:"",email:"",categoryName:"",phone:"",status:"",relatedItems:[{id:"",name:"",quantity:"",unit:"",weight:""}]}),P(!1),f(!0),R(!0)},V=()=>{f(!1),L({})},[X,$]=(0,l.useState)(null),[ee,et]=(0,l.useState)(!1),[ea,es]=(0,l.useState)([]),[el,en]=(0,l.useState)(null),[ei,er]=(0,l.useState)(!1),ec=(e,t)=>{let{name:a,value:s}=t.target;$(e),"id"==a&&(""!=s?n.Z.get("".concat(o.Z,"/Product/ProductById?id=").concat(s)).then(t=>{let l=t.data,n=O.relatedItems.map((t,n)=>n===e?{...t,[a]:s,name:l.name,unit:l.unit}:t);F(e=>({...e,relatedItems:n})),en("itemId"),er(!1)}).catch(e=>{er(!0)}):er(!1)),"name"==a&&(""!=s?n.Z.post("".concat(o.Z,"/Product/SearchProducts"),{productName:s}).then(e=>{en("name"),er(!1),es(e.data)}).catch(e=>{et(!0),es([])}):(et(!1),es([]),er(!1),en(null),en(null)));let l=O.relatedItems.map((t,l)=>l===e?{...t,[a]:s}:t);F(e=>({...e,relatedItems:l}))},eo=e=>{let t=O.relatedItems.map((t,a)=>a==X?{...t,id:e.id,name:e.name,unit:e.unit}:t);F(e=>({...e,relatedItems:t})),es([])},ed=e=>{F(t=>({...t,relatedItems:t.relatedItems.filter((t,a)=>a!==e)}))},em=()=>{y(!1),f(!1),F({id:"",notes:"",date:"",time:"",name:"",email:"",categoryName:"",phone:"",status:"",relatedItems:[{id:"",name:"",quantity:"",unit:"",weight:""}]})},[eu,eh]=(0,l.useState)({categoryName:"",status:"",relatedItems:[{id:"",name:"",quantity:"",unit:"",weight:""}]}),ex=e=>{let{name:t,value:a}=e.target;eh(e=>({...e,[t]:a}))},[ep,ej]=(0,l.useState)(null),[eg,eN]=(0,l.useState)(!1),[eb,ef]=(0,l.useState)([]),[ev,ey]=(0,l.useState)(null),eC=(e,t)=>{let{name:a,value:s}=t.target;ej(e),"id"==a&&""!=s&&n.Z.get("".concat(o.Z,"/Product/ProductById?id=").concat(s)).then(t=>{ey("id");let a=t.data,s={id:a.id,name:a.name,unit:a.unit},l=[...eu.relatedItems];l[e]=s,eh(e=>({...e,relatedItems:l}))}).catch(e=>{eN(!0),ef([])}),"name"==a&&""!=s&&n.Z.post("".concat(o.Z,"/Product/SearchProducts"),{productName:s}).then(e=>{ef(e.data),ey("name"),eN(!1)}).catch(e=>{eN(!0),ef([])});let l=[...eu.relatedItems];l[e][a]=s,eh(e=>({...e,relatedItems:l}))},ew=e=>{eh(t=>({...t,relatedItems:t.relatedItems.filter((t,a)=>a!==e)}))},eS=async e=>{e.preventDefault();let t={customerOrderId:O.id,products:eu.relatedItems.map(e=>({id:e.id,name:e.name,quantity:e.quantity,weight:e.weight,unit:e.unit})),departmentName:eu.categoryName,statusName:eu.status};n.Z.post("".concat(o.Z,"/CustomerOrder/PrepareCustomerOrder"),t).then(e=>{w(!0),F({id:O.id,notes:O.notes,availabilityDate:e.data.date,date:e.data.date,time:e.data.time,name:O.name,email:O.email,categoryName:eu.categoryName,phone:O.phone,status:eu.status,relatedItems:eu.relatedItems}),f(!0),r().fire({title:"الرجاء التأكد من البيانات",icon:"info",timer:1200})}).catch(e=>{r().fire({icon:"error",title:"حدث خطأ أثناء ارسال البيانات",showConfirmButton:!1,timer:1500})})},eI=()=>{document.querySelectorAll("#main-form-box input,select").forEach(e=>{""==e.value?(e.classList.add("border-danger"),r().fire({icon:"error",title:"الرجاء ملء جميع الحقول",showConfirmButton:!1,timer:1e3})):e.classList.remove("border-danger")});let e={id:O.id,name:O.name,availabilityDate:O.availabilityDate,departmentName:eu.categoryName,statusName:O.status,notes:O.notes,phone:O.phone,email:O.email,time:O.availabilityDate,products:O.relatedItems.map(e=>({id:e.id,name:e.name,unit:e.unit,weight:e.weight,quantity:e.quantity}))};n.Z.put("".concat(o.Z,"/CustomerOrder/UpdateCustomerOrder/").concat(e.id),e).then(e=>{r().fire({icon:"success",title:"تم ارسال البيانات بنجاح",showConfirmButton:!1,timer:1500}),f(!1),y(!1),w(!1),i([...a.filter(e=>e.id!=O.id),{id:e.data.id,name:e.data.name,availabilityDate:e.data.availabilityDate,time:e.data.time,notes:"string",phone:"0123456789",email:"a@example.com",products:[{id:2,name:"فول",unit:"كجم",weight:55,notes:null,productDatesDto:null,quantity:55,currentStock:null,totalStock:null,categoryDto:null,category:null}],statusDto:{id:null,name:e.data.statusName},departmentDto:null}]),t.push("/admin/inventory/prepared-orders")}).catch(e=>{e.response.data.includes("CustomerOrder status is not valid for")?r().fire({icon:"error",title:"خطأ...",text:"لا يمكن تعديل الطلبيات اللتى تم تسليمها او تجهيزها او الغاءها"}):r().fire({icon:"error",title:"خطأ...",text:"حدث خطأ أثناء تعديل البيانات"})})},[eq,ek]=(0,l.useState)(""),[eZ,eD]=(0,l.useState)(new Date),[eO,eF]=(0,l.useState)(!1),[eB,eP]=(0,l.useState)({date:!1,category:!1}),eE=(0,l.useRef)(null),eA=(0,l.useRef)(null),ez=e=>{eE.current&&!eE.current.contains(e.target)&&(eF(!1),eP({date:!1,category:!1}))};return(0,l.useEffect)(()=>(document.addEventListener("click",ez),()=>{document.removeEventListener("click",ez)}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"container mt-5 table table-page-storage-orders",children:[(0,s.jsxs)("div",{className:"header",children:[(0,s.jsx)("div",{className:"btn-add-item",children:(0,s.jsxs)("button",{className:"btn",onClick:()=>Q(),children:["أضافة طلبية جديدة",(0,s.jsx)("i",{className:"fa-solid fa-plus"})]})}),(0,s.jsxs)("div",{className:"search-box has-arrow",children:[(0,s.jsxs)("div",{className:"option-manu",ref:eE,children:[(0,s.jsx)("p",{children:(0,s.jsx)("button",{className:"btn btn-icon",type:"button",onClick:()=>eF(!eO),children:(0,s.jsx)("p",{className:"option-icon",children:(0,s.jsx)("i",{className:"fa-solid fa-sliders"})})})}),eO&&(0,s.jsx)("div",{className:"collapse-body",children:(0,s.jsxs)("div",{className:"card card-body",children:[(0,s.jsx)("p",{children:(0,s.jsx)("button",{className:"btn head-box",type:"button",onClick:()=>eP({...eB,date:!eB.date}),children:"التاريخ"})}),eB.date&&(0,s.jsx)("div",{className:"collapse-horizontal",children:(0,s.jsx)("div",{className:"card card-body",style:{width:"300px"},ref:eA,children:(0,s.jsx)(m(),{selected:eZ,onChange:e=>{eD(e),g("");let t=e.getMonth()+1,a=e.getDate(),s=e.getFullYear(),l="".concat(s,"-").concat(t<10?"0".concat(t):t,"-").concat(a<10?"0".concat(a):a);n.Z.post("".concat(o.Z,"/CustomerOrder/SearchCustomerOrders?date=").concat(l),{}).then(e=>{i(e.data)}).catch(e=>{r().fire({icon:"error",title:"لا يوجد نتائج",showConfirmButton:!1,timer:800})})}})})}),(0,s.jsx)("p",{children:(0,s.jsx)("button",{className:"btn head-box",type:"button",onClick:()=>eP({...eB,category:!eB.category}),children:"الحالة"})}),eB.category&&(0,s.jsx)("div",{className:"collapse-horizontal",children:(0,s.jsx)("div",{className:"card card-body",style:{width:"300px"},children:(0,s.jsx)("ul",{children:q.map((e,t)=>(0,s.jsx)("li",{onClick:()=>g(e.name),className:"option-item ".concat(j==e.name&&"active"),children:e.name},t))})})})]})})]}),(0,s.jsxs)("form",{className:"d-flex search-top-table-form",role:"search",onSubmit:e=>{e.preventDefault(),n.Z.post("".concat(o.Z,"/CustomerOrder/SearchCustomerOrders"),{status:j}).then(e=>{i(e.data)}).catch(e=>{r().fire({icon:"error",title:"لا يوجد نتائج",showConfirmButton:!1,timer:800})})},children:[(0,s.jsxs)("div",{className:"form-floating search-input",children:[(0,s.jsx)("input",{type:"text",className:"form-control",id:"floatingInput",placeholder:"ابحث هنا",onChange:e=>g(e.target.value),value:j}),(0,s.jsx)("label",{htmlFor:"floatingInput",children:"ابحث هنا ( الحالة )"})]}),(0,s.jsx)("button",{className:"btn",type:"submit",children:(0,s.jsx)("i",{className:"fa-solid fa-search"})})]}),(0,s.jsx)("div",{className:"go-back-arrow",children:(0,s.jsx)("p",{onClick:()=>{t.back()},children:(0,s.jsx)("i",{className:"fa-solid fa-chevron-right"})})})]})]}),(0,s.jsx)("div",{className:"table-contant",children:(0,s.jsxs)("table",{className:"table table-striped table-hover",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"ID"}),(0,s.jsx)("th",{children:"الحالة"}),(0,s.jsx)("th",{children:"تاريخ التوافر"}),(0,s.jsx)("th",{children:"الوقت"}),(0,s.jsx)("th",{children:"الملاحظات"}),(0,s.jsx)("th",{children:"الغاء"})]})}),(0,s.jsxs)("tbody",{children:[a.map(e=>{var t,a;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{onClick:()=>K(e),style:{cursor:"pointer"},children:e.id}),(0,s.jsx)("td",{className:"px-2 ".concat("تم الطلب"==e.statusDto.name?"status-wating":"طلب"==e.statusDto.name?"status-wating":"تم التسليم"==e.statusDto.name?"order-done-sending":"تجهيز"==e.statusDto.name?"order-done-preparing":"canseld-order"),onClick:()=>K(e),style:{cursor:"pointer"},children:e.statusDto.name}),(0,s.jsx)("td",{onClick:()=>K(e),style:{cursor:"pointer"},children:null===(t=e.availabilityDate)||void 0===t?void 0:t.slice(0,10)}),(0,s.jsx)("td",{onClick:()=>K(e),style:{cursor:"pointer"},children:null===(a=e.time)||void 0===a?void 0:a.slice(11,16)}),(0,s.jsx)("td",{style:{cursor:"pointer"},onClick:()=>{r().fire({title:"ملاحظات الطلبية",text:e.notes,icon:"info",showConfirmButton:!1,timer:3e3})},children:e.notes.length>20?e.notes.slice(0,20)+"...":e.notes}),(0,s.jsx)("td",{children:"تم التسليم"==e.statusDto.name?(0,s.jsx)("button",{className:"btn order-done-sending",children:"---"}):(0,s.jsx)("button",{className:"btn btn-danger",onClick:()=>N(e.id),children:"الغاء"})})]},e.id)}),0==a.length&&d&&(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:"8",className:"text-center",style:{color:"#ff0000",fontSize:"1.5rem",padding:"30px 0",letterSpacing:"1px"},children:"لا يوجد بيانات"})}),0==a.length&&!d&&(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:"8",className:"text-center",style:{fontSize:"1.5rem",color:"#000",padding:"30px 0",letterSpacing:"1px"},children:"الرجاء الانتظار جاري تحميل البيانات ..."})})]})]})})]}),(0,s.jsx)("div",{className:"pagination-box-inventory",children:(0,s.jsx)("nav",{"aria-label":"Page navigation example",children:(0,s.jsxs)("ul",{className:"pagination",children:[(0,s.jsx)("li",{className:"page-item ".concat(!h.hasPreviousPage&&"disabled"),children:(0,s.jsx)("a",{className:"page-link",href:"#","aria-label":"Previous",onClick:()=>{h.hasPreviousPage&&x(e=>({...e,pageNumber:e.pageNumber-1}))},children:(0,s.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),p>0&&[...Array(p).keys()].map(e=>(0,s.jsx)("li",{className:"page-item ".concat(h.pageNumber===e+1&&"active"),children:(0,s.jsx)("a",{className:"page-link",href:"#",onClick:()=>x(t=>({...t,pageNumber:e+1})),children:e+1})},e+1)),(0,s.jsx)("li",{className:"page-item ".concat(!h.hasNextPage&&"disabled"),children:(0,s.jsx)("a",{className:"page-link",href:"#","aria-label":"Next",onClick:()=>{h.hasNextPage&&x(e=>({...e,pageNumber:e.pageNumber+1}))},children:(0,s.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})})}),b&&(0,s.jsx)("div",{className:"modal show d-block",style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},children:(0,s.jsx)("div",{className:"modal-purchase-orders",children:(0,s.jsxs)("div",{className:"modal-content",children:[(0,s.jsxs)("div",{className:"modal-header",children:[(0,s.jsx)("button",{type:"button",className:"btn close",onClick:V,children:(0,s.jsx)("i",{className:"bi bi-x-lg"})}),(0,s.jsx)("h5",{className:"modal-title",children:B?"تفاصيل الطلبية":"اضافة طلبية جديدة"}),(0,s.jsx)("p",{})]}),(0,s.jsx)("div",{className:"modal-body",children:(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault();let t={name:O.name,availabilityDate:O.date,departmentName:O.categoryName,statusName:O.status,notes:O.notes,phone:O.phone,email:O.email,time:O.date,products:O.relatedItems.map(e=>({id:e.id,name:e.name,unit:e.unit,weight:e.weight,quantity:e.quantity}))};""==O.id?n.Z.post("".concat(o.Z,"/CustomerOrder/AddCustomerOrder"),t).then(e=>{f(!1),y(!0),r().fire({icon:"success",title:"تم ارسال البيانات بنجاح",showConfirmButton:!1,timer:1500}),r().fire({icon:"success",title:"الرجاء تجهيز الطلبية",showConfirmButton:!1,timer:1e3}),F({id:e.data.id,name:e.data.name,date:e.data.availabilityDate,categoryName:e.data.departmentDto.name,status:e.data.statusDto.name,notes:e.data.notes,phone:e.data.phone,email:e.data.email,relatedItems:e.data.products.map(e=>({id:e.id,name:e.name,unit:e.unit,weight:e.weight,quantity:e.quantity}))})}).catch(e=>{r().fire({icon:"error",title:"حدث خطأ أثناء ارسال البيانات",showConfirmButton:!1,timer:1500})}):(t.id=O.id,n.Z.put("".concat(o.Z,"/CustomerOrder/UpdateCustomerOrder/").concat(t.id),t).then(e=>{r().fire({icon:"success",title:"تم ارسال البيانات بنجاح",showConfirmButton:!1,timer:1500})}).catch(e=>{r().fire({icon:"error",title:"حدث خطأ أثناء ارسال البيانات",showConfirmButton:!0,timer:1500})}),f(!1),y(!0),r().fire({icon:"success",title:"الرجاء تجهيز الطلبية",showConfirmButton:!1,timer:1e3}))},className:"row",id:"main-form-box",children:[(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"id",children:"ID"}),(0,s.jsx)("input",{type:"number",className:"form-control",placeholder:B?"ID":"ID (يتم تعبئة تلقائيا)",id:"id",name:"id",value:O.id,onChange:H,required:!0,disabled:!0})]})}),(0,s.jsxs)("div",{className:"col-lg-6 col-md-12 box-name-employ-target",children:[(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"name",children:"اسم العميل"}),(0,s.jsx)("input",{type:"text",className:"form-control",id:"name",name:"name",value:O.name,onChange:H,required:!0})]}),!M&&(0,s.jsx)("div",{className:"col-12",children:(0,s.jsx)("div",{className:"alert alert-danger",role:"alert",style:{padding:"5px",fontWeight:"bold"},children:"لا يوجد عميل بهذا الاسم"})}),"name"==Y&&U.length>0&&(0,s.jsx)("ul",{children:U.map((e,t)=>(0,s.jsxs)("li",{onClick:()=>J(e),children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("p",{className:"id-box",children:"ID-"}),(0,s.jsx)("span",{}),e.id," - ",e.name]}),(0,s.jsxs)("p",{className:"email-phone",children:[(0,s.jsx)("span",{children:e.email}),(0,s.jsx)("span",{className:"seprator"}),(0,s.jsx)("span",{children:e.phone})]}),(0,s.jsx)("hr",{})]},t))})]}),(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"departmentDto",children:"القسم"}),(0,s.jsxs)("select",{className:"form-select",id:"categoryName",name:"categoryName",value:O.categoryName,onChange:H,required:!0,children:[(0,s.jsx)("option",{selected:!0,value:"",disabled:!0,children:"اختر القسم"}),S.map((e,t)=>(0,s.jsx)("option",{value:e.name,children:e.name},t))]})]})}),(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"date",children:"التاريخ"}),(0,s.jsx)("input",{type:"date",className:"form-control",id:"date",name:"date",value:null==O?void 0:O.date,onChange:H,required:!0})]})}),(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"email",children:"البريد الإلكتروني"}),(0,s.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",value:O.email,onChange:H,required:!0})]})}),(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"phone",children:"الهاتف"}),(0,s.jsx)("input",{type:"number",className:"form-control",id:"phone",name:"phone",value:O.phone,onChange:H,required:!0})]})}),(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"status",children:"الحالة"}),(0,s.jsxs)("select",{className:"form-select",id:"status",name:"status",value:O.status,onChange:H,required:!0,children:[(0,s.jsx)("option",{value:"",disabled:!0,selected:!0,children:"اختر"}),q.map((e,t)=>(0,s.jsx)("option",{value:e.name,children:e.name},t))]})]})}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"notes",children:"الملاحظات"}),(0,s.jsx)("textarea",{className:"form-control",id:"notes",name:"notes",value:O.notes,onChange:H})]})}),(0,s.jsx)("hr",{}),(0,s.jsx)("div",{className:"row",children:null===(e=O.relatedItems)||void 0===e?void 0:e.map((e,t)=>(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-lg-6 col-md-6 col-m-12",children:[(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"itemId-".concat(t),children:"معرف المنتج"}),(0,s.jsx)("input",{type:"number",className:"form-control",id:"itemId-".concat(t),name:"id",value:e.id,onChange:e=>ec(t,e),required:!0})]}),ei&&X==t&&"itemId"==el&&(0,s.jsx)("p",{style:{color:"red",fontSize:"17px"},children:"لا يوجد منتج بهذا المعرف"})]}),O.relatedItems.length>1&&(0,s.jsx)("div",{className:"col-lg-6 col-md-6 col-m-12",children:(0,s.jsx)("button",{type:"button",className:"btn btn-purches-page-del-item-prod",children:(0,s.jsx)("i",{className:"bi bi-trash",onClick:()=>ed(t)})})}),(0,s.jsxs)("div",{className:"col-lg-6 col-md-6 col-m-12 box-name-employ-target",children:[(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"name-".concat(t),children:"اسم المنتج"}),(0,s.jsx)("input",{type:"text",className:"form-control",id:"name-".concat(t),name:"name",value:e.name,onChange:e=>ec(t,e),required:!0})]}),ee&&X==t&&0==ea.length&&(0,s.jsx)("div",{className:"alert alert-danger",role:"alert",children:"لا يوجد منتج بهذا الاسم"}),ea.length>0&&"name"==el&&X==t&&(0,s.jsx)("ul",{children:ea.map((e,t)=>(0,s.jsxs)("li",{onClick:()=>eo(e),children:[e.id," - ",e.name,(0,s.jsx)("hr",{})]},t))})]}),(0,s.jsx)("div",{className:"col-lg-6 col-md-6 col-m-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"quantity-".concat(t),children:"الكمية"}),(0,s.jsx)("input",{type:"text",className:"form-control",id:"quantity-".concat(t),name:"quantity",value:e.quantity,onChange:e=>ec(t,e),required:!0})]})}),(0,s.jsx)("div",{className:"col-lg-6 col-md-6 col-m-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"unit-".concat(t),children:"الوحدة"}),(0,s.jsx)("input",{type:"text",className:"form-control",id:"unit-".concat(t),name:"unit",value:e.unit,onChange:e=>ec(t,e),required:!0})]})}),(0,s.jsx)("div",{className:"col-lg-6 col-md-6 col-m-12",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"weight-".concat(t),children:"الوزن"}),(0,s.jsx)("input",{type:"text",className:"form-control",id:"weight-".concat(t),name:"weight",value:e.weight,onChange:e=>ec(t,e),required:!0})]})}),(0,s.jsx)("hr",{})]})},t))}),"تم التسليم"==O.status||"تجهيز"==O.status||"ملغي"==O.status?null:(0,s.jsx)("div",{className:"col-12",children:(0,s.jsx)("button",{type:"button",className:"btn btn-add-realted-item",onClick:()=>{F(e=>({...e,relatedItems:[...e.relatedItems,{id:"",name:"",quantity:"",unit:"",weight:""}]}))},children:(0,s.jsx)("i",{className:"fa-solid fa-plus"})})}),C?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsx)("button",{type:"button",className:"btn btn-secondary submit-form",style:{width:"100% !important"},onClick:()=>eI(),children:"حفظ وارسال"})}),(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsx)("button",{type:"button",className:"btn submit cansel",onClick:V,children:"اغلاق"})})]}):(0,s.jsx)(s.Fragment,{children:"تم التسليم"==O.status||"تجهيز"==O.status||"ملغي"==O.status?null:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsx)("button",{type:"submit",className:"btn submit",children:"تجهيز"})}),(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsx)("button",{type:"button",className:"btn submit cansel",onClick:V,children:"الغاء"})})]})})]})})]})})}),v&&(0,s.jsx)("div",{className:"modal-prepare-new-order",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"header-box",children:[(0,s.jsx)("p",{className:"arrow-back",onClick:()=>em(),children:(0,s.jsx)("i",{className:"fa-solid fa-chevron-right"})}),(0,s.jsx)("h2",{children:"تجهيز طلبية جديدة"}),(0,s.jsx)("p",{})]}),(0,s.jsxs)("form",{onSubmit:eS,children:[(0,s.jsxs)("div",{className:"row mb-2",children:[(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsx)("label",{htmlFor:"categoryName",className:"form-label",children:"القسم"}),(0,s.jsxs)("select",{className:"form-select",id:"categoryName",name:"categoryName",value:eu.categoryName,onChange:ex,required:!0,children:[(0,s.jsx)("option",{selected:!0,value:"",disabled:!0,children:"اختر القسم"}),S.map((e,t)=>(0,s.jsx)("option",{value:e.name,children:e.name},t))]})]})}),(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsx)("label",{htmlFor:"status",className:"form-label",children:"الحالة"}),(0,s.jsxs)("select",{className:"form-select",id:"status",name:"status",value:eu.status,onChange:ex,required:!0,children:[(0,s.jsx)("option",{value:"",disabled:!0,selected:!0,children:"اختر"}),q.map((e,t)=>(0,s.jsx)("option",{value:e.name,children:e.name},t))]})]})})]}),eu.relatedItems.map((e,t)=>(0,s.jsxs)("div",{className:"row mb-4",children:[(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsx)("label",{htmlFor:"id-".concat(t),className:"form-label",children:"معرف المنتج"}),(0,s.jsx)("input",{type:"number",required:!0,className:"form-control",id:"id-".concat(t),name:"id",value:e.id,onChange:e=>eC(t,e)})]})}),(0,s.jsxs)("div",{className:"col-lg-6 col-md-12 box-name-employ-target",children:[(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsx)("label",{htmlFor:"name-".concat(t),className:"form-label",children:"اسم المنتج"}),(0,s.jsx)("input",{type:"text",required:!0,className:"form-control",id:"name-".concat(t),name:"name",value:e.name,onChange:e=>eC(t,e)})]}),eg&&(0,s.jsx)("div",{className:"alert alert-danger",role:"alert",children:"لا يوجد منتج بهذا الاسم"}),eb.length>0&&"name"==ev&&(0,s.jsx)("ul",{children:eb.map((e,t)=>(0,s.jsxs)("li",{onClick:()=>eC(ep,{target:{name:"id",value:e.id}}),children:[e.id," - ",e.name]},t))})]}),(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsx)("label",{htmlFor:"quantity-".concat(t),className:"form-label",children:"الكمية"}),(0,s.jsx)("input",{type:"number",required:!0,className:"form-control",id:"quantity-".concat(t),name:"quantity",value:e.quantity,onChange:e=>eC(t,e)})]})}),(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsx)("label",{htmlFor:"unit-".concat(t),className:"form-label",children:"الوحدة"}),(0,s.jsx)("input",{type:"text",required:!0,className:"form-control",id:"unit-".concat(t),name:"unit",value:e.unit,onChange:e=>eC(t,e)})]})}),(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsx)("label",{htmlFor:"weight-".concat(t),className:"form-label",children:"الوزن"}),(0,s.jsx)("input",{type:"text",required:!0,className:"form-control",id:"weight-".concat(t),name:"weight",value:e.weight,onChange:e=>eC(t,e)})]})}),t>0&&(0,s.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,s.jsx)("div",{className:"mb-3",children:(0,s.jsx)("button",{type:"button",className:"btn btn-del-item",onClick:()=>ew(t),children:"حذف"})})}),(0,s.jsx)("hr",{})]},t)),(0,s.jsx)("div",{className:"mb-3 text-center",children:(0,s.jsx)("button",{type:"button",className:"btn btn-add-order",onClick:()=>{eh(e=>({...e,relatedItems:[...e.relatedItems,{id:"",name:"",quantity:"",unit:"",weight:""}]}))},children:(0,s.jsx)("i",{className:"fa-solid fa-plus"})})}),(0,s.jsxs)("div",{className:"d-flex justify-content-between gap-5",children:[(0,s.jsx)("button",{type:"submit",className:"btn btn-success",children:"حفظ"}),(0,s.jsx)("button",{type:"button",className:"btn btn-del-item",onClick:()=>{y(!1),f(!1),F({id:"",notes:"",date:"",time:"",name:"",email:"",categoryName:"",phone:"",status:"",relatedItems:[{id:"",name:"",quantity:"",unit:"",weight:""}]}),eh({categoryName:"",status:"",relatedItems:[{id:"",name:"",quantity:"",unit:"",weight:""}]}),r().fire({icon:"success",title:"تم الغاء الطلبية",showConfirmButton:!1,timer:1e3})},children:"إلغاء"})]})]})]})})]})}},1555:function(e,t,a){"use strict";a.d(t,{f:function(){return s}});let s=a(8620).Buffer.from("".concat("11190013",":").concat("60-dayfreetrial"),"utf8").toString("base64");t.Z="http://16.24.26.228:8080/api"}},function(e){e.O(0,[9461,1544,1778,7908,1564,2971,8069,1744],function(){return e(e.s=2543)}),_N_E=e.O()}]);