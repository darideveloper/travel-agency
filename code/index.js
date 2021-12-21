var menu_button = document.querySelector (".icons > .burger.icon")
var menu = document.querySelector ("header > nav")
var active_menu = false
var hero_image = document.querySelector(".hero > figure.main-image > img")

function toggle_menu () {
    menu.classList.toggle("active")
    if (active_menu) {
        active_menu = false
    } else {
        active_menu = true
    }
}

// Togule mobile menu
menu_button.addEventListener("click", toggle_menu)
menu.addEventListener ("click", function (e) {
    console.log(e)
    if (active_menu) {
        toggle_menu ()
    }
})


// Round text
const circleType = new CircleType(document.querySelector (".cta > p.rounded"));
circleType.dir(-1)
circleType.radius(80);

// Set hero image
const hero_images = {
    "large": "./imgs/hero-large.png",
    "mediaum": "./imgs/hero-medium.png",
    "small": "./imgs/hero-small.png",
    "mobile": "./imgs/hero-mobile.png"
}
var current_image = ""

function set_hero_image () {
    
    var macth_image = ""
    if (window.matchMedia("(max-width: 660px)").matches) {
        macth_image = hero_images["mobile"]
    } else if (window.matchMedia("(max-width: 770px)").matches) {
        macth_image = hero_images["small"]
    } else if (window.matchMedia("(max-width: 1440px)").matches) {
        macth_image = hero_images["mediaum"]
    } else {
        macth_image = hero_images["large"]
    }

    if (current_image != macth_image) {
        current_image = macth_image
        hero_image.setAttribute ("src", current_image)
    }

}

// Set image when page load
set_hero_image ()

// Update hero image
window.addEventListener('resize', set_hero_image);
