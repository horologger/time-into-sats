/* esm.sh - esbuild bundle(zustand@4.4.7/vanilla) es2022 production */
var i=t=>{let e,n=new Set,r=(s,u)=>{let o=typeof s=="function"?s(e):s;if(!Object.is(o,e)){let l=e;e=u??(typeof o!="object"||o===null)?o:Object.assign({},e,o),n.forEach(d=>d(e,l))}},c=()=>e,a={setState:r,getState:c,subscribe:s=>(n.add(s),()=>n.delete(s)),destroy:()=>{n.clear()}};return e=t(r,c,a),a},b=t=>t?i(t):i,E=t=>b(t);export{b as createStore,E as default};
//# sourceMappingURL=vanilla.js.map