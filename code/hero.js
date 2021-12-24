
var hero_image = document.querySelector(".hero > figure.main-image > img")

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