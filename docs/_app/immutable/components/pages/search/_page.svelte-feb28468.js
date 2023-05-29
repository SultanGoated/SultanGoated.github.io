import{S as U,i as D,s as M,k as d,q as x,a as y,l as h,m as _,r as L,h as a,c as E,L as R,n as z,b as k,E as o,B,M as V}from"../../../chunks/index-3f5a7657.js";function Y(f,e,n){const l=f.slice();return l[0]=e[n],l}function j(f){let e,n,l=f[0][0]+"",r;return{c(){e=d("li"),n=d("a"),r=x(l),this.h()},l(s){e=h(s,"LI",{});var c=_(e);n=h(c,"A",{href:!0});var p=_(n);r=L(p,l),p.forEach(a),c.forEach(a),this.h()},h(){z(n,"href","/search"+f[0][1])},m(s,c){k(s,e,c),o(e,n),o(n,r)},p:B,d(s){s&&a(e)}}}function F(f){let e,n,l,r,s,c,p,T,A,g,v,b,C,H=[["Users","/users"],["Address","/addresses"],["Banks","/banks"],["Appliances","/appliances"],["Beers","/beers"],["Blood Types","/blood_types"],["Credit Cards","/credit_cards"]],m=[];for(let t=0;t<7;t+=1)m[t]=j(Y(f,H,t));return{c(){e=d("title"),n=x("search"),l=y(),r=d("div"),s=d("h1"),c=x("Press any of the following categories to display their items"),p=y(),T=d("hr"),A=y(),g=d("ul");for(let t=0;t<7;t+=1)m[t].c();v=y(),b=d("style"),C=x(`body{\r
			background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\r
			background-size: 400% 400%;\r
			animation: gradient 30s ease infinite;\r
			height: 100vh;\r
		}\r
		@keyframes gradient {\r
			0% {\r
				background-position: 0% 50%;\r
			}\r
			50% {\r
				background-position: 100% 50%;\r
			}\r
			100% {\r
				background-position: 0% 50%;\r
			}\r
		}`),this.h()},l(t){e=h(t,"TITLE",{});var u=_(e);n=L(u,"search"),u.forEach(a),l=E(t),r=h(t,"DIV",{class:!0});var i=_(r);s=h(i,"H1",{});var P=_(s);c=L(P,"Press any of the following categories to display their items"),P.forEach(a),p=E(i),T=h(i,"HR",{}),A=E(i),g=h(i,"UL",{});var S=_(g);for(let I=0;I<7;I+=1)m[I].l(S);S.forEach(a),i.forEach(a),v=E(t);const q=R("svelte-crb62",document.head);b=h(q,"STYLE",{});var w=_(b);C=L(w,`body{\r
			background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\r
			background-size: 400% 400%;\r
			animation: gradient 30s ease infinite;\r
			height: 100vh;\r
		}\r
		@keyframes gradient {\r
			0% {\r
				background-position: 0% 50%;\r
			}\r
			50% {\r
				background-position: 100% 50%;\r
			}\r
			100% {\r
				background-position: 0% 50%;\r
			}\r
		}`),w.forEach(a),q.forEach(a),this.h()},h(){z(r,"class","chat")},m(t,u){k(t,e,u),o(e,n),k(t,l,u),k(t,r,u),o(r,s),o(s,c),o(r,p),o(r,T),o(r,A),o(r,g);for(let i=0;i<7;i+=1)m[i]&&m[i].m(g,null);k(t,v,u),o(document.head,b),o(b,C)},p:B,i:B,o:B,d(t){t&&a(e),t&&a(l),t&&a(r),V(m,t),t&&a(v),a(b)}}}class J extends U{constructor(e){super(),D(this,e,null,F,M,{})}}export{J as default};
