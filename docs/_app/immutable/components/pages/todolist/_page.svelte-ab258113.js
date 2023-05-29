import{S as Nt,i as St,s as Bt,k as _,q as T,a as L,l as p,m as b,r as D,h as c,c as I,L as Ut,n as u,b as O,E as a,P as vt,F as K,B as kt,M as mt,J as Ft,e as Q,u as It}from"../../../chunks/index-3f5a7657.js";function gt(i,l,t){const e=i.slice();return e[6]=l[t],e[8]=t,e}function Et(i,l,t){const e=i.slice();return e[6]=l[t],e[8]=t,e}function Tt(i){let l,t,e,s,h=i[1][i[8]].task+"",d,m,y,g;function N(){return i[4](i[8])}return{c(){l=_("li"),t=_("button"),e=T("Done"),s=L(),d=T(h),m=L(),this.h()},l(f){l=p(f,"LI",{class:!0});var r=b(l);t=p(r,"BUTTON",{class:!0,id:!0});var B=b(t);e=D(B,"Done"),B.forEach(c),s=I(r),d=D(r,h),m=I(r),r.forEach(c),this.h()},h(){u(t,"class","font svelte-bi25eh"),u(t,"id","done"),u(l,"class","font svelte-bi25eh")},m(f,r){O(f,l,r),a(l,t),a(t,e),a(l,s),a(l,d),a(l,m),y||(g=K(t,"click",N),y=!0)},p(f,r){i=f,r&2&&h!==(h=i[1][i[8]].task+"")&&It(d,h)},d(f){f&&c(l),y=!1,g()}}}function Dt(i){let l,t=i[6].done==!1&&Tt(i);return{c(){t&&t.c(),l=Q()},l(e){t&&t.l(e),l=Q()},m(e,s){t&&t.m(e,s),O(e,l,s)},p(e,s){e[6].done==!1?t?t.p(e,s):(t=Tt(e),t.c(),t.m(l.parentNode,l)):t&&(t.d(1),t=null)},d(e){t&&t.d(e),e&&c(l)}}}function yt(i){let l,t,e,s,h=i[1][i[8]].task+"",d,m,y,g;function N(){return i[5](i[8])}return{c(){l=_("li"),t=_("button"),e=T("Undone"),s=L(),d=T(h),m=L(),this.h()},l(f){l=p(f,"LI",{class:!0});var r=b(l);t=p(r,"BUTTON",{class:!0,id:!0});var B=b(t);e=D(B,"Undone"),B.forEach(c),s=I(r),d=D(r,h),m=I(r),r.forEach(c),this.h()},h(){u(t,"class","font svelte-bi25eh"),u(t,"id","done"),u(l,"class","font svelte-bi25eh")},m(f,r){O(f,l,r),a(l,t),a(t,e),a(l,s),a(l,d),a(l,m),y||(g=K(t,"click",N),y=!0)},p(f,r){i=f,r&2&&h!==(h=i[1][i[8]].task+"")&&It(d,h)},d(f){f&&c(l),y=!1,g()}}}function Lt(i){let l,t=i[6].done==!0&&yt(i);return{c(){t&&t.c(),l=Q()},l(e){t&&t.l(e),l=Q()},m(e,s){t&&t.m(e,s),O(e,l,s)},p(e,s){e[6].done==!0?t?t.p(e,s):(t=yt(e),t.c(),t.m(l.parentNode,l)):t&&(t.d(1),t=null)},d(e){t&&t.d(e),e&&c(l)}}}function Pt(i){let l,t,e,s,h,d,m,y,g,N,f,r,B,A,R,W,U,X,Z,F,$,x,P,C,tt,et,q,lt,J,nt,V,z,st,at,ct,H=i[1],v=[];for(let n=0;n<H.length;n+=1)v[n]=Dt(Et(i,H,n));let M=i[1],k=[];for(let n=0;n<M.length;n+=1)k[n]=Lt(gt(i,M,n));return{c(){l=_("title"),t=T("To Do List"),e=L(),s=_("main"),h=_("body"),d=_("div"),m=_("h1"),y=T("To Do List"),g=L(),N=_("fieldset"),f=_("label"),r=_("input"),B=L(),A=_("button"),R=T("add"),W=L(),U=_("fieldset"),X=T(`To Do Tasks\r
                `);for(let n=0;n<v.length;n+=1)v[n].c();Z=L(),F=_("fieldset"),$=T(`Done Tasks\r
                `);for(let n=0;n<k.length;n+=1)k[n].c();x=L(),P=_("fieldset"),C=_("a"),tt=T("Donation"),et=L(),q=_("h3"),lt=T("Contact via email: "),J=_("p"),nt=T("sultanhaidari8520@gmail.com"),V=L(),z=_("style"),st=T(`body{\r
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
		}`),this.h()},l(n){l=p(n,"TITLE",{});var E=b(l);t=D(E,"To Do List"),E.forEach(c),e=I(n),s=p(n,"MAIN",{class:!0});var o=b(s);h=p(o,"BODY",{class:!0});var S=b(h);d=p(S,"DIV",{class:!0});var w=b(d);m=p(w,"H1",{class:!0});var ft=b(m);y=D(ft,"To Do List"),ft.forEach(c),g=I(w),N=p(w,"FIELDSET",{class:!0});var dt=b(N);f=p(dt,"LABEL",{for:!0,id:!0});var j=b(f);r=p(j,"INPUT",{class:!0,type:!0,placeholder:!0}),B=I(j),A=p(j,"BUTTON",{class:!0});var ht=b(A);R=D(ht,"add"),ht.forEach(c),j.forEach(c),dt.forEach(c),W=I(w),U=p(w,"FIELDSET",{class:!0});var ot=b(U);X=D(ot,`To Do Tasks\r
                `);for(let Y=0;Y<v.length;Y+=1)v[Y].l(ot);ot.forEach(c),Z=I(w),F=p(w,"FIELDSET",{class:!0});var it=b(F);$=D(it,`Done Tasks\r
                `);for(let Y=0;Y<k.length;Y+=1)k[Y].l(it);it.forEach(c),w.forEach(c),x=I(S),P=p(S,"FIELDSET",{class:!0});var G=b(P);C=p(G,"A",{class:!0,href:!0});var ut=b(C);tt=D(ut,"Donation"),ut.forEach(c),et=I(G),q=p(G,"H3",{});var rt=b(q);lt=D(rt,"Contact via email: "),J=p(rt,"P",{});var _t=b(J);nt=D(_t,"sultanhaidari8520@gmail.com"),_t.forEach(c),rt.forEach(c),G.forEach(c),S.forEach(c),o.forEach(c),V=I(n);const pt=Ut("svelte-crb62",document.head);z=p(pt,"STYLE",{});var bt=b(z);st=D(bt,`body{\r
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
		}`),bt.forEach(c),pt.forEach(c),this.h()},h(){u(m,"class","font svelte-bi25eh"),u(r,"class","font svelte-bi25eh"),u(r,"type","text"),u(r,"placeholder","To Do"),u(A,"class","font svelte-bi25eh"),u(f,"for","to-do"),u(f,"id","to-do"),u(N,"class","font svelte-bi25eh"),u(U,"class","font svelte-bi25eh"),u(F,"class","font svelte-bi25eh"),u(d,"class","svelte-bi25eh"),u(C,"class","font svelte-bi25eh"),u(C,"href","https://www.paypal.com/paypalme/goatconnective"),u(P,"class","support svelte-bi25eh"),u(h,"class","svelte-bi25eh"),u(s,"class","svelte-bi25eh")},m(n,E){O(n,l,E),a(l,t),O(n,e,E),O(n,s,E),a(s,h),a(h,d),a(d,m),a(m,y),a(d,g),a(d,N),a(N,f),a(f,r),vt(r,i[0]),a(f,B),a(f,A),a(A,R),a(d,W),a(d,U),a(U,X);for(let o=0;o<v.length;o+=1)v[o]&&v[o].m(U,null);a(d,Z),a(d,F),a(F,$);for(let o=0;o<k.length;o+=1)k[o]&&k[o].m(F,null);a(h,x),a(h,P),a(P,C),a(C,tt),a(P,et),a(P,q),a(q,lt),a(q,J),a(J,nt),O(n,V,E),a(document.head,z),a(z,st),at||(ct=[K(r,"input",i[3]),K(A,"click",i[2])],at=!0)},p(n,[E]){if(E&1&&r.value!==n[0]&&vt(r,n[0]),E&2){H=n[1];let o;for(o=0;o<H.length;o+=1){const S=Et(n,H,o);v[o]?v[o].p(S,E):(v[o]=Dt(S),v[o].c(),v[o].m(U,null))}for(;o<v.length;o+=1)v[o].d(1);v.length=H.length}if(E&2){M=n[1];let o;for(o=0;o<M.length;o+=1){const S=gt(n,M,o);k[o]?k[o].p(S,E):(k[o]=Lt(S),k[o].c(),k[o].m(F,null))}for(;o<k.length;o+=1)k[o].d(1);k.length=M.length}},i:kt,o:kt,d(n){n&&c(l),n&&c(e),n&&c(s),mt(v,n),mt(k,n),n&&c(V),c(z),at=!1,Ft(ct)}}}function wt(i,l,t){let e="",s=[];function h(){e==""&&alert("Please type in a task to add"),e!=""&&(s.push({task:e,done:!1}),t(1,s)),t(0,e=""),s>s[9]&&(alert("You can only add up to 10 tasks per day"),s.pop({task:e,done:!1}),t(1,s))}function d(){e=this.value,t(0,e)}return[e,s,h,d,g=>t(1,s[g].done=!s[g].done,s),g=>t(1,s[g].done=!s[g].done,s)]}class At extends Nt{constructor(l){super(),St(this,l,wt,Pt,Bt,{})}}export{At as default};
