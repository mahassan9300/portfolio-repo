/* Mobile Menu */

let btn = document.getElementById("btn_hamburger");
let menu = document.getElementById("navbar_main_mobile");

btn.addEventListener('click', menuToggle);

function menuToggle() {
  btn.classList.toggle('open');
  document.body.classList.toggle('stop-scroll');
  menu.classList.toggle('show-menu');
}

/* Accordion */

let accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let accordionText = btn.nextElementSibling;
        btn.classList.toggle("accordion-btn-active");
        if (accordionText.style.maxHeight) {
            accordionText.style.maxHeight = null;
        } else {
            accordionText.style.maxHeight = accordionText.scrollHeight + "px";
        }
    })
})