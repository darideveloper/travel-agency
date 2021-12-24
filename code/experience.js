var experience_next = document.querySelector (".experience > .buttons > .right")
var experience_back = document.querySelector (".experience > .buttons > .left")
var experience_last_img = document.querySelector (".experience .gallery .image:nth-child(2) figure img")
var experience_center_img = document.querySelector (".experience .gallery .image:nth-child(3) figure img")
var experience_next_img = document.querySelector (".experience .gallery .image:nth-child(4) figure img")
var experience_center_p = document.querySelector (".experience .gallery .image:nth-child(3) p")
var experience_bg = document.querySelector (".experience .gallery")
var experience_bg_img = document.querySelector (".experience .gallery figure.bg img")
var experience_galery = document.querySelector (".experience .wrapper-gallery")


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

    experience_galery.classList.remove ("fixed-width")

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
        experience_galery.classList.add ("fixed-width")
        let all_images = document.querySelectorAll (".experience .gallery .image img")
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