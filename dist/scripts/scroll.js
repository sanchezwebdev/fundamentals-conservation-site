document.addEventListener("DOMContentLoaded",function(){const n=document.getElementsByClassName("text");function t(){for(const e of n)0<=(t=(t=e).getBoundingClientRect()).top&&0<=t.left&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)&&(e.style.opacity="1",e.style.transform="translateY(0)");var t}t(),window.addEventListener("scroll",t)});