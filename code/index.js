var menu_button = document.querySelector (".icons > .burger.icon")
var menu = document.querySelector ("header > nav")
var active_menu = false
var hero_image = document.querySelector(".hero > figure.main-image > img")
var gallery_images_elems = document.querySelectorAll(".gallery > figure > img")
var spain_image = document.querySelector (".spain > .images > figure.bg > img")

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


// Hero images list
const hero_images = {
    "large": "./imgs/hero-large.png",
    "medium": "./imgs/hero-medium.png",
    "small": "./imgs/hero-small.png",
    "mobile": "./imgs/hero-mobile.png"
}
var current_hero_image = ""

function set_hero_image () {
    
    // correct image
    let macth_image = ""
    if (window.matchMedia("(max-width: 680px)").matches) {
        macth_image = hero_images["mobile"]
    } else if (window.matchMedia("(max-width: 770px)").matches) {
        macth_image = hero_images["small"]
    } else if (window.matchMedia("(max-width: 1440px)").matches) {
        macth_image = hero_images["medium"]
    } else {
        macth_image = hero_images["large"]
    }

    // Apply image
    if (current_hero_image != macth_image) {
        current_hero_image = macth_image
        hero_image.setAttribute ("src", current_hero_image)
    }
}


// Gallery images list
const gallery_images = {
    "desktop": [
        "./imgs/gallery-1-desktop.png",
        "./imgs/gallery-2-desktop.png",
        "./imgs/gallery-3-desktop.png",
        "./imgs/gallery-4-desktop.png"

    ], 
    "mobile_large": [
        "./imgs/gallery-1-mobile-large.png",
        "./imgs/gallery-2-mobile-large.png",
        "./imgs/gallery-3-mobile-large.png",
        "./imgs/gallery-4-mobile-large.png"
    ],
    "mobile_small": [
        "./imgs/gallery-1-mobile-small.png",
        "./imgs/gallery-2-mobile-small.png",
        "./imgs/gallery-3-mobile-small.png",
        "./imgs/gallery-4-mobile-small.png"
    ]
}
var current_gallery_images = []

function set_gallery_images () {

    // Get images
    let macth_images = []
    if (window.matchMedia("(max-width: 768px)").matches) {
        macth_images = gallery_images["mobile_small"]
    } else if (window.matchMedia("(max-width: 1200px)").matches) {
        macth_images = gallery_images["mobile_large"]
    } else {
        macth_images = gallery_images["desktop"]
    }
    
    // Apply images
    if (current_gallery_images != macth_images) {
        current_gallery_images = macth_images
        for (index in Array.from (gallery_images_elems)) {
            macth_image = macth_images[index]
            gallery_images_elems [index].setAttribute ("src", macth_image)
        }
    }
}

// Spain image list
const spain_images = {
    "large": "./imgs/spain-bg-large.png",
    "medium": "./imgs/spain-bg-medium.png",
    "small": "./imgs/spain-bg-small.png",
    "mobile": "./imgs/spain-bg-mobile.png"
}
var current_spain_image = ""

function set_spain_image () {

    // correct image
    let macth_image = ""
    if (window.matchMedia("(max-width: 768px)").matches) {
        macth_image = spain_images["mobile"]
    } else if (window.matchMedia("(max-width: 1200px)").matches) {
        macth_image = spain_images["small"]
    } else if (window.matchMedia("(max-width: 1440px)").matches) {
        macth_image = spain_images["medium"]
    } else {
        macth_image = spain_images["large"]
    }

    if (current_spain_image != macth_image) {
        current_spain_image = macth_image
        spain_image.setAttribute ("src", current_spain_image)
    }
}

// Set image when page load
set_hero_image ()
set_gallery_images ()
set_spain_image ()

// Update hero image
window.addEventListener('resize', function (e) {
    set_hero_image ()
    set_gallery_images ()
    set_spain_image ()
});