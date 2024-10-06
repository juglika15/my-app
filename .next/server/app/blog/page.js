(()=>{var e={};e.id=404,e.ids=[404],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},8874:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>l.a,__next_app__:()=>c,originalPathname:()=>d,pages:()=>x,routeModule:()=>b,tree:()=>m}),r(7965),r(8770),r(996);var n=r(170),t=r(5002),i=r(3876),l=r.n(i),a=r(6299),o={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>a[e]);r.d(s,o);let m=["",{children:["blog",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,7965,23)),"/Users/macbook/my-app/src/app/blog/page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,592))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,8770)),"/Users/macbook/my-app/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,996,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,592))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],x=["/Users/macbook/my-app/src/app/blog/page.jsx"],d="/blog/page",c={require:r,loadChunk:()=>Promise.resolve()},b=new n.AppPageRouteModule({definition:{kind:t.x.APP_PAGE,page:"/blog/page",pathname:"/blog",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:m}})},2807:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,3642,23)),Promise.resolve().then(r.t.bind(r,7586,23)),Promise.resolve().then(r.t.bind(r,7838,23)),Promise.resolve().then(r.t.bind(r,8057,23)),Promise.resolve().then(r.t.bind(r,7741,23)),Promise.resolve().then(r.t.bind(r,3118,23))},9055:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,4080,23))},5303:()=>{},7965:()=>{throw Error('Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-swc-loader.js):\nError: \n  \x1b[31mx\x1b[0m the name `Blog` is defined multiple times\n    ,-[\x1b[36;1;4m/Users/macbook/my-app/src/app/blog/page.jsx\x1b[0m:1:1]\n \x1b[2m 1\x1b[0m | import "./BlogList.css";\n \x1b[2m 2\x1b[0m | import Blog from "./Blog/Blog";\n    : \x1b[31;1m       ^^|^\x1b[0m\n    :          \x1b[31;1m`-- \x1b[31;1mprevious definition of `Blog` here\x1b[0m\x1b[0m\n \x1b[2m 3\x1b[0m | import usePosts from "../../assets/hooks/usePosts";\n \x1b[2m 4\x1b[0m | \n \x1b[2m 5\x1b[0m | \n \x1b[2m 6\x1b[0m | \n \x1b[2m 7\x1b[0m | export default function BlogList() {\n \x1b[2m 8\x1b[0m | \n \x1b[2m 9\x1b[0m |   const { posts } = usePosts(); \n \x1b[2m10\x1b[0m | \n \x1b[2m11\x1b[0m |   return (\n \x1b[2m12\x1b[0m |     <main className="main">\n \x1b[2m13\x1b[0m |       {posts.map((post) => (\n \x1b[2m14\x1b[0m |         <Blog blog={post} key={post.id} />\n \x1b[2m15\x1b[0m |       ))}\n \x1b[2m16\x1b[0m |       \n \x1b[2m17\x1b[0m |     </main>\n \x1b[2m18\x1b[0m |   );\n \x1b[2m19\x1b[0m | }\n \x1b[2m20\x1b[0m | \n \x1b[2m21\x1b[0m | function Blog({ blog }) {\n    : \x1b[33;1m         ^^|^\x1b[0m\n    :            \x1b[33;1m`-- \x1b[33;1m`Blog` redefined here\x1b[0m\x1b[0m\n \x1b[2m22\x1b[0m |   return (\n \x1b[2m23\x1b[0m |     <div className="blog-item">\n \x1b[2m24\x1b[0m |       <img src={blog.imageUrl} alt={blog.title} />\n    `----\n')},8770:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>o,metadata:()=>a});var n=r(2051),t=r(2349);r(9235);let i=function(){return(0,n.jsxs)("header",{className:"header",children:[n.jsx("h1",{children:"Dune"}),n.jsx("nav",{children:(0,n.jsxs)("ul",{children:[n.jsx("li",{children:n.jsx(t.default,{href:"/",className:"navlink",children:"Home"})}),n.jsx("li",{children:n.jsx(t.default,{href:"/contact",className:"navlink",children:"Contact"})}),n.jsx("li",{children:n.jsx(t.default,{href:"/blog",className:"navlink",children:"Blog"})}),n.jsx("li",{children:n.jsx(t.default,{href:"/about",className:"navlink",children:"About"})}),n.jsx("li",{children:n.jsx(t.default,{href:"/profile",className:"navlink",children:"Profile"})})]})})]})};r(9008);let l=function(){return n.jsx("footer",{className:"footer",children:n.jsx("nav",{children:(0,n.jsxs)("ul",{children:[n.jsx("li",{children:n.jsx(t.default,{href:"/about",className:"link",children:"About Us"})}),n.jsx("li",{children:n.jsx(t.default,{href:"/contact",className:"link",children:"Contact"})}),n.jsx("li",{children:n.jsx(t.default,{href:"/profile",className:"link",children:"Profile"})}),n.jsx("li",{children:n.jsx(t.default,{href:"/services",className:"link",children:"Services"})}),n.jsx("li",{children:n.jsx(t.default,{href:"/careers",className:"link",children:"Careers"})}),n.jsx("li",{children:n.jsx(t.default,{href:"/support",className:"link",children:"Support"})})]})})})};r(1141);let a={title:"Dune",description:"Web site created with Next.js."};function o({children:e}){return n.jsx("html",{lang:"en",children:(0,n.jsxs)("body",{className:"container",children:[n.jsx(i,{}),n.jsx("div",{id:"root",children:e}),n.jsx(l,{})]})})}},592:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>t});var n=r(4564);let t=e=>[{type:"image/x-icon",sizes:"512x512",url:(0,n.fillMetadataSegment)(".",e.params,"icon.ico")+"?d2a8b96cce3d69ab"}]},9008:()=>{},9235:()=>{},1141:()=>{}};var s=require("../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),n=s.X(0,[379,893,564],()=>r(8874));module.exports=n})();