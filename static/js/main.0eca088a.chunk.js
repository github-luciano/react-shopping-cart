(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),i=c(12),o=c.n(i),n=(c(22),c(6)),r=c(10),l=c(3),j=(c(23),c(16)),d=(c(24),c(2)),u=function(e){return Object(s.useEffect)((function(){e.handleCart(),e.handlePrice(),console.log(e.checkout)}),[e,e.checkout]),Object(d.jsx)("div",{className:"home-page",children:e.products.map((function(t){return Object(d.jsxs)("div",{className:"product-container",children:[Object(d.jsx)("img",{src:t.url,alt:"product"}),Object(d.jsx)("span",{className:"product-title",children:t.title}),Object(d.jsxs)("span",{className:"product-price",children:[t.price," $"]}),Object(d.jsx)("button",{className:"add-button",onClick:function(){return function(t){e.setCheckout((function(e){return[].concat(Object(j.a)(e),[{id:t.id,url:t.url,title:t.title,price:t.price}])}))}(t)},children:"Add to cart"})]})}))})},h=(c(26),function(e){return Object(d.jsxs)("div",{className:"shop-page",children:[Object(d.jsx)("div",{className:"cart-list",children:e.checkout.map((function(e){return Object(d.jsxs)("div",{className:"product-container",children:[Object(d.jsx)("img",{src:e.url,alt:"product"}),Object(d.jsxs)("div",{className:"prod-info",children:[Object(d.jsx)("span",{className:"product-title",children:e.title}),Object(d.jsxs)("span",{className:"product-price",children:[e.price," $"]})]})]})}))}),Object(d.jsxs)("div",{className:"proceed",children:[Object(d.jsxs)("h1",{children:["Total: ",e.totalPrice,"$"]}),Object(d.jsx)("span",{children:"Go to checkout"}),Object(d.jsx)("button",{children:"Checkout"})]})]})}),p=(c(27),c(14)),m=c.n(p),b=function(e){return Object(d.jsxs)("div",{className:"navbar-container",children:[Object(d.jsx)(r.b,{to:"/",children:Object(d.jsx)("img",{className:"forest-logo",src:"images/forest_logo.png",alt:"logo"})}),Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)("div",{className:"categories",children:"Tutte le categorie"}),Object(d.jsx)("input",{}),Object(d.jsx)("div",{className:"search-icon-container",children:Object(d.jsx)(m.a,{style:{color:"#333333",fontSize:"30px"}})})]}),Object(d.jsx)(r.b,{to:"/shop",children:Object(d.jsxs)("div",{className:"cart-container",children:[Object(d.jsx)("div",{className:"items-number",children:e.cartNumber}),Object(d.jsx)("img",{className:"shopping-cart-icon",src:"images/shopping_cart.png",alt:"icon"})]})})]})},g=c(7),O=c.n(g);var x=function(){var e=Object(s.useState)(0),t=Object(n.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)([{id:O()(),url:"https://m.media-amazon.com/images/I/813Uik1b-7L._AC_UL320_.jpg",title:"The Lean Startup by Eric Ries",price:"5.64"},{id:O()(),url:"https://m.media-amazon.com/images/I/416ipvjdhjS._AC_UL320_.jpg",title:"Housekeeper Client Data Log Book | Professional House Cleaning Client Tracking Book | Appointment Book with A thru Z Alpha Tabs to Record",price:"5.30"},{id:O()(),url:"https://m.media-amazon.com/images/I/81iUXe9ygkL._AC_UL320_.jpg",title:"Elon Musk: How the Billionaire CEO of SpaceX and Tesla is Shaping our Future",price:"10.85"},{id:O()(),url:"https://m.media-amazon.com/images/I/71-X9PLxPKL._AC_UL320_.jpg",title:"Elon Musk: The Life, Lessons & Rules For Success",price:"8.83"},{id:O()(),url:"https://m.media-amazon.com/images/I/71iEVsSP1GL._AC_UL320_.jpg",title:"The Power of Habit: Why We Do What We Do, and How to Change",price:"17.67"},{id:O()(),url:"https://m.media-amazon.com/images/I/81PIXB1RBEL._AC_UL320_.jpg",title:"Influence: The Psychology of Persuasion",price:"17.74"},{id:O()(),url:"https://m.media-amazon.com/images/I/71j5fJvL6IL._AC_UL320_.jpg",title:"The Definitive Book of Body Language: How to read others attitudes by their gestures",price:"9.86"},{id:O()(),url:"https://m.media-amazon.com/images/I/81dQwQlmAXL._AC_UL320_.jpg",title:"Rich Dad Poor Dad: What The Rich Teach Their Kids about Money That the Poor and Middle Class Do Not",price:"9.72"}]),o=Object(n.a)(i,2),j=o[0],p=(o[1],Object(s.useState)([])),m=Object(n.a)(p,2),g=m[0],x=m[1],f=Object(s.useState)(0),N=Object(n.a)(f,2),_=N[0],k=N[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(b,{cartNumber:c,setCartNumber:a}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",exact:!0,element:Object(d.jsx)(u,{products:j,checkout:g,setCheckout:x,setCartNumber:a,handleCart:function(){a(g.length)},handlePrice:function(){for(var e=0,t=0;t<g.length;t++)e+=parseFloat(g[t].price);k(e),console.log(e)}})}),Object(d.jsx)(l.a,{path:"/shop",element:Object(d.jsx)(h,{checkout:g,setCheckout:x,totalPrice:_})})]})]})})};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.0eca088a.chunk.js.map