"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[946],{4852:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(9231);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(t),y=o,m=f["".concat(s,".").concat(y)]||f[y]||u[y]||i;return t?n.createElement(m,a(a({ref:r},l),{},{components:t})):n.createElement(m,a({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=y;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[f]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},4595:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=t(5907),o=(t(9231),t(4852));const i={description:"Verify membership zk proofs",sidebar_position:5},a="Verify Proofs",c={unversionedId:"long/verify",id:"long/verify",title:"Verify Proofs",description:"Verify membership zk proofs",source:"@site/docs/long/verify.md",sourceDirName:"long",slug:"/long/verify",permalink:"/e2e-zk-ecdsa/docs/long/verify",draft:!1,editUrl:"https://github.com/privacy-scaling-explorations/tree/main/docs/docs/docs/long/verify.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Verify membership zk proofs",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Generate Proofs",permalink:"/e2e-zk-ecdsa/docs/long/generate-zk-proof"},next:{title:"CLI Demo",permalink:"/e2e-zk-ecdsa/docs/cli-demo"}},s={},p=[],l={toc:p},f="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(f,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"verify-proofs"},"Verify Proofs"),(0,o.kt)("p",null,"The verification process is much faster than the proof generation.\nTherefore, you should do it yourself locally.",(0,o.kt)("br",{parentName:"p"}),"\n","You'll need the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/privacy-scaling-explorations/e2e-zk-ecdsa/blob/main/apis/proving/test/verification_key.json"},"verification_key.json")," file available in our repository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { execSync } from 'fs'\n\nexecSync('snarkjs groth16 verify verification_key.json public.json proof.json')\n")))}u.isMDXComponent=!0}}]);