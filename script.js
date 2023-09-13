console.log(window.innerWidth)
if (window.innerWidth <= 600){
    
    if (window.location.href === "unsupported.html"){
        ;
    }else {
        window.location.href = "unsupported.html";
    }};
    

const wrapper = document.getElementById("tiles");

const createTile = index => {
    const tile = document.createElement("div");

    tile.classList.add("tile");

    return tile;
};

const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    })
};


const createGrid= () => {
    wrapper.innerHTML = "";

    let columns = Math.floor(document.body.clientWidth / 40),
        rows = Math.floor(document.body.clientHeight / 40);

    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);
    createTiles(columns * rows);
};
createGrid()
window.onresize = () => createGrid();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        }else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden", ".hidden2");
hiddenElements.forEach((el) => observer.observe(el));

const rocket = document.getElementById("rocket");

window.addEventListener('load', function(){
    rocket.classList.add("animation");
});

const menu = document.getElementById("menu");
const menu_last = document.getElementById("menu-last");
let isOpen = false;

menu.addEventListener("mouseover", () => {
    if (isOpen === false){
        menu.style.transform = "translate(12vw, 0)";
        menu_last.style.opacity = 1;
        isOpen = true;
    }
});
menu.addEventListener("mouseout", () => {
        menu.style.transform = "translate(12vw, -50vh)";
        menu_last.style.opacity =0;
        isOpen = false;

});

const me = document.getElementById("me");

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    console.log(value)
    me.style.right = value + "px";
})

const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);

document.getElementById('date-container').textContent = formattedDate;

const wrench = document.getElementById("wrench");

window.addEventListener('load', function(){
    wrench.classList.add("animation2");
    this.setTimeout(() => {wrench.classList.remove("animation2"); }, 1800);
});
window.addEventListener('click', function(){
    wrench.classList.add("animation2");
    this.setTimeout(() => {wrench.classList.remove("animation2"); }, 1800);
});
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


document.getElementById("hacker").onmouseover = event => {
    let iterations = 0;
    
    const interval = setInterval(() =>{
        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
            if(index < iterations ) {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random()* 26)]})
            .join("");
            if (iterations >= event.target.dataset.value.length) clearInterval(interval);

            iterations += 1/3;
        },30);
};

