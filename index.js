import{a as f,S as p,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="52616200-fc5cfd906759777ac22999e8c",y="https://pixabay.com/api/";async function g(s){const r={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(y,{params:r})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:u,downloads:d})=>`
        <li class="gallery-item">
          <a href="${a}">
            <img src="${o}" alt="${e}" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${t}</p>
            <p><b>Views:</b> ${i}</p>
            <p><b>Comments:</b> ${u}</p>
            <p><b>Downloads:</b> ${d}</p>
          </div>
        </li>`).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function w(){l.classList.remove("hidden")}function S(){l.classList.add("hidden")}const v=document.querySelector(".form");v.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){n.warning({title:"Oops!",message:"Please enter a search term!",position:"topRight"});return}L(),w();try{const o=await g(r);o.hits.length===0?n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):b(o.hits)}catch{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{S()}});
//# sourceMappingURL=index.js.map
