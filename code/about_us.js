var gallery_about_images_elems = document.querySelectorAll(".about-us .gallery .wrapper-img img")

// gallery_about images list
const gallery_about_images = {
    "desktop": [
        "./imgs/gallery-about-1-desktop.png",
        "./imgs/gallery-about-2-desktop.png",
        "./imgs/gallery-about-3-desktop.png",
        "./imgs/gallery-about-4-desktop.png"

    ], 
    "mobile_large": [
        "./imgs/gallery-about-1-mobile-large.png",
        "./imgs/gallery-about-2-mobile-large.png",
        "./imgs/gallery-about-3-mobile-large.png",
        "./imgs/gallery-about-4-mobile-large.png"
    ],
    "mobile_small": [
        "./imgs/gallery-about-1-mobile-small.png",
        "./imgs/gallery-about-2-mobile-small.png",
        "./imgs/gallery-about-3-mobile-small.png",
        "./imgs/gallery-about-4-mobile-small.png"
    ]
}
var current_gallery_about_images = []

function set_gallery_about_images () {

    // Get images
    let macth_images = []
    if (window.matchMedia("(max-width: 768px)").matches) {
        macth_images = gallery_about_images["mobile_small"]
    } else if (window.matchMedia("(max-width: 1200px)").matches) {
        macth_images = gallery_about_images["mobile_large"]
    } else {
        macth_images = gallery_about_images["desktop"]
    }
    
    // Apply images
    if (current_gallery_about_images != macth_images) {
        current_gallery_about_images = macth_images
        for (index in Array.from (gallery_about_images_elems)) {
            macth_image = macth_images[index]
            gallery_about_images_elems [index].setAttribute ("src", macth_image)
        }
    }
}