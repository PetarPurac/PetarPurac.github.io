const navlist = document.querySelector('.navlist')
const x = document.querySelector('.x')
const y = document.querySelector('.y')

x.addEventListener('click', sideMenu)
y.addEventListener('click', sideMenu)
x.style.display = "none"
function sideMenu() {
  // navlist.classList.toggle('showMenu')
  // x.innerHTML = "&#9776;"
  
  // if (navlist.classList.contains('showMenu')) {
  //   navlist.classList.remove("showMenu");
    
  //   x.innerHTML = "&#9776;"
  // } else {
  //   navlist.classList.add("showMenu");
  //   // x.style.display = "block";
  //   x.innerHTML = "X"
  // }
  if (navlist.classList.contains("showMenu")) {
    navlist.classList.remove("showMenu");
    x.style.display = "none";
    y.style.display = "block";
    
  } else {
    navlist.classList.add("showMenu");
    x.style.display = "block";
    y.style.display = "none";
    
  }
  
}

const mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
mybutton.style.display = "none";
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//ANIME.JS
// Wrap every letter in a span
// var textWrapper = document.querySelector('.ml2');


// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$n</span>  ");



// anime.timeline({loop: true})
//   .add({
//     targets: '.ml2 .letter', 
//     scale: [4,1],
//     opacity: [0,1],
//     translateZ: 0,
//     easing: "easeOutExpo",
//     duration: 950,
//     delay: (el, i) => 70*i
//   }).add({
    
//     targets: '.ml2',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

