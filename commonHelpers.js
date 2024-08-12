import{i as c,S as u}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(s){if(s.ep)return;s.ep=!0;const e=a(s);fetch(s.href,e)}})();let p=()=>{c.show({message:"Fill search field",position:"topRight",backgroundColor:"rgb(250,128,114)",messageColor:"rgb(255,255,255)"})},m=()=>{c.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"rgb(250,128,114)",messageColor:"rgb(255,255,255)"})};function d(t,i,a,r){if(t===null||t===""){p(),r();return}const s={method:"GET",headers:{Accept:"application/json"}};fetch("https://pixabay.com/api/?"+new URLSearchParams({key:"45339856-2e70ead6ce9cf82bdbbd89c7e",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}).toString(),s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{e.hits.length>0?i(e):m()}).catch(e=>a(e)).finally(()=>r())}let f=new u("ul.results a",{captionsData:"alt",captionDelay:250});function g(t){return`<li class="result-item">
        <a class="result-link"
          href="${t.largeImageURL}">
          <img class="result-image"
            src="${t.webformatURL}"
            alt="${t.tags}" />
          <ul class="statistic">
            <li class="statistic-item">
              <span class="likes-title">Likes</span>
              <span class="likes-number">${t.likes}</span>
            </li>
            <li class="statistic-item">
              <span class="likes-title">Views</span>
              <span class="likes-number">${t.views}</span>
            </li>
            <li class="statistic-item">
              <span class="likes-title">Comments</span>
              <span class="likes-number">${t.comments}</span>
            </li>
            <li class="statistic-item">
              <span class="likes-title">Downloads</span>
              <span class="likes-number">${t.downloads}</span>
            </li>
          </ul>
        </a>
      </li>`}function h(t){const i=t.map(r=>g(r)).join("");document.querySelector("ul.results").insertAdjacentHTML("afterbegin",i),f.refresh()}const n=document.querySelectorAll(".search")[0];let l=document.querySelector("div.loader-panel");l.style.display="none";n.addEventListener("submit",t=>{t.preventDefault();const i=n.elements["search-query"].value;l.style.display="block";const a=document.querySelectorAll("li.result-item");a&&a.length>0&&a.forEach(r=>r.remove()),d(i,r=>h(r.hits),r=>console.error(r),()=>l.style.display="none")});
//# sourceMappingURL=commonHelpers.js.map
