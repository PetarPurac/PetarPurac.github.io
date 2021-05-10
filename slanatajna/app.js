//TOP BUTTON FUNCTION
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};
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

 menuImage = document.querySelector(".content").style;
function moveMenu() {
  if (document.documentElement.scrollTop > 1500) {
    menuImage.position = "absolute";
    menuImage.top = "250%";
    
    
    // if(document.documentElement.scrollTop > 2000 && document.documentElement.scrollTop < 2900) {
    //   menuImage.position = "absolute";
    //   menuImage.top = "250%";
    // }
    // if(document.documentElement.scrollTop > 3000) {
    //   menuImage.position = "absolute";
    //   menuImage.top = "300%";
    // }
    // if (document.documentElement.scrollTop > 2600) {
    //   menuImage.position = "absolute";
    //   menuImage.top = "350%";
    // }
    // }if(document.documentElement.scrollTop > 3200 && document.documentElement.scrollTop < 3300) {
    //   menuImage.position = "absolute";
    //   menuImage.top = "400%";
    // } 
   
  }  else {
    menuImage.position = "absolute";
    menuImage.top= "100%"
  } 
}
// window.onscroll = moveMenu();
window.onscroll = function () { moveMenu() , scrollFunction() };


//SCROLL ANIMATIONS

//darkmode function
// const darkButton = document.getElementById('darkBtn');

// darkButton.addEventListener("click", function(){
//   const icon = document.querySelector('i');
//   const text = document.querySelector('span');
//   var body = document.querySelector('.body-section');
  
//   const darkColor = "#333";
//   const lightColor = "rgb(244, 241, 222)";
  
  
//   if (body.style.backgroundColor === lightColor) {
//     body.style.backgroundColor = darkColor;
//     icon.classList.remove('fa-moon');
//     icon.classList.add('fa-sun');
//     text.innerHTML = "Light";
    
//   }
   
//   else {
//     body.style.backgroundColor = lightColor;
//     icon.classList.remove('fa-sun');
//     icon.classList.add('fa-moon');
//     text.innerHTML = "Dark"
//   }
// });


///IMAGE GALLERY SLIDERS
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//form validation
const name = document.getElementById('name');
const email = document.getElementById('mail');
const msg = document.getElementById('message');
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  const name = document.getElementById('name');
  let messages = []

  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  
  }
  if (msg.value === '' || msg.value == null){
    messages.push('Message must be shorter than 500 characters')
  }

  if (email.value === '' || email.value == null) {
    messages.push('Email is required')
  
  }
  // if (messages.length > 0) {
  //   e.preventDefault()
  //   errorElement.innerText = messages.join(', ')
  // }

});



//hamburger 
var menu = document.querySelector(".menu")
var ham = document.querySelector(".ham")
var xIcon = document.querySelector(".xIcon")
var menuIcon = document.querySelector(".menuIcon")

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)



// function menuOpen() {
//   const menuBtn = document.getElementById('mySideMenuFunction')
//   const imgContainer = document.querySelectorAll('.image-container')
//   menuBtn.addEventListener("click")
//     imgContainer.style.display= "block"
  
// }

// document.querySelector(document).ready(function() {
//   document.querySelector('.image-link').magnificPopup({type:'image'});
// });
function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}