(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{35:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(26),r=n.n(i),c=n(6),o=n(2),l=(n(35),n(1));var u=function(){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(c.b,{to:"/",children:"Home"}),Object(l.jsx)(c.b,{to:"/about",children:"About"})]})},j=n(17),m=n.n(j),d=n(29),v=n(8),h=n(9),p=n(11),b=n(10),O=n(30),f=n.n(O);n(65);var x=function(e){var t=e.year,n=e.title,a=e.summary,s=e.genres,i=e.poster;return Object(l.jsx)("div",{className:"movie",children:Object(l.jsxs)(c.b,{to:{pathname:"./movie-detail",state:{year:t,title:n,summary:a,poster:i,genres:s}},children:[Object(l.jsx)("img",{src:i,alt:n,title:n}),Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsx)("h3",{className:"movie__title",children:n}),Object(l.jsx)("h5",{className:"movie__year",children:t}),Object(l.jsx)("ul",{className:"movie__genres",children:s.map((function(e,t){return Object(l.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(l.jsx)("p",{className:"movie__summary",children:a.length>180?a.slice(0,180)+"...":a})]})]})})},g=(n(66),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.setLoading=function(){e.setState((function(e){return{isLoading:e.isLoading=!e.isLoading}}))},e.getMovies=Object(d.a)(m.a.mark((function t(){var n,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState((function(){return{isLoading:!1,movies:a}}));case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader__text",children:" Loading..."})}):Object(l.jsx)("div",{className:"movies",children:n.map((function(e){var t=e.id,n=e.year,a=e.title,s=e.summary,i=e.genres,r=e.medium_cover_image;return Object(l.jsx)(x,{year:n,title:a,summary:s,genres:i,poster:r},t)}))})})}}]),n}(s.a.Component));n(67);var _=function(){return Object(l.jsxs)("div",{className:"about__container",children:[Object(l.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(l.jsx)("span",{children:"- George Orwell, 1984"})]})},y=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location.state,n=e.history.push;void 0===t&&n("/")}},{key:"render",value:function(){console.log(this.props);var e=this.props.location.state;if(e){var t=e.title;return Object(l.jsx)("span",{children:t})}return null}}]),n}(s.a.Component);n(68);var N=function(){return Object(l.jsxs)(c.a,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:g}),Object(l.jsx)(o.a,{path:"/about",component:_}),Object(l.jsx)(o.a,{path:"/movie-detail",component:y})]})};r.a.render(Object(l.jsx)(N,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.61d0bd2a.chunk.js.map