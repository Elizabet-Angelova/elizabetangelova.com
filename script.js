
let fade = document.getElementsByClassName('fade-out')[0];
setTimeout(() => {
fade.style.display = 'none';
}, 2600)

let portfolio_nav = document.getElementsByClassName('PORTFOLIO')[0];
let about_nav = document.getElementsByClassName('ABOUT')[0];
let dev_nav = document.getElementsByClassName('DEV')[0];
let contacts_nav = document.getElementsByClassName('CONTACTS')[0];
let button = document.getElementsByClassName('button')[0];
let logo = document.getElementsByClassName('logo-img')[0];


let portfolio_section = document.getElementsByClassName('portfolio-section')[0];
let about_section = document.getElementsByClassName('about-me-section')[0];
let dev_section = document.getElementsByClassName('dev-background-section')[0];
let contacts_section = document.getElementsByClassName('contacts-section')[0];

logo.addEventListener('click',() => {
    document.getElementsByClassName('landing-section')[0].scrollIntoView({ 
        behavior: 'smooth' 
    });
})

portfolio_nav.addEventListener('click',() => {
   
    portfolio_section.scrollIntoView({ 
        behavior: 'smooth' 
    });
})

button.addEventListener('click',() => {
   
    portfolio_section.scrollIntoView({ 
        behavior: 'smooth' 
    });
})

about_nav.addEventListener('click',() => {
   
    about_section.scrollIntoView({ 
        behavior: 'smooth' 
    });
})

dev_nav.addEventListener('click',() => {
   
    dev_section.scrollIntoView({ 
        behavior: 'smooth' 
    });
})

contacts_nav.addEventListener('click',() => {
   
    contacts_section.scrollIntoView({ 
        behavior: 'smooth' 
    });
})

let gh = document.getElementsByClassName('gh')[0];
let linked = document.getElementsByClassName('in')[0];
let fb = document.getElementsByClassName('fb')[0];

let gh1 = document.getElementsByClassName('gh')[1];
let linked1 = document.getElementsByClassName('in')[1];
let fb1 = document.getElementsByClassName('fb')[1];

gh.addEventListener('click', () => {
    window.open('https://github.com/Elizabet-Angelova', '_blank');
})
linked.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/elizabet-angelova-2912641b6/', '_blank');
})
fb.addEventListener('click', () => {
    window.open('https://www.facebook.com/elizabet.angelova.31/', '_blank');
})
gh1.addEventListener('click', () => {
    window.open('https://github.com/Elizabet-Angelova', '_blank');
})
linked1.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/elizabet-angelova-2912641b6/', '_blank');
})
fb1.addEventListener('click', () => {
    window.open('https://www.facebook.com/elizabet.angelova.31/', '_blank');
})

let easy = document.getElementsByClassName('easy')[0];
let close_easy = document.getElementsByClassName('close-easy')[0];
let prekrasna = document.getElementsByClassName('prekrasna')[0];
let close_prekrasna = document.getElementsByClassName('close-prekrasna')[0];
let arpha = document.getElementsByClassName('arpha')[0];
let close_arpha = document.getElementsByClassName('close-arpha')[0];
let bindexis = document.getElementsByClassName('bindexis')[0];
let close_bindexis = document.getElementsByClassName('close-bindexis')[0];
let bs = document.getElementsByClassName('bs')[0];
let close_bs = document.getElementsByClassName('close-bs')[0];


easy.addEventListener('click', () => {
    document.getElementsByClassName('easy-case')[0].style.display = 'flex';
    document.getElementsByClassName('landing-section')[0].scrollIntoView({ 
        behavior: 'auto' 
    });
})

close_easy.addEventListener('click', () => {
    document.getElementsByClassName('easy-case')[0].style.display = 'none';
    easy.scrollIntoView({ 
        behavior: 'auto' 
    });
})

prekrasna.addEventListener('click', () => {
    document.getElementsByClassName('prekrasna-case')[0].style.display = 'flex';
    document.getElementsByClassName('landing-section')[0].scrollIntoView({ 
        behavior: 'auto' 
    });
})

close_prekrasna.addEventListener('click', () => {
    document.getElementsByClassName('prekrasna-case')[0].style.display = 'none';
    prekrasna.scrollIntoView({ 
        behavior: 'auto' 
    });
})

arpha.addEventListener('click', () => {
    document.getElementsByClassName('arpha-case')[0].style.display = 'flex';
    document.getElementsByClassName('landing-section')[0].scrollIntoView({ 
        behavior: 'auto' 
    });
})

close_arpha.addEventListener('click', () => {
    document.getElementsByClassName('arpha-case')[0].style.display = 'none';
    arpha.scrollIntoView({ 
        behavior: 'auto' 
    });
})

bindexis.addEventListener('click', () => {
    document.getElementsByClassName('bindexis-case')[0].style.display = 'flex';
    document.getElementsByClassName('landing-section')[0].scrollIntoView({ 
        behavior: 'auto' 
    });
})

close_bindexis.addEventListener('click', () => {
    document.getElementsByClassName('bindexis-case')[0].style.display = 'none';
    bindexis.scrollIntoView({ 
        behavior: 'auto' 
    });
})

bs.addEventListener('click', () => {
    document.getElementsByClassName('bs-case')[0].style.display = 'flex';
    document.getElementsByClassName('landing-section')[0].scrollIntoView({ 
        behavior: 'auto' 
    });
})

close_bs.addEventListener('click', () => {
    document.getElementsByClassName('bs-case')[0].style.display = 'none';
    bs.scrollIntoView({ 
        behavior: 'auto' 
    });
})