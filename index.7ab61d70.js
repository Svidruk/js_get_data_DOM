var t=document.querySelectorAll(".population"),e=document.querySelector(".total-population"),n=document.querySelector(".average-population"),r=Array.from(t).map(function(t){return t.textContent}).map(function(t){var e=parseInt(t.replaceAll(",",""));return isNaN(e)?null:e}).filter(function(t){return null!==t}),o=r.reduce(function(t,e){return t+e},0),l=o/r.length;e.textContent=o.toLocaleString("en-US"),n.textContent=l.toLocaleString("en-US");
//# sourceMappingURL=index.7ab61d70.js.map
