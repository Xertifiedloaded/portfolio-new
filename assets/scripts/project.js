
let navBurger = document.querySelector(".nav-burger")
let isOnline = false;
let removeShow = document.querySelector(".hide")
let body = document.querySelector("body")
navBurger.addEventListener("click", () => {
    if (isOnline == false) {
        isOnline = true;
        removeShow.classList.add("show")
        body.style.overflowY = "hidden"
    } else {
        isOnline = false
        removeShow.classList.remove("show")
        body.style.overflowY = "scroll"
    }
})
let navLink = document.querySelectorAll(".link")
// console.log(navLink)
navLink.forEach((link) => {
    link.addEventListener("click", () => {
        navLink.forEach((e) => {
            e.classList.remove("activeNav")
        })
        link.classList.add("activeNav")
    })
})



let myHeader = document.querySelector(".header")
window.addEventListener("scroll", () => {
    if (window.scrollY > 50){
        myHeader.classList.add("active-header")
    }else{
        myHeader.classList.remove("active-header")
    }
})