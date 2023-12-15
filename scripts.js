const container = document.querySelector('#container');

for (i = 1; i < 257; i++) {
    const div = document.createElement("div");
    div.id = "squares";
    container.appendChild(div);
}

const highlight = document.querySelectorAll("#squares");

highlight.forEach(el => el.addEventListener("mouseover", function(){
    (this).classList.add("active");
}));

const btn = document.querySelector(".btn");

btn.addEventListener("click", function(){
    prompt("How many squares per side?");


})