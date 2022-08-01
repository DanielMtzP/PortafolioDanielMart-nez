const hamburguer = document.querySelector(".hamburguer")

const navmenu = document.querySelector(".nav_menu")

hamburguer.addEventListener("click",() => {
    navmenu.classList.toggle('visible')
})

const home = document.querySelector(".h")
const skills = document.querySelector(".s")
const proyects = document.querySelector(".p")
const contact = document.querySelector(".c")

home.addEventListener("click",() => {
    navmenu.classList.toggle('visible')
})
skills.addEventListener("click",() => {
    navmenu.classList.toggle('visible')
})
proyects.addEventListener("click",() => {
    navmenu.classList.toggle('visible')
})
contact.addEventListener("click",() => {
    navmenu.classList.toggle('visible')
})