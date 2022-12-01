// change NavBar color when scroll
let logo = document.querySelector(".ola")
let header = document.querySelector(".header-menu")
let footerNav = document.querySelectorAll(".footer-item")
let links = document.querySelectorAll(".link")
let openHamburger = document.querySelector(".hamburger")
let closeHamburger = document.querySelector(".fa-xmark")
let hide = document.querySelector(".hide")
let newBody = document.querySelector("body")
let mobileOpen = document.querySelector(".fa-equals")
let mobileClose = document.querySelector(".fa-not-equal")
let close = document.querySelector(".close")
let mobileNav = document.querySelectorAll(".mobile-nav")
console.log(mobileNav)
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        logo.innerHTML = "Oreofe"
        logo.style.color = "black"
    } else {
        logo.innerHTML = "Olaitan"
        logo.style.color = "white"
    }
})
// remove siblings element
links.forEach((link) => {
    link.addEventListener("click", () => {
        links.forEach((e) => {
            e.classList.remove("online")
        })
        link.classList.add("online")
    })
})
// desktop footer-nav
footerNav.forEach((footer) => {
    footer.addEventListener("click", () => {
        footerNav.forEach((event) => {
            console.log("remove")
            event.classList.remove("online")
        })
        footer.classList.add("online")
    })
})
// desktop navBar
openHamburger.addEventListener("click", () => {
    hide.classList.replace("hide", "show")
    // console.log("h111")
})
closeHamburger.addEventListener("click", () => {
    hide.classList.replace("show", "hide")
})
// mobile navBar
mobileOpen.addEventListener("click", () => {
    close.classList.replace("close", "open")
    newBody.style.overflowY = "hidden"
})
mobileClose.addEventListener("click", () => {
    close.classList.replace("open", "close")
    newBody.style.overflowY = "scroll"
})
// mobile Nav
mobileNav.forEach((list) => {
    list.addEventListener("click", () => {
        mobileNav.forEach((e) => {
            e.classList.remove("online")
        })
        list.classList.add("online")
    })
})
// toggle
let newLink = document.querySelector(".new-link")
newLink.addEventListener("click", () => {
    let work = document.querySelector(".work-anchor1").href ="project.html"
    work.classList.toggle("work")
})



