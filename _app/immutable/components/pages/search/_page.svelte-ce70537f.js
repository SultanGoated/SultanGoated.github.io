import{S as U,i as D,s as N,k as d,q as x,a as y,l as h,m as _,r as L,h as n,c as E,L as R,n as z,b as k,E as o,B,N as V}from"../../../chunks/index-4c969e6b.js";function Y(f,e,s){const l=f.slice();return l[0]=e[s],l}function j(f){let e,s,l=f[0][0]+"",a;return{c(){e=d("li"),s=d("a"),a=x(l),this.h()},l(i){e=h(i,"LI",{});var c=_(e);s=h(c,"A",{href:!0});var p=_(s);a=L(p,l),p.forEach(n),c.forEach(n),this.h()},h(){z(s,"href","/search"+f[0][1])},m(i,c){k(i,e,c),o(e,s),o(s,a)},p:B,d(i){i&&n(e)}}}function F(f){let e,s,l,a,i,c,p,T,A,g,v,b,C,H=[["Users","/users"],["Address","/addresses"],["Banks","/banks"],["Appliances","/appliances"],["Beers","/beers"],["Blood Types","/blood_types"],["Credit Cards","/credit_cards"]],m=[];for(let t=0;t<7;t+=1)m[t]=j(Y(f,H,t));return{c(){e=d("title"),s=x("search"),l=y(),a=d("div"),i=d("h1"),c=x("Press any of the following categories to display their items"),p=y(),T=d("hr"),A=y(),g=d("ul");for(let t=0;t<7;t+=1)m[t].c();v=y(),b=d("style"),C=x(`body{
			background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
			background-size: 400% 400%;
			animation: gradient 30s ease infinite;
			height: 100vh;
		}
		@keyframes gradient {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}`),this.h()},l(t){e=h(t,"TITLE",{});var u=_(e);s=L(u,"search"),u.forEach(n),l=E(t),a=h(t,"DIV",{class:!0});var r=_(a);i=h(r,"H1",{});var P=_(i);c=L(P,"Press any of the following categories to display their items"),P.forEach(n),p=E(r),T=h(r,"HR",{}),A=E(r),g=h(r,"UL",{});var S=_(g);for(let I=0;I<7;I+=1)m[I].l(S);S.forEach(n),r.forEach(n),v=E(t);const q=R("svelte-crb62",document.head);b=h(q,"STYLE",{});var w=_(b);C=L(w,`body{
			background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
			background-size: 400% 400%;
			animation: gradient 30s ease infinite;
			height: 100vh;
		}
		@keyframes gradient {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}`),w.forEach(n),q.forEach(n),this.h()},h(){z(a,"class","chat")},m(t,u){k(t,e,u),o(e,s),k(t,l,u),k(t,a,u),o(a,i),o(i,c),o(a,p),o(a,T),o(a,A),o(a,g);for(let r=0;r<7;r+=1)m[r]&&m[r].m(g,null);k(t,v,u),o(document.head,b),o(b,C)},p:B,i:B,o:B,d(t){t&&n(e),t&&n(l),t&&n(a),V(m,t),t&&n(v),n(b)}}}class J extends U{constructor(e){super(),D(this,e,null,F,N,{})}}export{J as default};
