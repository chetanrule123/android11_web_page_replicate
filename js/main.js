let landing_buttons = document.getElementById("landing_buttons");
let banner_buttons = document.getElementById("banner_buttons");
let talks = document.getElementById("talks");
let stayInLoop = document.getElementById("stayInLoop");
let learnMore = document.getElementById("learnMore");
var button;
var card;

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
function createTalk(url, href, titleText) {
    let talk = document.createElement('div');
    Object.assign(talk,{
        className: "talk"
    })
    let img_wrap = document.createElement('a')
    Object.assign(img_wrap,{
        className: "img_wrap",
        href: href
    })
    let img = document.createElement('img');
    Object.assign(img,{
        src: url
    })
    let talk_content = document.createElement('div');
    Object.assign(talk_content,{
        className:"talk_content"
    });
    let youtube = document.createElement('p');
    youtube.innerText="YOUTUBE"
    Object.assign(youtube,{
        className: "youtube"
    });
    let title = document.createElement('a');
    title.innerText=titleText
    Object.assign(title,{
        className: "talk_title",
        href: href
    });

    //append elements to talk
    img_wrap.appendChild(img);
    talk_content.append(youtube,title);
    talk.append(img_wrap,talk_content);

    //append talk to talks
    talks.appendChild(talk);
}

function createCard(image_url, href, sub_title, title_text, desc_text, button_text) {
    card = document.createElement('div');
    Object.assign(card,{
        className: "card box_shadow"
    });
    let img_wrap = document.createElement('a')
    Object.assign(img_wrap,{
        className: "card_img_wrap center",
        href: href
    });
    let img = document.createElement('img');
    Object.assign(img,{
        src: image_url
    });
    let text = document.createElement('p');
    text.innerText=sub_title;
    let title = document.createElement('a');
    Object.assign(title,{
        href: href,
        className: "cardTitle"
    });
    title.innerText=title_text;
    let desc = document.createElement('p');
    Object.assign(desc,{
        className: "cardDesc"
    });
    desc.innerText=desc_text;
    buttonElemet(button_text,href);
    button.classList.add('card_button');
    img_wrap.appendChild(img);
    card.append(img_wrap, text, title, desc, button);
}
function createStayInLoopCard(image_url, href, sub_title, title_text, desc_text, button_text) {
    createCard(image_url, href, sub_title, title_text, desc_text, button_text);
    stayInLoop.appendChild(card)
}
function createLearnMoreCard(image_url, href, sub_title, title_text, desc_text, button_text) {
    createCard(image_url, href, sub_title, title_text, desc_text, button_text);
    learnMore.appendChild(card)
}