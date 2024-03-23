import{S as L,i as f}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();function C(r){const o=document.querySelector(".gallery");o.innerHTML="",r.forEach(e=>{const s=document.createElement("li");s.classList.add("galleryItem");const i=document.createElement("a");i.href=e.largeImageURL,i.setAttribute("data-lightbox","gallery");const c=document.createElement("img");c.classList.add("smallImage"),c.src=e.webformatURL,c.alt=e.tags,i.appendChild(c),s.appendChild(i);const u=document.createElement("div");u.classList.add("statsContainer"),["Likes","Views","Comments","Downloads"].forEach(m=>{const d=document.createElement("div");d.classList.add("statsColumn");const p=document.createElement("div");p.classList.add("stats"),p.textContent=m;const y=document.createElement("div");y.classList.add(`${m.toLowerCase()}Number`,"statsvalue"),y.textContent=e[m.toLowerCase()],d.appendChild(p),d.appendChild(y),u.appendChild(d)}),s.appendChild(u),o.appendChild(s)});const n=new L(".gallery a"),a=()=>{n.close()};document.querySelector(".gallery").addEventListener("click",a),(()=>{n.refresh()})()}document.querySelector(".form").addEventListener("submit",r=>{r==null||r.preventDefault(),g()});let h=!1;function g(r){document.querySelector(".form");const o=document.querySelector(".input");document.querySelector(".gallery");const n=o.value.trim();if(n!==""){const t=`https://pixabay.com/api/?key=9233093-942588744ee96c4f575017f3e&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(t).then(e=>e.json()).then(e=>{e.hits.length===0?h||(f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),h=!0):C(e.hits)}).catch(e=>{console.error("fetch problem",e)})}else f.error({title:"Error",message:"Empty input!",position:"topCenter"})}const b=document.querySelector(".gallery"),l=document.createElement("div");l.style.display="none";document.body.appendChild(l);document.querySelector(".form").addEventListener("submit",()=>{var r;l.style.display="block",b.innerHTML="",(r=g())==null||r.then(()=>{l.style.display="none"}).catch(o=>{l.style.display="none",console.error("loader problem",o)})});
//# sourceMappingURL=commonHelpers.js.map