(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(n,e,t){n.exports=t(64)},63:function(n,e,t){},64:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(18),o=t.n(i),c=t(16),l=t(7),u=t(8),s=t(11),h=t(9),d=t(12),f=t(10),p=t(17),m=t.n(p),g=t(26),b="api_key=".concat("FyxxIFPz5rPxoklCj1p0PUsKasR16cIn"),v="https://api.giphy.com/v1/gifs/",j=t(4),y=t(5);function E(){var n=Object(j.a)(["\n  background-color: white;\n  border-radius: 50%;\n  width: 10px;\n  height: 10px;\n  margin: 0 5px;\n\n  animation: "," 0.5s linear infinite;\n  animation-delay: ",";\n"]);return E=function(){return n},n}function O(){var n=Object(j.a)(["\n  margin: 100px 0 50px 0;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  height: 60px;\n"]);return O=function(){return n},n}function w(){var n=Object(j.a)(["\n  0% { margin-bottom: 0; }\n  50% { margin-bottom: 15px }\n  100% { margin-bottom: 0 }\n"]);return w=function(){return n},n}var x=Object(y.b)(w()),k=y.a.div(O()),C=y.a.div(E(),x,function(n){return n.delay}),S=function(){return r.a.createElement(k,null,r.a.createElement(C,{delay:"0s"}),r.a.createElement(C,{delay:".1s"}),r.a.createElement(C,{delay:".2s"}))},I=t(29),T=t.n(I);function F(){var n=Object(j.a)(["\n  margin: 10px;\n  width: ","px;\n  height: ","px;\n  background-color: ",";\n"]);return F=function(){return n},n}var R=function(){return["#2ecc71","#fef160","#f03434","#6bb9f0","#a537fd"][Math.floor(5*Math.random())]},H=function(n){function e(){var n,t;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(n=Object(h.a)(e)).call.apply(n,[this].concat(r)))).state={color:R()},t}return Object(d.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){var n=this.props,e=n.gif,t=n.handleImageChange;return r.a.createElement(_,{gifWidth:e.images.fixed_height.width,gifHeight:e.images.fixed_height.height,bgColor:this.state.color},r.a.createElement("img",{src:e.images.fixed_height.url,onLoad:t,onError:t,alt:e.title}))}}]),e}(a.Component),_=y.a.div(F(),function(n){return n.gifWidth},function(n){return n.gifHeight},function(n){return n.bgColor}),L=H;function G(){var n=Object(j.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 30px auto;\n  width: 80%;\n  @media (max-width: 700px) {\n    width: 100%;\n  }\n"]);return G=function(){return n},n}var W=function(n){var e=n.data,t=n.handleImageChange;return r.a.createElement(A,null,e.map(function(n){return r.a.createElement(L,{gif:n,handleImageChange:t,key:n.id})}))},A=y.a.div(G()),D=function(n){function e(){var n,t;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(n=Object(h.a)(e)).call.apply(n,[this].concat(r)))).state={loading:!0},t.componentDidMount=function(){window.addEventListener("scroll",T()(t.handleScrolling,400)),t.loadGifs(!0)},t.handleImageChange=function(){t.setState({loading:!t.imagesLoaded(t.galleryElement)})},t.loadGifs=function(n){t.props.fetchTrending(n)},t.handleScrolling=function(){window.innerHeight+window.pageYOffset>=document.documentElement.scrollHeight-300&&!t.state.loading&&t.loadGifs(!1)},t}return Object(d.a)(e,n),Object(u.a)(e,[{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",T()(this.handleScrolling,400))}},{key:"renderSpinner",value:function(){return this.state.loading?r.a.createElement(S,null):null}},{key:"imagesLoaded",value:function(n){for(var e=Object(c.a)(n.querySelectorAll("img")),t=0;t<e.length;t+=1){if(!e[t].complete)return!1}return!0}},{key:"render",value:function(){var n=this;return r.a.createElement("div",{ref:function(e){n.galleryElement=e}},this.props.trending.data&&r.a.createElement(W,{data:this.props.trending.data,handleImageChange:this.handleImageChange}),this.renderSpinner())}}]),e}(a.Component),N=Object(f.b)(function(n){return{trending:n.trending}},{fetchTrending:function(n){return function(){var e=Object(g.a)(m.a.mark(function e(t,a){var r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=n?0:a().trending.data.length+1,fetch("".concat(v,"trending?offset=").concat(r,"&").concat(b)).then(function(n){return n.json()}).then(function(e){return t({type:"FETCH_TRENDING",payload:e,reset:n})});case 2:case"end":return e.stop()}},e,this)}));return function(n,t){return e.apply(this,arguments)}}()}})(D),U=t(67),M=t(68),P=t(66),q=t(65),z=t(69);function B(){var n=Object(j.a)([""]);return B=function(){return n},n}function J(){var n=Object(j.a)(["\n  padding: 5px;\n  width: 140px;\n  background: none;\n  outline: none;\n  border: none;\n  border-bottom: 2px solid black;\n  transition: 0.5s all;\n  :focus {\n    width: 180px;\n  }\n  ::placeholder {\n    color: black;\n  }\n"]);return J=function(){return n},n}var K=y.a.input(J()),Y=y.a.form(B()),$=function(n){return r.a.createElement(Y,{onSubmit:n.onSubmit},r.a.createElement(K,{placeholder:"search",type:"text",value:n.term,onChange:n.handleChange}))},Q=function(n){function e(){var n,t;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(n=Object(h.a)(e)).call.apply(n,[this].concat(r)))).state={value:""},t.handleChange=function(n){t.setState({value:n.target.value},function(){return t.props.fetchResults(t.state.value)})},t.handleSubmit=function(n){n.preventDefault(),"/search"!==t.props.history.location&&t.state.value&&t.props.history.push("/search")},t}return Object(d.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement($,{onSubmit:this.handleSubmit,handleChange:this.handleChange,term:this.state.value})}}]),e}(a.Component),V=Object(z.a)(Object(f.b)(null,{fetchResults:function(n){return function(){var e=Object(g.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(v,"search?q=").concat(n,"&limit=50&").concat(b)).then(function(n){return n.json()}).then(function(n){return t({type:"FETCH_RESULTS",payload:n})});case 1:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()}})(Q));function X(){var n=Object(j.a)(["\n  font-size: 18px;\n  margin: 15px;\n  color: black;\n"]);return X=function(){return n},n}function Z(){var n=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 55px;\n  background-color: #f7f7f7;\n"]);return Z=function(){return n},n}var nn=y.a.div(Z()),en=y.a.h2(X()),tn=function(n){return r.a.createElement(nn,null,r.a.createElement(q.a,{to:"/"},r.a.createElement(en,null,"Trending GIFS")),r.a.createElement(en,null,r.a.createElement(V,null)))},an=function(n){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.results.data?r.a.createElement(W,{data:this.props.results.data}):null)}}]),e}(r.a.Component),rn=Object(f.b)(function(n){return{results:n.searchResults}},null)(an),on=(t(63),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(tn,null),r.a.createElement(M.a,null,r.a.createElement(P.a,{exact:!0,path:"/",component:N}),r.a.createElement(P.a,{path:"/search",component:rn})))))}),cn=t(39),ln=t(13),un=Object(ln.c)({trending:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;if("FETCH_TRENDING"===e.type){var t=e.payload;return 0!==n.length&&(e.reset||(t.data=[].concat(Object(c.a)(n.data),Object(c.a)(e.payload.data)))),t}return n},searchResults:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return"FETCH_RESULTS"===e.type?e.payload:n}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var sn=Object(ln.d)(un,Object(ln.a)(cn.a));o.a.render(r.a.createElement(f.a,{store:sn},r.a.createElement(on,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.30d619e8.chunk.js.map