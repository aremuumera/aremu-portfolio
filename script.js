const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const logo = document.querySelector('.logo');
const  lightMode = document.getElementById('light-mode');
const myName = document.getElementById('myName');
const allElement = document.querySelectorAll('*');
const svg = document.getElementsByTagName('li');
const allSVGPaths = document.querySelectorAll(' path');
const navContainer = document.querySelector('.nav-container');


openMenu.onclick = () => {
    if (openMenu.style.display = 'block'){
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    displayNav();
    }else {
        return false;
    }
}

closeMenu.onclick =  () => {
if(closeMenu.style.display = 'block'){
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
    displayNav();
} else{
    return false;
}
}


    
lightMode.onclick = () => {
    if(document.body.classList.toggle('light')){
        lightMode.src = './moon.png';
        openMenu.style.color = 'black';
        closeMenu.style.color = 'black';

        allElement.forEach(element => {
            element.style.color = 'black';
            
        });
        allSVGPaths.forEach(path =>{
            path.style.fill = 'black';
        });    
    }else{
        lightMode.src = './sun.png';
        openMenu.style.color = 'white';
        closeMenu.style.color = 'white';
        
        allElement.forEach(element => {
            element.style.color = 'white';
        });
        allSVGPaths.forEach(path =>{
            path.style.fill = 'white';
        });
        
    }    
}   

                // typing animation
            
    const typed = new Typed ('#element', {
        strings: ['Farouk Akinsanya', 'a Frontend Developer'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        startDelay: 1200,
        backDelay: 1000,
    });

const contactContent = new Typed ('#contactContent', {
        strings: ['Curious about what lies ahead?', 'Together, we can turn ideas into reality.'],
        typeSpeed: 30,
        backSpeed: 30,
        loop: true,
        // startDelay: 1200,
        // backDelay: 1000,
    });

    const displayNav = () => {
        if (window.innerWidth <= 1028) {
            if (openMenu.style.display == 'none') {
                navContainer.classList.add('open');
                navContainer.style.background = windows.body.classList.contains('dark')? 'black' : 'white';;  
            } else if (openMenu.style.display == 'block') {
                navContainer.classList.remove('open');
                navContainer.style.background = windows.body.classList.contains('light')? 'white' : 'black';;
            }
        } else {
            return false;
        }
    }
    
//     const displayNavColor = () => {
//         const bodyBackgroundColor = window.getComputedStyle(document.body).backgroundColor;
    
//         if (window.innerWidth <= 1028 && bodyBackgroundColor === '#fff') {
//             navContainer.style.background = 'white';
//         } else {
//             return false;
//         }
//     };



   
   const anim = document.querySelectorAll(".anim");
    observer = new IntersectionObserver ((entries) =>{
    entries.forEach(entry => {
        console.log(entries);
        if (entry.intersectionRatio > 0){
           entry.target.style.animation = `fade-in-left 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) ${entry.target.dataset.delay} both`; 
           entry.target.style.animation = `fade-in-left 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) ${entry.target.dataset.delay} both`; 
        }
        else{
            entry.target.style.removeProperty('animation');
        }
    })
});
anim.forEach(ani =>{
    observer.observe(ani);
});

const nima = document.querySelectorAll(".nima");
nimaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry =>{
        if (entry.intersectionRatio > 0){
            entry.target.style.animation = `fade-in-right 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) ${entry.target.dataset.delay} both`
        }else {
            entry.target.style.removeProperty('animation');
        }
    })
}); //

nima.forEach(nia =>{
    nimaObserver.observe(nia);
})

const mina = document.querySelectorAll(".mina");
minaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry =>{
        if (entry.intersectionRatio > 0){
            entry.target.style.animation = `fade-in-bottom 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) ${entry.target.dataset.delay} both`
        }else {
            entry.target.style.removeProperty('animation');
        }
    })
}); //

mina.forEach(nia =>{
    minaObserver.observe(nia);
})

const imna = document.querySelectorAll(".imna");
imnaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry =>{
        if (entry.intersectionRatio > 0){
            entry.target.style.animation = `slide-in-fwd-bottom 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) ${entry.target.dataset.delay} both`
        }else {
            entry.target.style.removeProperty('animation');
        }
    })
}); //

imna.forEach(nia =>{
    minaObserver.observe(nia);
})


document.addEventListener('DOMContentLoaded', function() {
   
const xixa = document.querySelectorAll(".xixa");
xixaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry =>{
        if (entry.isIntersecting){
            entry.target.style.animation = `fade-in-bottom 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) ${entry.target.dataset.delay} both`
        }else {
            entry.target.style.removeProperty('animation');
        }
    })
}); //

xixa.forEach(nia =>{
    minaObserver.observe(nia);
})
});





const navLinks = document.querySelectorAll('.nav-container ul li a');
let activeLink = document.querySelector('.active');
let allLink = null;

navLinks.forEach(navLink => {
  navLink.addEventListener('click', (event) => { 

    // Check if the clicked link is already the all link
    if (navLink === allLink) {
      return;
    }

    // Remove the style from the previously active link
    if (allLink) {
      allLink.classList.remove('active');
      activeLink.classList.add('active');
    }

    // Set the style for the clicked link
    navLink.classList.add('active');
    activeLink.classList.remove('active');

    // Update the activeLink variable
    activeLink = navLink;
  });
});
                        // horizontal scroll

    document.addEventListener('DOMContentLoaded', function () {
                        gsap.registerPlugin(ScrollTrigger);
                        

   const horizontalSections = gsap.utils.toArray('.horizontal')

    horizontalSections.forEach(function (sec, i) {	
  
  var thisPinWrap = sec.querySelector('.pin-wrap');
  var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
  
function refresh() {
    pinWrapWidth = thisAnimWrap.scrollWidth;
    horizontalScrollLength = pinWrapWidth - window.innerWidth;
  }

  refresh();

 let scrollTween = gsap.to(thisAnimWrap, {  
    ease: "none",
    scrollTrigger: {
        scrub: true,
        trigger: sec,
        pin: sec,
        start: "center center",
        end: () => `+=${pinWrapWidth}`,
        invalidateOnRefresh: true
      },
      x: () => -horizontalScrollLength,
      ease: "none"
    });
    window.addEventListener('resize', function () {
        refresh();
        scrollTween.scrollTrigger.update();
      });
      
    });

    })

    


