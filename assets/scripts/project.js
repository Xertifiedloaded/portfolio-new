
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


    let clickBox = document.querySelectorAll(".row")
    clickBox.forEach(scale=>{
        scale.addEventListener("mouseenter",()=>{
               scale.style.transform = 'perspective(2,1)'
        })
    })
    // console.log(clickBox)
   
    // clickBox.addEventListener("mouseleave", () => {
    
    // })
