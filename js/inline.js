const scripts=["nav","lazyLoad"];function loadScript(e){const t=document.createElement("script");t.type="text/javascript",t.src="../js/"+e+".js",t.async=!1,t.defer=!0,document.body.appendChild(t)}function loadStyle(e){const t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href="../css/"+e+".css",document.head.append(t)}function loadFavicon(){const e=document.createElement("link");e.rel="icon",e.type="image/x-icon",e.href="../assets/logo/favicon.png",document.head.append(e)}window.addEventListener("load",(function(){const e=document.querySelectorAll(".eager");null!=e&&e.forEach((e=>{e.classList.add("loaded")})),scripts.forEach(loadScript),loadFavicon()}));