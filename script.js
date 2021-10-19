const hamburger = document.querySelector(".hamburger");
const navHidden = document.querySelector(".mob-nav-hidden");

hamburger.addEventListener('click',() => {
    navHidden.classList.toggle("active");
})
