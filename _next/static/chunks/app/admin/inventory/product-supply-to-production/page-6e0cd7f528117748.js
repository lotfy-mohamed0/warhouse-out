(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2015],{9e3:function(e,t,a){Promise.resolve().then(a.bind(a,3570))},7907:function(e,t,a){"use strict";var n=a(5313);a.o(n,"useRouter")&&a.d(t,{useRouter:function(){return n.useRouter}})},3570:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var n=a(3827),l=a(4090),i=a(3411),c=a.n(i),r=a(7907),s=a(7908),o=a(3441),d=a.n(o),u=a(1555),h=()=>{let e=(0,r.useRouter)(),[t,a]=(0,l.useState)([]),[i,o]=(0,l.useState)(!1),[h,x]=(0,l.useState)([]),[m,p]=(0,l.useState)(""),[b,j]=(0,l.useState)({});(0,l.useEffect)(()=>{""===m&&s.Z.get("".concat(u.Z,"/Bill/GetSupplyFormForProduction")).then(e=>{a(e.data.productionBills),j(e.data.pagination),x([])}).catch(e=>{o(!0),c().fire({icon:"error",title:"حذث خطأ ما اثناء جلب البيانات",showConfirmButton:!1,timer:800})})},[m]),(0,l.useEffect)(()=>{s.Z.get("".concat(u.Z,"/Bill/GetSupplyFormForProduction")).then(e=>{a(e.data.productionBills),j(e.data.pagination),x([])}).catch(e=>{o(!0),c().fire("خطأ","حدث خطأ أثناء جلب البيانات","error")})},[]);let f=e=>{c().fire({title:"ملاحظات",text:e,showCancelButton:!1,showConfirmButton:!1,showCloseButton:!0})};(0,l.useEffect)(()=>{(void 0!=b.pageNumber||null!=b.pageNumber)&&s.Z.get("".concat(u.Z,"/Bill/GetSupplyFormForProduction?pageNumber=").concat(b.pageNumber)).then(e=>{a(e.data.productionBills),j(e.data.pagination)}).catch(e=>{o(!0),c().fire({icon:"error",text:"حدث خطا اثناء جلب البيانات",timer:1200})})},[b.pageNumber]);let v=Math.ceil(b.total/b.pageSize),[g,N]=(0,l.useState)(new Date),[y,k]=(0,l.useState)(!1),[w,S]=(0,l.useState)({date:!1,category:!1}),C=(0,l.useRef)(null),B=(0,l.useRef)(null),P=e=>{C.current&&!C.current.contains(e.target)&&B.current&&!B.current.contains(e.target)&&(k(!1),S({date:!1,category:!1}))};(0,l.useEffect)(()=>(document.addEventListener("click",P),()=>{document.removeEventListener("click",P)}),[]);let[Z,F]=(0,l.useState)([]),[D,E]=(0,l.useState)(!1),M=(0,l.useRef)(),R=e=>{D&&(E(!1),F(Z.filter(t=>t!==e))),Z.includes(e)?F(Z.filter(t=>t!==e)):F([...Z,e])},L=[{value:"01",label:"يناير"},{value:"02",label:"فبراير"},{value:"03",label:"مارس"},{value:"04",label:"إبريل"},{value:"05",label:"مايو"},{value:"06",label:"يونيو"},{value:"07",label:"يوليو"},{value:"08",label:"أغسطس"},{value:"09",label:"سبتمبر"},{value:"10",label:"أكتوبر"},{value:"11",label:"نوفمبر"},{value:"12",label:"ديسمبر"}],[_,I]=(0,l.useState)(null),[Y,G]=(0,l.useState)(new Date);return(0,n.jsxs)("div",{className:"container mt-5 product-supply-to-sales",children:[(0,n.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-3 header-box",children:[(0,n.jsxs)("div",{className:"d-flex",children:[(0,n.jsx)("button",{onClick:()=>e.back(),className:"btn",children:(0,n.jsx)("i",{className:"fas fa-arrow-right"})}),(0,n.jsxs)("div",{className:"search-box has-arrow",children:[(0,n.jsxs)("form",{className:"d-flex search-top-table-form",role:"search",onSubmit:e=>{e.preventDefault(),s.Z.get("".concat(u.Z,"/Bill/SearchProductionBills?date=").concat(m)).then(e=>{a(e.data),x([])}).catch(e=>{c().fire({icon:"error",title:"لا يوجد نتائج",showConfirmButton:!1,timer:800})})},children:[(0,n.jsx)("button",{className:"btn",type:"submit",children:(0,n.jsx)("i",{className:"fa-solid fa-search"})}),(0,n.jsxs)("div",{className:"form-floating search-input",children:[(0,n.jsx)("input",{type:"text",className:"form-control",id:"floatingInput",placeholder:"ابحث هنا",onChange:e=>p(e.target.value),value:m}),(0,n.jsx)("label",{htmlFor:"floatingInput",children:"ابحث هنا ( التاريخ )"})]})]}),(0,n.jsxs)("div",{className:"option-manu",ref:C,children:[(0,n.jsx)("p",{children:(0,n.jsx)("button",{className:"btn btn-icon",type:"button",onClick:()=>k(!y),children:(0,n.jsx)("p",{className:"option-icon",children:(0,n.jsx)("i",{className:"fa-solid fa-sliders"})})})}),y&&(0,n.jsx)("div",{className:"collapse-body",children:(0,n.jsxs)("div",{className:"card card-body",children:[(0,n.jsx)("p",{children:(0,n.jsx)("button",{className:"btn head-box",type:"button",onClick:()=>S({...w,date:!w.date}),children:"التاريخ"})}),w.date&&(0,n.jsx)("div",{className:"collapse-horizontal",children:(0,n.jsx)("div",{className:"card card-body",style:{width:"300px"},ref:B,children:(0,n.jsx)(d(),{selected:g,onChange:e=>{N(e);let t=new Date(e),n="".concat(t.getFullYear(),"-").concat(t.getMonth()+1<=9?"0".concat(t.getMonth()+1):"".concat(t.getMonth()+1),"-").concat(t.getDate());s.Z.get("".concat(u.Z,"/Bill/SearchProductionBills?date=").concat(n)).then(e=>{a(e.data)}).catch(e=>{o(!0),c().fire({icon:"error",text:"حدث خطا اثناء جلب البيانات",timer:1200})})}})})})]})})]})]})]}),(0,n.jsx)("div",{className:"print-box",children:(0,n.jsx)("p",{onClick:()=>{if(0===Z.length){c().fire({icon:"warning",title:"الرجاء تحديد عناصر للطباعة",showConfirmButton:!1,timer:1200});return}{let e=M.current.innerHTML,t=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=t,window.location.reload()}},children:(0,n.jsx)("i",{className:"bi bi-printer"})})})]}),(0,n.jsx)("div",{className:"d-flex justify-content-start box-data-user",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{className:"d-flex justify-content-start box-data-user",children:[(0,n.jsx)("div",{className:"info-item",children:(0,n.jsxs)("select",{onChange:e=>I(L.find(t=>t.value===e.target.value)),value:_?_.value:"",children:[(0,n.jsx)("option",{value:"",children:"اختر الشهر"}),L.map(e=>(0,n.jsx)("option",{value:e.value,children:e.label},e.value))]})}),(0,n.jsx)("div",{className:"info-item",children:(0,n.jsx)(d(),{selected:Y,onChange:e=>{G(e)},showYearPicker:!0,dateFormat:"yyyy",yearItemNumber:4,scrollableYearDropdown:!0})})]}),(0,n.jsx)("button",{onClick:()=>{let e=_?_.value:null,t=Y?(function(e){let t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new e.constructor(+e):new Date("number"==typeof e||"[object Number]"===t||"string"==typeof e||"[object String]"===t?e:NaN)})(Y).getFullYear():null;e&&t?s.Z.get("".concat(u.Z,"/Bill/SearchProductionBills?month=").concat(e,"&year=").concat(t)).then(e=>{a(e.data)}).catch(e=>{o(!0),c().fire({icon:"error",text:"حدث خطا اثناء جلب البيانات",timer:1200})}):c().fire({icon:"warning",title:"الرجاء تحديد الشهر والسنة",showConfirmButton:!1,timer:1300})},className:"btn btn-search-box-date",children:"بحث"}),(0,n.jsx)("button",{onClick:()=>{s.Z.get("".concat(u.Z,"/Bill/GetSupplyFormForProduction")).then(e=>{a(e.data.productionBills),j(e.data.pagination)}).catch(e=>{o(!0),c().fire({icon:"error",text:"حدث خطا اثناء جلب البيانات",timer:1200})})},className:"btn btn-show-all-box-date",children:"عرض الكل"})]})}),(0,n.jsx)("div",{className:"title-table",children:(0,n.jsx)("p",{children:"العناصر"})}),(0,n.jsx)("div",{className:"table-contant table-responsive",children:(0,n.jsxs)("table",{className:"table table-bordered table-striped table-hover",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)("input",{type:"checkbox",onChange:()=>{let e=document.querySelectorAll("#checkbox-item");D?(F([]),e.forEach(e=>{e.checked=!1})):(e.forEach(e=>{e.checked=!0}),F(t.map(e=>e.id))),E(!D)},id:"selectAll-input",checked:D})}),(0,n.jsx)("th",{children:"ID"}),(0,n.jsx)("th",{children:"القسم"}),(0,n.jsx)("th",{children:"مستوى الأولوية"}),(0,n.jsx)("th",{children:"تاريخ التوافر"}),(0,n.jsx)("th",{children:"الملاحظات"})]})}),(0,n.jsxs)("tbody",{children:[t.map(e=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("input",{type:"checkbox",id:"checkbox-item",checked:Z.includes(e.id),onChange:t=>R(e.id,t)})}),(0,n.jsx)("td",{children:null==e?void 0:e.id}),(0,n.jsx)("td",{children:null==e?void 0:e.departmentName}),(0,n.jsx)("td",{children:null==e?void 0:e.priorityName}),(0,n.jsx)("td",{children:null==e?void 0:e.date.slice(0,10)}),(0,n.jsx)("td",{children:(null==e?void 0:e.notes.length)>15?(0,n.jsxs)(n.Fragment,{children:[null==e?void 0:e.notes.slice(0,15),"...",(0,n.jsx)("button",{onClick:()=>f(null==e?void 0:e.notes),className:"btn btn-link",children:"عرض المزيد"})]}):null==e?void 0:e.notes})]},null==e?void 0:e.id)),0==t.length&&(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colSpan:"8",className:"text-center",style:{fontSize:"1.5rem",color:"#000",padding:"30px 0",letterSpacing:"1px"},children:i?"حدث خطأ اثناء جلب البيانات الرجاء المحاولة مرة اخري":"لا يوجد بيانات"})})]})]})}),(0,n.jsx)("div",{className:"pagination-box-inventory",children:(0,n.jsx)("nav",{"aria-label":"Page navigation example",children:(0,n.jsxs)("ul",{className:"pagination",children:[(0,n.jsx)("li",{className:"page-item ".concat(!b.hasPreviousPage&&"disabled"),children:(0,n.jsx)("a",{className:"page-link",href:"#","aria-label":"Previous",onClick:()=>{b.hasPreviousPage&&j(e=>({...e,pageNumber:e.pageNumber-1}))},children:(0,n.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),v>0&&[...Array(v).keys()].map(e=>(0,n.jsx)("li",{className:"page-item ".concat(b.pageNumber===e+1&&"active"),children:(0,n.jsx)("a",{className:"page-link",href:"#",onClick:()=>j(t=>({...t,pageNumber:e+1})),children:e+1})},e+1)),(0,n.jsx)("li",{className:"page-item ".concat(!b.hasNextPage&&"disabled"),children:(0,n.jsx)("a",{className:"page-link",href:"#","aria-label":"Next",onClick:()=>{b.hasNextPage&&j(e=>({...e,pageNumber:e.pageNumber+1}))},children:(0,n.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})})}),(0,n.jsx)("div",{className:"inventory-print-container",ref:M,children:(0,n.jsxs)("div",{className:"inventory-print-container",children:[(0,n.jsx)("div",{className:"print-header",children:"توريد المنتجات الي الانتاج"}),(0,n.jsxs)("table",{className:"print-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"ID"}),(0,n.jsx)("th",{children:"القسم"}),(0,n.jsx)("th",{children:"مستوى الاولوية"}),(0,n.jsx)("th",{children:"تاريخ التوفر"}),(0,n.jsx)("th",{children:"الملاحظات"})]})}),(0,n.jsx)("tbody",{children:t.filter(e=>Z.includes(e.id)).map(e=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.id}),(0,n.jsx)("td",{children:null==e?void 0:e.departmentName}),(0,n.jsx)("td",{children:null==e?void 0:e.priorityName}),(0,n.jsx)("td",{children:null==e?void 0:e.date.slice(0,10)}),(0,n.jsx)("td",{className:"notes-column",children:e.notes})]},e.id))})]}),(0,n.jsxs)("div",{className:"print-footer",children:["\xa9 ",new Date().getFullYear()," تقرير المخزون"]})]})})]})}},1555:function(e,t,a){"use strict";a.d(t,{f:function(){return n}});let n=a(8620).Buffer.from("".concat("11190013",":").concat("60-dayfreetrial"),"utf8").toString("base64");t.Z="http://16.24.26.228:8080/api"}},function(e){e.O(0,[9461,1544,1778,7908,1564,2971,8069,1744],function(){return e(e.s=9e3)}),_N_E=e.O()}]);