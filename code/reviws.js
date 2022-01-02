// reviws_bg = ""
var reviws_next = document.querySelector (".reviws .wrapper-arrow-buttons > .right")
var reviws_back = document.querySelector (".reviws .wrapper-arrow-buttons > .left")
var card_user = document.querySelector (".reviws .card .user")
var card_title = document.querySelector (".reviws .card .title")
var card_body = document.querySelector (".reviws .card .body")
var phone_user = document.querySelector (".reviws .phone .user")
var phone_title = document.querySelector (".reviws .phone .title")
var phone_img = document.querySelector (".reviws .phone .profile > img")

// Reviews data
reviws = [
    {
        "user": "Mary Larson",
        "title": "My trip was fabulous! Agency provide me with all necessary information. Many thanks!",
        "body": "I chose tour to Narway.Group was small and adventurous. Agency provided great service for me and helped to cape with all documnety issues. Transport was pretty confortable and we has enought rooms to relax.",
        "profile_img": "./imgs/woman1.png"
    },
    {
        "user": "Dari Developer",
        "title": "The best vacation I've ever had.",
        "body": "It was an incredible journey. I visited beautiful places in Spain. Without a doubt, I would hire them again.",
        "profile_img": "./imgs/man1.png"
    },
    {
        "user": "Diana Reyes",
        "title": "I would like to have met you before.",
        "body": "A friend recommended her services to me. At first I was not very sure due to bad experiences I had with other agencies, but you made the experience unforgettable. I will definitely recommend it to all my friends.",
        "profile_img": "./imgs/woman2.png"
    },
]

// Spain gallery functionality
var reviws_index = 0

async function update_reviws () {
    
    // Start animation
    // reviws_bg.classList.add ("animation")
    // await sleep (1)

    let reviw = reviws[reviws_index]

    // Fade out
    card_user.classList.add ("animation")
    phone_img.classList.add ("animation")
    await sleep (0.5)
    card_title.classList.add ("animation")
    phone_user.classList.add ("animation")
    await sleep (0.5)
    card_body.classList.add ("animation")
    phone_title.classList.add ("animation")
    await sleep (0.5)

    // Update data
    card_user.innerHTML = reviw["user"]
    card_title.innerHTML = reviw["title"]
    card_body.innerHTML = reviw["body"]
    phone_user.innerHTML = reviw["user"]
    phone_title.innerHTML = reviw["title"]
    phone_img.setAttribute("src", reviw["profile_img"])

    // Fate in
    card_user.classList.remove ("animation")
    phone_img.classList.remove ("animation")
    await sleep (0.5)
    card_title.classList.remove ("animation")
    phone_user.classList.remove ("animation")
    await sleep (0.5)
    card_body.classList.remove ("animation")
    phone_title.classList.remove ("animation")
    await sleep (0.5)


}

// Galley acctions
reviws_next.addEventListener ("click", function (e) {
    if (reviws_index == (reviws.length - 1)) {
        reviws_index = 0
    } else {
        reviws_index += 1
    }
    update_reviws ()
})

reviws_back.addEventListener ("click", function (e) {
    if (reviws_index == 0) {
        reviws_index = (reviws.length - 1)
    } else {
        reviws_index -= 1
    }
    update_reviws ()
})