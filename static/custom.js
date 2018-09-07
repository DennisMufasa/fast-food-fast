//scrolling the page on link change to prevent the navbar from hidding content
window.addEventListener("hashchange", ()=>{
    scrollBy(0, -70);
});