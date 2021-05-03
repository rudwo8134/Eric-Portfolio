'use strict';

// make navbar

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height
document.addEventListener('scroll', ()=>{
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
})


//handle background for home. home slowly fade to transparent as the windows scrolls down
const home = document.querySelector('.home_container');
const homeheight = home.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    home.style.opacity=1- window.scrollY/homeheight
})


// handle scrolling when tapping on the navbar meni

const navbarMenu = document.querySelector('.navbar_menu')
navbarMenu.addEventListener('click',(event)=>{
    const target = event.target;
    const link = target.dataset.link;
    if(link==null){
        return;
    }
    navbarMenu.classList.remove('open')
    scrollintoview(link)

})


//navbar toggle button for small screen
const navbartogglebtn = document.querySelector('.navbar__toggle-btn');const navbar_menu = document.querySelector('.navbar_menu')
navbartogglebtn.addEventListener('click',()=>{
    console.dir(navbarMenu)
   navbarMenu.classList.toggle('open')
})

//handle click on "contact me" button on home
const button = document.querySelector('.home_contact')
button.addEventListener('click', ()=>{
   scrollintoview('#contact')
})


//show arrow button when scrolling down

const arrowUp = document.querySelector('.arrowup')
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeheight/2){
        arrowUp.classList.add('visible')
    }else{
        arrowUp.classList.remove('visible')
    }
})

//handle click on the "arrow up " button
arrowUp.addEventListener("click",()=>{
    scrollintoview('.home')
})



//projects
const workBtnContainer = document.querySelector('.work_categories')
const projectContainer = document.querySelector('.work__projects')
const projects = document.querySelectorAll('.project')

workBtnContainer.addEventListener('click',(e)=>{
    const filter =e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }
    //remove selection from the previous item to new one
    const active =document.querySelector('.category__btn.active')
    active.classList.remove('active')
    const target = e.target.nodeName === 'BUTTON' ? e.target: e.target.parentNode;
    target.classList.add('active')

    projectContainer.classList.add('anim-out')
    setTimeout(()=>{
        projects.forEach((project) => {
            console.log(project.dataset.type)
            if(filter === 'all'|| filter === project.dataset.type){
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible')
            }
        });
        projectContainer.classList.remove('anim-out')
    },300)
});

function scrollintoview(id){
    const scrollTo = document.querySelector(id);
    scrollTo.scrollIntoView({behavior:'smooth'});
}

var docWidth = document.documentElement.offsetWidth;
