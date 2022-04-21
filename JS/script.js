const btn_menu = document.querySelector(".fa-solid")
const nav = document.querySelector(".container-nav")
const menu = document.querySelector(".menu")



btn_menu.addEventListener("click", ()=> {

    btn_menu.classList.toggle("girar")
    menu.classList.toggle("active")
    nav.classList.toggle("color")
    gsap.set(".item",{
        scale:0
    })
    gsap.to(".item",{
        delay:0.5,
        scale:1,
        ease:"elastic", 
        stagger:"0.2",
    
    })
})
menu.addEventListener("click", ()=> {
    btn_menu.classList.remove("girar")
    menu.classList.remove("active")
    nav.classList.remove("color")
})



//  animaciones

gsap.set("#efect1",{
    opacity:0,
    scale:0
})
gsap.to("#efect1",{
    opacity:1, 
    scale:1,
    ease:"elastic", 
    stagger:"0.4",
})

//  efecto write

new Typed(".typed", {
    strings: ["Brayan Farro", "Developer Web"],
    loop:true,
    typeSpeed:75,
    backSpeed:75
})