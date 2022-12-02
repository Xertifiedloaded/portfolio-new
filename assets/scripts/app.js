let homePage = document.querySelector(".home-btn")
console.log(homePage)
let backLink = document.querySelector(".back").href="index.html"
homePage.addEventListener("click",()=>{
backLink.classList.toggle("backLink")
console.log("hi")
})

let myWork = document.querySelector(".work-btn")
let workLink = document.querySelector(".my-work").href="project.html"
myWork.addEventListener("click",()=>{
    workLink.classList.add("workLink")
})