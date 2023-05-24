"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[402],{4852:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(9231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(5907),o=(n(9231),n(4852));const a={sidebar_position:2},s="Example",i={unversionedId:"example",id:"example",title:"Example",description:"",source:"@site/docs/example.md",sourceDirName:".",slug:"/example",permalink:"/e2e-zk-ecdsa/docs/example",draft:!1,editUrl:"https://github.com/privacy-scaling-explorations/tree/main/docs/docs/docs/example.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/e2e-zk-ecdsa/docs/intro"},next:{title:"Tutorial",permalink:"/e2e-zk-ecdsa/docs/category/tutorial"}},c={},p=[],l={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// fetch anonymity set (or load local file)\nimport { execSync } from 'child_process'\n\nconst tokenAddress = '0xc18360217d8f7ab5e7c516566761ea12ce7f9d72'\nconst min = 3000\nconst ANON_SET_API = 'https://anonset.fly.dev'\n\nconst params = new URLSearchParams({ min, tokenAddress })\nconst addresses: string[] = await fetch(\n  `${ANON_SET_API}/balance/ERC20?${params.toString()}`,\n).then((res) => res.json())\n\n// create proof request\n// see https://github.com/privacy-scaling-explorations/e2e-zk-ecdsa/tree/main/apis/prove\nconst PROOFS_API = 'http://locahost:3000'\n// Or use the hosted version at TODO\n\nconst proofRequest = new ProofRequest({\n  addresses,\n  message,\n  rawSignature,\n  url: PROOFS_API,\n})\n\n// submit proof request\nconst jobId: string = await proofRequest.submit()\n\n// wait a few minutes for proof to be generated\n\n// get result (proof and public signals)\nconst { proof, publicSignals } = await proofRequest.getResult()\n// or simply go to\n// {PROOFS_API}/${jobId}/proof.json\n// {PROOF_API}/proofs/{jobId}/public.json\n\n// verify proof\n// verification key is available at https://github.com/privacy-scaling-explorations/e2e-zk-ecdsa/blob/main/apis/prove/generated/verification_key.json\nexecSync(\n  `snarkjs groth16 verify ./verification_key.json ./proof.json ./public.json`,\n)\n")))}f.isMDXComponent=!0}}]);