const assetLoc="../assets/",black="hsla(0, 0%, 5%, 1.00)",blackt="hsla(0, 0%, 0%, 0.90)",bgColor="hsla(0, 0%, 0%, 0.65)",lazyLoadOptions={threshold:0,rootMargin:"0px 0px 600px 0px"},assets=document.querySelectorAll("[data]"),assetObserver=new IntersectionObserver(((e,t)=>{e.forEach((e=>{if(!e.isIntersecting)return;const r=e.target;r.src=assetLoc+r.getAttribute("data"),t.unobserve(e.target)}))}),lazyLoadOptions);assets.forEach((e=>{e.setAttribute("loading","lazy"),assetObserver.observe(e),e.onload=function(){e.classList.add("loaded")}}));const gradient="linear-gradient("+black+" 0%, "+bgColor+" 20%, "+bgColor+" 85%, "+black+" 100%), url("+assetLoc,backgrounds=document.querySelectorAll("[bg]"),bgObserver=new IntersectionObserver(((e,t)=>{e.forEach((e=>{if(!e.isIntersecting)return;const r=e.target,s="bg/"+r.getAttribute("bg");r.style.backgroundImage=gradient+s+")",t.unobserve(e.target)}))}),lazyLoadOptions);backgrounds.forEach((e=>{bgObserver.observe(e)}));