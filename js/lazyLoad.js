var bgColor="hsla(0, 0%, 0%, 0.65)",lazyLoadOptions={threshold:0,rootMargin:"0px 0px 300px 0px"},assets=document.querySelectorAll("[data]"),assetObserver=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var r=e.target;r.src="assets/"+r.getAttribute("data"),t.unobserve(e.target)}}))}),lazyLoadOptions);assets.forEach((function(e){e.setAttribute("loading","lazy"),assetObserver.observe(e),e.onload=function(){e.classList.add("loaded")}}));var gradient="linear-gradient("+bgColor+", "+bgColor+"), url(assets/",backgrounds=document.querySelectorAll("[bg]"),bgObserver=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var r=e.target,s="bg/"+r.getAttribute("bg");r.style.backgroundImage=gradient+s+")",t.unobserve(e.target)}}))}),lazyLoadOptions);backgrounds.forEach((function(e){bgObserver.observe(e)}));