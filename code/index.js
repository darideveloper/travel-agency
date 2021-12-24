var menu_button = document.querySelector (".icons > .burger.icon")
var menu = document.querySelector ("header > nav")
var active_menu = false

var hero_image = document.querySelector(".hero > figure.main-image > img")

var gallery_about_images_elems = document.querySelectorAll(".about-us .gallery > figure > img")

var spain_image = document.querySelector (".spain > .images > figure.bg > img")

var experience_next = document.querySelector (".experience > .buttons > .right")
var experience_back = document.querySelector (".experience > .buttons > .left")
var experience_last_img = document.querySelector (".experience .gallery .image:nth-child(2) figure img")
var experience_center_img = document.querySelector (".experience .gallery .image:nth-child(3) figure img")
var experience_next_img = document.querySelector (".experience .gallery .image:nth-child(4) figure img")
var experience_center_p = document.querySelector (".experience .gallery .image:nth-child(3) p")
var experience_bg = document.querySelector (".experience .gallery")
var experience_bg_img = document.querySelector (".experience .gallery figure.bg img")

function sleep(seg) {
    return new Promise(resolve => setTimeout(resolve, seg*1000));
}

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

// Spain gallery functionality
var experience_data = [
    {
        "name": "Barcelona",
        "url": "./imgs/experience-barcelona-rezized.png"
    },
    {
        "name": "Benidorm",
        "url": "./imgs/experience-benidorm-rezized.png"
    },
    {
        "name": "Madrid",
        "url": "./imgs/experience-madrid-rezized.png"
    },
    {
        "name": "Sevilla",
        "url": "./imgs/experience-sevilla-rezized.png"
    },
    {
        "name": "Valencia",
        "url": "./imgs/experience-valencia-rezized.png"
    },
]

var experience_index = 1

async function update_experience_images () {

    // Calculate next and last image
    let last_index
    let next_index
    
    if (experience_index == 4) {
        next_index = 1
    } else {
        next_index = experience_index + 1
    }
    
    if (experience_index == 0) {
        last_index = 4
    } else {
        last_index = experience_index - 1
    }
    
    // Start animation
    experience_bg.classList.add ("animation")
    await sleep (1)

    // Update images
    experience_last_img.setAttribute ("src", experience_data[last_index]["url"])
    experience_center_img.setAttribute ("src", experience_data[experience_index]["url"])
    experience_next_img.setAttribute ("src", experience_data[next_index]["url"])

    // Update text
    experience_center_p.innerHTML = experience_data[experience_index]["name"]

    // Update background
    experience_bg_img.setAttribute ("src", experience_data[experience_index]["url"])
    
    // End animation
    experience_bg.classList.remove ("animation")

    // Set mobile images
    if (window.matchMedia("(max-width: 1200px)").matches) {
        let all_images = document.querySelectorAll (".gallery .image img")
        for (image_index in Array.from (all_images)) {
            console.log (image_index)
            let image = all_images[image_index]
            image.setAttribute("src", experience_data[image_index]["url"])
        }
    }
}

// Galley acctions
experience_next.addEventListener ("click", function (e) {
    if (experience_index == 4) {
        experience_index = 0
    } else {
        experience_index += 1
    }
    update_experience_images ()
})

experience_back.addEventListener ("click", function (e) {
    if (experience_index == 0) {
        experience_index = 4
    } else {
        experience_index -= 1
    }
    update_experience_images ()
})

// Set images when page load
set_hero_image ()
set_gallery_about_images ()
set_spain_image ()
update_experience_images ()

// Update hero image
window.addEventListener('resize', function (e) {
    set_hero_image ()
    set_gallery_about_images ()
    set_spain_image ()
    update_experience_images ()
});
