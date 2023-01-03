let gridContainer = document.querySelector("#gridContainer"); 
gridContainer.textContent= "bananas";

function gridSize(dimensions){ 
    paddingPerSquare = 960 / dimensions; 
    
for(let i = 0; i < 16; i++){ 
    const rowGridContainer = document.createElement("div"); 
    rowGridContainer.classList = "gridRowContainer"; 
    gridContainer.append(rowGridContainer);
    for(let i = 0; i < 16; i++){ 
        const square = document.createElement("div");
        square.classList = "squareInGrid";
        rowGridContainer.appendChild(square);  
        square.addEventListener("mouseover", (e) => { 
            square.style.background = "blue";
        })
    }
}
}
