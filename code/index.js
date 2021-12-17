var menu_button = document.querySelector (".icons > .burger.icon")
var menu = document.querySelector ("header > nav")
var active_menu = false

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