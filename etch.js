let gridContainer = document.querySelector("#gridContainer"); 
gridContainer.textContent= "bananas";

function gridCreate(dimensions){ 
    document.getElementById("gridContainer").innerHTML="";
    paddingPerSquare = ((600 * 1.0)/ dimensions); 

    for(let i = 0; i < dimensions; i++){ 
        const rowGridContainer = document.createElement("div"); 
        rowGridContainer.classList = "gridRowContainer"; 
        gridContainer.append(rowGridContainer);

        for(let i = 0; i < dimensions; i++){ 
            const square = document.createElement("div");
            square.classList = "squareInGrid";
            square.style.width = paddingPerSquare + "px"; 
            square.style.height = paddingPerSquare + "px";
            rowGridContainer.appendChild(square); 
            square.addEventListener("mouseover", (e) => { 
                square.style.background = "black";
            })
        }
    }
}

function dimensionsPrompt(){ 
    let gridSize = prompt("Please enter a grid size under 100");
    if(gridSize === "" ||  gridSize === null){ 
        return;
    }
    if(gridSize > 100 || gridSize < 1){ 
        alert("You have entered an invalid value. Please enter a value over 1 and under 100");
        dimensionsPrompt();
    } 
    if(gridSize) { 
        return gridCreate(gridSize);
    } 
    else { 
        return;
    }
}

//Execute this when button clicked
const gridSizeButton = document.querySelector("#gridSizeButton");
gridSizeButton.addEventListener("click", (e) => { 
    dimensionsPrompt();
})

gridCreate(40);