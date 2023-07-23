$('.carousel-1').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },    
        768:{
            items:2
        },
        920:{
            items:3
        },
        1300:{
            items:4
        }
    }
})

$('.owl-three').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        }, 
        576:{
            items:3
        },
        768:{
            items:4
        },
        992:{
            items:3
        },
        1200:{
            items:3
        }
    }
})

$('.owl-two').owlCarousel({
    loop:true,
    margin:32,
    nav:true,
    responsive:{
        0:{
            items:1
        },    
        620:{
            items:2
        },
        992:{
            items:3
        }
    }
})

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

// Navbar Shrink //

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("nav-shrink");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}

// Dark Mode //

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

window.addEventListener("scroll", function () {
  toggleBacktop();
});

// Back To Top

