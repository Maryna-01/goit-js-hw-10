import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                          */import{i}from"./assets/vendor-77e16229.js";document.querySelector(".form").addEventListener("submit",e=>{e.preventDefault();const s=Number(e.target.elements.delay.value),r=e.target.elements.state.value;m(s,r).then(t=>{i.success({title:"Success",message:`✅ Fulfilled promise in ${t}ms`})}).catch(t=>{i.error({title:"Error",message:`❌ Rejected promise in ${t}ms`})})});function m(e,s){return new Promise((r,t)=>{setTimeout(()=>{s==="fulfilled"?r(e):t(e)},e)})}
//# sourceMappingURL=commonHelpers2.js.map
