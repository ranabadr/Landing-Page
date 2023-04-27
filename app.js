/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const myUl = document.querySelector("#navbar__list");
const mySections = document.querySelectorAll("section");
const header = document.querySelector('.page__header');

/**
 * End Global Variables
 * 
*/

/**
 * Begin Main Functions
 * 
*/

// build the nav
function generateNavs() {
    const fragment = document.createDocumentFragment();

mySections.forEach( (sectionElm)=>{
    const MyDataNav = sectionElm.getAttribute("data-nav");
    const newLi = document.createElement("li");
    newLi.innerText = MyDataNav;
    // Scroll to anchor ID using scrollIntoView event
    newLi.addEventListener("click", ()=>{
        sectionElm.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    });
    fragment.appendChild(newLi)
});
myUl.appendChild(fragment);

}

generateNavs();

//Fixed navbar
window.addEventListener("scroll", ()=> {
    header.classList.toggle("sticky",window.scrollY > 0);
});

//Hide the fixed navbar when scrolling down

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

// Add class 'active' to section when near top of viewport
function x(enteries) {
    enteries.forEach( (entery)=>{
        if (entery.isIntersecting) {
            mySections.forEach( (sct)=>{
                if (sct.classList.contains("your-active-class")){
                    sct.classList.remove("your-active-class");
                }
            });

            entery.target.classList.add("your-active-class");
        }
    });

}


let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 0.5
  }
  
let observator = new IntersectionObserver(x, options);
  
mySections.forEach( (sec)=>{
    observator.observe(sec);
});

/**
 * End Main Functions
 * 
*/