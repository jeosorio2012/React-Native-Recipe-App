(()=>{var e={3598:(e,t,i)=>{var r={"./bologna.png":9657,"./chickenwbroc.png":3817,"./chili.jpeg":4233,"./curry.png":8719,"./grilled.jpeg":3396,"./lasagna.png":2929,"./lemon.jpeg":9245,"./mush.jpeg":8013,"./shrimp.jpeg":763,"./soup.jpeg":8631,"./spinach.jpeg":9985,"./tacos.png":6090};function n(e){var t=a(e);return i(t)}function a(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=a,e.exports=n,n.id=3598},7829:(e,t,i)=>{"use strict";i.r(t),i.d(t,{RecipeCard:()=>U,default:()=>P});var r=i(885),n=i(4333),a=i(9233),o=i(1133),s=i(9566),c=i(477),l=i(3497),d=i(7504),f=i(6337),u=i(9899),p=i(3026),g=i(9526),h=i(4637),m=i(1391),b=i(7557);function x(e){return(0,b.jsx)(h.default,{onPress:function(){return e.setLiked((function(e){return!e}))},children:(0,b.jsx)(m.default,{name:e.liked?"heart":"heart-outline",size:32,color:e.liked?"red":"black"})})}function y(e){var t=e.route,n=e.navigation,s=(0,g.useState)(t.params.item.favorite),c=(0,r.default)(s,2),l=c[0],f=c[1];return(0,b.jsx)(p.default,{style:v.container,children:(0,b.jsxs)(o.default,{style:v.infoRecipeContainer,children:[(0,b.jsx)(o.default,{style:v.imageContainer,children:(0,b.jsx)(u.default,{style:v.image,source:i(3598)("./"+t.params.item.image)})}),(0,b.jsx)(a.default,{style:v.infoRecipeName,children:t.params.item.name}),(0,b.jsx)(o.default,{style:v.infoContainer,children:(0,b.jsx)(a.default,{style:v.infoDescriptionRecipe,children:t.params.item.description})}),(0,b.jsx)(o.default,{style:v.infoContainer,children:(0,b.jsxs)(a.default,{style:v.infoDescriptionRecipe,children:["Ingredients: ",t.params.item.ingredients]})}),(0,b.jsx)(o.default,{children:(0,b.jsx)(x,{liked:l,setLiked:function(e){f(!l),t.params.item.favorite=!l;var i=t.params.data.findIndex((function(e){return e.recipeId==t.params.item.recipeId}));t.params.data[i].favorite=!l}})}),(0,b.jsx)(o.default,{style:v.infoContainer,children:(0,b.jsx)(d.default,{onPress:function(){return n.navigate("home")},children:(0,b.jsx)(a.default,{style:v.category,children:"Home"})})}),(0,b.jsx)(o.default,{style:v.infoContainer,children:(0,b.jsx)(d.default,{onPress:function(){var e=t.params.data.filter((function(e){return 1==e.favorite}));n.navigate("favorite",{recipes:e})},children:(0,b.jsx)(a.default,{style:v.category,children:"Favorite List"})})})]})})}var j=f.default.get("window").width,v=n.default.create({container:{backgroundColor:"white",flex:1},image:{width:"100%",height:250},imageContainer:{flex:1,justifyContent:"center",width:j,height:250},paginationContainer:{flex:1,position:"absolute",alignSelf:"center",paddingVertical:8,marginTop:200},paginationDot:{width:8,height:8,borderRadius:4,marginHorizontal:0},infoRecipeContainer:{flex:1,margin:25,marginTop:20,justifyContent:"center",alignItems:"center"},infoContainer:{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"flex-start"},buttonContainer:{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"flex-start"},infoPhoto:{height:20,width:20,marginRight:0},infoRecipe:{fontSize:14,fontWeight:"bold",marginLeft:5},category:{fontSize:14,fontWeight:"bold",margin:10,color:"#2cd18a"},infoDescriptionRecipe:{textAlign:"left",fontSize:16,marginTop:30,margin:15},infoRecipeName:{fontSize:28,margin:20,marginTop:120,fontWeight:"bold",color:"black",textAlign:"center"}});function C(e){var t=e.route,n=e.navigation,f=(0,g.useState)(""),p=(0,r.default)(f,2),h=p[0],m=p[1],x=(0,g.useState)(t.params.recipes),y=(0,r.default)(x,2),j=y[0],v=(y[1],(0,g.useState)(t.params.recipes)),C=(0,r.default)(v,2),k=C[0],S=C[1];return(0,b.jsxs)(c.default,{children:[(0,b.jsx)(l.default,{style:w.textInputStyle,value:h,placeholder:"Search Recipes",onChangeText:function(e){return function(e){if(e){var t=j.filter((function(t){return t.name.toUpperCase().indexOf(e.toUpperCase())>-1}));S(t),m(e)}else S(j),m(e)}(e)}}),(0,b.jsx)(o.default,{style:w.infoRecipeContainer,children:(0,b.jsx)(o.default,{style:w.infoContainer,children:(0,b.jsx)(d.default,{onPress:function(){return n.navigate("home")},children:(0,b.jsx)(a.default,{style:w.category,children:"Home"})})})}),(0,b.jsx)(s.default,{data:k,renderItem:function(e){var t=e.item;return(0,b.jsx)(d.default,{underlayColor:"rgba(73,182,77,0.9)",onPress:function(){return function(e){n.navigate("recipe",{item:e,data:j})}(t)},children:(0,b.jsxs)(o.default,{style:O.container,children:[(0,b.jsx)(u.default,{style:O.photo,source:i(3598)("./"+t.image)}),(0,b.jsx)(a.default,{style:O.title,children:t.name}),(0,b.jsx)("br",{})]})})},vertical:!0,keyExtractor:function(e){return""+e.recipeId}})]})}var w=n.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},textInputStyle:{height:40,borderWidth:1,paddingLeft:20,margin:5,borderColor:"#009688",backgroundColor:"#FFFFFF"},infoContainer:{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"flex-start"},category:{fontSize:14,fontWeight:"bold",margin:10,color:"#2cd18a"},infoRecipeContainer:{flex:1,margin:25,marginTop:20,justifyContent:"center",alignItems:"center"}}),k=f.default.get("window"),S=k.width,I=k.height,R=S<I?S:I,O=n.default.create({container:{flex:1,justifyContent:"center",alignItems:"center",marginLeft:20,marginTop:20,width:(R-40)/1,height:225,borderColor:"#cccccc",borderWidth:.5,borderRadius:15},title:{flex:1,fontSize:17,fontWeight:"bold",textAlign:"center",color:"#444444",marginTop:3,marginRight:5,marginLeft:5},photo:{width:(R-40)/1,height:150,borderRadius:15,borderBottomLeftRadius:0,borderBottomRightRadius:0}}),T=i(5690),F=i(8094);const A=JSON.parse('[{"name":"Grilled Chicken with Brocoli and Potatoes","description":"This recipe is a very healthy choice among chicken dishes becuase it has important macronutrients and some seasoned potatoes","ingredients":"200g of Chicken breast, brocoli, salt, pepper, potatoes, garlic, vegetable oil, Mozzarella cheese.","recipeId":1,"image":"chickenwbroc.png","favorite":false},{"name":"Classic Spaghetti Bolognese","description":"A hearty and delicious Italian dish that\'s perfect for dinner","ingredients":"spaghetti, ground beef, canned crushed tomatoes, onion, garlic, olive oil, salt, pepper","recipeId":2,"image":"bologna.png","favorite":false},{"name":"Slow Cooker Chicken Tacos","description":"An easy and flavorful way to enjoy tacos","ingredients":"chicken breasts, salsa, taco seasoning, tortillas, lettuce, shredded cheese, sour cream","recipeId":3,"image":"tacos.png","favorite":false},{"name":"Roasted Vegetable Lasagna","description":"A vegetarian lasagna that\'s packed with flavor","ingredients":"lasagna noodles, eggplant, zucchini, red bell pepper, onion, garlic, ricotta cheese, mozzarella cheese, tomato sauce","recipeId":4,"image":"lasagna.png","favorite":false},{"name":"Thai Green Curry","description":"A spicy and fragrant curry that\'s perfect for a cold night","ingredients":"chicken, green curry paste, coconut milk, fish sauce, sugar, green beans, bell pepper, basil","recipeId":5,"image":"curry.png","favorite":false},{"name":"Beef Stroganoff","description":"A comforting and filling dish that\'s perfect for a cold winter day","ingredients":"beef sirloin, onion, garlic, mushrooms, sour cream, dijon mustard, beef broth, egg noodles","recipeId":7,"image":"mush.jpeg","favorite":false},{"name":"Butternut Squash Soup","description":"A creamy and flavorful soup that\'s perfect for fall","ingredients":"butternut squash, onion, garlic, chicken broth, heavy cream, butter, cinnamon, nutmeg","recipeId":8,"image":"soup.jpeg","favorite":false},{"name":"Spicy Shrimp Stir-Fry","description":"A quick and easy weeknight meal that\'s packed with flavor","ingredients":"shrimp, broccoli, bell pepper, onion, garlic, soy sauce, sriracha, honey, ginger","recipeId":9,"image":"shrimp.jpeg","favorite":false},{"name":"Grilled Chicken Salad","description":"A healthy and satisfying salad that\'s perfect for lunch","ingredients":"chicken breasts, mixed greens, cherry tomatoes, cucumber, red onion, feta cheese, balsamic vinaigrette","recipeId":10,"image":"grilled.jpeg","favorite":false},{"name":"Mushroom and Spinach Stuffed Chicken Breast","description":"A flavorful and impressive dish that\'s perfect for a dinner party","ingredients":"chicken breasts, mushrooms, spinach, onion, garlic, cream cheese, parmesan cheese","recipeId":11,"image":"spinach.jpeg","favorite":false},{"name":"Lemon Garlic Shrimp Pasta","description":"A light and refreshing pasta dish that\'s perfect for summer","ingredients":"shrimp, linguine, garlic, lemon, white wine, butter, parsley","recipeId":12,"image":"lemon.jpeg","favorite":false},{"name":"Vegetarian Chili","description":"A hearty and satisfying chili that\'s perfect for a cold day","ingredients":"kidney beans, black beans, corn, tomato sauce, onion, garlic, chili powder, cumin, paprika, sour cream.","recipeId":13,"image":"chili.jpeg","favorite":false}]');var L=(0,F.default)();function z(e){var t=e.navigation,n=(0,g.useState)(""),f=(0,r.default)(n,2),p=f[0],h=f[1],m=(0,g.useState)(A),x=(0,r.default)(m,2),y=x[0],j=(x[1],(0,g.useState)(A)),v=(0,r.default)(j,2),C=v[0],w=v[1];return(0,b.jsxs)(c.default,{children:[(0,b.jsx)(l.default,{style:W.textInputStyle,value:p,placeholder:"Search Recipes",onChangeText:function(e){return function(e){if(e){var t=y.filter((function(t){return t.name.toUpperCase().indexOf(e.toUpperCase())>-1}));w(t),h(e)}else w(y),h(e)}(e)}}),(0,b.jsx)(o.default,{style:W.infoRecipeContainer,children:(0,b.jsx)(o.default,{style:W.infoContainer,children:(0,b.jsx)(d.default,{onPress:function(){var e=y.filter((function(e){return 1==e.favorite}));t.navigate("favorite",{recipes:e})},children:(0,b.jsx)(a.default,{style:W.category,children:"Favorite List"})})})}),(0,b.jsx)(s.default,{data:C,renderItem:function(e){var r=e.item;return(0,b.jsx)(d.default,{underlayColor:"rgba(73,182,77,0.9)",onPress:function(){return function(e){t.navigate("recipe",{item:e,data:y})}(r)},children:(0,b.jsxs)(o.default,{style:U.container,children:[(0,b.jsx)(u.default,{style:U.photo,source:i(3598)("./"+r.image)}),(0,b.jsx)(a.default,{style:U.title,children:r.name}),(0,b.jsx)("br",{})]})})},vertical:!0,keyExtractor:function(e){return""+e.recipeId}})]})}function P(){return(0,b.jsx)(T.default,{children:(0,b.jsxs)(L.Navigator,{screenOptions:{headerShown:!1},children:[(0,b.jsx)(L.Screen,{name:"home",component:z}),(0,b.jsx)(L.Screen,{name:"recipe",component:y}),(0,b.jsx)(L.Screen,{name:"favorite",component:C})]})})}var W=n.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},textInputStyle:{height:40,borderWidth:1,paddingLeft:20,margin:5,borderColor:"#009688",backgroundColor:"#FFFFFF"},infoContainer:{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"flex-start"},category:{fontSize:14,fontWeight:"bold",margin:10,color:"#2cd18a"},infoRecipeContainer:{flex:1,margin:25,marginTop:20,justifyContent:"center",alignItems:"center"}}),D=f.default.get("window"),B=D.width,N=D.height,M=B<N?B:N,U=n.default.create({container:{flex:1,justifyContent:"center",alignItems:"center",marginLeft:20,marginTop:20,width:(M-40)/1,height:225,borderColor:"#cccccc",borderWidth:.5,borderRadius:15},title:{flex:1,fontSize:17,fontWeight:"bold",textAlign:"center",color:"#444444",marginTop:3,marginRight:5,marginLeft:5},photo:{width:(M-40)/1,height:150,borderRadius:15,borderBottomLeftRadius:0,borderBottomRightRadius:0}})},9657:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/bologna.6d4ada458bfaeee8b766.png"},3817:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/chickenwbroc.7088fea0e478a7861709.png"},4233:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/chili.764738cad0774b8fb15b.jpeg"},8719:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/curry.89ebb23c302ecbc9bf10.png"},3396:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/grilled.c95c0097486f4955e671.jpeg"},2929:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/lasagna.13e5b8537eb609590215.png"},9245:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/lemon.096066106d14d5919b13.jpeg"},8013:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/mush.24fd7d0507a44ccfcfd5.jpeg"},763:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/shrimp.2dec863cd07ab2224fe8.jpeg"},8631:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/soup.8634a5b67810ab84f82a.jpeg"},9985:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/spinach.bfea790738d3062c8077.jpeg"},6090:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/tacos.e7f1a7fd21cc1375d2a3.png"}},t={};function i(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,i),a.exports}i.m=e,(()=>{var e=[];i.O=(t,r,n,a)=>{if(!r){var o=1/0;for(d=0;d<e.length;d++){for(var[r,n,a]=e[d],s=!0,c=0;c<r.length;c++)(!1&a||o>=a)&&Object.keys(i.O).every((e=>i.O[e](r[c])))?r.splice(c--,1):(s=!1,a<o&&(o=a));if(s){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,n,a]}})(),i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/React-Native-Recipe-App/",(()=>{var e={179:0};i.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[o,s,c]=r,l=0;if(o.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(c)var d=c(i)}for(t&&t(r);l<o.length;l++)a=o[l],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(d)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=i.O(void 0,[688],(()=>i(9484)));r=i.O(r)})();
//# sourceMappingURL=main.bd2df8f8.js.map