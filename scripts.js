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
    document.getElementById("container").textContent = '';
    let gridSize = prompt("How many squares per side?");
    for (g = 1; g < (gridSize * gridSize) + 1; g++) {
        const div = document.createElement("div");
        div.id = "squares";
        container.appendChild(div);
    }

    const highlight = document.querySelectorAll("#squares");

    highlight.forEach(el => el.addEventListener("mouseover", function(){
        (this).classList.add("active");
    }));

})