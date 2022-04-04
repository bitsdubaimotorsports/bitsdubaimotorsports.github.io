const bgColor:string = "hsla(0, 0%, 0%, 0.65)"
const lazyLoadOptions = {
	threshold: 0,
	rootMargin: "0px 0px 300px 0px"
};

// assets
const assets = document.querySelectorAll("[data]")
const assetObserver = new IntersectionObserver((entries, assetObserver) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) return
		
		const asset = <HTMLMediaElement> entry.target;
		asset.src = "assets/" + asset.getAttribute("data");		
		assetObserver.unobserve(entry.target)
	});
}, lazyLoadOptions)
assets.forEach((asset) => {
	asset.setAttribute("loading", "lazy")
	assetObserver.observe(asset);
	
	(<HTMLMediaElement> asset).onload = function (){
		asset.classList.add("loaded")
	}
})

// bg
const gradient:string = "linear-gradient(" + bgColor + ", " + bgColor + "), url(assets/"
const backgrounds = document.querySelectorAll("[bg]")

const bgObserver = new IntersectionObserver((entries, bgObserver) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) return
		const background = <HTMLElement> entry.target
		const url = "bg/" + background.getAttribute("bg");
		background.style.backgroundImage = gradient + url + ")"
		bgObserver.unobserve(entry.target)
	});
}, lazyLoadOptions)
backgrounds.forEach((asset) => {
	bgObserver.observe(asset)
})