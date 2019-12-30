console.log('test');

var observer = new IntersectionObserver(function(entries) {
    // no intersection with screen
    if(entries[0].intersectionRatio === 0)
        document.querySelector("#nav").classList.add("sticky");
    // fully intersects with screen
    else if(entries[0].intersectionRatio === 1)
        document.querySelector("#nav").classList.remove("sticky");
}, { threshold: [0,1] });

console.log(document.getElementById("nav"))

observer.observe(document.querySelector("#nav-container-top"));

