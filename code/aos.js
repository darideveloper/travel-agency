// Update aos animations for responsive

var aos_menu_tours = document.querySelector ("#header nav ul li:nth-child(2) a")
var aos_menu_guides = document.querySelector ("#header nav ul li:nth-child(3) a")
var aos_menu_reviews = document.querySelector ("#header nav ul li:nth-child(4) a")
var aos_menu_contact = document.querySelector ("#header nav ul li:nth-child(5) a")

var aos_hero_image = document.querySelector (".hero .main-image")
var aos_hero_title = document.querySelector (".hero .title")
var aos_hero_cta = document.querySelector (".hero .wrapper-cta")

var aos_about_text = document.querySelector (".about-us .grid .text")
var aos_about_gallery = document.querySelector (".about-us .grid .gallery")

var aos_tours_card1 = document.querySelector (".tours .cards .card:nth-child(1)")
var aos_tours_card2 = document.querySelector (".tours .cards .card:nth-child(2)")
var aos_tours_card3 = document.querySelector (".tours .cards .card:nth-child(3)")

var aos_choose_bubble1 = document.querySelector (".choose-us .bubbles .bubble:nth-child(1)")
var aos_choose_bubble2 = document.querySelector (".choose-us .bubbles .bubble:nth-child(2)")
var aos_choose_bubble3 = document.querySelector (".choose-us .bubbles .bubble:nth-child(3)")

var aos_reviws_cards = document.querySelector (".wrapper-reviws .reviws .wrapper-card")
var aos_reviws_phone = document.querySelector (".wrapper-reviws .reviws .phone")

var aos_questions_dot_no = document.querySelector (".wrapper-questions .questions .dots .dot.no")
var aos_questions_dot_yes = document.querySelector (".wrapper-questions .questions .dots .dot.yes")
var aos_questions_cta = document.querySelector (".wrapper-questions .wrapper-cta")

var aos_form_name = document.querySelector ('form input[type="text"]')
var aos_form_phone = document.querySelector ('form input[type="number"]')
var aos_form_submit = document.querySelector ('form .wrapper-submit')



if (window.matchMedia("(max-width: 1250px)").matches) {
    aos_menu_tours.setAttribute("data-aos-delay", "200")
    aos_menu_guides.setAttribute("data-aos-delay", "500")
    aos_menu_reviews.setAttribute("data-aos-delay", "600")
    aos_menu_contact.setAttribute("data-aos-delay", "700")
    
    aos_hero_image.setAttribute("data-aos-delay", "0")
    aos_hero_title.setAttribute("data-aos-delay", "0")
    aos_hero_cta.setAttribute("data-aos-delay", "0")
    
    aos_about_text.setAttribute("data-aos-delay", "0")
    aos_about_gallery.setAttribute("data-aos-delay", "0")
    
    aos_tours_card1.setAttribute("data-aos-delay", "0")
    aos_tours_card2.setAttribute("data-aos-delay", "500")
    aos_tours_card3.setAttribute("data-aos-delay", "1000")
    
    aos_choose_bubble1.setAttribute("data-aos-delay", "0")
    aos_choose_bubble2.setAttribute("data-aos-delay", "500")
    aos_choose_bubble3.setAttribute("data-aos-delay", "1000")
    
    aos_reviws_cards.setAttribute("data-aos-delay", "0")
    aos_reviws_phone.setAttribute("data-aos-delay", "500")
    
    aos_questions_dot_yes.setAttribute("data-aos-delay", "0")
    aos_questions_dot_no.setAttribute("data-aos-delay", "500")
    aos_questions_cta.setAttribute("data-aos-delay", "1000")
    
    aos_form_name.setAttribute("data-aos-delay", "0")
    aos_form_phone.setAttribute("data-aos-delay", "500")
    aos_form_submit.setAttribute("data-aos-delay", "1000")
    
} 

if (window.matchMedia("(max-width: 900px)").matches) {
    aos_tours_card1.setAttribute("data-aos-delay", "0")
    aos_tours_card2.setAttribute("data-aos-delay", "0")
    aos_tours_card3.setAttribute("data-aos-delay", "0")
    
    aos_tours_card1.setAttribute("data-aos", "fade-up")
    aos_tours_card2.setAttribute("data-aos", "fade-up")
    aos_tours_card3.setAttribute("data-aos", "fade-up")
    
    aos_hero_title.setAttribute("data-aos", "fade-down")
    aos_hero_cta.setAttribute("data-aos", "fade-up")
    
    aos_about_text.setAttribute("data-aos", "fade-down")
    aos_about_gallery.setAttribute("data-aos", "fade-up")
    
    aos_questions_dot_no.setAttribute("data-aos", "fade-down")
    aos_questions_dot_yes.setAttribute("data-aos", "fade-down")
    
    aos_form_name.setAttribute("data-aos", "fade-down")
    aos_form_phone.setAttribute("data-aos", "fade-down")
    aos_form_submit.setAttribute("data-aos", "fade-down")
} 

if (window.matchMedia("(max-width: 680px)").matches) {
    aos_menu_tours.removeAttribute ("data-aos")
    aos_menu_guides.removeAttribute ("data-aos")
    aos_menu_reviews.removeAttribute ("data-aos")
    aos_menu_contact.removeAttribute ("data-aos")

    aos_hero_title.removeAttribute ("data-aos")
    aos_hero_image.removeAttribute ("data-aos")


} 

if (window.matchMedia("(max-width: 450px)").matches) {
    aos_questions_cta.setAttribute("data-aos-delay", "0")
}
