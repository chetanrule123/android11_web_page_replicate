let landing_buttons = document.getElementById("landing_buttons");
let banner_buttons = document.getElementById("banner_buttons");
let talks = document.getElementById("talks");
var button;

//creates buttons
function buttonElemet(text, url){
    button = document.createElement("a");
    button.innerText=text;
    Object.assign(button,{
        href: url,
        className:"buttons box_shadow"
    });
}
function createLandingButton(text, url){
    buttonElemet(text, url)
    landing_buttons.appendChild(button);
}
function createBannerButton(text, url){
    buttonElemet(text, url)
    banner_buttons.appendChild(button);
}

//creates talk
function createTalk(params) {
    let talk = document.createElement('div');
    let text = document.createElement('p');
    let title = document.createElement('a');
}