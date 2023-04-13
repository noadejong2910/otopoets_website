// Navbar
const hamburger_menu = document.querySelector(".hamburger-menu");
const nav_container = document.querySelector(".nav-container");

hamburger_menu.addEventListener("click", () => {
    nav_container.classList.toggle("active");
});


// Flipcards
// document.addEventListener("DOMContentLoaded", function() {
//   var flipContainers = document.querySelectorAll(".flip-container");
//   for (var i = 0; i < flipContainers.length; i++) {
//     flipContainers[i].addEventListener("click", function() {
//       this.classList.toggle("touch");
//     }, false);
//   }
// });

// Touch mobile 
// document.addEventListener("touchstart", e => {
//   console.log("Start")
// })

// Move mobile 
// document.addEventListener("touchmove", e => {
//   console.log("Move")
// })

// End touch mobile 
// document.addEventListener("touchend", e => {
//   console.log("End")
// })

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


// Before-After Slider
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


// Before-After Slider
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


// Carrousel
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.carousel').children;
const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
  nextImage('next');
})

next.addEventListener('click', () => {
  nextImage('prev');
})

function nextImage(direction) {
  if(direction == 'next') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  images[index].classList.add('main');
}