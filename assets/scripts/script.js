let logo = document.querySelector(".ola")
let header = document.querySelector(".header-menu")
window.addEventListener("scroll",()=>{
    if(window.scrollY>50){
 
    logo.innerHTML = "Oreofe"
    // header.style.background = "yellow"
    logo.style.color = "black"
    }else{
        // header.style.background = "none"
        logo.innerHTML = "Olaitan"
      logo.style.color = "white"
    }
})