containerDiv = document.querySelector(".container");
btn = document.querySelector("button");
let numSquares = 16;
btn.addEventListener("click", ()=> {
    let userNum = parseInt(prompt("How Many Number of Squares Per Side? (LIMIT: 100)"));
    numSquares = userNum < 100 || !isNaN(userNum) ? userNum : numSquares;
    containerDiv.innerHTML = "";
    buildGrid(numSquares);
})

function buildGrid(numSquares) {
    for (let row = 1; row <= numSquares; row++) {
        for (let col = 1; col <= numSquares; col++) {

            const div = document.createElement("div");
            div.className = "square";
            div.textContent = "";
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = "green";
                setTimeout(() => {
                    div.style.backgroundColor = "";
                }, 450);
            })
            containerDiv.appendChild(div);

        }
    }
}

buildGrid(numSquares)

