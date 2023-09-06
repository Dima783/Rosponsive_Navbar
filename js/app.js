const mobileMenuButton =document.getElementById('mobil-menu-button');
const mobileMenu =document.getElementById('mobil-menu');


mobileMenuButton.addEventListener("click", function(){
    mobileMenuButton.classList.toggle("bx-menu");
    mobileMenu.classList.toggle("hidden") 
})