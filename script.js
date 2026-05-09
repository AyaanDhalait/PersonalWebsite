const words = [
    "Software Developer",
    "C++ Programmer",
    "Python Builder",
    "Future Computer Scientist",
    "System Thinker"
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

const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<60;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
dx:(Math.random()-0.5)*0.5,
dy:(Math.random()-0.5)*0.5
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);

for(let p of particles){
p.x += p.dx;
p.y += p.dy;

if(p.x<0||p.x>canvas.width)p.dx*=-1;
if(p.y<0||p.y>canvas.height)p.dy*=-1;

ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle="rgba(255,106,0,0.3)";
ctx.fill();
}

requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize",()=>{
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
});

window.addEventListener("scroll", () => {
document.body.style.backgroundPositionY = scrollY * 0.2 + "px";
});

window.addEventListener("scroll", () => {
document.body.style.backgroundPositionY = scrollY * 0.2 + "px";
});

const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

let mx=0,my=0,cx=0,cy=0;

document.addEventListener("mousemove", e=>{
mx = e.clientX;
my = e.clientY;
});

function animateCursor(){
cx += (mx-cx)*0.12;
cy += (my-cy)*0.12;

cursor.style.left = cx + "px";
cursor.style.top = cy + "px";

dot.style.left = mx + "px";
dot.style.top = my + "px";

requestAnimationFrame(animateCursor);
}

animateCursor();

const about = document.querySelector(".about-card");

if(about){
document.addEventListener("mousemove",(e)=>{
const r = about.getBoundingClientRect();

const x = (e.clientX - r.left) / r.width;
const y = (e.clientY - r.top) / r.height;

about.style.transform = `
perspective(1000px)
rotateX(${(y-0.5)*6}deg)
rotateY(${(x-0.5)*-6}deg)
translateY(-5px)
`;
});
}