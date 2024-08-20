(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2377],{3616:function(e,a,t){Promise.resolve().then(t.bind(t,4430))},7907:function(e,a,t){"use strict";var l=t(5313);t.o(l,"useRouter")&&t.d(a,{useRouter:function(){return l.useRouter}})},4430:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return u}});var l=t(3827),s=t(4090),c=t(7907);t(2798);var r=t(3441),i=t.n(r),n=t(3411),o=t.n(n),d=t(7908),m=t(1555);function h(e){let{setShowInvoiceForm:a}=e,[t,r]=(0,s.useState)([]),[i,n]=(0,s.useState)([]),[h,u]=(0,s.useState)(null);(0,s.useEffect)(()=>{d.Z.get("".concat(m.Z,"/Storage/AllDepartments")).then(e=>{r(e.data),n(e.data.map(e=>e.name))}).catch(e=>{u(e)})},[]);let[x,p]=(0,s.useState)([]),[N,j]=(0,s.useState)([]);(0,s.useEffect)(()=>{d.Z.get("".concat(m.Z,"/Status/AllStatus")).then(e=>{p(e.data)}).catch(e=>{o().fire({title:"Error",text:"حدث خطأ ما الرجاء المحاولة مرة اخرى",icon:"error",confirmButtonText:"Ok",timer:800})}),d.Z.get("".concat(m.Z,"/Status/AllPriority")).then(e=>{j(e.data)}).catch(e=>{o().fire({icon:"error",title:"خطأ...",text:"حدث خطأ أثناء تحميل البيانات"})})},[]);let v=(0,c.useRouter)(),[f,g]=(0,s.useState)({id:"",orderId:"",Notes:"",date:"",SupplierName:"",Email:"",CategoryName:"",empolyeeName:"",Notes:"",Phone:"",Status:"",customerName:"",Priority:"",relatedItems:[{catName:"",catID:"",ItemId:"",name:"",quantity:"",unit:"",weight:"",expiredDate:"",Price:"",notes:"",taxes:""}]}),[b,y]=(0,s.useState)([]),[C,S]=(0,s.useState)([]),[I,k]=(0,s.useState)(""),[w,F]=(0,s.useState)(0),[P,E]=(0,s.useState)(!1),Z=e=>{let{name:a,value:t}=e.target;"SupplierName"==a&&(""!=t?(k("SupplierName"),d.Z.post("".concat(m.Z,"/Supplier/SearchSupplier?name=").concat(t)).then(e=>{y(e.data),E(!1)}).catch(e=>{y([]),E(!0)})):(E(!1),y([]),k(""))),"customerName"==a&&(""!=t?(k("customerName"),d.Z.post("".concat(m.Z,"/Customer/SearchCustomer"),{name:t}).then(e=>{S(e.data),E(!1)}).catch(e=>{S([]),E(!0)})):(E(!1),S([]),k(""))),g(e=>({...e,[a]:t}))},D=e=>{g(a=>({...a,SupplierName:e.name,Phone:e.phone})),y([])},O=e=>{"مشتريات"==f.CategoryName||"المشتريات"==f.CategoryName?g(a=>({...a,customerName:e.name})):g(a=>({...a,customerName:e.name,Phone:e.phone})),E(!1),S([]),k("")},B=(e,a,t)=>{if("catID"==a){let a=es.filter(e=>e.id==t)[0].name;g(a=>({...a,relatedItems:a.relatedItems.map((a,t)=>t===e?{...a,name:""}:a)})),g(a=>({...a,relatedItems:a.relatedItems.map((a,t)=>t===e?{...a,ItemId:""}:a)})),g(t=>({...t,relatedItems:t.relatedItems.map((t,l)=>l===e?{...t,catName:a}:t)}))}g(l=>({...l,relatedItems:l.relatedItems.map((l,s)=>s===e?{...l,[a]:t}:l)}))},q=e=>{g(a=>({...a,relatedItems:a.relatedItems.filter((a,t)=>t!==e)}))},[R,A]=(0,s.useState)(""),[T,L]=(0,s.useState)([]),[_,z]=(0,s.useState)(""),[M,Y]=(0,s.useState)([]),[G,H]=(0,s.useState)(null),J=(e,a)=>{let t=e.target.value;f.relatedItems[a].name=t,A(t),""==t.trim()?L(M):L(T.filter(e=>e.productName.toLowerCase().includes(t.toLowerCase())))},[K,Q]=(0,s.useState)(!0),U=(e,a)=>{let t=f.relatedItems[e].catID;H(e),""==t||null==t||void 0==t?(Y([]),L([])):d.Z.get("".concat(m.Z,"/Category/CategoryById?id=").concat(t)).then(e=>{Y(e.data.products),L(e.data.products)}).catch(e=>{K&&o().fire({title:"Error",text:"حدث خطأ ما الرجاء المحاولة مرة اخرى",icon:"error",confirmButtonText:"Ok",timer:800}),Q(!1)})},V=(e,a,t)=>{z(e),L({}),f.relatedItems[a].name=e,f.relatedItems[a].ItemId=t,d.Z.get("".concat(m.Z,"/Product/ProductById?id=").concat(t)).then(e=>{let t=f.relatedItems.map((t,l)=>l==a?{...t,Price:e.data.price,unit:e.data.unit,notes:e.data.description,taxes:e.data.salesTax,expiredDate:e.data.productDatesDto[0].expiryDate.slice(0,10)}:t);g(e=>({...e,relatedItems:t}))}).catch(e=>{o().fire({title:"Error",text:"حدث خطأ ما الرجاء المحاولة مرة اخرى",icon:"error",confirmButtonText:"Ok",timer:800})})},W=e=>(0,l.jsx)("ul",{className:"list-group",children:T.map((a,t)=>(0,l.jsx)("li",{className:"list-group-item",onClick:()=>V(a.name,e,a.id),style:{cursor:"pointer"},children:a.name},t))}),[X,$]=(0,s.useState)(!1),[ee,ea]=(0,s.useState)(null),[et,el]=(0,s.useState)([]),[es,ec]=(0,s.useState)([]);return(0,s.useEffect)(()=>{d.Z.get("".concat(m.Z,"/Category/AllCategories")).then(e=>{ec(e.data)}).catch(e=>{o().fire({title:"Error",text:"حدث خطأ ما الرجاء المحاولة مرة اخرى",icon:"error",confirmButtonText:"Ok",timer:800})})},[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"invoice-box-all-form-inventory",children:[(0,l.jsx)("div",{className:"overlay"}),(0,l.jsxs)("div",{className:"all-item-box-ele",children:[(0,l.jsxs)("div",{className:"title",children:[(0,l.jsx)("p",{className:"arrow",children:(0,l.jsx)("i",{className:"fas fa-arrow-right",onClick:()=>a(!1)})}),(0,l.jsx)("p",{className:"title-text",children:"اضافة فاتورة"}),(0,l.jsx)("p",{})]}),(0,l.jsxs)("form",{children:[(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:"col-md-6 col-sm-12",children:[(0,l.jsx)("label",{htmlFor:"orderId",className:"form-label",children:"معرف الطلببية:"}),(0,l.jsx)("input",{type:"text",className:"form-control",id:"orderId",name:"orderId",value:f.orderId,onChange:Z})]}),(0,l.jsxs)("div",{className:"col-md-6 col-sm-12",children:[(0,l.jsx)("label",{htmlFor:"SupplierName",className:"form-label",children:"القسم:"}),(0,l.jsxs)("select",{className:"form-select",id:"CategoryName",name:"CategoryName",value:f.CategoryName,onChange:Z,children:[(0,l.jsx)("option",{value:"",disabled:!0,selected:!0,children:"اختر"}),i.map((e,a)=>(0,l.jsx)("option",{value:e,children:e},a))]})]}),"مشتريات"==f.CategoryName||"المشتريات"==f.CategoryName?(0,l.jsxs)("div",{className:"col-md-6 col-sm-12 box-realted-supplier-item-all",children:[(0,l.jsx)("label",{htmlFor:"SupplierName",className:"form-label",children:"اسم المورد:"}),(0,l.jsx)("input",{type:"text",className:"form-control",id:"SupplierName",name:"SupplierName",value:f.SupplierName,onChange:Z}),P&&0==b.length&&"SupplierName"==I&&(0,l.jsx)("div",{className:"alert alert-danger",role:"alert",children:"لا يوجد مورد بهذا الاسم"}),b.length>0&&"SupplierName"==I&&(0,l.jsx)("ul",{children:b.map((e,a)=>(0,l.jsxs)("li",{onClick:()=>D(e),children:[e.id," - ",e.name,(0,l.jsx)("hr",{})]},a))})]}):null,(0,l.jsxs)("div",{className:"col-md-6 col-sm-12",children:[(0,l.jsx)("label",{htmlFor:"empolyeeName",className:"form-label",children:"اسم الموظف:"}),(0,l.jsx)("input",{type:"text",className:"form-control",id:"empolyeeName",name:"empolyeeName",value:f.empolyeeName,onChange:Z})]}),(0,l.jsxs)("div",{className:"col-md-6 col-sm-12",children:[(0,l.jsx)("label",{htmlFor:"Email",className:"form-label",children:"البريد الالكترونى للموظف"}),(0,l.jsx)("input",{type:"email",className:"form-control",id:"Email",name:"Email",value:f.Email,onChange:Z})]}),(0,l.jsxs)("div",{className:"col-md-6 col-sm-12 box-realted-supplier-item-all",children:[(0,l.jsx)("label",{htmlFor:"customerName",className:"form-label",children:"اسم العميل:"}),(0,l.jsx)("input",{type:"text",className:"form-control",id:"customerName",name:"customerName",value:f.customerName,onChange:Z}),P&&0==C.length&&"customerName"==I&&(0,l.jsx)("div",{className:"alert alert-danger",role:"alert",children:"لا يوجد عميل بهذا الاسم"}),C.length>0&&"customerName"==I&&(0,l.jsx)("ul",{children:C.map((e,a)=>(0,l.jsxs)("li",{onClick:()=>O(e),children:[e.id," - ",e.name,(0,l.jsx)("hr",{})]},a))})]}),(0,l.jsxs)("div",{className:"col-md-6 col-sm-12",children:[(0,l.jsx)("label",{htmlFor:"Phone",className:"form-label",children:"مشتريات"==f.CategoryName||"المشتريات"==f.CategoryName?"رقم الهاتف للمورد:":"رقم الهاتف للعميل:"}),(0,l.jsx)("input",{type:"text",className:"form-control",id:"Phone",name:"Phone",value:f.Phone,onChange:Z})]}),(0,l.jsxs)("div",{className:"col-md-6 col-sm-12",children:[(0,l.jsx)("label",{htmlFor:"Status",className:"form-label",children:"الحالة:"}),(0,l.jsxs)("select",{className:"form-select",id:"Status",name:"Status",value:f.Status,onChange:Z,children:[(0,l.jsx)("option",{value:"",disabled:!0,selected:!0,children:"اختر"}),x.map((e,a)=>(0,l.jsx)("option",{value:e.name,children:e.name},a))]})]}),(0,l.jsxs)("div",{className:"col-md-6 col-sm-12",children:[(0,l.jsx)("label",{htmlFor:"Priority",className:"form-label",children:"الاولوية:"}),(0,l.jsxs)("select",{className:"form-select",id:"Priority",name:"Priority",value:f.Priority,onChange:Z,children:[(0,l.jsx)("option",{disabled:!0,value:"",selected:!0,children:"اختر"}),N.map((e,a)=>(0,l.jsx)("option",{value:e.name,children:e.name},a))]})]}),(0,l.jsxs)("div",{className:"col-md-6 col-sm-12",children:[(0,l.jsx)("label",{htmlFor:"date",className:"form-label",children:"التاريخ:"}),(0,l.jsx)("input",{type:"date",className:"form-control",id:"date",name:"date",value:f.date,onChange:Z})]}),(0,l.jsxs)("div",{className:"col-12",children:[(0,l.jsx)("label",{htmlFor:"Notes",className:"form-label",children:"ملاحظات:"}),(0,l.jsx)("textarea",{type:"text",className:"form-control",id:"Notes",name:"Notes",value:f.Notes,onChange:Z})]})]})}),(0,l.jsxs)("h2",{className:"title-box-related",children:[(0,l.jsx)("span",{}),(0,l.jsx)("span",{children:"المنتجات المتعلقة"}),(0,l.jsx)("p",{className:"b2tn",style:{cursor:"pointer"},onClick:()=>{o().fire({title:"اختر إجراءً",html:'\n            <div style="width:100%">\n                <button onclick="location.href=\'/admin/inventory/type?catgoryId=1\'" class="swal2-styled swal2-confirm" style="width:90%">إضافة أو تعديل منتج</button>\n            </div>\n            <div style="width:100%">\n                <button onclick="location.href=\'/admin/inventory/client\'" class="swal2-styled swal2-confirm" style="width:90%">إضافة أو تعديل عميل</button>\n            </div>\n            <div style="width:100%">\n                <button onclick="location.href=\'/admin/inventory/suppliers\'" class="swal2-styled swal2-confirm" style="width:90%">إضافة أو تعديل مورد</button>\n            </div>\n            ',showConfirmButton:!1,customClass:{htmlContainer:"swal2-flex-container"}})},children:"اضافة او تعديل"})]}),(0,l.jsx)("div",{className:"row container-fluid",children:f.relatedItems.map((e,a)=>(0,l.jsxs)("div",{className:"col-lg-6 col-md-12 box-product-items-invoice-related",children:[(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:"col-md-6 col-sm-12",children:[(0,l.jsx)("label",{htmlFor:"catID-".concat(a),className:"form-label",children:"القسم"}),(0,l.jsxs)("select",{className:"form-select",id:"catID-".concat(a),name:"catID-".concat(a),value:e.catID,onChange:e=>B(a,"catID",e.target.value),children:[(0,l.jsx)("option",{value:"",disabled:!0,selected:!0,children:"اختر"}),es.map((e,a)=>(0,l.jsx)("option",{value:e.id,children:e.name},a))]})]}),(0,l.jsxs)("div",{className:"col-md-6 col-sm-12 list-group-box",children:[(0,l.jsx)("label",{htmlFor:"name-".concat(a),className:"form-label",children:"اسم المنتج:"}),(0,l.jsx)("input",{type:"text",className:"form-control",id:"name-".concat(a),name:"name-".concat(a),value:e.name,readOnly:!0,onChange:e=>J(e,a),onFocus:()=>U(a,"productList")}),T.length>0&&G==a&&W(a)]}),(0,l.jsxs)("div",{className:"col-md-6 col-sm-12",children:[(0,l.jsx)("label",{htmlFor:"quantity-".concat(a),className:"form-label",children:"الكمية:"}),(0,l.jsx)("input",{type:"text",className:"form-control",id:"quantity-".concat(a),name:"quantity-".concat(a),value:e.quantity,onChange:e=>B(a,"quantity",e.target.value)})]}),(0,l.jsxs)("div",{className:"col-md-6 col-sm-12",children:[(0,l.jsx)("label",{htmlFor:"unit-".concat(a),className:"form-label",children:"الوحدة:"}),(0,l.jsx)("input",{type:"text",className:"form-control",id:"unit-".concat(a),name:"unit-".concat(a),value:e.unit,onChange:e=>B(a,"unit",e.target.value)})]}),(0,l.jsxs)("div",{className:"col-md-6 col-sm-12",children:[(0,l.jsxs)("label",{htmlFor:"weight-".concat(a),className:"form-label notes",children:[(0,l.jsx)("span",{children:"الوزن:"}),(0,l.jsx)("div",{className:"valid-feedback",children:"- الرجاء ادخال الوزن للوحدة فى المنتج"})]}),(0,l.jsx)("input",{type:"text",className:"form-control",id:"weight-".concat(a),name:"weight-".concat(a),value:e.weight,onChange:e=>B(a,"weight",e.target.value)})]}),(0,l.jsxs)("div",{className:"col-md-6 col-sm-12 ",children:[(0,l.jsxs)("label",{htmlFor:"Price-".concat(a),className:"form-label notes",children:[(0,l.jsx)("span",{children:"السعر"}),(0,l.jsx)("div",{className:"valid-feedback",children:"- الرجاء ادخال السعر للوحدة فى المنتج"})]}),(0,l.jsx)("input",{type:"text",className:"form-control",id:"Price-".concat(a),name:"Price-".concat(a),value:e.Price,onChange:e=>B(a,"Price",e.target.value)})]}),(0,l.jsxs)("div",{className:"col-md-6 col-sm-12",children:[(0,l.jsx)("label",{htmlFor:"expiredDate-".concat(a),className:"form-label",children:"تاريخ الانتهاء:"}),(0,l.jsx)("input",{type:"date",className:"form-control",id:"expiredDate-".concat(a),name:"expiredDate-".concat(a),value:e.expiredDate,onChange:e=>B(a,"expiredDate",e.target.value)})]}),(0,l.jsxs)("div",{className:"col-md-6 col-sm-12",children:[(0,l.jsx)("label",{htmlFor:"taxes-".concat(a),className:"form-label",children:"ضريبة المبيعات:"}),(0,l.jsx)("input",{type:"text",min:0,className:"form-control",id:"taxes-".concat(a),name:"taxes-".concat(a),value:e.taxes,onChange:e=>B(a,"taxes",e.target.value)})]}),(0,l.jsxs)("div",{className:"col-12",children:[(0,l.jsx)("label",{htmlFor:"notes-".concat(a),className:"form-label",children:"الوصف:"}),(0,l.jsx)("textarea",{className:"form-control",id:"notes-".concat(a),name:"notes-".concat(a),value:e.notes,onChange:e=>B(a,"notes",e.target.value)})]}),f.relatedItems.length>1&&(0,l.jsx)("div",{className:"col-md-6 col-sm-12 box-delete-item",children:(0,l.jsx)("button",{type:"button",className:"btn btn-danger btn-delete-item",onClick:()=>q(a),children:(0,l.jsx)("i",{className:"bi bi-trash"})})})]}),(0,l.jsx)("hr",{})]},a))}),X&&(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"box-all-items-btns",children:[(0,l.jsx)("p",{className:"btn btn-submit-from",onClick:()=>{if("مشتريات"==f.CategoryName||"المشتريات"==f.CategoryName){let e={orderId:f.orderId,phone:f.Phone,email:f.Email,notes:f.Notes,date:"".concat(f.date),supplierName:f.SupplierName,departmentName:f.CategoryName,statusName:f.Status,priorityName:f.Priority,customerName:f.customerName,employeeName:f.empolyeeName,products:f.relatedItems.map(e=>({id:e.ItemId,name:e.name,unit:e.unit,quantity:e.quantity,weight:e.weight,price:e.Price,salesTax:e.taxes,description:e.notes,expiryDate:"".concat(e.expiredDate)}))};d.Z.post("".concat(m.Z,"/Bill/AddPurchaseBill"),e).then(e=>{o().fire({title:"Success",text:"تم اضافة الفاتورة بنجاح شكرا لك",icon:"success",confirmButtonText:"Ok",timer:1e3}),setTimeout(()=>{v.push("/admin/inventory/storage-log")},500)}).catch(e=>{o().fire({title:"حدث خطأ ما",text:"".concat(e.response.data.message?e.response.data.message:"حدث خطأ ما"),icon:"error",confirmButtonText:"Ok"})})}else{let e={orderId:f.orderId,phone:f.Phone,email:f.Email,notes:f.Notes,date:"".concat(f.date),departmentName:f.CategoryName,statusName:f.Status,priorityName:f.Priority,customerName:f.customerName,employeeName:f.empolyeeName,products:f.relatedItems.map(e=>({id:e.ItemId,name:e.name,unit:e.unit,quantity:e.quantity,weight:e.weight,price:e.Price,salesTax:e.taxes,description:e.notes,expiryDate:"".concat(e.expiredDate)}))};d.Z.post("".concat(m.Z,"/Bill/AddSelesBill"),e).then(e=>{o().fire({title:"Success",text:"تم اضافة الفاتورة بنجاح شكرا لك",icon:"success",confirmButtonText:"Ok",timer:1e3}),setTimeout(()=>{v.push("/admin/inventory/storage-log")},500)}).catch(e=>{o().fire({title:"حدث خطأ ما",text:"".concat(e.response.data.message?e.response.data.message:"حدث خطأ ما"),icon:"error",confirmButtonText:"Ok"})})}},children:"ارسال البيانات"}),(0,l.jsx)("p",{className:"btn btn-submit-from",onClick:()=>{document.querySelector(".invoice-box-all-form-inventory form").querySelectorAll("input , select").forEach(e=>{e.removeAttribute("disabled")}),o().fire({title:"حسنا يمكنك تعديل البيانات الان",icon:"success",timer:800}),$(!1)},children:"تعديل البيانات"})]})}),!X&&(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"box-all-items-btns",children:[(0,l.jsx)("div",{className:"container-add-related",children:(0,l.jsx)("button",{type:"button",className:"btn btn-add-item-related",onClick:()=>{g(e=>({...e,relatedItems:[...e.relatedItems,{catName:"",ItemId:"",name:"",quantity:"",unit:"",weight:"",expiredDate:"",Price:"",notes:"",taxes:""}]}))},children:(0,l.jsx)("i",{className:"fas fa-plus"})})}),(0,l.jsx)("p",{className:"btn btn-submit-from",onClick:e=>{e.preventDefault();let a=!1,t=document.querySelector(".invoice-box-all-form-inventory form"),l=t.querySelectorAll("input , select"),s=t.querySelectorAll("input , select , textarea");l.forEach(e=>{(""!=e.value||null!=e.value||void 0!=e.value)&&(a=!0,e.classList.remove("border-danger"))}),l.forEach(e=>{(""==e.value||null==e.value||void 0==e.value)&&(e.classList.add("border-danger"),a=!1)}),a||o().fire({title:"الرجاء ملئ البيانات المطلوبة",icon:"info",timer:800}),a&&(s.forEach(e=>{e.classList.remove("border-danger"),e.setAttribute("disabled","disabled"),o().fire({title:"الرجاء مراجعة البيانات جيدا",icon:"warning",timer:800})}),$(!0))},children:"حفظ الفاتورة"})]})})]})]})]})})}function u(){let e=(0,c.useRouter)(),[a,t]=(0,s.useState)([]),[r,n]=(0,s.useState)(!1),[u,x]=(0,s.useState)({});(0,s.useEffect)(()=>{d.Z.get("".concat(m.Z,"/RecievedOrders/AllRecievedOrders")).then(e=>{t(e.data.recievedOrders),x(e.data.pagination)}).catch(e=>{n(!0),o().fire({icon:"error",title:"حذث خطأ ما اثناء جلب البيانات",showConfirmButton:!1,timer:800})})},[]);let[p,N]=(0,s.useState)(!1),[j,v]=(0,s.useState)({}),f=e=>{d.Z.get("".concat(m.Z,"/RecievedOrders/RecievedOrderById").concat(e.id)).then(e=>{v(e.data),N(!0)}).catch(e=>{o().fire({icon:"error",title:"حذث خطأ ما اثناء جلب البيانات",showConfirmButton:!1,timer:800})})};(0,s.useEffect)(()=>{(void 0!=u.pageNumber||null!=u.pageNumber)&&d.Z.get("".concat(m.Z,"/RecievedOrders/AllRecievedOrders?pageNumber=").concat(u.pageNumber)).then(e=>{t(e.data.recievedOrders),x(e.data.pagination)}).catch(e=>{n(!0),o().fire({icon:"error",text:"حدث خطا اثناء جلب البيانات",timer:1200})})},[u.pageNumber]);let g=Math.ceil(u.total/u.pageSize),[b,y]=(0,s.useState)("");(0,s.useEffect)(()=>{""==b&&d.Z.get("".concat(m.Z,"/RecievedOrders/AllRecievedOrders")).then(e=>{t(e.data.recievedOrders),x(e.data.pagination)}).catch(e=>{n(!0),o().fire({icon:"error",title:"حذث خطأ ما اثناء جلب البيانات",showConfirmButton:!1,timer:800})})},[b]);let[C,S]=(0,s.useState)(!1),[I,k]=(0,s.useState)(new Date),[w,F]=(0,s.useState)(!1),[P,E]=(0,s.useState)({date:!1,category:!1}),Z=(0,s.useRef)(null),D=(0,s.useRef)(null),O=e=>{Z.current&&!Z.current.contains(e.target)&&D.current&&!D.current.contains(e.target)&&(F(!1),E({date:!1,category:!1}))};return(0,s.useEffect)(()=>(document.addEventListener("click",O),()=>{document.removeEventListener("click",O)}),[]),(0,l.jsxs)("div",{className:"table",children:[(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)("div",{className:"header",children:[(0,l.jsxs)("div",{className:"head-box",children:[(0,l.jsx)("div",{className:"add-head",children:(0,l.jsx)("p",{onClick:()=>e.push("/admin/inventory/storage-log"),className:"add-item",children:"سجل التخزين"})}),(0,l.jsx)("div",{className:"add-head",children:(0,l.jsx)("p",{onClick:()=>S(!0),className:"add-item",children:"اضافة فاتورة"})})]}),(0,l.jsxs)("div",{className:"search-box has-arrow",children:[(0,l.jsxs)("div",{className:"option-manu",ref:Z,children:[(0,l.jsx)("p",{children:(0,l.jsx)("button",{className:"btn btn-icon",type:"button",onClick:()=>F(!w),children:(0,l.jsx)("p",{className:"option-icon",children:(0,l.jsx)("i",{className:"fa-solid fa-sliders"})})})}),w&&(0,l.jsx)("div",{className:"collapse-body",children:(0,l.jsxs)("div",{className:"card card-body",children:[(0,l.jsx)("p",{children:(0,l.jsx)("button",{className:"btn head-box",type:"button",onClick:()=>E({...P,date:!P.date}),children:"التاريخ"})}),P.date&&(0,l.jsx)("div",{className:"collapse-horizontal",children:(0,l.jsx)("div",{className:"card card-body",style:{width:"300px"},ref:D,children:(0,l.jsx)(i(),{selected:I,onChange:e=>{k(e),y("");let a=e.getMonth()+1,l=e.getDate(),s=e.getFullYear(),c="".concat(s,"-").concat(a<10?"0".concat(a):a,"-").concat(l<10?"0".concat(l):l);d.Z.post("".concat(m.Z,"/RecievedOrders/SearchRecievedOrders?date=").concat(c),{}).then(e=>{t(e.data)}).catch(e=>{o().fire({icon:"error",title:"لا يوجد نتائج",showConfirmButton:!1,timer:800})})}})})})]})})]}),(0,l.jsxs)("form",{className:"d-flex search-top-table-form",role:"search",onSubmit:e=>{e.preventDefault(),d.Z.post("".concat(m.Z,"/RecievedOrders/SearchRecievedOrders"),{orderId:b}).then(e=>{t(e.data)}).catch(e=>{o().fire({icon:"error",title:"لا يوجد نتائج",showConfirmButton:!1,timer:800})})},children:[(0,l.jsxs)("div",{className:"form-floating search-input",children:[(0,l.jsx)("input",{type:"text",className:"form-control",id:"floatingInput",placeholder:"ابحث هنا",value:b,onChange:e=>y(e.target.value)}),(0,l.jsx)("label",{htmlFor:"floatingInput",children:"بحث (معرف الطلبية)"})]}),(0,l.jsx)("button",{className:"btn",type:"submit",children:(0,l.jsx)("i",{className:"fa-solid fa-search"})})]}),(0,l.jsx)("div",{className:"go-back-arrow",children:(0,l.jsx)("p",{onClick:()=>{e.back()},children:(0,l.jsx)("i",{className:"fa-solid fa-chevron-right"})})})]})]}),(0,l.jsx)("div",{className:"table-contant",children:(0,l.jsxs)("table",{className:"table table-striped table-hover",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{id:"head-Of-table",children:[(0,l.jsx)("th",{type:"hide",children:(0,l.jsx)("input",{type:"checkbox",disabled:!0,checked:!0,id:"selectAll-input"})}),(0,l.jsx)("th",{scope:"col",type:"id",text:"ID",value:"id",children:"ID"}),(0,l.jsx)("th",{scope:"col",children:"معرف الطلبية"}),(0,l.jsx)("th",{scope:"col",children:"تاريخ"}),(0,l.jsx)("th",{scope:"col",children:"الوقت"}),(0,l.jsx)("th",{scope:"col",children:"الملاحظات"}),(0,l.jsx)("th",{scope:"col",style:{fontSize:"1.5rem"},children:"#"})]})}),(0,l.jsxs)("tbody",{children:[a.map(e=>{var a,t,s,c,r;return(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{scope:"row",children:(0,l.jsx)("div",{className:"check-box",children:(0,l.jsx)("input",{type:"checkbox",id:"checkbox-item",disabled:!0,onClick:e=>{e.target.checked?e.target.parentElement.parentElement.classList.add("selected-row"):e.target.parentElement.parentElement.classList.remove("selected-row")}})})}),(0,l.jsx)("th",{scope:"row",onClick:()=>f(e),style:{cursor:"pointer"},children:(0,l.jsx)("div",{className:"check-box",children:(0,l.jsx)("p",{className:"item-id",children:e.id})})}),(0,l.jsx)("td",{className:"px-2",onClick:()=>f(e),style:{cursor:"pointer"},children:null==e?void 0:null===(a=e.purchaseOrderDto)||void 0===a?void 0:a.id}),(0,l.jsx)("td",{className:"px-2",onClick:()=>f(e),style:{cursor:"pointer"},children:null==e?void 0:null===(t=e.date)||void 0===t?void 0:t.slice(0,10)}),(0,l.jsx)("td",{className:"px-2",onClick:()=>f(e),style:{cursor:"pointer"},children:null==e?void 0:null===(s=e.time)||void 0===s?void 0:s.slice(11,16)}),(0,l.jsx)("td",{className:"px-2",children:(0,l.jsx)("p",{onClick:a=>{o().fire({title:"ملاحظات",text:e.notes,icon:"info"})},style:{cursor:"pointer"},children:(null===(c=e.notes)||void 0===c?void 0:c.length)>10?(null===(r=e.notes)||void 0===r?void 0:r.slice(0,40))+"...":e.notes})}),(0,l.jsx)("td",{children:(0,l.jsx)("p",{className:"storage-link-click-table text-success",onClick:()=>f(e),children:"تخزين"})})]},e.id)}),0==a.length&&r&&(0,l.jsx)("tr",{children:(0,l.jsx)("td",{colSpan:"8",className:"text-center",style:{color:"#ff0000",fontSize:"1.5rem",padding:"30px 0",letterSpacing:"1px"},children:"لا يوجد بيانات"})}),0==a.length&&!r&&(0,l.jsx)("tr",{children:(0,l.jsx)("td",{colSpan:"8",className:"text-center",style:{fontSize:"1.5rem",color:"#000",padding:"30px 0",letterSpacing:"1px"},children:"الرجاء الانتظار جاري تحميل البيانات ..."})})]})]})})]}),(0,l.jsx)("div",{className:"pagination-box-inventory",children:(0,l.jsx)("nav",{"aria-label":"Page navigation example",children:(0,l.jsxs)("ul",{className:"pagination",children:[(0,l.jsx)("li",{className:"page-item ".concat(!u.hasPreviousPage&&"disabled"),children:(0,l.jsx)("a",{className:"page-link",href:"#","aria-label":"Previous",onClick:()=>{u.hasPreviousPage&&x(e=>({...e,pageNumber:e.pageNumber-1}))},children:(0,l.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),g>0&&[...Array(g).keys()].map(e=>(0,l.jsx)("li",{className:"page-item ".concat(u.pageNumber===e+1&&"active"),children:(0,l.jsx)("a",{className:"page-link",href:"#",onClick:()=>x(a=>({...a,pageNumber:e+1})),children:e+1})},e+1)),(0,l.jsx)("li",{className:"page-item ".concat(!u.hasNextPage&&"disabled"),children:(0,l.jsx)("a",{className:"page-link",href:"#","aria-label":"Next",onClick:()=>{u.hasNextPage&&x(e=>({...e,pageNumber:e.pageNumber+1}))},children:(0,l.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})})}),C&&(0,l.jsx)(h,{setShowInvoiceForm:S}),p&&(0,l.jsx)("div",{className:"modal show d-block",style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},children:(0,l.jsx)("div",{className:"modal-purchase-orders storage-log",children:(0,l.jsxs)("div",{className:"modal-content",children:[(0,l.jsxs)("div",{className:"modal-header",children:[(0,l.jsx)("button",{type:"button",className:"btn close",onClick:()=>N(!1),children:(0,l.jsx)("i",{className:"bi bi-x-lg"})}),(0,l.jsx)("h5",{className:"modal-title storage-log",children:"التخزين"}),(0,l.jsx)("p",{})]}),(0,l.jsx)("div",{className:"modal-body",children:(0,l.jsxs)("form",{className:"row",children:[(0,l.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"id",children:"ID"}),(0,l.jsx)("input",{type:"text",className:"form-control",id:"id",name:"id",value:j.id?j.id:"--",disabled:!0})]})}),(0,l.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"Name",children:"الاسم"}),(0,l.jsx)("input",{type:"text",className:"form-control",id:"Name",name:"Name",value:j.name?j.name:"غير متوفر",disabled:!0})]})}),(0,l.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"categoryName",children:"القسم"}),(0,l.jsx)("input",{type:"text",className:"form-control",id:"categoryName",name:"categoryName",value:j.categoryName?j.categoryName:"غير متوفر",disabled:!0})]})}),(0,l.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"date",children:"التاريخ"}),(0,l.jsx)("input",{type:"date",className:"form-control",id:"date",name:"date",value:j.date?j.date.slice(0,10):"--",disabled:!0})]})}),(0,l.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"Email",children:"البريد الإلكتروني"}),(0,l.jsx)("input",{type:"email",className:"form-control",id:"Email",name:"Email",value:j.email?j.email:"غير متوفر",disabled:!0})]})}),(0,l.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"phone",children:"الهاتف"}),(0,l.jsx)("input",{type:"text",className:"form-control",id:"phone",name:"phone",value:j.phone?j.phone:"--",disabled:!0})]})}),(0,l.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"Status",children:"الحالة"}),(0,l.jsx)("input",{type:"text",className:"form-control",id:"status",name:"status",value:j.status?j.status:"غير متوفر",disabled:!0})]})}),(0,l.jsx)("div",{className:"col-12",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"notes",children:"الملاحظات"}),(0,l.jsx)("textarea",{className:"form-control",id:"notes",name:"notes",value:j.notes?j.notes:"غير متوفر",disabled:!0})]})}),(0,l.jsx)("div",{className:"row",children:j.products.map((e,a)=>(0,l.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,l.jsxs)("div",{className:"row w-100",children:[(0,l.jsx)("hr",{}),(0,l.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"itemId-".concat(a),children:"معرف المنتج"}),(0,l.jsx)("input",{type:"number",className:"form-control",id:"itemId-".concat(a),name:"itemId",value:e.id?e.id:"--",disabled:!0})]})}),(0,l.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"name-".concat(a),children:"اسم المنتج"}),(0,l.jsx)("input",{type:"text",className:"form-control",id:"name-".concat(a),name:"name",value:e.name?e.name:"غير متوفر",disabled:!0})]})}),(0,l.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"quantity-".concat(a),children:"الكمية"}),(0,l.jsx)("input",{type:"number",className:"form-control",id:"quantity-".concat(a),name:"quantity",value:e.quantity?e.quantity:"غير متوفر",disabled:!0})]})}),(0,l.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"unit-".concat(a),children:"الوحدة"}),(0,l.jsx)("input",{type:"text",className:"form-control",id:"unit-".concat(a),name:"unit",value:e.unit?e.unit:"غير متوفر",disabled:!0})]})}),(0,l.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"weight-".concat(a),children:"الوزن"}),(0,l.jsx)("input",{type:"text",className:"form-control",id:"weight-".concat(a),name:"weight",value:e.weight?e.weight:"غير متوفر",disabled:!0})]})}),(0,l.jsx)("div",{className:"col-12",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"notes-".concat(a),children:"ملاحظة"}),(0,l.jsx)("textarea",{className:"form-control",id:"notes-".concat(a),name:"notes",value:e.notes?e.notes:"غير متوفر",disabled:!0})]})})]},a)},a))})]})})]})})})]})}},2798:function(){},1555:function(e,a,t){"use strict";t.d(a,{f:function(){return l}});let l=t(8620).Buffer.from("".concat("11190013",":").concat("60-dayfreetrial"),"utf8").toString("base64");a.Z="http://16.24.26.228:8080/api"}},function(e){e.O(0,[9461,1544,1778,7908,1564,9117,2971,8069,1744],function(){return e(e.s=3616)}),_N_E=e.O()}]);