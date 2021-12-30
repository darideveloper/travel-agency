var spain_image = document.querySelector (".spain > .images > .wrapper-img.bg > img")

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