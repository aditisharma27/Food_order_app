(this.webpackJsonpfood_order_app=this.webpackJsonpfood_order_app||[]).push([[0],[,,,function(e,t,a){e.exports={form:"Checkout_form__37B-s",control:"Checkout_control__J8ENy",actions:"Checkout_actions__19AXD",submit:"Checkout_submit__3fadd",invalid:"Checkout_invalid__r_SRY"}},function(e,t,a){e.exports={"cart-items":"Cart_cart-items__pJWEQ",total:"Cart_total__3UMPF",actions:"Cart_actions__5f57F","button--alt":"Cart_button--alt__2I0im",button:"Cart_button__3X1Jq"}},,function(e,t,a){e.exports={header:"Header_header__3eSma","main-image":"Header_main-image__2BF47","side-image":"Header_side-image__45sVT"}},,function(e,t,a){e.exports={"cart-item":"CartItem_cart-item__3-J_K",summary:"CartItem_summary__1uqTU",price:"CartItem_price__SQTmV",amount:"CartItem_amount__1K37L",actions:"CartItem_actions__6MNLc"}},,,function(e,t,a){e.exports={button:"HeaderCartButton_button__EAt5G",icon:"HeaderCartButton_icon__11PR8",badge:"HeaderCartButton_badge__10ref",bump:"HeaderCartButton_bump__2Iszq"}},,,function(e,t,a){e.exports={meal:"MealsItem_meal__20pWi",description:"MealsItem_description__4nTK7",price:"MealsItem_price__Ot7-z"}},function(e,t,a){e.exports={meals:"MealsAvailable_meals__2pH-E","meals-appear":"MealsAvailable_meals-appear__Hxo36",MealsLoading:"MealsAvailable_MealsLoading__36zgS",MealsError:"MealsAvailable_MealsError__2fFzA"}},function(e,t,a){e.exports={backdrop:"Modal_backdrop__Y3pxY",modal:"Modal_modal__j3zfR","slide-down":"Modal_slide-down__anX_w"}},,,function(e,t,a){e.exports={summary:"MealsSummary_summary__1CmqO"}},function(e,t,a){e.exports={card:"Card_card__FN7Tb"}},function(e,t,a){e.exports={input:"Input_input__2ufqn"}},function(e,t,a){e.exports={form:"MealItemForm_form__16YYq"}},,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(9),c=a.n(n),r=(a(27),a(2)),i=a(1),s=a.n(i),o=a(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},d=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),j=a(11),u=a.n(j),m=function(e){var t=Object(i.useState)(!1),a=Object(r.a)(t,2),n=a[0],c=a[1],s=Object(i.useContext)(d).items,j=s.reduce((function(e,t){return e+t.amount}),0),m="".concat(u.a.button," ").concat(n?u.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(o.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(o.jsx)("span",{className:u.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:u.a.badge,children:j})]})},b=a.p+"static/media/soyaChaap.4a3d92ad.jpg",O=a.p+"static/media/Tawa_paneer.4dfa7537.jpg",f=a.p+"static/media/TikkaImage.ed9547e6.jpg",p=a.p+"static/media/TawachaapwithrumaliRoti.a38b323c.jpg",x=a(6),h=a.n(x),_=a.p+"static/media/Malai_Soya_Chaap_Tikka.76183ff4.webp",v=function(e){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsxs)("header",{className:h.a.header,children:[Object(o.jsx)("h1",{children:" Recipe Book!!"}),Object(o.jsx)(m,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:h.a["main-image"],children:Object(o.jsx)("img",{src:f,alt:"A table full of delicious food!"})}),Object(o.jsx)("div",{className:h.a["side-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of  food!"})}),Object(o.jsx)("div",{className:h.a["side-image"],children:Object(o.jsx)("img",{src:O,alt:"A table full of  food!"})}),Object(o.jsx)("div",{className:h.a["side-image"],children:Object(o.jsx)("img",{src:_,alt:"A table full of  food!"})}),Object(o.jsxs)("div",{className:h.a["side-image"],children:[Object(o.jsx)("img",{src:p,alt:"A table full of  food!"})," "]})]})},C=a(19),g=a.n(C),N=function(){return Object(o.jsxs)("section",{className:g.a.summary,children:[Object(o.jsx)("h2",{children:"Your hunger companion!! "}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},y=a(7),A=a.n(y),k=a(13),w=a(20),M=a.n(w),S=function(e){return Object(o.jsx)("div",{className:M.a.card,children:e.children})},I=a(5),F=a(21),E=a.n(F),R=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:E.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(I.a)({ref:t},e.input))]})})),T=a(22),H=a.n(T),P=function(e){var t=Object(i.useState)(!0),a=Object(r.a)(t,2),n=a[0],c=a[1],s=Object(i.useRef)();return Object(o.jsxs)("form",{className:H.a.form,onSubmit:function(t){t.preventDefault();var a=s.current.value,n=+a;0===a.trim().length||n<1||n>5?c(!1):e.onAddToCart(n)},children:[Object(o.jsx)(R,{ref:s,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!n&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},B=a(14),z=a.n(B),Y=function(e){var t=Object(i.useContext)(d),a="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:z.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:z.a.description,children:e.description}),Object(o.jsx)("div",{className:z.a.price,children:a})]}),Object(o.jsx)("div",{children:Object(o.jsx)(P,{onAddToCart:function(a){t.addItem({id:e.id,name:e.name,amount:a,price:e.price})}})})]})},q=a(15),D=a.n(q),J=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)(!0),s=Object(r.a)(c,2),l=s[0],d=s[1],j=Object(i.useState)(),u=Object(r.a)(j,2),m=u[0],b=u[1];if(Object(i.useEffect)((function(){(function(){var e=Object(k.a)(A.a.mark((function e(){var t,a,c,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-cd45f-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in a=e.sent,c=[],a)c.push({id:r,name:a[r].name,description:a[r].description,price:a[r].price});n(c),d(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){d(!1),b(e.message)}))}),[]),l)return Object(o.jsx)("section",{className:D.a.MealsLoading,children:Object(o.jsx)("p",{children:"Loading..."})});if(m)return Object(o.jsx)("section",{className:D.a.MealsError,children:Object(o.jsx)("p",{children:m})});var O=a.map((function(e){return Object(o.jsx)(Y,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:D.a.meals,children:Object(o.jsx)(S,{children:Object(o.jsx)("ul",{children:O})})})},L=function(){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsx)(N,{}),Object(o.jsx)(J,{})]})},V=a(16),K=a.n(V),X=function(e){return Object(o.jsx)("div",{className:K.a.backdrop,onClick:e.onClose})},$=function(e){return Object(o.jsx)("div",{className:K.a.modal,children:Object(o.jsx)("div",{className:K.a.content,children:e.children})})},Q=document.getElementById("overlays"),U=function(e){return Object(o.jsxs)(i.Fragment,{children:[c.a.createPortal(Object(o.jsx)(X,{onClose:e.onClose}),Q),c.a.createPortal(Object(o.jsx)($,{children:e.children}),Q)]})},W=a(8),G=a.n(W),Z=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:G.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:G.a.summary,children:[Object(o.jsx)("span",{className:G.a.price,children:t}),Object(o.jsxs)("span",{className:G.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:G.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},ee=a(4),te=a.n(ee),ae=a(3),ne=a.n(ae),ce=function(e){return""===e.trim()},re=function(e){var t=Object(i.useState)({name:!0,street:!0,city:!0,postalCode:!0}),a=Object(r.a)(t,2),n=a[0],c=a[1],s=Object(i.useRef)(),l=Object(i.useRef)(),d=Object(i.useRef)(),j=Object(i.useRef)(),u="".concat(ne.a.control," ").concat(n.name?"":ne.a.invalid),m="".concat(ne.a.control," ").concat(n.street?"":ne.a.invalid),b="".concat(ne.a.control," ").concat(n.postalCode?"":ne.a.invalid),O="".concat(ne.a.control," ").concat(n.city?"":ne.a.invalid);return Object(o.jsxs)("form",{className:ne.a.form,onSubmit:function(t){t.preventDefault();var a=s.current.value,n=l.current.value,r=d.current.value,i=j.current.value,o=!ce(a),u=!ce(n),m=!ce(i),b=5===r.trim().length;c({name:o,street:u,city:m,postalCode:b}),o&&u&&m&&b&&e.onConfirm({name:a,street:n,city:i,postalCode:r})},children:[Object(o.jsxs)("div",{className:u,children:[Object(o.jsx)("p",{children:"Please enter your details for order!"}),Object(o.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(o.jsx)("input",{type:"text",id:"name",ref:s}),!n.name&&Object(o.jsx)("p",{children:"Please enter a valid name!"})]}),Object(o.jsxs)("div",{className:m,children:[Object(o.jsx)("label",{htmlFor:"street",children:"Street"}),Object(o.jsx)("input",{type:"text",id:"street",ref:l}),!n.street&&Object(o.jsx)("p",{children:"Please enter a valid street!"})]}),Object(o.jsxs)("div",{className:b,children:[Object(o.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(o.jsx)("input",{type:"text",id:"postal",ref:d}),!n.postalCode&&Object(o.jsx)("p",{children:"Please enter a valid postal code (5 characters long)!"})]}),Object(o.jsxs)("div",{className:O,children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{type:"text",id:"city",ref:j}),!n.city&&Object(o.jsx)("p",{children:"Please enter a valid city!"})]}),Object(o.jsxs)("div",{className:ne.a.actions,children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{className:ne.a.submit,children:"Confirm"})]})]})},ie=function(e){var t=Object(i.useState)(!1),a=Object(r.a)(t,2),n=a[0],c=a[1],l=Object(i.useState)(!1),j=Object(r.a)(l,2),u=j[0],m=j[1],b=Object(i.useState)(!1),O=Object(r.a)(b,2),f=O[0],p=O[1],x=Object(i.useContext)(d),h="$".concat(x.totalAmount.toFixed(2)),_=x.items.length>0,v=function(e){x.removeItem(e)},C=function(e){x.addItem(e)},g=function(){var e=Object(k.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://react-http-cd45f-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:x.items})});case 3:m(!1),p(!0),x.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=Object(o.jsx)("ul",{className:te.a["cart-items"],children:x.items.map((function(e){return Object(o.jsx)(Z,{name:e.name,amount:e.amount,price:e.price,onRemove:v.bind(null,e.id),onAdd:C.bind(null,e)},e.id)}))}),y=Object(o.jsxs)("div",{className:te.a.actions,children:[Object(o.jsx)("button",{className:te.a["button--alt"],onClick:e.onClose,children:"Close"}),_&&Object(o.jsx)("button",{className:te.a.button,onClick:function(){c(!0)},children:"Order"})]}),w=Object(o.jsxs)(s.a.Fragment,{children:[N,Object(o.jsxs)("div",{className:te.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:h})]}),n&&Object(o.jsx)(re,{onConfirm:g,onCancel:e.onClose}),!n&&y]}),M=Object(o.jsx)("p",{children:"Sending order data..."}),S=Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)("p",{children:"Successfully sent the order!"}),Object(o.jsx)("div",{className:te.a.actions,children:Object(o.jsx)("button",{className:te.a.button,onClick:e.onClose,children:"Close"})})]});return Object(o.jsxs)(U,{onClose:e.onClose,children:[!u&&!f&&w,u&&M,!u&&f&&S]})},se=a(18),oe={items:[],totalAmount:0},le=function(e,t){if("ADD"===t.type){var a,n=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var i=Object(I.a)(Object(I.a)({},r),{},{amount:r.amount+t.item.amount});(a=Object(se.a)(e.items))[c]=i}else a=e.items.concat(t.item);return{items:a,totalAmount:n}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],d=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var j=Object(I.a)(Object(I.a)({},l),{},{amount:l.amount-1});(s=Object(se.a)(e.items))[o]=j}return{items:s,totalAmount:d}}return t.type,oe},de=function(e){var t=Object(i.useReducer)(le,oe),a=Object(r.a)(t,2),n=a[0],c=a[1],s={items:n.items,totalAmount:n.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(o.jsx)(d.Provider,{value:s,children:e.children})};var je=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(o.jsxs)(de,{children:[a&&Object(o.jsx)(ie,{onClose:function(){n(!1)}}),Object(o.jsx)(v,{onShowCart:function(){n(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(L,{})})]})};c.a.render(Object(o.jsx)(je,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.949aae5a.chunk.js.map