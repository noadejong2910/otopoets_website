// Navbar
const hamburger_menu = document.querySelector(".hamburger-menu");
const nav_container = document.querySelector(".nav-container");
const body = document.querySelector("body");

hamburger_menu.addEventListener("click", () => {
    nav_container.classList.toggle("active");
    body.classList.toggle("no-scroll");
});

// var submenu = document.getElementById('submenu');
// var link = document.getElementById('poetspakketten-link');

// link.addEventListener('click', function() {
//   if (submenu.style.display === 'none') {
//     submenu.style.display = 'block';
//   } else {
//     submenu.style.display = 'none';
//   }
// });

// const toggleSubMenu = document.querySelector('.submenu-toggle');
// const subMenu = document.querySelector('.submenu');

// toggleSubMenu.addEventListener('click', function() {
//   subMenu.classList.toggle('active');
// });


const submenuToggle = document.querySelector('.submenu-toggle');
const submenu = document.querySelector('.submenu');

submenuToggle.addEventListener('click', function() {
  if (submenu.style.display === 'block') {
    submenu.style.display = 'none';
  } else {
    submenu.style.display = 'block';
  }
});




// Mobile touch
const elements = document.querySelectorAll(".btn, .icon-item");

elements.forEach((element) => {
  // Add touchstart event listener
  element.addEventListener('touchstart', () => {
    element.classList.add('touch-hover-effect');
  });

  element.addEventListener('touchend', () => {
    // Remove touch effect
    element.classList.remove('touch-hover-effect');
  });
  element.addEventListener('click', () => {
    // Add click effect
    element.classList.add('click-effect');
    setTimeout(() => {
      // Remove click effect after a short delay
      element.classList.remove('click-effect');
    }, 300);
  });
});


// Before-After Slider Computer
document.querySelectorAll('.bef-aft-slider').forEach((elem) => {
	
	let x, width
	
	elem.onmouseenter = () => {
		
		const size = elem.getBoundingClientRect()
		
		x = size.x
		width = size.width
		
	}
	
	elem.onmousemove = (e) => {
		
		const horizontal = ((e.clientX - x) / width) * 100
		
		elem.style.setProperty('--x', horizontal + '%')
		
	}
})


// Before-After Slider Mobiel
document.querySelectorAll('.bef-aft-slider').forEach((elem) => {
  
  let x, width
  
  elem.ontouchstart = (e) => {
    
    const size = elem.getBoundingClientRect()
    
    x = size.x
    width = size.width
    
    // Voorkom dat de pagina wordt gesleept tijdens de schuifbeweging
    e.preventDefault();
    
  }
  
  elem.ontouchmove = (e) => {
    
    const horizontal = ((e.touches[0].clientX - x) / width) * 100
    
    elem.style.setProperty('--x', horizontal + '%')
    
  }
})


function modulo(number, mod) {
  let result = number % mod;
  if (result < 0) { 
    result += mod;
  }
  return result;
}


// Carousel
function setUpCarousel(carousel) {
  function handleNext() {
    currentSlide = modulo(currentSlide + 1, numSlides);
    changeSlide(currentSlide);
  }

  function handlePrevious() {
    currentSlide = modulo(currentSlide - 1, numSlides);
    changeSlide(currentSlide);
  }

  function changeSlide(slideNumber) {
    carousel.style.setProperty('--current-slide', slideNumber);
  }

  const buttonPrevious = carousel.querySelector('[data-carousel-button-previous]');
  const buttonNext = carousel.querySelector('[data-carousel-button-next]');
  const slidesContainer = carousel.querySelector('[data-carousel-slides-container]');

  let currentSlide = 0;
  const numSlides = slidesContainer.children.length;

  buttonPrevious.addEventListener('click', handlePrevious);
  buttonNext.addEventListener('click', handleNext);
}

const carousels = document.querySelectorAll('[data-carousel]');
carousels.forEach(setUpCarousel);







