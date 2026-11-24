// upon clicking Learn More Button,you are redirected to the learn more page
const learnMoreButton = document.getElementById('learnMore');
learnMoreButton.addEventListener('click', function() {
    window.open('learnMore.html', '_blank');
});


const applyButton = document.getElementById('apply');
applyButton.addEventListener('click',function(){
    window.open('apply.html','_blank');
    
});



// menu
const menu = document.querySelector("#mobileMenu");
const menuButton = document.querySelector("#menuButton");
const closeMenuButton = document.querySelector("#closeMenuButton");

//opening the menu when the menu button is clicked 
menuButton.addEventListener("click", () => {
    menu.hidden=false;
    menuButton.setAttribute("aria-expanded", "true");
})


//closing the menu when close button is clicked
closeMenuButton.addEventListener("click", () => {
    menu.hidden=true;
    menuButton.setAttribute("aria-expanded", "false");
})