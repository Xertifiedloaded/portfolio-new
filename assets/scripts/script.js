let logo = document.querySelector(".ola")
let header = document.querySelector(".header-menu")
window.addEventListener("scroll",()=>{
    if(window.scrollY>50){
 
    logo.innerHTML = "Oreofe"
    header.style.background = "none"
    }else{
      
        logo.innerHTML = "Olaitan"
        header.style.background = "yellow"
    }
})