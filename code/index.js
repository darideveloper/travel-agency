function sleep(seg) {
    return new Promise(resolve => setTimeout(resolve, seg*1000));
}

// Round text "available now"
const circleType = new CircleType(document.querySelector (".cta > p.rounded"));
circleType.dir(-1)
circleType.radius(80);

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
