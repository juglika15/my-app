(()=>{var e={};e.id=573,e.ids=[573],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},5216:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>f,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d}),r(2651),r(8770),r(996);var n=r(170),l=r(5002),s=r(3876),a=r.n(s),i=r(6299),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);r.d(t,o);let d=["",{children:["[[...slug]]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2651)),"/Users/macbook/my-app/src/app/[[...slug]]/page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,592))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,8770)),"/Users/macbook/my-app/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,996,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,592))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/macbook/my-app/src/app/[[...slug]]/page.js"],c="/[[...slug]]/page",f={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/[[...slug]]/page",pathname:"/[[...slug]]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2807:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3642,23)),Promise.resolve().then(r.t.bind(r,7586,23)),Promise.resolve().then(r.t.bind(r,7838,23)),Promise.resolve().then(r.t.bind(r,8057,23)),Promise.resolve().then(r.t.bind(r,7741,23)),Promise.resolve().then(r.t.bind(r,3118,23))},9055:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,4080,23))},2730:(e,t,r)=>{Promise.resolve().then(r.bind(r,5590))},7692:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(352);r(7247),r(8964);let l=n._(r(2404));function s(e,t){var r;let n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};"function"==typeof e&&(n.loader=e);let s={...n,...t};return(0,l.default)({...s,modules:null==(r=s.loadableGenerated)?void 0:r.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9304:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return l}});let n=r(7173);function l(e){let{reason:t,children:r}=e;throw new n.BailoutToCSRError(t)}},2404:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let n=r(7247),l=r(8964),s=r(9304),a=r(4146);function i(e){return{default:e&&"default"in e?e.default:e}}let o={loader:()=>Promise.resolve(i(()=>null)),loading:null,ssr:!0},d=function(e){let t={...o,...e},r=(0,l.lazy)(()=>t.loader().then(i)),d=t.loading;function u(e){let i=d?(0,n.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,o=t.ssr?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.PreloadCss,{moduleIds:t.modules}),(0,n.jsx)(r,{...e})]}):(0,n.jsx)(s.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(r,{...e})});return(0,n.jsx)(l.Suspense,{fallback:i,children:o})}return u.displayName="LoadableComponent",u}},4146:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return s}});let n=r(7247),l=r(4580);function s(e){let{moduleIds:t}=e,r=(0,l.getExpectedRequestStore)("next/dynamic css"),s=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files.filter(e=>e.endsWith(".css"));s.push(...t)}}return 0===s.length?null:(0,n.jsx)(n.Fragment,{children:s.map(e=>(0,n.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:r.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},5590:(e,t,r)=>{"use strict";r.d(t,{ClientOnly:()=>a});var n=r(7247),l=r(7692);let s=r.n(l)()(()=>r.e(942).then(r.bind(r,5942)),{loadableGenerated:{modules:["app/[[...slug]]/client.js -> ../../Content/Content.jsx"]},ssr:!0});function a(){return n.jsx(s,{})}},2651:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,generateStaticParams:()=>s});var n=r(2051);let l=(0,r(5347).createProxy)(String.raw`/Users/macbook/my-app/src/app/[[...slug]]/client.js#ClientOnly`);function s(){return[{slug:[""]}]}function a(){return n.jsx(l,{})}},8770:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o,metadata:()=>i});var n=r(2051),l=r(2349);r(9235);let s=function(){return(0,n.jsxs)("header",{className:"header",children:[n.jsx("h1",{children:"Dune"}),n.jsx("nav",{children:(0,n.jsxs)("ul",{children:[n.jsx("li",{children:n.jsx(l.default,{href:"/",className:"navlink",children:"Home"})}),n.jsx("li",{children:n.jsx(l.default,{href:"/contact",className:"navlink",children:"Contact"})}),n.jsx("li",{children:n.jsx(l.default,{href:"/blog",className:"navlink",children:"Blog"})}),n.jsx("li",{children:n.jsx(l.default,{href:"/about",className:"navlink",children:"About"})}),n.jsx("li",{children:n.jsx(l.default,{href:"/profile",className:"navlink",children:"Profile"})})]})})]})};r(9008);let a=function(){return n.jsx("footer",{className:"footer",children:n.jsx("nav",{children:(0,n.jsxs)("ul",{children:[n.jsx("li",{children:n.jsx(l.default,{href:"/about",className:"link",children:"About Us"})}),n.jsx("li",{children:n.jsx(l.default,{href:"/contact",className:"link",children:"Contact"})}),n.jsx("li",{children:n.jsx(l.default,{href:"/profile",className:"link",children:"Profile"})}),n.jsx("li",{children:n.jsx(l.default,{href:"/services",className:"link",children:"Services"})}),n.jsx("li",{children:n.jsx(l.default,{href:"/careers",className:"link",children:"Careers"})}),n.jsx("li",{children:n.jsx(l.default,{href:"/support",className:"link",children:"Support"})})]})})})};r(1141);let i={title:"Dune",description:"Web site created with Next.js."};function o({children:e}){return n.jsx("html",{lang:"en",children:(0,n.jsxs)("body",{className:"container",children:[n.jsx(s,{}),n.jsx("div",{id:"root",children:e}),n.jsx(a,{})]})})}},592:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(4564);let l=e=>[{type:"image/x-icon",sizes:"512x512",url:(0,n.fillMetadataSegment)(".",e.params,"icon.ico")+"?d2a8b96cce3d69ab"}]},9008:()=>{},9235:()=>{},1141:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[379,893,564],()=>r(5216));module.exports=n})();