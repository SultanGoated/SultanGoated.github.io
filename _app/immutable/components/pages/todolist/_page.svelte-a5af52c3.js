import{S as De,i as ge,s as Le,k as _,q as g,a as y,l as p,m as v,r as L,h as c,c as I,n as u,b as q,F as n,R as de,O as z,B as ue,M as _e,P as ye,e as G,u as Te}from"../../../chunks/index-5f03e55c.js";function pe(i,l,e){const t=i.slice();return t[6]=l[e],t[8]=e,t}function ve(i,l,e){const t=i.slice();return t[6]=l[e],t[8]=e,t}function be(i){let l,e,t,s,d=i[1][i[8]].task+"",h,k,T,E;function N(){return i[4](i[8])}return{c(){l=_("li"),e=_("button"),t=g("Done"),s=y(),h=g(d),k=y(),this.h()},l(f){l=p(f,"LI",{class:!0});var r=v(l);e=p(r,"BUTTON",{class:!0,id:!0});var S=v(e);t=L(S,"Done"),S.forEach(c),s=I(r),h=L(r,d),k=I(r),r.forEach(c),this.h()},h(){u(e,"class","font svelte-bi25eh"),u(e,"id","done"),u(l,"class","font svelte-bi25eh")},m(f,r){q(f,l,r),n(l,e),n(e,t),n(l,s),n(l,h),n(l,k),T||(E=z(e,"click",N),T=!0)},p(f,r){i=f,r&2&&d!==(d=i[1][i[8]].task+"")&&Te(h,d)},d(f){f&&c(l),T=!1,E()}}}function me(i){let l,e=i[6].done==!1&&be(i);return{c(){e&&e.c(),l=G()},l(t){e&&e.l(t),l=G()},m(t,s){e&&e.m(t,s),q(t,l,s)},p(t,s){t[6].done==!1?e?e.p(t,s):(e=be(t),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},d(t){e&&e.d(t),t&&c(l)}}}function ke(i){let l,e,t,s,d=i[1][i[8]].task+"",h,k,T,E;function N(){return i[5](i[8])}return{c(){l=_("li"),e=_("button"),t=g("Undone"),s=y(),h=g(d),k=y(),this.h()},l(f){l=p(f,"LI",{class:!0});var r=v(l);e=p(r,"BUTTON",{class:!0,id:!0});var S=v(e);t=L(S,"Undone"),S.forEach(c),s=I(r),h=L(r,d),k=I(r),r.forEach(c),this.h()},h(){u(e,"class","font svelte-bi25eh"),u(e,"id","done"),u(l,"class","font svelte-bi25eh")},m(f,r){q(f,l,r),n(l,e),n(e,t),n(l,s),n(l,h),n(l,k),T||(E=z(e,"click",N),T=!0)},p(f,r){i=f,r&2&&d!==(d=i[1][i[8]].task+"")&&Te(h,d)},d(f){f&&c(l),T=!1,E()}}}function Ee(i){let l,e=i[6].done==!0&&ke(i);return{c(){e&&e.c(),l=G()},l(t){e&&e.l(t),l=G()},m(t,s){e&&e.m(t,s),q(t,l,s)},p(t,s){t[6].done==!0?e?e.p(t,s):(e=ke(t),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},d(t){e&&e.d(t),t&&c(l)}}}function Ie(i){let l,e,t,s,d,h,k,T,E,N,f,r,S,w,J,K,U,Q,W,F,X,Z,O,A,$,x,H,ee,R,te,le,ne,M=i[1],b=[];for(let a=0;a<M.length;a+=1)b[a]=me(ve(i,M,a));let Y=i[1],m=[];for(let a=0;a<Y.length;a+=1)m[a]=Ee(pe(i,Y,a));return{c(){l=_("title"),e=g("To Do List"),t=y(),s=_("main"),d=_("body"),h=_("div"),k=_("h1"),T=g("To Do List"),E=y(),N=_("fieldset"),f=_("label"),r=_("input"),S=y(),w=_("button"),J=g("add"),K=y(),U=_("fieldset"),Q=g(`To Do Tasks
                `);for(let a=0;a<b.length;a+=1)b[a].c();W=y(),F=_("fieldset"),X=g(`Done Tasks
                `);for(let a=0;a<m.length;a+=1)m[a].c();Z=y(),O=_("fieldset"),A=_("a"),$=g("Donation"),x=y(),H=_("h3"),ee=g("Contact via email: "),R=_("p"),te=g("sultanhaidari8520@gmail.com"),this.h()},l(a){l=p(a,"TITLE",{});var D=v(l);e=L(D,"To Do List"),D.forEach(c),t=I(a),s=p(a,"MAIN",{class:!0});var o=v(s);d=p(o,"BODY",{class:!0});var B=v(d);h=p(B,"DIV",{class:!0});var P=v(h);k=p(P,"H1",{class:!0});var ie=v(k);T=L(ie,"To Do List"),ie.forEach(c),E=I(P),N=p(P,"FIELDSET",{class:!0});var re=v(N);f=p(re,"LABEL",{for:!0,id:!0});var V=v(f);r=p(V,"INPUT",{class:!0,type:!0,placeholder:!0}),S=I(V),w=p(V,"BUTTON",{class:!0});var fe=v(w);J=L(fe,"add"),fe.forEach(c),V.forEach(c),re.forEach(c),K=I(P),U=p(P,"FIELDSET",{class:!0});var se=v(U);Q=L(se,`To Do Tasks
                `);for(let C=0;C<b.length;C+=1)b[C].l(se);se.forEach(c),W=I(P),F=p(P,"FIELDSET",{class:!0});var ae=v(F);X=L(ae,`Done Tasks
                `);for(let C=0;C<m.length;C+=1)m[C].l(ae);ae.forEach(c),P.forEach(c),Z=I(B),O=p(B,"FIELDSET",{class:!0});var j=v(O);A=p(j,"A",{class:!0,href:!0});var ce=v(A);$=L(ce,"Donation"),ce.forEach(c),x=I(j),H=p(j,"H3",{});var oe=v(H);ee=L(oe,"Contact via email: "),R=p(oe,"P",{});var he=v(R);te=L(he,"sultanhaidari8520@gmail.com"),he.forEach(c),oe.forEach(c),j.forEach(c),B.forEach(c),o.forEach(c),this.h()},h(){u(k,"class","font svelte-bi25eh"),u(r,"class","font svelte-bi25eh"),u(r,"type","text"),u(r,"placeholder","To Do"),u(w,"class","font svelte-bi25eh"),u(f,"for","to-do"),u(f,"id","to-do"),u(N,"class","font svelte-bi25eh"),u(U,"class","font svelte-bi25eh"),u(F,"class","font svelte-bi25eh"),u(h,"class","svelte-bi25eh"),u(A,"class","font svelte-bi25eh"),u(A,"href","https://www.paypal.com/paypalme/goatconnective"),u(O,"class","support svelte-bi25eh"),u(d,"class","svelte-bi25eh"),u(s,"class","svelte-bi25eh")},m(a,D){q(a,l,D),n(l,e),q(a,t,D),q(a,s,D),n(s,d),n(d,h),n(h,k),n(k,T),n(h,E),n(h,N),n(N,f),n(f,r),de(r,i[0]),n(f,S),n(f,w),n(w,J),n(h,K),n(h,U),n(U,Q);for(let o=0;o<b.length;o+=1)b[o]&&b[o].m(U,null);n(h,W),n(h,F),n(F,X);for(let o=0;o<m.length;o+=1)m[o]&&m[o].m(F,null);n(d,Z),n(d,O),n(O,A),n(A,$),n(O,x),n(O,H),n(H,ee),n(H,R),n(R,te),le||(ne=[z(r,"input",i[3]),z(w,"click",i[2])],le=!0)},p(a,[D]){if(D&1&&r.value!==a[0]&&de(r,a[0]),D&2){M=a[1];let o;for(o=0;o<M.length;o+=1){const B=ve(a,M,o);b[o]?b[o].p(B,D):(b[o]=me(B),b[o].c(),b[o].m(U,null))}for(;o<b.length;o+=1)b[o].d(1);b.length=M.length}if(D&2){Y=a[1];let o;for(o=0;o<Y.length;o+=1){const B=pe(a,Y,o);m[o]?m[o].p(B,D):(m[o]=Ee(B),m[o].c(),m[o].m(F,null))}for(;o<m.length;o+=1)m[o].d(1);m.length=Y.length}},i:ue,o:ue,d(a){a&&c(l),a&&c(t),a&&c(s),_e(b,a),_e(m,a),le=!1,ye(ne)}}}function Ne(i,l,e){let t="",s=[];function d(){t==""&&alert("Please type in a task to add"),t!=""&&(s.push({task:t,done:!1}),e(1,s)),e(0,t=""),s>s[9]&&(alert("You can only add up to 10 tasks per day"),s.pop({task:t,done:!1}),e(1,s))}function h(){t=this.value,e(0,t)}return[t,s,d,h,E=>e(1,s[E].done=!s[E].done,s),E=>e(1,s[E].done=!s[E].done,s)]}class Se extends De{constructor(l){super(),ge(this,l,Ne,Ie,Le,{})}}export{Se as default};
