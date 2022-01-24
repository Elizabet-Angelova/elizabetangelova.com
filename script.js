
let fade = document.getElementsByClassName('fade-out')[0];
setTimeout(() => {
fade.style.display = 'none';
}, 2600)

let burger = document.getElementsByClassName('burger')[0];
let closeMenu = document.getElementsByClassName('close-icon-mobile')[0];
let menu = document.getElementsByClassName('nav-items')[0]
let menuOpen = false;

burger.addEventListener('click', () => {
menuOpen = !menuOpen;
burger.style.display = 'none';
closeMenu.style.display = 'block';
menu.style.display = 'block';
menu.classList.add('show-nav')
if (menu.classList.toString().includes('hide-nav')) {
menu.classList.remove('hide-nav')
}
})

closeMenu.addEventListener('click', () => {
menuOpen = !menuOpen;
burger.style.display = 'block';
closeMenu.style.display = 'none';
menu.classList.add('hide-nav')
setTimeout(() => {
menu.style.display = 'none';
}, 700)
if (menu.classList.toString().includes('show-nav')) {
    menu.classList.remove('show-nav')
    }
})

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

    if (menuOpen) {
        menuOpen = !menuOpen;
    burger.style.display = 'block';
closeMenu.style.display = 'none';
menu.classList.add('hide-nav')
setTimeout(() => {
menu.style.display = 'none';
}, 700)
if (menu.classList.toString().includes('show-nav')) {
    menu.classList.remove('show-nav')
    }
}
})

button.addEventListener('click',() => {
   
    portfolio_section.scrollIntoView({ 
        behavior: 'smooth' 
    });
    if (menuOpen) {
        menuOpen = !menuOpen;
        burger.style.display = 'block';
    closeMenu.style.display = 'none';
    menu.classList.add('hide-nav')
    setTimeout(() => {
    menu.style.display = 'none';
    }, 700)
    if (menu.classList.toString().includes('show-nav')) {
        menu.classList.remove('show-nav')
        }
    }
})

about_nav.addEventListener('click',() => {
   
    about_section.scrollIntoView({ 
        behavior: 'smooth' 
    });
    if (menuOpen) {
        menuOpen = !menuOpen;
        burger.style.display = 'block';
    closeMenu.style.display = 'none';
    menu.classList.add('hide-nav')
    setTimeout(() => {
    menu.style.display = 'none';
    }, 700)
    if (menu.classList.toString().includes('show-nav')) {
        menu.classList.remove('show-nav')
        }
    }
})

dev_nav.addEventListener('click',() => {
   
    dev_section.scrollIntoView({ 
        behavior: 'smooth' 
    });
    if (menuOpen) {
        menuOpen = !menuOpen;
        burger.style.display = 'block';
    closeMenu.style.display = 'none';
    menu.classList.add('hide-nav')
    setTimeout(() => {
    menu.style.display = 'none';
    }, 700)
    if (menu.classList.toString().includes('show-nav')) {
        menu.classList.remove('show-nav')
        }
    }
})

contacts_nav.addEventListener('click',() => {
   
    contacts_section.scrollIntoView({ 
        behavior: 'smooth' 
    });
    if (menuOpen) {
        menuOpen = !menuOpen;
        burger.style.display = 'block';
    closeMenu.style.display = 'none';
    menu.classList.add('hide-nav')
    setTimeout(() => {
    menu.style.display = 'none';
    }, 700)
    if (menu.classList.toString().includes('show-nav')) {
        menu.classList.remove('show-nav')
        }
    }
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

let mp = document.getElementsByClassName('mp')[0];
let close_mp = document.getElementsByClassName('close-mp')[0];
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

mp.addEventListener('click', () => {
    document.getElementsByClassName('mp-case')[0].style.display = 'flex';
    document.getElementsByClassName('landing-section')[0].scrollIntoView({ 
        behavior: 'auto' 
    });
    
})
close_mp.addEventListener('click', () => {
    document.getElementsByClassName('mp-case')[0].style.display = 'none';
    document.getElementsByClassName('mp1')[0].scrollIntoView({ 
        behavior: 'auto' 
    });
})

easy.addEventListener('click', () => {
    document.getElementsByClassName('easy-case')[0].style.display = 'flex';
    document.getElementsByClassName('landing-section')[0].scrollIntoView({ 
        behavior: 'auto' 
    });
    
})

close_easy.addEventListener('click', () => {
    document.getElementsByClassName('easy-case')[0].style.display = 'none';
    document.getElementsByClassName('easy1')[0].scrollIntoView({ 
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
    document.getElementsByClassName('prekrasna1')[0].scrollIntoView({ 
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
    document.getElementsByClassName('arpha1')[0].scrollIntoView({ 
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
    document.getElementsByClassName('bindexis1')[0].scrollIntoView({ 
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
    document.getElementsByClassName('bs1')[0].scrollIntoView({ 
        behavior: 'auto' 
    });
})

let dev_loc = dev_section.getBoundingClientRect().top + window.scrollY;
window.addEventListener("scroll", ()=> {
if (window.scrollY >= 3500) {
    document.getElementsByClassName('dev')[0].classList.add('slide-left')
}
})

