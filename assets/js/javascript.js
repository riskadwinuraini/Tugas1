console.log("Hallo ini website ku, Riska Dwi Nur Aini")
var navbar = document.querySelector('nav')

    window.onscroll = function() {

    // pageYOffset or scrollY
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
    }