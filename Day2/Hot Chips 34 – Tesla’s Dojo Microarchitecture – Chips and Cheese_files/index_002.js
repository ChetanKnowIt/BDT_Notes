!function(){"use strict";var e,t={noop:function(){},texturize:function(e){return(e=(e=(e=(e+="").replace(/'/g,"&#8217;").replace(/&#039;/g,"&#8217;")).replace(/"/g,"&#8221;").replace(/&#034;/g,"&#8221;").replace(/&quot;/g,"&#8221;").replace(/[\u201D]/g,"&#8221;")).replace(/([\w]+)=&#[\d]+;(.+?)&#[\d]+;/g,'$1="$2"')).trim()},applyReplacements:function(e,t){if(e)return t?e.replace(/{(\d+)}/g,(function(e,r){return void 0!==t[r]?t[r]:e})):e},getBackgroundImage:function(e){var t=document.createElement("canvas"),r=t.getContext&&t.getContext("2d");if(e){r.filter="blur(20px) ",r.drawImage(e,0,0);var o=t.toDataURL("image/png");return t=null,o}}},r=function(){function e(e,t){return Element.prototype.matches?e.matches(t):Element.prototype.msMatchesSelector?e.msMatchesSelector(t):void 0}function r(e,t,r,o){if(!e)return o();e.style.removeProperty("display"),e.style.opacity=t,e.style.transition="opacity 0.2s",e.style.pointerEvents="none";var a=function(t){t.target===e&&"opacity"===t.propertyName&&(e.style.removeProperty("transition"),e.style.removeProperty("opacity"),e.style.removeProperty("pointer-events"),e.removeEventListener("transitionend",a),e.removeEventListener("transitioncancel",a),o())};requestAnimationFrame((function(){requestAnimationFrame((function(){e.addEventListener("transitionend",a),e.addEventListener("transitioncancel",a),e.style.opacity=r}))}))}return{closest:function(t,r){if(t.closest)return t.closest(r);var o=t;do{if(e(o,r))return o;o=o.parentElement||o.parentNode}while(null!==o&&1===o.nodeType);return null},matches:e,hide:function(e){e&&(e.style.display="none")},show:function(e){e&&(e.style.display="block")},fadeIn:function(e,o){r(e,"0","1",o=o||t.noop)},fadeOut:function(e,o){o=o||t.noop,r(e,"1","0",(function(){e&&(e.style.display="none"),o()}))},scrollToElement:function(e,t,r){if(!e||!t)return r?r():void 0;var o=t.querySelector(".jp-carousel-info-extra");o&&(o.style.minHeight=window.innerHeight-64+"px");var a=!0,i=Date.now(),n=t.scrollTop,l=Math.max(0,e.offsetTop-Math.max(0,window.innerHeight-function(e){var t=e.querySelector(".jp-carousel-info-footer"),r=e.querySelector(".jp-carousel-info-extra"),o=e.querySelector(".jp-carousel-info-content-wrapper");if(t&&r&&o){var a=window.getComputedStyle(r),i=parseInt(a.paddingTop,10)+parseInt(a.paddingBottom,10);return i=isNaN(i)?0:i,o.offsetHeight+t.offsetHeight+i}return 0}(t)))-t.scrollTop;function s(){a=!1}l=Math.min(l,t.scrollHeight-window.innerHeight),t.addEventListener("wheel",s),function e(){var c,u=Date.now(),d=(c=(u-i)/300)<.5?2*c*c:1-Math.pow(-2*c+2,2)/2,p=(d=d>1?1:d)*l;if(t.scrollTop=n+p,u<=i+300&&a)return requestAnimationFrame(e);r&&r(),o&&(o.style.minHeight=""),a=!1,t.removeEventListener("wheel",s)}()},getJSONAttribute:function(e,t){if(e&&e.hasAttribute(t))try{return JSON.parse(e.getAttribute(t))}catch(e){return}},convertToPlainText:function(e){var t=document.createElement("div");return t.textContent=e,t.innerHTML},stripHTML:function(e){return e.replace(/<[^>]*>?/gm,"")},emitEvent:function(e,t,r){var o;try{o=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:r||null})}catch(e){(o=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,r||null)}e.dispatchEvent(o)},isTouch:function(){return"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch}}}();function o(){var o,a,i,n,l="",s=!1,c="div.gallery, div.tiled-gallery, ul.wp-block-gallery, ul.blocks-gallery-grid, figure.wp-block-gallery.has-nested-images, div.wp-block-jetpack-tiled-gallery, a.single-image-gallery",u=".gallery-item, .tiled-gallery-item, .blocks-gallery-item,  .tiled-gallery__item",d=u+", .wp-block-image",p={},m="undefined"!=typeof wpcom&&wpcom.carousel&&wpcom.carousel.stat?wpcom.carousel.stat:t.noop,g="undefined"!=typeof wpcom&&wpcom.carousel&&wpcom.carousel.pageview?wpcom.carousel.pageview:t.noop;function h(t){if(!s)switch(t.which){case 38:t.preventDefault(),p.overlay.scrollTop-=100;break;case 40:t.preventDefault(),p.overlay.scrollTop+=100;break;case 39:t.preventDefault(),e.slideNext();break;case 37:case 8:t.preventDefault(),e.slidePrev();break;case 27:t.preventDefault(),b()}}function f(){s=!0}function v(){s=!1}function y(){p.overlay||(p.overlay=document.querySelector(".jp-carousel-overlay"),p.container=p.overlay.querySelector(".jp-carousel-wrap"),p.gallery=p.container.querySelector(".jp-carousel"),p.info=p.overlay.querySelector(".jp-carousel-info"),p.caption=p.info.querySelector(".jp-carousel-caption"),p.commentField=p.overlay.querySelector("#jp-carousel-comment-form-comment-field"),p.emailField=p.overlay.querySelector("#jp-carousel-comment-form-email-field"),p.authorField=p.overlay.querySelector("#jp-carousel-comment-form-author-field"),p.urlField=p.overlay.querySelector("#jp-carousel-comment-form-url-field"),window.innerWidth<=760&&Math.round(window.innerWidth/760*110)<40&&r.isTouch(),[p.commentField,p.emailField,p.authorField,p.urlField].forEach((function(e){e&&(e.addEventListener("focus",f),e.addEventListener("blur",v))})),p.overlay.addEventListener("click",(function(e){var t,o,a=e.target,i=!!r.closest(a,".jp-carousel-close-hint"),n=!!window.matchMedia("(max-device-width: 760px)").matches;if(a===p.overlay){if(n)return;b()}else if(i)b();else if(a.classList.contains("jp-carousel-image-download"))m("download_original_click");else if(a.classList.contains("jp-carousel-comment-login"))t=p.currentSlide,o=t?t.attrs.attachmentId:"0",window.location.href=jetpackCarouselStrings.login_url+"%23jp-carousel-"+o;else if(r.closest(a,"#jp-carousel-comment-form-container"))!function(e){var t=e.target,o=r.getJSONAttribute(p.container,"data-carousel-extra")||{},a=p.currentSlide.attrs.attachmentId,i=document.querySelector("#jp-carousel-comment-form-submit-and-info-wrapper"),n=document.querySelector("#jp-carousel-comment-form-spinner"),l=document.querySelector("#jp-carousel-comment-form-button-submit"),s=document.querySelector("#jp-carousel-comment-form");if(p.commentField&&p.commentField.getAttribute("id")===t.getAttribute("id"))f(),r.show(i);else if(r.matches(t,'input[type="submit"]')){e.preventDefault(),e.stopPropagation(),r.show(n),s.classList.add("jp-carousel-is-disabled");var c={action:"post_attachment_comment",nonce:jetpackCarouselStrings.nonce,blog_id:o.blog_id,id:a,comment:p.commentField.value};if(!c.comment.length)return void w(jetpackCarouselStrings.no_comment_text,!1);if(1!==Number(jetpackCarouselStrings.is_logged_in)&&(c.email=p.emailField.value,c.author=p.authorField.value,c.url=p.urlField.value,1===Number(jetpackCarouselStrings.require_name_email))){if(!c.email.length||!c.email.match("@"))return void w(jetpackCarouselStrings.no_comment_email,!1);if(!c.author.length)return void w(jetpackCarouselStrings.no_comment_author,!1)}var u=new XMLHttpRequest;u.open("POST",jetpackCarouselStrings.ajaxurl,!0),u.setRequestHeader("X-Requested-With","XMLHttpRequest"),u.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),u.onreadystatechange=function(){if(this.readyState===XMLHttpRequest.DONE&&this.status>=200&&this.status<300){var e;try{e=JSON.parse(this.response)}catch(e){return void w(jetpackCarouselStrings.comment_post_error,!1)}"approved"===e.comment_status?w(jetpackCarouselStrings.comment_approved,!0):"unapproved"===e.comment_status?w(jetpackCarouselStrings.comment_unapproved,!0):w(jetpackCarouselStrings.comment_post_error,!1),E(),q(a),l.value=jetpackCarouselStrings.post_comment,r.hide(n),s.classList.remove("jp-carousel-is-disabled")}else w(jetpackCarouselStrings.comment_post_error,!1)};var d=[];for(var m in c)if(m){var g=encodeURIComponent(m)+"="+encodeURIComponent(c[m]);d.push(g.replace(/%20/g,"+"))}var h=d.join("&");u.send(h)}}(e);else if(r.closest(a,".jp-carousel-photo-icons-container")||a.classList.contains("jp-carousel-photo-title"))!function(e){e.preventDefault();var t=e.target,o=p.info.querySelector(".jp-carousel-info-extra"),a=p.info.querySelector(".jp-carousel-image-meta"),i=p.info.querySelector(".jp-carousel-comments-wrapper"),n=p.info.querySelector(".jp-carousel-icon-info"),l=p.info.querySelector(".jp-carousel-icon-comments");function s(){l&&l.classList.remove("jp-carousel-selected"),n.classList.toggle("jp-carousel-selected"),i&&i.classList.remove("jp-carousel-show"),a&&(a.classList.toggle("jp-carousel-show"),a.classList.contains("jp-carousel-show")?o.classList.add("jp-carousel-show"):o.classList.remove("jp-carousel-show"))}function c(){n&&n.classList.remove("jp-carousel-selected"),l.classList.toggle("jp-carousel-selected"),a&&a.classList.remove("jp-carousel-show"),i&&(i.classList.toggle("jp-carousel-show"),i.classList.contains("jp-carousel-show")?o.classList.add("jp-carousel-show"):o.classList.remove("jp-carousel-show"))}(r.closest(t,".jp-carousel-icon-info")||t.classList.contains("jp-carousel-photo-title"))&&(a&&a.classList.contains("jp-carousel-show")?r.scrollToElement(p.overlay,p.overlay,s):(s(),r.scrollToElement(p.info,p.overlay))),r.closest(t,".jp-carousel-icon-comments")&&(i&&i.classList.contains("jp-carousel-show")?r.scrollToElement(p.overlay,p.overlay,c):(c(),r.scrollToElement(p.info,p.overlay)))}(e);else if(!r.closest(a,".jp-carousel-info"))return})),window.addEventListener("keydown",h),p.overlay.addEventListener("jp_carousel.afterOpen",(function(){v(),p.slides.length<=1||(p.slides.length<=5?r.show(p.info.querySelector(".jp-swiper-pagination")):r.show(p.info.querySelector(".jp-carousel-pagination")))})),p.overlay.addEventListener("jp_carousel.beforeClose",(function(){f(),document.documentElement.style.removeProperty("height"),e&&e.enable(),r.hide(p.info.querySelector(".jp-swiper-pagination")),r.hide(p.info.querySelector(".jp-carousel-pagination"))})),p.overlay.addEventListener("jp_carousel.afterClose",(function(){window.history.pushState?history.pushState("",document.title,window.location.pathname+window.location.search):window.location.href="",l="",p.isOpen=!1})),p.overlay.addEventListener("touchstart",(function(e){e.touches.length>1&&e.preventDefault()})))}function w(e,t){var o=p.overlay.querySelector("#jp-carousel-comment-post-results"),a="jp-carousel-comment-post-"+(t?"success":"error");o.innerHTML='<span class="'+a+'">'+e+"</span>",r.hide(p.overlay.querySelector("#jp-carousel-comment-form-spinner")),p.overlay.querySelector("#jp-carousel-comment-form").classList.remove("jp-carousel-is-disabled"),r.show(o)}function j(){var e=document.querySelectorAll("a img[data-attachment-id]");Array.prototype.forEach.call(e,(function(e){var t=e.parentElement,o=t.parentElement;if(!o.classList.contains("gallery-icon")&&!r.closest(o,u)&&t.hasAttribute("href")){var a=!1;t.getAttribute("href").split("?")[0]===e.getAttribute("data-orig-file").split("?")[0]&&1===Number(jetpackCarouselStrings.single_image_gallery_media_file)&&(a=!0),t.getAttribute("href")===e.getAttribute("data-permalink")&&(a=!0),a&&(t.classList.add("single-image-gallery"),t.setAttribute("data-carousel-extra",JSON.stringify({blog_id:Number(jetpackCarouselStrings.blog_id)})))}}))}function S(o){(!o||o<0||o>p.slides.length)&&(o=0),p.currentSlide=p.slides[o];var a,i,n=p.currentSlide,s=n.attrs.attachmentId,c=p.info.querySelector(".jp-carousel-icon-info"),u=p.info.querySelector(".jp-carousel-icon-comments");(c&&c.classList.contains("jp-carousel-selected")||u&&u.classList.contains("jp-carousel-selected"))&&0!==p.overlay.scrollTop&&r.scrollToElement(p.overlay,p.overlay),function(e){var t=e.el,r=e.attrs,o=t.querySelector("img");if(!o.hasAttribute("data-loaded")){var a=!!r.previewImage,i=r.thumbSize;!a||i&&t.offsetWidth>i.width?o.src=r.src:o.src=r.previewImage,o.setAttribute("itemprop","image"),o.setAttribute("data-loaded",1)}}(p.slides[o]),1!==Number(jetpackCarouselStrings.display_background_image)||p.slides[o].backgroundImage||function(t){var r=t.el;e&&e.slides&&(r=e.slides[e.activeIndex]);var o=t.attrs.originalElement;o.complete&&0!==o.naturalHeight?A(t,r,o):o.onload=function(){A(t,r,o)}}(p.slides[o]),r.hide(p.caption),function(e){var t,o,a,i,n="",l="",s="";if(t=p.overlay.querySelector(".jp-carousel-photo-caption"),o=p.overlay.querySelector(".jp-carousel-caption"),a=p.overlay.querySelector(".jp-carousel-photo-title"),i=p.overlay.querySelector(".jp-carousel-photo-description"),r.hide(t),r.hide(o),r.hide(a),r.hide(i),n=k(e.caption)||"",l=k(e.title)||"",s=k(e.desc)||"",(n||l||s)&&(n&&(t.innerHTML=n,o.innerHTML=n,r.show(t),r.show(o)),r.stripHTML(n)===r.stripHTML(l)&&(l=""),r.stripHTML(n)===r.stripHTML(s)&&(s=""),r.stripHTML(l)===r.stripHTML(s)&&(s=""),s&&(i.innerHTML=s,r.show(i),l||n||(t.innerHTML=r.stripHTML(s),r.show(t))),l)){var c=r.stripHTML(l);a.innerHTML=c,n||(t.innerHTML=c,o.innerHTML=c,r.show(t)),r.show(a)}}({caption:n.attrs.caption,title:n.attrs.title,desc:n.attrs.desc}),function(e){if(!e||1!==Number(jetpackCarouselStrings.display_exif))return!1;var t=p.info.querySelector(".jp-carousel-image-meta ul.jp-carousel-image-exif"),r="";for(var o in e){var a=e[o],i=jetpackCarouselStrings.meta_data||[];if(0!==parseFloat(a)&&a.length&&-1!==i.indexOf(o)){switch(o){case"focal_length":a+="mm";break;case"shutter_speed":a=x(a);break;case"aperture":a="f/"+a}r+="<li><h5>"+jetpackCarouselStrings[o]+"</h5>"+a+"</li>"}}t.innerHTML=r,t.style.removeProperty("display")}(p.slides[o].attrs.imageMeta),function(e){if(!e)return!1;var r,o=[e.attrs.origWidth,e.attrs.origHeight],a=document.createElement("a");a.href=e.attrs.src.replace(/\?.+$/,""),r=null!==a.hostname.match(/^i[\d]{1}\.wp\.com$/i)?a.href:e.attrs.origFile.replace(/\?.+$/,"");var i=p.info.querySelector(".jp-carousel-download-text"),n=p.info.querySelector(".jp-carousel-image-download");i.innerHTML=t.applyReplacements(jetpackCarouselStrings.download_original,o),n.setAttribute("href",r),n.style.removeProperty("display")}(n),1===Number(jetpackCarouselStrings.display_comments)&&(a=p.slides[o].attrs.commentsOpened,i=p.container.querySelector(".jp-carousel-comment-form-container"),1===parseInt(a,10)?r.fadeIn(i):r.fadeOut(i),q(s),r.hide(p.info.querySelector("#jp-carousel-comment-post-results")));var d=p.info.querySelector(".jp-carousel-pagination");if(d&&p.slides.length>5){var m=o+1;d.innerHTML="<span>"+m+" / "+p.slides.length+"</span>"}jetpackCarouselStrings.stats&&((new Image).src=document.location.protocol+"//pixel.wp.com/g.gif?"+jetpackCarouselStrings.stats+"&post="+encodeURIComponent(s)+"&rand="+Math.random()),g(s),window.location.hash=l="#jp-carousel-"+s}function b(){document.body.style.overflow=a,document.documentElement.style.overflow=i,E(),f(),r.emitEvent(p.overlay,"jp_carousel.beforeClose"),window.scrollTo(window.scrollX||window.pageXOffset||0,n||0),e.destroy(),p.isOpen=!1,p.slides=[],p.currentSlide=void 0,p.gallery.innerHTML="",r.fadeOut(p.overlay,(function(){r.emitEvent(p.overlay,"jp_carousel.afterClose")}))}function L(e,t,r){var o=r?e.replace(/.*=([\d]+%2C[\d]+).*$/,"$1"):e.replace(/.*-([\d]+x[\d]+)\..+$/,"$1"),a=o!==e?r?o.split("%2C"):o.split("x"):[t,0];return"9999"===a[0]&&(a[0]="0"),"9999"===a[1]&&(a[1]="0"),a}function x(e){return e>=1?Math.round(10*e)/10+"s":"1/"+Math.round(1/e)+"s"}function k(e){return!e.match(" ")&&e.match("_")?"":e}function q(e,t){var a=void 0===t,i=p.info.querySelector(".jp-carousel-icon-comments .jp-carousel-has-comments-indicator");if(i.classList.remove("jp-carousel-show"),clearInterval(o),e){(!t||t<1)&&(t=0);var n=p.info.querySelector(".jp-carousel-comments"),l=p.info.querySelector("#jp-carousel-comments-loading");r.show(l),a&&(r.hide(n),n.innerHTML="");var s=new XMLHttpRequest,c=jetpackCarouselStrings.ajaxurl+"?action=get_attachment_comments&nonce="+jetpackCarouselStrings.nonce+"&id="+e+"&offset="+t;s.open("GET",c),s.setRequestHeader("X-Requested-With","XMLHttpRequest");var u=function(){r.fadeIn(n),r.fadeOut(l)};s.onload=function(){if(p.currentSlide&&p.currentSlide.attrs.attachmentId===e){var c,d=s.status>=200&&s.status<300;try{c=JSON.parse(s.responseText)}catch(e){}if(!d||!c||!Array.isArray(c))return u();a&&(n.innerHTML="");for(var m=0;m<c.length;m++){var g=c[m],h=document.createElement("div");h.classList.add("jp-carousel-comment"),h.setAttribute("id","jp-carousel-comment-"+g.id),h.innerHTML='<div class="comment-gravatar">'+g.gravatar_markup+'</div><div class="comment-content"><div class="comment-author">'+g.author_markup+'</div><div class="comment-date">'+g.date_gmt+"</div>"+g.content+"</div>",n.appendChild(h),clearInterval(o),o=setInterval((function(){p.container.scrollTop+150>window.innerHeight&&(q(e,t+10),clearInterval(o))}),300)}c.length>0&&(r.show(n),i.innerText=c.length,i.classList.add("jp-carousel-show")),r.hide(l)}},s.onerror=u,s.send()}}function A(e,r,o){var a=t.getBackgroundImage(o);e.backgroundImage=a,r.style.backgroundImage="url("+a+")",r.style.backgroundSize="cover"}function E(){p.commentField&&(p.commentField.value="")}function T(e,o){p.slides=[];var a={width:window.innerWidth,height:window.innerHeight-64};0!==o&&((new Image).src=e[o].getAttribute("data-gallery-src"));var i=!!r.closest(e[0],".tiled-gallery.type-rectangular");Array.prototype.forEach.call(e,(function(e,o){var n=r.closest(e,"a"),l=e.getAttribute("data-orig-file")||e.getAttribute("src-orig"),s=e.getAttribute("data-attachment-id")||e.getAttribute("data-id")||"0",c=document.querySelector('img[data-attachment-id="'+s+'"] + figcaption');c=c?c.innerHTML:e.getAttribute("data-image-caption");var u={originalElement:e,attachmentId:s,commentsOpened:e.getAttribute("data-comments-opened")||"0",imageMeta:r.getJSONAttribute(e,"data-image-meta")||{},title:e.getAttribute("data-image-title")||"",desc:e.getAttribute("data-image-description")||"",mediumFile:e.getAttribute("data-medium-file")||"",largeFile:e.getAttribute("data-large-file")||"",origFile:l||"",thumbSize:{width:e.naturalWidth,height:e.naturalHeight},caption:c||"",permalink:n&&n.getAttribute("href"),src:l||e.getAttribute("src")||""},d=r.closest(e,".tiled-gallery-item"),m=d&&d.querySelector(".tiled-gallery-caption"),g=m&&m.innerHTML;g&&(u.caption=g);var h=function(e){var t=e.getAttribute("data-orig-size")||"";if(t){var r=t.split(",");return{width:parseInt(r[0],10),height:parseInt(r[1],10)}}return{width:e.getAttribute("data-original-width")||e.getAttribute("width")||void 0,height:e.getAttribute("data-original-height")||e.getAttribute("height")||void 0}}(e);if(u.origWidth=h.width||u.thumbSize.width,u.origHeight=h.height||u.thumbSize.height,"undefined"!=typeof wpcom&&wpcom.carousel&&wpcom.carousel.generateImgSrc?u.src=wpcom.carousel.generateImgSrc(e,a):u.src=function(e){if("object"!=typeof e&&(e={}),void 0===e.origFile)return"";if(void 0===e.origWidth||void 0===e.maxWidth)return e.origFile;if(void 0===e.mediumFile||void 0===e.largeFile)return e.origFile;var t=document.createElement("a");t.href=e.largeFile;var r=/^i[0-2]\.wp\.com$/i.test(t.hostname),o=L(e.mediumFile,e.origWidth,r),a=L(e.largeFile,e.origWidth,r),i=parseInt(a[0],10),n=parseInt(a[1],10),l=parseInt(o[0],10),s=parseInt(o[1],10);if(e.origMaxWidth=e.maxWidth,e.origMaxHeight=e.maxHeight,void 0!==window.devicePixelRatio&&window.devicePixelRatio>1&&(e.maxWidth=e.maxWidth*window.devicePixelRatio,e.maxHeight=e.maxHeight*window.devicePixelRatio),i>=e.maxWidth||n>=e.maxHeight)return e.largeFile;if(l>=e.maxWidth||s>=e.maxHeight)return e.mediumFile;if(r){var c=e.largeFile.lastIndexOf("?"),u=e.largeFile;return-1!==c&&(u=e.largeFile.substring(0,c),(e.origWidth>e.maxWidth||e.origHeight>e.maxHeight)&&(e.origMaxWidth=2*e.maxWidth,e.origMaxHeight=2*e.maxHeight,u+="?fit="+e.origMaxWidth+"%2C"+e.origMaxHeight)),u}return e.origFile}({origFile:u.src,origWidth:u.origWidth,origHeight:u.origHeight,maxWidth:a.width,maxHeight:a.height,mediumFile:u.mediumFile,largeFile:u.largeFile}),e.setAttribute("data-gallery-src",u.src),"0"!==u.attachmentId){u.title=t.texturize(u.title),u.desc=t.texturize(u.desc),u.caption=t.texturize(u.caption);var f=new Image;f.src=u.src;var v=document.createElement("div");v.classList.add("swiper-slide"),v.setAttribute("itemprop","associatedMedia"),v.setAttribute("itemscope",""),v.setAttribute("itemtype","https://schema.org/ImageObject");var y=document.createElement("div");y.classList.add("swiper-zoom-container"),p.gallery.appendChild(v),v.appendChild(y),y.appendChild(f),v.setAttribute("data-attachment-id",u.attachmentId),v.setAttribute("data-permalink",u.permalink),v.setAttribute("data-orig-file",u.origFile),i&&(u.previewImage=u.src);var w={el:v,attrs:u,index:o};p.slides.push(w)}}))}function H(e,t){if(!window.Swiper670){var o=document.querySelector("#jp-carousel-loading-overlay");r.show(o);var a=document.createElement("script");return a.id="jetpack-carousel-swiper-js",a.src=window.jetpackSwiperLibraryPath.url,a.async=!0,a.onload=function(){r.hide(o),C(e,t)},a.onerror=function(){r.hide(o)},void document.head.appendChild(a)}C(e,t)}function C(t,o){var l,s={imgSelector:".gallery-item [data-attachment-id], .tiled-gallery-item [data-attachment-id], img[data-attachment-id], img[data-id]",startIndex:0},c=r.getJSONAttribute(t,"data-carousel-extra");if(c&&(y(),!p.isOpen)){for(var u in p.isOpen=!0,a=getComputedStyle(document.body).overflow,document.body.style.overflow="hidden",i=getComputedStyle(document.documentElement).overflow,document.documentElement.style.overflow="hidden",n=window.scrollY||window.pageYOffset||0,p.container.setAttribute("data-carousel-extra",JSON.stringify(c)),m(["open","view_image"]),o||{})s[u]=o[u];-1===s.startIndex&&(s.startIndex=0),r.emitEvent(p.overlay,"jp_carousel.beforeOpen"),p.gallery.innerHTML="",p.overlay.style.opacity=1,p.overlay.style.display="block",T(t.querySelectorAll(s.imgSelector),s.startIndex),(e=new window.Swiper670(".jp-carousel-swiper-container",{centeredSlides:!0,zoom:!0,loop:p.slides.length>1,enabled:p.slides.length>1,pagination:{el:".jp-swiper-pagination",clickable:!0},navigation:{nextEl:".jp-swiper-button-next",prevEl:".jp-swiper-button-prev"},initialSlide:s.startIndex,on:{init:function(){S(s.startIndex)}},preventClicks:!1,preventClicksPropagation:!1,preventInteractionOnTransition:!r.isTouch(),threshold:5})).on("slideChange",(function(e){S(0===e.activeIndex?p.slides.length-1:e.activeIndex===p.slides.length+1?0:e.activeIndex-1),p.overlay.classList.remove("jp-carousel-hide-controls")})),e.on("zoomChange",(function(e,t){t>1&&p.overlay.classList.add("jp-carousel-hide-controls"),1===t&&p.overlay.classList.remove("jp-carousel-hide-controls")})),e.on("doubleTap",(function(e){if(clearTimeout(l),1===e.zoom.scale)var t=setTimeout((function(){p.overlay.classList.remove("jp-carousel-hide-controls"),clearTimeout(t)}),150)})),e.on("tap",(function(){e.zoom.scale>1&&(l=setTimeout((function(){p.overlay.classList.toggle("jp-carousel-hide-controls")}),150))})),r.fadeIn(p.overlay,(function(){r.emitEvent(p.overlay,"jp_carousel.afterOpen")}))}}document.body.addEventListener("click",(function(e){if(window.CSS&&window.CSS.supports&&window.CSS.supports("display","grid")){var t,o=e.target,a=r.closest(o,c);if(a){if(!(t=a)||!t.getAttribute("data-carousel-extra"))return;var i=o.parentElement,n=i.parentElement,l=null;if(n&&n.classList.contains("wp-block-image")?l=i.getAttribute("href"):i&&i.classList.contains("wp-block-image")&&i.querySelector(":scope > a")&&(l=i.querySelector(":scope > a").getAttribute("href")),l&&l.split("?")[0]!==o.getAttribute("data-orig-file").split("?")[0]&&l!==o.getAttribute("data-permalink"))return;if(i.classList.contains("gallery-caption"))return;if(r.matches(i,"figcaption"))return;document.documentElement.style.height="auto",e.preventDefault(),e.stopPropagation();var s=r.closest(o,d),u=Array.prototype.indexOf.call(a.querySelectorAll(d),s);H(a,{startIndex:u})}}})),1===Number(jetpackCarouselStrings.single_image_gallery)&&(j(),document.body.addEventListener("is.post-load",(function(){j()}))),window.addEventListener("hashchange",(function(){var t=/jp-carousel-(\d+)/;if(window.location.hash&&t.test(window.location.hash)){if(window.location.hash!==l||!p.isOpen)if(window.location.hash&&p.gallery&&!p.isOpen&&history.back)history.back();else{l=window.location.hash;for(var r,o,a=window.location.hash.match(t),i=parseInt(a[1],10),n=document.querySelectorAll(c),s=0;s<n.length;s++){for(var u,d=n[s],m=d.querySelectorAll("img"),g=0;g<m.length;g++)if(parseInt(m[g].getAttribute("data-attachment-id"),10)===i||parseInt(m[g].getAttribute("data-id"),10)===i){u=g;break}if(void 0!==u){r=d,o=u,p.isOpen?(S(o),e.slideTo(o+1)):H(r,{startIndex:o});break}}}}else p.isOpen&&b()})),window.location.hash&&r.emitEvent(window,"hashchange")}"loading"!==document.readyState?o():document.addEventListener("DOMContentLoaded",o)}();;
/**
 * Observe how the user enters content into the comment form in order to determine whether it's a bot or not.
 *
 * Note that no actual input is being saved here, only counts and timings between events.
 */

( function() {
	// Passive event listeners are guaranteed to never call e.preventDefault(),
	// but they're not supported in all browsers.  Use this feature detection
	// to determine whether they're available for use.
	var supportsPassive = false;

	try {
		var opts = Object.defineProperty( {}, 'passive', {
			get : function() {
				supportsPassive = true;
			}
		} );

		window.addEventListener( 'testPassive', null, opts );
		window.removeEventListener( 'testPassive', null, opts );
	} catch ( e ) {}

	function init() {
		var input_begin = '';

		var keydowns = {};
		var lastKeyup = null;
		var lastKeydown = null;
		var keypresses = [];

		var modifierKeys = [];
		var correctionKeys = [];

		var lastMouseup = null;
		var lastMousedown = null;
		var mouseclicks = [];

		var mousemoveTimer = null;
		var lastMousemoveX = null;
		var lastMousemoveY = null;
		var mousemoveStart = null;
		var mousemoves = [];

		var touchmoveCountTimer = null;
		var touchmoveCount = 0;

		var lastTouchEnd = null;
		var lastTouchStart = null;
		var touchEvents = [];

		var scrollCountTimer = null;
		var scrollCount = 0;

		var correctionKeyCodes = [ 'Backspace', 'Delete', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown' ];
		var modifierKeyCodes = [ 'Shift', 'CapsLock' ];

		var forms = document.querySelectorAll( 'form[method=post]' );

		for ( var i = 0; i < forms.length; i++ ) {
			var form = forms[i];

			var formAction = form.getAttribute( 'action' );

			// Ignore forms that POST directly to other domains; these could be things like payment forms.
			if ( formAction ) {
				// Check that the form is posting to an external URL, not a path.
				if ( formAction.indexOf( 'http://' ) == 0 || formAction.indexOf( 'https://' ) == 0 ) {
					if ( formAction.indexOf( 'http://' + window.location.hostname + '/' ) != 0 && formAction.indexOf( 'https://' + window.location.hostname + '/' ) != 0 ) {
						continue;
					}
				}
			}

			form.addEventListener( 'submit', function () {
				var ak_bkp = prepare_timestamp_array_for_request( keypresses );
				var ak_bmc = prepare_timestamp_array_for_request( mouseclicks );
				var ak_bte = prepare_timestamp_array_for_request( touchEvents );
				var ak_bmm = prepare_timestamp_array_for_request( mousemoves );

				var input_fields = {
					// When did the user begin entering any input?
					'ak_bib': input_begin,

					// When was the form submitted?
					'ak_bfs': Date.now(),

					// How many keypresses did they make?
					'ak_bkpc': keypresses.length,

					// How quickly did they press a sample of keys, and how long between them?
					'ak_bkp': ak_bkp,

					// How quickly did they click the mouse, and how long between clicks?
					'ak_bmc': ak_bmc,

					// How many mouseclicks did they make?
					'ak_bmcc': mouseclicks.length,

					// When did they press modifier keys (like Shift or Capslock)?
					'ak_bmk': modifierKeys.join( ';' ),

					// When did they correct themselves? e.g., press Backspace, or use the arrow keys to move the cursor back
					'ak_bck': correctionKeys.join( ';' ),

					// How many times did they move the mouse?
					'ak_bmmc': mousemoves.length,

					// How many times did they move around using a touchscreen?
					'ak_btmc': touchmoveCount,

					// How many times did they scroll?
					'ak_bsc': scrollCount,

					// How quickly did they perform touch events, and how long between them?
					'ak_bte': ak_bte,

					// How many touch events were there?
					'ak_btec' : touchEvents.length,

					// How quickly did they move the mouse, and how long between moves?
					'ak_bmm' : ak_bmm
				};

				for ( var field_name in input_fields ) {
					var field = document.createElement( 'input' );
					field.setAttribute( 'type', 'hidden' );
					field.setAttribute( 'name', field_name );
					field.setAttribute( 'value', input_fields[ field_name ] );
					this.appendChild( field );
				}
			}, supportsPassive ? { passive: true } : false  );

			form.addEventListener( 'keydown', function ( e ) {
				// If you hold a key down, some browsers send multiple keydown events in a row.
				// Ignore any keydown events for a key that hasn't come back up yet.
				if ( e.key in keydowns ) {
					return;
				}

				var keydownTime = ( new Date() ).getTime();
				keydowns[ e.key ] = [ keydownTime ];

				if ( ! input_begin ) {
					input_begin = keydownTime;
				}

				// In some situations, we don't want to record an interval since the last keypress -- for example,
				// on the first keypress, or on a keypress after focus has changed to another element. Normally,
				// we want to record the time between the last keyup and this keydown. But if they press a
				// key while already pressing a key, we want to record the time between the two keydowns.

				var lastKeyEvent = Math.max( lastKeydown, lastKeyup );

				if ( lastKeyEvent ) {
					keydowns[ e.key ].push( keydownTime - lastKeyEvent );
				}

				lastKeydown = keydownTime;
			}, supportsPassive ? { passive: true } : false  );

			form.addEventListener( 'keyup', function ( e ) {
				if ( ! ( e.key in keydowns ) ) {
					// This key was pressed before this script was loaded, or a mouseclick happened during the keypress, or...
					return;
				}

				var keyupTime = ( new Date() ).getTime();

				if ( 'TEXTAREA' === e.target.nodeName || 'INPUT' === e.target.nodeName ) {
					if ( -1 !== modifierKeyCodes.indexOf( e.key ) ) {
						modifierKeys.push( keypresses.length - 1 );
					} else if ( -1 !== correctionKeyCodes.indexOf( e.key ) ) {
						correctionKeys.push( keypresses.length - 1 );
					} else {
						// ^ Don't record timings for keys like Shift or backspace, since they
						// typically get held down for longer than regular typing.

						var keydownTime = keydowns[ e.key ][0];

						var keypress = [];

						// Keypress duration.
						keypress.push( keyupTime - keydownTime );

						// Amount of time between this keypress and the previous keypress.
						if ( keydowns[ e.key ].length > 1 ) {
							keypress.push( keydowns[ e.key ][1] );
						}

						keypresses.push( keypress );
					}
				}

				delete keydowns[ e.key ];

				lastKeyup = keyupTime;
			}, supportsPassive ? { passive: true } : false  );

			form.addEventListener( "focusin", function ( e ) {
				lastKeydown = null;
				lastKeyup = null;
				keydowns = {};
			}, supportsPassive ? { passive: true } : false  );

			form.addEventListener( "focusout", function ( e ) {
				lastKeydown = null;
				lastKeyup = null;
				keydowns = {};
			}, supportsPassive ? { passive: true } : false  );
		}

		document.addEventListener( 'mousedown', function ( e ) {
			lastMousedown = ( new Date() ).getTime();
		}, supportsPassive ? { passive: true } : false  );

		document.addEventListener( 'mouseup', function ( e ) {
			if ( ! lastMousedown ) {
				// If the mousedown happened before this script was loaded, but the mouseup happened after...
				return;
			}

			var now = ( new Date() ).getTime();

			var mouseclick = [];
			mouseclick.push( now - lastMousedown );

			if ( lastMouseup ) {
				mouseclick.push( lastMousedown - lastMouseup );
			}

			mouseclicks.push( mouseclick );

			lastMouseup = now;

			// If the mouse has been clicked, don't record this time as an interval between keypresses.
			lastKeydown = null;
			lastKeyup = null;
			keydowns = {};
		}, supportsPassive ? { passive: true } : false  );

		document.addEventListener( 'mousemove', function ( e ) {
			if ( mousemoveTimer ) {
				clearTimeout( mousemoveTimer );
				mousemoveTimer = null;
			}
			else {
				mousemoveStart = ( new Date() ).getTime();
				lastMousemoveX = e.offsetX;
				lastMousemoveY = e.offsetY;
			}

			mousemoveTimer = setTimeout( function ( theEvent, originalMousemoveStart ) {
				var now = ( new Date() ).getTime() - 500; // To account for the timer delay.

				var mousemove = [];
				mousemove.push( now - originalMousemoveStart );
				mousemove.push(
					Math.round(
						Math.sqrt(
							Math.pow( theEvent.offsetX - lastMousemoveX, 2 ) +
							Math.pow( theEvent.offsetY - lastMousemoveY, 2 )
						)
					)
				);

				if ( mousemove[1] > 0 ) {
					// If there was no measurable distance, then it wasn't really a move.
					mousemoves.push( mousemove );
				}

				mousemoveStart = null;
				mousemoveTimer = null;
			}, 500, e, mousemoveStart );
		}, supportsPassive ? { passive: true } : false  );

		document.addEventListener( 'touchmove', function ( e ) {
			if ( touchmoveCountTimer ) {
				clearTimeout( touchmoveCountTimer );
			}

			touchmoveCountTimer = setTimeout( function () {
				touchmoveCount++;
			}, 500 );
		}, supportsPassive ? { passive: true } : false );

		document.addEventListener( 'touchstart', function ( e ) {
			lastTouchStart = ( new Date() ).getTime();
		}, supportsPassive ? { passive: true } : false );

		document.addEventListener( 'touchend', function ( e ) {
			if ( ! lastTouchStart ) {
				// If the touchstart happened before this script was loaded, but the touchend happened after...
				return;
			}

			var now = ( new Date() ).getTime();

			var touchEvent = [];
			touchEvent.push( now - lastTouchStart );

			if ( lastTouchEnd ) {
				touchEvent.push( lastTouchStart - lastTouchEnd );
			}

			touchEvents.push( touchEvent );

			lastTouchEnd = now;

			// Don't record this time as an interval between keypresses.
			lastKeydown = null;
			lastKeyup = null;
			keydowns = {};
		}, supportsPassive ? { passive: true } : false );

		document.addEventListener( 'scroll', function ( e ) {
			if ( scrollCountTimer ) {
				clearTimeout( scrollCountTimer );
			}

			scrollCountTimer = setTimeout( function () {
				scrollCount++;
			}, 500 );
		}, supportsPassive ? { passive: true } : false );
	}

	/**
	 * For the timestamp data that is collected, don't send more than `limit` data points in the request.
	 * Choose a random slice and send those.
	 */
	function prepare_timestamp_array_for_request( a, limit ) {
		if ( ! limit ) {
			limit = 100;
		}

		var rv = '';

		if ( a.length > 0 ) {
			var random_starting_point = Math.max( 0, Math.floor( Math.random() * a.length - limit ) );

			for ( var i = 0; i < limit && i < a.length; i++ ) {
				rv += a[ random_starting_point + i ][0];

				if ( a[ random_starting_point + i ].length >= 2 ) {
					rv += "," + a[ random_starting_point + i ][1];
				}

				rv += ";";
			}
		}

		return rv;
	}

	if ( document.readyState !== 'loading' ) {
		init();
	} else {
		document.addEventListener( 'DOMContentLoaded', init );
	}
})();;
