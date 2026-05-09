const words = [
    "Software Developer",
    "C++ Programmer",
    "Python Developer",
    "Full-Stack Web Developer"
];

const typewriter = document.getElementById("typewriter");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type(){

    const current = words[wordIndex];

    if(!deleting){

        typewriter.textContent =
        current.substring(0,charIndex++);

    }

    else{

        typewriter.textContent =
        current.substring(0,charIndex--);

    }

    let speed = deleting ? 40 : 80;

    if(!deleting && charIndex === current.length+1){

        deleting=true;
        speed=1200;

    }

    if(deleting && charIndex===0){

        deleting=false;
        wordIndex=(wordIndex+1)%words.length;
        speed=300;

    }

    setTimeout(type,speed);

}

type();



const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click",()=>{

    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");

});



document.querySelectorAll(".mobile-menu a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");

    });

});



window.addEventListener("scroll",()=>{

    if(scrollY>40){

        nav.classList.add("scrolled");

    }

    else{

        nav.classList.remove("scrolled");

    }

});



const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top =
        section.offsetTop-150;

        if(scrollY>=top){

            current=
            section.getAttribute("id");

        }

    });


    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#"+current
        ){

            link.classList.add("active");

        }

    });

});



const reveal =
document.querySelectorAll(
".project-card,.certificate-card,.stack-group,.step,.exp-card,.edu-card"
);

const observer =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
                "visible"
            );

        }

    });

},{
    threshold:.15
});

reveal.forEach(el=>{

    observer.observe(el);

});



const form =
document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

    const inputs =
    form.querySelectorAll(
        "input,textarea"
    );

    let valid=true;

    inputs.forEach(input=>{

        if(
            input.value.trim()===""
        ){

            valid=false;

        }

    });

    if(!valid){

        e.preventDefault();

        form.classList.add(
            "shake"
        );

        setTimeout(()=>{

            form.classList.remove(
                "shake"
            );

        },500);

    }

});

}
