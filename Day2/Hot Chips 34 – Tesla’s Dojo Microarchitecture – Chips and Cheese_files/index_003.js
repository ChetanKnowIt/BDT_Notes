!function(){function t(){if(this.complete){var e=this.getAttribute("data-lazy-src");if(e&&this.src!==e)this.addEventListener("onload",t);else{var d=this.width,n=this.height;d&&d>0&&n&&n>0&&(this.setAttribute("width",d),this.setAttribute("height",n),i(this))}}else this.addEventListener("onload",t)}var e=function(){for(var e=document.querySelectorAll("img[data-recalc-dims]"),i=0;i<e.length;i++)t.call(e[i])},i=function(t){t.removeAttribute("data-recalc-dims"),t.removeAttribute("scale")};"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()),document.body.addEventListener("is.post-load",e)}();;
!function(){const e=document.querySelectorAll(".coblocks-animate");if("IntersectionObserver"in window){const t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(e.target.classList.add(e.target.dataset.coblocksAnimation),t.unobserve(e.target))}))}),{threshold:[.15]});e.forEach((e=>{t.observe(e)}))}else e.forEach((e=>{e.classList.remove("coblocks-animate"),delete e.dataset.coblocksAnimation}))}();;
!function(){"use strict";const{closeLabel:t,leftLabel:e,rightLabel:o}=coblocksLigthboxData,n=document.getElementsByClassName("has-lightbox");Array.from(n).forEach((function(n,c){n.className+=" lightbox-"+c+" ",function(n){const c=document.createElement("div");c.setAttribute("class","coblocks-lightbox");const i=document.createElement("div");i.setAttribute("class","coblocks-lightbox__background");const l=document.createElement("div");l.setAttribute("class","coblocks-lightbox__heading");const a=document.createElement("button");a.setAttribute("class","coblocks-lightbox__close"),a.setAttribute("aria-label",t);const s=document.createElement("span");s.setAttribute("class","coblocks-lightbox__count");const r=document.createElement("div");r.setAttribute("class","coblocks-lightbox__image");const g=document.createElement("img");g.setAttribute("alt","Placeholder");const b=document.createElement("figcaption");b.setAttribute("class","coblocks-lightbox__caption");const u=document.createElement("button");u.setAttribute("class","coblocks-lightbox__arrow coblocks-lightbox__arrow--left"),u.setAttribute("aria-label",e);const d=document.createElement("button");d.setAttribute("class","coblocks-lightbox__arrow coblocks-lightbox__arrow--right"),d.setAttribute("aria-label",o);const m=document.createElement("div");m.setAttribute("class","arrow-right"),m.setAttribute("aria-label",o);const h=document.createElement("div");h.setAttribute("class","arrow-left"),h.setAttribute("aria-label",e);const f=[`.has-lightbox.lightbox-${n} > :not(.carousel-nav) figure img`,`.has-lightbox.lightbox-${n} > figure img`,`figure.has-lightbox.lightbox-${n} > img`,`.has-lightbox.lightbox-${n} > figure[class^="align"] img`,`.masonry-grid.has-lightbox.lightbox-${n} figure img`].join(", "),x=[`.has-lightbox.lightbox-${n} > :not(.carousel-nav) figure figcaption`,`.masonry-grid.has-lightbox.lightbox-${n} figure figcaption`].join(", "),E=document.querySelectorAll(f),p=document.querySelectorAll(x);let k;l.append(s,a),r.append(g,b),u.append(h),d.append(m),c.append(i,l,r,u,d),E.length>0&&(document.getElementsByTagName("BODY")[0].append(c),1===E.length&&(d.remove(),u.remove())),p.length>0&&Array.from(p).forEach((function(t,e){t.addEventListener("click",(function(){y(e)}))})),Array.from(E).forEach((function(t,e){t.closest("figure").addEventListener("click",(function(){y(e)}))})),u.addEventListener("click",(function(){k=0===k?E.length-1:k-1,y(k)})),d.addEventListener("click",(function(){k=k===E.length-1?0:k+1,y(k)})),i.addEventListener("click",(function(){c.style.display="none"})),a.addEventListener("click",(function(){_(),c.style.display="none"}));const A={preloaded:!1,setPreloadImages:()=>{A.preloaded||(A.preloaded=!0,Array.from(E).forEach((function(t,e){A[`img-${e}`]=new window.Image,A[`img-${e}`].src=t.attributes.src.value,A[`img-${e}`]["data-caption"]=E[e]&&E[e].nextElementSibling?function(t){let e=t.nextElementSibling;for(;e;){if(e.matches("figcaption"))return e.innerHTML;e=e.nextElementSibling}return""}(E[e]):""})))}};function y(t){A.setPreloadImages(),k=t,"flex"!==c.style.display&&(c.style.display="flex",v()),i.style.backgroundImage=`url(${A[`img-${k}`].src})`,g.src=A[`img-${k}`].src,b.innerHTML=A[`img-${k}`]["data-caption"],s.textContent=`${k+1} / ${E.length}`}const v=()=>document.addEventListener("keydown",$),_=()=>document.removeEventListener("keydown",$),$=t=>{if(t&&null!=t&&t.code&&"flex"===c.style.display)switch(t.code){case"Escape":a.click();break;case"ArrowLeft":case"KeyA":u.click();break;case"ArrowRight":case"KeyD":d.click()}}}(c)}))}();;
