window.addEventListener("load",function(){
    AOS.init();
});





// /*------------------------toggle navbar---------------------------------- */
const navtoggler = document.querySelector(".nav-toggler");
navtoggler.addEventListener("click", toggleNav);

function toggleNav() {
    navtoggler.classList.toggle("active"); 
    document.querySelector(".nav").classList.toggle("open");
}
/*----------close nav click on nav item---------------*/
document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    }
})
// ---------------sticky header-------------
window.addEventListener("scroll", function(){
    if( this.pageYOffset > 60) {
        document.querySelector(".header").classList.add("sticky");
    }
    else{
        document.querySelector(".header").classList.remove ("sticky");
    }
});
// ---------------menu-table----------
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(e) {
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSelection = document.querySelector(".menu-section");
        menuSelection.querySelector(".menu-tab-content.active").classList.remove("active");
        menuSelection.querySelector(target).classList.add("active")
        AOS.init();
    }
});